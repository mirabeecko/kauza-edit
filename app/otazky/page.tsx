import Link from 'next/link';

interface Question {
  slug: string;
  title: string;
  category: string;
  importance: 'high' | 'medium' | 'low';
}

const questions: Question[] = [
  // Členství a legitimita
  { slug: 'kdo-je-clenem-spolku', title: 'Kdo je členem spolku?', category: 'Členství', importance: 'high' },
  { slug: 'kdo-mel-pravo-rozhodovat', title: 'Kdo měl právo rozhodovat?', category: 'Členství', importance: 'high' },
  { slug: 'kdo-mel-vest-clenskou-evidenci', title: 'Kdo měl vést členskou evidenci?', category: 'Členství', importance: 'medium' },

  // Finance
  { slug: 'vznikla-spolku-financni-ujma', title: 'Vznikla spolku finanční újma?', category: 'Finance', importance: 'high' },
  { slug: 'kdo-nakladal-s-prispevky', title: 'Kdo nakládal s příspěvky?', category: 'Finance', importance: 'high' },
  { slug: 'pristup-k-financim-spolku', title: 'Kdo měl přístup k financím spolku?', category: 'Finance', importance: 'medium' },

  // Odpovědnost
  { slug: 'jednal-predseda-v-souladu-se-zakonem', title: 'Jednal předseda v souladu se zákonem?', category: 'Odpovědnost', importance: 'high' },
  { slug: 'odpovednost-za-sverene-ukoly', title: 'Kdo nesl odpovědnost za svěřené úkoly?', category: 'Odpovědnost', importance: 'medium' },

  // Schůze
  { slug: 'byly-schuze-legitimni', title: 'Byly schůze legitimní?', category: 'Schůze', importance: 'high' },
  { slug: 'jsou-rozhodnuti-platna', title: 'Jsou rozhodnutí platná?', category: 'Schůze', importance: 'high' },

  // Instituce
  { slug: 'jaka-byla-role-mesta', title: 'Jaká byla role města Krupka?', category: 'Instituce', importance: 'medium' },
  { slug: 'mely-instituce-zasahnout-drive', title: 'Měly instituce zasáhnout dříve?', category: 'Instituce', importance: 'medium' },

  // Meta
  { slug: 'co-dnes-vime-s-jistotou', title: 'Co dnes víme s jistotou?', category: 'Meta', importance: 'high' },
  //{ slug: 'co-zustava-nejasne', title: 'Co zůstává nejasné?', category: 'Meta', importance: 'medium' },
  { slug: 'proc-je-kauza-slozita', title: 'Proč je kauza složitá?', category: 'Meta', importance: 'low' },
];

export default function OtazkyPage() {
  const categories = Array.from(new Set(questions.map(q => q.category)));

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Legal Disclaimer Banner */}
      <div className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-3 md:px-8 max-w-5xl">
          <p className="text-sm leading-relaxed">
            ⚖️ <strong>Důležité právní upozornění:</strong> Tyto stránky prezentují právní pozici spolku Tělovýchovná jednota Krupka z.s. Uvedené informace nejsou pravomocným soudním rozhodnutím. Všechny zúčastněné osoby mají právo na odlišný právní názor.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-8 py-6 md:py-12 max-w-5xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Otázky, které si musí položit každý
          </h1>
          <p className="text-xl text-slate-600">
            Klíčové otázky kauzy, zodpovězené podle právní pozice spolku TJ Krupka
          </p>
        </div>

        <div className="mb-8 p-4 md:p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
          <h3 className="text-lg font-bold text-blue-900 mb-2">
            Jak číst otázky
          </h3>
          <div className="text-sm text-blue-800 space-y-2">
            <p>Každá otázka obsahuje:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Proč je důležitá</strong> - kontext a význam</li>
              <li><strong>Evidence spolku</strong> - dokumentované informace</li>
              <li><strong>Co zůstává nejasné</strong> - otevřené body</li>
              <li><strong>Právní kontext</strong> - relevantní zákony</li>
              <li><strong>Související stránky</strong> - vazby na události, osoby, dokumenty</li>
            </ul>
            <p className="mt-3 text-xs italic">
              Všechny odpovědi prezentují právní pozici spolku. Konečné posouzení je v kompetenci příslušných soudů.
            </p>
          </div>
        </div>

        {categories.map((category) => (
          <section key={category} className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-slate-200">
              {category}
            </h2>
            <div className="grid gap-4">
              {questions
                .filter(q => q.category === category)
                .map((question) => (
                  <QuestionCard key={question.slug} question={question} />
                ))}
            </div>
          </section>
        ))}

        <div className="mt-12 p-4 md:p-6 bg-slate-50 rounded-lg border-2 border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-2">
            ⚖️ Námitky k uvedeným údajům
          </h3>
          <p className="text-sm text-slate-700">
            Pokud máte podloženou námitku k jakémukoli údaji na těchto stránkách, kontaktujte nás prostřednictvím stránky{' '}
            <a href="/pravni-ramec" className="text-blue-600 hover:underline font-semibold">
              Právní rámec a kontakt
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}

function QuestionCard({ question }: { question: Question }) {
  const importanceColors = {
    high: 'border-red-300 bg-red-50',
    medium: 'border-orange-300 bg-orange-50',
    low: 'border-blue-300 bg-blue-50',
  };

  const importanceLabels = {
    high: '🔥 Klíčová',
    medium: '⚠️ Důležitá',
    low: 'ℹ️ Kontext',
  };

  return (
    <Link href={`/otazky/${question.slug}`}>
      <div className={`
        p-4 md:p-6 rounded-lg border-2 hover:shadow-md transition
        ${importanceColors[question.importance]}
        hover:border-blue-500
      `}>
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600">
            {question.title}
          </h3>
          <span className="text-xs font-semibold ml-4 whitespace-nowrap">
            {importanceLabels[question.importance]}
          </span>
        </div>
        <div className="flex items-center text-sm text-slate-600">
          <span className="mr-2">→</span>
          <span>Klikněte pro kompletní odpověď</span>
        </div>
      </div>
    </Link>
  );
}
