export default function MartinKulikPage() {
  const actor = {
    name: 'Martin Kulík',
    role: 'Údajný předseda oddílu karate',
    department: 'Oddíl karate',
    departmentIcon: '🥋',
    status: 'negative' as const,
    totalDamage: 350598,
    membershipStatus: 'Zánik členství neplacením příspěvků',
    summary: 'Celková škoda oddílu karate: 350.598 Kč. Nikdy nebyl předsedou oddílu karate (dle zápisu byl předsedou Jiří Kulík). Nedodal seznamy členů.',
    breakdown: [
      {
        label: 'Zapřené oddílové příspěvky',
        amount: 316800,
        description: '40 členů × 3.600 Kč/rok (období 2020-2023). Vybíral příspěvky členů oddílu, ale spolku je neodvedl.',
        severity: 'critical' as const,
      },
      {
        label: 'Nezaplacené členské příspěvky',
        amount: 32000,
        description: '40 členů × 200 Kč/rok × 4 roky (2021-2024). Úhrada svazům ČSTV, Ústeckému kraji, obci.',
        severity: 'high' as const,
      },
      {
        label: 'Pokladna oddílu k 31.12.2020',
        amount: 1798,
        description: 'Hotovost v pokladně oddílu k 31.12.2020 nebyla předána ani vyúčtována.',
        severity: 'medium' as const,
      },
    ],
    keyActions: [
      { text: 'Nedodal seznamy členů', date: '2021-2024', type: 'violation' },
      { text: 'Zapíral oddílové příspěvky', amount: 316800, date: '2020-2023', type: 'violation' },
      { text: 'Neuhradil členské příspěvky', amount: 32000, date: '2021-2024', type: 'violation' },
      { text: 'Pokladna oddílu nebyla předána', amount: 1798, date: '31.12.2020', type: 'violation' },
      { text: 'Zánik členství neplacením příspěvků', date: '2024', type: 'consequence' },
    ],
    criticalFacts: [
      {
        icon: '❓',
        title: 'Sporná legitimita funkce',
        description: 'Martin Kulík se označoval za předsedu oddílu karate, avšak podle oficiálního zápisu byl předsedou oddílu Jiří Kulík. Legitimita funkce Martina Kulíka nebyla prokázána.',
        severity: 'critical',
      },
      {
        icon: '📋',
        title: 'Nedodané seznamy členů',
        description: 'Přes opakované výzvy nikdy nedodal aktualizované seznamy členů, což znemožnilo kontrolu hospodaření oddílu a ověření členství.',
        severity: 'high',
      },
      {
        icon: '💰',
        title: 'Vysoké oddílové příspěvky',
        description: 'Oddíl karate měl nejvyšší roční příspěvek na člena (3.600 Kč/rok), celkem zapřel příspěvky ve výši 316.800 Kč.',
        severity: 'high',
      },
    ],
    relatedLinks: [
      { label: 'Události s účastí Kulíka', href: '/udalosti?actor=martin-kulik', icon: '📅' },
      { label: 'Finanční přehled', href: '/cisla', icon: '💰' },
      { label: 'Téma: Finance a majetek', href: '/temata/finance-a-majetek', icon: '📚' },
      { label: 'Téma: Členství a evidence', href: '/temata/clenstvi-a-evidence', icon: '📋' },
      { label: 'Pointa: Legitimita funkcí', href: '/pointy/legitimita-funkci', icon: '💡' },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800 py-16">
        <div className="container mx-auto px-8 max-w-5xl">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-white text-sm font-medium">
                  {actor.departmentIcon} {actor.department}
                </span>
                <span className="px-3 py-1 bg-teal-900/50 backdrop-blur rounded-full text-white text-sm font-bold">
                  ⛔ {actor.membershipStatus}
                </span>
              </div>
              <h1 className="text-5xl font-black text-white mb-3">
                {actor.name}
              </h1>
              <p className="text-xl text-green-100 font-medium">
                {actor.role}
              </p>
              <div className="mt-3 px-4 py-2 bg-yellow-500/30 backdrop-blur rounded-lg border border-yellow-300 inline-block">
                <span className="text-sm text-white font-bold">⚠️ Sporná legitimita funkce</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur border-2 border-white/30 rounded-2xl p-8 mt-8">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-green-100 text-sm font-medium mb-2">Celková způsobená škoda</div>
                <div className="text-5xl font-black text-white">
                  {actor.totalDamage.toLocaleString('cs-CZ')} Kč
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
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-green-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span>📋</span>
              <span>Shrnutí</span>
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              {actor.summary}
            </p>
          </div>
        </section>

        {/* Kritická fakta */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            🚨 Kritická fakta
          </h2>
          <div className="grid gap-4">
            {actor.criticalFacts.map((fact, index) => {
              const severityColors = {
                critical: 'bg-red-50 border-red-400',
                high: 'bg-orange-50 border-orange-400',
                medium: 'bg-yellow-50 border-yellow-400',
              };

              return (
                <div
                  key={index}
                  className={`p-6 rounded-xl border-2 ${severityColors[fact.severity]} transition hover:shadow-lg`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{fact.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{fact.title}</h3>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {fact.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Otázka legitimity */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl border-2 border-yellow-400 p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <span className="text-5xl">⚠️</span>
              <div>
                <h2 className="text-2xl font-bold text-amber-900 mb-3">Otázka legitimity funkce</h2>
                <div className="space-y-3 text-slate-700">
                  <p className="leading-relaxed">
                    <strong>Martin Kulík</strong> se označoval jako <strong>předseda oddílu karate</strong> a vystupoval
                    v této roli, avšak podle oficiálního zápisu byl předsedou oddílu <strong>Jiří Kulík</strong>.
                  </p>
                  <p className="leading-relaxed">
                    Martin Kulík nikdy nedoložil zápis ze schůze, která by potvrzovala jeho legitimní zvolení do funkce předsedy.
                  </p>
                  <div className="mt-4 p-4 bg-white/70 rounded-lg border border-amber-300">
                    <div className="font-bold text-amber-900 mb-2">Důsledky</div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span>Všechna jeho rozhodnutí jako předsedy mohou být zpochybněna</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span>Legitimita vybírání příspěvků je nejasná</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span>Právo jednat jménem oddílu nebylo prokázáno</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rozpad škody */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            💰 Detailní rozpad škody
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
                      className="h-full bg-gradient-to-r from-green-500 to-teal-700 transition-all duration-500"
                      style={{ width: `${(item.amount / actor.totalDamage) * 100}%` }}
                    />
                  </div>
                  <div className="text-xs text-slate-600 mt-1 text-right">
                    {((item.amount / actor.totalDamage) * 100).toFixed(1)}% z celkové škody
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 p-6 bg-slate-900 text-white rounded-xl">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">CELKOVÁ ŠKODA</span>
              <span className="text-3xl font-black">{actor.totalDamage.toLocaleString('cs-CZ')} Kč</span>
            </div>
          </div>
        </section>

        {/* Srovnání příspěvků */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            📊 Srovnání ročních příspěvků oddílů
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-slate-200">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-green-100 border-2 border-green-400 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🥋</span>
                  <div>
                    <div className="font-bold text-slate-900">Oddíl karate</div>
                    <div className="text-sm text-slate-600">Nejvyšší příspěvek</div>
                  </div>
                </div>
                <div className="text-2xl font-black text-green-700">3.600 Kč/člen/rok</div>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-300 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🏓</span>
                  <div className="font-bold text-slate-900">Stolní tenis</div>
                </div>
                <div className="text-xl font-bold text-slate-700">2.400 Kč/člen/rok</div>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-300 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">⛷️</span>
                  <div className="font-bold text-slate-900">Lyžařský oddíl</div>
                </div>
                <div className="text-xl font-bold text-slate-700">1.200 Kč/člen/rok</div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-900">
                <strong>Poznámka:</strong> Oddíl karate měl nejvyšší roční příspěvek na člena, přesto příspěvky
                nebyly odváděny spolku. Celkem bylo zapřeno <strong>316.800 Kč</strong>.
              </p>
            </div>
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
                      : 'bg-red-50 border-red-300'
                  }`}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center font-bold text-sm text-slate-600">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-slate-900">{action.text}</div>
                    {action.amount && (
                      <div className="text-lg font-bold text-red-700 mt-1">
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
            href="/akteri/gustav-vlach"
            className="flex items-center gap-2 px-6 py-3 bg-slate-200 hover:bg-slate-300 rounded-lg font-bold text-slate-900 transition"
          >
            <span>←</span>
            <span>Gustav Vlach</span>
          </a>
          <a
            href="/akteri/jitka-illesova"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold text-white transition"
          >
            <span>Jitka Illéšová</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
