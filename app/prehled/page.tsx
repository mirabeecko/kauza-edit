export default function PrehledPage() {
  return (
    <div className="container mx-auto px-8 py-12 max-w-4xl">
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
          ⚡ 5 minut čtení
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Rychlý přehled kauzy
        </h1>
        <p className="text-xl text-slate-600">
          Základní fakta a hlavní body. Co se stalo, kdo je kdo, a proč je to důležité.
        </p>
      </div>

      <div className="space-y-8">
        {/* Co se stalo */}
        <section className="bg-white p-6 rounded-lg border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="text-3xl mr-3">📋</span>
            Co se stalo?
          </h2>
          <div className="space-y-3 text-slate-700">
            <p>
              V srpnu 2021 byl <strong>Miroslav Brožek zvolen předsedou</strong> spolku TJ Krupka z.s.
              na 5 let. První úkol: aktualizovat členskou základnu (obsahovala osoby starší 100 let).
            </p>
            <p>
              <strong>Předsedové oddílů</strong> (Vaniš, Vlach, Kulík) <strong>nepředali seznamy členů</strong>
              přes opakované výzvy a stanovené lhůty (září-prosinec 2021).
            </p>
            <p>
              Předsedové oddílů <strong>vybírali členské příspěvky</strong> (2.400 Kč/rok/člen), ale
              <strong>neodváděli je spolku</strong>. Neplatili ani náklady za energie (světlo, teplo, voda).
            </p>
            <p>
              V listopadu 2023, po předžalobních výzvách, byli <strong>Vaniš a Pivoňka vyloučeni</strong>
              ze spolku za hrubé porušení povinností. Vlach a Kulík vystoupili (neplacení příspěvků).
            </p>
            <p>
              V dubnu 2024 podali žaloby na TJ Krupka - <strong>po uplynutí prekluzivní lhůty</strong>
              dle § 259 NOZ (měli žalovat do 3 měsíců, žalovali až po 5 měsících).
            </p>
          </div>
        </section>

        {/* Kdo je kdo */}
        <section className="bg-white p-6 rounded-lg border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="text-3xl mr-3">👥</span>
            Kdo je kdo?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 rounded border border-green-200">
              <h3 className="font-bold text-green-900 mb-2">Miroslav Brožek (MB)</h3>
              <ul className="text-sm text-green-800 space-y-1">
                <li>✓ Legitimně zvolený předseda (24.8.2021)</li>
                <li>✓ Snaha o nápravu a transparentnost</li>
                <li>✓ Řádně platil příspěvky</li>
                <li>✓ Trénuje děti svého zesnulého otce</li>
              </ul>
            </div>
            <div className="p-4 bg-red-50 rounded border border-red-200">
              <h3 className="font-bold text-red-900 mb-2">Marek Vaniš</h3>
              <ul className="text-sm text-red-800 space-y-1">
                <li>✗ Údajný předseda oddílu stolního tenisu</li>
                <li>✗ Nikdy nedoložil legitimnost funkce</li>
                <li>✗ Nedodal seznamy členů (3+ roky)</li>
                <li>✗ Vybíral příspěvky, ale neodváděl je</li>
                <li>✗ Vyloučen 28.11.2023</li>
              </ul>
            </div>
            <div className="p-4 bg-red-50 rounded border border-red-200">
              <h3 className="font-bold text-red-900 mb-2">Jaromír Pivoňka</h3>
              <ul className="text-sm text-red-800 space-y-1">
                <li>✗ Spolupracovník Vaniše</li>
                <li>✗ Spolupodílel se na všech činech</li>
                <li>✗ Vyloučen 28.11.2023</li>
              </ul>
            </div>
            <div className="p-4 bg-red-50 rounded border border-red-200">
              <h3 className="font-bold text-red-900 mb-2">Gustav Vlach, Martin Kulík</h3>
              <ul className="text-sm text-red-800 space-y-1">
                <li>✗ Předsedové dalších oddílů</li>
                <li>✗ Nedodali seznamy členů</li>
                <li>✗ Neplatili příspěvky</li>
                <li>✗ Zánik členství (prosinec 2023)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Číselné údaje */}
        <section className="bg-white p-6 rounded-lg border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="text-3xl mr-3">💰</span>
            Číselné údaje
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-red-50 rounded">
              <div className="text-3xl font-bold text-red-900">~2 mil. Kč</div>
              <div className="text-sm text-red-700 mt-1">Celková škoda</div>
            </div>
            <div className="text-center p-4 bg-red-50 rounded">
              <div className="text-3xl font-bold text-red-900">500 tis. Kč</div>
              <div className="text-sm text-red-700 mt-1">Nezaplacené příspěvky</div>
            </div>
            <div className="text-center p-4 bg-red-50 rounded">
              <div className="text-3xl font-bold text-red-900">560 tis. Kč</div>
              <div className="text-sm text-red-700 mt-1">Nezaplacené energie</div>
            </div>
          </div>
          <div className="mt-4 p-4 bg-amber-50 rounded border border-amber-200">
            <p className="text-sm text-amber-900">
              <strong>Poznámka:</strong> Jedná se o přímou škodu. Nepřímé náklady (soudní výlohy,
              právní zastoupení) nejsou zahrnuty.
            </p>
          </div>
        </section>

        {/* Časová osa */}
        <section className="bg-white p-6 rounded-lg border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="text-3xl mr-3">📅</span>
            Časová osa
          </h2>
          <div className="space-y-3">
            <TimelineItem
              date="24.8.2021"
              phase="Fáze 1"
              color="green"
              text="Zvolení MB předsedou. Dohoda o předání seznamů členů."
            />
            <TimelineItem
              date="26.9.2021"
              phase="Fáze 1"
              color="orange"
              text="Vypršela lhůta. Vaniš, Vlach, Kulík seznamy NEDODALI."
            />
            <TimelineItem
              date="2021-2023"
              phase="Fáze 2"
              color="orange"
              text="Opakované výzvy ignorovány. Vybírání příspěvků bez odvodu."
            />
            <TimelineItem
              date="28.11.2023"
              phase="Fáze 2"
              color="red"
              text="Vyloučení Vaniše a Pivoňky za hrubé porušení povinností."
            />
            <TimelineItem
              date="28.2.2024"
              phase="Fáze 3"
              color="blue"
              text="Vypršela prekluzivní lhůta pro žalobu (§ 259 NOZ)."
            />
            <TimelineItem
              date="8.4.2024"
              phase="Fáze 3"
              color="red"
              text="Žaloba Vaniše a Pivoňky - 39 dní PO LHŮTĚ!"
            />
          </div>
        </section>

        {/* Proč je to důležité */}
        <section className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
            <span className="text-3xl mr-3">⚠️</span>
            Proč je to důležité?
          </h2>
          <div className="space-y-3 text-blue-900">
            <p>
              <strong>1. Přihlášku obhajoby trestné činnosti:</strong> Pokud soud uzná opožděné žaloby,
              legitimizuje zpronevěru a porušování zákonů.
            </p>
            <p>
              <strong>2. Precedens pro spolky:</strong> Může nastavit nebezpečný precedens - člověk
              vybírá peníze, neodvádí je, a pak se brání žalobou po lhůtě.
            </p>
            <p>
              <strong>3. Spravedlnost:</strong> Ohrožuje člověka, který se snažil o nápravu a dodržování
              zákonů, zatímco ti, kdo zákon porušovali, nejsou potrestáni.
            </p>
            <p>
              <strong>4. Sportovní činnost:</strong> Kauza ohrožuje existenci spolku a sportovní činnost
              dětí v Krupce.
            </p>
          </div>
        </section>

        {/* Další kroky */}
        <section className="bg-slate-50 p-6 rounded-lg border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            Chcete se dozvědět více?
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/souvislosti" className="p-4 bg-white rounded border border-slate-200 hover:border-blue-400 transition">
              <div className="text-2xl mb-2">🔗</div>
              <h4 className="font-bold text-slate-900 mb-1">Souvislosti</h4>
              <p className="text-sm text-slate-600">
                Vazby mezi událostmi a osobami
              </p>
            </a>
            <a href="/detailni-analyza" className="p-4 bg-white rounded border border-slate-200 hover:border-blue-400 transition">
              <div className="text-2xl mb-2">🔬</div>
              <h4 className="font-bold text-slate-900 mb-1">Detailní analýza</h4>
              <p className="text-sm text-slate-600">
                Kompletní dokumentace s důkazy
              </p>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

interface TimelineItemProps {
  date: string;
  phase: string;
  color: 'green' | 'orange' | 'red' | 'blue';
  text: string;
}

function TimelineItem({ date, phase, color, text }: TimelineItemProps) {
  const colorClasses = {
    green: 'bg-green-100 text-green-800 border-green-300',
    orange: 'bg-orange-100 text-orange-800 border-orange-300',
    red: 'bg-red-100 text-red-800 border-red-300',
    blue: 'bg-blue-100 text-blue-800 border-blue-300',
  };

  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-32">
        <div className={`px-3 py-1 rounded text-sm font-semibold ${colorClasses[color]}`}>
          {date}
        </div>
        <div className="text-xs text-slate-500 mt-1">{phase}</div>
      </div>
      <div className="flex-1">
        <p className="text-slate-700">{text}</p>
      </div>
    </div>
  );
}
