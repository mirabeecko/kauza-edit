export default function UdalostiPage() {
  const events = [
    {
      date: '24.8.2021',
      phase: 1,
      phaseName: 'Příprava',
      title: 'Zvolení nového předsedy',
      icon: '🏛️',
      importance: 'critical' as const,
      description: 'Jednomyslné zvolení Miroslava Brožka předsedou spolku na 5 let. Dohoda o předání aktualizovaných seznamů členů.',
      details: [
        'Přítomní delegáti: Vaniš, Vlach, Kulík, Rosenkranc, Brei, Vodvářková, Kratochvílová',
        'Hlasování: jednomyslně PRO',
        'Funkční období: 5 let',
      ],
      slug: 'zvoleni-predsedy',
    },
    {
      date: '13.9.2021',
      phase: 1,
      phaseName: 'Příprava',
      title: 'První výzva k zaslání seznamů členů',
      icon: '📧',
      importance: 'medium' as const,
      description: 'MB zaslal email všem předsedům oddílů s výzvou k zaslání seznamů. Lhůta: do 26.9.2021.',
      details: [
        'Adresáti: Vaniš, Vlach, Kulík, další předsedové oddílů',
        'Lhůta: 13 dní (do 26.9.2021)',
        'Důvod: Aktualizace členské základny (osoby 100+ let)',
      ],
      slug: 'prvni-vyzva-seznamy',
    },
    {
      date: '26.9.2021',
      phase: 1,
      phaseName: 'Příprava',
      title: 'Vypršení lhůty',
      icon: '⚠️',
      importance: 'high' as const,
      description: 'Vaniš, Vlach, Kulík seznamy NEDODALI. Turistický oddíl jako jediný seznam zaslal.',
      details: [
        'Nedodali: Vaniš (stolní tenis), Vlach (lyžaři), Kulík (karate)',
        'Dodal: pouze turistický oddíl',
        'Důsledek: Nelze ověřit legitimitu členství',
      ],
      slug: 'vyprsel-lhuta-seznamy',
    },
    {
      date: '10.12.2021',
      phase: 1,
      phaseName: 'Příprava',
      title: 'Výzva k úhradě členských příspěvků',
      icon: '💰',
      importance: 'medium' as const,
      description: 'MB vyzval oddíly k úhradě členských příspěvků. Vaniš, Vlach, Kulík neuhradili.',
      details: [
        'Částka: 200 Kč/člen/rok',
        'Účel: Úhrada svazům ČSTV, kraji, obci',
        'Neuhradili: Vaniš, Vlach, Kulík (celkem 143.200 Kč)',
      ],
      slug: 'vyzva-uhrada-prispevku',
    },
    {
      date: '9.9.2022',
      phase: 2,
      phaseName: 'Eskalace',
      title: 'Smrt otce MB - První trénink s dětmi',
      icon: '💔',
      importance: 'medium' as const,
      description: 'Den po smrti otce MB převzal trénování dětí svého otce. Pokračování v rodinné tradici.',
      details: [
        'Osobní tragédie v rodinném kontextu',
        'Převzetí trénování dětí',
        'Pokračování v rodinném odkazu',
      ],
      slug: 'smrt-otce-mb',
    },
    {
      date: '6.11.2023',
      phase: 2,
      phaseName: 'Eskalace',
      title: 'Předžalobní výzva Vanišovi',
      icon: '📜',
      importance: 'high' as const,
      description: 'Předseda spolku zaslal předžalobní výzvu Vanišovi ke zjednání nápravy.',
      details: [
        'Požadováno: 387.460 Kč (energie + oddílové příspěvky)',
        'Lhůta k plnění: 8 dnů od doručení',
        'Reakce: Ignorováno',
      ],
      slug: 'predzalobni-vyzva-vanis',
    },
    {
      date: '14.11.2023',
      phase: 2,
      phaseName: 'Eskalace',
      title: 'Předžalobní výzvy Pivoňkovi a Vlachovi',
      icon: '📜',
      importance: 'high' as const,
      description: 'Předseda spolku zaslal předžalobní výzvy Pivoňkovi (lhůta do 24.11.) a Vlachovi.',
      details: [
        'Pivoňka: 72.593 Kč (pokladna + členské příspěvky)',
        'Vlach: částka specifikována v dokumentech',
        'Reakce: Obě výzvy ignorovány',
      ],
      slug: 'predzalobni-vyzvy-pivonka-vlach',
    },
    {
      date: '28.11.2023',
      phase: 2,
      phaseName: 'Eskalace',
      title: 'VYLOUČENÍ Vaniše a Pivoňky',
      icon: '❌',
      importance: 'critical' as const,
      description: 'Klíčová událost: Předseda spolku vyloučil Vaniše a Pivoňku s okamžitou platností. Doručeno datovou schránkou.',
      details: [
        'Právní základ: § 239 NOZ (hrubé porušení povinností)',
        'Forma: Rozhodnutí předsedy spolku',
        'Doručení: Datová schránka (prokázané)',
        'Začátek 3měsíční prekluzivní lhůty (§ 259 NOZ)',
      ],
      slug: 'vylouceni-vanise-pivonky',
    },
    {
      date: '19.12.2023',
      phase: 2,
      phaseName: 'Eskalace',
      title: 'Mimořádná schůze výboru oddílu',
      icon: '🏛️',
      importance: 'high' as const,
      description: 'Výbor oddílu stolního tenisu potvrdil vyloučení Vaniše a Pivoňky. Zvolení nového předsedy oddílu.',
      details: [
        'Potvrzení vyloučení Vaniše a Pivoňky',
        'Zvolení nového legitimního předsedy oddílu',
        'Návrat k řádnému fungování oddílu',
      ],
      slug: 'schuze-vyboru-potvrzeni',
    },
    {
      date: '25.1.2024',
      phase: 3,
      phaseName: 'Právní boj',
      title: 'Shromáždění delegátů TJ Krupka',
      icon: '🏛️',
      importance: 'high' as const,
      description: 'Souhlas s rozhodnutím výboru o vyloučení. Schválení podání trestního oznámení. Schválení nových stanov.',
      details: [
        'Souhlas s vyloučením Vaniše a Pivoňky',
        'Schválení podání trestního oznámení',
        'Schválení nových stanov spolku',
      ],
      slug: 'shromazdeni-delegatu-2024',
    },
    {
      date: '28.2.2024',
      phase: 3,
      phaseName: 'Právní boj',
      title: 'Vypršení prekluzivní lhůty',
      icon: '⏰',
      importance: 'critical' as const,
      description: 'KRITICKÝ PRÁVNÍ MILNÍK: Vypršela 3měsíční lhůta pro žalobu dle § 259 NOZ. Po tomto datu již nelze napadnout vyloučení.',
      details: [
        'Právní základ: § 259 NOZ',
        'Lhůta: přesně 3 měsíce od doručení (28.11.2023)',
        'Důsledek: Prekluzivní lhůta nelze prominout ani prodloužit',
        'Po tomto datu: Žaloba by měla být odmítnuta',
      ],
      slug: 'vyprseni-prekluzivni-lhuty',
    },
    {
      date: '8.4.2024',
      phase: 3,
      phaseName: 'Právní boj',
      title: 'Žaloba Vaniše a Pivoňky',
      icon: '⚖️',
      importance: 'critical' as const,
      description: 'Žaloba na neplatnost vyloučení - podána 39 DNÍ PO LHŮTĚ! Dle § 259 NOZ by měla být odmítnuta.',
      details: [
        'Podáno: 39 dní po vypršení lhůty',
        'Lhůta vypršela: 28.2.2024',
        'Právní problém: Prekluzivní lhůta (NS ČR 29 Cdo 4627/2016)',
        'Očekávaný výsledek: Odmítnutí žaloby',
      ],
      slug: 'zaloba-vanis-pivonka',
    },
    {
      date: 'Podzim 2024',
      phase: 3,
      phaseName: 'Právní boj',
      title: 'Rozhodnutí krajského soudu',
      icon: '⚖️',
      importance: 'critical' as const,
      description: 'Krajský soud rozhodl, že vyloučení bylo nicotné. Problematické rozhodnutí ignorující § 6 a § 8 NOZ.',
      details: [
        'Ignorována: Prekluzivní lhůta (§ 259 NOZ)',
        'Ignorováno: § 6 NOZ (nikdo nesmí těžit z nepoctivého činu)',
        'Ignorováno: § 8 NOZ (zneužití práva)',
        'Důsledek: Legitimizace nepoctivého jednání',
      ],
      slug: 'rozhodnuti-krajskeho-soudu',
    },
  ];

  const phases = [
    { id: 1, name: 'Příprava a dohody', period: '2021', color: 'from-green-500 to-emerald-600', bgColor: 'bg-green-50', borderColor: 'border-green-300' },
    { id: 2, name: 'Eskalace a konflikty', period: '2022-2023', color: 'from-orange-500 to-red-500', bgColor: 'bg-orange-50', borderColor: 'border-orange-300' },
    { id: 3, name: 'Právní boj', period: '2024', color: 'from-red-600 to-red-800', bgColor: 'bg-red-50', borderColor: 'border-red-300' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-8 max-w-6xl text-center">
          <div className="inline-block px-4 py-2 bg-blue-600 rounded-full text-sm font-bold mb-6">
            📅 ČASOVÁ OSA KAUZY
          </div>
          <h1 className="text-6xl font-black mb-6">
            Kompletní chronologie
          </h1>
          <p className="text-2xl text-blue-200 mb-8">
            Od zvolení předsedy (24.8.2021) po soudní řízení (2024)
          </p>
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-3xl font-black mb-1">{events.length}</div>
              <div className="text-sm text-blue-200">Klíčových událostí</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-3xl font-black mb-1">3</div>
              <div className="text-sm text-blue-200">Fáze kauzy</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-3xl font-black mb-1">3+</div>
              <div className="text-sm text-blue-200">Roky trvání</div>
            </div>
          </div>
        </div>
      </div>

      {/* Phase Navigation */}
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b-2 border-slate-200 shadow-lg">
        <div className="container mx-auto px-8 py-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-4">
            {phases.map((phase) => (
              <div
                key={phase.id}
                className={`p-4 rounded-lg border-2 ${phase.bgColor} ${phase.borderColor} transition hover:shadow-md cursor-pointer`}
              >
                <div className="text-sm font-semibold mb-1">Fáze {phase.id}</div>
                <div className="text-lg font-bold">{phase.name}</div>
                <div className="text-sm opacity-70">{phase.period}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="container mx-auto px-8 py-16 max-w-6xl">
        {phases.map((phase) => (
          <div key={phase.id} className="mb-20">
            {/* Phase Header */}
            <div className={`bg-gradient-to-r ${phase.color} rounded-2xl p-8 text-white shadow-2xl mb-12`}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold mb-2 opacity-90">FÁZE {phase.id}</div>
                  <h2 className="text-4xl font-black mb-2">{phase.name}</h2>
                  <div className="text-xl opacity-90">{phase.period}</div>
                </div>
                <div className="text-7xl opacity-20">
                  {phase.id === 1 ? '🏁' : phase.id === 2 ? '⚡' : '⚖️'}
                </div>
              </div>
            </div>

            {/* Phase Events */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300 via-blue-400 to-blue-300 transform -translate-x-1/2"></div>

              <div className="space-y-12">
                {events
                  .filter((event) => event.phase === phase.id)
                  .map((event, index) => (
                    <TimelineEvent key={index} event={event} index={index} />
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-8 max-w-4xl text-center text-white">
          <h2 className="text-3xl font-black mb-4">
            Prozkoumejte další detaily kauzy
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Každá událost je podložena dokumenty a důkazy
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/akteri"
              className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:shadow-2xl transition transform hover:scale-105"
            >
              👥 Aktéři kauzy
            </a>
            <a
              href="/cisla"
              className="px-8 py-4 bg-white/20 backdrop-blur text-white font-bold rounded-xl hover:bg-white/30 transition"
            >
              💰 Finanční přehled
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

interface Event {
  date: string;
  phase: number;
  phaseName: string;
  title: string;
  icon: string;
  importance: 'critical' | 'high' | 'medium' | 'low';
  description: string;
  details: string[];
  slug: string;
}

function TimelineEvent({ event, index }: { event: Event; index: number }) {
  const isLeft = index % 2 === 0;

  const importanceStyles = {
    critical: {
      bg: 'bg-gradient-to-br from-red-500 to-red-700',
      border: 'border-red-400',
      ring: 'ring-red-500',
      dot: 'bg-red-500',
      label: '🔥 KRITICKÁ',
    },
    high: {
      bg: 'bg-gradient-to-br from-orange-500 to-orange-600',
      border: 'border-orange-400',
      ring: 'ring-orange-500',
      dot: 'bg-orange-500',
      label: '⚠️ VYSOKÁ',
    },
    medium: {
      bg: 'bg-gradient-to-br from-blue-500 to-blue-600',
      border: 'border-blue-400',
      ring: 'ring-blue-500',
      dot: 'bg-blue-500',
      label: 'ℹ️ STŘEDNÍ',
    },
    low: {
      bg: 'bg-gradient-to-br from-slate-500 to-slate-600',
      border: 'border-slate-400',
      ring: 'ring-slate-500',
      dot: 'bg-slate-500',
      label: '📌 NÍZKÁ',
    },
  };

  const style = importanceStyles[event.importance];

  return (
    <div className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
      {/* Event Card */}
      <div className={`w-5/12 ${isLeft ? 'pr-12' : 'pl-12'}`}>
        <a
          href={`/udalosti/${event.slug}`}
          className="block group"
        >
          <div className="bg-white rounded-2xl shadow-xl border-2 border-slate-200 hover:border-blue-400 transition-all duration-300 overflow-hidden transform hover:scale-105 hover:shadow-2xl">
            {/* Card Header */}
            <div className={`${style.bg} p-6 text-white`}>
              <div className="flex items-start justify-between mb-3">
                <div className="text-6xl">{event.icon}</div>
                <div className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs font-bold">
                  {style.label}
                </div>
              </div>
              <div className="text-2xl font-black mb-2">{event.date}</div>
              <div className="text-sm opacity-90">{event.phaseName}</div>
            </div>

            {/* Card Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition">
                {event.title}
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                {event.description}
              </p>

              {/* Details List */}
              <div className="space-y-2 mb-4">
                {event.details.map((detail, i) => (
                  <div key={i} className="flex items-start text-sm text-slate-600">
                    <span className="mr-2 text-blue-500 flex-shrink-0">▸</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center text-blue-600 font-bold text-sm group-hover:translate-x-2 transition-transform">
                <span>Zobrazit detail</span>
                <span className="ml-2">→</span>
              </div>
            </div>
          </div>
        </a>
      </div>

      {/* Center Dot */}
      <div className="relative flex items-center justify-center w-2/12 z-10">
        <div className={`absolute w-20 h-20 ${style.dot} rounded-full border-8 border-white shadow-2xl flex items-center justify-center`}>
          <div className="text-3xl">{event.icon}</div>
        </div>
        {/* Connection Line */}
        <div
          className={`absolute w-12 h-1 ${style.dot} ${
            isLeft ? 'left-1/2' : 'right-1/2'
          }`}
        ></div>
      </div>

      {/* Empty Space (for alternating layout) */}
      <div className="w-5/12"></div>
    </div>
  );
}
