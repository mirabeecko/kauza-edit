// Hlavní typy pro aplikaci Kauza TJ Krupka

export type NodeType =
  | 'event'      // Událost
  | 'person'     // Osoba/Aktér
  | 'org'        // Organizace
  | 'document'   // Dokument
  | 'topic'      // Téma
  | 'claim'      // Tvrzení/Mýtus
  | 'question'   // Otázka
  | 'insight';   // Pointa/Shrnutí

export type EdgeType =
  | 'participated'  // Účast (osoba na události)
  | 'influenced'    // Vliv
  | 'caused'        // Příčina
  | 'supports'      // Podpora
  | 'contradicts'   // Rozpor
  | 'related'       // Související
  | 'referenced'    // Odkaz
  | 'documented';   // Dokumentováno

export type FactStatus =
  | 'proven'       // Prokázáno
  | 'claimed'      // Tvrzeno
  | 'disputed'     // Sporné
  | 'unknown';     // Neznámo

// Základní uzel (Node)
export interface Node {
  id: string;
  type: NodeType;
  title: string;
  slug: string;
  summary?: string;
  content?: string;
  status?: FactStatus;
  created_at: string;
  updated_at: string;
  metadata?: Record<string, any>;
}

// Vazba mezi uzly (Edge)
export interface Edge {
  id: string;
  source_id: string;
  target_id: string;
  type: EdgeType;
  label?: string;
  weight?: number;
  metadata?: Record<string, any>;
  created_at: string;
}

// Událost
export interface Event extends Node {
  type: 'event';
  date: string;
  date_end?: string;
  location?: string;
  participants?: string[];  // IDs osob
  consequences?: string[];   // IDs následků
  documents?: string[];      // IDs dokumentů
}

// Osoba/Aktér
export interface Person extends Node {
  type: 'person';
  role?: string;
  organization?: string;
  events?: string[];  // IDs událostí
  actions?: string[]; // Popis jednání
}

// Organizace
export interface Organization extends Node {
  type: 'org';
  ico?: string;
  representatives?: string[];  // IDs osob
}

// Dokument
export interface Document extends Node {
  type: 'document';
  document_type?: 'email' | 'letter' | 'court' | 'contract' | 'other';
  date?: string;
  author?: string;
  url?: string;
  file_path?: string;
}

// Téma
export interface Topic extends Node {
  type: 'topic';
  category?: string;
  related_events?: string[];
  related_persons?: string[];
  key_questions?: string[];
}

// Tvrzení/Mýtus
export interface Claim extends Node {
  type: 'claim';
  claim_text: string;
  reality?: string;
  is_myth?: boolean;
  evidence_for?: string[];   // IDs důkazů
  evidence_against?: string[]; // IDs protidůkazů
}

// Otázka
export interface Question extends Node {
  type: 'question';
  question_text: string;
  why_important?: string;
  what_we_know?: string;
  what_we_dont_know?: string;
  legal_context?: string;
  related_events?: string[];
  related_documents?: string[];
}

// Evidence/Citace
export interface Evidence {
  id: string;
  document_id: string;
  quote: string;
  context?: string;
  page?: number;
  created_at: string;
}

// Insight Card (Pointa)
export interface Insight {
  id: string;
  title: string;
  slug: string;
  summary_line: string;
  what_promised?: string;
  what_happened?: string;
  what_followed?: string;
  key_point: string;
  related_nodes: string[];   // IDs souvisejících uzlů
  evidence_ids: string[];     // IDs citací/důkazů
  created_at: string;
  updated_at: string;
}

// Metadata pro timeline
export interface EventMeta {
  event_id: string;
  date: string;
  date_precision: 'exact' | 'month' | 'year';
  phase?: string;
  importance?: 1 | 2 | 3 | 4 | 5;
  icon?: string;
}

// Tag
export interface Tag {
  id: string;
  name: string;
  slug: string;
  color?: string;
}

// Vazba mezi uzlem a tagem
export interface NodeTag {
  node_id: string;
  tag_id: string;
}

// Finanční údaje
export interface FinancialData {
  id: string;
  description: string;
  amount: number;
  currency: string;
  date?: string;
  related_node_id?: string;
  category?: 'dluh' | 'škoda' | 'příspěvek' | 'náklad';
}

// Časová fáze kauzy
export interface Phase {
  id: string;
  name: string;
  slug: string;
  start_date: string;
  end_date?: string;
  description: string;
  key_events: string[];  // IDs událostí
}
