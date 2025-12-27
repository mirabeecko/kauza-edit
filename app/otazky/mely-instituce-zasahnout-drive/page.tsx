import { showCityContent } from '@/lib/config';

export default function MelyInstituceZasahnoutDrivePage() {
  const cityVisible = showCityContent();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Legal Disclaimer Banner */}
      <div className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-3 md:px-8 max-w-4xl">
          <p className="text-sm leading-relaxed">
            ⚖️ <strong>Důležité právní upozornění:</strong> Tato stránka prezentuje právní pozici spolku Tělovýchovná jednota Krupka z.s. ohledně role institucí ve sporech. Uvedené informace nejsou pravomocným soudním rozhodnutím. Všechny zúčastněné instituce a osoby mají právo na odlišný právní názor.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-8 py-6 md:py-12 max-w-4xl">
        <nav className="text-sm text-slate-600 mb-6">
          <a href="/otazky" className="hover:text-blue-600">← Všechny otázky</a>
          <span className="mx-2">/</span>
          <span>Instituce</span>
        </nav>

        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            ⚖️ Právní pozice spolku
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Měly instituce zasáhnout dříve?
          </h1>
        </div>

        <section className="mb-8 p-4 md:p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
          <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
            <span className="text-2xl mr-2">💡</span>
            Proč je otázka důležitá
          </h2>
          <div className="text-blue-900 space-y-2">
            <p>
              Spolek je autonomní subjekt, ale v určitých případech mají státní
              a municipální instituce právo nebo povinnost reagovat na vzniklé situace.
            </p>
            <p className="mt-3">
              <strong>Klíčové otázky:</strong>
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Jaká je role odborných svazů?</li>
              <li>Kdy má policie vyšetřovat spory ve spolcích?</li>
              {cityVisible && <li>Jaká je role obce jako pronajímatele?</li>}
              <li>Jaké jsou hranice autonomie spolku?</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="text-2xl mr-2">📋</span>
            Role institucí (dle pozice spolku)
          </h2>
          <div className="space-y-4">
            <FactBox
              status="soud"
              title="ČAST: Rozhodčí komise (2022)"
              evidence={['Rozhodčí komise ČAST', 'Zápis z jednání 2022']}
            >
              <p>
                <strong>Rozhodčí komise ČAST rozhodla:</strong>
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>2022: Potvrdila legitimitu volby předsedy (24.8.2021)</li>
                <li>2022: Potvrdila, že vyloučení bylo v souladu se zákonem</li>
                <li>Řešila spor v rámci své působnosti</li>
              </ul>
            </FactBox>

            <FactBox
              status="spolek"
              title="Trestní oznámení (2024)"
              evidence={['Trestní oznámení', 'Písemnosti policie']}
            >
              <p>
                <strong>Evidence spolku:</strong>
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Spolek podal trestní oznámení</li>
                <li>Policie provádí šetření</li>
                <li>Probíhá vyšetřování</li>
              </ul>
              <p className="mt-2 text-xs italic">
                Výsledek vyšetřování není znám. Platí presumpce neviny.
              </p>
            </FactBox>

            {cityVisible && (
              <FactBox
                status="spor"
                title="Role města Krupka"
                evidence={['Korespondence', 'Nájemní smlouvy']}
              >
                <p>
                  <strong>Právní pozice spolku:</strong> Spolek zastává právní názor, že město Krupka mělo respektovat autonomii spolku podle § 20a NOZ.
                </p>
                <p className="mt-2">
                  Spolek eviduje situace související s přístupem k prostorám a spory o uznání orgánů spolku.
                </p>
                <p className="mt-2 text-xs italic">
                  Město má právo na odlišný právní názor. Konečné posouzení je v kompetenci příslušných orgánů.
                </p>
              </FactBox>
            )}

            <FactBox
              status="spolek"
              title="Krajský soud v Ústí nad Labem (2024)"
              evidence={['Rozsudky krajského soudu']}
            >
              <p>
                Krajský soud v Ústí nad Labem rozhodl ve sporech o vyloučení členů.
                Spolek má k některým rozhodnutím odlišný právní názor a zvažuje odvolání.
              </p>
              <p className="mt-2 text-xs italic">
                Všechna soudní rozhodnutí si zasluhují respekt. Konečné posouzení je v kompetenci odvolacích soudů.
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
              <h3 className="font-semibold mb-1">§ 20a NOZ - Autonomie spolku</h3>
              <p className="text-sm">
                Stát a obce mají povinnost respektovat právo spolku na samosprávnou činnost.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Řád ČAST</h3>
              <p className="text-sm">
                ČAST má rozhodčí komisi, která řeší spory mezi členskými spolky.
              </p>
            </div>
            {cityVisible && (
              <div>
                <h3 className="font-semibold mb-1">Zákon o obcích</h3>
                <p className="text-sm">
                  Obce spravují majetek a uzavírají nájemní smlouvy. Musí respektovat autonomii spolků.
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            🔗 Související stránky
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <RelatedNode type="question" title="Jednal předseda v souladu se zákonem?" href="/otazky/jednal-predseda-v-souladu-se-zakonem" />
            {cityVisible && (
              <RelatedNode type="question" title="Jaká byla role města?" href="/otazky/jaka-byla-role-mesta" />
            )}
            <RelatedNode type="question" title="Byly schůze legitimní?" href="/otazky/byly-schuze-legitimni" />
            <RelatedNode type="document" title="Právní rámec" href="/pravni-ramec" />
          </div>
        </section>

        <section className="p-4 md:p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg border-2 border-orange-300">
          <h3 className="text-xl font-bold text-orange-900 mb-4">
            📌 Shrnutí právní pozice spolku
          </h3>
          <div className="text-orange-900 space-y-3 text-sm">
            <p>
              <strong>Rozhodčí komise ČAST:</strong> V roce 2022 rozhodla ve prospěch spolku a potvrdila legitimitu postupů předsedy.
            </p>
            <p>
              <strong>Trestní oznámení:</strong> Spolek podal trestní oznámení. Probíhá vyšetřování. Platí presumpce neviny.
            </p>
            {cityVisible && (
              <p>
                <strong>Role obce:</strong> Spolek zastává právní názor o potřebě respektování autonomie spolku. Obec má právo na odlišný právní názor.
              </p>
            )}
            <p className="mt-3 pt-3 border-t-2 border-orange-300">
              <strong>Upozornění:</strong> Konečné právní posouzení je výlučně v kompetenci příslušných orgánů. Všechny zúčastněné osoby a instituce mají právo na odlišný právní názor.
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
