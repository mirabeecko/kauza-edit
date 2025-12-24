import ClassificationBadge from '@/components/ClassificationBadge';

export default function JaromirPivonkaPage() {
  const actor = {
    name: 'Jaromír Pivoňka',
    role: 'Člen/funkcionář oddílu stolního tenisu',
    department: 'Stolní tenis',
    departmentIcon: '🏓',
    status: 'negative' as const,
    collectiveDamage: 653659,
    individualDemand: 72593,
    breakdown: [
      {
        label: 'Neodvedené oddílové příspěvky (spolupodíl)',
        amount: 518400,
        description: 'Oddíl stolního tenisu neeviduje odvod příspěvků za období 2020-2024. 60 členů × 2.400 Kč/rok × 3,6 roku.',
        classification: 'evidovano' as const,
        note: 'Výpočet založen na odhadech počtu členů (seznamy nebyly doloženy).',
      },
      {
        label: 'Náklady za energie (spolupodíl)',
        amount: 43466,
        description: 'Z faktur vyplývá, že náklady za energie nebyly uhrazeny. Elektřina 10.415 Kč + plyn 33.051 Kč (2020-2023).',
        classification: 'dolozeno' as const,
        note: 'Faktury dodavatelů, výzvy k úhradě.',
      },
      {
        label: 'Pokladna oddílu k 31.12.2020',
        amount: 43793,
        description: 'Hotovost v pokladně oddílu k 31.12.2020 nebyla předána ani vyúčtována.',
        classification: 'dolozeno' as const,
        note: 'Výpověď při výslechu (2024).',
      },
      {
        label: 'Nezaplacené členské příspěvky',
        amount: 28800,
        description: 'Členské příspěvky za období 2021-2024 (200 Kč × 4 roky × 36 členů). Úhrada svazům ČSTV, Ústeckému kraji, obci.',
        classification: 'evidovano' as const,
        note: 'Účetní evidence spolku.',
      },
    ],
    keyEvents: [
      { text: 'Spolupráce na činnosti oddílu stolního tenisu', date: '2020-2023', classification: 'dolozeno' as const },
      { text: 'K datu zveřejnění neevidováno doložení oddílových příspěvků', amount: 518400, date: '2020-2024', classification: 'evidovano' as const },
      { text: 'Náklady za energie nebyly uhrazeny', amount: 43466, date: '2020-2023', classification: 'dolozeno' as const },
      { text: 'Předžalobní výzva na úhradu 72.593 Kč', date: '14.11.2023', classification: 'dolozeno' as const },
      { text: 'Vyloučen z členství spolku (§ 239 NOZ)', date: '28.11.2023', classification: 'dolozeno' as const },
    ],
    predzalobniVyzva: {
      date: '14.11.2023',
      recipient: 'Jaromír Pivoňka',
      totalDemanded: 72593,
      items: [
        { label: 'Pokladna oddílu k 31.12.2020', amount: 43793, detail: 'Hotovost v pokladně oddílu' },
        { label: 'Členské příspěvky 2021-2024', amount: 28800, detail: 'Nezaplacené členské příspěvky za 4 roky' },
      ],
      deadline: '8 dnů od doručení',
    },
    relatedLinks: [
      { label: 'Právní rámec a kontakt', href: '/pravni-ramec', icon: '⚖️' },
      { label: 'Metodika výpočtu škody', href: '/metodika', icon: '📊' },
      { label: 'Rozpad škody podle kategorií', href: '/rozpad-skody', icon: '💰' },
      { label: 'Události s účastí', href: '/udalosti?actor=jaromir-pivonka', icon: '📅' },
      { label: 'Oddíl stolního tenisu', href: '/akteri/marek-vanis', icon: '🏓' },
      { label: 'Téma: Finance a majetek', href: '/temata/finance-a-majetek', icon: '📚' },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Legal Disclaimer Banner */}
      <div className="bg-blue-900 text-white py-3">
        <div className="container mx-auto px-3 md:px-8 max-w-5xl">
          <p className="text-sm">
            ⚖️ <strong>Právní upozornění:</strong> Osoba je uvedena výhradně v souvislosti s výkonem funkce ve spolku TJ Krupka z.s., nikoliv soukromě.
            Uvedené informace vycházejí z dokumentů, které spolek eviduje. Nejde o pravomocné soudní rozhodnutí.
            {' '}
            <a href="/pravni-ramec" className="underline hover:text-blue-200">
              Více informací o právním rámci →
            </a>
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-600 via-orange-700 to-red-800 py-8 md:py-16">
        <div className="container mx-auto px-3 md:px-8 max-w-5xl">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-white text-sm font-medium">
                  {actor.departmentIcon} {actor.department}
                </span>
                <span className="px-3 py-1 bg-orange-900/50 backdrop-blur rounded-full text-white text-sm font-bold">
                  Vyloučen z členství
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3">
                {actor.name}
              </h1>
              <p className="text-xl text-orange-100 font-medium">
                {actor.role}
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur border-2 border-white/30 rounded-2xl p-4 md:p-8 mt-8">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-orange-100 text-sm font-medium mb-2">Evidovaná škoda oddílu (spolupodíl)</div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white">
                  {actor.collectiveDamage.toLocaleString('cs-CZ')} Kč
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <ClassificationBadge type="evidovano" />
                  <span className="text-sm text-orange-200">
                    Předžalobní výzva: {actor.individualDemand.toLocaleString('cs-CZ')} Kč
                  </span>
                </div>
              </div>
              <div className="text-8xl opacity-20">
                💸
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-8 py-6 md:py-12 max-w-5xl">
        {/* Kontext */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span>📋</span>
              <span>Kontext</span>
            </h2>
            <div className="text-slate-700 leading-relaxed space-y-3">
              <p>
                Jaromír Pivoňka byl členem a funkcionářem oddílu stolního tenisu v období 2020-2024.
                Spolek eviduje nesoulad ve finančním hospodaření oddílu ve výši <strong>653.659 Kč</strong>.
              </p>
              <p>
                Dne 14.11.2023 obdržel předžalobní výzvu na úhradu individuálně vymáhané částky <strong>72.593 Kč</strong>
                (pokladna oddílu + členské příspěvky). Dne 28.11.2023 byl vyloučen z členství spolku podle § 239 NOZ.
              </p>
              <p className="text-sm text-slate-600 italic">
                Více o metodice výpočtu škody a právních podkladech na stránkách{' '}
                <a href="/metodika" className="text-blue-600 hover:underline font-semibold">Metodika</a>
                {' '}a{' '}
                <a href="/pravni-ramec" className="text-blue-600 hover:underline font-semibold">Právní rámec</a>.
              </p>
            </div>
          </div>
        </section>

        {/* Info box o kolektivní odpovědnosti */}
        <section className="mb-12">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 md:p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <span className="text-3xl">⚠️</span>
              <div>
                <h3 className="text-lg font-bold text-amber-900 mb-2">Spolupodíl na škodě oddílu</h3>
                <p className="text-sm text-amber-800 leading-relaxed">
                  Uvedená částka 653.659 Kč představuje celkovou evidovanou škodu oddílu stolního tenisu
                  za období 2020-2024. Jaromír Pivoňka byl členem a funkcionářem tohoto oddílu.
                  Jeho individuální předžalobní výzva činila 72.593 Kč (pokladna + členské příspěvky).
                </p>
                <p className="text-sm text-amber-800 leading-relaxed mt-2">
                  <strong>Upozornění:</strong> Částka 653.659 Kč není individuálně připsána pouze Pivoňkovi,
                  ale představuje celkovou škodu oddílu, na jehož činnosti se podílel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Rozpad odpovědnosti */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            💰 Rozpad evidované škody oddílu
          </h2>
          <div className="space-y-6">
            {actor.breakdown.map((item, index) => (
              <div
                key={index}
                className="p-4 md:p-6 rounded-xl bg-white border-2 border-slate-200 hover:shadow-lg transition"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-slate-900">{item.label}</h3>
                      <ClassificationBadge type={item.classification} />
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed mb-2">
                      {item.description}
                    </p>
                    <p className="text-xs text-slate-600 italic">
                      <strong>Poznámka:</strong> {item.note}
                    </p>
                  </div>
                  <div className="text-right ml-6">
                    <div className="text-2xl font-black text-slate-900">
                      {item.amount.toLocaleString('cs-CZ')} Kč
                    </div>
                  </div>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-500 to-red-600 transition-all duration-500"
                    style={{ width: `${(item.amount / actor.collectiveDamage) * 100}%` }}
                  />
                </div>
                <div className="text-xs text-slate-600 mt-1 text-right">
                  {((item.amount / actor.collectiveDamage) * 100).toFixed(1)}% z celkové škody oddílu
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 md:p-6 bg-slate-900 text-white rounded-xl">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">CELKOVÁ EVIDOVANÁ ŠKODA ODDÍLU</span>
              <span className="text-3xl font-black">{actor.collectiveDamage.toLocaleString('cs-CZ')} Kč</span>
            </div>
            <p className="text-sm text-slate-300 mt-2">
              Metodika výpočtu je popsána na stránce{' '}
              <a href="/rozpad-skody" className="underline hover:text-white">
                Rozpad škody podle kategorií
              </a>
              .
            </p>
          </div>
        </section>

        {/* Evidovaná nesouladná plnění */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            📊 Evidovaná nesouladná plnění
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-8">
            <div className="space-y-6">
              {/* 1. Seznamy členů */}
              <div className="p-4 rounded-lg border-2 bg-orange-50 border-orange-300">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-slate-900">Seznamy členů nebyly doloženy</h3>
                  <ClassificationBadge type="dolozeno" />
                </div>
                <p className="text-sm text-slate-900 mb-2">
                  K datu zveřejnění spolek neeviduje doložení seznamů členů oddílu stolního tenisu,
                  přestože byly zaslány opakované výzvy (2021-2024).
                </p>
                <p className="text-xs text-slate-600">
                  <strong>Podklad:</strong> Výzvy ze dne 13.9.2021, 10.12.2021, 11/2023.
                </p>
              </div>

              {/* 2. Oddílové příspěvky */}
              <div className="p-4 rounded-lg border-2 bg-orange-50 border-orange-300">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-slate-900">Neodvedené oddílové příspěvky</h3>
                  <ClassificationBadge type="evidovano" />
                </div>
                <p className="text-sm text-slate-900 mb-2">
                  Z účetních podkladů za období 2020-2024 vyplývá, že oddílové příspěvky ve výši 518.400 Kč
                  nebyly zaúčtovány jako příjem spolku.
                </p>
                <p className="text-sm text-slate-900 mb-2">
                  <strong>Výpočet:</strong> 60 členů × 2.400 Kč/rok × 3,6 roku (2020-2023).
                  <br />
                  <strong>Metoda:</strong> Odhad počtu členů (seznamy nebyly doloženy) × sazba dle stanov × období.
                  <br />
                  <strong>Výhrada:</strong> Skutečná částka může být jiná bez doložených seznamů členů.
                </p>
                <p className="text-xs text-slate-600">
                  <strong>Podklad:</strong> Účetní evidence TJ Krupka, odhady členské základny.
                </p>
              </div>

              {/* 3. Energie */}
              <div className="p-4 rounded-lg border-2 bg-red-50 border-red-300">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-slate-900">Náklady za energie nebyly uhrazeny</h3>
                  <ClassificationBadge type="dolozeno" />
                </div>
                <p className="text-sm text-slate-900 mb-2">
                  Z faktur vyplývá, že náklady za energie (elektřina 10.415 Kč + plyn 33.051 Kč) ve výši 43.466 Kč
                  za období 2020-2023 nebyly uhrazeny. Prostory byly oddílem využívány.
                </p>
                <p className="text-xs text-slate-600">
                  <strong>Podklad:</strong> Faktury dodavatelů, výzvy k úhradě.
                </p>
              </div>

              {/* 4. Pokladna */}
              <div className="p-4 rounded-lg border-2 bg-red-50 border-red-300">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-slate-900">Nepředaná pokladna oddílu</h3>
                  <ClassificationBadge type="dolozeno" />
                </div>
                <p className="text-sm text-slate-900 mb-2">
                  Při výslechu bylo přiznáno, že hotovost v pokladně oddílu k 31.12.2020 ve výši 43.793 Kč
                  nebyla předána ani vyúčtována.
                </p>
                <p className="text-xs text-slate-600">
                  <strong>Podklad:</strong> Policejní protokol, výpověď při výslechu (2024).
                </p>
              </div>

              {/* 5. Členské příspěvky */}
              <div className="p-4 rounded-lg border-2 bg-yellow-50 border-yellow-300">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-slate-900">Nezaplacené členské příspěvky</h3>
                  <ClassificationBadge type="evidovano" />
                </div>
                <p className="text-sm text-slate-900 mb-2">
                  Z evidence vyplývá, že členské příspěvky za období 2021-2024 ve výši 28.800 Kč
                  (200 Kč × 4 roky × 36 členů) nebyly uhrazeny.
                </p>
                <p className="text-sm text-slate-900 mb-2">
                  Tyto příspěvky měly být odvedeny svazům ČSTV, Ústeckému kraji a obci.
                </p>
                <p className="text-xs text-slate-600">
                  <strong>Podklad:</strong> Účetní evidence spolku.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Předžalobní výzva */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            ⚖️ Předžalobní výzva
          </h2>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg p-4 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">📨</span>
              <div>
                <div className="text-sm text-amber-700 font-medium">Dokument ze dne</div>
                <div className="text-2xl font-bold text-amber-900">{actor.predzalobniVyzva.date}</div>
              </div>
              <ClassificationBadge type="dolozeno" />
            </div>

            <div className="bg-white/70 rounded-lg p-4 md:p-6 mb-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Požadované plnění</h3>
              <div className="space-y-3">
                {actor.predzalobniVyzva.items.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <div>
                      <div className="font-bold text-slate-900">{item.label}</div>
                      <div className="text-sm text-slate-600">{item.detail}</div>
                    </div>
                    <div className="text-2xl font-black text-amber-900">
                      {item.amount.toLocaleString('cs-CZ')} Kč
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t-2 border-amber-300 flex items-center justify-between">
                <span className="text-lg font-bold text-slate-900">Celkem požadováno</span>
                <span className="text-3xl font-black text-amber-900">
                  {actor.predzalobniVyzva.totalDemanded.toLocaleString('cs-CZ')} Kč
                </span>
              </div>
            </div>

            <div className="bg-amber-100 border-l-4 border-amber-500 p-4 rounded">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⏱️</span>
                <div>
                  <div className="font-bold text-amber-900 mb-1">Lhůta k plnění</div>
                  <div className="text-sm text-amber-800">{actor.predzalobniVyzva.deadline}</div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-900">
                <strong>Poznámka:</strong> Uvedená částka 72.593 Kč představuje individuálně vymáhanou část
                (pokladna + členské příspěvky). Celková evidovaná škoda oddílu činí 653.659 Kč.
              </p>
            </div>
          </div>
        </section>

        {/* Časová osa */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            📊 Časová osa klíčových událostí
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-8">
            <div className="space-y-4">
              {actor.keyEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg border-2 border-slate-200 hover:shadow-md transition"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-700 text-white flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="font-bold text-slate-900">{event.text}</div>
                      <ClassificationBadge type={event.classification} />
                    </div>
                    {event.amount && (
                      <div className="text-lg font-bold text-orange-700 mt-1">
                        {event.amount.toLocaleString('cs-CZ')} Kč
                      </div>
                    )}
                  </div>
                  <div className="text-sm text-slate-600 font-medium whitespace-nowrap">
                    {event.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dokumenty */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            📄 Dokumenty a podklady
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 md:p-6 bg-amber-50 rounded-xl border-2 border-amber-200 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <span className="text-4xl">📨</span>
                <div>
                  <h3 className="text-lg font-bold text-amber-900 mb-2">Předžalobní výzva</h3>
                  <p className="text-sm text-amber-800 mb-3">Dokument ze dne 14.11.2023</p>
                  <div className="text-sm text-amber-700 space-y-1 mb-3">
                    <div>• Požadováno: 72.593 Kč</div>
                    <div>• Pokladna + členské příspěvky</div>
                    <div>• Lhůta: 8 dnů</div>
                  </div>
                  <ClassificationBadge type="dolozeno" />
                </div>
              </div>
            </div>

            <div className="p-4 md:p-6 bg-blue-50 rounded-xl border-2 border-blue-200 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <span className="text-4xl">⚖️</span>
                <div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">Rozhodnutí o vyloučení</h3>
                  <p className="text-sm text-blue-800 mb-3">Dokument ze dne 28.11.2023</p>
                  <div className="text-sm text-blue-700 space-y-1 mb-3">
                    <div>• Právní základ: § 239 NOZ</div>
                    <div>• Doručeno datovou schránkou</div>
                    <div>• Porušení členských povinností</div>
                  </div>
                  <ClassificationBadge type="dolozeno" />
                </div>
              </div>
            </div>

            <div className="p-4 md:p-6 bg-green-50 rounded-xl border-2 border-green-200 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <span className="text-4xl">📊</span>
                <div>
                  <h3 className="text-lg font-bold text-green-900 mb-2">Účetní evidence spolku</h3>
                  <p className="text-sm text-green-800 mb-3">TJ ODDÍLY 2020-2024</p>
                  <div className="text-sm text-green-700 space-y-1 mb-3">
                    <div>• Evidovaná škoda oddílu: 653.659 Kč</div>
                    <div>• Oddíl stolního tenisu</div>
                    <div>• Rozpis podle kategorií</div>
                  </div>
                  <ClassificationBadge type="evidovano" />
                </div>
              </div>
            </div>

            <div className="p-4 md:p-6 bg-purple-50 rounded-xl border-2 border-purple-200 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <span className="text-4xl">🚔</span>
                <div>
                  <h3 className="text-lg font-bold text-purple-900 mb-2">Policejní protokol</h3>
                  <p className="text-sm text-purple-800 mb-3">Výslech 2024</p>
                  <div className="text-sm text-purple-700 space-y-1 mb-3">
                    <div>• Přiznání pokladny: 43.793 Kč</div>
                    <div>• Věc v trestním řízení</div>
                    <div>• Výpověď k nesouladům</div>
                  </div>
                  <ClassificationBadge type="dolozeno" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Související stránky */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            🔗 Související stránky
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {actor.relatedLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block p-5 bg-white rounded-xl border-2 border-slate-200 hover:border-blue-500 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{link.icon}</span>
                  <span className="font-bold text-slate-900">{link.label}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* CTA for corrections */}
        <section className="mb-12">
          <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-4 md:p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Máte námitku k uvedeným údajům?
            </h3>
            <p className="text-slate-700 mb-4">
              Pokud máte podloženou námitku k jakémukoli údaji na této stránce, kontaktujte nás
              prostřednictvím stránky{' '}
              <a href="/pravni-ramec" className="text-blue-600 hover:underline font-semibold">
                Právní rámec a kontakt
              </a>
              . Po prověření provedeme opravu nebo upřesníme metodiku výpočtu.
            </p>
            <a
              href="/oprava-nepravd"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              → Jak funguje proces opravy nepravd
            </a>
          </div>
        </section>

        {/* Navigace */}
        <div className="flex items-center justify-between pt-8 border-t-2 border-slate-200">
          <a
            href="/akteri/marek-vanis"
            className="flex items-center gap-2 px-6 py-3 bg-slate-200 hover:bg-slate-300 rounded-lg font-bold text-slate-900 transition"
          >
            <span>←</span>
            <span>Marek Vaniš</span>
          </a>
          <a
            href="/akteri"
            className="flex items-center gap-2 px-4 py-3 bg-slate-100 hover:bg-slate-200 rounded-lg font-semibold text-slate-700 transition"
          >
            <span>Přehled aktérů</span>
          </a>
          <a
            href="/akteri/gustav-vlach"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold text-white transition"
          >
            <span>Gustav Vlach</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
