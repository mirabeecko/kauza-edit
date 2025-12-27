import { showCityContent } from '@/lib/config';

export default function DetailniAnalyzaPage() {
  const allAnalyses = [
    {
      title: 'Právní analýza: Prekluzivní lhůta § 259 NOZ',
      category: 'Právní analýza',
      icon: '⚖️',
      color: 'blue',
      sections: [
        {
          subtitle: 'Zákonná úprava',
          content: 'Podle § 259 NOZ lze neplatnost rozhodnutí spolku vyslovit soudem na návrh člena spolku podaný do 3 měsíců ode dne, kdy se člen o rozhodnutí dozvěděl. Tato lhůta je PREKLUZIVNÍ - nelze ji prodloužit ani prominout.',
          evidence: ['§ 259 NOZ', 'NS ČR 29 Cdo 4627/2016'],
        },
        {
          subtitle: 'Aplikace na kauzu',
          content: 'Vyloučení Vaniše a Pivoňky: doručeno 28.11.2023 → lhůta uplynula 28.2.2024. Žaloba podána: 8.4.2024 = 39 DNÍ PO LHŮTĚ. Soud měl žalobu odmítnout, místo toho ji projednal.',
          evidence: ['Doručenka 28.11.2023', 'Žaloba ze dne 8.4.2024'],
        },
        {
          subtitle: 'Právní důsledky',
          content: 'Prekluzí práva zaniká hmotněprávní nárok. Soud by měl na prekluzivitu přihlédnout z úřední povinnosti. Projednání žaloby po prekluzivní lhůtě je vadou řízení.',
          evidence: ['NS ČR 29 Cdo 4627/2016', 'Judikatura k § 259 NOZ'],
        },
      ],
      conclusion: 'Krajský soud ignoroval základní právní princip prekluzivity. Žaloba měla být odmítnuta bez jednání.',
      severity: 'critical' as const,
    },
    {
      title: 'Právní analýza: § 6 a § 8 NOZ (Nepoctivý čin, zneužití práva)',
      category: 'Právní analýza',
      icon: '⚖️',
      color: 'blue',
      sections: [
        {
          subtitle: '§ 6 NOZ - Nikdo nesmí těžit z vlastního nepoctivého činu',
          content: 'Vaniš vytvořil škodu 653.659 Kč (vybíral příspěvky, ale neodváděl je; neplatil energie; nepředal pokladnu). Tímto nepoctivým jednáním se obohatil na úkor spolku.',
          evidence: ['§ 6 NOZ', 'Škoda 653.659 Kč', 'Výpověď Vaniše při výslechu'],
        },
        {
          subtitle: '§ 8 NOZ - Zneužití práva nepožívá ochrany',
          content: 'Vaniš odmítal plnit povinnosti člena (seznamy, příspěvky, energie) 3+ roky. Pak se dovolával práv člena (žaloba na neplatnost vyloučení). To je typické zneužití práva.',
          evidence: ['§ 8 NOZ', 'Opakované výzvy 2021-2023 ignorovány'],
        },
      ],
      conclusion: 'Aktéři, kteří vytvořili škodu 650k Kč a 3+ roky ignorovali povinnosti, se dovolávají práv člena bez plnění povinností.',
      severity: 'critical' as const,
    },
    {
      title: 'Finanční analýza: Struktura škody 2.045.635 Kč',
      category: 'Finanční analýza',
      icon: '💰',
      color: 'red',
      sections: [
        {
          subtitle: 'Zapřené oddílové příspěvky: 1.214.400 Kč (59,4%)',
          content: 'Vaniš: 518.400 Kč (60 členů × 2.400 Kč/rok × 3 roky), Vlach: 379.200 Kč (79 členů × 1.200 Kč/rok × 4 roky), Kulík: 316.800 Kč (40 členů × 3.600 Kč/rok). Příspěvky se stávají majetkem jednoty okamžikem předání (NS ČR 7 Tdo 102/2019).',
          evidence: ['PDF "TJ ODDÍLY 2021-2023"', 'NS ČR 7 Tdo 102/2019', 'Výpověď Vaniše'],
        },
        {
          subtitle: 'Neplacené energie: 299.921 Kč (14,7%)',
          content: 'Oddíl ST: 43.466 Kč (elektřina + plyn), Lyžařský oddíl: 256.455 Kč (elektřina). Zatímco oddíly vybíraly příspěvky, TJ Krupka musela platit jejich energie ze svého rozpočtu.',
          evidence: ['Faktury za energie', 'PDF "TJ ODDÍLY 2021-2023"'],
        },
        {
          subtitle: 'Nezaplacené členské příspěvky: 143.200 Kč (7,0%)',
          content: 'Vaniš: 48.000 Kč, Vlach: 63.200 Kč, Kulík: 32.000 Kč. Členské příspěvky 200 Kč/rok na osobu × počet let.',
          evidence: ['Stanovy spolku', 'Evidence neplacených příspěvků'],
        },
        {
          subtitle: 'Nepředané pokladny oddílů: 178.114 Kč (8,7%)',
          content: 'Vaniš: 43.793 Kč (přiznal, ale nepředal), Vlach: 132.523 Kč (přiznal při výslechu, nepředal), Kulík: 1.798 Kč (přiznal, nepředal).',
          evidence: ['Výpovědi při výslechu', 'Zápisy z jednání'],
        },
      ],
      conclusion: 'Největší položka jsou zapřené oddílové příspěvky (59%). Aktéři vybírali jménem spolku, ale neodváděli. Toto je zpronevěra § 206 TZ.',
      severity: 'critical' as const,
    },
    {
      title: 'Analýza časové osy: Koordinace převratu',
      category: 'Časová analýza',
      icon: '📊',
      color: 'purple',
      sections: [
        {
          subtitle: 'Prosinec 2023: Příprava',
          content: 'Koordinační schůzky Kuzma + Bokoč + Syryčanský + Vítů. Tlak na Miroslava Brožka, aby se konalo shromáždění do konce ledna. První výměna zámků 19.12.2023.',
          evidence: ['Poznámky Karel Rouček', 'Dokumentace výměny zámků'],
        },
        {
          subtitle: 'Leden 2024: Realizace',
          content: '17.1.: Zaslání návrhu nájemní smlouvy. 19.1. (2 DNY POTÉ!): Druhá výměna zámků. 25.1.: Legitimní shromáždění - ignorováno. 26.1.: Oficiální notifikace městu - ignorována.',
          evidence: ['Datová schránka', 'Zápis ze shromáždění 25.1.2024'],
        },
        {
          subtitle: '28.2.2024: Vypršení prekluzivní lhůty',
          content: 'Plán spočíval v tom, že vyloučení členové napadnou vyloučení do 3 měsíců (§ 259 NOZ). Prekluzivní lhůta vypršela 28.2.2024. Žaloba podána až 8.4.2024 = plán selhal.',
          evidence: ['§ 259 NOZ', 'Žaloba ze dne 8.4.2024'],
        },
      ],
      conclusion: 'Koordinovaný pokus o převrat s jasnou časovou osou. Výměna zámků 2 dny po zaslání smlouvy dokazuje předem připravený plán.',
      severity: 'critical' as const,
    },
    {
      title: 'Analýza střetu zájmů: Jan Kuzma',
      category: 'Systémová analýza',
      icon: '💼',
      color: 'orange',
      sections: [
        {
          subtitle: 'Dvojrole: Starosta + Jednatel',
          content: 'Jan Kuzma je současně starosta města Krupka (politická moc) a jednatel městské společnosti SPORT Krupka s.r.o. (obchodní zájmy). Tato kombinace je nebezpečná.',
          evidence: ['Veřejný rejstřík', 'Orgány města Krupka'],
        },
        {
          subtitle: 'Konflikt zájmů v kauze',
          content: 'Jako starosta: měl by prosazovat zájem veřejnosti a autonomii spolků. Jako jednatel: má zájem na kontrole prostor a výhodných nájemních smlouvách. Tyto zájmy jsou v konfliktu.',
          evidence: ['Zákon o střetu zájmů', 'Zákon o obcích § 83-84'],
        },
        {
          subtitle: 'Zneužití dvojrole',
          content: 'Využil politickou moc (město ignorovalo notifikace) + kontrolu prostor (SPORT Krupka vyměnila zámky) k pokusu o převzetí kontroly nad nezávislým spolkem.',
          evidence: ['Výměna zámků', 'Ignorování notifikací', 'Koordinační schůzky'],
        },
      ],
      conclusion: 'Dvojrole starosta + jednatel městské společnosti vytváří systémový problém umožňující zneužití pravomoci.',
      severity: 'critical' as const,
    },
    {
      title: 'Analýza vzorců: Systematické ignorování',
      category: 'Behaviorální analýza',
      icon: '🔍',
      color: 'yellow',
      sections: [
        {
          subtitle: 'Vzorec 1: Ignorování výzev (3+ roky)',
          content: 'Opakované výzvy k předání seznamů členů, zaplacení příspěvků a energií systematicky ignorovány po dobu 3+ let. Vytvořilo prostor pro další porušení.',
          evidence: ['Emailová komunikace 2021-2023', 'Zápisy z jednání'],
        },
        {
          subtitle: 'Vzorec 2: Ignorování legitimních orgánů',
          content: '25.1.2024: Legitimní shromáždění skutečných členů - ignorováno. 26.1.2024: Oficiální notifikace městu - ignorována. Systematický vzorec.',
          evidence: ['Zápis ze shromáždění 25.1.2024', 'Datová schránka města'],
        },
        {
          subtitle: 'Vzorec 3: Ignorování právních povinností',
          content: 'Nepředání seznamů (dohoda 24.8.2021), neplacení příspěvků (stanovy), neplacení energií (dohoda). Žádná právní povinnost nebyla splněna.',
          evidence: ['Zápis 24.8.2021', 'Stanovy', 'Smlouvy o nájmu'],
        },
      ],
      conclusion: 'Systematické ignorování je vzorec chování všech problémových aktérů. Ukazuje na koordinovanou strategii, nikoliv náhodné selhání.',
      severity: 'high' as const,
    },
  ];

  // Filter out city-related analyses
  const cityRelatedAnalysisIndexes = [3, 4]; // Koordinace převratu, Střet zájmů Kuzma
  const analyses = showCityContent()
    ? allAnalyses
    : allAnalyses.filter((_, index) => !cityRelatedAnalysisIndexes.includes(index));

  const allKeyFindings = [
    {
      finding: 'Koordinovaný pokus o převrat',
      description: 'Město Krupka + SPORT Krupka + vyloučení členové = koordinovaný pokus o převzetí kontroly nad spolkem',
      impact: 'critical' as const,
      actors: 5,
    },
    {
      finding: 'Žaloba 39 dní po prekluzivní lhůtě',
      description: 'Krajský soud projednal žalobu, která byla podána PO UPLYNUTÍ zákonné lhůty',
      impact: 'critical' as const,
      actors: 3,
    },
    {
      finding: 'Ignorování § 6 a § 8 NOZ soudem',
      description: 'Soud legitimizoval nepoctivé jednání aktérů, kteří vytvořili škodu 650k Kč',
      impact: 'critical' as const,
      actors: 3,
    },
    {
      finding: 'Střet zájmů: Kuzma starosta + jednatel',
      description: 'Nebezpečná koncentrace politické moci a obchodních zájmů',
      impact: 'critical' as const,
      actors: 1,
    },
    {
      finding: 'Systematické ignorování 3+ roky',
      description: 'Vzorec opakovaného ignorování výzev, dohod a právních povinností',
      impact: 'high' as const,
      actors: 6,
    },
  ];

  // Filter out city-related key findings
  const cityRelatedFindingIndexes = [0, 3]; // Koordinovaný pokus, Střet zájmů Kuzma
  const keyFindings = showCityContent()
    ? allKeyFindings
    : allKeyFindings.filter((_, index) => !cityRelatedFindingIndexes.includes(index));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-700 via-indigo-800 to-purple-900 py-8 md:py-16 border-b border-indigo-600">
        <div className="container mx-auto px-3 md:px-8 max-w-6xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
            🔬 Detailní analýza
          </h1>
          <p className="text-xl text-indigo-100 leading-relaxed mb-6">
            Hloubková analýza kauzy Tělovýchovná jednota Krupka z.s. Právní rozbor, finanční struktura,
            časová osa, systémové problémy a identifikované vzorce chování.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-white/20 backdrop-blur rounded-full text-white text-sm font-medium">
              ⚖️ Právní analýza
            </span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur rounded-full text-white text-sm font-medium">
              💰 Finanční analýza
            </span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur rounded-full text-white text-sm font-medium">
              📊 Časová analýza
            </span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur rounded-full text-white text-sm font-medium">
              🔍 Vzorce chování
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-8 py-6 md:py-12 max-w-6xl">
        {/* Klíčová zjištění */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            🎯 Klíčová zjištění analýzy
          </h2>
          <div className="space-y-4">
            {keyFindings.map((finding, index) => {
              const impactColors = {
                critical: 'border-red-300 bg-red-50',
                high: 'border-orange-300 bg-orange-50',
              };
              const impactLabels = {
                critical: '🔴 Kritický dopad',
                high: '🟠 Vysoký dopad',
              };

              return (
                <div key={index} className={`p-4 md:p-6 rounded-xl ${impactColors[finding.impact]} border-2 shadow-md`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-slate-900">{finding.finding}</h3>
                        <span className="px-2 py-1 bg-white/80 rounded text-xs font-bold text-slate-700">
                          {impactLabels[finding.impact]}
                        </span>
                      </div>
                      <p className="text-slate-700 mb-2">{finding.description}</p>
                      <div className="text-sm text-slate-600">
                        <span className="font-semibold">Zapojení aktérů:</span> {finding.actors}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Detailní analýzy */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            📋 Detailní rozbory
          </h2>
          <div className="space-y-8">
            {analyses.map((analysis, index) => {
              const colorClasses = {
                blue: 'from-blue-700 to-indigo-800 border-blue-600',
                red: 'from-red-700 to-red-900 border-red-600',
                purple: 'from-purple-700 to-indigo-900 border-purple-600',
                orange: 'from-orange-700 to-red-800 border-orange-600',
                yellow: 'from-yellow-600 to-orange-700 border-yellow-600',
              };

              return (
                <div key={index} className="bg-white rounded-xl shadow-xl overflow-hidden">
                  {/* Header */}
                  <div className={`bg-gradient-to-br ${colorClasses[analysis.color as keyof typeof colorClasses]} p-4 md:p-4 md:p-6 border-b-4`}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-4xl">{analysis.icon}</span>
                      <div className="flex-1">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-white text-xs font-bold">
                          {analysis.category}
                        </span>
                        <h3 className="text-2xl font-black text-white mt-2">
                          {analysis.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Sections */}
                  <div className="p-6">
                    <div className="space-y-6">
                      {analysis.sections.map((section, idx) => (
                        <div key={idx} className="pb-6 border-b border-slate-200 last:border-0">
                          <h4 className="text-lg font-bold text-slate-900 mb-3">
                            {section.subtitle}
                          </h4>
                          <p className="text-slate-700 leading-relaxed mb-4">
                            {section.content}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="text-xs font-semibold text-slate-600">📎 Důkazy:</span>
                            {section.evidence.map((ev, evIdx) => (
                              <span key={evIdx} className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-700">
                                {ev}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Conclusion */}
                    <div className="mt-6 p-5 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg border-2 border-slate-300">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">💡</span>
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-900 mb-2">Závěr analýzy:</h4>
                          <p className="text-slate-700 font-semibold">{analysis.conclusion}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Metodologie */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            📐 Metodologie analýzy
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">🔍 Zdroje dat</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Oficiální dokumenty: zápisy ze shromáždění, stanovy, smlouvy, dohody</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Právní dokumenty: žaloby, rozsudky, notifikace, doručenky</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Finanční dokumenty: faktury, výkazy, PDF "TJ ODDÍLY 2021-2023"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Výpovědi: svědecké výpovědi, protokoly z výslechů</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Judikatura: rozhodnutí Nejvyššího soudu ČR relevantní pro kauzu</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">⚖️ Právní rámec</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-bold text-slate-900 mb-2">Hmotné právo</h4>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• § 214-302 NOZ (Spolky)</li>
                      <li>• § 259 NOZ (Neplatnost rozhodnutí)</li>
                      <li>• § 6, § 8 NOZ (Základní zásady)</li>
                      <li>• § 206 TZ (Zpronevěra)</li>
                      <li>• § 207, § 208 TZ (Majetkové delikty)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-bold text-slate-900 mb-2">Judikatura NS ČR</h4>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• 7 Tdo 102/2019 (Majetek jednoty)</li>
                      <li>• 8 Tdo 1032/2016 (Přisvojení věci)</li>
                      <li>• 11 Tdo 1492/2015 (Odpovědnost funkcionářů)</li>
                      <li>• 29 Cdo 4627/2016 (Prekluzivní lhůta)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">🎯 Analytické přístupy</h3>
                <div className="space-y-2 text-slate-700">
                  <p>
                    <strong>Kauzální analýza:</strong> Identifikace příčin a následků, kauzálních řetězců
                  </p>
                  <p>
                    <strong>Komparativní analýza:</strong> Srovnání slíbené × skutečné chování
                  </p>
                  <p>
                    <strong>Temporální analýza:</strong> Časová osa událostí, identifikace vzorců
                  </p>
                  <p>
                    <strong>Behaviorální analýza:</strong> Vzorce chování aktérů, systematické problémy
                  </p>
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
          <div className="grid md:grid-cols-3 gap-4">
            <a href="/souvislosti" className="block p-5 bg-white rounded-xl shadow hover:shadow-lg transition border-2 border-purple-300">
              <div className="text-3xl mb-2">🔗</div>
              <div className="font-bold text-slate-900 mb-1">Souvislosti</div>
              <div className="text-sm text-slate-600">Propojení mezi aktéry a událostmi</div>
            </a>
            <a href="/pointy" className="block p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
              <div className="text-3xl mb-2">💡</div>
              <div className="font-bold text-slate-900 mb-1">Pointy</div>
              <div className="text-sm text-slate-600">Shrnutí kauzálních řetězců</div>
            </a>
            <a href="/cisla" className="block p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
              <div className="text-3xl mb-2">💰</div>
              <div className="font-bold text-slate-900 mb-1">Čísla</div>
              <div className="text-sm text-slate-600">Finanční přehled</div>
            </a>
            <a href="/udalosti" className="block p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
              <div className="text-3xl mb-2">📅</div>
              <div className="font-bold text-slate-900 mb-1">Události</div>
              <div className="text-sm text-slate-600">Kompletní časová osa</div>
            </a>
            <a href="/akteri" className="block p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
              <div className="text-3xl mb-2">👥</div>
              <div className="font-bold text-slate-900 mb-1">Aktéři</div>
              <div className="text-sm text-slate-600">Osoby zapojené v kauze</div>
            </a>
            <a href="/mesto-krupka" className="block p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
              <div className="text-3xl mb-2">🏛️</div>
              <div className="font-bold text-slate-900 mb-1">Město Krupka</div>
              <div className="text-sm text-slate-600">Role města v kauze</div>
            </a>
          </div>
        </section>

        {/* Navigace */}
        <div className="flex items-center justify-center pt-8">
          <a
            href="/"
            className="flex items-center gap-2 px-6 py-3 bg-slate-200 hover:bg-slate-300 rounded-lg font-bold text-slate-900 transition"
          >
            <span>←</span>
            <span>Zpět na hlavní stránku</span>
          </a>
        </div>
      </div>
    </div>
  );
}
