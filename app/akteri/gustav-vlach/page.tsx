export default function GustavVlachPage() {
  const actor = {
    name: 'Gustav Vlach',
    role: 'Předseda lyžařského oddílu',
    department: 'Lyžařský oddíl',
    departmentIcon: '⛷️',
    status: 'negative' as const,
    totalDamage: 1041378,
    membershipStatus: 'Zánik členství neplacením příspěvků',
    summary: 'Celková škoda lyžařského oddílu: 1.041.378 Kč. Nedodal seznamy členů. Přiznal hotovost 132.523 Kč v pokladně, kterou nepředal.',
    breakdown: [
      {
        label: 'Zapřené oddílové příspěvky',
        amount: 379200,
        description: '79 členů × 1.200 Kč/rok × 4 roky (2020-2023). Vybíral příspěvky členů oddílu, ale spolku je neodvedl.',
        severity: 'critical' as const,
      },
      {
        label: 'Nezaplacené energie',
        amount: 256455,
        description: 'Elektřina za období 2020-2023. Oddíl používal prostory, ale energie neplatil. Nejvyšší dluh ze všech oddílů.',
        severity: 'critical' as const,
      },
      {
        label: 'Pokladna oddílu k 31.12.2020',
        amount: 132523,
        description: 'Hotovost v pokladně oddílu k 31.12.2020. Vlach existenci hotovosti PŘIZNAL, ale nikdy ji nepředal.',
        severity: 'high' as const,
      },
      {
        label: 'Nezaplacené členské příspěvky',
        amount: 63200,
        description: '79 členů × 200 Kč/rok × 4 roky (2021-2024). Úhrada svazům ČSTV, Ústeckému kraji, obci.',
        severity: 'high' as const,
      },
    ],
    keyActions: [
      { text: 'Nedodal seznamy členů', date: '2021-2024', type: 'violation' },
      { text: 'Zapíral oddílové příspěvky', amount: 379200, date: '2020-2023', type: 'violation' },
      { text: 'Neplatil energie (nejvyšší dluh)', amount: 256455, date: '2020-2023', type: 'violation' },
      { text: 'Přiznal pokladnu, kterou nepředal', amount: 132523, date: '31.12.2020', type: 'violation' },
      { text: 'Neuhradil členské příspěvky', amount: 63200, date: '2021-2024', type: 'violation' },
      { text: 'Zánik členství neplacením příspěvků', date: '2024', type: 'consequence' },
    ],
    criticalFacts: [
      {
        icon: '🚨',
        title: 'Přiznaná hotovost',
        description: 'Gustav Vlach v komunikaci se spolkem PŘIZNAL existenci hotovosti 132.523 Kč v pokladně oddílu k 31.12.2020. Tuto částku však nikdy nepředal.',
        severity: 'critical' as const,
      },
      {
        icon: '⚡',
        title: 'Nejvyšší dluh za energie',
        description: 'Lyžařský oddíl má ze všech oddílů nejvyšší dluh za energie: 256.455 Kč. Spolek musel tyto náklady pokrýt ze svého rozpočtu.',
        severity: 'high' as const,
      },
      {
        icon: '📋',
        title: 'Nedodané seznamy členů',
        description: 'Přes opakované výzvy nikdy nedodal aktualizované seznamy členů, což znemožnilo kontrolu hospodaření oddílu.',
        severity: 'high' as const,
      },
    ],
    relatedLinks: [
      { label: 'Události s účastí Vlacha', href: '/udalosti?actor=gustav-vlach', icon: '📅' },
      { label: 'Finanční přehled', href: '/cisla', icon: '💰' },
      { label: 'Téma: Finance a majetek', href: '/temata/finance-a-majetek', icon: '📚' },
      { label: 'Téma: Členství a evidence', href: '/temata/clenstvi-a-evidence', icon: '📋' },
      { label: 'Otázka: Kdo koho poškodil?', href: '/otazky/kdo-koho-poskodil', icon: '❓' },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 py-16">
        <div className="container mx-auto px-8 max-w-5xl">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-white text-sm font-medium">
                  {actor.departmentIcon} {actor.department}
                </span>
                <span className="px-3 py-1 bg-purple-900/50 backdrop-blur rounded-full text-white text-sm font-bold">
                  ⛔ {actor.membershipStatus}
                </span>
              </div>
              <h1 className="text-5xl font-black text-white mb-3">
                {actor.name}
              </h1>
              <p className="text-xl text-blue-100 font-medium">
                {actor.role}
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur border-2 border-white/30 rounded-2xl p-8 mt-8">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-blue-100 text-sm font-medium mb-2">Celková způsobená škoda</div>
                <div className="text-5xl font-black text-white">
                  {actor.totalDamage.toLocaleString('cs-CZ')} Kč
                </div>
                <div className="mt-4 px-4 py-2 bg-red-500/30 backdrop-blur rounded-lg border border-red-300">
                  <span className="text-sm text-white font-bold">🏆 Nejvyšší škoda ze všech oddílů</span>
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
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-blue-200">
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
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-700 transition-all duration-500"
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

        {/* Další porušení povinností */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            ⚠️ Další porušení povinností
          </h2>
          <div className="bg-red-50 rounded-xl border-2 border-red-300 p-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-red-200">
                <span className="text-2xl flex-shrink-0">🎿</span>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Odmítl předat průkazy technické způsobilosti</h3>
                  <p className="text-sm text-slate-700">
                    Bez průkazů technické způsobilosti <strong>nelze provozovat lyžařské vleky</strong>.
                    Vlach odmítl tyto kritické dokumenty předat, čímž fakticky znemožnil provoz areálu.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-red-200">
                <span className="text-2xl flex-shrink-0">📋</span>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Nepředal žádné dokumenty k areálu</h3>
                  <p className="text-sm text-slate-700">
                    Odmítl předat veškerou dokumentaci týkající se lyžařského areálu, včetně smluv,
                    provozních dokumentů a dalších materiálů nezbytných pro řádný provoz.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-red-200">
                <span className="text-2xl flex-shrink-0">⚙️</span>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Technické listy k vlekům</h3>
                  <p className="text-sm text-slate-700">
                    Nepředal technické listy k lyžařským vlekům, které jsou nutné pro jejich
                    bezpečný provoz a údržbu.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-red-200">
                <span className="text-2xl flex-shrink-0">✅</span>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Poslední revize</h3>
                  <p className="text-sm text-slate-700">
                    Nepředal dokumentaci o posledních provedených revizích zařízení,
                    což je zásadní pro splnění bezpečnostních a právních požadavků provozu.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-red-100 border-l-4 border-red-600 rounded">
              <p className="text-sm text-red-900 font-semibold">
                <strong>Důsledek:</strong> Zadržování těchto dokumentů fakticky znemožnilo pokračování
                v provozu lyžařského areálu a způsobilo další finanční ztráty spolku.
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

        {/* Porovnání s ostatními oddíly */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            📊 Srovnání škod oddílů
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-slate-200">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-red-100 border-2 border-red-400 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">⛷️</span>
                  <div>
                    <div className="font-bold text-slate-900">Lyžařský oddíl (Vlach)</div>
                    <div className="text-sm text-slate-600">Nejvyšší škoda</div>
                  </div>
                </div>
                <div className="text-xl font-black text-red-700">{(1041378).toLocaleString('cs-CZ')} Kč</div>
              </div>

              <div className="flex items-center justify-between p-4 bg-orange-50 border border-orange-300 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🏓</span>
                  <div>
                    <div className="font-bold text-slate-900">Stolní tenis (Vaniš, Pivoňka)</div>
                    <div className="text-sm text-slate-600">Druhá nejvyšší</div>
                  </div>
                </div>
                <div className="text-xl font-black text-orange-700">{(653659).toLocaleString('cs-CZ')} Kč</div>
              </div>

              <div className="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-300 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🥋</span>
                  <div>
                    <div className="font-bold text-slate-900">Karate (Kulík)</div>
                    <div className="text-sm text-slate-600">Třetí nejvyšší</div>
                  </div>
                </div>
                <div className="text-xl font-black text-yellow-700">{(350598).toLocaleString('cs-CZ')} Kč</div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t-2 border-slate-200">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900">Celková škoda všech oddílů</span>
                <span className="text-xl font-black text-slate-900">{(2045635).toLocaleString('cs-CZ')} Kč</span>
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
            href="/akteri/jaromir-pivonka"
            className="flex items-center gap-2 px-6 py-3 bg-slate-200 hover:bg-slate-300 rounded-lg font-bold text-slate-900 transition"
          >
            <span>←</span>
            <span>Jaromír Pivoňka</span>
          </a>
          <a
            href="/akteri/martin-kulik"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold text-white transition"
          >
            <span>Martin Kulík</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
