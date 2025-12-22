-- Supabase SQL schéma pro Kauza TJ Krupka
-- Graph-first model pro knowledge graph

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Hlavní tabulka uzlů (nodes)
CREATE TABLE IF NOT EXISTS nodes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  type TEXT NOT NULL CHECK (type IN ('event', 'person', 'org', 'document', 'topic', 'claim', 'question', 'insight')),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  summary TEXT,
  content TEXT,
  status TEXT CHECK (status IN ('proven', 'claimed', 'disputed', 'unknown')),
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index pro rychlé vyhledávání
CREATE INDEX idx_nodes_type ON nodes(type);
CREATE INDEX idx_nodes_slug ON nodes(slug);
CREATE INDEX idx_nodes_created_at ON nodes(created_at DESC);

-- Tabulka vazeb mezi uzly (edges)
CREATE TABLE IF NOT EXISTS edges (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  source_id UUID NOT NULL REFERENCES nodes(id) ON DELETE CASCADE,
  target_id UUID NOT NULL REFERENCES nodes(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN ('participated', 'influenced', 'caused', 'supports', 'contradicts', 'related', 'referenced', 'documented')),
  label TEXT,
  weight REAL DEFAULT 1.0,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(source_id, target_id, type)
);

-- Indexy pro edges
CREATE INDEX idx_edges_source ON edges(source_id);
CREATE INDEX idx_edges_target ON edges(target_id);
CREATE INDEX idx_edges_type ON edges(type);

-- Metadata pro události (timeline)
CREATE TABLE IF NOT EXISTS event_meta (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  event_id UUID NOT NULL REFERENCES nodes(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  date_end DATE,
  date_precision TEXT CHECK (date_precision IN ('exact', 'month', 'year')) DEFAULT 'exact',
  location TEXT,
  phase TEXT,
  importance INTEGER CHECK (importance >= 1 AND importance <= 5) DEFAULT 3,
  icon TEXT,
  UNIQUE(event_id)
);

CREATE INDEX idx_event_meta_date ON event_meta(date);
CREATE INDEX idx_event_meta_phase ON event_meta(phase);

-- Tagy
CREATE TABLE IF NOT EXISTS tags (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT UNIQUE NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  color TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_tags_slug ON tags(slug);

-- Vazba mezi uzly a tagy
CREATE TABLE IF NOT EXISTS node_tags (
  node_id UUID NOT NULL REFERENCES nodes(id) ON DELETE CASCADE,
  tag_id UUID NOT NULL REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (node_id, tag_id)
);

CREATE INDEX idx_node_tags_node ON node_tags(node_id);
CREATE INDEX idx_node_tags_tag ON node_tags(tag_id);

-- Tvrzení/Mýty
CREATE TABLE IF NOT EXISTS claims (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  node_id UUID NOT NULL REFERENCES nodes(id) ON DELETE CASCADE,
  claim_text TEXT NOT NULL,
  reality TEXT,
  is_myth BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(node_id)
);

-- Evidence/Citace z dokumentů
CREATE TABLE IF NOT EXISTS evidence (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  document_id UUID NOT NULL REFERENCES nodes(id) ON DELETE CASCADE,
  quote TEXT NOT NULL,
  context TEXT,
  page INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_evidence_document ON evidence(document_id);

-- Média (soubory)
CREATE TABLE IF NOT EXISTS media (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  node_id UUID REFERENCES nodes(id) ON DELETE CASCADE,
  file_name TEXT NOT NULL,
  file_path TEXT NOT NULL,
  file_type TEXT,
  file_size INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_media_node ON media(node_id);

-- Insight Cards (pointy)
CREATE TABLE IF NOT EXISTS insights (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  summary_line TEXT NOT NULL,
  what_promised TEXT,
  what_happened TEXT,
  what_followed TEXT,
  key_point TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_insights_slug ON insights(slug);

-- Vazba insight -> nodes
CREATE TABLE IF NOT EXISTS insight_nodes (
  insight_id UUID NOT NULL REFERENCES insights(id) ON DELETE CASCADE,
  node_id UUID NOT NULL REFERENCES nodes(id) ON DELETE CASCADE,
  PRIMARY KEY (insight_id, node_id)
);

-- Vazba insight -> evidence
CREATE TABLE IF NOT EXISTS insight_evidence (
  insight_id UUID NOT NULL REFERENCES insights(id) ON DELETE CASCADE,
  evidence_id UUID NOT NULL REFERENCES evidence(id) ON DELETE CASCADE,
  PRIMARY KEY (insight_id, evidence_id)
);

-- Finanční data
CREATE TABLE IF NOT EXISTS financial_data (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  description TEXT NOT NULL,
  amount NUMERIC(12, 2) NOT NULL,
  currency TEXT DEFAULT 'CZK',
  date DATE,
  related_node_id UUID REFERENCES nodes(id) ON DELETE SET NULL,
  category TEXT CHECK (category IN ('dluh', 'škoda', 'příspěvek', 'náklad')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_financial_node ON financial_data(related_node_id);
CREATE INDEX idx_financial_category ON financial_data(category);

-- Časové fáze kauzy
CREATE TABLE IF NOT EXISTS phases (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE,
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_phases_slug ON phases(slug);

-- Vazba fáze -> události
CREATE TABLE IF NOT EXISTS phase_events (
  phase_id UUID NOT NULL REFERENCES phases(id) ON DELETE CASCADE,
  event_id UUID NOT NULL REFERENCES nodes(id) ON DELETE CASCADE,
  PRIMARY KEY (phase_id, event_id)
);

-- Funkce pro automatickou aktualizaci updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggery pro updated_at
CREATE TRIGGER update_nodes_updated_at BEFORE UPDATE ON nodes
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_insights_updated_at BEFORE UPDATE ON insights
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) - veřejné čtení
ALTER TABLE nodes ENABLE ROW LEVEL SECURITY;
ALTER TABLE edges ENABLE ROW LEVEL SECURITY;
ALTER TABLE event_meta ENABLE ROW LEVEL SECURITY;
ALTER TABLE tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE node_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE claims ENABLE ROW LEVEL SECURITY;
ALTER TABLE evidence ENABLE ROW LEVEL SECURITY;
ALTER TABLE media ENABLE ROW LEVEL SECURITY;
ALTER TABLE insights ENABLE ROW LEVEL SECURITY;
ALTER TABLE insight_nodes ENABLE ROW LEVEL SECURITY;
ALTER TABLE insight_evidence ENABLE ROW LEVEL SECURITY;
ALTER TABLE financial_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE phases ENABLE ROW LEVEL SECURITY;
ALTER TABLE phase_events ENABLE ROW LEVEL SECURITY;

-- Policy pro veřejné čtení všech dat
CREATE POLICY "Public read access" ON nodes FOR SELECT USING (true);
CREATE POLICY "Public read access" ON edges FOR SELECT USING (true);
CREATE POLICY "Public read access" ON event_meta FOR SELECT USING (true);
CREATE POLICY "Public read access" ON tags FOR SELECT USING (true);
CREATE POLICY "Public read access" ON node_tags FOR SELECT USING (true);
CREATE POLICY "Public read access" ON claims FOR SELECT USING (true);
CREATE POLICY "Public read access" ON evidence FOR SELECT USING (true);
CREATE POLICY "Public read access" ON media FOR SELECT USING (true);
CREATE POLICY "Public read access" ON insights FOR SELECT USING (true);
CREATE POLICY "Public read access" ON insight_nodes FOR SELECT USING (true);
CREATE POLICY "Public read access" ON insight_evidence FOR SELECT USING (true);
CREATE POLICY "Public read access" ON financial_data FOR SELECT USING (true);
CREATE POLICY "Public read access" ON phases FOR SELECT USING (true);
CREATE POLICY "Public read access" ON phase_events FOR SELECT USING (true);
