export default function UdalostiPage() {
  const events = [
    // 2021
    {
      date: '24.8.2021',
      year: 2021,
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
      year: 2021,
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
      year: 2021,
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
      year: 2021,
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
    // 2022
    {
      date: '9.9.2022',
      year: 2022,
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
    // 2023
    {
      date: '19.10.2023',
      year: 2023,
      title: 'Pokus o převod majetku spolku na město Krupka',
      icon: '🏛️',
      importance: 'critical' as const,
      description: 'Neplatně svolaná schůze Vanišem, na které se pokusil o převod majetku spolku na město Krupka. Předseda spolku byl v tu dobu na dovolené.',
      details: [
        'Svolal: Marek Vaniš (neoprávněně)',
        'Datum: V době dovolené legitimního předsedy spolku',
        'Cíl: Převod majetku Tělovýchovné jednoty Krupka z.s. na město Krupka',
        'Právní pozice spolku: Neplatně svolaná schůze bez oprávnění',
        'Výsledek: Pokus o převod majetku spolku mimo kontrolu legitimních orgánů',
      ],
      slug: 'pokus-prevod-majetku-mesto',
    },
    {
      date: '6.11.2023',
      year: 2023,
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
      year: 2023,
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
      year: 2023,
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
      year: 2023,
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
    // 2024
    {
      date: '25.1.2024',
      year: 2024,
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
      year: 2024,
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
  ];

  const years = [
    { year: 2021, name: 'Rok 2021', color: 'from-green-500 to-emerald-600', bgColor: 'bg-green-50', borderColor: 'border-green-300' },
    { year: 2022, name: 'Rok 2022', color: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-50', borderColor: 'border-blue-300' },
    { year: 2023, name: 'Rok 2023', color: 'from-orange-500 to-red-500', bgColor: 'bg-orange-50', borderColor: 'border-orange-300' },
    { year: 2024, name: 'Rok 2024', color: 'from-red-600 to-red-800', bgColor: 'bg-red-50', borderColor: 'border-red-300' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-3 md:px-8 max-w-6xl text-center">
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
              <div className="text-3xl font-black mb-1">4</div>
              <div className="text-sm text-blue-200">Roky</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-3xl font-black mb-1">3+</div>
              <div className="text-sm text-blue-200">Roky trvání</div>
            </div>
          </div>
        </div>
      </div>

      {/* Year Navigation */}
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b-2 border-slate-200 shadow-lg">
        <div className="container mx-auto px-3 md:px-8 py-4 max-w-6xl">
          <div className="grid grid-cols-4 gap-4">
            {years.map((yearInfo) => {
              const eventCount = events.filter(e => e.year === yearInfo.year).length;
              return (
                <div
                  key={yearInfo.year}
                  className={`p-4 rounded-lg border-2 ${yearInfo.bgColor} ${yearInfo.borderColor} transition hover:shadow-md cursor-pointer`}
                >
                  <div className="text-2xl font-bold mb-1">{yearInfo.year}</div>
                  <div className="text-sm opacity-70">{eventCount} událostí</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="container mx-auto px-3 md:px-8 py-8 md:py-16 max-w-6xl">
        {years.map((yearInfo) => {
          const yearEvents = events.filter(e => e.year === yearInfo.year);
          if (yearEvents.length === 0) return null;

          return (
            <div key={yearInfo.year} className="mb-20">
              {/* Year Header */}
              <div className={`bg-gradient-to-r ${yearInfo.color} rounded-2xl p-4 md:p-8 text-white shadow-2xl mb-12`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-5xl font-black mb-2">{yearInfo.year}</h2>
                    <div className="text-xl opacity-90">{yearEvents.length} klíčových událostí</div>
                  </div>
                  <div className="text-7xl opacity-20">
                    {yearInfo.year === 2021 ? '🏁' : yearInfo.year === 2022 ? '💔' : yearInfo.year === 2023 ? '⚡' : '⚖️'}
                  </div>
                </div>
              </div>

              {/* Year Events */}
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300 via-blue-400 to-blue-300 transform -translate-x-1/2"></div>

                <div className="space-y-12">
                  {yearEvents.map((event, index) => (
                    <TimelineEvent key={index} event={event} index={index} />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ČAST Callout */}
      <div className="container mx-auto px-3 md:px-8 max-w-6xl mb-16">
        <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-4 md:p-8 text-white shadow-2xl">
          <div className="flex items-start gap-3 md:gap-6">
            <div className="text-7xl">🏓</div>
            <div className="flex-1">
              <h2 className="text-3xl font-black mb-3">
                Separátní timeline: Kauza ČAST
              </h2>
              <p className="text-xl mb-4 opacity-90">
                Systematické selhání České asociace stolního tenisu zaslouží vlastní chronologii.
                Celkem 9 událostí dokumentující ignorování žádostí, porušování vlastních pravidel a umožnění neoprávněných přestupů.
              </p>
              <div className="flex gap-4">
                <a
                  href="/cast"
                  className="px-3 md:px-8 py-4 bg-white text-red-600 font-bold rounded-xl hover:shadow-2xl transition transform hover:scale-105 inline-block"
                >
                  🏓 Zobrazit timeline ČAST
                </a>
                <div className="px-6 py-4 bg-white/20 backdrop-blur rounded-xl">
                  <div className="text-3xl font-black">9</div>
                  <div className="text-sm opacity-90">událostí ČAST</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-8 md:py-16">
        <div className="container mx-auto px-3 md:px-8 max-w-4xl text-center text-white">
          <h2 className="text-3xl font-black mb-4">
            Prozkoumejte další detaily kauzy
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Každá událost je podložena dokumenty a důkazy
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/akteri"
              className="px-3 md:px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:shadow-2xl transition transform hover:scale-105"
            >
              👥 Aktéři kauzy
            </a>
            <a
              href="/cisla"
              className="px-3 md:px-8 py-4 bg-white/20 backdrop-blur text-white font-bold rounded-xl hover:bg-white/30 transition"
            >
              💰 Finanční přehled
            </a>
            <a
              href="/cast"
              className="px-3 md:px-8 py-4 bg-white/20 backdrop-blur text-white font-bold rounded-xl hover:bg-white/30 transition"
            >
              🏓 Timeline ČAST
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

interface Event {
  date: string;
  year: number;
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
            <div className={`${style.bg} p-4 md:p-6 text-white`}>
              <div className="flex items-start justify-between mb-3">
                <div className="text-6xl">{event.icon}</div>
                <div className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs font-bold">
                  {style.label}
                </div>
              </div>
              <div className="text-2xl font-black mb-2">{event.date}</div>
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
