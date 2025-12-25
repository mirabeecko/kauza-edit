export default function KdoMelVestClenskouEvidenciPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Legal Disclaimer Banner */}
      <div className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-3 md:px-8 max-w-4xl">
          <p className="text-sm leading-relaxed">
            ⚖️ <strong>Důležité právní upozornění:</strong> Tato stránka prezentuje právní pozici spolku TJ Krupka z.s. ohledně vedení členské evidence. Uvedené informace nejsou pravomocným soudním rozhodnutím. Všechny zúčastněné osoby mají právo na odlišný právní názor.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-8 py-6 md:py-12 max-w-4xl">
        <nav className="text-sm text-slate-600 mb-6">
          <a href="/otazky" className="hover:text-blue-600">← Všechny otázky</a>
          <span className="mx-2">/</span>
          <span>Členství</span>
        </nav>

        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            ⚖️ Právní pozice spolku
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Kdo měl vést členskou evidenci?
          </h1>
        </div>

        <section className="mb-8 p-4 md:p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
          <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
            <span className="text-2xl mr-2">💡</span>
            Proč je otázka důležitá
          </h2>
          <div className="text-blue-900 space-y-2">
            <p>
              Evidence členů spolku je základním dokumentem pro určení, kdo má právo
              hlasovat a rozhodovat. Bez ní nelze ověřit legitimitu schůzí ani rozhodnutí.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="text-2xl mr-2">📋</span>
            Právní pozice spolku
          </h2>
          <div className="space-y-4">
            <FactBox
              status="spolek"
              title="Stanovy TJ: Povinnost předsedů oddílů"
              evidence={['Stanovy TJ Krupka', 'Email 13.9.2021', 'Email 10.12.2021']}
            >
              <p>
                <strong>Podle stanov TJ Krupka:</strong>
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Předsedové oddílů mají povinnost vést evidenci členů svého oddílu</li>
                <li>Seznamy členů musí předat předsedovi TJ Krupka</li>
                <li>Předseda TJ konsoliduje evidenci všech členů</li>
              </ul>
            </FactBox>

            <FactBox
              status="spolek"
              title="K datu neeviduje doložení seznamů (2021-2023)"
              evidence={['Email 13.9.2021', 'Email 10.12.2021', 'Předžalobní výzvy 11/2023']}
            >
              <p>
                Spolek k datu neeviduje doložení seznamů členů, přestože byly zaslány výzvy:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li><strong>13.9.2021:</strong> První výzva s lhůtou do 26.9.2021</li>
                <li><strong>10.12.2021:</strong> Opakovaná výzva</li>
                <li><strong>11/2023:</strong> Předžalobní výzvy</li>
              </ul>
            </FactBox>

            <FactBox
              status="spolek"
              title="Důsledky absence evidence"
              evidence={['Zápisy z jednání', 'Rozhodčí komise ČAST']}
            >
              <p>
                Podle právní pozice spolku nebyla absence seznamů členů možná:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Ověřit, kdo je skutečně členem TJ Krupka</li>
                <li>Pozvat všechny členy na shromáždění</li>
                <li>Kontrolovat, zda příspěvky odpovídají počtu členů</li>
              </ul>
            </FactBox>

            <FactBox
              status="soud"
              title="Rozhodčí komise ČAST: Povinnost předsedy"
              evidence={['Rozhodčí komise ČAST', '§ 402 NOZ']}
            >
              <p>
                Rozhodčí komise ČAST potvrdila, že předseda spolku má povinnost vést evidenci členů
                a vyžadovat její předání od předsedů oddílů.
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
              <h3 className="font-semibold mb-1">§ 214 NOZ - Členství</h3>
              <p className="text-sm">
                Spolek vede seznam svých členů. Evidence je základem pro určení práv a povinností členů.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Stanovy TJ Krupka</h3>
              <p className="text-sm">
                Stanovy upravují povinnosti předsedů oddílů vést evidenci a předávat ji předsedovi spolku.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            🔗 Související stránky
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <RelatedNode type="question" title="Kdo je členem spolku?" href="/otazky/kdo-je-clenem-spolku" />
            <RelatedNode type="question" title="Kdo měl právo rozhodovat?" href="/otazky/kdo-mel-pravo-rozhodovat" />
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
              <strong>Stanovy:</strong> Podle stanov TJ Krupka mají předsedové oddílů povinnost vést evidenci a předat ji předsedovi spolku.
            </p>
            <p>
              <strong>Evidence spolku:</strong> Spolek k datu neeviduje doložení seznamů členů od předsedů oddílů přes opakované výzvy (2021-2023).
            </p>
            <p className="mt-3 pt-3 border-t-2 border-orange-300">
              <strong>Upozornění:</strong> Toto shrnutí představuje právní argumentaci spolku. Všechny zúčastněné osoby mají právo na odlišný právní názor.
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
