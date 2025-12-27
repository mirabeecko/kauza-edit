export default function VznikladSpolkuFinancniUjma() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Legal Disclaimer Banner */}
      <div className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-3 md:px-8 max-w-4xl">
          <p className="text-sm leading-relaxed">
            ⚖️ <strong>Důležité právní upozornění:</strong> Tato stránka prezentuje právní pozici spolku Tělovýchovná jednota Krupka z.s. ohledně finanční újmy. Uvedené informace nejsou pravomocným soudním rozhodnutím. Všechny zúčastněné osoby mají právo na odlišný právní názor. Platí presumpce neviny.
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
            Vznikla spolku finanční újma?
          </h1>
        </div>

        <section className="mb-8 p-4 md:p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
          <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
            <span className="text-2xl mr-2">💡</span>
            Proč je otázka důležitá
          </h2>
          <div className="text-blue-900 space-y-2">
            <p>
              Otázka finanční újmy je klíčová pro určení, zda spolku vznikla škoda a zda jsou splněny podmínky pro náhradu škody.
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1 mt-3">
              <li>Evidence spolku vyčísluje potenciální škodu</li>
              <li>Spolek eviduje nesoulady v hospodaření</li>
              <li>Spolek podal trestní oznámení (platí presumpce neviny)</li>
            </ul>
            <p className="mt-3">
              <strong>Vyčíslená potenciální škoda podle evidence spolku: 2.476.497 Kč</strong>
            </p>
            <p className="text-xs mt-2 italic">
              Poznámka: Výpočty vycházejí z interní evidence spolku a obsahují odhady. Viz metodika.
            </p>
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
              title="Vyčíslená potenciální škoda celkem"
              evidence={['TJ ODDÍLY 2021-2023 - Finanční výkaz', 'Předžalobní výzvy 11/2023']}
            >
              <p>
                <strong>Podle evidence spolku:</strong> Spolek vyčísluje potenciální škodu na:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li><strong>1.041.378 Kč</strong> - Lyžařský oddíl</li>
                <li><strong>653.659 Kč</strong> - Stolní tenis</li>
                <li><strong>481.460 Kč</strong> - Karate</li>
                <li><strong>300.000 Kč</strong> - Úraz na lyžích</li>
              </ul>
              <p className="mt-2 text-xs italic">
                Výpočty vycházejí z interní evidence spolku a obsahují odhady.
              </p>
            </FactBox>

            <FactBox
              status="spolek"
              title="Evidence nákladů na energie"
              evidence={['Faktury za energie 2020-2023', 'Rozpis nákladů po oddílech']}
            >
              <p>
                <strong>Podle evidence spolku:</strong>
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Spolek eviduje úhrady energií z rozpočtu TJ Krupka</li>
                <li>Spolek k datu neeviduje doložení úhrad za energie od oddílů</li>
                <li>Vyčíslený rozdíl: 556.375 Kč</li>
              </ul>
              <p className="mt-2 text-xs italic">
                Výpočty vycházejí z interní evidence spolku a obsahují odhady.
              </p>
            </FactBox>

            <FactBox
              status="spor"
              title="Spor o odvody oddílových příspěvků"
              evidence={['Interní evidence spolku', 'Výpočty spolku']}
            >
              <p>
                <strong>Právní pozice spolku:</strong> Spolek eviduje nesoulady ohledně příspěvků:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>K datu neeviduje doložení oddílových příspěvků (1.179.000 Kč)</li>
                <li>Výpočty obsahují odhady počtu členů a výše příspěvků</li>
              </ul>
              <p className="mt-2 text-xs italic">
                Vyloučení členové mají k tomuto odlišný právní názor.
              </p>
            </FactBox>

            <FactBox
              status="spor"
              title="Spor o předání pokladen oddílů"
              evidence={['Email Vlach', 'Výkaz pokladen k 31.12.2020']}
            >
              <p>
                <strong>Právní pozice spolku:</strong> Spolek eviduje spory ohledně předání pokladen:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>K datu neeviduje předání hotovosti z pokladen oddílů</li>
                <li>Vyčíslený rozdíl: 176.318 Kč</li>
              </ul>
              <p className="mt-2 text-xs italic">
                Vyloučení členové mají k tomuto odlišný právní názor.
              </p>
            </FactBox>

            <FactBox
              status="spolek"
              title="Evidence členských příspěvků nadřízeným svazům"
              evidence={['Výkaz členských příspěvků ČSTV, kraj, obec']}
            >
              <p>
                <strong>Podle evidence spolku:</strong>
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Spolek platil příspěvky nadřízeným svazům</li>
                <li>Spolek k datu neeviduje doložení odvodu těchto příspěvků od oddílů</li>
                <li>Vyčíslený rozdíl: 164.804 Kč</li>
              </ul>
              <p className="mt-2 text-xs italic">
                Výpočty vycházejí z interní evidence spolku.
              </p>
            </FactBox>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="text-2xl mr-2">❓</span>
            Co zůstává nejasné
          </h2>
          <div className="space-y-4">
            <UnknownBox title="Skutečný počet členů a výše příspěvků">
              <p>
                Bez seznamů členů oddílů není možné přesně určit:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Kolik lidí skutečně bylo členy oddílů</li>
                <li>Kolik z nich platilo příspěvky</li>
                <li>Jaká byla skutečná výše příspěvků</li>
              </ul>
              <p className="mt-2 text-xs italic">
                Výpočty spolku obsahují odhady. Vyloučení členové mají k výpočtům odlišný právní názor.
              </p>
            </UnknownBox>

            <UnknownBox title="Použití vybíraných příspěvků">
              <p>
                Bez účetnictví oddílů a bankovních výpisů není možné zjistit, jak byly příspěvky použity:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Byly použity pro činnost oddílů?</li>
                <li>Byly předány spolku jiným způsobem?</li>
                <li>Byly použity pro jiné účely?</li>
              </ul>
            </UnknownBox>
          </div>
        </section>

        <section className="mb-8 p-4 md:p-6 bg-slate-50 rounded-lg border-2 border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            ⚖️ Právní kontext
          </h2>
          <div className="space-y-3 text-slate-700">
            <div>
              <h3 className="font-semibold mb-1">§ 2951 NOZ - Náhrada škody</h3>
              <p className="text-sm">
                Kdo poruší povinnost a způsobí tím škodu, je povinen ji nahradit.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Stanovy TJ Krupka</h3>
              <p className="text-sm">
                Stanovy upravují povinnosti předsedů oddílů ohledně hospodaření a odvodu příspěvků.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            🔗 Související stránky
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <RelatedNode type="person" title="Gustav Vlach" href="/akteri/gustav-vlach" />
            <RelatedNode type="person" title="Marek Vaniš" href="/akteri/marek-vanis" />
            <RelatedNode type="person" title="Martin Kulík" href="/akteri/martin-kulik" />
            <RelatedNode type="question" title="Kdo nakládal s příspěvky?" href="/otazky/kdo-nakladal-s-prispevky" />
            <RelatedNode type="question" title="Kdo koho poškodil?" href="/otazky/kdo-koho-poskodil" />
            <RelatedNode type="question" title="Přístup k financím spolku" href="/otazky/pristup-k-financim-spolku" />
          </div>
        </section>

        <section className="p-4 md:p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg border-2 border-orange-300">
          <h3 className="text-xl font-bold text-orange-900 mb-4">
            📌 Shrnutí právní pozice spolku
          </h3>
          <div className="text-orange-900 space-y-3 text-sm">
            <p>
              <strong>Evidence spolku:</strong> Spolek vyčísluje potenciální škodu na 2.476.497 Kč. Výpočty vycházejí z interní evidence a obsahují odhady.
            </p>
            <p>
              <strong>Nejasnosti:</strong> Bez seznamů členů a účetnictví oddílů není možné přesně určit skutečnou výši škody ani způsob použití příspěvků.
            </p>
            <p>
              <strong>Trestní řízení:</strong> Spolek podal trestní oznámení. Probíhá vyšetřování. Platí presumpce neviny pro všechny zúčastněné osoby.
            </p>
            <p className="mt-3 pt-3 border-t-2 border-orange-300">
              <strong>Upozornění:</strong> Konečné právní posouzení odpovědnosti a výše škody je výlučně v kompetenci příslušných soudů. Všechny zúčastněné osoby mají právo na odlišný právní názor.
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

function UnknownBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-4 rounded-lg border-2 bg-slate-50 border-slate-300">
      <h3 className="font-semibold text-slate-900 mb-2 flex items-center">
        <span className="mr-2">❓</span>
        {title}
      </h3>
      <div className="text-sm text-slate-700 space-y-2">
        {children}
      </div>
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
