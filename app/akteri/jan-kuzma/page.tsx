export default function JanKuzmaPage() {
  const actor = {
    name: 'Jan Kuzma',
    role: 'Starosta města Krupka a jednatel SPORT Krupka s.r.o.',
    organization: 'Město Krupka / SPORT Krupka s.r.o.',
    organizationIcon: '🏛️',
    status: 'negative' as const,
    summary: 'Starosta města Krupka, který současně působí jako jednatel městské společnosti SPORT Krupka s.r.o. V této dvojroli koordinoval pokus o převzetí kontroly nad TJ Krupka z.s. Městská společnost pod jeho vedením vyměnila zámky na Pinčesárně a umožnila přístup vyloučeným členům.',

    keyViolations: [
      {
        title: 'Střet zájmů - dvojrole starosta + jednatel',
        description: 'Jako starosta města Krupka je současně jednatelem městské společnosti SPORT Krupka s.r.o. Tato dvojrole umožnila koordinaci mezi politickou mocí města a obchodními aktivitami městské společnosti vůči spolku.',
        severity: 'critical' as const,
        evidence: 'Veřejný rejstřík, zápisy z jednání, zákon o střetu zájmů',
      },
      {
        title: 'Výměna zámků bez právního titulu',
        description: 'SPORT Krupka s.r.o. pod jeho vedením vyměnila zámky na Pinčesárně a znemožnila přístup legitimnímu předsedovi Miroslavu Brožkovi. Umožnila přístup vyloučeným členům Vanišovi a Pivoňkovi.',
        severity: 'critical' as const,
        evidence: 'Výměna zámků 19.12.2023 a 19.1.2024, svědecké výpovědi',
      },
      {
        title: 'Ignorování oficiálních notifikací',
        description: 'Po přijetí oficiální notifikace o vyloučení Vaniše a Pivoňky (26.1.2024) město i SPORT Krupka nadále umožňovaly těmto vyloučeným členům přístup a pořádání nelegálních schůzí.',
        severity: 'critical' as const,
        evidence: 'Datová schránka města 26.1.2024, pokračující podpora vyloučených členů',
      },
      {
        title: 'Pokus o převzetí kontroly nad spolkem',
        description: 'Koordinoval scénář, ve kterém měl být Tomáš Syryčanský (zaměstnanec SPORT Krupka) "zvolen" jako nový předseda spolku na nelegálních schůzích místo legitimního předsedy.',
        severity: 'critical' as const,
        evidence: 'Dokumenty o nelegálních shromážděních, koordinační schůzky',
      },
      {
        title: 'Zásah do autonomie spolku',
        description: 'Jako starosta a jednatel městské společnosti zasahoval do vnitřních záležitostí nezávislého spolku v rozporu s § 214-302 NOZ (spolkový zákon).',
        severity: 'critical' as const,
        evidence: '§ 214-302 NOZ - autonomie spolku',
      },
    ],

    timeline: [
      {
        date: '19.12.2023',
        event: 'První výměna zámků',
        description: 'SPORT Krupka (jednatel Kuzma) poprvé vyměnila zámky na Pinčesárně. Omezení přístupu legitimnímu předsedovi, umožnění přístupu vyloučeným členům.',
        type: 'violation' as const,
      },
      {
        date: 'Prosinec 2023',
        event: 'Koordinační schůzky',
        description: 'Schůzky Kuzma, Bokoč, Syryčanský, Vítů. Tlak na Miroslava Brožka, aby se konalo shromáždění do konce ledna 2024.',
        type: 'violation' as const,
      },
      {
        date: '17.1.2024',
        event: 'Zaslání návrhu nájemní smlouvy',
        description: 'SPORT Krupka zaslala návrh nové nájemní smlouvy do datové schránky TJ Krupka.',
        type: 'neutral' as const,
      },
      {
        date: '19.1.2024',
        event: 'Druhá výměna zámků - 2 dny po smlouvě!',
        description: 'DVA DNY po zaslání smlouvy SPORT Krupka vyměnila zámky a předala klíče vyloučeným členům. Legitimní předseda odstraněn z prostor.',
        type: 'violation' as const,
      },
      {
        date: '25.1.2024',
        event: 'Ignorování legitimního shromáždění',
        description: 'Konalo se legitimní shromáždění skutečných členů spolku. Město a SPORT Krupka ho ignorovaly a pokračovaly v podpoře vyloučených členů.',
        type: 'violation' as const,
      },
      {
        date: '26.1.2024',
        event: 'Přijetí oficiální notifikace',
        description: 'Město obdrželo oficiální oznámení o vyloučení Vaniše a Pivoňky do datové schránky. PŘESTO SPORT Krupka nadále umožňovala přístup vyloučeným členům.',
        type: 'violation' as const,
      },
      {
        date: 'Únor 2024',
        event: 'Pokračující podpora nelegálních schůzí',
        description: 'SPORT Krupka s.r.o. pod vedením Kuzmy nadále poskytovala prostory pro nelegální schůze vyloučených členů.',
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
        description: 'I po selhání plánu SPORT Krupka nadále blokovala přístup legitimnímu předsedovi do prostor spolku.',
        type: 'violation' as const,
      },
    ],

    conflictOfInterest: {
      title: 'Střet zájmů a dvojrole',
      description: 'Jan Kuzma jako starosta města má prosazovat zájem veřejnosti. Současně jako jednatel městské společnosti SPORT Krupka s.r.o. má obchodní zájmy. Tato dvojrole vytvořila nebezpečný konflikt.',
      specificIssues: [
        {
          issue: 'Politická moc × Obchodní zájmy',
          description: 'Jako starosta má politickou moc ovlivnit rozhodování města. Jako jednatel SPORT Krupka má obchodní zájmy (nájemné, kontrola nad prostory).',
        },
        {
          issue: 'Zásah do autonomie spolku',
          description: 'Využil kombinaci politické moci a kontroly nad prostory k pokusu o převzetí kontroly nad nezávislým spolkem.',
        },
        {
          issue: 'Ignorování právních povinností',
          description: 'I po obdržení oficiální notifikace o vyloučení členů pokračoval v podpoře vyloučených členů a umožňoval jim přístup.',
        },
      ],
    },

    plannedScenario: {
      title: 'Plánovaný scénář převratu',
      steps: [
        'Městská společnost SPORT Krupka vymění zámky → legitimní předseda nemá přístup',
        'Vyloučení členové s přístupem od města svolají "mimořádné shromáždění"',
        'Na tomto nelegálním shromáždění "zvolí" Syryčanského (zaměstnance SPORT Krupka) jako nového předsedy',
        'Syryčanský jako "nový předseda" podepíše novou nájemní smlouvu výhodnou pro město',
        'Město získá kontrolu nad spolkem a jeho aktivitami',
      ],
      whyFailed: [
        'Legitimní předseda Brožek podal trestní oznámení',
        'Krajský soud potvrdil legitimitu vyloučení Vaniše a Pivoňky',
        'Po 28.2.2024 vypršela prekluzivní lhůta § 259 NOZ',
        'Všechny žaloby vyloučených členů byly soudem zamítnuty',
        'Právní poradce města (JUDr. Rousek) odmítl spolupracovat na nelegálních krocích',
      ],
    },

    legalContext: [
      {
        law: '§ 214-302 NOZ - Autonomie spolku',
        description: 'Spolek je autonomní organizace. Zásahy třetích osob (včetně města a městských společností) do jeho vnitřních záležitostí jsou nepřípustné.',
      },
      {
        law: '§ 207 TZ - Neoprávněné užívání cizí věci',
        description: 'Umožnění přístupu neoprávněným osobám (vyloučeným členům) do prostor spolku městskou společností.',
      },
      {
        law: '§ 208 TZ - Neoprávněný zásah do práva k domu, bytu nebo k nebytovému prostoru',
        description: 'Výměna zámků bez souhlasu oprávněné osoby (legitimního předsedy spolku).',
      },
      {
        law: '§ 329 TZ - Zneužití pravomoci úřední osoby',
        description: 'Zneužití postavení starosty k pokusu o převzetí kontroly nad nezávislým spolkem.',
      },
      {
        law: 'Zákon o střetu zájmů',
        description: 'Dvojrole starosta + jednatel městské společnosti vytváří střet zájmů při jednání s třetími stranami (spolky).',
      },
    ],

    relatedActors: [
      { name: 'Jan Bokoč', role: 'Místostarosta města Krupka', href: '/akteri/jan-bokoc' },
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
      <div className="bg-gradient-to-br from-red-700 via-red-800 to-slate-900 py-8 md:py-16 border-b border-red-600">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-white text-sm font-medium border border-white/30">
                  {actor.organizationIcon} {actor.organization}
                </span>
                <span className="px-3 py-1 bg-red-900/70 backdrop-blur rounded-full text-red-100 text-sm font-medium border border-red-700/30">
                  ⚠️ Zástupce města
                </span>
                <span className="px-3 py-1 bg-orange-900/70 backdrop-blur rounded-full text-orange-100 text-sm font-medium border border-orange-700/30">
                  💼 Střet zájmů
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3">
                {actor.name}
              </h1>
              <p className="text-xl text-red-100 font-medium">
                {actor.role}
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 mt-8">
            <div className="flex items-center gap-4">
              <div className="text-6xl">⚠️</div>
              <div className="flex-1">
                <div className="text-red-100 text-sm font-medium mb-2">Dvojrole</div>
                <div className="text-2xl font-black text-white">
                  Starosta města + Jednatel městské společnosti
                </div>
                <div className="text-red-100 text-sm mt-2">
                  Politická moc × Obchodní zájmy = Nebezpečný střet zájmů
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

        {/* Střet zájmů */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            💼 {actor.conflictOfInterest.title}
          </h2>
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 shadow-lg border-2 border-orange-200">
            <p className="text-lg text-slate-700 mb-6 leading-relaxed font-semibold">
              {actor.conflictOfInterest.description}
            </p>
            <div className="space-y-4">
              {actor.conflictOfInterest.specificIssues.map((item, index) => (
                <div key={index} className="p-5 bg-white rounded-lg shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-2">{item.issue}</h3>
                  <p className="text-sm text-slate-700">{item.description}</p>
                </div>
              ))}
            </div>
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

        {/* Plánovaný převrat */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            🎯 Plánovaný scénář převratu
          </h2>
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 shadow-lg border-2 border-red-200">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span>📋</span>
                <span>Jak měl převrat proběhnout</span>
              </h3>
              <div className="space-y-3">
                {actor.plannedScenario.steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1 text-slate-700">{step}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t-2 border-red-200">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                <span>✅</span>
                <span>Proč to nevyšlo</span>
              </h3>
              <div className="space-y-2">
                {actor.plannedScenario.whyFailed.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                    <span className="text-green-600 font-bold">•</span>
                    <div className="text-sm text-green-900">{reason}</div>
                  </div>
                ))}
              </div>
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
                  className="flex items-start gap-4 p-5 rounded-lg bg-slate-50 border-l-4 border-red-500 shadow-sm"
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
