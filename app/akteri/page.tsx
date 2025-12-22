export default function AkteriPage() {
  const actors = [
    {
      slug: 'miroslav-brozek',
      name: 'Miroslav Brožek',
      role: 'Předseda spolku TJ Krupka',
      category: 'Představitel spolku',
      status: 'positive',
      summary: 'Legitimně zvolený předseda (24.8.2021) na 5 let. Snaha o nápravu, transparentnost a dodržování zákonů.',
      keyActions: [
        'Svolal shromáždění delegátů 24.8.2021',
        'Opakovaně vyzýval k předání seznamů členů',
        'Vyloučil problémové členy po předžalobních výzvách',
        'Podal trestní oznámení',
        'Řádně platil příspěvky (2.400 Kč/rok)',
      ],
      relatedEvents: 12,
    },
    {
      slug: 'marek-vanis',
      name: 'Marek Vaniš',
      role: 'Údajný předseda oddílu stolního tenisu',
      category: 'Vyloučení členové',
      status: 'negative',
      summary: 'Celková škoda oddílu stolního tenisu: 653.659 Kč. Nedodal seznamy členů, vybíral příspěvky ale neodváděl je.',
      keyActions: [
        'Nedodal seznamy členů (3+ roky)',
        'Neuhradil členské příspěvky (48.000 Kč)',
        'Zapíral oddílové příspěvky (518.400 Kč)',
        'Neplatil energie (43.466 Kč)',
        'Pokladna oddílu 43.793 Kč nepředána',
        'Vybíral příspěvky jménem spolku (přiznal při výslechu)',
        'Neoprávněně svolával schůze',
        'Vyloučen 28.11.2023',
      ],
      relatedEvents: 15,
    },
    {
      slug: 'jaromir-pivonka',
      name: 'Jaromír Pivoňka',
      role: 'Člen/funkcionář oddílu stolního tenisu',
      category: 'Vyloučení členové',
      status: 'negative',
      summary: 'Spolupracovník Vaniše. Spolupodílel se na škodě oddílu stolního tenisu (653.659 Kč).',
      keyActions: [
        'Spolupráce s Vanišem na porušování povinností',
        'Spoluúčast na zapírání příspěvků (518.400 Kč)',
        'Spolupodíl na neplacení energií (43.466 Kč)',
        'Nedostatečná iniciativa k nápravě',
        'Vyloučen 28.11.2023',
      ],
      relatedEvents: 8,
    },
    {
      slug: 'gustav-vlach',
      name: 'Gustav Vlach',
      role: 'Předseda lyžařského oddílu',
      category: 'Zánik členství',
      status: 'negative',
      summary: 'Celková škoda lyžařského oddílu: 1.041.378 Kč. Přiznal hotovost 132.523 Kč v pokladně, kterou nepředal.',
      keyActions: [
        'Nedodal seznamy členů',
        'Neuhradil členské příspěvky (63.200 Kč)',
        'Zapíral oddílové příspěvky (379.200 Kč)',
        'Neplatil energie (256.455 Kč)',
        'Přiznal pokladnu 132.523 Kč, kterou nepředal',
        'Zánik členství neplacením příspěvků',
      ],
      relatedEvents: 5,
    },
    {
      slug: 'martin-kulik',
      name: 'Martin Kulík',
      role: 'Údajný předseda oddílu karate',
      category: 'Zánik členství',
      status: 'negative',
      summary: 'Celková škoda oddílu karate: 350.598 Kč. Nikdy nebyl předsedou oddílu karate (dle zápisu byl předsedou Jiří Kulík).',
      keyActions: [
        'Nedodal seznamy členů',
        'Neuhradil členské příspěvky (32.000 Kč)',
        'Zapíral oddílové příspěvky (316.800 Kč)',
        'Pokladna oddílu 1.798 Kč nepředána',
        'Zánik členství neplacením příspěvků',
      ],
      relatedEvents: 3,
    },
    {
      slug: 'jitka-illesova',
      name: 'Jitka Illéšová',
      role: 'Účetní spolku',
      category: 'Další aktéři',
      status: 'negative',
      summary: 'Obdržela 30.000 Kč za účetnictví 2021. Odmítla uzavřít rok 2021, předala dokumenty městu.',
      keyActions: [
        'Obdržela 30.000 Kč (6 × 5.000 Kč)',
        'Odmítla ukončit účetnictví 2021',
        'Předala dokumenty městu Krupka (neoprávněně)',
        'Zadržovala účetní dokumentaci',
      ],
      relatedEvents: 4,
    },
  ];

  const categories = Array.from(new Set(actors.map(a => a.category)));

  return (
    <div className="container mx-auto px-8 py-12 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Aktéři
        </h1>
        <p className="text-xl text-slate-600">
          Osoby a jejich role v kauze. Faktické karty bez emocí a hodnocení.
        </p>
      </div>

      <div className="mb-8 p-6 bg-amber-50 rounded-lg border border-amber-200">
        <h3 className="text-lg font-bold text-amber-900 mb-2">
          ⚖️ Zásady zobrazení aktérů
        </h3>
        <div className="text-sm text-amber-900 space-y-2">
          <p>Karty aktérů obsahují <strong>pouze prokázatelná fakta</strong>:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Oficiální role</li>
            <li>Prokazatelné kroky a jednání</li>
            <li>Vazby na události a dokumenty</li>
          </ul>
          <p className="mt-2">
            <strong>Bez hodnocení, bez emocí, bez soudů.</strong> Pouze to, co lze doložit.
          </p>
        </div>
      </div>

      {categories.map(category => (
        <section key={category} className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-slate-200">
            {category}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {actors.filter(a => a.category === category).map(actor => (
              <ActorCard key={actor.slug} actor={actor} />
            ))}
          </div>
        </section>
      ))}

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-lg font-bold text-blue-900 mb-2">
            📊 Statistiky
          </h3>
          <div className="text-sm text-blue-800 space-y-2">
            <p><strong>Celkem osob:</strong> {actors.length}</p>
            <p><strong>Vyloučení členové:</strong> 2 (Vaniš, Pivoňka)</p>
            <p><strong>Zánik členství:</strong> 2 (Vlach, Kulík)</p>
          </div>
        </div>
        <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-2">
            🔗 Související sekce
          </h3>
          <div className="space-y-2">
            <a href="/udalosti" className="block text-sm text-blue-600 hover:underline">
              → Události s účastí aktérů
            </a>
            <a href="/otazky/kdo-koho-poskodil" className="block text-sm text-blue-600 hover:underline">
              → Otázka: Kdo koho poškodil?
            </a>
            <a href="/temata/akteri-a-jejich-role" className="block text-sm text-blue-600 hover:underline">
              → Téma: Aktéři a jejich role
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

interface Actor {
  slug: string;
  name: string;
  role: string;
  category: string;
  status: 'positive' | 'negative' | 'neutral';
  summary: string;
  keyActions: string[];
  relatedEvents: number;
}

function ActorCard({ actor }: { actor: Actor }) {
  const statusColors = {
    positive: 'border-green-300 bg-green-50',
    negative: 'border-red-300 bg-red-50',
    neutral: 'border-slate-300 bg-slate-50',
  };

  const statusIcons = {
    positive: '✅',
    negative: '❌',
    neutral: '➖',
  };

  return (
    <a
      href={`/akteri/${actor.slug}`}
      className={`block p-6 rounded-lg border-2 hover:shadow-md transition ${statusColors[actor.status]} hover:border-blue-500`}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-xl font-bold text-slate-900">{actor.name}</h3>
          <div className="text-sm text-slate-600">{actor.role}</div>
        </div>
        <span className="text-2xl">{statusIcons[actor.status]}</span>
      </div>

      <p className="text-sm text-slate-700 mb-4">
        {actor.summary}
      </p>

      <div className="mb-4">
        <div className="text-xs font-semibold text-slate-600 mb-2">Klíčové kroky:</div>
        <ul className="space-y-1">
          {actor.keyActions.slice(0, 3).map((action, i) => (
            <li key={i} className="text-xs text-slate-700 flex items-start">
              <span className="mr-2">•</span>
              <span>{action}</span>
            </li>
          ))}
          {actor.keyActions.length > 3 && (
            <li className="text-xs text-blue-600 font-medium">
              + dalších {actor.keyActions.length - 3} kroků
            </li>
          )}
        </ul>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-600">
        <span>📅 {actor.relatedEvents} souvisejících událostí</span>
        <span className="text-blue-600 font-medium">Detail →</span>
      </div>
    </a>
  );
}
