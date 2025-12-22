export default function JitkaIllesovaPage() {
  const actor = {
    name: 'Jitka Illéšová',
    role: 'Účetní spolku',
    department: 'Administrativa',
    departmentIcon: '📊',
    status: 'negative' as const,
    financialIssue: 30000,
    summary: 'Obdržela 30.000 Kč za účetnictví roku 2021. Odmítla uzavřít rok 2021, předala dokumenty městu Krupka (neoprávněně), zadržovala účetní dokumentaci.',
    breakdown: [
      {
        label: 'Obdržená odměna za účetnictví 2021',
        amount: 30000,
        description: '6 plateb × 5.000 Kč. Odměna byla vyplacena za vedení účetnictví spolku za rok 2021.',
        severity: 'medium' as const,
        type: 'payment' as const,
      },
    ],
    keyActions: [
      { text: 'Obdržela odměnu za účetnictví 2021', amount: 30000, date: '2021', type: 'payment' as const, detail: '6 plateb × 5.000 Kč' },
      { text: 'Odmítla uzavřít účetnictví roku 2021', date: '2022', type: 'violation', detail: 'Přes opakované výzvy nepředala uzavřené účetnictví' },
      { text: 'Předala dokumenty městu Krupka', date: '2022-2023', type: 'violation', detail: 'Neoprávněně předala účetní dokumentaci třetí straně' },
      { text: 'Zadržovala účetní dokumentaci', date: '2022-2023', type: 'violation', detail: 'Odmítla vrátit dokumenty spolku' },
    ],
    criticalFacts: [
      {
        icon: '❌',
        title: 'Neuzavřené účetnictví',
        description: 'Přestože obdržela odměnu 30.000 Kč za vedení účetnictví roku 2021, účetnictví neuzavřela a odmítla ho předat spolku. Tím znemožnila kontrolu hospodaření a podání výkazů.',
        severity: 'critical' as const,
      },
      {
        icon: '🔒',
        title: 'Neoprávněné předání dokumentů',
        description: 'Účetní dokumentaci spolku neoprávněně předala městu Krupka místo legitimnímu vedení spolku. Porušení důvěrnosti a povinnosti mlčenlivosti.',
        severity: 'high' as const,
      },
      {
        icon: '📋',
        title: 'Zadržování dokumentace',
        description: 'Dlouhodobě zadržovala účetní dokumentaci, která patří spolku. Odmítala předat dokumenty legitimnímu vedení přes opakované výzvy.',
        severity: 'high' as const,
      },
    ],
    impacts: [
      {
        icon: '⚠️',
        title: 'Nemožnost kontroly hospodaření',
        description: 'Bez uzavřeného účetnictví nemohl spolek ověřit finanční stav, provést audit ani identifikovat nesrovnalosti v hospodaření.',
      },
      {
        icon: '📊',
        title: 'Nemožnost podání výkazů',
        description: 'Spolek nemohl splnit zákonnou povinnost podat účetní závěrku a výkazy finančnímu úřadu a dalším orgánům.',
      },
      {
        icon: '🔍',
        title: 'Ztížené dokazování',
        description: 'Předání dokumentů třetí straně (městu) ztížilo spolku prokázání svých nároků a přístup k důležitým dokumentům.',
      },
      {
        icon: '💰',
        title: 'Finanční ztráta',
        description: 'Spolek vyplatil 30.000 Kč za službu, která nebyla řádně dokončena a dodána.',
      },
    ],
    relatedLinks: [
      { label: 'Události s účastí Illéšové', href: '/udalosti?actor=jitka-illesova', icon: '📅' },
      { label: 'Role města Krupka', href: '/temata/role-mesta-krupka', icon: '🏛️' },
      { label: 'Téma: Finance a majetek', href: '/temata/finance-a-majetek', icon: '📚' },
      { label: 'Všichni aktéři', href: '/akteri', icon: '👥' },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 via-violet-700 to-indigo-800 py-16">
        <div className="container mx-auto px-8 max-w-5xl">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-white text-sm font-medium">
                  {actor.departmentIcon} {actor.department}
                </span>
                <span className="px-3 py-1 bg-violet-900/50 backdrop-blur rounded-full text-white text-sm font-bold">
                  📊 Účetní spolku
                </span>
              </div>
              <h1 className="text-5xl font-black text-white mb-3">
                {actor.name}
              </h1>
              <p className="text-xl text-purple-100 font-medium">
                {actor.role}
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur border-2 border-white/30 rounded-2xl p-8 mt-8">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-purple-100 text-sm font-medium mb-2">Obdržená odměna za neuzavřené účetnictví</div>
                <div className="text-5xl font-black text-white">
                  {actor.financialIssue.toLocaleString('cs-CZ')} Kč
                </div>
                <div className="text-sm text-purple-200 mt-3 italic">
                  6 plateb × 5.000 Kč za rok 2021
                </div>
              </div>
              <div className="text-8xl opacity-20">
                📊
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 py-12 max-w-5xl">
        {/* Shrnutí */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-purple-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span>📋</span>
              <span>Shrnutí</span>
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              {actor.summary}
            </p>
          </div>
        </section>

        {/* Info box o roli účetního */}
        <section className="mb-12">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <span className="text-3xl">ℹ️</span>
              <div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Role účetního spolku</h3>
                <p className="text-sm text-blue-800 leading-relaxed mb-3">
                  Účetní má odpovědnost za řádné vedení účetnictví, uzavření účetního období,
                  přípravu účetní závěrky a předání dokumentace spolku. Má povinnost mlčenlivosti
                  ohledně finančních informací spolku.
                </p>
                <p className="text-sm text-blue-900 font-semibold">
                  Jitka Illéšová obdržela plnou odměnu, ale práci nedokončila a dokumenty předala neoprávněně třetí straně.
                </p>
              </div>
            </div>
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

        {/* Finanční detail */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            💰 Finanční detail
          </h2>
          <div className="space-y-4">
            {actor.breakdown.map((item, index) => {
              const typeColors = {
                payment: 'border-purple-400 bg-purple-50',
              };
              const typeLabels = {
                payment: '💵 Platba',
              };

              return (
                <div
                  key={index}
                  className={`p-6 rounded-xl border-2 ${typeColors[item.type]} transition hover:shadow-lg`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-slate-900">{item.label}</h3>
                        <span className="px-2 py-1 bg-white/60 rounded text-xs font-bold text-slate-700">
                          {typeLabels[item.type]}
                        </span>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed mb-3">
                        {item.description}
                      </p>
                    </div>
                    <div className="text-right ml-6">
                      <div className="text-3xl font-black text-slate-900">
                        {(item.amount / 1000).toFixed(0)}k
                      </div>
                      <div className="text-xs text-slate-600">
                        {item.amount.toLocaleString('cs-CZ')} Kč
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 p-4 bg-red-50 border border-red-300 rounded-lg">
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚠️</span>
              <p className="text-sm text-red-900">
                <strong>Problém:</strong> Illéšová obdržela plnou odměnu 30.000 Kč za vedení účetnictví roku 2021,
                avšak účetnictví neuzavřela, nepředala účetní závěrku a dokumenty předala neoprávněně třetí straně.
                Spolek tedy zaplatil za službu, která nebyla řádně dokončena.
              </p>
            </div>
          </div>
        </section>

        {/* Dopady na spolek */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            📊 Dopady na spolek
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {actor.impacts.map((impact, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl border-2 border-slate-200 transition hover:shadow-lg"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-3xl">{impact.icon}</span>
                  <h3 className="text-lg font-bold text-slate-900">{impact.title}</h3>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {impact.description}
                </p>
              </div>
            ))}
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
                    action.type === 'payment'
                      ? 'bg-purple-50 border-purple-300'
                      : action.type === 'consequence'
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
                      <div className="text-lg font-bold text-purple-700 mt-1">
                        {action.amount.toLocaleString('cs-CZ')} Kč
                      </div>
                    )}
                    {action.detail && (
                      <div className="text-sm text-slate-600 mt-1">
                        {action.detail}
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

        {/* Právní aspekty */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl border-2 border-amber-300 p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-amber-900 mb-4 flex items-center gap-2">
              <span>⚖️</span>
              <span>Právní aspekty</span>
            </h2>
            <div className="space-y-4 text-slate-700">
              <div className="p-4 bg-white/70 rounded-lg border border-amber-200">
                <h3 className="font-bold text-amber-900 mb-2">📋 Povinnost účetního</h3>
                <p className="text-sm leading-relaxed">
                  Účetní má smluvní povinnost vést účetnictví, uzavřít účetní období a předat
                  dokumentaci klientovi (spolku). Neuzavření účetnictví po obdržení odměny může
                  představovat porušení smlouvy.
                </p>
              </div>

              <div className="p-4 bg-white/70 rounded-lg border border-amber-200">
                <h3 className="font-bold text-amber-900 mb-2">🔒 Povinnost mlčenlivosti</h3>
                <p className="text-sm leading-relaxed">
                  Účetní má povinnost mlčenlivosti ohledně finančních informací klienta.
                  Předání dokumentů třetí straně (městu Krupka) bez souhlasu klienta může
                  představovat porušení této povinnosti.
                </p>
              </div>

              <div className="p-4 bg-white/70 rounded-lg border border-amber-200">
                <h3 className="font-bold text-amber-900 mb-2">📄 Vlastnictví dokumentů</h3>
                <p className="text-sm leading-relaxed">
                  Účetní dokumenty patří spolku, nikoli účetnímu. Zadržování dokumentů
                  a odmítnutí jejich předání legitimnímu vedení spolku může být považováno
                  za neoprávněné zadržení cizí věci.
                </p>
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
            href="/akteri/martin-kulik"
            className="flex items-center gap-2 px-6 py-3 bg-slate-200 hover:bg-slate-300 rounded-lg font-bold text-slate-900 transition"
          >
            <span>←</span>
            <span>Martin Kulík</span>
          </a>
          <a
            href="/akteri"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold text-white transition"
          >
            <span>Všichni aktéři</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
