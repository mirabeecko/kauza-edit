export default function MiroslavBrozekPage() {
  const actor = {
    name: 'Miroslav Brožek',
    role: 'Předseda spolku TJ Krupka',
    department: 'Vedení spolku',
    departmentIcon: '⚖️',
    status: 'positive' as const,
    electionDate: '24.8.2021',
    termLength: '5 let',
    summary: 'Legitimně zvolený předseda TJ Krupka (24.8.2021) na 5 let. Snaha o nápravu situace, transparentnost a dodržování zákonů. Opakovaně vyzýval k předání seznamů členů a finančních dokumentů.',
    keyActions: [
      {
        text: 'Svolal shromáždění delegátů',
        date: '24.8.2021',
        type: 'positive',
        detail: 'Legitimní zvolení do funkce předsedy spolku na období 5 let',
        icon: '✅',
      },
      {
        text: 'Opakovaně vyzýval k předání seznamů členů',
        date: '2021-2024',
        type: 'positive',
        detail: 'Vaniš, Vlach, Kulík seznamy NIKDY nepředali přes veškeré výzvy',
        icon: '📋',
      },
      {
        text: 'Zasílal předžalobní výzvy',
        date: 'Listopad 2023',
        type: 'positive',
        detail: 'Pokus o mimosoudní řešení před zahájením soudních kroků',
        icon: '⚖️',
      },
      {
        text: 'Vyloučil problémové členy z členství',
        date: '28.11.2023',
        type: 'positive',
        detail: 'Vaniš a Pivoňka vyloučeni po předžalobních výzvách (§ 239 NOZ)',
        icon: '🚫',
      },
      {
        text: 'Podal trestní oznámení',
        date: '2023-2024',
        type: 'positive',
        detail: 'Na zpronevěru, podvod a další trestné činy',
        icon: '👮',
      },
      {
        text: 'Řádně platil členské příspěvky',
        date: '2021-2024',
        type: 'positive',
        detail: '2.400 Kč/rok za své oddílové členství',
        icon: '💰',
      },
    ],
    responsibilities: [
      {
        icon: '⚖️',
        title: 'Statutární zástupce',
        description: 'Legitimně zvolen na shromáždění delegátů 24.8.2021 na období 5 let. Jedná jménem spolku navenek.',
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
        description: 'Povinnost kontrolovat hospodaření oddílů, vymáhat seznamy členů a finanční vyrovnání.',
      },
    ],
    efforts: [
      {
        title: 'Snaha o transparentnost',
        description: 'Opakovaně požadoval seznamy členů oddílů, aby bylo možné ověřit legitimitu rozhodování a hospodaření.',
        outcome: 'Neúspěch – seznamy nebyly dodány přes 3+ roky výzev',
        status: 'blocked' as const,
      },
      {
        title: 'Pokus o mimosoudní řešení',
        description: 'Zaslal předžalobní výzvy Vanišovi, Pivoňkovi a dalším s možností vrátit peníze a dokumenty bez soudního sporu.',
        outcome: 'Neúspěch – výzvy byly ignorovány, peníze nebyly vráceny',
        status: 'blocked' as const,
      },
      {
        title: 'Vyloučení problémových členů',
        description: 'Po předžalobních výzvách a opakovaných porušeních povinností vyloučil Vaniše a Pivoňku z členství (§ 239 NOZ).',
        outcome: 'Soud rozhodl v rozporu se zákonem v jejich prospěch',
        status: 'blocked' as const,
      },
      {
        title: 'Trestní oznámení',
        description: 'Podal trestní oznámení na zpronevěru, podvod a další trestné činy související se škodou 2+ mil. Kč.',
        outcome: 'V řešení – vyšetřování probíhá',
        status: 'pending' as const,
      },
    ],
    challenges: [
      {
        icon: '🚫',
        title: 'Nedodané seznamy členů',
        description: 'Bez seznamů členů nelze ověřit legitimitu rozhodování oddílů, svolat řádné schůze ani vymáhat pohledávky. Vaniš, Vlach, Kulík seznamy NIKDY nepředali.',
      },
      {
        icon: '💸',
        title: 'Škoda 2+ mil. Kč',
        description: 'Oddíly způsobily škodu přes 2 miliony Kč (zapřené příspěvky, neplacené energie, zadržené pokladny). Spolek nemá prostředky na provoz.',
      },
      {
        icon: '⚖️',
        title: 'Soudní rozhodnutí proti zákonu',
        description: 'Krajský soud rozhodl v rozporu s § 259 NOZ (prekluze) a § 6, § 8 NOZ (nepoctivost, zneužití práva) ve prospěch žalobců.',
      },
      {
        icon: '🏛️',
        title: 'Role města Krupka',
        description: 'Město výměnou zámků na budově a podporou "staré gardy" fakticky znemožnilo spolku přístup k jeho vlastním prostorám.',
      },
    ],
    relatedLinks: [
      { label: 'Události s účastí Brožka', href: '/udalosti?actor=miroslav-brozek', icon: '📅' },
      { label: 'Téma: Schůze a rozhodování', href: '/temata/schuze-a-rozhodovani', icon: '🗳️' },
      { label: 'Téma: Právní rovina', href: '/temata/pravni-rovina', icon: '⚖️' },
      { label: 'Téma: Role města Krupka', href: '/temata/role-mesta-krupka', icon: '🏛️' },
      { label: 'Všichni aktéři', href: '/akteri', icon: '👥' },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800 py-8 md:py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-white text-sm font-medium">
                  {actor.departmentIcon} {actor.department}
                </span>
                <span className="px-3 py-1 bg-green-900/50 backdrop-blur rounded-full text-white text-sm font-bold">
                  ✅ Legitimní předseda
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

          <div className="bg-white/10 backdrop-blur border-2 border-white/30 rounded-2xl p-8 mt-8">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-green-100 text-sm font-medium mb-2">Statutární orgán spolku</div>
                <div className="text-3xl font-black text-white mb-3">
                  Legitimní předseda TJ Krupka
                </div>
                <p className="text-green-100 leading-relaxed max-w-2xl">
                  Zvolen na řádném shromáždění delegátů 24.8.2021 na období 5 let.
                  Snaha o nápravu situace, transparentnost a dodržování zákonů.
                </p>
              </div>
              <div className="text-8xl opacity-20">
                ⚖️
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 py-12 max-w-5xl">
        {/* Shrnutí */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 shadow">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span>📋</span>
              <span>Shrnutí</span>
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              {actor.summary}
            </p>
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
                className="p-6 bg-white rounded-xl shadow transition hover:shadow-lg"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-3xl">{resp.icon}</span>
                  <h3 className="text-lg font-bold text-slate-900">{resp.title}</h3>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {resp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Klíčové kroky */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            ✅ Klíčové kroky a aktivity
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 shadow">
            <div className="space-y-4">
              {actor.keyActions.map((action, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg shadow-sm bg-green-50 border-green-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 shadow flex items-center justify-center font-bold text-sm text-white">
                    {action.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-slate-900">{action.text}</div>
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
            🔧 Snaha o nápravu situace
          </h2>
          <div className="space-y-4">
            {actor.efforts.map((effort, index) => {
              const statusColors = {
                blocked: 'border-red-400 bg-red-50',
                pending: 'border-yellow-400 bg-yellow-50',
                success: 'border-green-400 bg-green-50',
              };
              const statusLabels = {
                blocked: '🚫 Blokováno',
                pending: '⏳ Probíhá',
                success: '✅ Úspěch',
              };

              return (
                <div
                  key={index}
                  className={`p-6 rounded-xl shadow ${statusColors[effort.status]} transition hover:shadow-lg`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-900">{effort.title}</h3>
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
            🚧 Výzvy a překážky
          </h2>
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl shadow p-8 shadow-lg">
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Přestože Miroslav Brožek byl legitimně zvolen a snažil se o nápravu situace,
              čelil mnoha překážkám:
            </p>
            <div className="space-y-4">
              {actor.challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="p-5 bg-white/70 rounded-lg border border-red-200"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{challenge.icon}</span>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{challenge.title}</h3>
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

        {/* Porovnání s ostatními */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            ⚖️ Srovnání přístupu
          </h2>
          <div className="grid md:grid-cols-2 gap-3 md:gap-6">
            <div className="p-6 bg-green-50 rounded-xl shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">✅</span>
                <h3 className="text-xl font-bold text-green-900">Miroslav Brožek</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Legitimně zvolen na shromáždění delegátů</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Řádně platil členské příspěvky (2.400 Kč/rok)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Opakovaně žádal seznamy členů a dokumenty</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Dodržoval stanovy a zákony</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Snaha o mimosoudní i soudní řešení</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-red-50 rounded-xl shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">❌</span>
                <h3 className="text-xl font-bold text-red-900">Vaniš, Vlach, Kulík</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Nikdy nepředali seznamy členů (3+ roky)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Neplatili členské příspěvky (143.200 Kč)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Zapírali oddílové příspěvky (1.214.400 Kč)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Neplatili energie (299.921 Kč)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Celková škoda: 2.046.000 Kč</span>
                </li>
              </ul>
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
                className="block p-5 bg-white rounded-xl shadow hover:border-blue-500 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{link.icon}</span>
                  <span className="font-bold text-slate-900">{link.label}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Navigace */}
        <div className="flex items-center justify-between pt-8 border-t-2 border-slate-200">
          <a
            href="/akteri"
            className="flex items-center gap-2 px-6 py-3 bg-slate-200 hover:bg-slate-300 rounded-lg font-bold text-slate-900 transition"
          >
            <span>←</span>
            <span>Všichni aktéři</span>
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
