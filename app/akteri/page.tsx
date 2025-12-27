import { showCityContent, isCityActor } from '@/lib/config';

export default function AkteriPage() {
  const allActors = [
    {
      slug: 'miroslav-brozek',
      name: 'Miroslav Brožek',
      role: 'Předseda spolku TJ Krupka',
      category: 'Představitel spolku',
      status: 'spolek' as const,
      summary: 'Zvolen na funkci předsedy spolku dne 24.8.2021 na období 5 let. Spolek eviduje jeho kroky v souvislosti se spory o členství a hospodaření oddílů.',
      keyActions: [
        'Zvolení na shromáždění 24.8.2021',
        'Výzvy k předání seznamů členů oddílů',
        'Vyloučení členů podle § 239 NOZ',
        'Trestní oznámení podáno',
      ],
      relatedEvents: 12,
    },
    {
      slug: 'marek-vanis',
      name: 'Marek Vaniš',
      role: 'Činnost v oddílu stolního tenisu',
      category: 'Vyloučení členové',
      status: 'vylousen' as const,
      summary: 'Spolek eviduje nesoulady ve finančním hospodaření oddílu stolního tenisu (evidovaná škoda 653.659 Kč). Vyloučen dne 28.11.2023 podle § 239 NOZ.',
      keyActions: [
        'K datu neeviduje doložení seznamů členů',
        'Evidované nesoulady: členské příspěvky 48.000 Kč',
        'Evidované nesoulady: oddílové příspěvky 518.400 Kč',
        'Vyloučen 28.11.2023',
      ],
      relatedEvents: 15,
    },
    {
      slug: 'jaromir-pivonka',
      name: 'Jaromír Pivoňka',
      role: 'Činnost v oddílu stolního tenisu',
      category: 'Vyloučení členové',
      status: 'vylousen' as const,
      summary: 'Spolek eviduje jeho činnost v oddílu stolního tenisu v souvislosti s evidovanými nesoulady. Vyloučen dne 28.11.2023 podle § 239 NOZ.',
      keyActions: [
        'Činnost v oddílu stolního tenisu',
        'Souvislost s evidovanými nesoulady oddílu',
        'Vyloučen 28.11.2023',
      ],
      relatedEvents: 8,
    },
    {
      slug: 'gustav-vlach',
      name: 'Gustav Vlach',
      role: 'Předseda lyžařského oddílu',
      category: 'Zánik členství',
      status: 'zanik' as const,
      summary: 'Spolek eviduje nesoulady ve finančním hospodaření lyžařského oddílu (evidovaná škoda 1.041.378 Kč). Zánik členství neplacením členských příspěvků.',
      keyActions: [
        'K datu neeviduje doložení seznamů členů',
        'Evidované nesoulady: členské příspěvky 63.200 Kč',
        'Evidované nesoulady: oddílové příspěvky 379.200 Kč',
        'Zánik členství neplacením',
      ],
      relatedEvents: 5,
    },
    {
      slug: 'martin-kulik',
      name: 'Martin Kulík',
      role: 'Činnost v oddílu karate',
      category: 'Zánik členství',
      status: 'zanik' as const,
      summary: 'Spolek eviduje nesoulady ve finančním hospodaření oddílu karate (evidovaná škoda 350.598 Kč). Spor o legitimitu funkce předsedy oddílu. Zánik členství neplacením.',
      keyActions: [
        'Spor o funkci předsedy oddílu karate',
        'Evidované nesoulady: členské příspěvky 32.000 Kč',
        'Evidované nesoulady: oddílové příspěvky 316.800 Kč',
        'Zánik členství neplacením',
      ],
      relatedEvents: 3,
    },
    {
      slug: 'jitka-illesova',
      name: 'Jitka Illéšová',
      role: 'Poskytovatel účetních služeb',
      category: 'Další aktéři',
      status: 'poskytovatel' as const,
      summary: 'Poskytovala účetní služby spolku (30.000 Kč za rok 2021). Spolek eviduje spor týkající se dokončení účetnictví a předání dokumentace.',
      keyActions: [
        'Platba 30.000 Kč za účetnictví 2021',
        'Spor o dokončení účetnictví',
        'Spor o předání dokumentace',
      ],
      relatedEvents: 4,
    },
    {
      slug: 'jan-kuzma',
      name: 'Jan Kuzma',
      role: 'Starosta města Krupka a jednatel SPORT Krupka s.r.o.',
      category: 'Zástupci města',
      status: 'verejny_cinitele' as const,
      summary: 'Starosta města a jednatel městské společnosti SPORT Krupka s.r.o. Spolek eviduje situace související s omezeným přístupem k prostorám a spory o autonomii spolku.',
      keyActions: [
        'Dvojrole: starosta + jednatel městské společnosti',
        'Výměny zámků na objektech (19.12.2023, 19.1.2024)',
        'Město obdrželo notifikaci o vyloučení 26.1.2024',
        'Spolek eviduje spory o přístup k prostorám',
      ],
      relatedEvents: 9,
    },
    {
      slug: 'jan-bokoc',
      name: 'Jan Bokoč',
      role: 'Místostarosta města Krupka',
      category: 'Zástupci města',
      status: 'verejny_cinitele' as const,
      summary: 'Místostarosta města Krupka v období sporů spolku. Spolek zastává právní názor o potřebě respektování autonomie spolku ze strany města.',
      keyActions: [
        'Výkon funkce místostarosty během sporů',
        'Město obdrželo notifikaci o vyloučení 26.1.2024',
        'Spolek eviduje spory o autonomii spolku',
      ],
      relatedEvents: 8,
    },
    {
      slug: 'tomas-syrycansky',
      name: 'Tomáš Syryčanský',
      role: 'Sportovní manažer SPORT Krupka s.r.o.',
      category: 'Zástupci města',
      status: 'zamestnanec' as const,
      summary: 'Zaměstnanec městské společnosti SPORT Krupka s.r.o. Spolek eviduje jeho účast na jednáních souvisejících se spory o přístup k prostorám.',
      keyActions: [
        'Výkon funkce sportovního manažera',
        'Výměny zámků na objektu (19.1.2024)',
        'Spolek eviduje spory o přístup k prostorám',
        'Účast na jednáních týkajících se sporů',
      ],
      relatedEvents: 8,
    },
  ];

  // Filter out city actors if showCityContent is false
  const actors = showCityContent()
    ? allActors
    : allActors.filter(actor => !isCityActor(actor.slug));

  const categories = Array.from(new Set(actors.map(a => a.category)));

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Legal Disclaimer Banner */}
      <div className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-3 md:px-8 max-w-6xl">
          <p className="text-sm leading-relaxed">
            ⚖️ <strong>Důležité právní upozornění:</strong> Uvedené informace představují právní pozici spolku Tělovýchovná jednota Krupka z.s. ve sporech týkajících se členství, hospodaření oddílů a autonomie spolku. Nejde o pravomocná soudní rozhodnutí. Všechny zúčastněné osoby mají právo na vyjádření a odlišný právní názor.
            {' '}
            <a href="/pravni-ramec" className="underline hover:text-blue-200 font-semibold">
              Více o právním rámci →
            </a>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-8 py-6 md:py-12 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Aktéři
          </h1>
          <p className="text-xl text-slate-600">
            Osoby a jejich role ve sporech spolku Tělovýchovná jednota Krupka z.s. prezentované z právní pozice spolku.
          </p>
        </div>

        <div className="mb-8 p-4 md:p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
          <h3 className="text-lg font-bold text-blue-900 mb-2">
            ℹ️ O této sekci
          </h3>
          <div className="text-sm text-blue-900 space-y-2">
            <p>Karty aktérů obsahují <strong>právní pozici spolku</strong> ve sporech:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Oficiální role a funkce</li>
              <li>Evidované události a situace</li>
              <li>Vazby na spory a právní řízení</li>
            </ul>
            <p className="mt-2">
              <strong>Všechny informace představují právní argumentaci spolku</strong> a nejsou pravomocnými soudními rozhodnutími. Všechny zúčastněné osoby mají právo na vyjádření k uvedeným skutečnostem.
            </p>
          </div>
        </div>

        {categories.map(category => (
          <section key={category} className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-slate-200">
              {category}
            </h2>
            <div className="grid md:grid-cols-2 gap-3 md:gap-6">
              {actors.filter(a => a.category === category).map(actor => (
                <ActorCard key={actor.slug} actor={actor} />
              ))}
            </div>
          </section>
        ))}

        <div className="mt-12 grid md:grid-cols-2 gap-3 md:gap-6">
          <div className="p-4 md:p-6 bg-slate-50 rounded-lg border-2 border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              📊 Přehled
            </h3>
            <div className="text-sm text-slate-700 space-y-2">
              <p><strong>Celkem osob:</strong> {actors.length}</p>
              <p><strong>Vyloučení členové:</strong> 2 (Vaniš, Pivoňka)</p>
              <p><strong>Zánik členství:</strong> 2 (Vlach, Kulík)</p>
              {showCityContent() && (
                <p><strong>Zástupci města:</strong> 3 (Kuzma, Bokoč, Syryčanský)</p>
              )}
            </div>
          </div>
          <div className="p-4 md:p-6 bg-slate-50 rounded-lg border-2 border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              🔗 Související sekce
            </h3>
            <div className="space-y-2">
              <a href="/pravni-ramec" className="block text-sm text-blue-600 hover:underline font-semibold">
                → Právní rámec a kontakt
              </a>
              <a href="/metodika" className="block text-sm text-blue-600 hover:underline">
                → Metodika a klasifikace důkazů
              </a>
              <a href="/udalosti" className="block text-sm text-blue-600 hover:underline">
                → Události s účastí aktérů
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 md:p-6 bg-orange-50 border-2 border-orange-200 rounded-lg">
          <h3 className="text-lg font-bold text-orange-900 mb-2">
            ⚖️ Námitky k uvedeným údajům
          </h3>
          <p className="text-sm text-orange-900">
            Pokud máte podloženou námitku k jakémukoli údaji na této stránce nebo na stránkách jednotlivých aktérů,
            kontaktujte nás prostřednictvím stránky{' '}
            <a href="/pravni-ramec" className="underline hover:text-orange-700 font-semibold">
              Právní rámec a kontakt
            </a>
            . Respektujeme právo všech zúčastněných osob na vyjádření a opravu nepřesných informací.
          </p>
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
  status: 'spolek' | 'vylousen' | 'zanik' | 'poskytovatel' | 'verejny_cinitele' | 'zamestnanec';
  summary: string;
  keyActions: string[];
  relatedEvents: number;
}

function ActorCard({ actor }: { actor: Actor }) {
  const statusConfig = {
    spolek: {
      color: 'border-green-300 bg-green-50',
      icon: '⚖️',
      label: 'Představitel spolku',
    },
    vylousen: {
      color: 'border-orange-300 bg-orange-50',
      icon: '❗',
      label: 'Vyloučen',
    },
    zanik: {
      color: 'border-amber-300 bg-amber-50',
      icon: '📋',
      label: 'Zánik členství',
    },
    poskytovatel: {
      color: 'border-purple-300 bg-purple-50',
      icon: '💼',
      label: 'Poskytovatel služeb',
    },
    verejny_cinitele: {
      color: 'border-blue-300 bg-blue-50',
      icon: '🏛️',
      label: 'Veřejný činitel',
    },
    zamestnanec: {
      color: 'border-indigo-300 bg-indigo-50',
      icon: '👤',
      label: 'Zaměstnanec městské společnosti',
    },
  };

  const config = statusConfig[actor.status];

  return (
    <a
      href={`/akteri/${actor.slug}`}
      className={`block p-4 md:p-6 rounded-lg border-2 hover:shadow-md transition ${config.color} hover:border-blue-500`}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-xl font-bold text-slate-900">{actor.name}</h3>
          <div className="text-sm text-slate-600">{actor.role}</div>
        </div>
        <span className="text-2xl" title={config.label}>{config.icon}</span>
      </div>

      <p className="text-sm text-slate-700 mb-4">
        {actor.summary}
      </p>

      <div className="mb-4">
        <div className="text-xs font-semibold text-slate-600 mb-2">Klíčové body:</div>
        <ul className="space-y-1">
          {actor.keyActions.slice(0, 3).map((action, i) => (
            <li key={i} className="text-xs text-slate-700 flex items-start">
              <span className="mr-2">•</span>
              <span>{action}</span>
            </li>
          ))}
          {actor.keyActions.length > 3 && (
            <li className="text-xs text-blue-600 font-medium">
              + dalších {actor.keyActions.length - 3} bodů
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
