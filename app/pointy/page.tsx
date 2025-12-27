import InsightCard from '@/components/InsightCard';

export default function PointyPage() {
  const insights = [
    {
      slug: 'evidence-zaklad-kontroly',
      title: 'Evidence jako základ kontroly',
      icon: '📊',
      summaryLine: 'Bez seznamů členů nelze kontrolovat finance ani rozhodování',
      whatPromised: 'Předsedové oddílů přislíbili předat aktualizované seznamy členů (24.8.2021)',
      whatHappened: 'Vaniš, Vlach, Kulík seznamy NIKDY nepředali přes opakované výzvy (3+ roky)',
      whatFollowed: 'Spolek nemohl ověřit počet členů, legitimitu rozhodování ani vymáhat příspěvky',
      keyPoint: 'Záměrné nepředání evidence umožnilo vybírat peníze bez kontroly a znemožnilo svolat legitimní orgány spolku.',
      relatedNodes: 8,
      evidenceCount: 12,
    },
    {
      slug: 'vybirani-bez-odvodu',
      title: 'Vybírání příspěvků bez odvodu',
      icon: '💸',
      summaryLine: 'Předsedové oddílů vybírali oddílové příspěvky, ale neodváděli je spolku',
      whatPromised: 'Oddílové příspěvky patří spolku na jeho provoz (dohoda 24.8.2021)',
      whatHappened: 'Vaniš vybíral 2.400 Kč/rok/člen (60 členů × 3 roky = 518.400 Kč), Vlach 1.200 Kč/rok/člen (79 členů × 4 roky = 379.200 Kč), Kulík 3.600 Kč/rok/člen (40 členů)',
      whatFollowed: 'Spolek nedostal peníze, které členové zaplatili. Celková škoda všech oddílů: 2.046.000 Kč (dle PDF "TJ ODDÍLY 2021-2023").',
      keyPoint: 'Vybírání příspěvků bez předání spolku je zpronevěra (§ 206 TZ). Příspěvky se stávají majetkem jednoty okamžikem předání (NS ČR 7 Tdo 102/2019).',
      relatedNodes: 10,
      evidenceCount: 15,
    },
    {
      slug: 'zaloba-po-lhute',
      title: 'Žaloba po prekluzivní lhůtě',
      icon: '⏱️',
      summaryLine: 'Vaniš a Pivoňka podali žalobu 39 dní po uplynutí zákonné lhůty',
      whatPromised: 'Zákon (§ 259 NOZ) stanoví 3měsíční lhůtu pro žalobu na vyslovení neplatnosti rozhodnutí',
      whatHappened: 'Vyloučení doručeno 28.11.2023 → lhůta uplynula 28.2.2024 → žaloba podána až 8.4.2024',
      whatFollowed: 'Krajský soud žalobu projednal, přestože byla podána PO LHŮTĚ. Ignoroval prekluzivitu.',
      keyPoint: 'Prekluzivní lhůta nelze prominout ani prodloužit (NS ČR 29 Cdo 4627/2016). Žaloba měla být odmítnuta.',
      relatedNodes: 6,
      evidenceCount: 8,
    },
    {
      slug: 'soud-ignoroval-nepoctivost',
      title: 'Soud ignoroval nepoctivé jednání žalobců',
      icon: '⚖️',
      summaryLine: 'Krajský soud se nezabýval porušením § 6 a § 8 NOZ',
      whatPromised: '§ 6 NOZ: Nikdo nesmí těžit z vlastního nepoctivého činu. § 8 NOZ: Zneužití práva nepožívá ochrany.',
      whatHappened: 'Žalobci vytvořili škodu 2,05 mil. Kč, obohatili se na úkor spolku, podali žalobu po lhůtě',
      whatFollowed: 'Soud rozhodl v jejich prospěch, aniž by posoudil jejich nepoctivost a zneužití práva',
      keyPoint: 'Soud legitimizoval nepoctivé jednání ignorováním základních zásad občanského práva. Riziko precedentu pro další případy.',
      relatedNodes: 12,
      evidenceCount: 20,
    },
    {
      slug: 'energie-neplacene',
      title: 'Neplacení provozních nákladů',
      icon: '⚡',
      summaryLine: 'Oddíly používaly prostory, ale neplatily za energie',
      whatPromised: 'Oddíly měly hradit náklady na provoz (světlo, teplo, voda) dle dohody',
      whatHappened: 'Oddíl stolního tenisu: 43.466 Kč (elektřina 10.415 + plyn 33.051), Lyžařský oddíl: 256.455 Kč (elektřina), Karate: 0 Kč',
      whatFollowed: 'Spolek musel platit energie ze svého rozpočtu (celkem 299.921 Kč), čímž se dostal do finančních potíží',
      keyPoint: 'Používání prostor bez úhrady nákladů je neoprávněné obohacení. Dle PDF "TJ ODDÍLY 2021-2023" spolek zaplatil 300k Kč za oddíly.',
      relatedNodes: 8,
      evidenceCount: 10,
    },
    {
      slug: 'legitimita-funkci',
      title: 'Nelegitimita funkcí',
      icon: '🚫',
      summaryLine: 'Vaniš nikdy nedoložil, že byl legitimně zvolen předsedou oddílu',
      whatPromised: 'Předseda oddílu musí být zvolen členskou schůzí oddílu (stanovy)',
      whatHappened: 'Vaniš odmítl doložit zápis ze schůze o jeho zvolení. Žádný zápis nebyl nalezen.',
      whatFollowed: 'Na schůzi 19.12.2023 byl zvolen nový legitimní předseda oddílu',
      keyPoint: 'Bez dokladu o zvolení není předseda legitimní. Všechna jeho rozhodnutí mohou být zpochybněna.',
      relatedNodes: 6,
      evidenceCount: 5,
    },
  ];

  return (
    <div className="container mx-auto px-3 md:px-8 py-6 md:py-12 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Pointy
        </h1>
        <p className="text-xl text-slate-600">
          Shrnutí složitých kauzálních řetězců. Každá pointa je podložena důkazy.
        </p>
      </div>

      {/* Vyhodnocení všech point */}
      <div className="mb-12 p-6 md:p-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl border-2 border-red-300 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-4xl">🎯</div>
          <h2 className="text-2xl md:text-3xl font-bold text-red-900">
            Celkové vyhodnocení
          </h2>
        </div>

        <div className="space-y-4 text-red-900">
          <p className="text-lg leading-relaxed">
            Analýza šesti klíčových point odhaluje <strong>systematický vzorec jednání</strong>,
            který vede ke stejnému závěru z různých úhlů pohledu:
          </p>

          <div className="grid md:grid-cols-3 gap-4 my-6">
            <div className="p-4 bg-white rounded-lg border-2 border-red-200">
              <div className="text-3xl mb-2">📊</div>
              <div className="font-bold text-lg mb-1">Evidence</div>
              <div className="text-sm">Záměrné nepředání umožnilo nekontrolované vybírání příspěvků</div>
            </div>
            <div className="p-4 bg-white rounded-lg border-2 border-red-200">
              <div className="text-3xl mb-2">💸</div>
              <div className="font-bold text-lg mb-1">Finance</div>
              <div className="text-sm">2,05 mil. Kč vybráno, neodevzdáno + 300k Kč neuhrazené náklady</div>
            </div>
            <div className="p-4 bg-white rounded-lg border-2 border-red-200">
              <div className="text-3xl mb-2">⚖️</div>
              <div className="font-bold text-lg mb-1">Soudní řízení</div>
              <div className="text-sm">Žaloba po lhůtě + ignorování nepoctivosti žalobců</div>
            </div>
          </div>

          <div className="p-5 bg-red-100 border-l-4 border-red-600 rounded">
            <p className="font-bold text-lg mb-2">⚠️ Klíčový závěr:</p>
            <p className="leading-relaxed">
              Předsedové oddílů <strong>záměrně vytvořili situaci</strong>, ve které mohli:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Vybírat příspěvky bez kontroly (nepředání seznamů členů)</li>
              <li>Neodevzdávat peníze spolku (2+ miliony Kč)</li>
              <li>Neplatit provozní náklady (300k Kč)</li>
              <li>Znemožnit legitimní orgány spolku (bez seznamů nelze ověřit členství)</li>
            </ul>
          </div>

          <div className="p-5 bg-orange-100 border-l-4 border-orange-600 rounded">
            <p className="font-bold text-lg mb-2">⚖️ Právní kontext:</p>
            <p className="leading-relaxed">
              Jednání splňuje znaky <strong>zpronevěry</strong> (§ 206 TZ) a <strong>neoprávněného obohacení</strong>.
              Krajský soud v rozsudku ignoroval tyto skutečnosti, porušil základní zásady občanského práva
              (§ 6, § 8 NOZ) a projednal žalobu podanou <strong>39 dní po prekluzivní lhůtě</strong>.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t-2 border-red-300">
            <p className="text-base">
              <strong>Metodika:</strong> Všech 6 point je podloženo celkem <strong>70 důkazy</strong>
              a navazuje na <strong>50 souvisejících uzlů</strong> v síti událostí. Žádná pointa
              neexistuje bez dokladů.
            </p>
          </div>
        </div>
      </div>

      {/* Karty s pointami */}
      <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-12">
        {insights.map(insight => (
          <InsightCard key={insight.slug} {...insight} />
        ))}
      </div>

      <div className="p-4 md:p-6 bg-slate-50 rounded-lg border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-2">
          🔗 Související sekce
        </h3>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <a href="/otazky" className="block p-4 bg-white rounded border border-slate-200 hover:border-blue-400 transition">
            <div className="text-2xl mb-2">❓</div>
            <div className="font-semibold text-slate-900 mb-1">Otázky</div>
            <div className="text-xs text-slate-600">Co víme / Co nevíme</div>
          </a>
          <a href="/udalosti" className="block p-4 bg-white rounded border border-slate-200 hover:border-blue-400 transition">
            <div className="text-2xl mb-2">📅</div>
            <div className="font-semibold text-slate-900 mb-1">Události</div>
            <div className="text-xs text-slate-600">Časová osa kauzy</div>
          </a>
          <a href="/dokumenty" className="block p-4 bg-white rounded border border-slate-200 hover:border-blue-400 transition">
            <div className="text-2xl mb-2">📄</div>
            <div className="font-semibold text-slate-900 mb-1">Dokumenty</div>
            <div className="text-xs text-slate-600">Důkazy a citace</div>
          </a>
        </div>
      </div>
    </div>
  );
}
