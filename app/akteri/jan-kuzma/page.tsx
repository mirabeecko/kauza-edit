
export default function JanKuzmaPage() {
  const actor = {
    name: 'Jan Kuzma',
    role: 'Starosta města Krupka a jednatel SPORT Krupka s.r.o.',
    organization: 'Město Krupka / SPORT Krupka s.r.o.',
    organizationIcon: '🏛️',
    status: 'city_official' as const,

    context: {
      description: 'Jan Kuzma působí jako starosta města Krupka a současně jako jednatel městské společnosti SPORT Krupka s.r.o., která spravuje sportovní prostory využívané spolkem Tělovýchovná jednota Krupka z.s. Spolek zastává právní názor o potřebě respektování autonomie spolku ze strany města a městských společností.',
    },

    keyEvents: [
      {
        date: '2023-2024',
        event: 'Výkon funkce starosty a jednatele',
        description: 'Výkon funkce starosty města Krupka a jednatele městské společnosti SPORT Krupka s.r.o. během období sporů spolku.',
      },
      {
        date: '19.12.2023',
        event: 'Výměna zámků na Pinčesárně',
        description: 'Společnost SPORT Krupka s.r.o. vyměnila zámky na objektu Pinčesárna. Spolek eviduje situaci jako omezenou dostupnost prostor pro legitimního předsedu.',
      },
      {
        date: '17.1.2024',
        event: 'Zaslání návrhu nájemní smlouvy',
        description: 'SPORT Krupka s.r.o. zaslala návrh nové nájemní smlouvy do datové schránky Tělovýchovná jednota Krupka z.s.',
      },
      {
        date: '19.1.2024',
        event: 'Druhá výměna zámků',
        description: 'Dva dny po zaslání návrhu smlouvy společnost SPORT Krupka s.r.o. opět vyměnila zámky na objektu.',
      },
      {
        date: '26.1.2024',
        event: 'Přijetí notifikace o vyloučení členů',
        description: 'Město Krupka obdrželo do datové schránky oficiální oznámení spolku o vyloučení některých členů podle § 239 NOZ.',
      },
      {
        date: 'Únor-Duben 2024',
        event: 'Pokračující spory o přístup',
        description: 'Spolek eviduje situace s omezeným přístupem k prostorům spravovaným společností SPORT Krupka s.r.o.',
      },
    ],

    dualRole: {
      title: 'Dvojrole: starosta + jednatel městské společnosti',
      description: 'Jan Kuzma zastává současně funkci starosty města Krupka a jednatele městské společnosti SPORT Krupka s.r.o. Spolek v této souvislosti poukazuje na otázku možného střetu zájmů při jednání s nezávislými spolky.',
      observations: [
        {
          title: 'Funkce starosty města',
          description: 'Jako starosta města má Jan Kuzma odpovědnost za prosazování veřejného zájmu a dodržování právních předpisů.',
        },
        {
          title: 'Funkce jednatele SPORT Krupka s.r.o.',
          description: 'Jako jednatel městské společnosti má statutární pravomoci včetně rozhodování o správě sportovních prostor.',
        },
        {
          title: 'Otázka střetu zájmů',
          description: 'Spolek zastává právní názor, že kombinace obou funkcí při jednání s nezávislými spolky může vytvářet otázky ohledně střetu zájmů.',
        },
      ],
    },

    spolekPosition: {
      title: 'Právní pozice spolku',
      description: 'Spolek zastává právní názor, že město Krupka a městské společnosti měly respektovat autonomii spolku podle § 20a NOZ. Spolek eviduje situace, které považuje za zásahy do své autonomie a přístupu k prostorům.',
      points: [
        {
          title: 'Autonomie spolku',
          description: 'Podle § 20a NOZ má spolek právo na autonomi. Spolek zastává názor, že město a městské společnosti měly toto právo respektovat při rozhodování o vyloučení členů.',
          legal: '§ 20a NOZ - Autonomie spolku',
        },
        {
          title: 'Přístup k prostorám po notifikaci',
          description: 'Spolek dne 26.1.2024 notifikoval město o vyloučení některých členů. Spolek eviduje situace, kdy přístup k prostorám spravovaným společností SPORT Krupka s.r.o. nebyl v souladu s očekáváním spolku ohledně respektování jeho rozhodnutí.',
        },
        {
          title: 'Načasování výměn zámků',
          description: 'Spolek eviduje, že k výměnám zámků došlo v kritických obdobích sporů (19.12.2023 a 19.1.2024). Spolek zastává názor, že tyto kroky omezily přístup legitimního předsedy k prostorům.',
        },
        {
          title: 'Koordinace mezi aktéry',
          description: 'Spolek eviduje situace, které vnímá jako koordinované jednání mezi různými aktéry v období sporů. Věc je předmětem právního sporu.',
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
        description: 'Spolek může vyloučit člena z důležitého důvodu. Rozhodnutí o vyloučení je vnitřní záležitostí spolku, kterou by měly třetí strany respektovat.',
      },
      {
        law: 'Zákon o střetu zájmů',
        title: 'Problematika střetu zájmů',
        description: 'Spolek poukazuje na otázku možného střetu zájmů při kombinaci funkcí veřejného činitele a statutárního orgánu společnosti při jednání s nezávislými subjekty.',
      },
    ],

    relatedLinks: [
      { label: 'Právní rámec a kontakt', href: '/pravni-ramec', icon: '⚖️' },
      { label: 'Téma: Role města Krupka', href: '/temata/role-mesta-krupka', icon: '🏛️' },
      { label: 'Jan Bokoč (místostarosta)', href: '/akteri/jan-bokoc', icon: '🏛️' },
      { label: 'Tomáš Syryčanský (SPORT Krupka)', href: '/akteri/tomas-syrycansky', icon: '💼' },
      { label: 'Miroslav Brožek (předseda spolku)', href: '/akteri/miroslav-brozek', icon: '⚖️' },
      { label: 'Otázka: Měly instituce zasáhnout dříve?', href: '/otazky/mely-instituce-zasahnout-drive', icon: '❓' },
      { label: 'Události', href: '/udalosti', icon: '📅' },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Legal Disclaimer Banner - Enhanced for highest public official */}
      <div className="bg-blue-900 text-white py-5">
        <div className="container mx-auto px-3 md:px-8 max-w-5xl">
          <p className="text-sm leading-relaxed">
            ⚖️ <strong>Důležité právní upozornění:</strong> Osoba je uvedena jako nejvyšší veřejný činitel města Krupka (starosta) a jednatel městské společnosti v souvislosti se spory spolku Tělovýchovná jednota Krupka z.s.
            Veškeré uvedené informace představují výhradně právní pozici spolku a nejsou pravomocným soudním rozhodnutím.
            Spolek plně respektuje presumpci neviny a prezentuje pouze svůj právní názor na sporné události a situace.
            Všechny zúčastněné osoby mají právo na vyjádření a opravu nepřesných informací.
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
                  Starosta města
                </span>
                <span className="px-3 py-1 bg-indigo-900/50 backdrop-blur rounded-full text-white text-sm font-bold">
                  Jednatel městské společnosti
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
                  Dvojrole během sporů spolku
                </div>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Starosta města + jednatel společnosti SPORT Krupka s.r.o. spravující prostory využívané spolkem.
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
                  <strong>Poznámka:</strong> Tato stránka prezentuje výhradně právní pozici spolku Tělovýchovná jednota Krupka z.s.
                  ve sporech týkajících se autonomie spolku a přístupu k prostorám. Uvedené informace
                  nejsou pravomocným soudním rozhodnutím. Spolek respektuje presumpci neviny všech zúčastněných osob.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dvojrole */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            💼 Dvojrole a otázka střetu zájmů
          </h2>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-300 p-4 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-4xl">💼</span>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold text-slate-900">{actor.dualRole.title}</h3>
                </div>
                <p className="text-slate-700 leading-relaxed mb-4">
                  {actor.dualRole.description}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {actor.dualRole.observations.map((obs, index) => (
                <div key={index} className="p-4 bg-white rounded-lg border-2 border-blue-200">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-bold text-slate-900">{obs.title}</h4>
                  </div>
                  <p className="text-sm text-slate-700">{obs.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-100 border-l-4 border-blue-600 rounded">
              <p className="text-sm text-blue-900">
                <strong>Poznámka:</strong> Hodnocení střetu zájmů je právní interpretací spolku.
                Všechny zúčastněné osoby jednaly v mezích svých pravomocí a mají právo na vyjádření k uvedeným skutečnostem.
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
                neviny všech zúčastněných osob a jejich právo na odlišný právní názor.
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
