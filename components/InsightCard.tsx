interface InsightCardProps {
  title: string;
  slug: string;
  icon: string;
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
  icon,
  summaryLine,
  whatPromised,
  whatHappened,
  whatFollowed,
  keyPoint,
  relatedNodes = 0,
  evidenceCount = 0,
}: InsightCardProps) {
  return (
    <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border-2 border-purple-300 shadow-md min-h-[600px] flex flex-col">
      {/* Hlavička */}
      <div className="mb-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="text-4xl">{icon}</div>
          <div className="inline-block px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full">
            💡 POINTA
          </div>
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
        <div className="space-y-3 mb-4 flex-grow">
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

      {/* Klíčová pointa - zvýrazněná */}
      <div className="p-5 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg border-3 border-amber-500 shadow-lg mb-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="text-2xl">🎯</div>
          <div className="text-sm font-black text-amber-900 uppercase tracking-wide">
            Pointa
          </div>
        </div>
        <p className="text-base font-bold text-amber-950 leading-relaxed">
          {keyPoint}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-purple-700 pt-3 border-t border-purple-200">
        <div className="flex items-center space-x-3">
          {relatedNodes > 0 && (
            <span>🔗 {relatedNodes} uzlů</span>
          )}
          {evidenceCount > 0 && (
            <span>📎 {evidenceCount} důkazů</span>
          )}
        </div>
      </div>
    </div>
  );
}
