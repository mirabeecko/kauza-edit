
export default function MarekVanisPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Disclaimer Banner */}
      <div className="bg-blue-900 text-white py-3">
        <div className="container mx-auto px-3 md:px-8 max-w-5xl">
          <p className="text-sm">
            ⚖️ <strong>Právní upozornění:</strong> Osoba je uvedena výhradně v souvislosti s výkonem funkce ve spolku Tělovýchovná jednota Krupka z.s., nikoliv soukromě.
            Uvedené informace vycházejí z dokumentů, které spolek eviduje. Nejde o pravomocné soudní rozhodnutí.
            {' '}<a href="/pravni-ramec" className="underline font-semibold">Více informací</a>
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 py-8 md:py-16 border-b border-slate-600">
        <div className="container mx-auto px-3 md:px-8 max-w-5xl">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-slate-600/50 backdrop-blur rounded-full text-slate-200 text-sm font-medium border border-slate-500/30">
                  🏓 Stolní tenis
                </span>
                <span className="px-3 py-1 bg-slate-800/70 backdrop-blur rounded-full text-slate-300 text-sm font-medium border border-slate-600/30">
                  Funkce: Předseda oddílu
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3">
                Marek Vaniš
              </h1>
              <p className="text-xl text-slate-300 font-medium">
                Předseda oddílu stolního tenisu (do 28.11.2023)
              </p>
            </div>
          </div>

          <div className="bg-slate-800/40 backdrop-blur border border-slate-600/50 rounded-2xl p-4 md:p-8 mt-8">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-slate-300 text-sm font-medium mb-2">Evidovaná škoda oddílu</div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white">
                  653.659 Kč
                </div>
                <div className="mt-2">
                </div>
              </div>
              <div className="text-8xl opacity-10 text-slate-400">
                📊
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-8 py-6 md:py-12 max-w-5xl">
        {/* Shrnutí */}
        <section className="mb-12">
          <div className="bg-blue-50 rounded-xl border-2 border-blue-200 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span>📋</span>
              <span>Shrnutí z dokumentů</span>
            </h2>
            <p className="text-lg text-blue-900 leading-relaxed mb-3">
              Spolek eviduje nesoulad ve výši 653.659 Kč u oddílu stolního tenisu za období 2020-2024.
              K datu zveřejnění nebyl doložen převod členských a oddílových příspěvků, úhrada energií ani předání pokladny oddílu.
            </p>
            <p className="text-sm text-blue-800">
              <strong>Právní kontext:</strong> Vyloučení z členství rozhodnutím ze dne 28.11.2023.
              Věc je předmětem trestního řízení.
            </p>
          </div>
        </section>

        {/* Evidovaná nesouladná plnění */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            📋 Evidovaná nesouladná plnění
          </h2>
          <div className="bg-slate-50 rounded-xl p-4 md:p-8 shadow-md">
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border-l-4 border-blue-500">
                <span className="text-2xl flex-shrink-0">📋</span>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-2">Seznamy členů nebyly doloženy</h3>
                  <p className="text-sm text-slate-700 mb-2">
                    K datu zveřejnění spolek neeviduje doložení seznamů členů oddílu stolního tenisu,
                    přestože byly zaslány opakované výzvy (2021-2024).
                  </p>
                  <div className="flex gap-2">
                    <span className="text-xs text-slate-600">Podklad: výzvy ze dne 13.9.2021, 10.12.2021, 11/2023</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border-l-4 border-orange-500">
                <span className="text-2xl flex-shrink-0">💰</span>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-2">Náklady za energie nebyly uhrazeny</h3>
                  <p className="text-sm text-slate-700 mb-2">
                    Z faktur vyplývá, že náklady za energie (elektřina a plyn) ve výši 43.466 Kč
                    za období 2020-2023 nebyly uhrazeny. Prostory byly oddílem využívány.
                  </p>
                  <div className="flex gap-2">
                    <span className="text-xs text-slate-600">Podklad: faktury dodavatelů energií, výzvy k úhradě</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border-l-4 border-orange-500">
                <span className="text-2xl flex-shrink-0">🧾</span>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-2">Doklady s nesrovnalostmi</h3>
                  <p className="text-sm text-slate-700 mb-2">
                    Z evidence vyplývá, že u některých předložených dokladů byla zjištěna nesrovnalost
                    mezi údaji v dokladu a skutečným stavem (datum platby, částka, dodavatel).
                  </p>
                  <div className="flex gap-2">
                    <span className="text-xs text-slate-600">Podklad: interní kontrola dokladů, účetní evidence</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border-l-4 border-slate-400">
                <span className="text-2xl flex-shrink-0">📝</span>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-2">Požadavky na úhrady osobám blízkým</h3>
                  <p className="text-sm text-slate-700 mb-2">
                    Z dokumentů vyplývá, že byly předloženy požadavky na úhradu dohod o provedení práce
                    pro osobu blízkou předsedovi oddílu ve výši přes 70.000 Kč.
                  </p>
                  <div className="flex gap-2">
                    <span className="text-xs text-slate-600">Podklad: předložené dohody o provedení práce</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-slate-100 rounded-lg">
              <p className="text-sm text-slate-700">
                <strong>Poznámka:</strong> Uvedené události jsou evidovány na základě dokumentů, které spolek má k dispozici.
                V případě rozdílného tvrzení je situace označena jako spor. Podrobnosti viz{' '}
                <a href="/metodika" className="text-blue-600 hover:underline">Metodika a zdroje</a>.
              </p>
            </div>
          </div>
        </section>

        {/* Rozpad evidované škody */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            💰 Rozpad evidované škody
          </h2>
          <div className="space-y-4">
            <div className="p-4 md:p-6 rounded-xl bg-blue-50 border-2 border-blue-300 transition hover:shadow-lg shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-slate-900">Neodvedené oddílové příspěvky</h3>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed mb-3">
                    Výpočet: 60 členů × 2.400 Kč/rok × 3,6 roku (2020-2023).
                    <br />
                    <strong>Metoda:</strong> Odhad počtu členů (seznamy nebyly doloženy) × sazba dle stanov × období.
                    <br />
                    <strong>Výhrada:</strong> Skutečná částka může být jiná bez doložených seznamů členů.
                  </p>
                </div>
                <div className="text-right ml-6">
                  <div className="text-2xl font-black text-slate-900">
                    518.400 Kč
                  </div>
                  <div className="text-xs text-slate-600 mt-1">
                    79,3% celkové škody
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-6 rounded-xl bg-orange-50 border-2 border-orange-300 transition hover:shadow-lg shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-slate-900">Nezaplacené členské příspěvky</h3>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed mb-3">
                    Výpočet: 60 členů × 200 Kč/rok × 4 roky (2021-2024).
                    <br />
                    <strong>Účel:</strong> Úhrada svazům ČSTV, Ústeckému kraji, obci.
                  </p>
                </div>
                <div className="text-right ml-6">
                  <div className="text-2xl font-black text-slate-900">
                    48.000 Kč
                  </div>
                  <div className="text-xs text-slate-600 mt-1">
                    7,3% celkové škody
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-6 rounded-xl bg-orange-50 border-2 border-orange-300 transition hover:shadow-lg shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-slate-900">Nezaplacené energie</h3>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed mb-3">
                    Elektřina 10.415 Kč + plyn 33.051 Kč (2020-2023).
                    <br />
                    <strong>Podklad:</strong> Faktury dodavatelů energií.
                  </p>
                </div>
                <div className="text-right ml-6">
                  <div className="text-2xl font-black text-slate-900">
                    43.466 Kč
                  </div>
                  <div className="text-xs text-slate-600 mt-1">
                    6,7% celkové škody
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-6 rounded-xl bg-slate-50 border-2 border-slate-300 transition hover:shadow-lg shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-slate-900">Pokladna oddílu k 31.12.2020</h3>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed mb-3">
                    Hotovost v pokladně oddílu k 31.12.2020.
                    <br />
                    <strong>Status:</strong> K datu zveřejnění spolek neeviduje doložení předání.
                  </p>
                </div>
                <div className="text-right ml-6">
                  <div className="text-2xl font-black text-slate-900">
                    43.793 Kč
                  </div>
                  <div className="text-xs text-slate-600 mt-1">
                    6,7% celkové škody
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 md:p-6 bg-slate-900 text-white rounded-xl">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">CELKOVÁ EVIDOVANÁ ŠKODA</span>
              <span className="text-3xl font-black">653.659 Kč</span>
            </div>
            <p className="text-sm text-slate-300 mt-2">
              Podrobná metodika výpočtu: <a href="/rozpad-skody" className="underline">Rozpad škody</a>
            </p>
          </div>
        </section>

        {/* Předžalobní výzva */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            ⚖️ Předžalobní výzva
          </h2>
          <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-4 md:p-8 shadow-lg border-2 border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">📨</span>
              <div>
                <div className="text-sm text-slate-700 font-medium">Dokument ze dne</div>
                <div className="text-2xl font-bold text-slate-900">6.11.2023</div>
              </div>
            </div>

            <div className="bg-white/70 rounded-lg p-4 md:p-6 mb-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Požadované plnění</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg shadow-sm">
                  <div>
                    <div className="font-bold text-slate-900">Energie 2020-2023</div>
                    <div className="text-sm text-slate-600">Plyn 31.960 Kč + elektřina 9.900 Kč</div>
                  </div>
                  <div className="text-2xl font-black text-slate-900">
                    41.860 Kč
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg shadow-sm">
                  <div>
                    <div className="font-bold text-slate-900">Oddílové příspěvky 2020-2024</div>
                    <div className="text-sm text-slate-600">Příspěvky členů oddílu</div>
                  </div>
                  <div className="text-2xl font-black text-slate-900">
                    345.600 Kč
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-lg font-bold text-slate-900">Celkem požadováno</span>
                <span className="text-3xl font-black text-slate-900">
                  387.460 Kč
                </span>
              </div>
            </div>

            <div className="bg-slate-100 border-l-4 border-slate-500 p-4 rounded">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⏱️</span>
                <div>
                  <div className="font-bold text-slate-900 mb-1">Lhůta k plnění</div>
                  <div className="text-sm text-slate-800">8 dnů od doručení</div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
              <div className="flex items-start gap-2">
                <span className="text-lg">ℹ️</span>
                <p className="text-sm text-blue-900">
                  <strong>Poznámka:</strong> Toto byla první předžalobní výzva. Celková škoda byla později
                  vyčíslena na 653.659 Kč po kompletním auditu účetnictví.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Časová osa */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            📊 Časová osa relevantních událostí
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-slate-200">
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center font-bold text-sm text-slate-600">
                  1
                </div>
                <div className="flex-1">
                  <div className="font-bold text-slate-900">K datu zveřejnění neevidováno doložení seznamů členů</div>
                  <div className="text-sm text-slate-600 mt-1">Opakované výzvy: 13.9.2021, 10.12.2021, 11/2023</div>
                </div>
                <div className="text-sm text-slate-600 font-medium whitespace-nowrap">
                  2021-2024
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center font-bold text-sm text-slate-600">
                  2
                </div>
                <div className="flex-1">
                  <div className="font-bold text-slate-900">Výpověď při výslechu</div>
                  <div className="text-sm text-slate-600 mt-1">Výpověď potvrzující vybírání příspěvků jménem spolku</div>
                </div>
                <div className="text-sm text-slate-600 font-medium whitespace-nowrap">
                  2024
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center font-bold text-sm text-slate-600">
                  3
                </div>
                <div className="flex-1">
                  <div className="font-bold text-slate-900">Předžalobní výzva</div>
                  <div className="text-sm text-slate-600 mt-1">Požadováno 387.460 Kč (energie + příspěvky)</div>
                </div>
                <div className="text-sm text-slate-600 font-medium whitespace-nowrap">
                  6.11.2023
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-blue-50">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white shadow-md flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <div className="flex-1">
                  <div className="font-bold text-slate-900">Vyloučení z členství</div>
                  <div className="text-sm text-slate-600 mt-1">Rozhodnutí o vyloučení podle § 239 NOZ</div>
                </div>
                <div className="text-sm text-slate-600 font-medium whitespace-nowrap">
                  28.11.2023
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Související stránky */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            🔗 Související informace
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/rozpad-skody" className="block p-5 bg-white rounded-xl shadow hover:shadow-lg transition border-2 border-slate-200">
              <div className="flex items-center gap-3">
                <span className="text-3xl">💰</span>
                <span className="font-bold text-slate-900">Rozpad škody (detail)</span>
              </div>
            </a>
            <a href="/metodika" className="block p-5 bg-white rounded-xl shadow hover:shadow-lg transition border-2 border-slate-200">
              <div className="flex items-center gap-3">
                <span className="text-3xl">📚</span>
                <span className="font-bold text-slate-900">Metodika výpočtu</span>
              </div>
            </a>
            <a href="/otazky/kdo-nakladal-s-prispevky" className="block p-5 bg-white rounded-xl shadow hover:shadow-lg transition border-2 border-slate-200">
              <div className="flex items-center gap-3">
                <span className="text-3xl">❓</span>
                <span className="font-bold text-slate-900">Kdo nakládal s příspěvky?</span>
              </div>
            </a>
            <a href="/pravni-ramec" className="block p-5 bg-white rounded-xl shadow hover:shadow-lg transition border-2 border-slate-200">
              <div className="flex items-center gap-3">
                <span className="text-3xl">⚖️</span>
                <span className="font-bold text-slate-900">Právní rámec</span>
              </div>
            </a>
          </div>
        </section>

        {/* Navigace */}
        <div className="flex items-center justify-between pt-8 mt-8 border-t-2 border-slate-200">
          <a
            href="/akteri"
            className="flex items-center gap-2 px-6 py-3 bg-slate-200 hover:bg-slate-300 rounded-lg font-bold text-slate-900 transition"
          >
            <span>←</span>
            <span>Všichni aktéři</span>
          </a>
        </div>
      </div>
    </div>
  );
}
