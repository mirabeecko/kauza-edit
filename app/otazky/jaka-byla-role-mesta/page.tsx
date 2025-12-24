import { showCityContent } from '@/lib/config';

export default function JakaBylaRoleMestaPage() {
  if (!showCityContent()) {
    return (
      <div className="container mx-auto px-3 md:px-8 py-6 md:py-12 max-w-4xl">
        <div className="text-center py-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            Tato stránka není dostupná v aktuálním zobrazení
          </h1>
          <p className="text-slate-600 mb-6">
            Obsah o roli města Krupka je skryt v této verzi webu.
          </p>
          <a href="/otazky" className="text-blue-600 hover:underline">
            ← Zpět na otázky
          </a>
        </div>
      </div>
    );
  }

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
          Jaká byla role města Krupka?
        </h1>
      </div>

      <section className="mb-8 p-4 md:p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
        <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
          <span className="text-2xl mr-2">💡</span>
          Proč je otázka důležitá
        </h2>
        <div className="text-blue-900 space-y-2">
          <p>
            Město Krupka a městská společnost SPORT Krupka s.r.o. sehrály aktivní roli
            v kauze. Je důležité pochopit, jaká byla jejich role a zda jednaly v souladu se zákonem.
          </p>
          <p className="mt-3">
            <strong>Klíčové otázky:</strong>
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Mělo město zasahovat do autonomie spolku?</li>
            <li>Byl postup města a SPORT Krupka zákonný?</li>
            <li>Jaké byly důsledky zásahu města?</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">🏛️</span>
          Prokázané kroky města a SPORT Krupka
        </h2>
        <div className="space-y-4">
          <FactBox
            status="proven"
            title="Střet zájmů: Jan Kuzma jako starosta + jednatel"
            evidence={['Veřejný rejstřík', 'Orgány města', 'Zákon o obcích']}
          >
            <p>
              Jan Kuzma je současně:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li><strong>Starosta města Krupka</strong> - politická moc</li>
              <li><strong>Jednatel SPORT Krupka s.r.o.</strong> - městská společnost</li>
            </ul>
            <p className="mt-2 font-semibold text-red-700">
              Tato dvojrole vytváří nebezpečný konflikt zájmů a umožňuje zneužití pravomoci.
            </p>
          </FactBox>

          <FactBox
            status="proven"
            title="Výměna zámků 2× (prosinec 2023, leden 2024)"
            evidence={['Dokumentace SPORT Krupka', 'Datová schránka', 'Zápisy']}
          >
            <p className="font-semibold">
              SPORT Krupka vyměnila zámky na Pinčesárně dvakrát:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li><strong>19.12.2023:</strong> První výměna zámků</li>
              <li><strong>17.1.2024:</strong> TJ Krupka zaslala návrh nájemní smlouvy</li>
              <li><strong>19.1.2024:</strong> Druhá výměna - 2 DNY po smlouvě!</li>
            </ul>
            <p className="mt-2 text-red-700">
              Legitimní předseda Brožek byl zablokován, vyloučení členové Vaniš a Pivoňka měli přístup.
            </p>
          </FactBox>

          <FactBox
            status="proven"
            title="Ignorování oficiální notifikace (26.1.2024)"
            evidence={['Datová schránka', 'Potvrzení o doručení']}
          >
            <p>
              26.1.2024: TJ Krupka zaslala městu Krupka oficiální notifikaci o vyloučení
              Vaniše a Pivoňky s žádostí, aby město respektovalo legitimní orgány spolku.
            </p>
            <p className="mt-2 font-semibold text-red-700">
              Město notifikaci ignorovalo a pokračovalo v podpoře vyloučených členů.
            </p>
          </FactBox>

          <FactBox
            status="proven"
            title="Koordinace pokusu o 'zvolení' Syryčanského"
            evidence={['Email Kuzmy', 'Koordinační schůzky', 'Zápisy']}
          >
            <p>
              Město koordinovalo pokus o "zvolení" Tomáše Syryčanského (sportovní manažer
              SPORT Krupka) jako nového předsedy TJ Krupka:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Koordinační schůzky Kuzma + Bokoč + Syryčanský (12/2023)</li>
              <li>Tlak na svolání shromáždění do konce ledna 2024</li>
              <li>Ignorování legitimního shromáždění 25.1.2024</li>
              <li>Podpora nelegálních schůzí svolaných vyloučenými členy</li>
            </ul>
          </FactBox>

          <FactBox
            status="proven"
            title="Aktivní účast Jana Bokoče (místostarosta)"
            evidence={['Zápisy ze schůzek', 'Svědecké výpovědi']}
          >
            <p>
              Jan Bokoč (místostarosta) se aktivně účastnil:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Koordinačních schůzek s Kuzmou a Syryčanským</li>
              <li>Nelegálních schůzí svolaných vyloučenými členy</li>
              <li>Tlaku na legitimního předsedu Brožka</li>
            </ul>
          </FactBox>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">⚖️</span>
          Právní kontext
        </h2>
        <div className="space-y-4">
          <div className="p-4 rounded-lg border-2 bg-slate-50 border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-2">
              § 20a NOZ - Autonomie spolku
            </h3>
            <p className="text-sm text-slate-900">
              Spolky mají právo na autonomii. Stát a obce mají povinnost respektovat
              rozhodnutí legitimních orgánů spolku.
            </p>
          </div>

          <div className="p-4 rounded-lg border-2 bg-slate-50 border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-2">
              Zákon o obcích § 83-84 - Střet zájmů
            </h3>
            <p className="text-sm text-slate-900">
              Starosta nesmí zneužívat své postavení k prosazování soukromých zájmů.
              Dvojrole starosta + jednatel městské společnosti je problematická.
            </p>
          </div>

          <div className="p-4 rounded-lg border-2 bg-slate-50 border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-2">
              Zákon o střetu zájmů
            </h3>
            <p className="text-sm text-slate-900">
              Veřejný funkcionář (starosta) nesmí využívat své postavení k osobnímu
              prospěchu ani k prospěchu osob blízkých nebo subjektů, ve kterých má funkci.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          🔗 Související uzly
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <RelatedNode type="person" title="Jan Kuzma - starosta" href="/akteri/jan-kuzma" />
          <RelatedNode type="person" title="Jan Bokoč - místostarosta" href="/akteri/jan-bokoc" />
          <RelatedNode type="person" title="Tomáš Syryčanský" href="/akteri/tomas-syrycansky" />
          <RelatedNode type="event" title="Výměna zámků" href="/mesto-krupka" />
          <RelatedNode type="insight" title="Timeline města" href="/mesto-krupka" />
          <RelatedNode type="question" title="Byly schůze legitimní?" href="/otazky/byly-schuze-legitimni" />
        </div>
      </section>

      <section className="-mx-3 md:-mx-8 px-3 md:px-8 py-8 md:py-12 bg-gradient-to-r from-blue-600 to-blue-700">
        <h3 className="text-xl font-bold text-white mb-4">
          📌 Shrnutí
        </h3>
        <div className="text-white space-y-3">
          <p>
            <strong>Aktivní zásah:</strong> Město Krupka a SPORT Krupka aktivně zasahovaly do
            autonomie spolku - výměna zámků 2×, blokování legitimního předsedy, podpora
            vyloučených členů.
          </p>
          <p>
            <strong>Střet zájmů:</strong> Jan Kuzma jako starosta + jednatel SPORT Krupka
            vytváří nebezpečný konflikt zájmů.
          </p>
          <p>
            <strong>Koordinovaný pokus:</strong> Město koordinovalo pokus o "zvolení"
            Syryčanského jako nového předsedy v rozporu se zákonem a rozhodnutím ČAST.
          </p>
          <p>
            <strong>Ignorování notifikace:</strong> Město ignorovalo oficiální oznámení
            o vyloučení členů (26.1.2024) a pokračovalo v podpoře nelegálních aktivit.
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
