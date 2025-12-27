export default function OpravaNepravdPage() {
  return (
    <div className="container mx-auto px-3 md:px-8 py-6 md:py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Oprava nepravd
        </h1>
        <p className="text-xl text-slate-600">
          Reakce na nepravdivá tvrzení a jejich faktické vyvrácení
        </p>
      </div>

      <section className="mb-8 p-4 md:p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
        <h2 className="text-xl font-bold text-blue-900 mb-3">
          Účel této stránky
        </h2>
        <div className="text-blue-900 space-y-2">
          <p>
            V souvislosti s kauzou se šíří různá tvrzení, která neodpovídají dokumentovaným
            skutečnostem. Tato stránka uvádí na pravou míru vybraná nepravdivá tvrzení.
          </p>
          <p>
            Každá reakce obsahuje: tvrzení, které se šíří → faktický stav dle dokumentů →
            typy podkladů → co spolek dělá dál.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Tvrzení a jejich vyvrácení
        </h2>
        <div className="space-y-6">

          {/* Tvrzení 1 */}
          <div className="border-2 border-slate-200 rounded-lg overflow-hidden">
            <div className="bg-red-50 p-4 border-b-2 border-red-200">
              <h3 className="font-semibold text-slate-900 mb-2">
                Tvrzení, které se šíří:
              </h3>
              <p className="text-slate-900">
                "Brožek nebyl legitimně zvolen předsedou."
              </p>
            </div>
            <div className="p-4 space-y-3">
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Faktický stav dle dokumentů:</h4>
                <p className="text-sm text-slate-900">
                  Miroslav Brožek byl zvolen předsedou na shromáždění delegátů 24.8.2021
                  na období 5 let (do roku 2026). Legitimitu volby potvrdila Rozhodčí
                  komise ČAST (2022).
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Jaké podklady to podporují:</h4>
                <ul className="text-sm text-slate-900 list-disc list-inside space-y-1">
                  <li>Zápis ze shromáždění delegátů (24.8.2021)</li>
                  <li>Rozhodnutí Rozhodčí komise ČAST (2022)</li>
                </ul>
                <div className="mt-2">
                  <span className="text-xs font-semibold px-2 py-1 bg-green-700 text-white rounded">
                    DOLOŽENO
                  </span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Co spolek dělá dál:</h4>
                <p className="text-sm text-slate-900">
                  Brožek pokračuje v plnění povinností předsedy podle stanov a zákona.
                </p>
              </div>
            </div>
          </div>

          {/* Tvrzení 2 */}
          <div className="border-2 border-slate-200 rounded-lg overflow-hidden">
            <div className="bg-red-50 p-4 border-b-2 border-red-200">
              <h3 className="font-semibold text-slate-900 mb-2">
                Tvrzení, které se šíří:
              </h3>
              <p className="text-slate-900">
                "Vyloučení členů nebylo v souladu se zákonem."
              </p>
            </div>
            <div className="p-4 space-y-3">
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Faktický stav dle dokumentů:</h4>
                <p className="text-sm text-slate-900">
                  Vyloučení Vaniše a Pivoňky (28.11.2023) proběhlo po opakovaných
                  výzvách (2021-2023) k plnění povinností podle stanov. Rozhodčí
                  komise ČAST potvrdila, že vyloučení bylo v souladu se zákonem.
                  Doručenky dokládají doručení oznámení o vyloučení.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Jaké podklady to podporují:</h4>
                <ul className="text-sm text-slate-900 list-disc list-inside space-y-1">
                  <li>Výzvy k plnění povinností (13.9.2021, 10.12.2021, 11/2023)</li>
                  <li>Doručenky o doručení oznámení (28.11.2023)</li>
                  <li>Rozhodnutí Rozhodčí komise ČAST</li>
                </ul>
                <div className="mt-2">
                  <span className="text-xs font-semibold px-2 py-1 bg-green-700 text-white rounded">
                    DOLOŽENO
                  </span>
                  <span className="text-xs font-semibold px-2 py-1 bg-orange-700 text-white rounded ml-2">
                    SPOR
                  </span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Co spolek dělá dál:</h4>
                <p className="text-sm text-slate-900">
                  Věc je předmětem odvolacího řízení u vyššího soudu. Spolek zastupuje
                  právní zástupce.
                </p>
              </div>
            </div>
          </div>

          {/* Tvrzení 3 */}
          <div className="border-2 border-slate-200 rounded-lg overflow-hidden">
            <div className="bg-red-50 p-4 border-b-2 border-red-200">
              <h3 className="font-semibold text-slate-900 mb-2">
                Tvrzení, které se šíří:
              </h3>
              <p className="text-slate-900">
                "Žádná škoda nevznikla, příspěvky byly použity na provoz oddílů."
              </p>
            </div>
            <div className="p-4 space-y-3">
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Faktický stav dle dokumentů:</h4>
                <p className="text-sm text-slate-900">
                  Spolek eviduje nesoulad mezi tím, co bylo vybráno od členů, a tím,
                  co bylo odvedeno spolku. Podle stanov TJ a judikatury NS ČR 7 Tdo 102/2019
                  příspěvky patří spolku, oddíly nemají samostatnou právní subjektivitu.
                  Z účetnictví vyplývá, že příspěvky nebyly zaúčtovány jako příjmy spolku.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Jaké podklady to podporují:</h4>
                <ul className="text-sm text-slate-900 list-disc list-inside space-y-1">
                  <li>Účetnictví TJ Krupka za období 2021-2024</li>
                  <li>Výpisy z bankovních účtů</li>
                  <li>Stanovy TJ Krupka (povinnost odvádět příspěvky)</li>
                  <li>Judikatura NS ČR 7 Tdo 102/2019</li>
                </ul>
                <div className="mt-2">
                  <span className="text-xs font-semibold px-2 py-1 bg-blue-700 text-white rounded">
                    EVIDOVÁNO
                  </span>
                  <span className="text-xs font-semibold px-2 py-1 bg-orange-700 text-white rounded ml-2">
                    SPOR
                  </span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Co spolek dělá dál:</h4>
                <p className="text-sm text-slate-900">
                  Spolek podal trestní oznámení. Policie vyšetřuje. Výslechy proběhly v roce 2024.
                </p>
              </div>
            </div>
          </div>

          {/* Tvrzení 4 */}
          <div className="border-2 border-slate-200 rounded-lg overflow-hidden">
            <div className="bg-red-50 p-4 border-b-2 border-red-200">
              <h3 className="font-semibold text-slate-900 mb-2">
                Tvrzení, které se šíří:
              </h3>
              <p className="text-slate-900">
                "Seznamy členů byly předány, Brožek je ignoroval."
              </p>
            </div>
            <div className="p-4 space-y-3">
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Faktický stav dle dokumentů:</h4>
                <p className="text-sm text-slate-900">
                  Spolek eviduje opakované výzvy k předání seznamů členů (13.9.2021,
                  10.12.2021, předžalobní výzvy 11/2023). K datu zveřejnění těchto
                  informací spolek neeviduje doložení předání seznamů členů oddílů.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Jaké podklady to podporují:</h4>
                <ul className="text-sm text-slate-900 list-disc list-inside space-y-1">
                  <li>Výzvy zaslané e-mailem (13.9.2021, 10.12.2021)</li>
                  <li>Předžalobní výzvy (11/2023)</li>
                  <li>Účetní evidence spolku (absence zaúčtovaných příspěvků)</li>
                </ul>
                <div className="mt-2">
                  <span className="text-xs font-semibold px-2 py-1 bg-green-700 text-white rounded">
                    DOLOŽENO
                  </span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Co spolek dělá dál:</h4>
                <p className="text-sm text-slate-900">
                  Spolek pokračuje v interních krocích k získání kompletní evidence členů.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="mb-8 p-4 md:p-6 bg-slate-50 rounded-lg border-2 border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-3">
          Máte námitku nebo doplnění?
        </h2>
        <p className="text-slate-900">
          Pokud máte podloženou námitku k jakémukoli tvrzení na tomto webu nebo
          k vyvrácení nepravdivých informací, kontaktujte nás prostřednictvím stránky{" "}
          <a href="/pravni-ramec" className="text-blue-600 hover:underline font-semibold">
            Právní rámec a kontakt
          </a>
          .
        </p>
        <p className="text-slate-900 mt-2">
          Po prověření provedeme opravu nebo doplnění informací do 14 dnů.
        </p>
      </section>

      <section className="-mx-3 md:-mx-8 px-3 md:px-8 py-8 md:py-12 bg-gradient-to-r from-slate-700 to-slate-800">
        <h3 className="text-xl font-bold text-white mb-4">
          Shrnutí
        </h3>
        <div className="text-white space-y-3">
          <p>
            Tato stránka reaguje na vybraná nepravdivá tvrzení, která se šíří o kauze.
          </p>
          <p>
            Každá reakce je podložena konkrétními dokumenty a klasifikována podle
            stupně jistoty.
          </p>
          <p>
            Cílem není útok na osoby, ale věcná obrana proti šíření nepravdivých informací.
          </p>
        </div>
      </section>
    </div>
  );
}
