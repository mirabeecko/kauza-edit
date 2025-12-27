export default function MestoKrupkaPage() {
  const info = {
    name: 'Město Krupka & SPORT Krupka s.r.o.',
    description: 'SPORT Krupka s.r.o. je společnost 100% vlastněná městem Krupka. Starosta Jan Kuzma je zároveň jednatelem této společnosti. Jejich koordinované jednání naznačuje pokus o převzetí kontroly nad Tělovýchovná jednota Krupka z.s.',
  };

  const keyFigures = [
    {
      name: 'Jan Kuzma',
      role: 'Starosta města Krupka & Jednatel SPORT Krupka s.r.o.',
      actions: [
        'Popíral odpovědnost za SPORT Krupka přesto, že je jejím jednatelem',
        'Požadoval seznamy členů (zásah do autonomie spolku)',
        'Byl uveden v dokumentech o nelegálních schůzích',
        'Koordinoval akce s Syryčanským a vyloučenými členy',
      ],
    },
    {
      name: 'Jan Bokoč',
      role: 'Místostarosta města Krupka',
      actions: [
        'Byl uveden jako účastník nelegálních schůzí',
        'Spolupráce s Kuzmou na akci proti spolku',
      ],
    },
    {
      name: 'Tomáš Syryčanský',
      role: 'Sportovní manažer SPORT Krupka s.r.o.',
      actions: [
        'Vyměnil zámky na Pinčesárně 2 dny po zaslání smlouvy',
        'Koordinoval nelegální schůze',
        'Měl být "zvolen" jako nový předseda',
        'Přestal komunikovat (17.10.2024)',
      ],
      link: '/akteri/tomas-syrycansky',
    },
  ];

  const violations = [
    {
      title: 'Zásah do autonomie spolku',
      severity: 'critical' as const,
      description: 'Město jako veřejnoprávní subjekt nemá právo zasahovat do vnitřních záležitostí občanského sdružení. Požadavky na seznamy členů, koordinace s vyloučenými členy a pokus o změnu vedení představují nepřípustný zásah.',
      law: 'Čl. 2 Listiny základních práv a svobod - právo na svobodné sdružování',
    },
    {
      title: 'Střet zájmů',
      severity: 'critical' as const,
      description: 'Jan Kuzma jako starosta města a jednatel městské společnosti koordinoval akce proti spolku, čímž zneužil své postavení veřejného činitele.',
      law: 'Zákon o střetu zájmů',
    },
    {
      title: 'Výměna zámků bez právního titulu',
      severity: 'critical' as const,
      description: 'SPORT Krupka vyměnil zámky na prostorách, které užívá Tělovýchovná jednota Krupka z.s., a umožnil přístup vyloučeným členům místo legitimního předsedy.',
      law: '§ 208 TZ - Neoprávněný zásah do práva k prostoru',
    },
    {
      title: 'Ignorování oficiálních notifikací',
      severity: 'high' as const,
      description: 'Přes oficiální oznámení o vyloučení Vaniše a Pivoňky (26.1.2024) SPORT Krupka nadále umožňoval těmto osobám přístup a pořádání nelegálních schůzí.',
      law: 'Povinnost respektovat rozhodnutí spolku',
    },
    {
      title: 'Pokus o převzetí kontroly',
      severity: 'critical' as const,
      description: 'Koordinovaná akce města, SPORT Krupka a vyloučených členů s cílem "zvolit" Syryčanského jako nového předsedy a získat kontrolu nad spolkem.',
      law: 'Svoboda sdružování',
    },
  ];

  const timeline = [
    {
      date: '19.12.2023',
      title: 'První výměna zámků a nelegální schůze',
      description: 'SPORT Krupka poprvé omezil přístup do Pinčesárny legitimnímu předsedovi a umožnil vyloučeným členům Vanišovi a Pivoňkovi svolat "mimořádné shromáždění".',
      type: 'violation' as const,
      severity: 'critical' as const,
      details: [
        'První zásah SPORT Krupka proti legitimnímu předsedovi',
        'Umožnění přístupu Vanišovi a Pivoňkovi (vyloučeni 28.11.2023)',
        'Nelegální schůze = "vyloučení" legitimního předsedy',
        'Začátek koordinované akce města',
      ],
    },
    {
      date: 'Prosinec 2023',
      title: 'Koordinační schůzka - tlak na předsedu Brožka',
      description: 'Starosta Kuzma, sportovní manažer Syryčanský a další představitelé města tlačili na Miroslava Brožka, aby se konalo shromáždění do konce ledna 2024.',
      type: 'coordination' as const,
      details: [
        'Účastníci: Jan Kuzma (starosta), Tomáš Syryčanský, Vítů',
        'Tlak na Miroslava Brožka: "Svolejte schůzi do konce ledna"',
        'Důvod tlaku: pokus o převzetí kontroly nad spolkem',
        'Koordinace mezi městem a vyloučenými členy',
      ],
    },
    {
      date: '19.1.2024',
      title: 'Druhá výměna zámků - 2 dny po smlouvě',
      description: 'Syryčanský zaslal návrh nové nájemní smlouvy. DVA DNY POTÉ dal SPORT Krupka vyměnit zámky na Pinčesárně.',
      type: 'violation' as const,
      severity: 'critical' as const,
      details: [
        'Syryčanský zaslal návrh smlouvy do datové schránky',
        '2 DNY POTÉ: výměna zámků',
        'Klíče předány vyloučeným členům (Vaniš, Pivoňka, Vlach, Kulík)',
        'Legitimní předseda a členové nemohli vstoupit',
        'Koordinovaná akce pro převrat',
      ],
    },
    {
      date: '25.1.2024',
      title: 'Legitimní shromáždění ignorováno',
      description: 'Konalo se legitimní shromáždění skutečných členů Tělovýchovná jednota Krupka z.s.. SPORT Krupka a město ho ignorovali a pokračovali v podpoře vyloučených členů.',
      type: 'violation' as const,
      severity: 'high' as const,
      details: [
        'Legitimní shromáždění delegátů Tělovýchovná jednota Krupka z.s.',
        'Odsouhlaseno vyloučení Vaniše a Pivoňky',
        'Schváleno podání trestního oznámení',
        'SPORT Krupka a město to ignorovali',
      ],
    },
    {
      date: '26.1.2024',
      title: 'Město obdrželo oficiální notifikaci',
      description: 'Město Krupka a SPORT Krupka obdržely oficiální oznámení o vyloučení Vaniše a Pivoňky. Přes to nadále umožňovali přístup vyloučeným členům.',
      type: 'violation' as const,
      severity: 'critical' as const,
      details: [
        'Oficiální notifikace doručena městu',
        'Obsah: Vaniš a Pivoňka vyloučeni k 28.11.2023',
        'Požadavek: Ukončit spolupráci s vyloučenými členy',
        'Reakce: IGNOROVÁNO - pokračování v porušování',
      ],
    },
    {
      date: 'Únor 2024',
      title: 'Pokračování v podpoře nelegálních schůzí',
      description: 'Přes oficiální notifikaci SPORT Krupka nadále poskytoval prostory vyloučeným členům pro nelegální schůze.',
      type: 'violation' as const,
      severity: 'high' as const,
      details: [
        'Další "mimořádná shromáždění" vyloučených členů',
        'SPORT Krupka poskytoval prostory',
        'Dokumenty o schůzích uváděly Kuzmu, Bokoče, Syryčanského',
        'Pokračující pokus o převrat',
      ],
    },
    {
      date: '28.2.2024',
      title: 'Vypršení prekluzivní lhůty - plán selhal',
      description: 'Vypršela 3měsíční lhůta pro napadení vyloučení (§ 259 NOZ). Pokus města o převrat prostřednictvím vyloučených členů již nemohl být legalizován soudem.',
      type: 'legal' as const,
      details: [
        'Prekluzivní lhůta 3 měsíce od 28.11.2023',
        'Po tomto datu: vyloučení již nelze napadnout',
        'Plán města: převrat selhal',
        'Žaloby podané později jsou opožděné',
      ],
    },
    {
      date: 'Březen-duben 2024',
      title: 'Pokračující blokace přístupu',
      description: 'I po vypršení prekluzivní lhůty SPORT Krupka nadále blokoval přístup legitimnímu předsedovi a umožňoval vyloučeným členům.',
      type: 'violation' as const,
      severity: 'high' as const,
      details: [
        'Legitimní předseda stále nemá přístup',
        'Vyloučení členové stále mají klíče',
        'SPORT Krupka ignoruje právní situaci',
        'Pokračující neoprávněný zásah',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-800 via-blue-800 to-slate-900 py-8 md:py-16 border-b border-slate-600">
        <div className="container mx-auto px-3 md:px-8 max-w-6xl">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-white text-sm font-medium border border-white/30">
                  🏛️ Veřejná instituce
                </span>
                <span className="px-3 py-1 bg-red-900/70 backdrop-blur rounded-full text-red-100 text-sm font-medium border border-red-700/30">
                  ⚠️ Zásah do autonomie spolku
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3">
                {info.name}
              </h1>
              <p className="text-xl text-slate-200 font-medium max-w-3xl">
                {info.description}
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-4 md:p-8 mt-8">
            <div className="flex items-center gap-4">
              <div className="text-6xl">🎯</div>
              <div className="flex-1">
                <div className="text-red-100 text-sm font-medium mb-2">Koordinovaný pokus o převrat</div>
                <div className="text-2xl font-black text-white mb-2">
                  Město + SPORT Krupka + Vyloučení členové
                </div>
                <div className="text-slate-200 text-sm">
                  Cíl: "Zvolit" Syryčanského jako nového předsedy místo legitimního Brožka
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-8 py-6 md:py-12 max-w-6xl">
        {/* Klíčové osoby */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            👥 Klíčové osoby města a SPORT Krupka
          </h2>
          <div className="grid gap-3 md:gap-6">
            {keyFigures.map((person, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-4 md:p-4 md:p-8 border-2 border-slate-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{person.name}</h3>
                    <p className="text-lg text-slate-600">{person.role}</p>
                  </div>
                  {person.link && (
                    <a href={person.link} className="px-4 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition">
                      Detail →
                    </a>
                  )}
                </div>
                <div className="mt-4 p-4 bg-red-50 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-2">Problematické jednání:</h4>
                  <ul className="space-y-2">
                    {person.actions.map((action, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="text-red-600">•</span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Porušení */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            ⚠️ Hlavní porušení a právní problémy
          </h2>
          <div className="space-y-4">
            {violations.map((violation, index) => {
              const severityColors = {
                critical: 'border-red-300 bg-red-50',
                high: 'border-orange-300 bg-orange-50',
                medium: 'border-yellow-300 bg-yellow-50',
              };
              const severityLabels = {
                critical: '🔴 KRITICKÉ',
                high: '🟠 VYSOKÉ',
                medium: '🟡 STŘEDNÍ',
              };

              return (
                <div
                  key={index}
                  className={`p-4 md:p-6 rounded-xl ${severityColors[violation.severity]} border-2 shadow-md`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-900 flex-1">{violation.title}</h3>
                    <span className="px-3 py-1 bg-white/80 rounded-full text-xs font-bold text-slate-700 ml-4">
                      {severityLabels[violation.severity]}
                    </span>
                  </div>
                  <p className="text-slate-700 mb-3">{violation.description}</p>
                  <div className="p-3 bg-white/60 rounded-lg">
                    <div className="text-sm font-bold text-slate-900 mb-1">Právní kontext:</div>
                    <div className="text-sm text-slate-700">{violation.law}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            📊 Chronologie akcí města a SPORT Krupka
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              {timeline.map((event, index) => {
                const typeStyles = {
                  violation: { bg: 'bg-red-50', icon: '⚠️', label: 'Porušení' },
                  coordination: { bg: 'bg-orange-50', icon: '🤝', label: 'Koordinace' },
                  legal: { bg: 'bg-blue-50', icon: '⚖️', label: 'Právní milník' },
                };
                const style = typeStyles[event.type];

                return (
                  <div
                    key={index}
                    className={`p-4 md:p-6 rounded-lg ${style.bg} border-2 ${event.severity === 'critical' ? 'border-red-400' : event.severity === 'high' ? 'border-orange-400' : 'border-slate-200'}`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl">{style.icon}</span>
                          <div>
                            <div className="text-sm font-bold text-slate-600">{event.date}</div>
                            <h3 className="text-lg font-bold text-slate-900">{event.title}</h3>
                          </div>
                        </div>
                        <p className="text-slate-700 mb-3">{event.description}</p>
                      </div>
                      <span className="px-3 py-1 bg-white/70 rounded-full text-xs font-bold text-slate-700 ml-4">
                        {style.label}
                      </span>
                    </div>
                    {event.details && (
                      <div className="pl-11 space-y-1">
                        {event.details.map((detail, i) => (
                          <div key={i} className="text-sm text-slate-600 flex items-start gap-2">
                            <span className="text-blue-500">▸</span>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Shrnutí */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl shadow-lg p-4 md:p-4 md:p-8 border-2 border-red-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span>📌</span>
              <span>Shrnutí postupu města a SPORT Krupka</span>
            </h2>
            <div className="space-y-3 text-slate-700">
              <div className="p-4 bg-white rounded-lg">
                <h3 className="font-bold text-slate-900 mb-2">Koordinace:</h3>
                <p>Starosta Kuzma (jednatel SPORT Krupka), místostarosta Bokoč a sportovní manažer Syryčanský koordinovali akce s vyloučenými členy (Vaniš, Pivoňka, Vlach, Kulík).</p>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <h3 className="font-bold text-slate-900 mb-2">Cíl:</h3>
                <p>"Zvolit" Syryčanského jako nového předseda Tělovýchovná jednota Krupka z.s. na nelegálních schůzích a získat kontrolu nad spolkem.</p>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <h3 className="font-bold text-slate-900 mb-2">Metody:</h3>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Výměna zámků na Pinčesárně</li>
                  <li>Umožnění přístupu vyloučeným členům</li>
                  <li>Blokování přístupu legitimnímu předsedovi</li>
                  <li>Poskytování prostor pro nelegální schůze</li>
                  <li>Ignorování oficiálních notifikací</li>
                </ul>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <h3 className="font-bold text-slate-900 mb-2">Výsledek:</h3>
                <p className="font-semibold text-red-700">Pokus o převrat selhal. Soud potvrdil legitimitu vyloučení a rozhodnutí legitimního předsedy. Všechny žaloby vyloučených členů byly zamítnuty.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Související stránky */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            🔗 Související stránky
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/akteri/tomas-syrycansky" className="block p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
              <div className="flex items-center gap-3">
                <span className="text-3xl">👤</span>
                <span className="font-bold text-slate-900">Tomáš Syryčanský - klíčový aktér</span>
              </div>
            </a>
            <a href="/akteri/marek-vanis" className="block p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
              <div className="flex items-center gap-3">
                <span className="text-3xl">👤</span>
                <span className="font-bold text-slate-900">Marek Vaniš - spolupráce s městem</span>
              </div>
            </a>
            <a href="/otazky/kdo-mel-pravo-rozhodovat" className="block p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
              <div className="flex items-center gap-3">
                <span className="text-3xl">❓</span>
                <span className="font-bold text-slate-900">Kdo měl právo rozhodovat?</span>
              </div>
            </a>
            <a href="/udalosti" className="block p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
              <div className="flex items-center gap-3">
                <span className="text-3xl">📅</span>
                <span className="font-bold text-slate-900">Hlavní timeline kauzy</span>
              </div>
            </a>
          </div>
        </section>

        {/* Navigace */}
        <div className="flex items-center justify-center pt-8 mt-8">
          <a
            href="/"
            className="flex items-center gap-2 px-6 py-3 bg-slate-200 hover:bg-slate-300 rounded-lg font-bold text-slate-900 transition"
          >
            <span>←</span>
            <span>Zpět na hlavní stránku</span>
          </a>
        </div>
      </div>
    </div>
  );
}
