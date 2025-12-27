
export default function MartinKulikPage() {
  const actor = {
    name: 'Martin Kulík',
    role: 'Činnost v oddílu karate',
    department: 'Oddíl karate',
    departmentIcon: '🥋',
    status: 'negative' as const,
    totalDamage: 350598,
    membershipStatus: 'Zánik členství neplacením příspěvků',
    breakdown: [
      {
        label: 'Neodvedené oddílové příspěvky',
        amount: 316800,
        description: 'Oddíl karate neeviduje odvod příspěvků za období 2020-2023. 40 členů × 3.600 Kč/rok × 4 roky.',
        note: 'Výpočet založen na odhadech počtu členů (seznamy nebyly doloženy). Oddíl karate měl nejvyšší roční příspěvek ze všech oddílů.',
      },
      {
        label: 'Nezaplacené členské příspěvky',
        amount: 32000,
        description: 'Členské příspěvky za období 2021-2024 (200 Kč × 4 roky × 40 členů). Úhrada svazům ČSTV, Ústeckému kraji, obci.',
        note: 'Účetní evidence spolku.',
      },
      {
        label: 'Pokladna oddílu k 31.12.2020',
        amount: 1798,
        description: 'Hotovost v pokladně oddílu k 31.12.2020 ve výši 1.798 Kč nebyla předána ani vyúčtována.',
        note: 'Účetní evidence spolku.',
      },
    ],
    legitimacyDispute: {
      status: 'spor' as const,
      description: 'V této věci existuje nesoulad v evidenci.',
      details: [
        {
          label: 'Oficiální zápis',
          description: 'Podle oficiálního zápisu ze schůze oddílu byl předsedou oddílu karate Jiří Kulík.',
        },
        {
          label: 'Komunikace s Martin Kulíkem',
          description: 'Martin Kulík v komunikaci se spolkem vystupoval jako předseda oddílu karate.',
        },
        {
          label: 'Zápis potvrzující zvolení',
          description: 'K datu zveřejnění spolek neeviduje doložení zápisu, který by potvrzoval zvolení Martina Kulíka do funkce předsedy oddílu.',
        },
      ],
    },
    keyFacts: [
      {
        icon: '⚖️',
        title: 'Nesoulad v evidenci funkce',
        description: 'Existuje nesoulad mezi oficiálním zápisem (předseda: Jiří Kulík) a komunikací (Martin Kulík vystupoval jako předseda). Věc označujeme jako spor.',
      },
      {
        icon: '📋',
        title: 'Seznamy členů nebyly doloženy',
        description: 'K datu zveřejnění spolek neeviduje doložení aktualizovaných seznamů členů oddílu karate, přestože byly zaslány opakované výzvy (2021-2024).',
      },
      {
        icon: '💰',
        title: 'Nejvyšší roční příspěvek',
        description: 'Oddíl karate měl nejvyšší roční příspěvek na člena ze všech oddílů (3.600 Kč/rok). Z evidence vyplývá nesoulad ve výši 316.800 Kč.',
      },
    ],
    keyEvents: [
    ],
    relatedLinks: [
      { label: 'Právní rámec a kontakt', href: '/pravni-ramec', icon: '⚖️' },
      { label: 'Metodika výpočtu škody', href: '/metodika', icon: '📊' },
      { label: 'Rozpad škody podle kategorií', href: '/rozpad-skody', icon: '💰' },
      { label: 'Události s účastí', href: '/udalosti?actor=martin-kulik', icon: '📅' },
      { label: 'Téma: Finance a majetek', href: '/temata/finance-a-majetek', icon: '📚' },
      { label: 'Téma: Členství a evidence', href: '/temata/clenstvi-a-evidence', icon: '📋' },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Legal Disclaimer Banner */}
      <div className="bg-blue-900 text-white py-3">
        <div className="container mx-auto px-3 md:px-8 max-w-5xl">
          <p className="text-sm">
            ⚖️ <strong>Právní upozornění:</strong> Osoba je uvedena výhradně v souvislosti s činností v oddílu spolku Tělovýchovná jednota Krupka z.s., nikoliv soukromě.
            Uvedené informace vycházejí z dokumentů, které spolek eviduje. Nejde o pravomocné soudní rozhodnutí.
            {' '}
            <a href="/pravni-ramec" className="underline hover:text-blue-200">
              Více informací o právním rámci →
            </a>
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800 py-8 md:py-16">
        <div className="container mx-auto px-3 md:px-8 max-w-5xl">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-white text-sm font-medium">
                  {actor.departmentIcon} {actor.department}
                </span>
                <span className="px-3 py-1 bg-teal-900/50 backdrop-blur rounded-full text-white text-sm font-bold">
                  {actor.membershipStatus}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3">
                {actor.name}
              </h1>
              <p className="text-xl text-green-100 font-medium">
                {actor.role}
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-sm text-green-100">Nesoulad v evidenci funkce</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur border-2 border-white/30 rounded-2xl p-4 md:p-8 mt-8">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-green-100 text-sm font-medium mb-2">Evidovaná škoda oddílu</div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white">
                  {actor.totalDamage.toLocaleString('cs-CZ')} Kč
                </div>
                <div className="mt-3">
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
                Martin Kulík byl činný v oddílu karate v období 2020-2024.
                Spolek eviduje nesoulad ve finančním hospodaření oddílu ve výši <strong>350.598 Kč</strong>.
              </p>
              <p>
                V této věci existuje nesoulad v evidenci funkce předsedy oddílu (viz sekce níže).
                K datu zveřejnění spolek neeviduje doložení seznamů členů ani oddílových příspěvků.
              </p>
              <p>
                Členství ve spolku zaniklo neplacením členských příspěvků (2024).
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

        {/* Nesoulad v evidenci funkce - SPOR */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border-2 border-orange-300 p-4 md:p-8">
            <div className="flex items-start gap-4 mb-4">
              <span className="text-5xl">⚖️</span>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="text-2xl font-bold text-amber-900">Nesoulad v evidenci funkce</h2>
                </div>
                <p className="text-slate-700 leading-relaxed mb-4">
                  {actor.legitimacyDispute.description} V této věci existují rozdílná tvrzení; stav označujeme jako spor.
                </p>
                <div className="space-y-4">
                  {actor.legitimacyDispute.details.map((detail, index) => (
                    <div key={index} className="p-4 bg-white rounded-lg border-2 border-orange-200">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-slate-900">{detail.label}</h3>
                      </div>
                      <p className="text-sm text-slate-700">{detail.description}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-orange-100 border-l-4 border-orange-600 rounded">
                  <p className="text-sm text-orange-900">
                    <strong>Upozornění:</strong> Spolek eviduje nesoulad mezi oficiálním zápisem a faktickou
                    komunikací. Tato skutečnost neupravuje výši evidované škody oddílu, ale uvádíme ji pro úplnost.
                    Námitky k těmto údajům lze zaslat prostřednictvím stránky{' '}
                    <a href="/pravni-ramec" className="underline font-semibold">Právní rámec</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Klíčová fakta */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            📌 Klíčová fakta
          </h2>
          <div className="grid gap-4">
            {actor.keyFacts.map((fact, index) => (
              <div
                key={index}
                className="p-4 md:p-6 rounded-xl bg-white border-2 border-slate-200 hover:shadow-lg transition"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{fact.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-slate-900">{fact.title}</h3>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {fact.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Rozpad škody */}
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
                    className="h-full bg-gradient-to-r from-green-500 to-teal-700 transition-all duration-500"
                    style={{ width: `${(item.amount / actor.totalDamage) * 100}%` }}
                  />
                </div>
                <div className="text-xs text-slate-600 mt-1 text-right">
                  {((item.amount / actor.totalDamage) * 100).toFixed(1)}% z celkové škody oddílu
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 md:p-6 bg-slate-900 text-white rounded-xl">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">CELKOVÁ EVIDOVANÁ ŠKODA ODDÍLU</span>
              <span className="text-3xl font-black">{actor.totalDamage.toLocaleString('cs-CZ')} Kč</span>
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
                </div>
                <p className="text-sm text-slate-900 mb-2">
                  K datu zveřejnění spolek neeviduje doložení aktualizovaných seznamů členů oddílu karate,
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
                </div>
                <p className="text-sm text-slate-900 mb-2">
                  Z účetních podkladů za období 2020-2023 vyplývá, že oddílové příspěvky ve výši 316.800 Kč
                  nebyly zaúčtovány jako příjem spolku.
                </p>
                <p className="text-sm text-slate-900 mb-2">
                  <strong>Výpočet:</strong> 40 členů × 3.600 Kč/rok × 4 roky (2020-2023).
                  <br />
                  <strong>Metoda:</strong> Odhad počtu členů (seznamy nebyly doloženy) × sazba dle stanov × období.
                  <br />
                  <strong>Výhrada:</strong> Skutečná částka může být jiná bez doložených seznamů členů.
                </p>
                <p className="text-xs text-slate-600">
                  <strong>Podklad:</strong> Účetní evidence Tělovýchovná jednota Krupka z.s., odhady členské základny.
                </p>
              </div>

              {/* 3. Členské příspěvky */}
              <div className="p-4 rounded-lg border-2 bg-yellow-50 border-yellow-300">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-slate-900">Nezaplacené členské příspěvky</h3>
                </div>
                <p className="text-sm text-slate-900 mb-2">
                  Z evidence vyplývá, že členské příspěvky za období 2021-2024 ve výši 32.000 Kč
                  (200 Kč × 4 roky × 40 členů) nebyly uhrazeny.
                </p>
                <p className="text-sm text-slate-900 mb-2">
                  Tyto příspěvky měly být odvedeny svazům ČSTV, Ústeckému kraji a obci.
                </p>
                <p className="text-xs text-slate-600">
                  <strong>Podklad:</strong> Účetní evidence spolku.
                </p>
              </div>

              {/* 4. Pokladna */}
              <div className="p-4 rounded-lg border-2 bg-yellow-50 border-yellow-300">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-slate-900">Nepředaná pokladna oddílu</h3>
                </div>
                <p className="text-sm text-slate-900 mb-2">
                  Z evidence vyplývá, že hotovost v pokladně oddílu k 31.12.2020 ve výši 1.798 Kč
                  nebyla předána ani vyúčtována.
                </p>
                <p className="text-xs text-slate-600">
                  <strong>Podklad:</strong> Účetní evidence spolku.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Srovnání příspěvků */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            📊 Srovnání ročních příspěvků oddílů
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-green-100 border-2 border-green-300 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🥋</span>
                  <div>
                    <div className="font-bold text-slate-900">Oddíl karate</div>
                    <div className="text-sm text-slate-600">Nejvyšší příspěvek ze všech oddílů</div>
                  </div>
                </div>
                <div className="text-2xl font-black text-green-700">3.600 Kč/člen/rok</div>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 border-2 border-slate-300 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🏓</span>
                  <div className="font-bold text-slate-900">Stolní tenis</div>
                </div>
                <div className="text-xl font-bold text-slate-700">2.400 Kč/člen/rok</div>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 border-2 border-slate-300 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">⛷️</span>
                  <div className="font-bold text-slate-900">Lyžařský oddíl</div>
                </div>
                <div className="text-xl font-bold text-slate-700">1.200 Kč/člen/rok</div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
              <p className="text-sm text-blue-900">
                <strong>Poznámka:</strong> Oddíl karate měl nejvyšší roční příspěvek na člena ze všech oddílů.
                Z evidence vyplývá nesoulad ve výši <strong>316.800 Kč</strong> za období 2020-2023.
              </p>
            </div>
          </div>
        </section>

        {/* Časová osa */}
        {actor.keyEvents.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              📊 Časová osa klíčových událostí
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-8">
              <div className="space-y-4">
                {actor.keyEvents.map((event: any, index: number) => (
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
                      </div>
                      {event.amount && (
                        <div className="text-lg font-bold text-green-700 mt-1">
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
        )}

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
              Pokud máte podloženou námitku k jakémukoli údaji na této stránce (včetně sporu o funkci předsedy),
              kontaktujte nás prostřednictvím stránky{' '}
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
            href="/akteri/gustav-vlach"
            className="flex items-center gap-2 px-6 py-3 bg-slate-200 hover:bg-slate-300 rounded-lg font-bold text-slate-900 transition"
          >
            <span>←</span>
            <span>Gustav Vlach</span>
          </a>
          <a
            href="/akteri"
            className="flex items-center gap-2 px-4 py-3 bg-slate-100 hover:bg-slate-200 rounded-lg font-semibold text-slate-700 transition"
          >
            <span>Přehled aktérů</span>
          </a>
          <a
            href="/akteri/jitka-illesova"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold text-white transition"
          >
            <span>Jitka Illéšová</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
