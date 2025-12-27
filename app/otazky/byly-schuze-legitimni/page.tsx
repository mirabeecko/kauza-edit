export default function BylySchuzeLegitimnPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Legal Disclaimer Banner */}
      <div className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-3 md:px-8 max-w-4xl">
          <p className="text-sm leading-relaxed">
            ⚖️ <strong>Důležité právní upozornění:</strong> Tato stránka prezentuje právní pozici spolku Tělovýchovná jednota Krupka z.s. Uvedené informace nejsou pravomocným soudním rozhodnutím. Všechny zúčastněné osoby mají právo na odlišný právní názor.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-8 py-6 md:py-12 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="text-sm text-slate-600 mb-6">
          <a href="/otazky" className="hover:text-blue-600">← Všechny otázky</a>
          <span className="mx-2">/</span>
          <span>Schůze</span>
        </nav>

        {/* Hlavička otázky */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold mb-4">
            ⚖️ Právní pozice spolku
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Byly schůze legitimní?
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
              Legitimita schůzí určuje, zda rozhodnutí přijatá na těchto schůzích jsou platná.
            </p>
          <p className="mt-3">
            <strong>Klíčové požadavky pro legitimní schůzi:</strong>
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Správné svolání (oprávněnou osobou)</li>
            <li>Dostatečná pozvánka (čas, místo, program)</li>
            <li>Účast oprávněných osob (členů/delegátů)</li>
            <li>Dosažení kvóra (stanovený počet účastníků)</li>
          </ul>
        </div>
      </section>

        {/* Legitimní schůze */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="text-2xl mr-2">✅</span>
            Podle pozice spolku: Legitimní schůze
          </h2>
          <div className="space-y-4">
            <FactBox
              status="spolek"
              title="24.8.2021 - Shromáždění delegátů (zvolení Brožka)"
              evidence={['Zápis ze shromáždění', 'Prezenční listina', 'Rozhodčí komise ČAST']}
            >
              <p>
                Shromáždění delegátů svolané v souladu se stanovami. Účast řádně zvolených delegátů.
                <strong> Legitimita potvrzena Rozhodčí komisí ČAST.</strong>
              </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Svoláno oprávněnou osobou (tehdejším předsedou)</li>
              <li>Dodržena poz vánková lhůta</li>
              <li>Dosaženo kvórum</li>
              <li>Zvolen Miroslav Brožek předsedou na 5 let</li>
            </ul>
          </FactBox>

            <FactBox
              status="spolek"
              title="25.1.2024 - Shromáždění delegátů (Brožkovo svolání)"
              evidence={['Zápis ze shromáždění', 'Pozvánky', 'Prezenční listina']}
            >
              <p>
                Shromáždění svolané legitimním předsedou Miroslavem Brožkem. Účast oprávněných delegátů.
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Svoláno předsedou Brožkem</li>
                <li>Řádná pozvánka s programem</li>
                <li>Účast členů s hlasovacím právem</li>
                <li>Rozhodnuto o vyloučení členů</li>
              </ul>
            </FactBox>
          </div>
        </section>

        {/* Sporné schůze */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="text-2xl mr-2">❌</span>
            Podle pozice spolku: Sporné schůze
          </h2>
          <div className="space-y-4">
            <FactBox
              status="spor"
              title="Schůze svolávané Vanišem a Pivoňkou po vyloučení"
              evidence={['Doručenka vyloučení 28.11.2023', 'Rozhodčí komise ČAST', 'Datová schránka města']}
            >
              <p>
                Podle evidence spolku: Po vyloučení 28.11.2023 Vaniš a Pivoňka pokračovali ve svolávání schůzí.
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Spolek tvrdí, že vyloučení členové nemají právo svolávat schůze</li>
                <li>Podle spolku nemají funkci v organizační struktuře</li>
                <li>Spolek považuje jejich rozhodnutí za právně nezávazná</li>
              </ul>
            <p className="mt-3">
              <strong>Rozhodčí komise ČAST:</strong> Vyloučení bylo provedeno v souladu se stanovami
              a zákonem. Vaniš a Pivoňka nejsou členové Tělovýchovná jednota Krupka z.s. od 28.11.2023.
            </p>
          </FactBox>

            <FactBox
              status="spor"
              title="Schůze konané v období prosinec 2023 - leden 2024"
              evidence={['Komunikace města', 'Koordinační schůzky', 'Datová schránka']}
            >
              <p>
                Podle pozice spolku: V tomto období probíhaly schůze, které spolek považuje za sporné:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Přístup k prostorám byl změněn (výměna zámků)</li>
                <li>Podle spolku neměl legitimní předseda přístup</li>
                <li>Město obdrželo notifikaci o vyloučení (26.1.2024)</li>
                <li>Konaly se koordinační schůzky</li>
              </ul>
              <p className="mt-3">
                <strong>Právní pozice spolku:</strong> Tyto schůze považuje za sporné z důvodu:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Podle spolku svolány vyloučenými členy</li>
                <li>Bez účasti legitimního vedení spolku</li>
              </ul>
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
            <h3 className="font-semibold mb-1">§ 248 NOZ - Shromáždění</h3>
            <p className="text-sm">
              Shromáždění svolává statutární orgán (předseda) nebo jiný orgán určený stanovami.
              Vyloučení členové nejsou oprávněni svolávat shromáždění.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">§ 258 NOZ - Zánik členství</h3>
            <p className="text-sm">
              Členství zaniká vyloučením. Od okamžiku vyloučení osoba nemá práva člena ani nemůže
              jednat jménem spolku.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Rozhodčí komise ČAST</h3>
            <p className="text-sm">
              Potvrdila, že shromáždění 24.8.2021 bylo legitimní a vyloučení Vaniše a Pivoňky
              bylo provedeno v souladu se zákonem.
            </p>
          </div>
        </div>
      </section>

      {/* Související uzly */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          🔗 Související uzly
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <RelatedNode
            type="event"
            title="24.8.2021 - Zvolení nového předsedy"
            href="/udalosti"
          />
          <RelatedNode
            type="event"
            title="28.11.2023 - Vyloučení Vaniše a Pivoňky"
            href="/udalosti"
          />
          <RelatedNode
            type="event"
            title="25.1.2024 - Legitimní shromáždění delegátů"
            href="/udalosti"
          />
          <RelatedNode
            type="person"
            title="Miroslav Brožek - legitimní předseda"
            href="/akteri/miroslav-brozek"
          />
          <RelatedNode
            type="question"
            title="Jsou rozhodnutí platná?"
            href="/otazky/jsou-rozhodnuti-platna"
          />
          <RelatedNode
            type="question"
            title="Kdo měl právo rozhodovat?"
            href="/otazky/kdo-mel-pravo-rozhodovat"
          />
        </div>
      </section>

        {/* Shrnutí */}
        <section className="p-4 md:p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg border-2 border-orange-300">
          <h3 className="text-xl font-bold text-orange-900 mb-4">
            📌 Shrnutí právní pozice spolku
          </h3>
          <div className="text-orange-900 space-y-3 text-sm">
            <p>
              <strong>Podle spolku legitimní:</strong> Shromáždění 24.8.2021 a 25.1.2024 svolané oprávněnými orgány
              spolku v souladu se stanovami.
            </p>
            <p>
              <strong>Podle spolku sporné:</strong> Schůze svolávané Vanišem a Pivoňkou po jejich vyloučení
              28.11.2023 jsou podle spolku sporné, protože vyloučení členové podle spolku nemají právo svolávat schůze.
            </p>
            <p>
              <strong>Rozhodčí komise ČAST:</strong> Potvrdila legitimitu vyloučení.
            </p>
            <p className="mt-3 pt-3 border-t-2 border-orange-300">
              <strong>Upozornění:</strong> Toto shrnutí představuje právní argumentaci spolku a není pravomocným soudním rozhodnutím.
              Všechny zúčastněné osoby mají právo na odlišný právní názor.
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
  const statusConfig = {
    spolek: {
      color: 'bg-blue-50 border-blue-300',
      label: '📋 Pozice spolku',
    },
    soud: {
      color: 'bg-green-50 border-green-300',
      label: '⚖️ Soudní rozhodnutí',
    },
    spor: {
      color: 'bg-orange-50 border-orange-300',
      label: '❗ Spor',
    },
  };

  const config = statusConfig[status];

  return (
    <div className={`p-4 rounded-lg border-2 ${config.color}`}>
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-slate-900">{title}</h3>
        <span className="text-xs font-semibold ml-2 whitespace-nowrap">{config.label}</span>
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
      className="block p-4 bg-white rounded-lg border-2 border-slate-200 hover:border-blue-400 hover:shadow-sm transition"
    >
      <div className="text-xs text-slate-500 mb-1">{typeLabels[type] || type}</div>
      <div className="text-sm font-medium text-slate-900">{title}</div>
    </a>
  );
}
