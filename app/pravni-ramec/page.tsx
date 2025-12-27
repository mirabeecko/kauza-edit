export default function PravniRamecPage() {
  return (
    <div className="container mx-auto px-3 md:px-8 py-6 md:py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Právní rámec a kontakt
        </h1>
        <p className="text-xl text-slate-600">
          Účel webu, právní východiska a možnosti kontaktu
        </p>
      </div>

      <section className="mb-8 p-4 md:p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
        <h2 className="text-xl font-bold text-blue-900 mb-3">
          Účel tohoto webu
        </h2>
        <div className="text-blue-900 space-y-2">
          <p>
            <strong>Tento web je obranná komunikace proti nepravdivým tvrzením.</strong>
          </p>
          <p>
            Cílem je věcná reakce na nepravdivé informace šířené o činnosti spolku
            Tělovýchovná jednota Krupka z.s. a jeho orgánů. Web slouží k ochraně dobré pověsti spolku
            a jeho legitimních orgánů.
          </p>
          <p>
            Všechna uvedená tvrzení jsou založena na dokumentech, které spolek eviduje
            a uchovává pro případné právní řízení.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Důležitá upozornění
        </h2>
        <div className="space-y-4">
          <div className="p-4 rounded-lg border-2 bg-slate-50 border-slate-300">
            <h3 className="font-semibold text-slate-900 mb-2">
              1. Není to soudní rozhodnutí
            </h3>
            <p className="text-sm text-slate-900">
              Obsah webu nepředstavuje pravomocné soudní rozhodnutí. Jedná se o věcné
              shrnutí z dostupných podkladů, které má spolek k dispozici.
            </p>
          </div>

          <div className="p-4 rounded-lg border-2 bg-slate-50 border-slate-300">
            <h3 className="font-semibold text-slate-900 mb-2">
              2. Cílem je věcná obrana
            </h3>
            <p className="text-sm text-slate-900">
              Web slouží jako přiměřená reakce na šíření nepravdivých informací.
              Cílem není útok na osoby, ale obhájení faktického stavu věci.
            </p>
          </div>

          <div className="p-4 rounded-lg border-2 bg-slate-50 border-slate-300">
            <h3 className="font-semibold text-slate-900 mb-2">
              3. Podklady jsou evidovány
            </h3>
            <p className="text-sm text-slate-900">
              Uváděné částky a skutečnosti jsou založené na účetních a smluvních
              podkladech, které spolek eviduje a je připraven předložit v řízení.
            </p>
          </div>

          <div className="p-4 rounded-lg border-2 bg-slate-50 border-slate-300">
            <h3 className="font-semibold text-slate-900 mb-2">
              4. Ochrana osobních údajů
            </h3>
            <p className="text-sm text-slate-900">
              Na webu nejsou zveřejněny osobní údaje osob mimo funkční kontext
              (rodná čísla, adresy, kontakty). Osoby jsou uváděny výhradně v
              souvislosti s výkonem funkce ve spolku, nikoliv soukromě.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Právní východiska
        </h2>
        <div className="space-y-3">
          <div className="p-3 rounded border-2 border-slate-200">
            <div className="font-semibold text-slate-900">§ 20a NOZ - Autonomie spolku</div>
            <div className="text-sm text-slate-600">
              Spolek má právo na autonomii a ochranu před neoprávněným vměšováním.
              Stát a obce mají povinnost respektovat rozhodnutí legitimních orgánů spolku.
            </div>
          </div>

          <div className="p-3 rounded border-2 border-slate-200">
            <div className="font-semibold text-slate-900">§ 247 NOZ - Povinnost loajality</div>
            <div className="text-sm text-slate-600">
              Členové spolku mají povinnost jednat v zájmu spolku a podporovat jeho činnost.
            </div>
          </div>

          <div className="p-3 rounded border-2 border-slate-200">
            <div className="font-semibold text-slate-900">Stanovy Tělovýchovná jednota Krupka z.s.</div>
            <div className="text-sm text-slate-600">
              Stanovy jasně definují povinnosti členů, předsedů oddílů a orgánů spolku.
            </div>
          </div>

          <div className="p-3 rounded border-2 border-slate-200">
            <div className="font-semibold text-slate-900">Judikatura NS ČR 7 Tdo 102/2019</div>
            <div className="text-sm text-slate-600">
              Příspěvky členů tělovýchovného oddílu se stávají majetkem tělovýchovné
              jednoty okamžikem jejich předání.
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Kontakt a proces řešení námitek
        </h2>
        <div className="p-4 md:p-6 bg-slate-50 rounded-lg border-2 border-slate-200">
          <h3 className="font-semibold text-slate-900 mb-3">
            Máte námitku nebo žádost o opravu?
          </h3>
          <p className="text-slate-900 mb-3">
            Pokud máte podloženou námitku k jakémukoli údaji na tomto webu,
            kontaktujte spolek:
          </p>
          <div className="bg-white p-3 rounded border-2 border-slate-300 mb-3">
            <p className="text-slate-900 font-mono text-sm">
              E-mail: [kontaktní e-mail spolku]
            </p>
            <p className="text-slate-900 font-mono text-sm">
              Předmět: Námitka k webu kauzatjkrupka.cz
            </p>
          </div>

          <h3 className="font-semibold text-slate-900 mb-2 mt-6">
            Proces řešení námitek:
          </h3>
          <ol className="text-sm text-slate-900 space-y-2 list-decimal list-inside">
            <li>
              <strong>Podání námitky:</strong> Zašlete podloženou námitku s konkrétním
              odkazem na údaj a důkazem o nesprávnosti.
            </li>
            <li>
              <strong>Prověření:</strong> Spolek námitku prověří a porovná s dostupnými
              podklady.
            </li>
            <li>
              <strong>Odpověď do 14 dnů:</strong> Spolek odpoví do 14 dnů a v případě
              oprávněnosti námitky provede opravu nebo doplnění informací.
            </li>
            <li>
              <strong>Zveřejnění opravy:</strong> Oprava bude zveřejněna na webu
              s poznámkou o aktualizaci.
            </li>
          </ol>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Žádosti o anonymizaci
        </h2>
        <div className="p-4 md:p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
          <p className="text-blue-900">
            Osoby, které nejsou veřejnými funkcionáři a jsou uvedeny na webu výhradně
            v souvislosti s výkonem funkce ve spolku, mohou požádat o anonymizaci
            svých údajů.
          </p>
          <p className="text-blue-900 mt-2">
            Žádost zašlete na výše uvedený kontakt s uvedením: jméno, funkce, důvod
            žádosti. Spolek žádost posoudí a v případě oprávněnosti provede anonymizaci
            do 30 dnů.
          </p>
          <p className="text-blue-900 mt-2">
            <strong>Poznámka:</strong> Anonymizace se netýká veřejných funkcionářů
            (např. statutárních orgánů, veřejně činných osob) nebo osob, jejichž
            uvedení je nezbytné pro faktickou obranu spolku.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Použité zdroje a metodika
        </h2>
        <p className="text-slate-900 mb-3">
          Podrobné informace o metodice výpočtu škody, typech podkladů a stupních
          jistoty naleznete na stránce:
        </p>
        <a
          href="/metodika"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          → Metodika a zdroje
        </a>
      </section>

      <section className="-mx-3 md:-mx-8 px-3 md:px-8 py-8 md:py-12 bg-gradient-to-r from-slate-700 to-slate-800">
        <h3 className="text-xl font-bold text-white mb-4">
          Shrnutí
        </h3>
        <div className="text-white space-y-3">
          <p>
            Tento web je obranná komunikace proti nepravdivým tvrzením.
          </p>
          <p>
            Všechna tvrzení jsou založena na dokumentech, které spolek eviduje.
          </p>
          <p>
            Námitky jsou vítány a budou po prověření zapracovány do 14 dnů.
          </p>
          <p>
            Cílem není útok na osoby, ale věcná obhajoba faktického stavu věci.
          </p>
        </div>
      </section>
    </div>
  );
}
