export default function TomasSyrycanskyPage() {
  const actor = {
    name: 'Tomáš Syryčanský',
    role: 'Sportovní manažer SPORT Krupka s.r.o.',
    organization: 'SPORT Krupka s.r.o.',
    organizationIcon: '🏛️',
    status: 'negative' as const,
    summary: 'Zaměstnanec městské společnosti SPORT Krupka s.r.o., který koordinoval pokus o převzetí kontroly nad TJ Krupka z.s. ve prospěch města. Měl být zvolen jako nový předseda na nelegálních schůzích místo legitimního předsedy Miroslava Brožka.',

    keyViolations: [
      {
        title: 'Koordinace nelegálních schůzí',
        description: 'V dokumentech o nelegálních shromážděních byl vždy uveden jako účastník společně se zástupci města (Jan Kuzma, Jan Bokoč). Měl zajistit organizační zázemí pro převrat.',
        severity: 'critical' as const,
        evidence: 'Dokumenty od advokáta Rouska o nelegálních shromážděních',
      },
      {
        title: 'Manipulace s přístupem k prostorám',
        description: 'Zaslal návrh nové nájemní smlouvy do datové schránky TJ Krupka. DVA DNY POTÉ dal vyměnit zámky na Pinčesárně, čímž znemožnil přístup legitimnímu předsedovi a skutečným členům spolku.',
        severity: 'critical' as const,
        evidence: 'Datová schránka TJ Krupka, výměna zámků 19.1.2024',
      },
      {
        title: 'Umožnění přístupu vyloučeným členům',
        description: 'Po oficiálním oznámení o vyloučení Vaniše a Pivoňky (26.1.2024) SPORT Krupka nadále umožňoval těmto osobám přístup do Pinčesárny a pořádání nelegálních schůzí.',
        severity: 'high' as const,
        evidence: 'Notifikace městu 26.1.2024, pokračující přístup vyloučených členů',
      },
      {
        title: 'Plánované "zvolení" za předsedy',
        description: 'Na nelegálních shromážděních měl být "zvolen" jako nový předseda TJ Krupka z.s. místo Miroslava Brožka. Cílem bylo získat kontrolu nad spolkem pro město Krupka.',
        severity: 'critical' as const,
        evidence: 'Dokumenty o plánovaných nelegálních shromážděních',
      },
      {
        title: 'Tlak na svolání shromáždění',
        description: 'Na schůzce s Kuzmou a Vítůem tlačili na Miroslava Brožka, aby se konalo shromáždění do konce ledna 2024. Když proběhlo legitimní shromáždění 25.1.2024, ignorovali ho.',
        severity: 'high' as const,
        evidence: 'Poznámky Karel Rouček, zápis ze schůzky',
      },
    ],

    timeline: [
      {
        date: '19.12.2023',
        event: 'SPORT Krupka poprvé omezil přístup',
        description: 'První omezení přístupu legitimnímu předsedovi do Pinčesárny. Umožnění přístupu vyloučeným členům Vanišovi a Pivoňkovi.',
        type: 'violation' as const,
      },
      {
        date: 'Prosinec 2023',
        event: 'Tlak na svolání shromáždění',
        description: 'Schůzka Kuzma, Syryčanský, Vítů - tlak na Miroslava Brožka, aby se konalo shromáždění do konce ledna 2024.',
        type: 'violation' as const,
      },
      {
        date: '19.1.2024',
        event: 'Výměna zámků na Pinčesárně',
        description: 'SPORT Krupka vyměnil zámky a předal klíče vyloučeným členům. Dva dny po zaslání návrhu nové nájemní smlouvy.',
        type: 'violation' as const,
      },
      {
        date: '25.1.2024',
        event: 'Ignorování legitimního shromáždění',
        description: 'Konalo se legitimní shromáždění skutečných členů. SPORT Krupka a Syryčanský ho ignorovali a pokračovali v podpoře vyloučených členů.',
        type: 'violation' as const,
      },
      {
        date: '26.1.2024',
        event: 'Přijetí oficiální notifikace',
        description: 'Město obdrželo oficiální oznámení o vyloučení Vaniše a Pivoňky. Přes to SPORT Krupka nadále umožňoval přístup vyloučeným členům.',
        type: 'violation' as const,
      },
      {
        date: 'Únor 2024',
        event: 'Pokračování v podpoře nelegálních schůzí',
        description: 'SPORT Krupka nadále poskytoval prostory pro nelegální schůze vyloučených členů.',
        type: 'violation' as const,
      },
    ],

    plannedTakeover: {
      title: 'Plánovaný scénář převratu',
      steps: [
        'Vyloučení členové svolají "mimořádné shromáždění" v prostorách zajištěných městem',
        'Na tomto nelegálním shromáždění "zvolí" Syryčanského jako nového předsedy',
        'Syryčanský jako zaměstnanec města zajistí podepsání nové nájemní smlouvy výhodné pro město',
        'Město získá kontrolu nad spolkem a jeho aktivitami',
      ],
      whyFailed: [
        'Legitimní předseda Brožek podal trestní oznámení',
        'Krajský soud potvrdil legitimitu vyloučení Vaniše a Pivoňky',
        'Po 28.2.2024 vypršela prekluzivní lhůta § 259 NOZ',
        'Všechny žaloby vyloučených členů byly soudem zamítnuty',
      ],
    },

    legalContext: [
      {
        law: '§ 207 TZ - Neoprávněné užívání cizí věci',
        description: 'Umožnění přístupu neoprávněným osobám (vyloučeným členům) do prostor spolku.',
      },
      {
        law: '§ 208 TZ - Neoprávněný zásah do práva k domu, bytu nebo k nebytovému prostoru',
        description: 'Výměna zámků bez souhlasu oprávněné osoby (legitimního předsedy spolku).',
      },
      {
        law: 'Zneužití postavení zaměstnance městské společnosti',
        description: 'Zneužití pozice sportovního manažera městské společnosti k pokusu o převzetí kontroly nad nezávislým spolkem.',
      },
    ],

    relatedActors: [
      { name: 'Jan Kuzma', role: 'Starosta města a jednatel SPORT Krupka', href: '/akteri/jan-kuzma' },
      { name: 'Jan Bokoč', role: 'Místostarosta města', href: '/akteri/jan-bokoc' },
      { name: 'Marek Vaniš', role: 'Vyloučený člen - spolupráce', href: '/akteri/marek-vanis' },
      { name: 'Jaromír Pivoňka', role: 'Vyloučený člen - spolupráce', href: '/akteri/jaromir-pivonka' },
      { name: 'Miroslav Brožek', role: 'Legitimní předseda spolku', href: '/akteri/miroslav-brozek' },
    ],

    relatedLinks: [
      { label: 'Téma: Role města Krupka', href: '/temata/role-mesta-krupka', icon: '🏛️' },
      { label: 'Otázka: Kdo měl právo rozhodovat?', href: '/otazky/kdo-mel-pravo-rozhodovat', icon: '❓' },
      { label: 'Téma: Schůze a rozhodování', href: '/temata/schuze-a-rozhodovani', icon: '🗳️' },
      { label: 'Události', href: '/udalosti', icon: '📅' },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-700 via-red-700 to-red-800 py-8 md:py-16 border-b border-red-600">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-white text-sm font-medium border border-white/30">
                  {actor.organizationIcon} {actor.organization}
                </span>
                <span className="px-3 py-1 bg-red-900/70 backdrop-blur rounded-full text-red-100 text-sm font-medium border border-red-700/30">
                  ⚠️ Externí aktér
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
              <div className="text-6xl">🎯</div>
              <div className="flex-1">
                <div className="text-red-100 text-sm font-medium mb-2">Plánovaná role</div>
                <div className="text-2xl font-black text-white">
                  Nový "předseda" spolku místo Miroslava Brožka
                </div>
                <div className="text-red-100 text-sm mt-2">
                  Měl být "zvolen" na nelegálních schůzích organizovaných vyloučenými členy
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
                {actor.plannedTakeover.steps.map((step, index) => (
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
                {actor.plannedTakeover.whyFailed.map((reason, index) => (
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
