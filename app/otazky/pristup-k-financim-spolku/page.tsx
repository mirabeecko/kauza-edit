export default function PristupKFinancimSpolkuPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Legal Disclaimer Banner */}
      <div className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-3 md:px-8 max-w-4xl">
          <p className="text-sm leading-relaxed">
            ⚖️ <strong>Důležité právní upozornění:</strong> Tato stránka prezentuje právní pozici spolku Tělovýchovná jednota Krupka z.s. ohledně přístupu k financím. Uvedené informace nejsou pravomocným soudním rozhodnutím. Všechny zúčastněné osoby a instituce mají právo na odlišný právní názor.
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
            Kdo měl přístup k financím spolku?
          </h1>
        </div>

        <section className="mb-8 p-4 md:p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
          <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
            <span className="text-2xl mr-2">💡</span>
            Proč je otázka důležitá
          </h2>
          <div className="text-blue-900 space-y-2">
            <p>
              Kontrola nad financemi spolku určuje, kdo může platit závazky, nakládat
              s příspěvky členů a realizovat činnost spolku.
            </p>
            <p className="mt-3">
              <strong>Klíčové otázky:</strong>
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Kdo měl přístup k bankovním účtům Tělovýchovná jednota Krupka z.s.?</li>
              <li>Jak probíhala kontrola hospodaření oddílů?</li>
              <li>Jak byl předseda spolku informován o financích oddílů?</li>
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
              title="Přístup předsedy k bankovním účtům Tělovýchovná jednota Krupka z.s."
              evidence={['Bankovní dokumenty', 'Výpisy z účtů', 'Stanovy TJ']}
            >
              <p>
                <strong>Podle evidence spolku:</strong>
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Předseda měl přístup k hlavnímu účtu Tělovýchovná jednota Krupka z.s.</li>
                <li>Předseda platil energie, nájemné a další závazky Tělovýchovná jednota Krupka z.s.</li>
                <li>Podle stanov má předseda právo kontrolovat hospodaření oddílů</li>
              </ul>
            </FactBox>

            <FactBox
              status="spor"
              title="Spor o odvody příspěvků"
              evidence={['PDF \"TJ ODDÍLY 2021-2023\"', 'Předžalobní výzvy']}
            >
              <p>
                <strong>Právní pozice spolku:</strong> Spolek eviduje nesoulady v hospodaření oddílů:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>K datu neeviduje doložení příspěvků od oddílů</li>
                <li>K datu neeviduje doložení hospodářských výkazů oddílů</li>
                <li>K datu neeviduje předání pokladen některých oddílů</li>
              </ul>
              <p className="mt-2 text-xs italic">
                Vyloučení členové mají k tomuto odlišný právní názor.
              </p>
            </FactBox>

            <FactBox
              status="spor"
              title="Spor o přístup k objektům"
              evidence={['Dokumentace SPORT Krupka', 'Korespondence']}
            >
              <p>
                <strong>Právní pozice spolku:</strong>
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>19.12.2023: Spolek eviduje výměnu zámků na Pinčesárně</li>
                <li>19.1.2024: Spolek eviduje druhou výměnu zámků</li>
                <li>Spolek eviduje omezení přístupu předsedy k objektu</li>
              </ul>
              <p className="mt-2 text-xs italic">
                SPORT Krupka a město mají právo na odlišný právní názor. Konečné posouzení je v kompetenci příslušných orgánů.
              </p>
            </FactBox>

            <FactBox
              status="spolek"
              title="Evidence nákladů na energie"
              evidence={['Faktury', 'Účetnictví TJ', 'PDF \"TJ ODDÍLY 2021-2023\"']}
            >
              <p>
                <strong>Evidence spolku:</strong>
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Spolek eviduje úhrady energií z rozpočtu Tělovýchovná jednota Krupka z.s.</li>
                <li>Spolek k datu neeviduje doložení úhrad za energie od oddílů</li>
              </ul>
              <p className="mt-2 text-xs italic">
                Výpočty vycházejí z interní evidence spolku a obsahují odhady. Viz metodika.
              </p>
            </FactBox>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="text-2xl mr-2">⚠️</span>
            Spory o kontrolu financí
          </h2>
          <div className="space-y-4">
            <DisputedBox title="Spor o kontrolu hospodaření oddílů">
              <p>
                <strong>Právní pozice spolku:</strong> Spolek eviduje spory ohledně kontroly hospodaření:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>K datu neeviduje předání hospodářských výkazů oddílů</li>
                <li>K datu neeviduje předání seznamů členů pro ověření příspěvků</li>
                <li>Spolek eviduje omezení fyzického přístupu k dokumentům v objektech</li>
              </ul>
              <p className="mt-2 text-xs italic">
                Vyloučení členové a město mají k tomuto odlišný právní názor.
              </p>
            </DisputedBox>
          </div>
        </section>

        <section className="mb-8 p-4 md:p-6 bg-slate-50 rounded-lg border-2 border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            ⚖️ Právní kontext
          </h2>
          <div className="space-y-3 text-slate-700">
            <div>
              <h3 className="font-semibold mb-1">Stanovy Tělovýchovná jednota Krupka z.s. - Finanční kontrola</h3>
              <p className="text-sm">
                Předseda TJ má právo a povinnost kontrolovat hospodaření oddílů.
                Oddíly jsou součástí TJ, nemají samostatnou právní subjektivitu.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">§ 214 NOZ - Orgány spolku</h3>
              <p className="text-sm">
                Předseda je statutárním orgánem spolku a má právo jednat jeho jménem
                ve všech věcech, včetně nakládání s majetkem.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">NS ČR 7 Tdo 102/2019</h3>
              <p className="text-sm">
                Příspěvky členů se stávají majetkem tělovýchovné jednoty okamžikem
                jejich předání. Oddíly nemají právo si je ponechat.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            🔗 Související stránky
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <RelatedNode type="person" title="Miroslav Brožek" href="/akteri/miroslav-brozek" />
            <RelatedNode type="person" title="Marek Vaniš" href="/akteri/marek-vanis" />
            <RelatedNode type="person" title="Gustav Vlach" href="/akteri/gustav-vlach" />
            <RelatedNode type="question" title="Kdo nakládal s příspěvky?" href="/otazky/kdo-nakladal-s-prispevky" />
            <RelatedNode type="question" title="Vznikla spolku finanční újma?" href="/otazky/vznikla-spolku-financni-ujma" />
            <RelatedNode type="question" title="Jaká byla role města?" href="/otazky/jaka-byla-role-mesta" />
          </div>
        </section>

        <section className="p-4 md:p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg border-2 border-orange-300">
          <h3 className="text-xl font-bold text-orange-900 mb-4">
            📌 Shrnutí právní pozice spolku
          </h3>
          <div className="text-orange-900 space-y-3 text-sm">
            <p>
              <strong>Přístup k financím:</strong> Předseda spolku měl přístup k bankovním účtům Tělovýchovná jednota Krupka z.s. a platil závazky spolku.
            </p>
            <p>
              <strong>Spory:</strong> Spolek eviduje spory ohledně kontroly hospodaření oddílů a přístupu k objektům.
            </p>
            <p className="mt-3 pt-3 border-t-2 border-orange-300">
              <strong>Upozornění:</strong> Konečné právní posouzení je výlučně v kompetenci příslušných soudů. Všechny zúčastněné osoby a instituce mají právo na odlišný právní názor.
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

function DisputedBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-4 rounded-lg border-2 bg-amber-50 border-amber-300">
      <h3 className="font-semibold text-slate-900 mb-2 flex items-center">
        <span className="mr-2">⚠️</span>
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
