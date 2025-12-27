import { showCityContent } from '@/lib/config';

export default function JakaBylaRoleMestaPage() {
  if (!showCityContent()) {
    return (
      <div className="min-h-screen bg-slate-50">
        {/* Legal Disclaimer Banner */}
        <div className="bg-blue-900 text-white py-4">
          <div className="container mx-auto px-3 md:px-8 max-w-4xl">
            <p className="text-sm leading-relaxed">
              ⚖️ <strong>Důležité právní upozornění:</strong> Tato stránka prezentuje právní pozici spolku Tělovýchovná jednota Krupka z.s. Uvedené informace nejsou pravomocným soudním rozhodnutím. Všechny zúčastněné osoby mají právo na odlišný právní názor.
            </p>
          </div>
        </div>
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
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Legal Disclaimer Banner */}
      <div className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-3 md:px-8 max-w-4xl">
          <p className="text-sm leading-relaxed">
            ⚖️ <strong>Důležité právní upozornění:</strong> Tato stránka prezentuje právní pozici spolku Tělovýchovná jednota Krupka z.s. ve sporech s městem Krupka a městskou společností SPORT Krupka s.r.o. Uvedené informace nejsou pravomocným soudním rozhodnutím. Všechny zúčastněné osoby a instituce mají právo na odlišný právní názor.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-8 py-6 md:py-12 max-w-4xl">
        <nav className="text-sm text-slate-600 mb-6">
        <a href="/otazky" className="hover:text-blue-600">← Všechny otázky</a>
        <span className="mx-2">/</span>
        <span>Instituce</span>
      </nav>

      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
          ⚖️ Právní pozice spolku
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
          Kroky města a SPORT Krupka (dle pozice spolku)
        </h2>
        <div className="space-y-4">
          <FactBox
            status="verejne"
            title="Dvojí funkce: Jan Kuzma jako starosta a jednatel"
            evidence={['Veřejný rejstřík', 'Orgány města', 'Zákon o obcích']}
          >
            <p>
              Jan Kuzma zastává současně:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li><strong>Starosta města Krupka</strong> - volený zástupce města</li>
              <li><strong>Jednatel SPORT Krupka s.r.o.</strong> - městská společnost spravující sportovní zařízení</li>
            </ul>
            <p className="mt-2 font-semibold text-slate-700">
              Spolek zastává právní názor, že toto personální propojení vyvolává otázky možného střetu zájmů.
            </p>
          </FactBox>

          <FactBox
            status="spolek"
            title="Výměna zámků 2× (prosinec 2023, leden 2024)"
            evidence={['Dokumentace SPORT Krupka', 'Datová schránka', 'Zápisy']}
          >
            <p className="font-semibold">
              SPORT Krupka provedla výměnu zámků na Pinčesárně dvakrát:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li><strong>19.12.2023:</strong> První výměna zámků</li>
              <li><strong>17.1.2024:</strong> TJ Krupka zaslala návrh nájemní smlouvy</li>
              <li><strong>19.1.2024:</strong> Druhá výměna - 2 dny po smlouvě</li>
            </ul>
            <p className="mt-2 text-slate-700">
              Podle právní pozice spolku měl předseda Brožek obtížný přístup k objektu, zatímco osoby, které spolek považuje za vyloučené, měly přístup zachován.
            </p>
          </FactBox>

          <FactBox
            status="spolek"
            title="Notifikace městu o vyloučení členů (26.1.2024)"
            evidence={['Datová schránka', 'Potvrzení o doručení']}
          >
            <p>
              26.1.2024: TJ Krupka zaslala městu Krupka oficiální notifikaci o vyloučení
              Vaniše a Pivoňky s žádostí, aby město respektovalo orgány spolku zvolené na shromáždění 25.1.2024.
            </p>
            <p className="mt-2 font-semibold text-slate-700">
              Spolek zastává právní názor, že město mělo respektovat tuto notifikaci a nemělo dále komunikovat s vyloučenými osobami jako se zástupci spolku.
            </p>
          </FactBox>

          <FactBox
            status="spor"
            title="Setkání ohledně volby nového předsedy"
            evidence={['Korespondence', 'Zápisy ze schůzek']}
          >
            <p>
              Spolek eviduje setkání starosty Kuzmy, místostarosty Bokoče a Tomáše Syryčanského (sportovní manažer
              SPORT Krupka) ohledně volby nového předsedy TJ Krupka:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Setkání Kuzma + Bokoč + Syryčanský (12/2023)</li>
              <li>Tlak na svolání shromáždění do konce ledna 2024</li>
              <li>Spory o legitimitu shromáždění 25.1.2024 vs. shromáždění svolaných Vanišem</li>
            </ul>
            <p className="mt-2 text-slate-700">
              Posouzení, zda byla koordinace vhodná či zákonná, je součástí probíhajícího sporu.
            </p>
          </FactBox>

          <FactBox
            status="verejne"
            title="Účast Jana Bokoče (místostarosta)"
            evidence={['Zápisy ze schůzek', 'Svědecké výpovědi']}
          >
            <p>
              Jan Bokoč (místostarosta) se účastnil:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Setkání s Kuzmou a Syryčanským</li>
              <li>Shromáždění svolaných Vanišem (které spolek považuje za sporná)</li>
            </ul>
            <p className="mt-2 text-slate-700">
              Právní posouzení vhodnosti této účasti je předmětem sporu.
            </p>
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

      <section className="mb-8 p-4 md:p-6 bg-slate-50 rounded-lg border-2 border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
          <span className="text-2xl mr-2">⚖️</span>
          Námitky k uvedeným údajům
        </h2>
        <div className="text-slate-700 space-y-2">
          <p>
            Město Krupka, SPORT Krupka s.r.o., ani osoby uvedené v těchto materiálech neměly možnost
            se před publikací vyjádřit k prezentovaným tvrzením. Některé skutečnosti mohou být
            vykládány odlišně a zákonnost jednotlivých kroků může být posuzována jinak.
          </p>
          <p className="mt-3">
            Konečné právní posouzení je výlučně v kompetenci příslušných orgánů (soudů, správních úřadů).
          </p>
        </div>
      </section>

      <section className="-mx-3 md:-mx-8 px-3 md:px-8 py-8 md:py-12 bg-gradient-to-r from-blue-600 to-blue-700">
        <h3 className="text-xl font-bold text-white mb-4">
          📌 Shrnutí (právní pozice TJ Krupka)
        </h3>
        <div className="text-white space-y-3">
          <p>
            <strong>Zásah do autonomie:</strong> Spolek zastává právní názor, že město Krupka a SPORT Krupka
            zasáhly do autonomie spolku - výměna zámků 2×, obtížný přístup předsedy Brožka, podpora osob,
            které spolek považuje za vyloučené.
          </p>
          <p>
            <strong>Personální propojení:</strong> Spolek upozorňuje na personální propojení - Jan Kuzma
            jako starosta i jednatel SPORT Krupka.
          </p>
          <p>
            <strong>Koordinace volby:</strong> Spolek eviduje koordinaci ohledně volby Syryčanského jako
            nového předsedy, což považuje za zásah do autonomie.
          </p>
          <p>
            <strong>Reakce na notifikaci:</strong> Spolek zaslal městu notifikaci o vyloučení členů (26.1.2024)
            a zastává právní názor, že město mělo tuto notifikaci respektovat.
          </p>
          <p className="mt-4 pt-4 border-t border-blue-500 text-sm">
            <strong>Upozornění:</strong> Uvedená tvrzení představují právní argumentaci TJ Krupka v probíhajícím
            sporu. Konečné právní posouzení je v kompetenci příslušných orgánů.
          </p>
        </div>
      </section>
      </div>
    </div>
  );
}

interface FactBoxProps {
  status: 'spolek' | 'soud' | 'spor' | 'verejne';
  title: string;
  evidence: string[];
  children: React.ReactNode;
}

function FactBox({ status, title, evidence, children }: FactBoxProps) {
  const statusColors = {
    spolek: 'bg-blue-50 border-blue-300',
    soud: 'bg-green-50 border-green-300',
    spor: 'bg-amber-50 border-amber-300',
    verejne: 'bg-slate-50 border-slate-300',
  };

  const statusLabels = {
    spolek: '📋 Pozice spolku',
    soud: '⚖️ Soudní rozhodnutí',
    spor: '⚠️ Předmět sporu',
    verejne: '📌 Veřejně známé',
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
