import { showCityContent } from '@/lib/config';

export default function MelyInstituceZasahnoutDrivePage() {
  const cityVisible = showCityContent();

  return (
    <div className="container mx-auto px-3 md:px-8 py-6 md:py-12 max-w-4xl">
      <nav className="text-sm text-slate-600 mb-6">
        <a href="/otazky" className="hover:text-blue-600">← Všechny otázky</a>
        <span className="mx-2">/</span>
        <span>Instituce</span>
      </nav>

      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold mb-4">
          ⚠️ Důležitá otázka
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Měly instituce zasáhnout dříve?
        </h1>
      </div>

      <section className="mb-8 p-4 md:p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
        <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
          <span className="text-2xl mr-2">💡</span>
          Proč je otázka důležitá
        </h2>
        <div className="text-blue-900 space-y-2">
          <p>
            Spolek je autonomní subjekt, ale v určitých případech mají státní
            a municipální instituce právo nebo dokonce povinnost zasáhnout.
          </p>
          <p className="mt-3">
            <strong>Klíčové momenty:</strong>
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Kdy měla ČAST zasáhnout?</li>
            <li>Kdy měla policie začít vyšetřovat?</li>
            {cityVisible && <li>Mělo město Krupka respektovat autonomii spolku?</li>}
            <li>Jaké jsou hranice vměšování institucí?</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">⚖️</span>
          Co instituce udělaly
        </h2>
        <div className="space-y-4">
          <FactBox
            status="proven"
            title="ČAST: Zasáhla správně a včas (2022)"
            evidence={['Rozhodčí komise ČAST', 'Zápis z jednání 2022']}
          >
            <p>
              <strong>ČAST (Česká asociace Sport pro všechny) rozhodla:</strong>
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>2022: Potvrdila legitimitu volby Brožka (24.8.2021)</li>
              <li>2022: Potvrdila, že vyloučení Vaniše a Pivoňky bylo v souladu se zákonem</li>
              <li>Zasáhla na žádost Brožka - řešila spor v rámci své působnosti</li>
            </ul>
            <p className="mt-3 text-green-700 font-semibold">
              ČAST reagovala řádně a v přiměřené době na podání Brožka.
            </p>
          </FactBox>

          <FactBox
            status="proven"
            title="Policie: Vyšetřuje od roku 2024"
            evidence={['Trestní oznámení', 'Výslechy 2024']}
          >
            <p>
              <strong>Policie zahájila vyšetřování po trestním oznámení:</strong>
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Brožek podal trestní oznámení na zpronevěru</li>
              <li>Policie vyslechla Vaniše, Vlacha a další</li>
              <li>Vaniš při výslechu přiznal vybírání příspěvků</li>
              <li>Vlach při výslechu přiznal pokladnu 132.523 Kč</li>
            </ul>
            <p className="mt-3">
              Otázka: Měla policie začít dříve? Odpověď: Trestní oznámení bylo
              podáno až po vyčerpání jiných řešení.
            </p>
          </FactBox>

          <FactBox
            status="proven"
            title="Krajský soud: Rozhodl v roce 2024"
            evidence={['Rozsudek 30 C 104/2024', 'Žaloba 8.4.2024']}
          >
            <p>
              <strong>Soud rozhodl po podání žaloby:</strong>
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Žaloba podána 8.4.2024 (39 dní po prekluzivní lhůtě)</li>
              <li>Soud potvrdil platnost volby Brožka</li>
              <li>Rozhodl o neplatnosti vyloučení (sporné - žaloba po lhůtě)</li>
            </ul>
          </FactBox>

          {cityVisible && (
            <DisputedBox title="Město Krupka: Mělo respektovat autonomii spolku">
              <p className="font-semibold text-red-700">
                Město aktivně zasahovalo do autonomie spolku:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>SPORT Krupka vyměnila zámky 2× (prosinec 2023, leden 2024)</li>
                <li>Ignorovala oficiální notifikaci o vyloučení členů (26.1.2024)</li>
                <li>Koordinovala pokus o "zvolení" Syryčanského</li>
                <li>Podporovala nelegální schůze svolané vyloučenými členy</li>
              </ul>
              <p className="mt-3 font-semibold text-red-700">
                § 20a NOZ: Stát a obce mají povinnost respektovat autonomii spolku.
                Město Krupka tuto povinnost porušilo.
              </p>
            </DisputedBox>
          )}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">❓</span>
          Co zůstává sporné
        </h2>
        <div className="space-y-4">
          <UnknownBox title="Mohla ČAST zakázat nelegální schůze?">
            <p>
              ČAST potvrdila legitimitu Brožka, ale vyloučení členové pokračovali
              ve svolávání schůzí. Měla ČAST:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Výslovně zakázat schůze svolané vyloučenými členy?</li>
              <li>Informovat ostatní orgány (soud, policii)?</li>
              <li>Má ČAST vůbec takové pravomoci?</li>
            </ul>
          </UnknownBox>

          <UnknownBox title="Měla policie jednat před trestním oznámením?">
            <p>
              Pokud existovalo podezření ze zpronevěry, měla policie:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Začít vyšetřovat i bez trestního oznámení?</li>
              <li>Spolupracovat s ČASTem při jeho šetření?</li>
              <li>Jaké jsou hranice iniciativního postupu policie?</li>
            </ul>
          </UnknownBox>

          {cityVisible && (
            <UnknownBox title="Měl krajský úřad kontrolovat město?">
              <p>
                Krajský úřad má dohled nad obcemi. Měl:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Zkontrolovat postup města Krupka?</li>
                <li>Prověřit střet zájmů starosty Kuzmy?</li>
                <li>Zasáhnout při porušení § 20a NOZ (autonomie spolku)?</li>
              </ul>
            </UnknownBox>
          )}
        </div>
      </section>

      <section className="mb-8 p-4 md:p-6 bg-slate-50 rounded-lg border-2 border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-3">
          ⚖️ Právní kontext
        </h2>
        <div className="space-y-3 text-slate-900">
          <div>
            <h3 className="font-semibold mb-1">§ 20a NOZ - Autonomie spolku</h3>
            <p className="text-sm">
              Stát a obce mají povinnost respektovat autonomii spolku a rozhodnutí
              jeho legitimních orgánů. Vměšování je možné jen v zákonem stanovených případech.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">ČAST - Sportovní arbitráž</h3>
            <p className="text-sm">
              ČAST řeší spory mezi členy tělovýchovných jednot. Jeho rozhodnutí jsou
              závazná pro členy TJ. Řeší spory rychleji než soudy.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">§ 158 TŘ - Trestní oznámení</h3>
            <p className="text-sm">
              Každý má právo podat trestní oznámení, pokud má podezření na spáchání
              trestného činu. Policie je povinna ho prošetřit.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          🔗 Související uzly
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <RelatedNode type="document" title="Rozhodčí komise ČAST" href="/cast" />
          <RelatedNode type="document" title="Trestní oznámení" href="/udalosti" />
          {cityVisible && <RelatedNode type="question" title="Jaká byla role města?" href="/otazky/jaka-byla-role-mesta" />}
          <RelatedNode type="question" title="Jsou rozhodnutí platná?" href="/otazky/jsou-rozhodnuti-platna" />
          <RelatedNode type="person" title="Miroslav Brožek" href="/akteri/miroslav-brozek" />
          {cityVisible && <RelatedNode type="person" title="Jan Kuzma - starosta" href="/akteri/jan-kuzma" />}
        </div>
      </section>

      <section className="-mx-3 md:-mx-8 px-3 md:px-8 py-8 md:py-12 bg-gradient-to-r from-blue-600 to-blue-700">
        <h3 className="text-xl font-bold text-white mb-4">
          📌 Shrnutí
        </h3>
        <div className="text-white space-y-3">
          <p>
            <strong>ČAST správně:</strong> Potvrdila legitimitu Brožka (2022) a vyloučení
            členů. Reagovala v přiměřené době na podání.
          </p>
          <p>
            <strong>Policie správně:</strong> Vyšetřuje po trestním oznámení. Brožek
            vyčerpal jiná řešení před podáním.
          </p>
          {cityVisible && (
            <p>
              <strong>Město Krupka špatně:</strong> Aktivně zasahovalo do autonomie spolku
              (výměna zámků 2×, podpora vyloučených členů). Porušilo § 20a NOZ.
            </p>
          )}
          <p>
            <strong>Sporné:</strong> Měla ČAST výslovně zakázat nelegální schůze?
            Měl krajský úřad kontrolovat město? Jaké jsou hranice vměšování institucí?
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
    <div className={`p-4 rounded-lg border-2 ${statusColors[status]}`}>
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-slate-900">{title}</h3>
        <span className="text-xs font-semibold ml-2">{statusLabels[status]}</span>
      </div>
      <div className="text-sm text-slate-900 space-y-2">
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

function DisputedBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-4 rounded-lg border-2 bg-red-50 border-red-300">
      <h3 className="font-semibold text-slate-900 mb-2 flex items-center">
        <span className="mr-2">❌</span>
        {title}
      </h3>
      <div className="text-sm text-slate-900 space-y-2">
        {children}
      </div>
    </div>
  );
}

function UnknownBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-4 rounded-lg border-2 bg-slate-50 border-slate-300">
      <h3 className="font-semibold text-slate-900 mb-2 flex items-center">
        <span className="mr-2">❓</span>
        {title}
      </h3>
      <div className="text-sm text-slate-900 space-y-2">
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
      className="block p-4 bg-white rounded-lg border-2 border-slate-200 hover:border-blue-400 hover:shadow-sm transition"
    >
      <div className="text-xs text-slate-500 mb-1">{typeLabels[type] || type}</div>
      <div className="text-sm font-medium text-slate-900">{title}</div>
    </a>
  );
}
