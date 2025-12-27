
export default function JitkaIllesovaPage() {
  const actor = {
    name: 'Jitka Illéšová',
    role: 'Účetní spolku',
    department: 'Administrativa',
    departmentIcon: '📊',
    status: 'service_provider' as const,

    context: {
      description: 'Jitka Illéšová poskytovala spolku Tělovýchovná jednota Krupka z.s. účetní služby v období 2021-2022. Spolek eviduje spor týkající se dokončení účetnictví roku 2021 a předání účetní dokumentace.',
    },

    payment: {
      amount: 30000,
      description: 'Spolek eviduje platbu 30.000 Kč (6 plateb × 5.000 Kč) za vedení účetnictví za rok 2021.',
    },

    keyEvents: [
      {
        date: '2021',
        event: 'Platba za účetní služby',
        description: 'Spolek vyplatil Jitce Illéšové 30.000 Kč (6 plateb × 5.000 Kč) za vedení účetnictví roku 2021.',
      },
      {
        date: '2022',
        event: 'Spor o dokončení účetnictví',
        description: 'Spolek eviduje spor ohledně dokončení a uzavření účetnictví za rok 2021. K datu zveřejnění spolek neeviduje předání uzavřeného účetnictví.',
      },
      {
        date: '2022-2023',
        event: 'Spor o účetní dokumentaci',
        description: 'Spolek eviduje spor týkající se předání účetní dokumentace a okolností jejího zpřístupnění třetím stranám.',
      },
    ],

    spolekPosition: {
      title: 'Právní pozice spolku',
      description: 'Spolek zastává právní názor, že účetní služby nebyly řádně dokončeny přes obdržení plné odměny. Spolek eviduje situace týkající se přístupu k účetní dokumentaci. Jedná se o spor mezi poskytovatelem služeb a klientem.',
      points: [
        {
          title: 'Dokončení účetnictví roku 2021',
          description: 'Spolek vyplatil 30.000 Kč za vedení účetnictví roku 2021. K datu zveřejnění spolek neeviduje předání uzavřeného účetnictví a účetní závěrky za rok 2021.',
        },
        {
          title: 'Přístup k účetní dokumentaci',
          description: 'Spolek eviduje situace týkající se přístupu k účetní dokumentaci spolku. Spolek zastává názor, že účetní dokumenty patří spolku a měly být předány legitimnímu vedení.',
        },
        {
          title: 'Dopad na hospodaření spolku',
          description: 'Bez uzavřeného účetnictví spolek evidoval ztíženou možnost kontroly hospodaření, podání výkazů a provedení auditu za rok 2021.',
        },
      ],
    },

    legalContext: {
      title: 'Právní kontext poskytování účetních služeb',
      points: [
        {
          title: 'Smluvní vztah',
          description: 'Vztah mezi účetním a klientem je smluvní. Klient platí za účetní služby, účetní má povinnost služby řádně dokončit a předat výstupy.',
        },
        {
          title: 'Vlastnictví účetní dokumentace',
          description: 'Účetní dokumenty patří klientovi (spolku), nikoli účetnímu. Účetní má povinnost předat dokumentaci klientovi.',
        },
        {
          title: 'Povinnost mlčenlivosti',
          description: 'Účetní má povinnost mlčenlivosti ohledně finančních informací klienta. Předání dokumentů třetím stranám bez souhlasu klienta může být předmětem sporu.',
        },
      ],
    },

    relatedLinks: [
      { label: 'Právní rámec a kontakt', href: '/pravni-ramec', icon: '⚖️' },
      { label: 'Téma: Finance a majetek', href: '/temata/finance-a-majetek', icon: '📚' },
      { label: 'Miroslav Brožek (předseda spolku)', href: '/akteri/miroslav-brozek', icon: '⚖️' },
      { label: 'Události', href: '/udalosti', icon: '📅' },
      { label: 'Přehled aktérů', href: '/akteri', icon: '👥' },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Legal Disclaimer Banner */}
      <div className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-3 md:px-8 max-w-5xl">
          <p className="text-sm leading-relaxed">
            ⚖️ <strong>Důležité právní upozornění:</strong> Osoba je uvedena jako poskytovatel účetních služeb v souvislosti se spory spolku Tělovýchovná jednota Krupka z.s.
            Uvedené informace představují právní pozici spolku ve sporu mezi poskytovatelem služeb a klientem.
            Nejde o pravomocné soudní rozhodnutí. Obě strany mají právo na odlišný právní názor.
            {' '}
            <a href="/pravni-ramec" className="underline hover:text-blue-200 font-semibold">
              Více o právním rámci →
            </a>
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 via-violet-700 to-indigo-800 py-8 md:py-16">
        <div className="container mx-auto px-3 md:px-8 max-w-5xl">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-white text-sm font-medium">
                  {actor.departmentIcon} {actor.department}
                </span>
                <span className="px-3 py-1 bg-violet-900/50 backdrop-blur rounded-full text-white text-sm font-bold">
                  Poskytovatel účetních služeb
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3">
                {actor.name}
              </h1>
              <p className="text-xl text-purple-100 font-medium">
                {actor.role}
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur border-2 border-white/30 rounded-2xl p-4 md:p-8 mt-8">
            <div className="flex items-center gap-4">
              <div className="text-6xl opacity-70">📊</div>
              <div className="flex-1">
                <div className="text-purple-100 text-sm font-medium mb-2">Kontext v kauze</div>
                <div className="text-2xl font-black text-white mb-2">
                  Spor mezi poskytovatelem účetních služeb a spolkem
                </div>
                <p className="text-purple-100 text-sm leading-relaxed">
                  Poskytovala účetní služby spolku v období 2021-2022. Spolek eviduje spor týkající se dokončení účetnictví a předání dokumentace.
                </p>
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
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <p className="text-slate-700 leading-relaxed flex-1">
                  {actor.context.description}
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200 mt-4">
                <p className="text-sm text-blue-900">
                  <strong>Poznámka:</strong> Tato stránka prezentuje právní pozici spolku Tělovýchovná jednota Krupka z.s.
                  ve sporu s poskytovatelem účetních služeb. Jedná se o spor mezi klientem a poskytovatelem služeb.
                  Uvedené informace nejsou pravomocným soudním rozhodnutím.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Platba za služby */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            💰 Platba za účetní služby
          </h2>
          <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border-2 border-purple-300 p-4 md:p-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold text-slate-900">Evidovaná platba za rok 2021</h3>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  {actor.payment.description}
                </p>
              </div>
              <div className="text-right ml-6">
                <div className="text-4xl font-black text-purple-700">
                  {actor.payment.amount.toLocaleString('cs-CZ')} Kč
                </div>
                <div className="text-sm text-purple-600 mt-1">
                  6 plateb × 5.000 Kč
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Klíčové události */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            📅 Klíčové události
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-8">
            <div className="space-y-4">
              {actor.keyEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border-2 border-slate-200"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="font-bold text-slate-900">{event.event}</div>
                    </div>
                    <p className="text-sm text-slate-700 mb-2">{event.description}</p>
                  </div>
                  <div className="text-sm text-slate-600 font-medium whitespace-nowrap">
                    {event.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Právní pozice spolku */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            ⚖️ Právní pozice spolku
          </h2>
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border-2 border-orange-300 p-4 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-4xl">⚖️</span>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold text-slate-900">{actor.spolekPosition.title}</h3>
                </div>
                <p className="text-slate-700 leading-relaxed mb-4">
                  {actor.spolekPosition.description}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {actor.spolekPosition.points.map((point, index) => (
                <div key={index} className="p-4 bg-white rounded-lg border-2 border-orange-200">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-bold text-slate-900">{point.title}</h4>
                  </div>
                  <p className="text-sm text-slate-700">{point.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-orange-100 border-l-4 border-orange-600 rounded">
              <p className="text-sm text-orange-900">
                <strong>Upozornění:</strong> Výše uvedené body představují právní argumentaci spolku
                ve sporu s poskytovatelem účetních služeb. Jedná se o spor mezi klientem a dodavatelem služeb.
                Nejde o pravomocné soudní rozhodnutí. Obě strany mají právo na odlišný právní názor.
              </p>
            </div>
          </div>
        </section>

        {/* Právní kontext */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            📚 {actor.legalContext.title}
          </h2>
          <div className="bg-slate-50 rounded-xl p-4 md:p-8 border-2 border-slate-200">
            <p className="text-sm text-slate-700 mb-6">
              Právní rámec vztahu mezi účetním a klientem:
            </p>
            <div className="space-y-4">
              {actor.legalContext.points.map((item, index) => (
                <div key={index} className="p-5 bg-white rounded-lg border-2 border-slate-200">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-sm text-slate-700">{item.description}</p>
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
              . Respektujeme právo všech zúčastněných osob na vyjádření a opravu nepřesných informací.
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
        <div className="flex items-center justify-center pt-8 border-t-2 border-slate-200">
          <a
            href="/akteri"
            className="flex items-center gap-2 px-6 py-3 bg-slate-200 hover:bg-slate-300 rounded-lg font-bold text-slate-900 transition"
          >
            <span>←</span>
            <span>Přehled aktérů</span>
          </a>
        </div>
      </div>
    </div>
  );
}
