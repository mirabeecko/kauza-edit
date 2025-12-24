export default function CoZustavaNejasnePage() {
  return (
    <div className="container mx-auto px-3 md:px-8 py-6 md:py-12 max-w-4xl">
      <nav className="text-sm text-slate-600 mb-6">
        <a href="/otazky" className="hover:text-blue-600">← Všechny otázky</a>
        <span className="mx-2">/</span>
        <span>Meta</span>
      </nav>

      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold mb-4">
          ⚠️ Důležitá otázka
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
            I když máme mnoho prokázaných faktů, některé otázky zůstávají otevřené.
            Je důležité odlišit, co víme s jistotou, od toho, co zůstává nejasné.
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
          <UnknownBox title="Kam zmizely vybírané příspěvky?">
            <p>
              <strong>Víme:</strong> Vaniš, Vlach a Kulík vybírali příspěvky jménem TJ,
              ale nikdy je neodvedli (1.5+ mil. Kč).
            </p>
            <p className="mt-2">
              <strong>Nevíme:</strong>
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Kde jsou tyto peníze dnes?</li>
              <li>Byly použity na provoz oddílů?</li>
              <li>Byly použity na osobní účely?</li>
              <li>Jsou stále někde uloženy?</li>
            </ul>
          </UnknownBox>

          <UnknownBox title="Kolik členů skutečně zaplatilo?">
            <p>
              <strong>Víme:</strong> Předsedové oddílů nikdy nepředali seznamy členů.
            </p>
            <p className="mt-2">
              <strong>Nevíme:</strong>
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Kolik lidí skutečně bylo členy TJ Krupka?</li>
              <li>Kolik lidí skutečně zaplatilo příspěvky?</li>
              <li>Jsou čísla v žalobě přesná, nebo jen odhady?</li>
              <li>Věděli všichni platící, že jsou členy TJ?</li>
            </ul>
          </UnknownBox>

          <UnknownBox title="Existují další nezaúčtované příjmy?">
            <p>
              <strong>Víme:</strong> Celková škoda 2.045.635 Kč je prokázána dokumenty.
            </p>
            <p className="mt-2">
              <strong>Nevíme:</strong>
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Existují další nezaúčtované příjmy?</li>
              <li>Vybírali předsedové oddílů i jiné poplatky?</li>
              <li>Byla celková škoda ještě vyšší?</li>
            </ul>
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
              <strong>Víme:</strong> Brožek nikdy nedostal seznamy členů od předsedů oddílů.
            </p>
            <p className="mt-2">
              <strong>Nevíme:</strong>
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Kdo všechno je skutečně členem TJ?</li>
              <li>Jsou některé osoby členy duplicitně?</li>
              <li>Existují "mrtvé duše" (osoby uvedené, ale fakticky neaktivní)?</li>
            </ul>
          </UnknownBox>

          <UnknownBox title="Proč předsedové oddílů odmítli seznamy předat?">
            <p>
              <strong>Víme:</strong> 3+ roky ignorovali výzvy k předání seznamů členů.
            </p>
            <p className="mt-2">
              <strong>Nevíme motivaci:</strong>
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Chtěli skrýt skutečný počet členů?</li>
              <li>Chtěli bránit Brožkovi v plnění povinností?</li>
              <li>Plánovali převzít kontrolu nad TJ?</li>
              <li>Měli jiné důvody?</li>
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
              <strong>Víme:</strong> Žaloba podána 8.4.2024, prekluzivní lhůta skončila 28.2.2024.
            </p>
            <p className="mt-2">
              <strong>Nevíme:</strong>
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Proč Vaniš a Pivoňka čekali 39 dní po lhůtě?</li>
              <li>Nevěděli o lhůtě, nebo ji záměrně ignorovali?</li>
              <li>Byl to strategický krok, nebo chyba?</li>
            </ul>
          </UnknownBox>

          <UnknownBox title="Jak rozhodne odvolací soud?">
            <p>
              <strong>Víme:</strong> Krajský soud rozhodl o neplatnosti vyloučení (sporné).
            </p>
            <p className="mt-2">
              <strong>Nevíme:</strong>
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Zruší odvolací soud rozsudek kvůli prekluzivní lhůtě?</li>
              <li>Potvrdí nebo změní rozhodnutí krajského soudu?</li>
              <li>Jaký bude konečný právní stav členství Vaniše a Pivoňky?</li>
            </ul>
          </UnknownBox>

          <UnknownBox title="Jak dopadne trestní řízení?">
            <p>
              <strong>Víme:</strong> Policie vyslýchá svědky, Vaniš a Vlach přiznali fakta.
            </p>
            <p className="mt-2">
              <strong>Nevíme:</strong>
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Bude podána obžaloba?</li>
              <li>Bude kvalifikována jako zpronevěra § 206 TZ?</li>
              <li>Jaký bude rozsudek trestního soudu?</li>
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
          <UnknownBox title="Proč se kauza rozhořela v roce 2021?">
            <p>
              <strong>Víme:</strong> Kauza začala po zvolení Brožka předsedou (24.8.2021).
            </p>
            <p className="mt-2">
              <strong>Nevíme:</strong>
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Proč předsedové oddílů odmítli spolupráci s Brožkem?</li>
              <li>Existoval předchozí konflikt?</li>
              <li>Byl to osobní nebo systémový problém?</li>
            </ul>
          </UnknownBox>

          <UnknownBox title="Kdo koordinoval odpor proti Brožkovi?">
            <p>
              <strong>Víme:</strong> Vaniš, Pivoňka a další svolávali nelegální schůze.
            </p>
            <p className="mt-2">
              <strong>Nevíme:</strong>
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Kdo koordinoval aktivity proti Brožkovi?</li>
              <li>Existoval plán na převzetí kontroly?</li>
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

      <section className="-mx-3 md:-mx-8 px-3 md:px-8 py-8 md:py-12 bg-gradient-to-r from-blue-600 to-blue-700">
        <h3 className="text-xl font-bold text-white mb-4">
          📌 Shrnutí
        </h3>
        <div className="text-white space-y-3">
          <p>
            <strong>Finanční nejasnosti:</strong> Kam zmizely příspěvky (1.5+ mil. Kč)?
            Kolik členů skutečně zaplatilo? Existují další nezaúčtované příjmy?
          </p>
          <p>
            <strong>Členství:</strong> Kdo jsou skuteční členové? Proč předsedové odmítli
            seznamy předat? Jaká byla jejich motivace?
          </p>
          <p>
            <strong>Právní:</strong> Proč byla žaloba 39 dní po lhůtě? Jak rozhodne odvolací
            soud? Jak dopadne trestní řízení?
          </p>
          <p>
            <strong>Důležité:</strong> Mnoho faktů je prokázáno, ale některé otázky zůstávají
            otevřené. Transparentnost = přiznat, co nevíme.
          </p>
        </div>
      </section>
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
