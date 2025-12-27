
export default function MiroslavBrozekPage() {
  const actor = {
    name: 'Miroslav Brožek',
    role: 'Předseda spolku TJ Krupka',
    department: 'Vedení spolku',
    departmentIcon: '⚖️',
    status: 'positive' as const,
    electionDate: '24.8.2021',
    termLength: '5 let',
    keyActions: [
      {
        text: 'Zvolen na shromáždění delegátů',
        date: '24.8.2021',
        type: 'positive',
        detail: 'Zvolení do funkce předsedy spolku na období 5 let',
        icon: '✅',
      },
      {
        text: 'Zaslány výzvy k předání seznamů členů',
        date: '2021-2024',
        type: 'positive',
        detail: 'Opakované výzvy k předání seznamů členů (13.9.2021, 10.12.2021, 11/2023)',
        icon: '📋',
      },
      {
        text: 'Zaslány předžalobní výzvy',
        date: '14.11.2023',
        type: 'positive',
        detail: 'Pokus o mimosoudní řešení před zahájením právních kroků',
        icon: '⚖️',
      },
      {
        text: 'Vyloučení členů z členství',
        date: '28.11.2023',
        type: 'positive',
        detail: 'Rozhodnutí o vyloučení podle § 239 NOZ po opakovaném porušení členských povinností',
        icon: '🚫',
      },
      {
        text: 'Podáno trestní oznámení',
        date: '2023-2024',
        type: 'positive',
        detail: 'Trestní oznámení na podezření ze zpronevěry a dalších trestných činů',
        icon: '👮',
      },
      {
        text: 'Placeny členské příspěvky',
        date: '2021-2024',
        type: 'positive',
        detail: '2.400 Kč/rok za oddílové členství',
        icon: '💰',
      },
    ],
    responsibilities: [
      {
        icon: '⚖️',
        title: 'Statutární zástupce',
        description: 'Zvolen na shromáždění delegátů 24.8.2021 na období 5 let. Jedná jménem spolku navenek.',
      },
      {
        icon: '📊',
        title: 'Finanční odpovědnost',
        description: 'Odpovědnost za hospodaření spolku, kontrolu příjmů a výdajů, vymáhání pohledávek.',
      },
      {
        icon: '📋',
        title: 'Administrace členství',
        description: 'Odpovědnost za evidenci členů, svolávání orgánů spolku, dodržování stanov a zákonů.',
      },
      {
        icon: '🔍',
        title: 'Kontrola oddílů',
        description: 'Povinnost kontrolovat hospodaření oddílů, vyžadovat seznamy členů a finanční vyrovnání.',
      },
    ],
    efforts: [
      {
        title: 'Snaha o transparentnost',
        description: 'Opakovaně požadoval seznamy členů oddílů pro ověření legitimity rozhodování a hospodaření.',
        outcome: 'K datu zveřejnění spolek neeviduje doložení seznamů přes opakované výzvy (2021-2024)',
        status: 'blocked' as const,
      },
      {
        title: 'Pokus o mimosoudní řešení',
        description: 'Zaslány předžalobní výzvy s možností vrátit peníze a dokumenty bez soudního sporu.',
        outcome: 'K termínu plnění nebyly splněny podmínky výzev',
        status: 'blocked' as const,
      },
      {
        title: 'Vyloučení členů',
        description: 'Po předžalobních výzvách a opakovaném porušení členských povinností rozhodl o vyloučení členů (§ 239 NOZ).',
        outcome: 'Soudní přezkum rozhodnutí probíhá',
        status: 'pending' as const,
      },
      {
        title: 'Trestní oznámení',
        description: 'Podáno trestní oznámení na podezření ze zpronevěry a dalších trestných činů v souvislosti s evidovanou škodou.',
        outcome: 'Vyšetřování probíhá',
        status: 'pending' as const,
      },
    ],
    challenges: [
      {
        icon: '🚫',
        title: 'Nedoložené seznamy členů',
        description: 'K datu zveřejnění spolek neeviduje doložení seznamů členů některých oddílů, přestože byly zaslány opakované výzvy (2021-2024). Bez seznamů nelze ověřit legitimitu rozhodování oddílů ani vymáhat pohledávky.',
      },
      {
        icon: '💸',
        title: 'Evidovaná škoda',
        description: 'Spolek eviduje škodu ve výši přes 2 miliony Kč (neodvedené příspěvky, neplacené energie, zadržené pokladny). Spolek má omezené prostředky na provoz.',
      },
      {
        icon: '⚖️',
        title: 'Soudní řízení',
        description: 'Probíhají soudní řízení týkající se vyloučení členů a dalších sporů. Spolek zastává právní názor, že jeho rozhodnutí byla v souladu s § 239 NOZ a stanovami.',
      },
      {
        icon: '🏛️',
        title: 'Situace s přístupem k prostorům',
        description: 'Spolek eviduje situaci s omezeným přístupem k některým prostorám. Detaily jsou předmětem právního posouzení.',
      },
    ],
    relatedLinks: [
      { label: 'Právní rámec a kontakt', href: '/pravni-ramec', icon: '⚖️' },
      { label: 'Metodika výpočtu škody', href: '/metodika', icon: '📊' },
      { label: 'Rozpad škody podle kategorií', href: '/rozpad-skody', icon: '💰' },
      { label: 'Události s účastí', href: '/udalosti?actor=miroslav-brozek', icon: '📅' },
      { label: 'Téma: Schůze a rozhodování', href: '/temata/schuze-a-rozhodovani', icon: '🗳️' },
      { label: 'Téma: Právní rovina', href: '/temata/pravni-rovina', icon: '⚖️' },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Legal Disclaimer Banner */}
      <div className="bg-blue-900 text-white py-3">
        <div className="container mx-auto px-3 md:px-8 max-w-5xl">
          <p className="text-sm">
            ⚖️ <strong>Právní upozornění:</strong> Osoba je uvedena výhradně v souvislosti s výkonem funkce ve spolku Tělovýchovná jednota Krupka z.s., nikoliv soukromě.
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
                <span className="px-3 py-1 bg-green-900/50 backdrop-blur rounded-full text-white text-sm font-bold">
                  ✅ Zvolený předseda
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3">
                {actor.name}
              </h1>
              <p className="text-xl text-green-100 font-medium">
                {actor.role}
              </p>
              <div className="mt-4 flex items-center gap-4 text-white">
                <div className="px-4 py-2 bg-white/20 backdrop-blur rounded-lg">
                  <span className="text-sm">📅 Zvolen: <strong>{actor.electionDate}</strong></span>
                </div>
                <div className="px-4 py-2 bg-white/20 backdrop-blur rounded-lg">
                  <span className="text-sm">⏱️ Funkční období: <strong>{actor.termLength}</strong></span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur border-2 border-white/30 rounded-2xl p-4 md:p-8 mt-8">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-green-100 text-sm font-medium mb-2">Statutární orgán spolku</div>
                <div className="text-3xl font-black text-white mb-3">
                  Předseda Tělovýchovná jednota Krupka z.s.
                </div>
                <p className="text-green-100 leading-relaxed max-w-2xl mb-3">
                  Zvolen na řádném shromáždění delegátů 24.8.2021 na období 5 let.
                </p>
              </div>
              <div className="text-8xl opacity-20">
                ⚖️
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
                Miroslav Brožek byl zvolen předsedou spolku Tělovýchovná jednota Krupka z.s. na shromáždění delegátů dne 24.8.2021
                na období 5 let. Od svého zvolení opakovaně požadoval předání seznamů členů a finančních dokumentů
                od předsedů oddílů.
              </p>
              <p>
                V rámci výkonu funkce zaslal výzvy k předání dokumentů, předžalobní výzvy k úhradě evidované škody,
                rozhodl o vyloučení některých členů a podal trestní oznámení na podezření ze zpronevěry.
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

        {/* Odpovědnosti funkce */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            📊 Odpovědnosti funkce předsedy
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {actor.responsibilities.map((resp, index) => (
              <div
                key={index}
                className="p-4 md:p-6 bg-white rounded-xl border-2 border-slate-200 hover:shadow-lg transition"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-3xl">{resp.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-slate-900">{resp.title}</h3>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {resp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Klíčové kroky */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            ✅ Klíčové kroky a aktivity
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-8">
            <div className="space-y-4">
              {actor.keyActions.map((action, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-green-50 border-2 border-green-300 hover:shadow-md transition"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center font-bold text-sm text-white">
                    {action.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="font-bold text-slate-900">{action.text}</div>
                    </div>
                    {action.detail && (
                      <div className="text-sm text-slate-600 mt-1">
                        {action.detail}
                      </div>
                    )}
                  </div>
                  <div className="text-sm text-slate-600 font-medium whitespace-nowrap">
                    {action.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Snaha o nápravu */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            🔧 Kroky k nápravě situace
          </h2>
          <div className="space-y-4">
            {actor.efforts.map((effort, index) => {
              const statusColors = {
                blocked: 'border-orange-400 bg-orange-50',
                pending: 'border-yellow-400 bg-yellow-50',
                success: 'border-green-400 bg-green-50',
              };
              const statusLabels = {
                blocked: '🚫 Nesplněno',
                pending: '⏳ Probíhá',
                success: '✅ Úspěch',
              };

              return (
                <div
                  key={index}
                  className={`p-4 md:p-6 rounded-xl border-2 ${statusColors[effort.status]} hover:shadow-lg transition`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-slate-900">{effort.title}</h3>
                    </div>
                    <span className="px-3 py-1 bg-white/60 rounded-full text-xs font-bold text-slate-700">
                      {statusLabels[effort.status]}
                    </span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed mb-3">
                    {effort.description}
                  </p>
                  <div className="pt-3 border-t border-slate-300">
                    <div className="text-xs font-semibold text-slate-600 mb-1">Výsledek:</div>
                    <div className="text-sm text-slate-800 font-medium">{effort.outcome}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Výzvy a překážky */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            🚧 Výzvy při výkonu funkce
          </h2>
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border-2 border-orange-300 p-4 md:p-8">
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Při výkonu funkce předsedy čelil následujícím výzvám:
            </p>
            <div className="space-y-4">
              {actor.challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="p-5 bg-white rounded-lg border-2 border-orange-200"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{challenge.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-slate-900">{challenge.title}</h3>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
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
              . Po prověření provedeme opravu nebo upřesníme metodiku.
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
            href="/akteri"
            className="flex items-center gap-2 px-6 py-3 bg-slate-200 hover:bg-slate-300 rounded-lg font-bold text-slate-900 transition"
          >
            <span>←</span>
            <span>Přehled aktérů</span>
          </a>
          <a
            href="/akteri/marek-vanis"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold text-white transition"
          >
            <span>Marek Vaniš</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
