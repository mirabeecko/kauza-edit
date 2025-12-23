export default function JanBokocPage() {
  const actor = {
    name: 'Jan Bokoč',
    role: 'Místostarosta města Krupka',
    organization: 'Město Krupka',
    organizationIcon: '🏛️',
    status: 'negative' as const,
    summary: 'Místostarosta města Krupka, který se aktivně podílel na pokusu o převzetí kontroly nad TJ Krupka z.s. Účastnil se nelegálních schůzí a koordinoval kroky s vedením městské společnosti SPORT Krupka s.r.o.',

    keyViolations: [
      {
        title: 'Účast na nelegálních schůzích',
        description: 'Jako místostarosta města se osobně účastnil nelegálních shromáždění organizovaných vyloučenými členy. Měl zajistit politickou podporu pro převzetí kontroly nad spolkem.',
        severity: 'critical' as const,
        evidence: 'Dokumenty od advokáta Rouska o nelegálních shromážděních, zápisy z jednání',
      },
      {
        title: 'Koordinace s městskou společností',
        description: 'Koordinoval postup s SPORT Krupka s.r.o. (jednatel Jan Kuzma) a sportovním manažerem Tomášem Syryčanským při pokusu o převrat.',
        severity: 'critical' as const,
        evidence: 'Dokumentace o schůzkách a koordinačních jednáních',
      },
      {
        title: 'Zásah do autonomie spolku',
        description: 'Jako zástupce města zasahoval do vnitřních záležitostí nezávislého spolku v rozporu s § 214-302 NOZ (spolkový zákon).',
        severity: 'critical' as const,
        evidence: '§ 214-302 NOZ - autonomie spolku',
      },
      {
        title: 'Ignorování oficiálních notifikací',
        description: 'Po přijetí oficiální notifikace o vyloučení Vaniše a Pivoňky (26.1.2024) město nadále podporovalo tyto vyloučené členy a umožňovalo jim přístup do prostor.',
        severity: 'high' as const,
        evidence: 'Notifikace městu 26.1.2024, pokračující podpora vyloučených členů',
      },
      {
        title: 'Střet zájmů',
        description: 'Jako místostarosta města měl prosazovat zájem veřejnosti, místo toho se zapojil do pokusu o převzetí kontroly nad nezávislým spolkem pro prospěch města.',
        severity: 'critical' as const,
        evidence: 'Zákon o obcích § 83-84 - povinnosti zastupitele',
      },
    ],

    timeline: [
      {
        date: '19.12.2023',
        event: 'První nelegální schůze',
        description: 'Koordinace první výměny zámků a nelegální schůze. SPORT Krupka poprvé omezil přístup legitimnímu předsedovi.',
        type: 'violation' as const,
      },
      {
        date: 'Prosinec 2023',
        event: 'Koordinační schůzky',
        description: 'Schůzky se starostou Kuzmą, Syryčanským a Vítůem. Tlak na svolání shromáždění do konce ledna 2024.',
        type: 'violation' as const,
      },
      {
        date: '19.1.2024',
        event: 'Druhá výměna zámků',
        description: 'SPORT Krupka vyměnil zámky a znemožnil přístup legitimnímu předsedovi. Koordinace s městem.',
        type: 'violation' as const,
      },
      {
        date: '25.1.2024',
        event: 'Ignorování legitimního shromáždění',
        description: 'Konalo se legitimní shromáždění skutečných členů. Město ho ignorovalo a pokračovalo v podpoře vyloučených členů.',
        type: 'violation' as const,
      },
      {
        date: '26.1.2024',
        event: 'Přijetí oficiální notifikace',
        description: 'Město obdrželo oficiální oznámení o vyloučení Vaniše a Pivoňky. Přesto nadále umožňovalo přístup vyloučeným členům.',
        type: 'violation' as const,
      },
      {
        date: 'Únor 2024',
        event: 'Pokračující podpora převratu',
        description: 'SPORT Krupka s politickou podporou místostarosty nadále poskytoval prostory pro nelegální schůze.',
        type: 'violation' as const,
      },
      {
        date: '28.2.2024',
        event: 'Vypršení prekluzivní lhůty',
        description: 'Vypršela prekluzivní lhůta § 259 NOZ pro napadení vyloučení. Plán převratu definitivně selhal.',
        type: 'neutral' as const,
      },
      {
        date: 'Březen-Duben 2024',
        event: 'Pokračující blokáda přístupu',
        description: 'I po selhání plánu město nadále blokovalo přístup legitimnímu předsedovi do prostor spolku.',
        type: 'violation' as const,
      },
    ],

    roleInPlot: {
      title: 'Role v pokusu o převrat',
      description: 'Jan Bokoč jako místostarosta města měl zajistit politickou podporu a koordinaci mezi městem, městskou společností SPORT Krupka a vyloučenými členy spolku.',
      specificActions: [
        'Účast na nelegálních schůzích jako reprezentant města',
        'Koordinace s jednatelem SPORT Krupka (starostou Kuzmou)',
        'Zajištění politické podpory pro akce Syryčanského',
        'Ignorování oficiálních notifikací o vyloučení členů',
        'Pokračující podpora nelegálních schůzí i po vypršení lhůt',
      ],
    },

    legalContext: [
      {
        law: '§ 214-302 NOZ - Autonomie spolku',
        description: 'Spolek je autonomní organizace. Zásahy třetích osob (včetně města) do jeho vnitřních záležitostí jsou nepřípustné.',
      },
      {
        law: '§ 83-84 Zákon o obcích - Povinnosti zastupitele',
        description: 'Zastupitel je povinen jednat v zájmu obce a dodržovat zákony. Střet zájmů a jednání proti zájmu veřejnosti je nepřípustné.',
      },
      {
        law: '§ 207 TZ - Neoprávněné užívání cizí věci',
        description: 'Umožnění přístupu neoprávněným osobám (vyloučeným členům) do prostor spolku městskou společností s politickou podporou.',
      },
      {
        law: '§ 329 TZ - Zneužití pravomoci úřední osoby',
        description: 'Zneužití postavení místostarosty k pokusu o převzetí kontroly nad nezávislým spolkem.',
      },
    ],

    relatedActors: [
      { name: 'Jan Kuzma', role: 'Starosta města a jednatel SPORT Krupka', href: '/akteri/jan-kuzma' },
      { name: 'Tomáš Syryčanský', role: 'Sportovní manažer SPORT Krupka', href: '/akteri/tomas-syrycansky' },
      { name: 'Marek Vaniš', role: 'Vyloučený člen - spolupráce', href: '/akteri/marek-vanis' },
      { name: 'Jaromír Pivoňka', role: 'Vyloučený člen - spolupráce', href: '/akteri/jaromir-pivonka' },
      { name: 'Miroslav Brožek', role: 'Legitimní předseda spolku', href: '/akteri/miroslav-brozek' },
    ],

    relatedLinks: [
      { label: 'Timeline: Město Krupka', href: '/mesto-krupka', icon: '🏛️' },
      { label: 'Téma: Role města Krupka', href: '/temata/role-mesta-krupka', icon: '📋' },
      { label: 'Otázka: Kdo měl právo rozhodovat?', href: '/otazky/kdo-mel-pravo-rozhodovat', icon: '❓' },
      { label: 'Události', href: '/udalosti', icon: '📅' },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-slate-800 py-8 md:py-16 border-b border-blue-600">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-white text-sm font-medium border border-white/30">
                  {actor.organizationIcon} {actor.organization}
                </span>
                <span className="px-3 py-1 bg-blue-900/70 backdrop-blur rounded-full text-blue-100 text-sm font-medium border border-blue-700/30">
                  ⚠️ Zástupce města
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3">
                {actor.name}
              </h1>
              <p className="text-xl text-blue-100 font-medium">
                {actor.role}
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 mt-8">
            <div className="flex items-center gap-4">
              <div className="text-6xl">🎭</div>
              <div className="flex-1">
                <div className="text-blue-100 text-sm font-medium mb-2">Role v kauze</div>
                <div className="text-2xl font-black text-white">
                  Politická podpora pokusu o převzetí kontroly nad spolkem
                </div>
                <div className="text-blue-100 text-sm mt-2">
                  Koordinace mezi městem, městskou společností a vyloučenými členy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 py-12 max-w-5xl">
        {/* Shrnutí */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span>📋</span>
              <span>Shrnutí</span>
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              {actor.summary}
            </p>
          </div>
        </section>

        {/* Klíčová porušení */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            ⚠️ Klíčová porušení a problematické jednání
          </h2>
          <div className="space-y-4">
            {actor.keyViolations.map((violation, index) => {
              const severityColors = {
                critical: 'border-red-300 bg-red-50',
                high: 'border-orange-300 bg-orange-50',
                medium: 'border-yellow-300 bg-yellow-50',
              };
              const severityLabels = {
                critical: '🔴 Kritické',
                high: '🟠 Vysoké',
                medium: '🟡 Střední',
              };

              return (
                <div
                  key={index}
                  className={`p-6 rounded-xl ${severityColors[violation.severity]} border-2 shadow-md`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-slate-900">{violation.title}</h3>
                        <span className="px-2 py-1 bg-white/80 rounded text-xs font-bold text-slate-700">
                          {severityLabels[violation.severity]}
                        </span>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed mb-3">
                        {violation.description}
                      </p>
                      <div className="flex items-start gap-2 text-xs text-slate-600">
                        <span className="font-semibold">📎 Důkaz:</span>
                        <span>{violation.evidence}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Role v pokusu o převrat */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            🎭 {actor.roleInPlot.title}
          </h2>
          <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-8 shadow-lg border-2 border-blue-200">
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              {actor.roleInPlot.description}
            </p>
            <div className="space-y-3">
              <h3 className="font-bold text-slate-900 mb-3">Konkrétní kroky:</h3>
              {actor.roleInPlot.specificActions.map((action, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <span className="text-blue-600 font-bold">•</span>
                  <div className="text-sm text-slate-700">{action}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Časová osa */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            📊 Časová osa událostí
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-4">
              {actor.timeline.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-lg bg-slate-50 border-l-4 border-blue-500 shadow-sm"
                >
                  <div className="flex-shrink-0">
                    <div className="text-sm font-bold text-slate-600 mb-1">{item.date}</div>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-slate-900 mb-2">{item.event}</div>
                    <p className="text-sm text-slate-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Právní kontext */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            ⚖️ Právní kontext a možné trestné činy
          </h2>
          <div className="bg-slate-50 rounded-xl p-8 shadow-md">
            <div className="space-y-4">
              {actor.legalContext.map((item, index) => (
                <div key={index} className="p-5 bg-white rounded-lg shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-2">{item.law}</h3>
                  <p className="text-sm text-slate-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Související aktéři */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            👥 Související aktéři
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {actor.relatedActors.map((related, index) => (
              <a
                key={index}
                href={related.href}
                className="block p-5 bg-white rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="font-bold text-slate-900 mb-1">{related.name}</div>
                <div className="text-sm text-slate-600">{related.role}</div>
              </a>
            ))}
          </div>
        </section>

        {/* Související stránky */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            🔗 Související stránky
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {actor.relatedLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block p-5 bg-white rounded-xl shadow hover:shadow-lg transition"
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
        <div className="flex items-center justify-center pt-8 mt-8">
          <a
            href="/akteri"
            className="flex items-center gap-2 px-6 py-3 bg-slate-200 hover:bg-slate-300 rounded-lg font-bold text-slate-900 transition"
          >
            <span>←</span>
            <span>Všichni aktéři</span>
          </a>
        </div>
      </div>
    </div>
  );
}
