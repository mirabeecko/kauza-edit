export default function TemataPage() {
  const topics = [
    {
      slug: 'historie-tj-krupka',
      title: 'Historie TJ Krupka',
      icon: '📜',
      description: 'Pozadí a vývoj spolku před rokem 2021. Kontextové informace pro pochopení kauzy.',
      category: 'Kontext',
      relatedCount: { events: 3, persons: 5, documents: 8 },
    },
    {
      slug: 'clenstvi-a-evidence',
      title: 'Členství a evidence',
      icon: '📋',
      description: 'Kdo je členem spolku? Proč nebyly předány seznamy? Jak to ovlivnilo rozhodování?',
      category: 'Klíčové téma',
      relatedCount: { events: 8, persons: 10, documents: 12 },
      isKeyTopic: true,
    },
    {
      slug: 'finance-a-majetek',
      title: 'Finance a majetek',
      icon: '💰',
      description: 'Členské příspěvky, vybírání peněz, náklady na energie, pokladny oddílů, finanční újma.',
      category: 'Klíčové téma',
      relatedCount: { events: 10, persons: 8, documents: 15 },
      isKeyTopic: true,
    },
    {
      slug: 'schuze-a-rozhodovani',
      title: 'Schůze a rozhodování',
      icon: '🗳️',
      description: 'Legitimita schůzí, právo svolávat a rozhodovat, platnost rozhodnutí, kvórum.',
      category: 'Klíčové téma',
      relatedCount: { events: 6, persons: 12, documents: 10 },
      isKeyTopic: true,
    },
    {
      slug: 'role-mesta-krupka',
      title: 'Role města Krupka',
      icon: '🏛️',
      description: 'Jaká byla role města? Výměna zámků, přístup k prostorám, podpora jednotlivých stran.',
      category: 'Instituce',
      relatedCount: { events: 4, persons: 3, documents: 6 },
    },
    {
      slug: 'pravni-rovina',
      title: 'Právní rovina',
      icon: '⚖️',
      description: 'Vyloučení členů (§ 239 NOZ), prekluzivní lhůty (§ 259 NOZ), trestní oznámení, žaloby.',
      category: 'Právní',
      relatedCount: { events: 7, persons: 6, documents: 20 },
      isKeyTopic: true,
    },
    {
      slug: 'myty-a-dezinformace',
      title: 'Mýty a dezinformace',
      icon: '🚫',
      description: 'Co bylo tvrzeno vs. co bylo prokázáno. Vyvrácení běžných dezinformací.',
      category: 'Analýza',
      relatedCount: { events: 0, persons: 0, documents: 0 },
    },
    {
      slug: 'trestni-oznameni',
      title: 'Trestní oznámení',
      icon: '👮',
      description: 'Podání, prošetření, nedostatky vyšetřování, možné trestné činy (zpronevěra, podvod...).',
      category: 'Právní',
      relatedCount: { events: 2, persons: 8, documents: 5 },
    },
    {
      slug: 'soudni-rizeni',
      title: 'Soudní řízení',
      icon: '⚖️',
      description: 'Žaloby Vaniše, Pivoňky, Vlacha, Kulíka. Rozhodnutí krajského soudu. Odvolání.',
      category: 'Právní',
      relatedCount: { events: 4, persons: 6, documents: 10 },
      isKeyTopic: true,
    },
    {
      slug: 'akteri-a-jejich-role',
      title: 'Aktéři a jejich role',
      icon: '👥',
      description: 'Kdo je kdo v kauze? Jaké měli role a odpovědnosti? Co prokázali svým jednáním?',
      category: 'Přehled',
      relatedCount: { events: 15, persons: 12, documents: 25 },
    },
    {
      slug: 'financni-dopady',
      title: 'Finanční dopady',
      icon: '💸',
      description: 'Celková škoda, přímé a nepřímé náklady, ohrožení existence spolku.',
      category: 'Dopady',
      relatedCount: { events: 5, persons: 5, documents: 8 },
    },
    {
      slug: 'otazky-a-odpovedi',
      title: 'Otázky a odpovědi',
      icon: '❓',
      description: 'Co víme s jistotou? Co zůstává nejasné? Proč je kauza složitá?',
      category: 'Meta',
      relatedCount: { events: 0, persons: 0, documents: 0 },
    },
  ];

  const categories = Array.from(new Set(topics.map(t => t.category)));

  return (
    <div className="container mx-auto px-8 py-12 max-w-6xl">
      {/* Hero Header */}
      <div className="mb-12 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 rounded-2xl shadow-lg p-10 text-white">
        <h1 className="text-4xl font-bold mb-4 text-center">
          📚 Témata kauzy
        </h1>
        <p className="text-lg text-center text-slate-300">
          Klíčová témata organizovaná podle oblastí. Každé téma obsahuje faktické informace podložené důkazy.
        </p>
        <div className="mt-6 flex justify-center space-x-4 text-sm">
          <div className="px-4 py-2 bg-white/10 backdrop-blur rounded-full">
            <span className="font-semibold">{topics.filter(t => t.isKeyTopic).length}</span> klíčových témat
          </div>
          <div className="px-4 py-2 bg-white/10 backdrop-blur rounded-full">
            <span className="font-semibold">{topics.length}</span> témat celkem
          </div>
        </div>
      </div>

      {/* Klíčová témata */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 flex items-center justify-center">
          <span className="text-3xl mr-3">🔥</span>
          <span>Klíčová témata</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-3 md:gap-6">
          {topics.filter(t => t.isKeyTopic).map(topic => (
            <TopicCard key={topic.slug} topic={topic} featured />
          ))}
        </div>
      </div>

      {/* Ostatní témata podle kategorií */}
      {categories.filter(cat => cat !== 'Klíčové téma').map(category => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200">
            {category}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {topics
              .filter(t => t.category === category && !t.isKeyTopic)
              .map(topic => (
                <TopicCard key={topic.slug} topic={topic} />
              ))}
          </div>
        </div>
      ))}

      <div className="mt-12 p-6 bg-slate-50 rounded-lg shadow">
        <h3 className="text-lg font-bold text-slate-900 mb-2">
          💡 Jak pracovat s tématy
        </h3>
        <p className="text-sm text-slate-700">
          Každé téma obsahuje shrnutí, související události, osoby a dokumenty.
          Témata jsou propojena - kliknutím na téma uvidíte související uzly v pravém panelu.
        </p>
      </div>
    </div>
  );
}

interface Topic {
  slug: string;
  title: string;
  icon: string;
  description: string;
  category: string;
  relatedCount: {
    events: number;
    persons: number;
    documents: number;
  };
  isKeyTopic?: boolean;
}

function TopicCard({ topic, featured }: { topic: Topic; featured?: boolean }) {
  return (
    <a
      href={`/temata/${topic.slug}`}
      className={`
        block p-6 rounded-xl transition-all duration-200 hover:shadow-lg
        ${featured
          ? 'bg-red-50 shadow-md hover:shadow-xl'
          : 'bg-white shadow hover:shadow-md'
        }
      `}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`${featured ? 'text-5xl' : 'text-4xl'}`}>
          {topic.icon}
        </div>
        {featured && (
          <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full">
            🔥 KLÍČOVÉ
          </span>
        )}
      </div>

      <h3 className={`${featured ? 'text-2xl' : 'text-xl'} font-bold mb-3 text-slate-900`}>
        {topic.title}
      </h3>

      <p className="text-sm mb-4 leading-relaxed text-slate-700">
        {topic.description}
      </p>

      <div className="pt-4 border-t border-slate-200">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center space-x-3 text-slate-600">
            <div className="flex items-center space-x-1">
              <span className="text-base">📅</span>
              <span className="font-medium">{topic.relatedCount.events}</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-base">👤</span>
              <span className="font-medium">{topic.relatedCount.persons}</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-base">📄</span>
              <span className="font-medium">{topic.relatedCount.documents}</span>
            </div>
          </div>
          <span className="font-semibold text-slate-600">
            Detail →
          </span>
        </div>
      </div>
    </a>
  );
}
