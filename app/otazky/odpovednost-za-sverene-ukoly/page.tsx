export default function OdpovednostZaSvereneUkolyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Legal Disclaimer Banner */}
      <div className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-3 md:px-8 max-w-4xl">
          <p className="text-sm leading-relaxed">
            ⚖️ <strong>Důležité právní upozornění:</strong> Tato stránka prezentuje právní pozici spolku Tělovýchovná jednota Krupka z.s. ohledně odpovědnosti za svěřené úkoly. Uvedené informace nejsou pravomocným soudním rozhodnutím. Všechny zúčastněné osoby mají právo na odlišný právní názor.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-8 py-6 md:py-12 max-w-4xl">
        <nav className="text-sm text-slate-600 mb-6">
          <a href="/otazky" className="hover:text-blue-600">← Všechny otázky</a>
          <span className="mx-2">/</span>
          <span>Odpovědnost</span>
        </nav>

        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            ⚖️ Právní pozice spolku
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Kdo nesl odpovědnost za svěřené úkoly?
          </h1>
        </div>

        <section className="mb-8 p-4 md:p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
          <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
            <span className="text-2xl mr-2">💡</span>
            Proč je otázka důležitá
          </h2>
          <div className="text-blue-900 space-y-2">
            <p>
              V každé organizaci existuje dělba práce a odpovědnosti. Povinnosti a role jednotlivých členů jsou definovány stanovami.
            </p>
            <p className="mt-3">
              <strong>Klíčové oblasti odpovědnosti:</strong>
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Vedení oddílů - předsedové oddílů</li>
              <li>Evidence členů - předsedové oddílů + předseda spolku</li>
              <li>Hospodaření s příspěvky - předsedové oddílů</li>
              <li>Celkové vedení spolku - předseda spolku</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="text-2xl mr-2">📋</span>
            Odpovědnosti podle stanov
          </h2>
          <div className="space-y-4">
            <FactBox
              status="spolek"
              title="Předseda spolku TJ Krupka"
              evidence={['Stanovy TJ Krupka', 'Zápis z volby 24.8.2021']}
            >
              <p>
                <strong>Podle stanov má předseda spolku odpovědnost za:</strong>
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Řízení spolku mezi shromážděními</li>
                <li>Zastupování spolku navenek</li>
                <li>Vedení celkové evidence členů</li>
                <li>Kontrola oddílů a vyžadování plnění povinností</li>
              </ul>
            </FactBox>

            <FactBox
              status="spolek"
              title="Předsedové oddílů"
              evidence={['Stanovy TJ Krupka', 'Email 13.9.2021']}
            >
              <p>
                <strong>Podle stanov mají předsedové oddílů odpovědnost za:</strong>
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Vedení svého oddílu</li>
                <li>Evidenci členů oddílu a její předání předsedovi spolku</li>
                <li>Vybírání příspěvků a jejich odvod spolku</li>
                <li>Hospodaření oddílu</li>
              </ul>
            </FactBox>

            <FactBox
              status="spor"
              title="Spory o plnění povinností"
              evidence={['Email 13.9.2021', 'Předžalobní výzvy 11/2023']}
            >
              <p>
                <strong>Právní pozice spolku:</strong> Spolek k datu neeviduje doložení plnění některých povinností předsedy oddílů:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>K datu neeviduje doložení seznamů členů</li>
                <li>K datu neeviduje doložení odvodu příspěvků</li>
              </ul>
              <p className="mt-2 text-xs italic">
                Vyloučení členové mají k tomuto odlišný právní názor.
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
              <h3 className="font-semibold mb-1">§ 159 NOZ - Péče řádného hospodáře</h3>
              <p className="text-sm">
                Statutární orgán je povinen jednat s péčí řádného hospodáře. To zahrnuje ochranu majetku spolku.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">§ 247 NOZ - Povinnost loajality</h3>
              <p className="text-sm">
                Člen je povinen jednat v zájmu spolku a zdržet se jednání, které by spolku škodilo.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Stanovy TJ Krupka</h3>
              <p className="text-sm">
                Stanovy definují povinnosti předsedy spolku a předsedů oddílů.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            🔗 Související stránky
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <RelatedNode type="question" title="Kdo měl vést členskou evidenci?" href="/otazky/kdo-mel-vest-clenskou-evidenci" />
            <RelatedNode type="question" title="Kdo nakládal s příspěvky?" href="/otazky/kdo-nakladal-s-prispevky" />
            <RelatedNode type="question" title="Jednal předseda v souladu se zákonem?" href="/otazky/jednal-predseda-v-souladu-se-zakonem" />
            <RelatedNode type="document" title="Stanovy TJ Krupka" href="/pravni-ramec" />
          </div>
        </section>

        <section className="p-4 md:p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg border-2 border-orange-300">
          <h3 className="text-xl font-bold text-orange-900 mb-4">
            📌 Shrnutí právní pozice spolku
          </h3>
          <div className="text-orange-900 space-y-3 text-sm">
            <p>
              <strong>Stanovy:</strong> Stanovy TJ Krupka definují odpovědnosti předsedy spolku a předsedů oddílů.
            </p>
            <p>
              <strong>Spory:</strong> Spolek eviduje spory ohledně plnění některých povinností. Vyloučení členové mají k tomuto odlišný právní názor.
            </p>
            <p className="mt-3 pt-3 border-t-2 border-orange-300">
              <strong>Upozornění:</strong> Konečné právní posouzení odpovědnosti je výlučně v kompetenci příslušných soudů. Všechny zúčastněné osoby mají právo na odlišný právní názor.
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
