'use client';

interface RelatedNode {
  id: string;
  type: string;
  title: string;
  slug: string;
}

interface RightPanelProps {
  relatedNodes?: RelatedNode[];
  currentNodeTitle?: string;
}

export default function RightPanel({ relatedNodes = [], currentNodeTitle }: RightPanelProps) {
  return (
    <aside className="w-80 bg-slate-50 border-l border-slate-200 h-full overflow-y-auto">
      <div className="p-4">
        <h3 className="text-sm font-semibold text-slate-600 uppercase mb-4">
          Kontext
        </h3>

        {currentNodeTitle && (
          <div className="mb-6 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <div className="text-xs text-blue-600 font-semibold mb-1">
              Právě čtete
            </div>
            <div className="text-sm font-medium text-blue-900">
              {currentNodeTitle}
            </div>
          </div>
        )}

        {relatedNodes.length > 0 ? (
          <>
            <h4 className="text-sm font-medium text-slate-700 mb-3">
              Související uzly
            </h4>
            <div className="space-y-2">
              {relatedNodes.map((node) => (
                <a
                  key={node.id}
                  href={`/${node.type}/${node.slug}`}
                  className="block p-3 bg-white rounded-lg border border-slate-200 hover:border-blue-400 hover:shadow-sm transition"
                >
                  <div className="text-xs text-slate-500 mb-1">
                    {getNodeTypeLabel(node.type)}
                  </div>
                  <div className="text-sm font-medium text-slate-900">
                    {node.title}
                  </div>
                </a>
              ))}
            </div>
          </>
        ) : (
          <div className="text-sm text-slate-500 italic">
            Vyberte uzel pro zobrazení souvislostí
          </div>
        )}

        <div className="mt-8">
          <h4 className="text-sm font-medium text-slate-700 mb-3">
            Možnosti zobrazení
          </h4>
          <div className="space-y-2 text-sm">
            <button className="w-full px-3 py-2 text-left bg-white rounded border border-slate-200 hover:bg-slate-50 transition">
              📊 Zobrazit v grafu
            </button>
            <button className="w-full px-3 py-2 text-left bg-white rounded border border-slate-200 hover:bg-slate-50 transition">
              ⏱️ Zobrazit na timeline
            </button>
            <button className="w-full px-3 py-2 text-left bg-white rounded border border-slate-200 hover:bg-slate-50 transition">
              🔗 Zobrazit všechny vazby
            </button>
          </div>
        </div>

        <div className="mt-8 p-4 bg-amber-50 rounded-lg border border-amber-200">
          <div className="text-xs text-amber-700 font-semibold mb-2">
            💡 TIP
          </div>
          <div className="text-sm text-amber-900">
            Klikejte na odkazy v textu pro prozkoumání souvislostí. Každý uzel je propojen s dalšími.
          </div>
        </div>
      </div>
    </aside>
  );
}

function getNodeTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    event: 'Událost',
    person: 'Osoba',
    org: 'Organizace',
    document: 'Dokument',
    topic: 'Téma',
    claim: 'Tvrzení',
    question: 'Otázka',
    insight: 'Pointa',
  };
  return labels[type] || type;
}
