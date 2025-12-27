export default function KdoMelPravoRozhodovat() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Legal Disclaimer Banner */}
      <div className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-3 md:px-8 max-w-4xl">
          <p className="text-sm leading-relaxed">
            ⚖️ <strong>Důležité právní upozornění:</strong> Tato stránka prezentuje právní pozici spolku Tělovýchovná jednota Krupka z.s. ohledně práva rozhodovat ve spolku. Uvedené informace nejsou pravomocným soudním rozhodnutím. Všechny zúčastněné osoby mají právo na odlišný právní názor.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-8 py-6 md:py-12 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="text-sm text-slate-600 mb-6">
          <a href="/otazky" className="hover:text-blue-600">← Všechny otázky</a>
          <span className="mx-2">/</span>
          <span>Členství</span>
        </nav>

        {/* Hlavička otázky */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            ⚖️ Právní pozice spolku
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Kdo měl právo rozhodovat?
          </h1>
        </div>

        {/* Proč je důležitá */}
        <section className="mb-8 p-4 md:p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
          <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
            <span className="text-2xl mr-2">💡</span>
            Proč je otázka důležitá
          </h2>
          <div className="text-blue-900 space-y-2">
            <p>
              Legitimita rozhodnutí závisí na tom, kdo měl právo je přijímat. Podle stanov Tělovýchovná jednota Krupka z.s.:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Shromáždění delegátů je nejvyšším orgánem spolku</li>
              <li>Rozhoduje většinou hlasů přítomných delegátů</li>
              <li>Delegáty volí členové oddílů</li>
              <li>Předseda spolku řídí spolek mezi shromážděními</li>
            </ul>
          </div>
        </section>

        {/* Evidence spolku */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="text-2xl mr-2">📋</span>
            Právní pozice spolku
          </h2>
          <div className="space-y-4">
            <FactBox
              status="soud"
              title="24.8.2021 - Zvolení nového předsedy"
              evidence={['Zápis ze shromáždění delegátů 24.8.2021', 'Prezenční listina', 'Rozhodčí komise ČAST', 'Krajský soud']}
            >
              <p>
                <strong>Soudní potvrzení:</strong> Shromáždění delegátů 24.8.2021 bylo svoláno řádně.
                Legitimita zvolení byla potvrzena Rozhodčí komisí ČAST (2022) a Krajským soudem v Ústí nad Labem (2024).
              </p>
            </FactBox>

            <FactBox
              status="spolek"
              title="Předseda má právo řídit spolek mezi shromážděními"
              evidence={['Stanovy Tělovýchovná jednota Krupka z.s. čl. 9', '§ 252 NOZ']}
            >
              <p>
                Podle stanov a občanského zákoníku má předseda právo:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Zastupovat spolek navenek</li>
                <li>Řídit běžnou agendu spolku</li>
                <li>Požadovat plnění povinností od členů a předsedů oddílů</li>
                <li>Svolávat shromáždění delegátů</li>
              </ul>
            </FactBox>

            <FactBox
              status="spor"
              title="Spor o legitimitu shromáždění po 28.11.2023"
              evidence={['Korespondence', 'Zápisy', 'Notifikace městu 26.1.2024']}
            >
              <p>
                <strong>Právní pozice spolku:</strong> Spolek považuje za legitimní pouze shromáždění svolaná zvoleným předsedou Brožkem.
                Shromáždění svolaná vyloučenými členy po 28.11.2023 považuje spolek za neplatná.
              </p>
              <p className="mt-2 text-xs italic">
                Konečné právní posouzení je výlučně v kompetenci příslušných soudů.
              </p>
            </FactBox>
          </div>
        </section>

        {/* Právní kontext */}
        <section className="mb-8 p-4 md:p-6 bg-slate-50 rounded-lg border-2 border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            ⚖️ Právní kontext
          </h2>
          <div className="space-y-3 text-slate-700">
            <div>
              <h3 className="font-semibold mb-1">§ 252 NOZ - Statutární orgán</h3>
              <p className="text-sm">
                Statutární orgán zastupuje spolek ve všech věcech a za něj jedná.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">§ 214 NOZ - Členství</h3>
              <p className="text-sm">
                Pouze členové spolku mají práva a povinnosti plynoucí z členství, včetně práva účastnit se rozhodování.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Stanovy Tělovýchovná jednota Krupka z.s.</h3>
              <p className="text-sm">
                Stanovy upravují systém delegátů a pravomoci jednotlivých orgánů spolku.
              </p>
            </div>
          </div>
        </section>

        {/* Související uzly */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            🔗 Související stránky
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <RelatedNode type="question" title="Kdo je členem spolku?" href="/otazky/kdo-je-clenem-spolku" />
            <RelatedNode type="question" title="Byly schůze legitimní?" href="/otazky/byly-schuze-legitimni" />
            <RelatedNode type="person" title="Miroslav Brožek" href="/akteri/miroslav-brozek" />
            <RelatedNode type="document" title="Stanovy Tělovýchovná jednota Krupka z.s." href="/pravni-ramec" />
          </div>
        </section>

        {/* Shrnutí */}
        <section className="p-4 md:p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg border-2 border-orange-300">
          <h3 className="text-xl font-bold text-orange-900 mb-4">
            📌 Shrnutí právní pozice spolku
          </h3>
          <div className="text-orange-900 space-y-3 text-sm">
            <p>
              <strong>Soudní potvrzení:</strong> Legitimita zvolení předsedy Brožka (24.8.2021) byla potvrzena Rozhodčí komisí ČAST i Krajským soudem v Ústí nad Labem.
            </p>
            <p>
              <strong>Spory:</strong> Spolek eviduje spory o legitimitu shromáždění svolaných osobami, které považuje za vyloučené.
            </p>
            <p className="mt-3 pt-3 border-t-2 border-orange-300">
              <strong>Upozornění:</strong> Konečné právní posouzení je výlučně v kompetenci příslušných soudů. Všechny zúčastněné osoby mají právo na odlišný právní názor.
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
