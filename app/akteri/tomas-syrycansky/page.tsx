
export default function TomasSyrycanskyPage() {
  const actor = {
    name: 'Tomáš Syryčanský',
    role: 'Sportovní manažer SPORT Krupka s.r.o.',
    organization: 'SPORT Krupka s.r.o.',
    organizationIcon: '🏛️',
    status: 'city_employee' as const,

    context: {
      description: 'Tomáš Syryčanský působí jako sportovní manažer městské společnosti SPORT Krupka s.r.o., která spravuje sportovní prostory využívané spolkem Tělovýchovná jednota Krupka z.s. Spolek eviduje jeho účast na jednáních souvisejících se spory o autonomii spolku a přístup k prostorům.',
    },

    keyEvents: [
      {
        date: '2023-2024',
        event: 'Výkon funkce sportovního manažera',
        description: 'Výkon funkce sportovního manažera společnosti SPORT Krupka s.r.o. během období sporů spolku.',
      },
      {
        date: '19.12.2023',
        event: 'První změna přístupu k objektu',
        description: 'Společnost SPORT Krupka s.r.o. provedla změny v přístupu k objektu Pinčesárna.',
      },
      {
        date: 'Prosinec 2023',
        event: 'Jednání o shromáždění spolku',
        description: 'Spolek eviduje jednání týkající se termínu konání shromáždění spolku.',
      },
      {
        date: '17.1.2024',
        event: 'Zaslání návrhu nájemní smlouvy',
        description: 'SPORT Krupka s.r.o. zaslala návrh nové nájemní smlouvy do datové schránky Tělovýchovná jednota Krupka z.s.',
      },
      {
        date: '19.1.2024',
        event: 'Druhá výměna zámků',
        description: 'Dva dny po zaslání návrhu smlouvy došlo k druhé výměně zámků na objektu.',
      },
      {
        date: '25.1.2024',
        event: 'Konání shromáždění spolku',
        description: 'Konalo se shromáždění členů spolku Tělovýchovná jednota Krupka z.s.',
      },
      {
        date: '26.1.2024',
        event: 'Město obdrželo notifikaci',
        description: 'Město Krupka obdrželo do datové schránky oznámení spolku o vyloučení některých členů.',
      },
      {
        date: 'Únor-Duben 2024',
        event: 'Pokračující spory',
        description: 'Pokračovaly spory mezi spolkem a městskou společností ohledně přístupu k prostorům.',
      },
    ],

    spolekPosition: {
      title: 'Právní pozice spolku',
      description: 'Spolek zastává právní názor, že městská společnost SPORT Krupka s.r.o. měla respektovat autonomii spolku a jeho rozhodnutí o vyloučení členů. Spolek eviduje situace související s omezeným přístupem k prostorám a koordinací mezi různými aktéry.',
      points: [
        {
          title: 'Načasování výměn zámků',
          description: 'Spolek eviduje, že k výměnám zámků došlo v kritických obdobích sporů (19.12.2023 a 19.1.2024, přičemž druhá výměna proběhla dva dny po zaslání návrhu nájemní smlouvy). Spolek vnímá toto načasování jako problematické.',
        },
        {
          title: 'Přístup k prostorám po notifikaci',
          description: 'Spolek dne 26.1.2024 notifikoval město o vyloučení některých členů. Spolek zastává názor, že městská společnost měla respektovat toto rozhodnutí spolku při správě přístupu k prostorám.',
        },
        {
          title: 'Účast na jednáních',
          description: 'Spolek eviduje účast Tomáše Syryčanského na jednáních souvisejících se spory spolku. Spolek vnímá tyto situace jako součást širšího kontextu sporů s městskými institucemi.',
        },
        {
          title: 'Role městské společnosti',
          description: 'Spolek zastává právní názor, že městská společnost jako správce prostor měla zachovávat neutralitu a respektovat autonomii spolku podle § 20a NOZ.',
          legal: '§ 20a NOZ - Autonomie spolku',
        },
      ],
    },

    employmentContext: {
      title: 'Kontext zaměstnaneckého poměru',
      description: 'Tomáš Syryčanský je zaměstnancem městské společnosti SPORT Krupka s.r.o. Spolek poznamenává, že tato pozice ho staví do komplexní situace při sporech mezi spolkem a městskými institucemi.',
    },

    legalFramework: [
      {
        law: '§ 20a NOZ',
        title: 'Autonomie spolku',
        description: 'Spolek je autonomní organizace. Státní orgány a orgány územních samosprávných celků (včetně jejich společností) mají povinnost respektovat autonomii spolku.',
      },
      {
        law: '§ 239 NOZ',
        title: 'Vyloučení člena',
        description: 'Spolek může vyloučit člena z důležitého důvodu. Rozhodnutí o vyloučení je vnitřní záležitostí spolku, kterou by měly třetí strany (včetně správců prostor) respektovat.',
      },
    ],

    relatedLinks: [
      { label: 'Právní rámec a kontakt', href: '/pravni-ramec', icon: '⚖️' },
      { label: 'Téma: Role města Krupka', href: '/temata/role-mesta-krupka', icon: '🏛️' },
      { label: 'Jan Kuzma (starosta + jednatel SPORT Krupka)', href: '/akteri/jan-kuzma', icon: '🏛️' },
      { label: 'Jan Bokoč (místostarosta)', href: '/akteri/jan-bokoc', icon: '🏛️' },
      { label: 'Miroslav Brožek (předseda spolku)', href: '/akteri/miroslav-brozek', icon: '⚖️' },
      { label: 'Otázka: Měly instituce zasáhnout dříve?', href: '/otazky/mely-instituce-zasahnout-drive', icon: '❓' },
      { label: 'Události', href: '/udalosti', icon: '📅' },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Legal Disclaimer Banner - Enhanced for city employee */}
      <div className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-3 md:px-8 max-w-5xl">
          <p className="text-sm leading-relaxed">
            ⚖️ <strong>Důležité právní upozornění:</strong> Osoba je uvedena jako zaměstnanec městské společnosti v souvislosti se spory spolku Tělovýchovná jednota Krupka z.s.
            Veškeré uvedené informace představují výhradně právní pozici spolku a nejsou pravomocným soudním rozhodnutím.
            Spolek respektuje presumpci neviny a prezentuje pouze svůj právní názor na sporné situace.
            {' '}
            <a href="/pravni-ramec" className="underline hover:text-blue-200 font-semibold">
              Více o právním rámci →
            </a>
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-600 via-blue-700 to-slate-700 py-8 md:py-16">
        <div className="container mx-auto px-3 md:px-8 max-w-5xl">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-white text-sm font-medium">
                  {actor.organizationIcon} {actor.organization}
                </span>
                <span className="px-3 py-1 bg-indigo-900/50 backdrop-blur rounded-full text-white text-sm font-bold">
                  Zaměstnanec městské společnosti
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
                  Zaměstnanec společnosti spravující prostory spolku
                </div>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Sportovní manažer městské společnosti SPORT Krupka s.r.o. během období sporů spolku.
                  Spolek eviduje jeho účast na jednáních souvisejících se spory.
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
                  <strong>Poznámka:</strong> Tato stránka prezentuje výhradně právní pozici spolku Tělovýchovná jednota Krupka z.s.
                  ve sporech s městskou společností. Uvedené informace nejsou pravomocným soudním rozhodnutím.
                  Spolek respektuje presumpci neviny všech zúčastněných osob.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Kontext zaměstnání */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            💼 Kontext zaměstnaneckého poměru
          </h2>
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl border-2 border-indigo-300 p-4 md:p-8">
            <div className="flex items-start gap-4">
              <span className="text-4xl">💼</span>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold text-slate-900">{actor.employmentContext.title}</h3>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  {actor.employmentContext.description}
                </p>
              </div>
            </div>
            <div className="mt-4 p-4 bg-indigo-100 border-l-4 border-indigo-600 rounded">
              <p className="text-sm text-indigo-900">
                <strong>Poznámka:</strong> Zaměstnanci městských společností jednají v rámci svých pracovních povinností
                a pokynů nadřízených. Spolek poznamenává komplexnost situace při sporech mezi spolkem a zaměstnavatelem.
              </p>
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
              Spolek se ve své právní argumentaci opírá o následující právní předpisy:
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
