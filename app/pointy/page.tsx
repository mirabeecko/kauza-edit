import InsightCard from '@/components/InsightCard';

export default function PointyPage() {
  const insights = [
    {
      slug: 'evidence-zaklad-kontroly',
      title: 'Evidence jako základ kontroly',
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
      summaryLine: 'Předsedové oddílů vybírali členské příspěvky, ale neodváděli je spolku',
      whatPromised: 'Členské příspěvky 200 Kč/rok/člen patří spolku (stanovy)',
      whatHappened: 'Vaniš přiznal při výslechu, že vybíral příspěvky jménem spolku, ale neodvedl je (cca 60 × 2.400 Kč × 3 roky = 432.000 Kč)',
      whatFollowed: 'Spolek nedostal peníze, které členové zaplatili. Vznikla finanční škoda cca 500.000 Kč.',
      keyPoint: 'Vybírání příspěvků bez předání spolku je zpronevěra (§ 206 TZ). Judikatura NS ČR 5 Tdo 663/2015 potvrzuje identický případ.',
      relatedNodes: 10,
      evidenceCount: 15,
    },
    {
      slug: 'zaloba-po-lhute',
      title: 'Žaloba po prekluzivní lhůtě',
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
      summaryLine: 'Krajský soud se nezabýval porušením § 6 a § 8 NOZ',
      whatPromised: '§ 6 NOZ: Nikdo nesmí těžit z vlastního nepoctivého činu. § 8 NOZ: Zneužití práva nepožívá ochrany.',
      whatHappened: 'Žalobci vytvořili škodu 2 mil. Kč, obohatili se na úkor spolku, podali žalobu po lhůtě',
      whatFollowed: 'Soud rozhodl v jejich prospěch, aniž by posoudil jejich nepoctivost a zneužití práva',
      keyPoint: 'Soud legitimizoval nepoctivé jednání ignorováním základních zásad občanského práva. Riziko precedentu pro další případy.',
      relatedNodes: 12,
      evidenceCount: 20,
    },
    {
      slug: 'energie-neplacene',
      title: 'Neplacení provozních nákladů',
      summaryLine: 'Oddíly používaly prostory, ale neplatily za energie',
      whatPromised: 'Oddíly měly hradit náklady na provoz (světlo, teplo, voda) dle dohody',
      whatHappened: 'Oddíl stolního tenisu nezaplatil energie za 3+ roky (cca 140.000 Kč/rok × 4 roky = 560.000 Kč)',
      whatFollowed: 'Spolek musel platit energie ze svého rozpočtu, čímž se dostal do finančních potíží',
      keyPoint: 'Používání prostor bez úhrady nákladů je neoprávněné obohacení. Spolek za oddíly platil více než půl milionu Kč.',
      relatedNodes: 8,
      evidenceCount: 10,
    },
    {
      slug: 'legitimita-funkci',
      title: 'Nelegitimita funkcí',
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
    <div className="container mx-auto px-8 py-12 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Pointy
        </h1>
        <p className="text-xl text-slate-600">
          Shrnutí složitých kauzálních řetězců. Každá pointa je podložena důkazy.
        </p>
      </div>

      <div className="mb-8 p-6 bg-purple-50 rounded-lg border border-purple-200">
        <h3 className="text-lg font-bold text-purple-900 mb-2">
          💡 Co je Insight Card (Pointa)?
        </h3>
        <div className="text-sm text-purple-900 space-y-2">
          <p>
            <strong>Pointa</strong> je graficky výrazné shrnutí složitého kauzálního řetězce.
            Používá se pro vysvětlení komplikovaných situací, které by v běžném textu byly
            nepřehledné.
          </p>
          <p className="mt-3">
            <strong>Struktura pointy:</strong>
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Název (max 6 slov)</li>
            <li>Summary line (1 věta)</li>
            <li>Co bylo slíbeno</li>
            <li>Co se stalo</li>
            <li>Jaký krok následoval</li>
            <li><strong>POINTA</strong> (1–2 věty, faktická)</li>
            <li>Odkazy na zdrojové uzly a citace</li>
          </ul>
          <p className="mt-3 font-semibold">
            ⚠️ Pointa nikdy neexistuje bez důkazů – vždy jsou uvedeny odkazy.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {insights.map(insight => (
          <InsightCard key={insight.slug} {...insight} />
        ))}
      </div>

      <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
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
