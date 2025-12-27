import { showCityContent } from '@/lib/config';

export default function SouvislostiPage() {
  const allConnections = [
    {
      title: 'Koordinovaný pokus o převrat',
      category: 'Hlavní souvislost',
      description: 'Město Krupka (Kuzma, Bokoč) koordinovalo s vyloučenými členy (Vaniš, Pivoňka) pokus o převzetí kontroly nad spolkem prostřednictvím městské společnosti SPORT Krupka (Syryčanský).',
      actors: ['Jan Kuzma', 'Jan Bokoč', 'Tomáš Syryčanský', 'Marek Vaniš', 'Jaromír Pivoňka'],
      events: [
        'Prosinec 2023: Koordinační schůzky Kuzma + Bokoč + Syryčanský',
        '19.12.2023: První výměna zámků',
        '19.1.2024: Druhá výměna zámků - 2 dny po zaslání smlouvy',
        '25.1.2024: Ignorování legitimního shromáždění',
        '26.1.2024: Ignorování oficiální notifikace',
      ],
      evidence: ['Dokumenty o nelegálních shromážděních', 'Datová schránka města', 'Zápisy ze schůzek'],
      severity: 'critical' as const,
    },
    {
      title: 'Nepředání seznamů členů → Nemožnost kontroly',
      category: 'Kauzální řetězec',
      description: 'Nepředání seznamů členů (3+ roky) znemožnilo kontrolu financí, ověření legitimity rozhodování a vymáhání příspěvků. Vytvořilo prostor pro další porušení.',
      actors: ['Marek Vaniš', 'Gustav Vlach', 'Martin Kulík'],
      events: [
        '24.8.2021: Dohoda - seznamy budou předány',
        '2021-2024: Opakované výzvy IGNOROVÁNY',
        'Důsledek: Nemožnost kontroly 2+ mil. Kč',
        'Důsledek: Nemožnost svolat legitimní orgány',
      ],
      evidence: ['Zápis ze shromáždění 24.8.2021', 'Výzvy k předání seznamů', 'Emailová komunikace'],
      severity: 'critical' as const,
    },
    {
      title: 'Vybírání příspěvků bez odvodu → Zpronevěra',
      category: 'Kauzální řetězec',
      description: 'Předsedové oddílů vybírali oddílové příspěvky jménem spolku (přiznali při výslechu), ale nikdy je neodvedli. Celková škoda: 1.214.400 Kč.',
      actors: ['Marek Vaniš', 'Gustav Vlach', 'Martin Kulík'],
      events: [
        'Vaniš: 60 členů × 2.400 Kč/rok × 3 roky = 518.400 Kč',
        'Vlach: 79 členů × 1.200 Kč/rok × 4 roky = 379.200 Kč',
        'Kulík: 40 členů × 3.600 Kč/rok = 316.800 Kč',
        'Vaniš přiznal při výslechu: "Vybíral jsem jménem spolku"',
      ],
      evidence: ['PDF "TJ ODDÍLY 2021-2023"', 'Výpověď Vaniše při výslechu', 'NS ČR 7 Tdo 102/2019'],
      severity: 'critical' as const,
    },
    {
      title: 'Neplacení energií → Spolek platil za oddíly',
      category: 'Kauzální řetězec',
      description: 'Zatímco oddíly vybíraly příspěvky (1.214.400 Kč), Tělovýchovná jednota Krupka z.s. musela ze svého rozpočtu platit energie za jejich provoz (299.921 Kč).',
      actors: ['Marek Vaniš', 'Gustav Vlach'],
      events: [
        'Oddíl stolního tenisu: 43.466 Kč (elektřina + plyn)',
        'Lyžařský oddíl: 256.455 Kč (elektřina)',
        'Oddíl karate: 0 Kč (neprokázáno)',
        'Celkem: 299.921 Kč zaplaceno spolkem',
      ],
      evidence: ['Faktury za energie', 'PDF "TJ ODDÍLY 2021-2023"'],
      severity: 'high' as const,
    },
    {
      title: 'Střet zájmů: Kuzma jako starosta + jednatel',
      category: 'Systémový problém',
      description: 'Jan Kuzma jako starosta města má prosazovat zájem veřejnosti, jako jednatel SPORT Krupka má obchodní zájmy. Tato dvojrole umožnila zneužití pravomoci.',
      actors: ['Jan Kuzma'],
      events: [
        'Kuzma je starosta města Krupka',
        'Současně je jednatel SPORT Krupka s.r.o.',
        'SPORT Krupka vyměnil zámky na příkaz Kuzmy',
        'Město ignorovalo oficiální notifikace',
      ],
      evidence: ['Veřejný rejstřík', 'Zákon o střetu zájmů'],
      severity: 'critical' as const,
    },
    {
      title: 'Výměna zámků → Umožnění přístupu vyloučeným',
      category: 'Kauzální řetězec',
      description: 'SPORT Krupka vyměnila zámky a znemožnila přístup legitimnímu předsedovi. Současně umožnila přístup vyloučeným členům Vanišovi a Pivoňkovi.',
      actors: ['Tomáš Syryčanský', 'Jan Kuzma', 'Marek Vaniš', 'Jaromír Pivoňka'],
      events: [
        '19.12.2023: První výměna zámků',
        '17.1.2024: Zaslání návrhu nové nájemní smlouvy',
        '19.1.2024: Druhá výměna - 2 DNY po smlouvě!',
        'Legitimní předseda odstraněn, vyloučení členové mají klíče',
      ],
      evidence: ['Datová schránka', 'Svědecké výpovědi', 'Dokumentace výměny zámků'],
      severity: 'critical' as const,
    },
    {
      title: 'Žaloba po prekluzivní lhůtě → Soud ji přesto projednal',
      category: 'Právní problém',
      description: 'Vaniš a Pivoňka podali žalobu 39 dní PO UPLYNUTÍ zákonné 3měsíční lhůty. Krajský soud ji přesto projednal místo odmítnutí.',
      actors: ['Marek Vaniš', 'Jaromír Pivoňka', 'Krajský soud'],
      events: [
        'Vyloučení doručeno: 28.11.2023',
        'Prekluzivní lhůta § 259 NOZ: 3 měsíce → 28.2.2024',
        'Žaloba podána: 8.4.2024 (39 dní PO LHŮTĚ)',
        'Soud ji přesto projednal - ignoroval prekluzivitu',
      ],
      evidence: ['Doručenka vyloučení', 'Žaloba ze dne 8.4.2024', 'NS ČR 29 Cdo 4627/2016'],
      severity: 'critical' as const,
    },
    {
      title: 'Soud ignoroval nepoctivé jednání § 6 a § 8 NOZ',
      category: 'Právní problém',
      description: 'Krajský soud se nezabýval tím, že žalobci vytvořili škodu 650k Kč (Vaniš), obohatili se na úkor spolku a podali žalobu po lhůtě.',
      actors: ['Marek Vaniš', 'Jaromír Pivoňka', 'Krajský soud'],
      events: [
        'Vaniš: škoda 653.659 Kč',
        'Podání žaloby po prekluzivní lhůtě',
        'Spolupráce s městem na převratu',
        'Soud rozhodl v jejich prospěch - ignoroval § 6 a § 8 NOZ',
      ],
      severity: 'critical' as const,
    },
  ];

  // Filter out city-related connections when showCityContent is false
  const cityRelatedConnectionIndexes = [0, 4, 5]; // Koordinovaný pokus, Střet zájmů Kuzma, Výměna zámků
  const connections = showCityContent()
    ? allConnections
    : allConnections.filter((_, index) => !cityRelatedConnectionIndexes.includes(index));

  const allActorNetwork = [
    {
      group: 'Město Krupka',
      color: 'red',
      members: [
        { name: 'Jan Kuzma', role: 'Starosta + jednatel SPORT Krupka', connections: 9 },
        { name: 'Jan Bokoč', role: 'Místostarosta', connections: 8 },
        { name: 'Tomáš Syryčanský', role: 'Sportovní manažer SPORT Krupka', connections: 8 },
      ],
    },
    {
      group: 'Vyloučení členové',
      color: 'orange',
      members: [
        { name: 'Marek Vaniš', role: 'Předseda ST - škoda 653.659 Kč', connections: 15 },
        { name: 'Jaromír Pivoňka', role: 'Člen ST', connections: 8 },
      ],
    },
    {
      group: 'Zánik členství',
      color: 'yellow',
      members: [
        { name: 'Gustav Vlach', role: 'Předseda LO - škoda 1.041.378 Kč', connections: 5 },
        { name: 'Martin Kulík', role: 'Údajný předseda karate - škoda 350.598 Kč', connections: 3 },
      ],
    },
    {
      group: 'Legitimní představitel',
      color: 'green',
      members: [
        { name: 'Miroslav Brožek', role: 'Legitimní předseda TJ Krupka', connections: 12 },
      ],
    },
  ];

  // Filter out město Krupka group from actor network
  const actorNetwork = showCityContent()
    ? allActorNetwork
    : allActorNetwork.filter(group => group.group !== 'Město Krupka');

  const allTimelineConnections = [
    {
      period: '2021',
      title: 'Přípravná fáze',
      events: [
        '24.8.2021: Zvolení Brožka na 5 let',
        '24.8.2021: Dohoda - seznamy členů budou předány',
        '2021: Začátek vybírání příspěvků bez odvodu',
      ],
    },
    {
      period: '2022-2023',
      title: 'Eskalace problémů',
      events: [
        'Opakované výzvy k předání seznamů - IGNOROVÁNY',
        'Pokračující vybírání příspěvků bez odvodu',
        'Neplacení energií - TJ platí za oddíly',
        '28.11.2023: Vyloučení Vaniše a Pivoňky',
      ],
    },
    {
      period: 'Prosinec 2023',
      title: 'Koordinace převratu',
      events: [
        'Koordinační schůzky Kuzma + Bokoč + Syryčanský',
        '19.12.2023: První výměna zámků',
        'Tlak na svolání shromáždění do konce ledna',
      ],
    },
    {
      period: 'Leden 2024',
      title: 'Realizace převratu',
      events: [
        '17.1.2024: Zaslání návrhu nájemní smlouvy',
        '19.1.2024: Druhá výměna zámků (2 dny po smlouvě!)',
        '25.1.2024: Legitimní shromáždění - IGNOROVÁNO',
        '26.1.2024: Oficiální notifikace městu - IGNOROVÁNA',
      ],
    },
    {
      period: 'Únor-Duben 2024',
      title: 'Selhání plánu',
      events: [
        '28.2.2024: Vypršení prekluzivní lhůty § 259 NOZ',
        '8.4.2024: Žaloba podána PO LHŮTĚ (39 dní)',
        'Krajský soud ji přesto projednal',
      ],
    },
  ];

  // Filter out city-related timeline periods
  const cityRelatedPeriods = ['Prosinec 2023', 'Leden 2024']; // Koordinace and Realizace převratu
  const timelineConnections = showCityContent()
    ? allTimelineConnections
    : allTimelineConnections.filter(period => !cityRelatedPeriods.includes(period.period));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-700 via-purple-800 to-indigo-900 py-8 md:py-16 border-b border-purple-600">
        <div className="container mx-auto px-3 md:px-8 max-w-6xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
            🔗 Souvislosti
          </h1>
          <p className="text-xl text-purple-100 leading-relaxed">
            Propojení mezi aktéry, událostmi a kauzálními řetězci. Jak jednotlivé části kauzy
            vzájemně souvisejí a vytvářejí kompletní obraz.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-8 py-6 md:py-12 max-w-6xl">
        {/* Síť aktérů */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            👥 Síť aktérů a jejich propojení
          </h2>
          <div className="space-y-6">
            {actorNetwork.map((group, index) => {
              const colorClasses = {
                red: 'border-red-300 bg-red-50',
                orange: 'border-orange-300 bg-orange-50',
                yellow: 'border-yellow-300 bg-yellow-50',
                green: 'border-green-300 bg-green-50',
              };

              return (
                <div key={index} className={`p-4 md:p-6 rounded-xl ${colorClasses[group.color as keyof typeof colorClasses]} border-2 shadow-md`}>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{group.group}</h3>
                  <div className="space-y-3">
                    {group.members.map((member, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                        <div>
                          <div className="font-bold text-slate-900">{member.name}</div>
                          <div className="text-sm text-slate-600">{member.role}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-slate-500">Propojení:</span>
                          <span className="px-3 py-1 bg-slate-100 rounded-full font-bold text-slate-700">
                            {member.connections}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Klíčové souvislosti */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            🔍 Klíčové souvislosti a kauzální řetězce
          </h2>
          <div className="space-y-6">
            {connections.map((connection, index) => {
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
                <div key={index} className={`p-4 md:p-6 rounded-xl ${severityColors[connection.severity]} border-2 shadow-lg`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full">
                          {connection.category}
                        </span>
                        <span className="px-2 py-1 bg-white/80 rounded text-xs font-bold text-slate-700">
                          {severityLabels[connection.severity]}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{connection.title}</h3>
                      <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        {connection.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2 text-sm">👥 Zapojení aktéři:</h4>
                      <div className="space-y-1">
                        {connection.actors.map((actor, idx) => (
                          <div key={idx} className="text-sm text-slate-700 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                            {actor}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-900 mb-2 text-sm">📅 Klíčové události:</h4>
                      <div className="space-y-1">
                        {connection.events.map((event, idx) => (
                          <div key={idx} className="text-sm text-slate-700 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5"></span>
                            <span className="flex-1">{event}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-300">
                    <h4 className="font-bold text-slate-900 mb-2 text-sm">📎 Důkazy:</h4>
                    <div className="flex flex-wrap gap-2">
                      {connection.evidence.map((ev, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/70 rounded-full text-xs text-slate-700">
                          {ev}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Časová osa propojení */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            📊 Časová osa propojených událostí
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              {timelineConnections.map((period, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-32">
                      <div className="px-4 py-2 bg-purple-600 text-white font-bold rounded-lg text-center">
                        {period.period}
                      </div>
                    </div>
                    <div className="flex-1 pb-6 border-l-4 border-purple-300 pl-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{period.title}</h3>
                      <div className="space-y-2">
                        {period.events.map((event, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="text-purple-600">•</span>
                            <span className="text-sm text-slate-700">{event}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vzorce a systémové problémy */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            🎯 Identifikované vzorce a systémové problémy
          </h2>
          <div className="grid md:grid-cols-2 gap-3 md:gap-6">
            <div className="p-4 md:p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl shadow-lg border-2 border-red-200">
              <h3 className="text-xl font-bold text-red-900 mb-4">🔴 Vzorec 1: Koordinovaný postup</h3>
              <p className="text-sm text-slate-700 mb-3">
                Město Krupka (politická moc) + SPORT Krupka (kontrola prostor) + vyloučení členové (formální legitimita)
                = pokus o převzetí kontroly nad spolkem.
              </p>
              <div className="text-xs text-red-800 bg-white/80 p-3 rounded">
                <strong>Důkaz koordinace:</strong> Schůzky, synchronizované kroky (výměna zámků + nelegální schůze),
                ignorování oficiálních notifikací.
              </div>
            </div>

            <div className="p-4 md:p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl shadow-lg border-2 border-orange-200">
              <h3 className="text-xl font-bold text-orange-900 mb-4">🟠 Vzorec 2: Systematické ignorování</h3>
              <p className="text-sm text-slate-700 mb-3">
                3+ roky opakovaného ignorování výzev, dohod a právních povinností → vytvoření prostoru pro další porušení.
              </p>
              <div className="text-xs text-orange-800 bg-white/80 p-3 rounded">
                <strong>Příklady:</strong> Nepředání seznamů členů, neplacení energií, ignorování notifikací,
                ignorování legitimního shromáždění.
              </div>
            </div>

            <div className="p-4 md:p-6 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl shadow-lg border-2 border-yellow-200">
              <h3 className="text-xl font-bold text-yellow-900 mb-4">🟡 Vzorec 3: Dvojí metr</h3>
              <p className="text-sm text-slate-700 mb-3">
                Aktéři požadují dodržování pravidel od druhých, sami je systematicky porušují.
              </p>
              <div className="text-xs text-yellow-800 bg-white/80 p-3 rounded">
                <strong>Příklad:</strong> Vaniš požaduje práva člena (žaloba), ale nikdy neplnil povinnosti člena
                (seznamy, příspěvky, energie).
              </div>
            </div>

            <div className="p-4 md:p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl shadow-lg border-2 border-purple-200">
              <h3 className="text-xl font-bold text-purple-900 mb-4">🟣 Systémový problém: Střet zájmů</h3>
              <p className="text-sm text-slate-700 mb-3">
                Jan Kuzma jako starosta + jednatel městské společnosti = nebezpečná koncentrace moci umožňující zneužití.
              </p>
              <div className="text-xs text-purple-800 bg-white/80 p-3 rounded">
                <strong>Riziko:</strong> Politická moc × obchodní zájmy × kontrola prostor = možnost zasahovat
                do autonomie nezávislých spolků.
              </div>
            </div>
          </div>
        </section>

        {/* Související stránky */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            🔗 Související stránky
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a href="/udalosti" className="block p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
              <div className="text-3xl mb-2">📅</div>
              <div className="font-bold text-slate-900 mb-1">Události</div>
              <div className="text-sm text-slate-600">Kompletní časová osa</div>
            </a>
            <a href="/akteri" className="block p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
              <div className="text-3xl mb-2">👥</div>
              <div className="font-bold text-slate-900 mb-1">Aktéři</div>
              <div className="text-sm text-slate-600">Osoby zapojené v kauze</div>
            </a>
            <a href="/mesto-krupka" className="block p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
              <div className="text-3xl mb-2">🏛️</div>
              <div className="font-bold text-slate-900 mb-1">Město Krupka</div>
              <div className="text-sm text-slate-600">Role města v kauze</div>
            </a>
            <a href="/cisla" className="block p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
              <div className="text-3xl mb-2">💰</div>
              <div className="font-bold text-slate-900 mb-1">Čísla</div>
              <div className="text-sm text-slate-600">Finanční přehled</div>
            </a>
            <a href="/pointy" className="block p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
              <div className="text-3xl mb-2">💡</div>
              <div className="font-bold text-slate-900 mb-1">Pointy</div>
              <div className="text-sm text-slate-600">Shrnutí kauzálních řetězců</div>
            </a>
            <a href="/detailni-analyza" className="block p-5 bg-white rounded-xl shadow hover:shadow-lg transition border-2 border-purple-300">
              <div className="text-3xl mb-2">🔬</div>
              <div className="font-bold text-slate-900 mb-1">Detailní analýza</div>
              <div className="text-sm text-slate-600">Hloubková analýza kauzy</div>
            </a>
          </div>
        </section>

        {/* Navigace */}
        <div className="flex items-center justify-center pt-8">
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
