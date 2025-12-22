export default function JaromirPivonkaPage() {
  const actor = {
    name: 'Jaromír Pivoňka',
    role: 'Člen/funkcionář oddílu stolního tenisu',
    department: 'Stolní tenis',
    departmentIcon: '🏓',
    status: 'negative' as const,
    collectiveDamage: 653659,
    individualResponsibility: 'Spolupodíl na celkové škodě oddílu stolního tenisu',
    summary: 'Spolupracovník Marka Vaniše. Spolupodílel se na škodě oddílu stolního tenisu ve výši 653.659 Kč. Nedostatečná iniciativa k nápravě.',
    breakdown: [
      {
        label: 'Spoluúčast na zapírání oddílových příspěvků',
        amount: 518400,
        description: 'Spolupráce s Vanišem na vybírání příspěvků bez jejich předání spolku. 60 členů × 2.400 Kč/rok × 3,6 roku.',
        severity: 'critical' as const,
        type: 'collective' as const,
      },
      {
        label: 'Spolupodíl na neplacení energií',
        amount: 43466,
        description: 'Spoluodpovědnost za neplacené náklady na provoz. Elektřina 10.415 Kč + plyn 33.051 Kč (2020-2023).',
        severity: 'high' as const,
        type: 'collective' as const,
      },
      {
        label: 'Pokladna oddílu k 31.12.2020',
        amount: 43793,
        description: 'Hotovost v pokladně oddílu k 31.12.2020 nebyla předána ani vyúčtována.',
        severity: 'medium' as const,
        type: 'individual' as const,
      },
      {
        label: 'Nezaplacené členské příspěvky',
        amount: 28800,
        description: 'Členské příspěvky za období 2021-2024. Úhrada svazům ČSTV, Ústeckému kraji, obci.',
        severity: 'medium' as const,
        type: 'individual' as const,
      },
    ],
    keyActions: [
      { text: 'Spolupráce s Vanišem na porušování povinností', date: '2020-2023', type: 'violation' },
      { text: 'Spoluúčast na zapírání oddílových příspěvků', amount: 518400, date: '2020-2024', type: 'violation' },
      { text: 'Spolupodíl na neplacení energií', amount: 43466, date: '2020-2023', type: 'violation' },
      { text: 'Nedostatečná iniciativa k nápravě škod', date: '2021-2023', type: 'violation' },
      { text: 'Vyloučen z členství', date: '28.11.2023', type: 'consequence' },
    ],
    predzalobniVyzva: {
      date: '14.11.2023',
      recipient: 'Jaromír Pivoňka',
      totalDemanded: 72593,
      items: [
        { label: 'Pokladna oddílu k 31.12.2020', amount: 43793, detail: 'Hotovost v pokladně oddílu' },
        { label: 'Členské příspěvky 2021-2024', amount: 28800, detail: 'Nezaplacené členské příspěvky za 4 roky' },
      ],
      deadline: '8 dnů od doručení',
      note: 'Pivoňka byl spoluodpovědný za celkovou škodu oddílu stolního tenisu (653.659 Kč) společně s Vanišem.',
    },
    relatedLinks: [
      { label: 'Události s účastí Pivoňky', href: '/udalosti?actor=jaromir-pivonka', icon: '📅' },
      { label: 'Marek Vaniš (spolupracovník)', href: '/akteri/marek-vanis', icon: '👤' },
      { label: 'Finanční přehled', href: '/cisla', icon: '💰' },
      { label: 'Téma: Finance a majetek', href: '/temata/finance-a-majetek', icon: '📚' },
      { label: 'Téma: Členství a evidence', href: '/temata/clenstvi-a-evidence', icon: '📋' },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-600 via-orange-700 to-red-800 py-16">
        <div className="container mx-auto px-8 max-w-5xl">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-white text-sm font-medium">
                  {actor.departmentIcon} {actor.department}
                </span>
                <span className="px-3 py-1 bg-orange-900/50 backdrop-blur rounded-full text-white text-sm font-bold">
                  ❌ Vyloučen z členství
                </span>
              </div>
              <h1 className="text-5xl font-black text-white mb-3">
                {actor.name}
              </h1>
              <p className="text-xl text-orange-100 font-medium">
                {actor.role}
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur border-2 border-white/30 rounded-2xl p-8 mt-8">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-orange-100 text-sm font-medium mb-2">Spolupodíl na škodě oddílu</div>
                <div className="text-5xl font-black text-white">
                  {actor.collectiveDamage.toLocaleString('cs-CZ')} Kč
                </div>
                <div className="text-sm text-orange-200 mt-3 italic">
                  {actor.individualResponsibility}
                </div>
              </div>
              <div className="text-8xl opacity-20">
                💸
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 py-12 max-w-5xl">
        {/* Shrnutí */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-orange-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span>📋</span>
              <span>Shrnutí</span>
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              {actor.summary}
            </p>
          </div>
        </section>

        {/* Info box o kolektivní odpovědnosti */}
        <section className="mb-12">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <span className="text-3xl">⚠️</span>
              <div>
                <h3 className="text-lg font-bold text-amber-900 mb-2">Kolektivní odpovědnost</h3>
                <p className="text-sm text-amber-800 leading-relaxed">
                  Jaromír Pivoňka byl členem a funkcionářem oddílu stolního tenisu pod vedením Marka Vaniše.
                  Spolupodílel se na jednání, které způsobilo celkovou škodu <strong>653.659 Kč</strong>.
                  Jeho individuální předžalobní výzva činila <strong>72.593 Kč</strong>, avšak jeho spoluodpovědnost
                  se vztahuje na celou škodu oddílu.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Rozpad odpovědnosti */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            💰 Rozpad odpovědnosti
          </h2>
          <div className="space-y-4">
            {actor.breakdown.map((item, index) => {
              const severityColors = {
                critical: 'border-red-400 bg-red-50',
                high: 'border-orange-400 bg-orange-50',
                medium: 'border-yellow-400 bg-yellow-50',
              };
              const severityLabels = {
                critical: '🔴 Kritické',
                high: '🟠 Vysoké',
                medium: '🟡 Střední',
              };
              const typeLabels = {
                collective: '👥 Kolektivní',
                individual: '👤 Individuální',
              };

              return (
                <div
                  key={index}
                  className={`p-6 rounded-xl border-2 ${severityColors[item.severity]} transition hover:shadow-lg`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-slate-900">{item.label}</h3>
                        <span className="px-2 py-1 bg-white/60 rounded text-xs font-bold text-slate-700">
                          {severityLabels[item.severity]}
                        </span>
                        <span className="px-2 py-1 bg-slate-200 rounded text-xs font-bold text-slate-700">
                          {typeLabels[item.type]}
                        </span>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed mb-3">
                        {item.description}
                      </p>
                    </div>
                    <div className="text-right ml-6">
                      <div className="text-2xl font-black text-slate-900">
                        {item.amount.toLocaleString('cs-CZ')} Kč
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-white/60 rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-500 to-red-600 transition-all duration-500"
                      style={{ width: `${(item.amount / actor.collectiveDamage) * 100}%` }}
                    />
                  </div>
                  <div className="text-xs text-slate-600 mt-1 text-right">
                    {((item.amount / actor.collectiveDamage) * 100).toFixed(1)}% z celkové škody oddílu
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 p-6 bg-slate-900 text-white rounded-xl">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">CELKOVÁ ŠKODA ODDÍLU</span>
              <span className="text-3xl font-black">{actor.collectiveDamage.toLocaleString('cs-CZ')} Kč</span>
            </div>
          </div>
        </section>

        {/* Předžalobní výzva */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            ⚖️ Předžalobní výzva
          </h2>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border-2 border-amber-300 p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">📨</span>
              <div>
                <div className="text-sm text-amber-700 font-medium">Dokument ze dne</div>
                <div className="text-2xl font-bold text-amber-900">{actor.predzalobniVyzva.date}</div>
              </div>
            </div>

            <div className="bg-white/70 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Požadované plnění</h3>
              <div className="space-y-3">
                {actor.predzalobniVyzva.items.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <div>
                      <div className="font-bold text-slate-900">{item.label}</div>
                      <div className="text-sm text-slate-600">{item.detail}</div>
                    </div>
                    <div className="text-2xl font-black text-amber-900">
                      {item.amount.toLocaleString('cs-CZ')} Kč
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t-2 border-amber-300 flex items-center justify-between">
                <span className="text-lg font-bold text-slate-900">Celkem požadováno</span>
                <span className="text-3xl font-black text-amber-900">
                  {actor.predzalobniVyzva.totalDemanded.toLocaleString('cs-CZ')} Kč
                </span>
              </div>
            </div>

            <div className="bg-amber-100 border-l-4 border-amber-500 p-4 rounded">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⏱️</span>
                <div>
                  <div className="font-bold text-amber-900 mb-1">Lhůta k plnění</div>
                  <div className="text-sm text-amber-800">{actor.predzalobniVyzva.deadline}</div>
                </div>
              </div>
            </div>

            {actor.predzalobniVyzva.note && (
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start gap-2">
                  <span className="text-lg">ℹ️</span>
                  <p className="text-sm text-blue-900">
                    <strong>Poznámka:</strong> {actor.predzalobniVyzva.note}
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Klíčové kroky */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            📊 Časová osa klíčových kroků
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-slate-200">
            <div className="space-y-4">
              {actor.keyActions.map((action, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-4 rounded-lg border-2 ${
                    action.type === 'consequence'
                      ? 'bg-blue-50 border-blue-300'
                      : 'bg-orange-50 border-orange-300'
                  }`}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center font-bold text-sm text-slate-600">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-slate-900">{action.text}</div>
                    {action.amount && (
                      <div className="text-lg font-bold text-orange-700 mt-1">
                        {action.amount.toLocaleString('cs-CZ')} Kč
                      </div>
                    )}
                  </div>
                  <div className="text-sm text-slate-600 font-medium whitespace-nowrap">
                    {action.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dokumenty a důkazy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            📄 Dokumenty a důkazy
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 bg-amber-50 rounded-xl border-2 border-amber-300 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <span className="text-4xl">📨</span>
                <div>
                  <h3 className="text-lg font-bold text-amber-900 mb-2">Předžalobní výzva</h3>
                  <p className="text-sm text-amber-800 mb-3">Dokument ze dne 14.11.2023</p>
                  <div className="text-sm text-amber-700 space-y-1">
                    <div>• Požadováno: 72.593 Kč</div>
                    <div>• Pokladna + členské příspěvky</div>
                    <div>• Lhůta: 8 dnů</div>
                  </div>
                  <div className="mt-4">
                    <span className="inline-block px-4 py-2 bg-amber-600 text-white rounded-lg text-sm font-bold hover:bg-amber-700 transition cursor-pointer">
                      📥 Stáhnout PDF
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-blue-50 rounded-xl border-2 border-blue-300 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <span className="text-4xl">⚖️</span>
                <div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">Rozhodnutí o vyloučení</h3>
                  <p className="text-sm text-blue-800 mb-3">Dokument ze dne 28.11.2023</p>
                  <div className="text-sm text-blue-700 space-y-1">
                    <div>• Právní základ: § 239 NOZ</div>
                    <div>• Doručeno datovou schránkou</div>
                    <div>• Spolu s Vanišem</div>
                  </div>
                  <div className="mt-4">
                    <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition cursor-pointer">
                      📥 Stáhnout PDF
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-green-50 rounded-xl border-2 border-green-300 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <span className="text-4xl">📊</span>
                <div>
                  <h3 className="text-lg font-bold text-green-900 mb-2">Finanční výkaz oddílu</h3>
                  <p className="text-sm text-green-800 mb-3">TJ ODDÍLY 2021-2023</p>
                  <div className="text-sm text-green-700 space-y-1">
                    <div>• Spolupodíl na škodě: 653.659 Kč</div>
                    <div>• Oddíl stolního tenisu</div>
                    <div>• Společně s Vanišem</div>
                  </div>
                  <div className="mt-4">
                    <span className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-bold hover:bg-green-700 transition cursor-pointer">
                      📥 Stáhnout PDF
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-purple-50 rounded-xl border-2 border-purple-300 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <span className="text-4xl">🏛️</span>
                <div>
                  <h3 className="text-lg font-bold text-purple-900 mb-2">Zápis ze schůze výboru</h3>
                  <p className="text-sm text-purple-800 mb-3">19.12.2023</p>
                  <div className="text-sm text-purple-700 space-y-1">
                    <div>• Potvrzení vyloučení</div>
                    <div>• Zvolení nového předsedy</div>
                    <div>• Návrat k řádnému fungování</div>
                  </div>
                  <div className="mt-4">
                    <span className="inline-block px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-bold hover:bg-purple-700 transition cursor-pointer">
                      📥 Stáhnout PDF
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Související stránky */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            🔗 Související stránky
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {actor.relatedLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block p-5 bg-white rounded-xl border-2 border-slate-200 hover:border-blue-500 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{link.icon}</span>
                  <span className="font-bold text-slate-900">{link.label}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Navigace */}
        <div className="flex items-center justify-between pt-8 border-t-2 border-slate-200">
          <a
            href="/akteri/marek-vanis"
            className="flex items-center gap-2 px-6 py-3 bg-slate-200 hover:bg-slate-300 rounded-lg font-bold text-slate-900 transition"
          >
            <span>←</span>
            <span>Marek Vaniš</span>
          </a>
          <a
            href="/akteri/gustav-vlach"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold text-white transition"
          >
            <span>Gustav Vlach</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
