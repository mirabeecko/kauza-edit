export default function ProcJeKauzaSlozitaPage() {
  return (
    <div className="container mx-auto px-3 md:px-8 py-6 md:py-12 max-w-4xl">
      <nav className="text-sm text-slate-600 mb-6">
        <a href="/otazky" className="hover:text-blue-600">← Všechny otázky</a>
        <span className="mx-2">/</span>
        <span>Meta</span>
      </nav>

      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
          ℹ️ Kontext
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Proč je kauza složitá?
        </h1>
      </div>

      <section className="mb-8 p-4 md:p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
        <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
          <span className="text-2xl mr-2">💡</span>
          Proč je otázka důležitá
        </h2>
        <div className="text-blue-900 space-y-2">
          <p>
            Na první pohled se může zdát kauza jednoduchá: někdo nezaplatil, někdo
            porušil pravidla. Ale realita je mnohem složitější.
          </p>
          <p className="mt-3 font-semibold">
            Pochopení složitosti pomáhá vidět celý obraz, ne jen izolované události.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">🧩</span>
          Důvody složitosti
        </h2>
        <div className="space-y-4">
          <ComplexityBox
            title="1. Mnoho aktérů s různými rolemi"
            icon="👥"
          >
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong>Předseda TJ:</strong> Miroslav Brožek</li>
              <li><strong>Předsedové oddílů:</strong> Vaniš, Vlach, Kulík</li>
              <li><strong>Vyloučení členové:</strong> Vaniš, Pivoňka</li>
              <li><strong>Instituce:</strong> ČAST, policie, soud, město Krupka</li>
              <li><strong>Právníci, svědci, další členové</strong></li>
            </ul>
            <p className="mt-2 text-sm">
              Každý aktér má svůj pohled, své motivace a své právní postavení.
            </p>
          </ComplexityBox>

          <ComplexityBox
            title="2. Mnoho vrstev právních otázek"
            icon="⚖️"
          >
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong>Členství:</strong> Kdo je členem? Kdo měl právo hlasovat?</li>
              <li><strong>Legitimita orgánů:</strong> Kdo měl právo svolávat schůze?</li>
              <li><strong>Finance:</strong> Komu patří příspěvky? Kdy nastala škoda?</li>
              <li><strong>Trestní právo:</strong> Byla spáchána zpronevěra?</li>
              <li><strong>Autonomie spolku:</strong> Mohou instituce zasahovat?</li>
            </ul>
            <p className="mt-2 text-sm">
              Každá vrstva má své zákony, judikatura a postupy.
            </p>
          </ComplexityBox>

          <ComplexityBox
            title="3. Časová osa trvá 3+ roky"
            icon="📅"
          >
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong>2021:</strong> Volba Brožka, první výzvy k předání seznamů</li>
              <li><strong>2022:</strong> Rozhodčí komise ČAST, opakované výzvy</li>
              <li><strong>2023:</strong> Vyloučení členů, výměna zámků, předžalobní výzvy</li>
              <li><strong>2024:</strong> Žaloba, trestní oznámení, rozsudek, výslechy</li>
            </ul>
            <p className="mt-2 text-sm">
              Každá událost navazuje na předchozí. Bez kontextu je těžké pochopit,
              proč lidé jednali určitým způsobem.
            </p>
          </ComplexityBox>

          <ComplexityBox
            title="4. Chybějící dokumenty a informace"
            icon="📄"
          >
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Seznamy členů nikdy nebyly předány (3+ roky)</li>
              <li>Není jasné, kam zmizely vybírané příspěvky</li>
              <li>Motivace některých aktérů zůstává nejasná</li>
              <li>Některé schůze a rozhodnutí nejsou dostatečně zdokumentovány</li>
            </ul>
            <p className="mt-2 text-sm">
              Absence informací ztěžuje rekonstrukci událostí a určení odpovědnosti.
            </p>
          </ComplexityBox>

          <ComplexityBox
            title="5. Paralelní právní řízení"
            icon="⚖️"
          >
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong>Rozhodčí komise ČAST:</strong> Potvrdila legitimitu Brožka (2022)</li>
              <li><strong>Občanskoprávní řízení:</strong> Žaloba o vyloučení (2024)</li>
              <li><strong>Trestní řízení:</strong> Vyšetřování zpronevěry (2024)</li>
              <li><strong>Správní právo:</strong> Role města Krupka</li>
            </ul>
            <p className="mt-2 text-sm">
              Každé řízení má jiné standardy důkazů, jiné lhůty a jiné důsledky.
            </p>
          </ComplexityBox>

          <ComplexityBox
            title="6. Konflikt verzí příběhu"
            icon="💭"
          >
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong>Brožek:</strong> Snažil se o řádné vedení TJ, ale byl blokován</li>
              <li><strong>Vaniš/Pivoňka:</strong> Tvrdí, že Brožek je nelegitimní předseda</li>
              <li><strong>Předsedové oddílů:</strong> Považují oddíly za autonomní jednotky</li>
              <li><strong>Město:</strong> Tvrdí, že jedná v zájmu sportu</li>
            </ul>
            <p className="mt-2 text-sm">
              Každá strana má svůj pohled. Pravda se skrývá v dokumentech a důkazech,
              ne v tvrzeních.
            </p>
          </ComplexityBox>

          <ComplexityBox
            title="7. Emoce a osobní vztahy"
            icon="💔"
          >
            <p>
              Kauza není jen o zákonech a penězích. Jde o:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Dlouholeté osobní vztahy mezi členy</li>
              <li>Emocionální investici do sportovních oddílů</li>
              <li>Pocit křivdy na obou stranách</li>
              <li>Politický rozměr (město Krupka)</li>
            </ul>
            <p className="mt-2 text-sm">
              Emoce ztěžují racionální řešení a prodlužují konflikt.
            </p>
          </ComplexityBox>

          <ComplexityBox
            title="8. Technické právní detaily"
            icon="📚"
          >
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Prekluzivní lhůta § 259 NOZ (3 měsíce, nepromlčitelná)</li>
              <li>Autonomie spolku § 20a NOZ vs. dohled institucí</li>
              <li>Subjektivita oddílů vs. jednota TJ podle NS ČR 7 Tdo 102/2019</li>
              <li>Legitimita orgánů spolku podle § 248, § 258 NOZ</li>
            </ul>
            <p className="mt-2 text-sm">
              Tyto technické detaily jsou klíčové pro právní posouzení, ale jsou
              obtížně srozumitelné bez právnického vzdělání.
            </p>
          </ComplexityBox>
        </div>
      </section>

      <section className="mb-8 p-4 md:p-6 bg-slate-50 rounded-lg border-2 border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-3">
          💡 Jak číst tuto kauzu
        </h2>
        <div className="space-y-3 text-slate-900">
          <div>
            <h3 className="font-semibold mb-1">1. Začněte s fakty</h3>
            <p className="text-sm">
              Než se ponoříte do detailů, přečtěte si{" "}
              <a href="/otazky/co-dnes-vime-s-jistotou" className="text-blue-600 hover:underline">
                Co dnes víme s jistotou
              </a>
              . To vám dá pevný základ.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">2. Pochopte časovou osu</h3>
            <p className="text-sm">
              Prohlédněte si{" "}
              <a href="/udalosti" className="text-blue-600 hover:underline">
                timeline událostí
              </a>
              . Kontext je klíčový.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">3. Zkoumejte aktéry</h3>
            <p className="text-sm">
              Kdo jsou{" "}
              <a href="/akteri" className="text-blue-600 hover:underline">
                hlavní aktéři
              </a>
              ? Jaké jsou jejich role a motivace?
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">4. Odlišujte fakta od interpretací</h3>
            <p className="text-sm">
              Tento web se snaží jasně odlišit prokázaná fakta od tvrzení a spekulací.
              Vždy hledejte důkazy.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          🔗 Související uzly
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <RelatedNode type="question" title="Co dnes víme s jistotou?" href="/otazky/co-dnes-vime-s-jistotou" />
          <RelatedNode type="question" title="Co zůstává nejasné?" href="/otazky/co-zustava-nejasne" />
          <RelatedNode type="event" title="Timeline událostí" href="/udalosti" />
          <RelatedNode type="person" title="Všichni aktéři" href="/akteri" />
          <RelatedNode type="insight" title="Rychlý přehled" href="/prehled" />
          <RelatedNode type="insight" title="Detailní analýza" href="/detailni-analyza" />
        </div>
      </section>

      <section className="-mx-3 md:-mx-8 px-3 md:px-8 py-8 md:py-12 bg-gradient-to-r from-blue-600 to-blue-700">
        <h3 className="text-xl font-bold text-white mb-4">
          📌 Shrnutí
        </h3>
        <div className="text-white space-y-3">
          <p>
            <strong>Kauza je složitá kvůli:</strong> Mnoho aktérů s různými rolemi,
            mnoho vrstev právních otázek, časová osa 3+ roky, chybějící dokumenty.
          </p>
          <p>
            <strong>Paralelní řízení:</strong> Rozhodčí komise ČAST, občanskoprávní
            řízení, trestní řízení, správní právo - každé s jinými standardy.
          </p>
          <p>
            <strong>Lidský rozměr:</strong> Konflikt verzí příběhu, emoce a osobní
            vztahy, technické právní detaily obtížně srozumitelné.
          </p>
          <p>
            <strong>Jak číst:</strong> Začněte s fakty, pochopte časovou osu, zkoumejte
            aktéry, odlišujte fakta od interpretací.
          </p>
        </div>
      </section>
    </div>
  );
}

interface ComplexityBoxProps {
  title: string;
  icon: string;
  children: React.ReactNode;
}

function ComplexityBox({ title, icon, children }: ComplexityBoxProps) {
  return (
    <div className="p-4 rounded-lg border-2 bg-amber-50 border-amber-300">
      <h3 className="font-semibold text-slate-900 mb-2 flex items-center">
        <span className="text-2xl mr-2">{icon}</span>
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
