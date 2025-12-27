
export default function JanBokocPage() {
  const actor = {
    name: 'Jan Bokoč',
    role: 'Místostarosta města Krupka',
    organization: 'Město Krupka',
    organizationIcon: '🏛️',
    status: 'city_official' as const,

    context: {
      description: 'Jan Bokoč působil jako místostarosta města Krupka v období, kdy probíhaly spory mezi spolkem Tělovýchovná jednota Krupka z.s. a některými jeho bývalými členy. Město Krupka vlastní společnost SPORT Krupka s.r.o., která spravuje sportovní prostory využívané spolkem.',
    },

    keyEvents: [
      {
        date: '2023-2024',
        event: 'Výkon funkce místostarosty',
        description: 'Výkon funkce místostarosty města Krupka během období sporů spolku.',
      },
      {
        date: '26.1.2024',
        event: 'Notifikace města o vyloučení členů',
        description: 'Město obdrželo oficiální oznámení spolku o vyloučení některých členů podle § 239 NOZ.',
      },
    ],

    spolekPosition: {
      title: 'Pozice spolku',
      description: 'Spolek zastává právní názor, že město Krupka a jeho zástupci měli respektovat autonomii spolku podle § 20a NOZ. Spolek eviduje situace, které považuje za zásahy do své autonomie.',
      points: [
        {
          title: 'Autonomie spolku',
          description: 'Podle § 20a NOZ má spolek právo na autonomii. Spolek zastává názor, že město a jeho zástupci měli toto právo respektovat.',
          legal: '§ 20a NOZ - Autonomie spolku',
        },
        {
          title: 'Přístup k prostorám',
          description: 'Spolek eviduje situace s omezeným přístupem k prostorám spravovaným městskou společností SPORT Krupka s.r.o. v období sporů.',
        },
        {
          title: 'Notifikace o vyloučení členů',
          description: 'Spolek dne 26.1.2024 notifikoval město o vyloučení některých členů. Spolek očekával, že město bude respektovat tato rozhodnutí spolkových orgánů.',
        },
      ],
    },

    legalFramework: [
      {
        law: '§ 20a NOZ',
        title: 'Autonomie spolku',
        description: 'Spolek je autonomní organizace. Státní orgány a orgány územních samosprávných celků mají povinnost respektovat autonomii spolku a zdržet se neoprávněného vměšování do jeho záležitostí.',
      },
      {
        law: '§ 239 NOZ',
        title: 'Vyloučení člena',
        description: 'Spolek může vyloučit člena z důležitého důvodu. Rozhodnutí o vyloučení je vnitřní záležitostí spolku.',
      },
    ],

    relatedLinks: [
      { label: 'Právní rámec a kontakt', href: '/pravni-ramec', icon: '⚖️' },
      { label: 'Téma: Role města Krupka', href: '/temata/role-mesta-krupka', icon: '🏛️' },
      { label: 'Otázka: Měly instituce zasáhnout dříve?', href: '/otazky/mely-instituce-zasahnout-drive', icon: '❓' },
      { label: 'Události', href: '/udalosti', icon: '📅' },
      { label: 'Miroslav Brožek (předseda spolku)', href: '/akteri/miroslav-brozek', icon: '⚖️' },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Legal Disclaimer Banner - Enhanced for public official */}
      <div className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-3 md:px-8 max-w-5xl">
          <p className="text-sm leading-relaxed">
            ⚖️ <strong>Důležité právní upozornění:</strong> Osoba je uvedena jako veřejný činitel města Krupka v souvislosti se spory spolku Tělovýchovná jednota Krupka z.s.
            Uvedené informace představují právní pozici spolku a nejsou pravomocným soudním rozhodnutím.
            Spolek respektuje presumpci neviny a prezentuje pouze svůj právní názor na události.
            {' '}
            <a href="/pravni-ramec" className="underline hover:text-blue-200 font-semibold">
              Více o právním rámci →
            </a>
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-slate-700 py-8 md:py-16">
        <div className="container mx-auto px-3 md:px-8 max-w-5xl">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-white text-sm font-medium">
                  {actor.organizationIcon} {actor.organization}
                </span>
                <span className="px-3 py-1 bg-blue-900/50 backdrop-blur rounded-full text-white text-sm font-bold">
                  Veřejný činitel
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3">
                {actor.name}
              </h1>
              <p className="text-xl text-blue-100 font-medium">
                {actor.role}
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur border-2 border-white/30 rounded-2xl p-4 md:p-8 mt-8">
            <div className="flex items-center gap-4">
              <div className="text-6xl opacity-70">🏛️</div>
              <div className="flex-1">
                <div className="text-blue-100 text-sm font-medium mb-2">Kontext v kauze</div>
                <div className="text-2xl font-black text-white mb-2">
                  Zástupce města během sporů spolku
                </div>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Město Krupka vlastní společnost SPORT Krupka s.r.o., která spravuje prostory využívané spolkem.
                  Spolek zastává právní názor o potřebě respektování autonomie spolku.
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
                  ve sporech týkajících se autonomie spolku a přístupu k prostorům. Uvedené informace
                  nejsou pravomocným soudním rozhodnutím.
                </p>
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
                  <p className="text-sm text-slate-700 mb-2">{point.description}</p>
                  {point.legal && (
                    <p className="text-xs text-slate-600 italic">
                      <strong>Právní základ:</strong> {point.legal}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-orange-100 border-l-4 border-orange-600 rounded">
              <p className="text-sm text-orange-900">
                <strong>Upozornění:</strong> Výše uvedené body představují právní argumentaci spolku
                v probíhajících sporech. Nejde o pravomocná soudní rozhodnutí. Spolek respektuje presumpci
                neviny všech zúčastněných osob.
              </p>
            </div>
          </div>
        </section>

        {/* Právní rámec */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            📚 Relevantní právní rámec
          </h2>
          <div className="bg-slate-50 rounded-xl p-4 md:p-8 border-2 border-slate-200">
            <p className="text-sm text-slate-700 mb-6">
              Spolek se ve svých právních argumentech opírá o následující právní předpisy:
            </p>
            <div className="space-y-4">
              {actor.legalFramework.map((item, index) => (
                <div key={index} className="p-5 bg-white rounded-lg border-2 border-slate-200">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-slate-900">{item.law} - {item.title}</h3>
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
