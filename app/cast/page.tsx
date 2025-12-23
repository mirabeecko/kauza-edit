export default function CASTPage() {
  const castInfo = {
    name: 'ČAST - Česká asociace stolního tenisu',
    role: 'Sportovní svaz',
    status: 'Problematické jednání',
    description: 'Sportovní svaz, který měl zajistit dodržování pravidel stolního tenisu v ČR. Namísto toho systematicky ignoroval žádosti TJ Krupka a umožnil vyloučeným členům manipulovat s registrací hráčů.',
  };

  const keyFigures = [
    {
      name: 'Miroslav Henžel',
      role: 'Předseda registrační komise / Ředitel soutěží',
      phone: '724 049 092',
      email: 'registracnikomise@ping-pong.cz',
      actions: [
        'Ignoroval opakované žádosti o změnu správce klubu',
        'Vyzval k zaslání třetí žádosti, následně ji zamítl',
        'Přestal odpovídat na telefonní hovory (17.10.2024)',
      ],
    },
  ];

  const violations = [
    {
      title: 'Vyloučení členů neodstranění ze soupisek',
      severity: 'critical' as const,
      description: 'Přes opakované žádosti TJ Krupka o odstranění Ing. Marka Vaniše a Jaromíra Pivoňky ze soupisek a registru ČAST nebyly tyto osoby vyškrtnuty. Spolek informoval ČAST, že tito lidé již nejsou členy od 28.11.2023.',
      violatedRules: [
        'Směrnice ČAST č. 5/2023 - povinnost provést aktualizaci soupisek',
        'Soutěžní řád ČAST - členství musí být aktuální a doložitelné',
      ],
    },
    {
      title: 'Zanedbání povinnosti reagovat na oficiální žádosti',
      severity: 'critical' as const,
      description: 'TJ Krupka opakovaně žádala o změnu správce klubu a vyškrtnutí členů. Dne 28.3.2024 byla doručena další oficiální žádost prostřednictvím datové schránky, na kterou však ČAST VŮBEC NEREAGOVALA.',
      violatedRules: [
        'Organizační řád ČAST (2024) - povinnost reagovat na oficiální žádosti',
      ],
    },
    {
      title: 'Zpochybňování legitimních rozhodnutí spolku',
      severity: 'high' as const,
      description: 'ČAST odmítla respektovat rozhodnutí spolku o vyloučení členů a legitimitě jeho orgánů. Bylo zpochybněno rozhodnutí TJ Krupka, ačkoli spolek doložil všechny potřebné dokumenty.',
      violatedRules: [
        'Stanovy ČAST - asociace nemá pravomoc zasahovat do interních záležitostí spolků',
        'Směrnice ČAST č. 1/2010 - arbitrážní komise má být nestranná',
      ],
    },
    {
      title: 'Opomenutí projednání žádostí',
      severity: 'high' as const,
      description: 'Na schůzi výkonného výboru ČAST (3.4.2024) nebyla projednána žádost TJ Krupka, ačkoli byla v programu.',
      violatedRules: [
        'Organizační řád ČAST - vedení je povinno projednat všechny oficiální žádosti',
      ],
    },
    {
      title: 'Odmítnutí oprávněných změn správce klubu',
      severity: 'high' as const,
      description: 'Žádost o změnu správce klubu byla zamítnuta bez jasného důvodu. Místo toho byl odstraněn Pivoňka a ponechán Vaniš, čímž jim bylo umožněno si vzájemně naklikat přestupy do KST Krupka.',
      violatedRules: [
        'Soutěžní řád a Směrnice ČAST o řízení klubů',
      ],
    },
  ];

  const timeline = [
    {
      date: '3.1.2024',
      title: 'První oznámení ČAST',
      description: 'TJ Krupka oficiálně informovala ČAST o vyloučení Vaniše a Pivoňky. Požadavek na odstranění ze soupisek a změnu správce klubu.',
      type: 'request' as const,
      details: [
        'Oznámeno: Vyloučení Vaniše a Pivoňky k 28.11.2023',
        'Požadavek: Odstranění ze soupisek a registru ČAST',
        'Požadavek: Změna správce klubu',
        'Účel: Zabránění neoprávněné manipulaci s členskou základnou',
      ],
    },
    {
      date: '22.1.2024',
      title: 'Stanovisko ČAST - První selhání',
      description: 'ČAST vydala pouze "stanovisko", nikoli rozhodnutí. Uvedla, že musí počkat na zveřejnění ve Sbírce listin. Žádná akce nebyla provedena.',
      type: 'response' as const,
      severity: 'high' as const,
      details: [
        'Vydáno: Pouze stanovisko (ne rozhodnutí)',
        'Argument: "Počkáme na Sbírku listin"',
        'Realita: Dokumenty již byly ve Sbírce listin',
        'Důsledek: Vaniš a Pivoňka zůstali jako správci klubu',
      ],
    },
    {
      date: '28.3.2024',
      title: 'Druhá žádost ČAST - Úplné mlčení',
      description: 'Opakovaná žádost doručena datovou schránkou s přiloženými dokumenty ze Sbírky listin. ČAST VŮBEC NEREAGOVALA.',
      type: 'request' as const,
      severity: 'critical' as const,
      details: [
        'Doručeno: Datovou schránkou (prokázané doručení)',
        'Přiloženo: Všechny dokumenty ze Sbírky listin',
        'Přiloženo: Rozhodnutí o vyloučení, zápisy schůzí',
        'Reakce ČAST: ŽÁDNÁ - úplné ignorování',
      ],
    },
    {
      date: '3.4.2024',
      title: 'Schůze výkonného výboru - Žádost neprojednána',
      description: 'Žádost TJ Krupka byla v programu schůze, ale nebyla projednána.',
      type: 'response' as const,
      severity: 'high' as const,
      details: [
        'Žádost byla v programu schůze',
        'Přesto nebyla projednána',
        'Porušení organizačního řádu ČAST',
      ],
    },
    {
      date: '10.5.2024',
      title: 'Telefonický hovor s Henželem',
      description: 'Pokus o telefonickou komunikaci s ředitelem soutěží ČAST Miroslavem Henželem. Henžel vyzval k zaslání třetí žádosti.',
      type: 'contact' as const,
      details: [
        'Jednání s: Miroslav Henžel (ředitel soutěží ČAST)',
        'Výzva: Zaslat další žádost o změnu správce',
        'Problém: Žádost již byla zaslána 2× a ignorována',
      ],
    },
    {
      date: '11.5.2024',
      title: 'Třetí žádost ČAST - Zamítnuta',
      description: 'Třetí pokus o oficiální komunikaci s ČAST. Henžel nejprve vyzval k zaslání žádosti, následně ji zamítl s odkazem na původní stanovisko.',
      type: 'response' as const,
      severity: 'high' as const,
      details: [
        'Henžel vyzval: "Zašlete žádost o změnu správce"',
        'TJ Krupka zaslala: Třetí oficiální žádost',
        'Henžel zamítl: S odkazem na stanovisko z ledna',
        'Problém: Stanovisko není rozhodnutí',
      ],
    },
    {
      date: 'Léto 2024',
      title: 'Neoprávněné přestupy hráčů - SKANDÁL',
      description: 'Vaniš (vyloučený člen) jako stále aktivní správce klubu neoprávněně schválil přestupy VŠECH hráčů do nově založeného KST Krupka z.s.',
      type: 'violation' as const,
      severity: 'critical' as const,
      details: [
        'Pivoňka: Odstraněn jako správce TJ, stal se správcem KST Krupka',
        'Vaniš: Zůstal správcem TJ (neoprávněně)',
        'Vaniš schválil: Přestupy všech hráčů včetně mládeže',
        'Střet zájmů: Jedna osoba spravuje dva konkurenční kluby',
        'Ztráta výchovného: 33.300 Kč za mládež',
        'Nikdo neměl platný přestupní lístek',
      ],
    },
    {
      date: '4.9.2024',
      title: 'Přestup Marka Vaniše do KST Krupka',
      description: 'I sám Marek Vaniš (vyloučený člen, který schvaloval všechny přestupy) si schválil vlastní přestup do KST Krupka.',
      type: 'violation' as const,
      severity: 'critical' as const,
      details: [
        'Vaniš si jako správce TJ schválil vlastní přestup',
        'Absolutní střet zájmů',
        'ČAST to umožnila, ačkoli byla opakovaně informována',
      ],
    },
    {
      date: '17.10.2024',
      title: 'Henžel přestal komunikovat',
      description: 'Ředitel soutěží ČAST Miroslav Henžel přestal odpovídat na telefonní hovory. Situace zůstala nevyřešená.',
      type: 'contact' as const,
      severity: 'critical' as const,
      details: [
        'Henžel nebere telefon',
        'ČAST nereaguje na žádné další komunikace',
        'Vaniš stále správce klubu (10 měsíců po vyloučení)',
        'Všichni hráči již přestoupili do KST Krupka',
        'TJ Krupka znemožněna jakákoliv činnost v ST',
      ],
    },
  ];

  const damages = [
    {
      label: 'Ztráta výchovného za mládež',
      amount: 33300,
      description: 'ČAST umožnila neoprávněné přestupy dětí, čímž TJ Krupka přišla o výchovné.',
    },
    {
      label: 'Ztráta členské základny stolního tenisu',
      amount: 0,
      description: 'Všichni hráči stolního tenisu byli neoprávněně převedeni do KST Krupka. TJ Krupka nemůže provozovat stolní tenis.',
      isNonFinancial: true,
    },
    {
      label: 'Ztráta soutěží',
      amount: 0,
      description: 'Všechny soutěže byly převedeny bez souhlasu spolku. Náklady na převod hradil KST Krupka (300-200 Kč za hráče + 500-10.000 Kč za družstva).',
      isNonFinancial: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-800 via-orange-700 to-red-900 py-8 md:py-16 border-b border-red-600">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-white text-sm font-medium border border-white/30">
                  🏓 Sportovní svaz
                </span>
                <span className="px-3 py-1 bg-red-900/70 backdrop-blur rounded-full text-red-100 text-sm font-medium border border-red-700/30">
                  ⚠️ Systematická pochybení
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3">
                {castInfo.name}
              </h1>
              <p className="text-xl text-red-100 font-medium">
                {castInfo.role}
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 mt-8">
            <p className="text-white text-lg leading-relaxed">
              {castInfo.description}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 py-12 max-w-6xl">
        {/* Shrnutí */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl shadow-lg p-4 md:p-8 border-2 border-red-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span>📋</span>
              <span>Zjednodušeně řečeno</span>
            </h2>
            <div className="space-y-3 text-slate-700">
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <span className="font-bold text-red-600 flex-shrink-0">1.</span>
                <p>První žádost ve věci odstranění ze soupisek vyloučených členů byla odložena s vysvětlením, že lze reagovat až po nezpochybnitelném doložení.</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <span className="font-bold text-red-600 flex-shrink-0">2.</span>
                <p>Druhá žádost ve věci odstranění ze soupisek vyloučených členů s odkazem na sbírku listin, která nezpochybnitelně dokládá vše - <strong>se nedočkala odpovědi od 28.3.2024</strong> přesto, že byla na programu schůze výkonného výboru 3.4.2024.</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <span className="font-bold text-red-600 flex-shrink-0">3.</span>
                <p>Třetí žádost ve věci změny správce klubu - byla zamítnuta bez vysvětlení s přiložením odkladného stanoviska zaslaného jako reakce na první žádost.</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <span className="font-bold text-red-600 flex-shrink-0">4.</span>
                <p><strong>Přesto došlo ke změně správce</strong> - Odstraněn Pivoňka a ponechán Vaniš čímž jim bylo umožněno si vzájemně naklikat přestupy do KST Krupka.</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <span className="font-bold text-red-600 flex-shrink-0">5.</span>
                <p>Následně dochází k přestupu všech hráčů do nově vytvořeného KST Krupka z.s. a převodu všech soutěží. <strong>Nikdo neměl platný přestupní lístek.</strong></p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <span className="font-bold text-red-600 flex-shrink-0">6.</span>
                <p>4.9.2024 je proveden i přestup Markovi Vanišovi do KST Krupka - <strong>vyloučený člen si sám sobě schválil přestup.</strong></p>
              </div>
            </div>
          </div>
        </section>

        {/* Klíčové osoby */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            👤 Klíčové osoby ČAST
          </h2>
          <div className="grid gap-3 md:gap-6">
            {keyFigures.map((person, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-4 md:p-8 border-2 border-slate-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{person.name}</h3>
                    <p className="text-lg text-slate-600 mb-3">{person.role}</p>
                    <div className="space-y-1 text-sm text-slate-600">
                      <div>📞 {person.phone}</div>
                      <div>📧 {person.email}</div>
                    </div>
                  </div>
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

        {/* Porušení pravidel */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            ⚠️ Porušení vlastních pravidel ČAST
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
                  className={`p-6 rounded-xl ${severityColors[violation.severity]} border-2 shadow-md`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-900 flex-1">{violation.title}</h3>
                    <span className="px-3 py-1 bg-white/80 rounded-full text-xs font-bold text-slate-700 ml-4">
                      {severityLabels[violation.severity]}
                    </span>
                  </div>
                  <p className="text-slate-700 mb-4">{violation.description}</p>
                  <div className="p-4 bg-white/60 rounded-lg">
                    <h4 className="font-bold text-slate-900 mb-2 text-sm">Porušená ustanovení:</h4>
                    <ul className="space-y-1">
                      {violation.violatedRules.map((rule, i) => (
                        <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                          <span className="text-red-600">▸</span>
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Timeline ČAST */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            📊 Chronologie komunikace s ČAST
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              {timeline.map((event, index) => {
                const typeStyles = {
                  request: { bg: 'bg-blue-50', icon: '📨', label: 'Žádost TJ' },
                  response: { bg: 'bg-orange-50', icon: '📄', label: 'Odpověď ČAST' },
                  contact: { bg: 'bg-slate-50', icon: '📞', label: 'Komunikace' },
                  violation: { bg: 'bg-red-50', icon: '⚠️', label: 'Porušení' },
                };
                const style = typeStyles[event.type];

                return (
                  <div
                    key={index}
                    className={`p-6 rounded-lg ${style.bg} border-2 ${event.severity === 'critical' ? 'border-red-400' : event.severity === 'high' ? 'border-orange-400' : 'border-slate-200'}`}
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

        {/* Škody způsobené */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            💸 Škody způsobené TJ Krupka
          </h2>
          <div className="space-y-4">
            {damages.map((damage, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl shadow-md ${damage.isNonFinancial ? 'bg-slate-50 border-2 border-slate-300' : 'bg-red-50 border-2 border-red-300'}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{damage.label}</h3>
                    <p className="text-sm text-slate-700">{damage.description}</p>
                  </div>
                  {!damage.isNonFinancial && (
                    <div className="text-right ml-6">
                      <div className="text-2xl font-black text-slate-900">
                        {damage.amount.toLocaleString('cs-CZ')} Kč
                      </div>
                    </div>
                  )}
                  {damage.isNonFinancial && (
                    <div className="text-4xl opacity-20">⚠️</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Související stránky */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            🔗 Související stránky
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/akteri/marek-vanis" className="block p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
              <div className="flex items-center gap-3">
                <span className="text-3xl">👤</span>
                <span className="font-bold text-slate-900">Marek Vaniš - vyloučený člen jako správce</span>
              </div>
            </a>
            <a href="/akteri/jaromir-pivonka" className="block p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
              <div className="flex items-center gap-3">
                <span className="text-3xl">👤</span>
                <span className="font-bold text-slate-900">Jaromír Pivoňka - vyloučený člen</span>
              </div>
            </a>
            <a href="/udalosti" className="block p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
              <div className="flex items-center gap-3">
                <span className="text-3xl">📅</span>
                <span className="font-bold text-slate-900">Hlavní timeline kauzy</span>
              </div>
            </a>
            <a href="/otazky/kdo-mel-pravo-rozhodovat" className="block p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
              <div className="flex items-center gap-3">
                <span className="text-3xl">❓</span>
                <span className="font-bold text-slate-900">Kdo měl právo rozhodovat?</span>
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
