import Link from 'next/link';

interface InsightCardProps {
  title: string;
  slug: string;
  summaryLine: string;
  whatPromised?: string;
  whatHappened?: string;
  whatFollowed?: string;
  keyPoint: string;
  relatedNodes?: number;
  evidenceCount?: number;
}

export default function InsightCard({
  title,
  slug,
  summaryLine,
  whatPromised,
  whatHappened,
  whatFollowed,
  keyPoint,
  relatedNodes = 0,
  evidenceCount = 0,
}: InsightCardProps) {
  return (
    <Link href={`/pointy/${slug}`}>
      <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border-2 border-purple-300 hover:border-purple-500 hover:shadow-xl transition">
        {/* Hlavička */}
        <div className="mb-4">
          <div className="inline-block px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full mb-3">
            💡 POINTA
          </div>
          <h3 className="text-2xl font-bold text-purple-900 mb-2">
            {title}
          </h3>
          <p className="text-purple-700 font-medium">
            {summaryLine}
          </p>
        </div>

        {/* Tři sekce */}
        {(whatPromised || whatHappened || whatFollowed) && (
          <div className="space-y-3 mb-4">
            {whatPromised && (
              <div className="p-3 bg-white/70 rounded border border-purple-200">
                <div className="text-xs font-semibold text-purple-600 mb-1">
                  📝 Co bylo slíbeno
                </div>
                <p className="text-sm text-slate-800">{whatPromised}</p>
              </div>
            )}
            {whatHappened && (
              <div className="p-3 bg-white/70 rounded border border-purple-200">
                <div className="text-xs font-semibold text-purple-600 mb-1">
                  ⚠️ Co se stalo
                </div>
                <p className="text-sm text-slate-800">{whatHappened}</p>
              </div>
            )}
            {whatFollowed && (
              <div className="p-3 bg-white/70 rounded border border-purple-200">
                <div className="text-xs font-semibold text-purple-600 mb-1">
                  ➡️ Jaký krok následoval
                </div>
                <p className="text-sm text-slate-800">{whatFollowed}</p>
              </div>
            )}
          </div>
        )}

        {/* Klíčová pointa */}
        <div className="p-4 bg-amber-50 rounded-lg border-2 border-amber-400 mb-4">
          <div className="text-xs font-bold text-amber-800 uppercase mb-1">
            🎯 Pointa
          </div>
          <p className="text-sm font-semibold text-amber-900">
            {keyPoint}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-purple-700">
          <div className="flex items-center space-x-3">
            {relatedNodes > 0 && (
              <span>🔗 {relatedNodes} souvisejících uzlů</span>
            )}
            {evidenceCount > 0 && (
              <span>📎 {evidenceCount} důkazů</span>
            )}
          </div>
          <span className="font-medium">Detail →</span>
        </div>
      </div>
    </Link>
  );
}
