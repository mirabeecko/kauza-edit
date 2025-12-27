export default function JsouRozhodnutiPlatnaPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Legal Disclaimer Banner */}
      <div className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-3 md:px-8 max-w-4xl">
          <p className="text-sm leading-relaxed">
            ⚖️ <strong>Důležité právní upozornění:</strong> Tato stránka prezentuje právní pozici spolku Tělovýchovná jednota Krupka z.s. ohledně platnosti rozhodnutí. Uvedené informace nejsou pravomocným soudním rozhodnutím. Platnost rozhodnutí je výlučně v kompetenci příslušných soudů.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-8 py-6 md:py-12 max-w-4xl">
        <nav className="text-sm text-slate-600 mb-6">
        <a href="/otazky" className="hover:text-blue-600">← Všechny otázky</a>
        <span className="mx-2">/</span>
        <span>Schůze</span>
      </nav>

      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold mb-4">
          🔥 Klíčová otázka
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Jsou rozhodnutí platná?
        </h1>
      </div>

      <section className="mb-8 p-4 md:p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
        <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
          <span className="text-2xl mr-2">💡</span>
          Proč je otázka důležitá
        </h2>
        <div className="text-blue-900 space-y-2">
          <p>
            Platnost rozhodnutí určuje, zda má rozhodnutí právní účinky. Neplatné rozhodnutí
            = jako by nikdy nebylo přijato.
          </p>
          <p className="mt-3">
            <strong>Rozhodnutí je neplatné, pokud:</strong>
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Bylo přijato nelegitimní schůzí</li>
            <li>Bylo přijato neoprávněnými osobami</li>
            <li>Porušuje stanovy nebo zákon</li>
            <li>Bylo přijato po prekluzivní lhůtě</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">📋</span>
          Rozhodnutí považovaná spolkem za platná
        </h2>
        <div className="space-y-4">
          <FactBox
            status="soud"
            title="Zvolení Miroslava Brožka předsedou (24.8.2021)"
            evidence={['Zápis ze shromáždění', 'Rozhodčí komise ČAST', 'Krajský soud']}
          >
            <p>
              <strong>Soudní potvrzení:</strong> Legitimita zvolení byla potvrzena:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Rozhodčí komisí ČAST (2022)</li>
              <li>Krajským soudem v Ústí nad Labem (2024)</li>
              <li>Funkční období předsedy: 2021-2026</li>
            </ul>
          </FactBox>

          <FactBox
            status="soud"
            title="Vyloučení Vaniše a Pivoňky (28.11.2023)"
            evidence={['Doručenky', 'Rozhodčí komise ČAST', 'Předžalobní výzvy']}
          >
            <p>
              <strong>Soudní potvrzení:</strong> Vyloučení bylo potvrzeno Rozhodčí komisí ČAST.
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Opakované výzvy spolku (2021-2023)</li>
              <li>Předžalobní výzvy (11/2023)</li>
              <li>Vyloučení podle § 13 Stanov Tělovýchovná jednota Krupka z.s.</li>
              <li>Potvrzeno Rozhodčí komisí ČAST</li>
            </ul>
          </FactBox>

          <FactBox
            status="spolek"
            title="Rozhodnutí shromáždění 25.1.2024"
            evidence={['Zápis ze shromáždění', 'Prezenční listina']}
          >
            <p>
              <strong>Právní pozice spolku:</strong> Shromáždění bylo svoláno v souladu se stanovami.
            </p>
            <p className="mt-2">
              Spolek eviduje spory o uznání tohoto shromáždění třetími stranami.
            </p>
          </FactBox>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">⚠️</span>
          Rozhodnutí považovaná spolkem za neplatná
        </h2>
        <div className="space-y-4">
          <FactBox
            status="spolek"
            title="Rozhodnutí schůzí svolaných vyloučenými členy po 28.11.2023"
            evidence={['Doručenka vyloučení', 'Rozhodčí komise ČAST', '§ 258 NOZ']}
          >
            <p>
              <strong>Právní pozice spolku:</strong> Spolek považuje rozhodnutí přijatá po 28.11.2023 osobami, které považuje za vyloučené, za neplatná.
            </p>
            <p className="mt-2">
              Podle právní pozice spolku nemají vyloučení členové právo svolávat schůze ani přijímat rozhodnutí jménem spolku.
            </p>
            <p className="mt-2 text-xs italic">
              Platnost rozhodnutí je výlučně v kompetenci příslušných soudů.
            </p>
          </FactBox>

          <FactBox
            status="spor"
            title="Spor o legitimitu shromáždění svolaných vyloučenými členy"
            evidence={['Korespondence', 'Zápisy', 'Datová schránka']}
          >
            <p>
              <strong>Právní pozice spolku:</strong> Shromáždění svolaná vyloučenými členy po 28.11.2023 považuje spolek za neplatná.
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Spolek eviduje, že schůze byly svolány osobami, které považuje za vyloučené</li>
              <li>Spolek eviduje spory o legitimitu těchto shromáždění</li>
              <li>Právní posouzení je předmětem probíhajícího sporu</li>
            </ul>
            <p className="mt-2 text-xs italic">
              Konečné právní posouzení platnosti rozhodnutí je výlučně v kompetenci příslušných soudů.
            </p>
          </FactBox>

          <FactBox
            status="spor"
            title="Spor o prekluzivní lhůtu pro napadení vyloučení"
            evidence={['§ 259 NOZ', 'NS ČR 29 Cdo 4627/2016']}
          >
            <p>
              <strong>Právní pozice spolku:</strong> Spolek zastává právní názor, že žaloba proti vyloučení byla podána po uplynutí prekluzivní lhůty.
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Spolek eviduje doručení vyloučení: 28.11.2023</li>
              <li>Prekluzivní lhůta § 259 NOZ: 3 měsíce</li>
              <li>Spolek eviduje podání žaloby: 8.4.2024</li>
            </ul>
            <p className="mt-2 text-xs italic">
              Krajský soud v Ústí nad Labem rozhodl jinak. Konečné právní posouzení je v kompetenci odvolacích soudů.
              Všechna soudní rozhodnutí si zasluhují respekt.
            </p>
          </FactBox>
        </div>
      </section>

      <section className="mb-8 p-4 md:p-6 bg-slate-50 rounded-lg border-2 border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-3">
          ⚖️ Právní kontext
        </h2>
        <div className="space-y-3 text-slate-700">
          <div>
            <h3 className="font-semibold mb-1">§ 259 NOZ - Prekluzivní lhůta</h3>
            <p className="text-sm">
              Neplatnost rozhodnutí lze napadnout do 3 měsíců. Tato lhůta je prekluzivní
              (nelze prodloužit ani prominout). Po jejím uplynutí právo zaniká.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">§ 258 NOZ - Důsledky vyloučení</h3>
            <p className="text-sm">
              Vyloučením členství zaniká. Osoba nemá práva člena ani nemůže jednat jménem spolku.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">NS ČR 29 Cdo 4627/2016</h3>
            <p className="text-sm">
              Judikatura k prekluzivní lhůtě § 259 NOZ. Soud má na prekluzivitu přihlédnout
              z úřední povinnosti.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          🔗 Související uzly
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <RelatedNode type="event" title="24.8.2021 - Zvolení Brožka" href="/udalosti" />
          <RelatedNode type="event" title="28.11.2023 - Vyloučení" href="/udalosti" />
          <RelatedNode type="question" title="Byly schůze legitimní?" href="/otazky/byly-schuze-legitimni" />
          <RelatedNode type="person" title="Miroslav Brožek" href="/akteri/miroslav-brozek" />
          <RelatedNode type="document" title="Rozhodčí komise ČAST" href="/cast" />
          <RelatedNode type="insight" title="Prekluzivní lhůta" href="/detailni-analyza" />
        </div>
      </section>

      <section className="p-4 md:p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg border-2 border-orange-300">
        <h3 className="text-xl font-bold text-orange-900 mb-4">
          📌 Shrnutí právní pozice spolku
        </h3>
        <div className="text-orange-900 space-y-3 text-sm">
          <p>
            <strong>Soudní potvrzení:</strong> Zvolení předsedy Brožka (2021) a vyloučení Vaniše/Pivoňky (2023) byly potvrzeny Rozhodčí komisí ČAST a Krajským soudem v Ústí nad Labem.
          </p>
          <p>
            <strong>Spory:</strong> Spolek eviduje spory o platnost rozhodnutí přijatých osobami, které považuje za vyloučené. Eviduje také spor o prekluzivní lhůtu pro napadení vyloučení.
          </p>
          <p className="mt-3 pt-3 border-t-2 border-orange-300">
            <strong>Upozornění:</strong> Konečné právní posouzení platnosti rozhodnutí je výlučně v kompetenci příslušných soudů.
            Všechna soudní rozhodnutí si zasluhují respekt.
          </p>
        </div>
      </section>

      <section className="mt-8 p-4 md:p-6 bg-slate-50 border-2 border-slate-200 rounded-lg">
        <h3 className="text-lg font-bold text-slate-900 mb-2">
          ⚖️ Námitky k uvedeným údajům
        </h3>
        <p className="text-sm text-slate-700">
          Pokud máte podloženou námitku k jakémukoli údaji na této stránce, kontaktujte nás prostřednictvím stránky{' '}
          <a href="/pravni-ramec" className="text-blue-600 hover:underline font-semibold">
            Právní rámec a kontakt
          </a>.
        </p>
      </section>
      </div>
    </div>
  );
}

interface FactBoxProps {
  status: 'spolek' | 'soud' | 'spor';
  title: string;
  evidence: string[];
  children: React.ReactNode;
}

function FactBox({ status, title, evidence, children }: FactBoxProps) {
  const statusColors = {
    spolek: 'bg-blue-50 border-blue-300',
    soud: 'bg-green-50 border-green-300',
    spor: 'bg-amber-50 border-amber-300',
  };

  const statusLabels = {
    spolek: '📋 Pozice spolku',
    soud: '⚖️ Soudní rozhodnutí',
    spor: '⚠️ Předmět sporu',
  };

  return (
    <div className={`p-4 rounded-lg border ${statusColors[status]}`}>
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-slate-900">{title}</h3>
        <span className="text-xs font-semibold ml-2">{statusLabels[status]}</span>
      </div>
      <div className="text-sm text-slate-700 space-y-2">
        {children}
      </div>
      {evidence.length > 0 && (
        <div className="mt-3 pt-3 border-t border-slate-300">
          <div className="text-xs font-semibold text-slate-600 mb-1">Důkazy:</div>
          <ul className="text-xs text-slate-600 space-y-1">
            {evidence.map((e, i) => (
              <li key={i}>📎 {e}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

interface RelatedNodeProps {
  type: string;
  title: string;
  href: string;
}

function RelatedNode({ type, title, href }: RelatedNodeProps) {
  const typeLabels: Record<string, string> = {
    event: '📅 Událost',
    person: '👤 Osoba',
    document: '📄 Dokument',
    question: '❓ Otázka',
    insight: '💡 Pointa',
  };

  return (
    <a
      href={href}
      className="block p-4 bg-white rounded-lg border-2 border-slate-200 hover:border-blue-400 hover:shadow-sm transition"
    >
      <div className="text-xs text-slate-500 mb-1">{typeLabels[type] || type}</div>
      <div className="text-sm font-medium text-slate-900">{title}</div>
    </a>
  );
}
