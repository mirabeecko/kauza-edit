export default function KdoKohoPoskodil() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Legal Disclaimer Banner */}
      <div className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-3 md:px-8 max-w-4xl">
          <p className="text-sm leading-relaxed">
            ⚖️ <strong>Důležité právní upozornění:</strong> Tato stránka prezentuje právní pozici spolku Tělovýchovná jednota Krupka z.s. ve sporech o hospodaření oddílů a členství. Uvedené informace nejsou pravomocným soudním rozhodnutím. Všechny zúčastněné osoby mají právo na odlišný právní názor.
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
          <div className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold mb-4">
            ⚖️ Právní pozice spolku
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Kdo koho poškodil?
          </h1>
        </div>

        <section className="mb-8 p-4 md:p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
          <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
            <span className="text-2xl mr-2">💡</span>
            Kontext otázky
          </h2>
          <div className="text-blue-900 space-y-2">
            <p>
              Ve sporech existují dvě odlišné právní pozice:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong>Pozice A (spolek):</strong> Spolek eviduje finanční nesoulady spojené s činností předsedů oddílů</li>
              <li><strong>Pozice B (vyloučení členové):</strong> Tvrdí, že předseda spolku jim způsobil škodu</li>
            </ul>
            <p className="mt-3">
              Tato stránka prezentuje právní argumentaci spolku Tělovýchovná jednota Krupka z.s.
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
              title="Evidovaná finanční nesouladnost: 2,045 mil. Kč"
              evidence={['Interní evidence spolku', 'Faktury za energie', 'Předžalobní výzvy', 'Výpočty spolku']}
            >
              <p>Spolek eviduje následující nesoulady ve finančním hospodaření oddílů:</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Nesoulad v oddílových příspěvcích (1,214 mil. Kč)</li>
                <li>Neuhrazené energie (300 tis. Kč)</li>
                <li>K datu neeviduje doložení předání pokladen (178 tis. Kč)</li>
                <li>Neuhrazené členské příspěvky svazům (143 tis. Kč)</li>
              </ul>
              <p className="mt-2 text-xs italic">
                Poznámka: Výpočty vycházejí z interní evidence spolku a obsahují odhady. Viz <a href="/metodika" className="underline">metodika</a>.
              </p>
            </FactBox>

            <FactBox
              status="spor"
              title="Protipozice: Tvrzení vyloučených členů"
              evidence={['Trestní oznámení', 'Korespondence']}
            >
              <p>Vyloučení členové tvrdí:</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Předseda spolku jim bezdůvodně omezil přístup k prostorům</li>
                <li>Porušil jim právo na členství</li>
                <li>Způsobil jim škodu na majetku oddílů</li>
              </ul>
              <p className="mt-2 font-semibold text-sm">
                Spolek má k těmto tvrzením odlišný právní názor.
              </p>
            </FactBox>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="text-2xl mr-2">❓</span>
            Otevřené otázky
          </h2>
          <div className="space-y-4">
            <UnknownBox title="Byla způsobena škoda hráčům stolního tenisu?">
              <p>
                Někteří hráči tvrdí, že nemohli trénovat a přišli o příjmy z turnajů. Spolek poznamenává:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Tito hráči nebyli evidováni jako členové Tělovýchovná jednota Krupka z.s.</li>
                <li>Podle spolku platili příspěvky Vanišovi, ne spolku</li>
                <li>Měli možnost přestoupit k jinému klubu</li>
              </ul>
              <p className="mt-2 text-xs italic">Jedná se o spor mezi hráči a spolkem.</p>
            </UnknownBox>
          </div>
        </section>

        <section className="mb-8 p-4 md:p-6 bg-slate-50 rounded-lg border-2 border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            ⚖️ Právní rámec
          </h2>
          <div className="space-y-3 text-slate-700">
            <div>
              <h3 className="font-semibold mb-1">§ 2951 NOZ - Náhrada škody</h3>
              <p className="text-sm">
                Kdo poruší povinnost a způsobí škodu, je povinen ji nahradit.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">§ 239 NOZ - Vyloučení člena</h3>
              <p className="text-sm">
                Spolek může vyloučit člena z důležitého důvodu. Rozhodnutí je vnitřní záležitostí spolku.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">§ 247 NOZ - Povinnost loajality</h3>
              <p className="text-sm">
                Člen je povinen jednat v zájmu spolku a zdržet se jednání, které by spolku škodilo.
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
            <RelatedNode type="question" title="Jednal předseda v souladu se zákonem?" href="/otazky/jednal-predseda-v-souladu-se-zakonem" />
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
              <strong>Právní pozice spolku:</strong> Spolek eviduje finanční nesoulady ve výši 2,045 mil. Kč spojené s hospodařením oddílů.
              Předseda spolku jednal v souladu se zákonem (potvrzeno Rozhodčí komisí ČAST).
            </p>
            <p>
              <strong>Spor o odpovědnost:</strong> Vyloučení členové mají odlišný právní názor.
              Konečné posouzení je v kompetenci příslušných soudů.
            </p>
            <p className="mt-3 pt-3 border-t-2 border-orange-300">
              <strong>Upozornění:</strong> Toto shrnutí představuje právní argumentaci spolku a není pravomocným soudním rozhodnutím o náhradě škody.
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
    <a href={href} className="block p-4 bg-white rounded-lg border-2 border-slate-200 hover:border-blue-500 hover:shadow-md transition">
      <div className="text-xs text-slate-500 mb-1">{typeLabels[type] || type}</div>
      <div className="text-sm font-medium text-slate-900">{title}</div>
    </a>
  );
}
