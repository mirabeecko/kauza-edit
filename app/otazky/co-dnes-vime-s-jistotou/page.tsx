export default function CoDnesVimeSJistotouPage() {
  return (
    <div className="container mx-auto px-3 md:px-8 py-6 md:py-12 max-w-4xl">
      <nav className="text-sm text-slate-600 mb-6">
        <a href="/otazky" className="hover:text-blue-600">← Všechny otázky</a>
        <span className="mx-2">/</span>
        <span>Meta</span>
      </nav>

      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold mb-4">
          🔥 Klíčová otázka
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Co dnes víme s jistotou?
        </h1>
      </div>

      <section className="mb-8 p-4 md:p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
        <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
          <span className="text-2xl mr-2">💡</span>
          Proč je otázka důležitá
        </h2>
        <div className="text-blue-900 space-y-2">
          <p>
            V složité kauze je důležité oddělit fakta od interpretací. Tato stránka obsahuje
            pouze to, co lze prokázat dokumenty a důkazy.
          </p>
          <p className="mt-3 font-semibold">
            Žádné domněnky, žádné interpretace - pouze prokázatelná fakta.
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
            title="Vaniš přiznal při výslechu"
            evidence={['Výpověď při výslechu', 'Policejní protokol']}
          >
            <p className="font-semibold">
              "Vybíral jsem příspěvky jménem spolku"
            </p>
            <p className="mt-2">
              Ale nikdy je neodvedl TJ Krupka. Celková škoda oddílu stolního tenisu: 653.659 Kč.
            </p>
          </FactBox>

          <FactBox
            title="Vlach přiznal pokladnu, kterou nepředal"
            evidence={['Výpověď při výslechu']}
          >
            <p>
              Gustav Vlach přiznal, že má v pokladně lyžařského oddílu 132.523 Kč.
              Nikdy je nepředal. Celková škoda: 1.041.378 Kč.
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
            title="Seznamy členů NIKDY nebyly předány"
            evidence={['Email 13.9.2021', 'Email 10.12.2021', 'Předžalobní výzvy 11/2023']}
          >
            <ul className="list-disc list-inside space-y-1">
              <li>13.9.2021: První výzva s lhůtou do 26.9.2021 - ignorována</li>
              <li>10.12.2021: Opakovaná výzva - ignorována</li>
              <li>11/2023: Předžalobní výzvy - ignorovány</li>
              <li>3+ roky: Žádný seznam členů nebyl předán</li>
            </ul>
          </FactBox>

          <FactBox
            title="Město ignorovalo oficiální notifikaci"
            evidence={['Datová schránka 26.1.2024', 'Potvrzení o doručení']}
          >
            <p>
              26.1.2024: TJ Krupka zaslala městu Krupka oficiální notifikaci o vyloučení
              Vaniše a Pivoňky. Město notifikaci ignorovalo a pokračovalo v podpoře
              vyloučených členů.
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
            title="Krajský soud v Ústí nad Labem (2024)"
            evidence={['Rozsudek 30 C 104/2024']}
          >
            <ul className="list-disc list-inside space-y-1">
              <li>Potvrdil platnost volby Miroslava Brožka (2021)</li>
              <li>Vyloučení bylo neplatné (sporné - žaloba po prekluzivní lhůtě)</li>
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
          <RelatedNode type="question" title="Co zůstává nejasné?" href="/otazky/co-zustava-nejasne" />
          <RelatedNode type="question" title="Kdo koho poškodil?" href="/otazky/kdo-koho-poskodil" />
          <RelatedNode type="document" title="Rozhodčí komise ČAST" href="/cast" />
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
            <strong>S jistotou víme:</strong> Miroslav Brožek je legitimním předsedou (potvrzeno ČAST i soudem),
            Vaniš a Pivoňka byli vyloučeni v souladu se zákonem, celková škoda je 2.045.635 Kč.
          </p>
          <p>
            <strong>Prokázáno dokumenty:</strong> Seznamy členů nebyly předány 3+ roky, příspěvky
            vybírány ale neodvedeny, město ignorovalo oficiální notifikaci.
          </p>
          <p>
            <strong>Právně potvrzeno:</strong> Rozhodčí komise ČAST, Krajský soud, judikatura NS ČR.
          </p>
        </div>
      </section>
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
    <div className="p-4 rounded-lg border-2 bg-green-50 border-green-300">
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-slate-900">{title}</h3>
        <span className="text-xs font-semibold ml-2 text-green-700">✅ Prokázáno</span>
      </div>
      <div className="text-sm text-slate-900 space-y-2">
        {children}
      </div>
      {evidence.length > 0 && (
        <div className="mt-3 pt-3 border-t border-green-300">
          <div className="text-xs font-semibold text-slate-600 mb-1">Důkazy:</div>
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
