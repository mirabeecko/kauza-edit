export default function UdalostiPage() {
  const events = [
    {
      date: '24.8.2021',
      phase: 'Fáze 1: Příprava',
      title: 'Zvolení nového předsedy',
      icon: '🏛️',
      importance: 'high',
      description: 'Jednomyslné zvolení Miroslava Brožka předsedou spolku na 5 let. Dohoda o předání aktualizovaných seznamů členů.',
      slug: 'zvoleni-predsedy',
    },
    {
      date: '13.9.2021',
      phase: 'Fáze 1: Příprava',
      title: 'První výzva k zaslání seznamů členů',
      icon: '📧',
      importance: 'medium',
      description: 'MB zaslal email všem předsedům oddílů s výzvou k zaslání seznamů. Lhůta: do 26.9.2021.',
      slug: 'prvni-vyzva-seznamy',
    },
    {
      date: '26.9.2021',
      phase: 'Fáze 1: Příprava',
      title: 'Vypršení lhůty',
      icon: '⚠️',
      importance: 'high',
      description: 'Vaniš, Vlach, Kulík seznamy NEDODALI. Turistický oddíl jako jediný seznam zaslal.',
      slug: 'vyprsel-lhuta-seznamy',
    },
    {
      date: '10.12.2021',
      phase: 'Fáze 1: Příprava',
      title: 'Výzva k úhradě členských příspěvků',
      icon: '💰',
      importance: 'medium',
      description: 'MB vyzval oddíly k úhradě členských příspěvků. Vaniš, Vlach, Kulík neuhradili.',
      slug: 'vyzva-uhrada-prispevku',
    },
    {
      date: '9.9.2022',
      phase: 'Fáze 2: Eskalace',
      title: 'Smrt otce MB - První trénink s dětmi',
      icon: '💔',
      importance: 'medium',
      description: 'Den po smrti otce MB převzal trénování dětí svého otce. Pokračování v rodinné tradici.',
      slug: 'smrt-otce-mb',
    },
    {
      date: '6.11.2023',
      phase: 'Fáze 2: Eskalace',
      title: 'Předžalobní výzva Vanišovi',
      icon: '📜',
      importance: 'high',
      description: 'Předseda spolku zaslal předžalobní výzvu Vanišovi ke zjednání nápravy.',
      slug: 'predzalobni-vyzva-vanis',
    },
    {
      date: '14.11.2023',
      phase: 'Fáze 2: Eskalace',
      title: 'Předžalobní výzvy Pivoňkovi a Vlachovi',
      icon: '📜',
      importance: 'high',
      description: 'Předseda spolku zaslal předžalobní výzvy Pivoňkovi (lhůta do 24.11.) a Vlachovi (lhůta do 14.12.).',
      slug: 'predzalobni-vyzvy-pivonka-vlach',
    },
    {
      date: '28.11.2023',
      phase: 'Fáze 2: Eskalace',
      title: 'VYLOUČENÍ Vaniše a Pivoňky',
      icon: '❌',
      importance: 'critical',
      description: 'Klíčová událost: Předseda spolku vyloučil Vaniše a Pivoňku s okamžitou platností. Doručeno datovou schránkou.',
      slug: 'vylouceni-vanise-pivonky',
    },
    {
      date: '19.12.2023',
      phase: 'Fáze 2: Eskalace',
      title: 'Mimořádná schůze výboru oddílu',
      icon: '🏛️',
      importance: 'high',
      description: 'Výbor oddílu stolního tenisu potvrdil vyloučení Vaniše a Pivoňky. Zvolení nového předsedy oddílu.',
      slug: 'schuze-vyboru-potvrzeni',
    },
    {
      date: '25.1.2024',
      phase: 'Fáze 3: Právní boj',
      title: 'Shromáždění delegátů TJ Krupka',
      icon: '🏛️',
      importance: 'high',
      description: 'Souhlas s rozhodnutím výboru o vyloučení. Schválení podání trestního oznámení. Schválení nových stanov.',
      slug: 'shromazdeni-delegatu-2024',
    },
    {
      date: '28.2.2024',
      phase: 'Fáze 3: Právní boj',
      title: 'Vypršení prekluzivní lhůty',
      icon: '⏰',
      importance: 'critical',
      description: 'KRITICKÝ PRÁVNÍ MILNÍK: Vypršela 3měsíční lhůta pro žalobu dle § 259 NOZ. Po tomto datu již nelze napadnout vyloučení.',
      slug: 'vyprseni-prekluzivni-lhuty',
    },
    {
      date: '8.4.2024',
      phase: 'Fáze 3: Právní boj',
      title: 'Žaloba Vaniše a Pivoňky',
      icon: '⚖️',
      importance: 'high',
      description: 'Žaloba na neplatnost vyloučení - podána 39 DNÍ PO LHŮTĚ! Dle § 259 NOZ by měla být odmítnuta.',
      slug: 'zaloba-vanis-pivonka',
    },
    {
      date: 'Podzim 2024',
      phase: 'Fáze 3: Právní boj',
      title: 'Rozhodnutí krajského soudu',
      icon: '⚖️',
      importance: 'critical',
      description: 'Krajský soud rozhodl, že vyloučení bylo nicotné. Problematické rozhodnutí ignorující § 6 a § 8 NOZ.',
      slug: 'rozhodnuti-krajskeho-soudu',
    },
  ];

  return (
    <div className="container mx-auto px-8 py-12 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Události
        </h1>
        <p className="text-xl text-slate-600">
          Chronologický přehled klíčových momentů kauzy 2021-2024
        </p>
      </div>

      <div className="mb-8 grid md:grid-cols-3 gap-4">
        <div className="p-4 bg-green-50 rounded-lg border border-green-300">
          <div className="text-sm font-semibold text-green-800 mb-1">Fáze 1</div>
          <div className="text-lg font-bold text-green-900">Příprava a dohody</div>
          <div className="text-sm text-green-700">2021</div>
        </div>
        <div className="p-4 bg-orange-50 rounded-lg border border-orange-300">
          <div className="text-sm font-semibold text-orange-800 mb-1">Fáze 2</div>
          <div className="text-lg font-bold text-orange-900">Eskalace a konflikty</div>
          <div className="text-sm text-orange-700">2022-2023</div>
        </div>
        <div className="p-4 bg-red-50 rounded-lg border border-red-300">
          <div className="text-sm font-semibold text-red-800 mb-1">Fáze 3</div>
          <div className="text-lg font-bold text-red-900">Právní boj</div>
          <div className="text-sm text-red-700">2024</div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-300"></div>

        <div className="space-y-8">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>

      <div className="mt-12 p-6 bg-slate-50 rounded-lg border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-2">
          💡 Jak číst timeline
        </h3>
        <p className="text-sm text-slate-700">
          Každá událost obsahuje datum, fázi, význam a kontext. Klikněte na událost
          pro zobrazení detailních informací, souvisejících aktérů a dokumentů.
        </p>
      </div>
    </div>
  );
}

interface Event {
  date: string;
  phase: string;
  title: string;
  icon: string;
  importance: 'critical' | 'high' | 'medium' | 'low';
  description: string;
  slug: string;
}

function EventCard({ event }: { event: Event }) {
  const importanceColors = {
    critical: 'bg-red-100 border-red-400 text-red-900',
    high: 'bg-orange-100 border-orange-300 text-orange-900',
    medium: 'bg-blue-100 border-blue-300 text-blue-900',
    low: 'bg-slate-100 border-slate-300 text-slate-900',
  };

  const importanceLabels = {
    critical: '🔥 Kritická',
    high: '⚠️ Vysoká',
    medium: 'ℹ️ Střední',
    low: '📌 Nízká',
  };

  return (
    <div className="relative pl-20">
      {/* Timeline dot */}
      <div className="absolute left-6 w-5 h-5 bg-white border-4 border-blue-500 rounded-full"></div>

      <a
        href={`/udalosti/${event.slug}`}
        className="block p-6 bg-white rounded-lg border-2 border-slate-200 hover:border-blue-400 hover:shadow-md transition"
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <span className="text-3xl">{event.icon}</span>
            <div>
              <div className="text-sm text-slate-600 font-medium">{event.date}</div>
              <div className="text-xs text-slate-500">{event.phase}</div>
            </div>
          </div>
          <span className={`px-2 py-1 rounded text-xs font-semibold ${importanceColors[event.importance]}`}>
            {importanceLabels[event.importance]}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600">
          {event.title}
        </h3>
        <p className="text-slate-700 text-sm">
          {event.description}
        </p>

        <div className="mt-4 text-sm text-blue-600 font-medium">
          → Zobrazit detail události
        </div>
      </a>
    </div>
  );
}
