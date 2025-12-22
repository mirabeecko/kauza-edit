import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-8 py-12 max-w-6xl">
      {/* Hero sekce */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-slate-900 mb-4">
          Kauza TJ Krupka z.s.
        </h1>
        <p className="text-xl text-slate-600 mb-2">
          IČO 46070516
        </p>
        <p className="text-lg text-slate-500 max-w-3xl mx-auto">
          Interaktivní mapa komplexní kauzy kolem Tělovýchovné jednoty Krupka z.s.
          Oddělujeme fakta, tvrzení, interpretace a otevřené otázky.
        </p>
      </div>

      {/* Tři hlavní vstupy */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <Link href="/prehled" className="group">
          <div className="h-full p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold text-blue-900 mb-3">
              Rychlý přehled
            </h3>
            <p className="text-blue-700 mb-4">
              5 minut
            </p>
            <p className="text-slate-700">
              Základní fakta a hlavní body kauzy. Co se stalo, kdo je kdo, a proč je to důležité.
            </p>
          </div>
        </Link>

        <Link href="/souvislosti" className="group">
          <div className="h-full p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition">
            <div className="text-4xl mb-4">🔗</div>
            <h3 className="text-2xl font-bold text-purple-900 mb-3">
              Souvislosti
            </h3>
            <p className="text-purple-700 mb-4">
              15–30 minut
            </p>
            <p className="text-slate-700">
              Vazby mezi událostmi, osobami a dokumenty. Jak spolu všechno souvisí.
            </p>
          </div>
        </Link>

        <Link href="/detailni-analyza" className="group">
          <div className="h-full p-8 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl border-2 border-amber-200 hover:border-amber-400 hover:shadow-lg transition">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-2xl font-bold text-amber-900 mb-3">
              Detailní analýza
            </h3>
            <p className="text-amber-700 mb-4">
              Hloubková studie
            </p>
            <p className="text-slate-700">
              Časová osa, dokumenty, právní aspekty, otevřené otázky. Vše s důkazy.
            </p>
          </div>
        </Link>
      </div>

      {/* Klíčové sekce */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          Prozkoumejte kauzu
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <NavCard
            href="/temata"
            icon="📚"
            title="Témata"
            description="Členství, Finance, Právní rovina..."
          />
          <NavCard
            href="/udalosti"
            icon="📅"
            title="Události"
            description="Chronologický přehled klíčových momentů"
          />
          <NavCard
            href="/akteri"
            icon="👥"
            title="Aktéři"
            description="Osoby a jejich role v kauze"
          />
          <NavCard
            href="/otazky"
            icon="❓"
            title="Otázky"
            description="Co víme, co nevíme, co je sporné"
          />
          <NavCard
            href="/dokumenty"
            icon="📄"
            title="Dokumenty"
            description="Důkazy, korespondence, právní dokumenty"
          />
          <NavCard
            href="/pointy"
            icon="💡"
            title="Pointy"
            description="Shrnutí složitých kauzálních řetězců"
          />
        </div>
      </div>

      {/* Základní charakteristika */}
      <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          O čem je tato kauza?
        </h2>
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-700 leading-relaxed">
            Dlouhodobý spor uvnitř spolku Tělovýchovná jednota Krupka z.s. týkající se
            finanční správy, vybírání a neodvádění členských příspěvků, vyloučení členů
            a následných soudních sporů. Kauza trvá od roku 2021 a zahrnuje otázky členství,
            legitimity rozhodování, trestního oznámení a dodržování zákonů.
          </p>
          <p className="text-slate-700 leading-relaxed">
            <strong>Odhadovaná celková škoda:</strong> cca 2 miliony Kč
          </p>
          <p className="text-slate-700 leading-relaxed">
            Tato aplikace slouží jako veřejný referenční zdroj založený na faktech a dokumentech.
            Nejde o obhajobu ani útok – jde o mapu reality.
          </p>
        </div>
      </div>

      {/* Footer info */}
      <div className="mt-12 text-center text-sm text-slate-500">
        <p>
          Poslední aktualizace: {new Date().toLocaleDateString('cs-CZ')}
        </p>
        <p className="mt-2">
          Všechny údaje jsou podloženy dokumenty a důkazy
        </p>
      </div>
    </div>
  );
}

interface NavCardProps {
  href: string;
  icon: string;
  title: string;
  description: string;
}

function NavCard({ href, icon, title, description }: NavCardProps) {
  return (
    <Link href={href} className="group">
      <div className="p-6 bg-white rounded-lg border border-slate-200 hover:border-blue-400 hover:shadow-md transition">
        <div className="text-3xl mb-3">{icon}</div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600">
          {title}
        </h3>
        <p className="text-sm text-slate-600">
          {description}
        </p>
      </div>
    </Link>
  );
}
