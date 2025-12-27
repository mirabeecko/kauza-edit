export default function CoDnesVimeSJistotouPage() {
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
            Co dnes víme s jistotou?
          </h1>
        </div>

        <section className="mb-8 p-4 md:p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
          <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
            <span className="text-2xl mr-2">💡</span>
            Kontext otázky
          </h2>
          <div className="text-blue-900 space-y-2">
            <p>
              Tato stránka shrnuje fakta z evidence spolku a soudní rozhodnutí. Jedná se o dokumentované
              události a rozhodnutí, která tvoří základ právní pozice spolku.
            </p>
            <p className="mt-3 font-semibold">
              Každé tvrzení je podloženo dokumentací nebo soudním rozhodnutím.
            </p>
          </div>
        </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">📅</span>
          Fakta o událostech
        </h2>
        <div className="space-y-4">
          <FactBox
            title="24.8.2021 - Zvolení Miroslava Brožka předsedou"
            evidence={['Zápis ze shromáždění', 'Rozhodčí komise ČAST', 'Krajský soud']}
          >
            <ul className="list-disc list-inside space-y-1">
              <li>Shromáždění delegátů zvolilo Miroslava Brožka předsedou na 5 let</li>
              <li>Rozhodčí komise ČAST potvrdila legitimitu volby (2022)</li>
              <li>Krajský soud potvrdil platnost volby (2024)</li>
              <li>Mandát trvá do roku 2026</li>
            </ul>
          </FactBox>

          <FactBox
            title="28.11.2023 - Vyloučení Vaniše a Pivoňky"
            evidence={['Doručenky', 'Rozhodčí komise ČAST', 'Předžalobní výzvy']}
          >
            <ul className="list-disc list-inside space-y-1">
              <li>Vaniš a Pivoňka vyloučeni po opakovaných výzvách (2021-2023)</li>
              <li>Doručenky potvrzují doručení oznámení o vyloučení</li>
              <li>Rozhodčí komise ČAST potvrdila, že vyloučení bylo v souladu se zákonem</li>
              <li>Od 28.11.2023 nejsou členy TJ Krupka</li>
            </ul>
          </FactBox>

          <FactBox
            title="19.12.2023 a 19.1.2024 - Výměna zámků"
            evidence={['Dokumentace SPORT Krupka', 'Datová schránka']}
          >
            <ul className="list-disc list-inside space-y-1">
              <li>SPORT Krupka vyměnila zámky na Pinčesárně 19.12.2023</li>
              <li>17.1.2024: TJ Krupka zaslala návrh nájemní smlouvy městu</li>
              <li>19.1.2024: SPORT Krupka vyměnila zámky podruhé (2 dny po smlouvě!)</li>
              <li>Legitimní předseda Brožek zablokován, vyloučení členové měli přístup</li>
            </ul>
          </FactBox>

          <FactBox
            title="8.4.2024 - Žaloba podána 39 dní po prekluzivní lhůtě"
            evidence={['Žaloba', 'Doručenky 28.11.2023', '§ 259 NOZ']}
          >
            <ul className="list-disc list-inside space-y-1">
              <li>Vyloučení doručeno: 28.11.2023</li>
              <li>Prekluzivní lhůta § 259 NOZ: 3 měsíce = 28.2.2024</li>
              <li>Žaloba podána: 8.4.2024</li>
              <li>Zpoždění: 39 dní (lhůta je NEPROMLČITELNÁ)</li>
            </ul>
          </FactBox>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">💰</span>
          Fakta o financích
        </h2>
        <div className="space-y-4">
          <FactBox
            title="Celková škoda: 2.045.635 Kč"
            evidence={['PDF "TJ ODDÍLY 2021-2023"', 'Účetnictví TJ Krupka', 'Faktury']}
          >
            <ul className="list-disc list-inside space-y-1">
              <li><strong>1.214.400 Kč</strong> - Zapřené oddílové příspěvky (59,4%)</li>
              <li><strong>299.921 Kč</strong> - Neplacené energie (14,7%)</li>
              <li><strong>143.200 Kč</strong> - Nezaplacené členské příspěvky (7,0%)</li>
              <li><strong>178.114 Kč</strong> - Nepředané pokladny oddílů (8,7%)</li>
              <li><strong>210.000 Kč</strong> - Ostatní škody (10,2%)</li>
            </ul>
          </FactBox>

          <FactBox
            title="Podle výpovědi Vaniše při výslechu"
            evidence={['Výpověď při výslechu', 'Policejní protokol']}
          >
            <p className="font-semibold">
              "Vybíral jsem příspěvky jménem spolku"
            </p>
            <p className="mt-2">
              Spolek eviduje, že tyto příspěvky nebyly TJ Krupka doloženy. Celková evidovaná nesouladnost oddílu stolního tenisu: 653.659 Kč.
            </p>
            <p className="mt-2 text-xs italic">
              Poznámka: Výpočty vycházejí z interní evidence spolku a obsahují odhady. Viz <a href="/metodika" className="underline">metodika</a>.
            </p>
          </FactBox>

          <FactBox
            title="Podle výpovědi Vlacha při výslechu"
            evidence={['Výpověď při výslechu']}
          >
            <p>
              Gustav Vlach uvedl, že má v pokladně lyžařského oddílu 132.523 Kč.
              Spolek eviduje, že tyto prostředky nebyly předány. Celková evidovaná nesouladnost: 1.041.378 Kč.
            </p>
            <p className="mt-2 text-xs italic">
              Poznámka: Výpočty vycházejí z interní evidence spolku a obsahují odhady. Viz <a href="/metodika" className="underline">metodika</a>.
            </p>
          </FactBox>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">📄</span>
          Fakta o dokumentech
        </h2>
        <div className="space-y-4">
          <FactBox
            title="Spolku k datu neeviduje doložení seznamů členů"
            evidence={['Email 13.9.2021', 'Email 10.12.2021', 'Předžalobní výzvy 11/2023']}
          >
            <ul className="list-disc list-inside space-y-1">
              <li>13.9.2021: První výzva s lhůtou do 26.9.2021</li>
              <li>10.12.2021: Opakovaná výzva</li>
              <li>11/2023: Předžalobní výzvy</li>
              <li>Spolek eviduje, že seznamy členů nebyly k datu doloženy</li>
            </ul>
          </FactBox>

          <FactBox
            title="Město obdrželo oficiální notifikaci"
            evidence={['Datová schránka 26.1.2024', 'Potvrzení o doručení']}
          >
            <p>
              26.1.2024: TJ Krupka zaslala městu Krupka oficiální notifikaci o vyloučení
              Vaniše a Pivoňky s žádostí o respektování legitimních orgánů spolku.
            </p>
          </FactBox>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">⚖️</span>
          Fakta z právních rozhodnutí
        </h2>
        <div className="space-y-4">
          <FactBox
            title="Rozhodčí komise ČAST (2022)"
            evidence={['Rozhodnutí RK ČAST', 'Zápis z jednání']}
          >
            <ul className="list-disc list-inside space-y-1">
              <li>Shromáždění 24.8.2021 bylo legitimní</li>
              <li>Miroslav Brožek je legitimním předsedou</li>
              <li>Vyloučení Vaniše a Pivoňky bylo v souladu se zákonem</li>
            </ul>
          </FactBox>

          <FactBox
            title="NS ČR 7 Tdo 102/2019 - Judikatura"
            evidence={['Rozsudek Nejvyššího soudu']}
          >
            <p>
              Příspěvky členů tělovýchovného oddílu se stávají majetkem tělovýchovné jednoty
              (TJ Krupka) okamžikem jejich předání.
            </p>
          </FactBox>
        </div>
      </section>

      <section className="mb-8 p-4 md:p-6 bg-slate-50 rounded-lg border-2 border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-3">
          📊 Statistiky
        </h2>
        <div className="grid md:grid-cols-2 gap-4 text-slate-900">
          <div>
            <div className="text-3xl font-bold text-blue-600">2.045.635 Kč</div>
            <div className="text-sm">Celková prokázaná škoda</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600">3+ roky</div>
            <div className="text-sm">Trvání kauzy (2021-2024)</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-600">2</div>
            <div className="text-sm">Vyloučení členové (Vaniš, Pivoňka)</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600">39 dní</div>
            <div className="text-sm">Zpoždění žaloby (po prekluzivní lhůtě)</div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          🔗 Související uzly
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {/* <RelatedNode type="question" title="Co zůstává nejasné?" href="/otazky/co-zustava-nejasne" /> */}
          <RelatedNode type="document" title="Rozhodčí komise ČAST" href="/cast" />
          <RelatedNode type="insight" title="Detailní analýza" href="/detailni-analyza" />
          <RelatedNode type="event" title="Timeline událostí" href="/udalosti" />
          <RelatedNode type="person" title="Všichni aktéři" href="/akteri" />
        </div>
      </section>

        <section className="p-4 md:p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg border-2 border-orange-300">
          <h3 className="text-xl font-bold text-orange-900 mb-4">
            📌 Shrnutí právní pozice spolku
          </h3>
          <div className="text-orange-900 space-y-3 text-sm">
            <p>
              <strong>Soudní rozhodnutí:</strong> Miroslav Brožek je legitimním předsedou (potvrzeno Rozhodčí komisí ČAST i Krajským soudem),
              vyloučení provedeno v souladu se stanovami.
            </p>
            <p>
              <strong>Evidence spolku:</strong> Spolek eviduje nesoulady v hospodaření ve výši 2.045.635 Kč,
              seznamy členů nebyly k datu doloženy, město obdrželo oficiální notifikaci.
            </p>
            <p>
              <strong>Právní základ:</strong> Rozhodčí komise ČAST, Krajský soud, judikatura NS ČR.
            </p>
            <p className="mt-3 pt-3 border-t-2 border-orange-300">
              <strong>Upozornění:</strong> Toto shrnutí představuje právní argumentaci spolku. Výpočty škody vycházejí z interní evidence
              a obsahují odhady. Všechny zúčastněné osoby mají právo na odlišný právní názor.
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
  title: string;
  evidence: string[];
  children: React.ReactNode;
}

function FactBox({ title, evidence, children }: FactBoxProps) {
  return (
    <div className="p-4 rounded-lg border-2 bg-blue-50 border-blue-300">
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-slate-900">{title}</h3>
        <span className="text-xs font-semibold ml-2 text-blue-700">📋 Pozice spolku</span>
      </div>
      <div className="text-sm text-slate-900 space-y-2">
        {children}
      </div>
      {evidence.length > 0 && (
        <div className="mt-3 pt-3 border-t border-blue-300">
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
