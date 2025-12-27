export default function CoZustavaNejasnePage() {
  return null;
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
        <nav className="text-sm text-slate-600 mb-6">
          <a href="/otazky" className="hover:text-blue-600">← Všechny otázky</a>
          <span className="mx-2">/</span>
          <span>Meta</span>
        </nav>

        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold mb-4">
            ⚖️ Právní pozice spolku
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Co zůstává nejasné?
          </h1>
        </div>

        <section className="mb-8 p-4 md:p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
          <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
            <span className="text-2xl mr-2">💡</span>
            Proč je otázka důležitá
          </h2>
          <div className="text-blue-900 space-y-2">
            <p>
              I když máme mnoho dokumentovaných faktů, některé otázky zůstávají otevřené.
              Je důležité odlišit, co víme z dokumentace, od toho, co zůstává nejasné.
            </p>
            <p className="mt-3 font-semibold">
              Transparentnost = přiznat, co nevíme.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="text-2xl mr-2">❓</span>
            Finanční nejasnosti
          </h2>
          <div className="space-y-4">
            <UnknownBox title="Kam směřovaly vybírané příspěvky?">
              <p>
                <strong>Ze evidence spolku vyplývá:</strong> Předsedové oddílů vybírali příspěvky jménem TJ,
                spolek však eviduje, že tyto částky nebyly doloženy (1.5+ mil. Kč).
              </p>
              <p className="mt-2">
                <strong>Nejasné zůstává:</strong>
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Jaké bylo skutečné použití těchto prostředků?</li>
                <li>Byly použity na provoz oddílů?</li>
                <li>Existuje dokumentace o použití?</li>
              </ul>
            </UnknownBox>

            <UnknownBox title="Kolik členů skutečně zaplatilo?">
              <p>
                <strong>Ze evidence spolku vyplývá:</strong> Seznamy členů nebyly k datu doloženy.
              </p>
              <p className="mt-2">
                <strong>Nejasné zůstává:</strong>
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Kolik lidí skutečně bylo členy TJ Krupka?</li>
                <li>Kolik lidí skutečně zaplatilo příspěvky?</li>
                <li>Jsou čísla v evidenci přesná, nebo obsahují odhady?</li>
                <li>Věděli všichni platící, že jsou členy TJ?</li>
              </ul>
            </UnknownBox>

            <UnknownBox title="Existují další nedoložené příjmy?">
              <p>
                <strong>Ze evidence spolku vyplývá:</strong> Celková evidovaná nesouladnost 2.045.635 Kč je založena na dostupných dokumentech.
              </p>
              <p className="mt-2">
                <strong>Nejasné zůstává:</strong>
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Existují další nedoložené příjmy?</li>
                <li>Vybírali předsedové oddílů i jiné poplatky?</li>
                <li>Byla celková nesouladnost vyšší?</li>
              </ul>
              <p className="mt-2 text-xs italic">
                Poznámka: Výpočty vycházejí z interní evidence spolku a obsahují odhady. Viz <a href="/metodika" className="underline">metodika</a>.
              </p>
            </UnknownBox>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="text-2xl mr-2">❓</span>
            Členství a legitimita
          </h2>
          <div className="space-y-4">
            <UnknownBox title="Kdo jsou skuteční členové TJ Krupka?">
              <p>
                <strong>Ze evidence spolku vyplývá:</strong> Seznamy členů od předsedů oddílů nebyly k datu doloženy.
              </p>
              <p className="mt-2">
                <strong>Nejasné zůstává:</strong>
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Kdo všechno je skutečně členem TJ?</li>
                <li>Jsou některé osoby evidovány duplicitně?</li>
                <li>Existují osoby uvedené, ale fakticky neaktivní?</li>
              </ul>
            </UnknownBox>

            <UnknownBox title="Proč seznamy nebyly k datu doloženy?">
              <p>
                <strong>Ze evidence spolku vyplývá:</strong> 3+ roky byly ignorovány výzvy k předání seznamů členů.
              </p>
              <p className="mt-2">
                <strong>Nejasná zůstává motivace:</strong>
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Jaké byly důvody pro nedoložení seznamů?</li>
                <li>Existovaly překážky pro předání?</li>
                <li>Jaké byly záměry jednajících osob?</li>
              </ul>
            </UnknownBox>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="text-2xl mr-2">❓</span>
            Právní nejasnosti
          </h2>
          <div className="space-y-4">
            <UnknownBox title="Proč byla žaloba podána 39 dní po lhůtě?">
              <p>
                <strong>Ze soudních dokumentů vyplývá:</strong> Žaloba podána 8.4.2024, prekluzivní lhůta skončila 28.2.2024.
              </p>
              <p className="mt-2">
                <strong>Nejasné zůstává:</strong>
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Jaké byly důvody pro podání žaloby po lhůtě?</li>
                <li>Byla lhůta známa žalobcům?</li>
                <li>Byl to strategický krok, nebo nedopatření?</li>
              </ul>
            </UnknownBox>

            <UnknownBox title="Jak rozhodne odvolací soud?">
              <p>
                <strong>Aktuální stav:</strong> Krajský soud rozhodl o neplatnosti vyloučení (sporné).
              </p>
              <p className="mt-2">
                <strong>Nejasné zůstává:</strong>
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Jak rozhodne odvolací soud o prekluzivní lhůtě?</li>
                <li>Potvrdí nebo změní rozhodnutí krajského soudu?</li>
                <li>Jaký bude konečný právní stav členství?</li>
              </ul>
            </UnknownBox>

            <UnknownBox title="Jak dopadne trestní řízení?">
              <p>
                <strong>Aktuální stav:</strong> Policie vyslýchá svědky, byly učiněny výpovědi.
              </p>
              <p className="mt-2">
                <strong>Nejasné zůstává:</strong>
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Bude podána obžaloba?</li>
                <li>Jaká bude právní kvalifikace skutku?</li>
                <li>Jaký bude výsledek trestního řízení?</li>
              </ul>
            </UnknownBox>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="text-2xl mr-2">❓</span>
            Motivace aktérů
          </h2>
          <div className="space-y-4">
            <UnknownBox title="Proč se spor rozhořel v roce 2021?">
              <p>
                <strong>Ze záznamů vyplývá:</strong> Spor začal po zvolení nového předsedy (24.8.2021).
              </p>
              <p className="mt-2">
                <strong>Nejasné zůstává:</strong>
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Jaké byly důvody pro odmítnutí spolupráce?</li>
                <li>Existoval předchozí konflikt?</li>
                <li>Byl to osobní nebo systémový problém?</li>
              </ul>
            </UnknownBox>

            <UnknownBox title="Kdo koordinoval protiopatření?">
              <p>
                <strong>Ze záznamů vyplývá:</strong> Konaly se schůze a koordinační jednání.
              </p>
              <p className="mt-2">
                <strong>Nejasné zůstává:</strong>
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Kdo koordinoval aktivity?</li>
                <li>Existoval plán činnosti?</li>
                <li>Kdo byl hlavním iniciátorem?</li>
              </ul>
            </UnknownBox>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            🔗 Související uzly
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <RelatedNode type="question" title="Co dnes víme s jistotou?" href="/otazky/co-dnes-vime-s-jistotou" />
            <RelatedNode type="question" title="Proč je kauza složitá?" href="/otazky/proc-je-kauza-slozita" />
            <RelatedNode type="question" title="Kdo nakládal s příspěvky?" href="/otazky/kdo-nakladal-s-prispevky" />
            <RelatedNode type="insight" title="Detailní analýza" href="/detailni-analyza" />
            <RelatedNode type="event" title="Timeline událostí" href="/udalosti" />
            <RelatedNode type="person" title="Všichni aktéři" href="/akteri" />
          </div>
        </section>

        <section className="p-4 md:p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg border-2 border-orange-300">
          <h3 className="text-xl font-bold text-orange-900 mb-4">
            📌 Shrnutí
          </h3>
          <div className="text-orange-900 space-y-3 text-sm">
            <p>
              <strong>Finanční nejasnosti:</strong> Kam směřovaly příspěvky (1.5+ mil. Kč)?
              Kolik členů skutečně zaplatilo? Existují další nedoložené příjmy?
            </p>
            <p>
              <strong>Členství:</strong> Kdo jsou skuteční členové? Proč seznamy nebyly k datu doloženy?
              Jaká byla motivace jednajících osob?
            </p>
            <p>
              <strong>Právní:</strong> Proč byla žaloba 39 dní po lhůtě? Jak rozhodne odvolací
              soud? Jak dopadne trestní řízení?
            </p>
            <p className="mt-3 pt-3 border-t-2 border-orange-300">
              <strong>Upozornění:</strong> Mnoho faktů je dokumentováno, ale některé otázky zůstávají
              otevřené. Tato stránka představuje pohled spolku na nejasnosti ve sporu.
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

function UnknownBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-4 rounded-lg border-2 bg-slate-50 border-slate-300">
      <h3 className="font-semibold text-slate-900 mb-2 flex items-center">
        <span className="mr-2">❓</span>
        {title}
      </h3>
      <div className="text-sm text-slate-900 space-y-2">
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
      className="block p-4 bg-white rounded-lg border-2 border-slate-200 hover:border-blue-400 hover:shadow-sm transition"
    >
      <div className="text-xs text-slate-500 mb-1">{typeLabels[type] || type}</div>
      <div className="text-sm font-medium text-slate-900">{title}</div>
    </a>
  );
}
