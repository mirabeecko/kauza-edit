export default function KdoJeClenemSpolkuPage() {
  return (
    <div className="container mx-auto px-8 py-12 max-w-4xl">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-600 mb-6">
        <a href="/otazky" className="hover:text-blue-600">← Všechny otázky</a>
        <span className="mx-2">/</span>
        <span>Členství</span>
      </nav>

      {/* Hlavička otázky */}
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold mb-4">
          🔥 Klíčová otázka
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Kdo je členem spolku?
        </h1>
      </div>

      {/* Proč je důležitá */}
      <section className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
        <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
          <span className="text-2xl mr-2">💡</span>
          Proč je otázka důležitá
        </h2>
        <div className="text-blue-900 space-y-2">
          <p>
            Členství je základ všeho. Pouze členové spolku mají právo:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Účastnit se shromáždění delegátů</li>
            <li>Volit a být voleni do orgánů spolku</li>
            <li>Rozhodovat o důležitých věcech</li>
            <li>Žalovat spolek (pokud jsou jejich práva dotčena)</li>
          </ul>
          <p className="mt-3">
            <strong>Bez jasné evidence členů nelze:</strong>
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Určit, kdo má právo rozhodovat</li>
            <li>Svolat legitimní shromáždění (neznáme počet členů pro kvórum)</li>
            <li>Vymáhat členské příspěvky</li>
            <li>Posoudit platnost rozhodnutí</li>
          </ul>
        </div>
      </section>

      {/* Co víme */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">✅</span>
          Co víme (prokázaná fakta)
        </h2>
        <div className="space-y-4">
          <FactBox
            status="proven"
            title="Členská základna byla neaktuální"
            evidence={['24.8.2021 - Zápis ze shromáždění delegátů', '13.9.2021 - Email předsedy s výzvou']}
          >
            <p>
              K datu zvolení nového předsedy (24.8.2021) obsahovala členská evidence osoby starší
              100 let. Všichni účastníci shromáždění se shodli, že je nutná aktualizace.
            </p>
          </FactBox>

          <FactBox
            status="proven"
            title="Předsedové oddílů nepředali seznamy členů"
            evidence={['Email 13.9.2021', 'Email 10.12.2021', 'Předžalobní výzvy 11/2023']}
          >
            <p>
              Marek Vaniš, Gustav Vlach a Martin Kulík <strong>nikdy nepředali</strong> aktualizované
              seznamy členů svých oddílů, přestože:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Přislíbili to na schůzi 24.8.2021</li>
              <li>Byli vyzváni emailem 13.9.2021 se lhůtou do 26.9.2021</li>
              <li>Byli opakovaně upomínáni v prosinci 2021</li>
              <li>Obdrželi předžalobní výzvy v listopadu 2023</li>
            </ul>
          </FactBox>

          <FactBox
            status="proven"
            title="Turistický oddíl jako jediný doložil členy"
            evidence={['Seznam členů turistického oddílu', 'Oznámení o vystoupení z TJ']}
          >
            <p>
              Turistický oddíl jako jediný zaslal požadovaný seznam členů. Následně požádal
              o ukončení členství v TJ Krupka (leden 2022).
            </p>
          </FactBox>

          <FactBox
            status="proven"
            title="Hráči stolního tenisu nebyli vedeni jako členové"
            evidence={['28.11.2023 - Zápis ze setkání', 'WhatsApp zpráva 8.12.2023']}
          >
            <p>
              Na schůzce 28.11.2023 bylo hráčům stolního tenisu sděleno, že <strong>nejsou vedeni
              jako členové oddílu</strong>, protože Vaniš nikdy nepředal seznamy.
            </p>
            <p className="mt-2">
              8.12.2023 byl zaslán odkaz na formulář s výzvou k vyplnění údajů pro řádné členství.
            </p>
          </FactBox>
        </div>
      </section>

      {/* Co nevíme / chybí */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">❓</span>
          Co nevíme / co chybí
        </h2>
        <div className="space-y-4">
          <UnknownBox
            title="Skutečný počet členů oddílů Vaniše, Vlacha a Kulíka"
          >
            <p>
              Protože seznamy nebyly předány, není známo:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Kolik členů měl oddíl stolního tenisu (Vaniš tvrdil cca 60)</li>
              <li>Kolik členů měl lyžařský oddíl (Vlach)</li>
              <li>Kolik členů měl oddíl karate (Kulík)</li>
            </ul>
          </UnknownBox>

          <UnknownBox
            title="Kdo skutečně zaplatil příspěvky a komu"
          >
            <p>
              Bez evidence není možné ověřit:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Kolik lidí skutečně zaplatilo příspěvky</li>
              <li>Zda byly příspěvky dobrovolné nebo povinné</li>
              <li>Komu byly příspěvky zaplaceny (spolku nebo předsedům oddílů)</li>
            </ul>
          </UnknownBox>
        </div>
      </section>

      {/* Právní kontext */}
      <section className="mb-8 p-6 bg-slate-50 rounded-lg border border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-3">
          ⚖️ Právní kontext
        </h2>
        <div className="space-y-3 text-slate-700">
          <div>
            <h3 className="font-semibold mb-1">§ 214 NOZ - Členství ve spolku</h3>
            <p className="text-sm">
              Členství vzniká na základě rozhodnutí spolku. Spolek vede seznam členů.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Stanovy TJ Krupka</h3>
            <p className="text-sm">
              Předsedové oddílů mají povinnost vést evidenci členů oddílu a předávat ji
              předsedovi spolku.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">§ 259 NOZ - Aktivní legitimace</h3>
            <p className="text-sm">
              Právo žalovat má pouze ten, jehož práva byla dotčena. Pokud nebyli členy spolku,
              nemají aktivní legitimaci.
            </p>
          </div>
        </div>
      </section>

      {/* Související uzly */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          🔗 Související uzly
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <RelatedNode
            type="event"
            title="24.8.2021 - Zvolení nového předsedy"
            href="/udalosti/zvoleni-predsedy"
          />
          <RelatedNode
            type="event"
            title="28.11.2023 - Vyloučení Vaniše a Pivoňky"
            href="/udalosti/vylouceni-vanise-pivonky"
          />
          <RelatedNode
            type="person"
            title="Marek Vaniš"
            href="/akteri/marek-vanis"
          />
          <RelatedNode
            type="document"
            title="Email 13.9.2021 - Výzva k zaslání seznamů"
            href="/dokumenty/email-2021-09-13"
          />
          <RelatedNode
            type="question"
            title="Kdo měl právo rozhodovat?"
            href="/otazky/kdo-mel-pravo-rozhodovat"
          />
          <RelatedNode
            type="insight"
            title="Pointa: Evidence jako základ kontroly"
            href="/pointy/evidence-zaklad-kontroly"
          />
        </div>
      </section>

      {/* Shrnutí */}
      <section className="p-6 bg-amber-50 rounded-lg border-2 border-amber-300">
        <h3 className="text-xl font-bold text-amber-900 mb-3">
          📌 Shrnutí
        </h3>
        <div className="text-amber-900 space-y-2">
          <p>
            <strong>Prokázáno:</strong> Předsedové oddílů (Vaniš, Vlach, Kulík) nepředali seznamy
            členů přes opakované výzvy v období 2021-2023.
          </p>
          <p>
            <strong>Důsledek:</strong> Spolek neví, kdo je skutečným členem oddílů, což znemožňuje
            legitimní rozhodování a vymáhání příspěvků.
          </p>
          <p>
            <strong>Právní implikace:</strong> Osoby, které nejsou prokázanými členy, nemají právo
            žalovat spolek ani účastnit se rozhodování.
          </p>
        </div>
      </section>
    </div>
  );
}

interface FactBoxProps {
  status: 'proven' | 'claimed' | 'disputed';
  title: string;
  evidence: string[];
  children: React.ReactNode;
}

function FactBox({ status, title, evidence, children }: FactBoxProps) {
  const statusColors = {
    proven: 'bg-green-50 border-green-300',
    claimed: 'bg-yellow-50 border-yellow-300',
    disputed: 'bg-red-50 border-red-300',
  };

  const statusLabels = {
    proven: '✅ Prokázáno',
    claimed: '⚠️ Tvrzeno',
    disputed: '❌ Sporné',
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

function UnknownBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-4 rounded-lg border bg-slate-50 border-slate-300">
      <h3 className="font-semibold text-slate-900 mb-2 flex items-center">
        <span className="mr-2">❓</span>
        {title}
      </h3>
      <div className="text-sm text-slate-700 space-y-2">
        {children}
      </div>
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
      className="block p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-400 hover:shadow-sm transition"
    >
      <div className="text-xs text-slate-500 mb-1">{typeLabels[type] || type}</div>
      <div className="text-sm font-medium text-slate-900">{title}</div>
    </a>
  );
}
