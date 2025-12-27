export default function KdoNakladalSPrispevkyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Legal Disclaimer Banner */}
      <div className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-3 md:px-8 max-w-4xl">
          <p className="text-sm leading-relaxed">
            ⚖️ <strong>Důležité právní upozornění:</strong> Tato stránka prezentuje právní pozici spolku Tělovýchovná jednota Krupka z.s. ohledně nakládání s příspěvky. Uvedené informace nejsou pravomocným soudním rozhodnutím. Všechny zúčastněné osoby mají právo na odlišný právní názor.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-8 py-6 md:py-12 max-w-4xl">
        <nav className="text-sm text-slate-600 mb-6">
          <a href="/otazky" className="hover:text-blue-600">← Všechny otázky</a>
          <span className="mx-2">/</span>
          <span>Finance</span>
        </nav>

        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            ⚖️ Právní pozice spolku
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Kdo nakládal s příspěvky?
          </h1>
        </div>

        <section className="mb-8 p-4 md:p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
          <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
            <span className="text-2xl mr-2">💡</span>
            Proč je otázka důležitá
          </h2>
          <div className="text-blue-900 space-y-2">
            <p>
              Příspěvky členů jsou základním zdrojem příjmů spolku. Jak s nimi nakládají
              jednotliví členové a předsedové oddílů je předmětem sporů.
            </p>
            <p className="mt-3">
              <strong>Dva druhy příspěvků:</strong>
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong>Členské příspěvky (200 Kč/rok/osoba):</strong> Podle stanov patří spolku TJ Krupka</li>
              <li><strong>Oddílové příspěvky (různé částky):</strong> Podle stanov patří spolku, oddíly jsou součástí TJ</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="text-2xl mr-2">📋</span>
            Evidence spolku
          </h2>
          <div className="space-y-4">
            <FactBox
              status="spolek"
              title="Spor o odvody příspěvků - oddíl stolního tenisu"
              evidence={['Interní evidence spolku', 'Výpočty spolku', 'Předžalobní výzvy']}
            >
              <p>
                <strong>Právní pozice spolku:</strong> Spolek eviduje nesoulad v odvodech příspěvků od oddílu stolního tenisu:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>K datu neeviduje doložení členských příspěvků (48.000 Kč)</li>
                <li>K datu neeviduje doložení oddílových příspěvků (518.400 Kč)</li>
              </ul>
              <p className="mt-2 text-xs italic">
                Poznámka: Výpočty vycházejí z interní evidence spolku a obsahují odhady. Viz metodika.
              </p>
            </FactBox>

            <FactBox
              status="spolek"
              title="Spor o odvody příspěvků - lyžařský oddíl"
              evidence={['Interní evidence spolku', 'Výpočty spolku']}
            >
              <p>
                <strong>Právní pozice spolku:</strong> Spolek eviduje nesoulad v odvodech příspěvků od lyžařského oddílu:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>K datu neeviduje doložení členských příspěvků (63.200 Kč)</li>
                <li>K datu neeviduje doložení oddílových příspěvků (379.200 Kč)</li>
              </ul>
              <p className="mt-2 text-xs italic">
                Poznámka: Výpočty vycházejí z interní evidence spolku a obsahují odhady.
              </p>
            </FactBox>

            <FactBox
              status="spolek"
              title="Spor o odvody příspěvků - oddíl karate"
              evidence={['Interní evidence spolku', 'Výpočty spolku']}
            >
              <p>
                <strong>Právní pozice spolku:</strong> Spolek eviduje nesoulad v odvodech příspěvků od oddílu karate:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>K datu neeviduje doložení členských příspěvků (32.000 Kč)</li>
                <li>K datu neeviduje doložení oddílových příspěvků (316.800 Kč)</li>
              </ul>
              <p className="mt-2 text-xs italic">
                Poznámka: Výpočty vycházejí z interní evidence spolku a obsahují odhady.
              </p>
            </FactBox>

            <FactBox
              status="spor"
              title="Protipozice: Tvrzení vyloučených členů"
              evidence={['Vyjádření vyloučených členů']}
            >
              <p>
                Vyloučení členové tvrdí, že příspěvky byly používány na provoz oddílů a nebyly odvedeny spolku z legitimních důvodů.
              </p>
              <p className="mt-2 text-xs italic">
                Konečné právní posouzení je výlučně v kompetenci příslušných soudů.
              </p>
            </FactBox>
          </div>
        </section>

        <section className="mb-8 p-4 md:p-6 bg-slate-50 rounded-lg border-2 border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            ⚖️ Právní kontext
          </h2>
          <div className="space-y-3 text-slate-700">
            <div>
              <h3 className="font-semibold mb-1">Stanovy TJ Krupka</h3>
              <p className="text-sm">
                Stanovy upravují povinnost předsedů oddílů vést evidenci členů a odvádět příspěvky spolku.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">§ 217 NOZ - Členský příspěvek</h3>
              <p className="text-sm">
                Člen je povinen platit členský příspěvek, pokud tak stanoví stanovy.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            🔗 Související stránky
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <RelatedNode type="question" title="Vznikla spolku finanční újma?" href="/otazky/vznikla-spolku-financni-ujma" />
            <RelatedNode type="person" title="Marek Vaniš" href="/akteri/marek-vanis" />
            <RelatedNode type="person" title="Gustav Vlach" href="/akteri/gustav-vlach" />
          </div>
        </section>

        <section className="p-4 md:p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg border-2 border-orange-300">
          <h3 className="text-xl font-bold text-orange-900 mb-4">
            📌 Shrnutí právní pozice spolku
          </h3>
          <div className="text-orange-900 space-y-3 text-sm">
            <p>
              <strong>Evidence spolku:</strong> Spolek k datu neeviduje doložení příspěvků od tří oddílů (stolní tenis, lyže, karate) ve výši celkem 1.357.600 Kč.
            </p>
            <p>
              <strong>Spory:</strong> Vyloučení členové tvrdí, že příspěvky byly používány na provoz oddílů. Spolek eviduje finanční nesoulady.
            </p>
            <p className="mt-3 pt-3 border-t-2 border-orange-300">
              <strong>Upozornění:</strong> Výpočty vycházejí z interní evidence spolku a obsahují odhady. Konečné právní posouzení je výlučně v kompetenci příslušných soudů.
            </p>
          </div>
        </section>

        <section className="mt-8 p-4 md:p-6 bg-slate-50 border-2 border-slate-200 rounded-lg">
          <h3 className="text-lg font-bold text-slate-900 mb-2">
            ⚖️ Námitky k uvedeným údajům
          </h3>
          <p className="text-sm text-slate-700">
            Pokud máte podloženou námitku k jakémukoli údaji na této stránce, kontaktujte nás prostřednictvím stránky{' '}
            <a href="/pravni-ramec" className="text-blue-600 hover:underline font-semibold">
              Právní rámec a kontakt
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}

interface FactBoxProps {
  status: 'spolek' | 'soud' | 'spor';
  title: string;
  evidence: string[];
  children: React.ReactNode;
}

function FactBox({ status, title, evidence, children }: FactBoxProps) {
  const statusColors = {
    spolek: 'bg-blue-50 border-blue-300',
    soud: 'bg-green-50 border-green-300',
    spor: 'bg-amber-50 border-amber-300',
  };

  const statusLabels = {
    spolek: '📋 Pozice spolku',
    soud: '⚖️ Soudní rozhodnutí',
    spor: '⚠️ Předmět sporu',
  };

  return (
    <div className={`p-4 rounded-lg border-2 ${statusColors[status]}`}>
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-slate-900">{title}</h3>
        <span className="text-xs font-semibold ml-2">{statusLabels[status]}</span>
      </div>
      <div className="text-sm text-slate-700 space-y-2">
        {children}
      </div>
      {evidence.length > 0 && (
        <div className="mt-3 pt-3 border-t border-slate-300">
          <div className="text-xs font-semibold text-slate-600 mb-1">Zdroje informací:</div>
          <ul className="text-xs text-slate-600 space-y-1">
            {evidence.map((e, i) => (
              <li key={i}>📎 {e}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

interface RelatedNodeProps {
  type: string;
  title: string;
  href: string;
}

function RelatedNode({ type, title, href }: RelatedNodeProps) {
  const typeLabels: Record<string, string> = {
    event: '📅 Událost',
    person: '👤 Osoba',
    document: '📄 Dokument',
    question: '❓ Otázka',
    insight: '💡 Pointa',
  };

  return (
    <a
      href={href}
      className="block p-4 bg-white rounded-lg border-2 border-slate-200 hover:border-blue-500 hover:shadow-md transition"
    >
      <div className="text-xs text-slate-500 mb-1">{typeLabels[type] || type}</div>
      <div className="text-sm font-medium text-slate-900">{title}</div>
    </a>
  );
}
