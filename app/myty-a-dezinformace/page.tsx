export default function MytyADezinformacePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Legal Disclaimer Banner */}
      <div className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-3 md:px-8 max-w-4xl">
          <p className="text-sm leading-relaxed">
            ⚖️ <strong>Důležité právní upozornění:</strong> Tato stránka prezentuje právní pozici spolku TJ Krupka z.s.
            a vyvrací dezinformace šířené o kauze. Uvedené informace nejsou pravomocným soudním rozhodnutím.
            Všechny zúčastněné osoby mají právo na odlišný právní názor.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-8 py-6 md:py-12 max-w-4xl">
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold mb-4">
            🚫 Vyvrácení mýtů
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Mýty a dezinformace o kauze
          </h1>
          <p className="text-xl text-slate-600">
            Vyvrácení nejčastějších dezinformací podle právní pozice spolku TJ Krupka
          </p>
        </div>

        <section className="mb-8 p-4 md:p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
          <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
            <span className="text-2xl mr-2">💡</span>
            Proč je důležité vyvrátit mýty
          </h2>
          <div className="text-blue-900 space-y-2">
            <p>
              Kolem kauzy TJ Krupka se šíří řada dezinformací, které zkreslují skutečnost a brání
              pochopení celé situace. Tato stránka prezentuje právní pozici spolku a vyvrací nejčastější mýty.
            </p>
            <p className="mt-3 text-sm italic">
              Všechny zúčastněné osoby mají právo na odlišný právní názor. Konečné posouzení je v kompetenci
              příslušných soudů.
            </p>
          </div>
        </section>

        {/* Mýtus 1 */}
        <section className="mb-8">
          <MythBox
            number={1}
            myth="Miroslav Brožek není legitimní předseda"
            mythSource="Tvrzení vyloučených členů"
          >
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-green-900 mb-2">✅ Realita podle pozice spolku:</h4>
                <p className="text-slate-700">
                  Spolek zastává právní názor, že Miroslav Brožek je legitimní předseda zvolený na řádném
                  shromáždění 24.8.2021.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">📋 Důkazy:</h4>
                <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                  <li>Zápis ze shromáždění 24.8.2021</li>
                  <li>Rozhodčí komise ČAST potvrdila legitimitu volby (2022)</li>
                  <li>Volba proběhla podle stanov TJ Krupka</li>
                </ul>
              </div>
              <div>
                <p className="text-xs text-slate-600 italic">
                  Vyloučení členové mají k tomuto odlišný právní názor. Konečné posouzení je v kompetenci soudů.
                </p>
              </div>
            </div>
          </MythBox>

          {/* Mýtus 2 */}
          <MythBox
            number={2}
            myth="Oddíly jsou samostatné právní subjekty"
            mythSource="Tvrzení předsedů oddílů"
          >
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-green-900 mb-2">✅ Realita podle pozice spolku:</h4>
                <p className="text-slate-700">
                  Podle právní pozice spolku a judikatury Nejvyššího soudu jsou oddíly součástí TJ Krupka
                  a nemají samostatnou právní subjektivitu.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">📋 Právní základ:</h4>
                <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                  <li>NS ČR 7 Tdo 102/2019: Příspěvky patří tělovýchovné jednotě, ne oddílům</li>
                  <li>Stanovy TJ Krupka: Oddíly jsou organizační součástí TJ</li>
                  <li>§ 214 NOZ: Spolek má jednu právní subjektivitu</li>
                </ul>
              </div>
              <div>
                <p className="text-xs text-slate-600 italic">
                  Předsedové oddílů mají k tomuto odlišný právní názor.
                </p>
              </div>
            </div>
          </MythBox>

          {/* Mýtus 3 */}
          <MythBox
            number={3}
            myth="Město Krupka muselo zasáhnout kvůli problémům ve spolku"
            mythSource="Tvrzení některých aktérů"
          >
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-green-900 mb-2">✅ Realita podle pozice spolku:</h4>
                <p className="text-slate-700">
                  Spolek zastává právní názor, že podle § 20a NOZ musí stát a obce respektovat autonomii
                  spolků. Spolek eviduje situace, kdy město zasahovalo do vnitřních záležitostí spolku.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">📋 Právní základ:</h4>
                <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                  <li>§ 20a NOZ: Autonomie spolku</li>
                  <li>Spory se řeší u soudu, nikoli prostřednictvím města</li>
                  <li>Rozhodčí komise ČAST potvrdila postupy předsedy</li>
                </ul>
              </div>
              <div>
                <p className="text-xs text-slate-600 italic">
                  Město má právo na odlišný právní názor. Konečné posouzení je v kompetenci příslušných orgánů.
                </p>
              </div>
            </div>
          </MythBox>

          {/* Mýtus 4 */}
          <MythBox
            number={4}
            myth="Příspěvky členů patří oddílům, ne spolku"
            mythSource="Argumentace předsedů oddílů"
          >
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-green-900 mb-2">✅ Realita podle pozice spolku:</h4>
                <p className="text-slate-700">
                  Podle právní pozice spolku a judikatury Nejvyššího soudu se příspěvky členů stávají
                  majetkem tělovýchovné jednoty okamžikem jejich předání.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">📋 Právní základ:</h4>
                <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                  <li>NS ČR 7 Tdo 102/2019: Příspěvky jsou majetkem TJ, nikoli oddílů</li>
                  <li>Stanovy TJ Krupka: Povinnost odvodu příspěvků spolku</li>
                  <li>§ 217 NOZ: Členský příspěvek patří spolku</li>
                </ul>
              </div>
              <div>
                <p className="text-xs text-slate-600 italic">
                  Vyloučení členové mají k tomuto odlišný právní názor.
                </p>
              </div>
            </div>
          </MythBox>

          {/* Mýtus 5 */}
          <MythBox
            number={5}
            myth="Neexistují důkazy o finanční újmě"
            mythSource="Tvrzení vyloučených členů"
          >
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-green-900 mb-2">✅ Realita podle pozice spolku:</h4>
                <p className="text-slate-700">
                  Spolek vyčísluje potenciální škodu na 2.476.497 Kč na základě interní evidence a výpočtů.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">📋 Evidence spolku:</h4>
                <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                  <li>K datu neeviduje doložení oddílových příspěvků (1.179.000 Kč)</li>
                  <li>K datu neeviduje doložení úhrad za energie od oddílů (556.375 Kč)</li>
                  <li>K datu neeviduje předání pokladen oddílů (176.318 Kč)</li>
                </ul>
              </div>
              <div>
                <p className="text-xs text-slate-600 italic">
                  Výpočty vycházejí z interní evidence spolku a obsahují odhady. Vyloučení členové mají
                  k výpočtům odlišný právní názor. Konečné posouzení je v kompetenci soudů.
                </p>
              </div>
            </div>
          </MythBox>

          {/* Mýtus 6 */}
          <MythBox
            number={6}
            myth="Brožek měl veškeré informace a dokumenty k dispozici"
            mythSource="Argumentace vyloučených členů"
          >
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-green-900 mb-2">✅ Realita podle pozice spolku:</h4>
                <p className="text-slate-700">
                  Spolek k datu neeviduje doložení seznamů členů oddílů, hospodářských výkazů a dalších
                  dokumentů, přestože byly opakovaně vyžadovány (2021-2023).
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">📋 Evidence spolku:</h4>
                <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                  <li>Email 13.9.2021: První výzva k předání seznamů členů</li>
                  <li>Email 10.12.2021: Opakovaná výzva</li>
                  <li>11/2023: Předžalobní výzvy</li>
                  <li>Spolek eviduje omezení fyzického přístupu k objektům</li>
                </ul>
              </div>
              <div>
                <p className="text-xs text-slate-600 italic">
                  Vyloučení členové mají k tomuto odlišný právní názor.
                </p>
              </div>
            </div>
          </MythBox>

          {/* Mýtus 7 */}
          <MythBox
            number={7}
            myth="Rozhodnutí soudu potvrdila neplatnost volby Brožka"
            mythSource="Nesprávná interpretace rozsudků"
          >
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-green-900 mb-2">✅ Realita podle pozice spolku:</h4>
                <p className="text-slate-700">
                  Spolek má k některým rozhodnutím Krajského soudu v Ústí nad Labem odlišný právní názor
                  a zvažuje odvolání. Rozhodčí komise ČAST potvrdila legitimitu volby předsedy (2022).
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">📋 Evidence spolku:</h4>
                <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                  <li>Rozhodčí komise ČAST: Potvrdila legitimitu volby (2022)</li>
                  <li>Krajský soud: Spolek zvažuje odvolání proti některým rozhodnutím</li>
                  <li>Řízení stále probíhá</li>
                </ul>
              </div>
              <div>
                <p className="text-xs text-slate-600 italic">
                  Všechna soudní rozhodnutí si zasluhují respekt. Konečné posouzení je v kompetenci
                  odvolacích soudů.
                </p>
              </div>
            </div>
          </MythBox>
        </section>

        <section className="p-4 md:p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg border-2 border-orange-300">
          <h3 className="text-xl font-bold text-orange-900 mb-4">
            📌 Shrnutí
          </h3>
          <div className="text-orange-900 space-y-3 text-sm">
            <p>
              <strong>Důležité:</strong> Tato stránka prezentuje právní pozici spolku TJ Krupka z.s.
              a vyvrací dezinformace, které jsou v rozporu s touto pozicí.
            </p>
            <p>
              <strong>Právo na odlišný názor:</strong> Všechny zúčastněné osoby mají právo na odlišný
              právní názor a právo prezentovat svou verzi událostí.
            </p>
            <p className="mt-3 pt-3 border-t-2 border-orange-300">
              <strong>Upozornění:</strong> Konečné právní posouzení všech sporných otázek je výlučně
              v kompetenci příslušných soudů. Platí presumpce neviny pro všechny zúčastněné osoby.
            </p>
          </div>
        </section>

        <section className="mt-8 p-4 md:p-6 bg-slate-50 border-2 border-slate-200 rounded-lg">
          <h3 className="text-lg font-bold text-slate-900 mb-2">
            ⚖️ Námitky k uvedeným údajům
          </h3>
          <p className="text-sm text-slate-700">
            Pokud máte podloženou námitku k jakémukolu údaji na této stránce, kontaktujte nás prostřednictvím stránky{' '}
            <a href="/pravni-ramec" className="text-blue-600 hover:underline font-semibold">
              Právní rámec a kontakt
            </a>.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            🔗 Související stránky
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <RelatedNode type="question" title="Co dnes víme s jistotou?" href="/otazky/co-dnes-vime-s-jistotou" />
            <RelatedNode type="question" title="Byly schůze legitimní?" href="/otazky/byly-schuze-legitimni" />
            <RelatedNode type="question" title="Vznikla spolku finanční újma?" href="/otazky/vznikla-spolku-financni-ujma" />
            <RelatedNode type="document" title="Právní rámec" href="/pravni-ramec" />
          </div>
        </section>
      </div>
    </div>
  );
}

interface MythBoxProps {
  number: number;
  myth: string;
  mythSource: string;
  children: React.ReactNode;
}

function MythBox({ number, myth, mythSource, children }: MythBoxProps) {
  return (
    <div className="mb-6 p-6 rounded-lg border-2 bg-white border-red-300 shadow-sm">
      <div className="mb-4">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
            {number}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-red-900 mb-1">
              🚫 Mýtus: {myth}
            </h3>
            <p className="text-xs text-slate-600 italic">
              Zdroj dezinformace: {mythSource}
            </p>
          </div>
        </div>
      </div>
      <div className="pl-13">
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
      className="block p-4 bg-white rounded-lg border-2 border-slate-200 hover:border-blue-500 hover:shadow-md transition"
    >
      <div className="text-xs text-slate-500 mb-1">{typeLabels[type] || type}</div>
      <div className="text-sm font-medium text-slate-900">{title}</div>
    </a>
  );
}
