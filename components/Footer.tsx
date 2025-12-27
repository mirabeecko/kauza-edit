import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 mt-auto">
      <div className="container mx-auto px-3 md:px-8 max-w-7xl">
        {/* Legal Disclaimer */}
        <div className="mb-8 p-4 bg-slate-800 rounded-lg border border-slate-700">
          <p className="text-sm text-slate-300 leading-relaxed">
            ⚖️ <strong>Právní upozornění:</strong> Tento web prezentuje právní pozici spolku Tělovýchovná jednota Krupka z.s.
            Uvedené informace nejsou pravomocným soudním rozhodnutím. Všechny zúčastněné osoby mají právo
            na odlišný právní názor. Platí presumpce neviny.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Otázky - Členství & Schůze */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-400">❓ Otázky</h3>
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-semibold text-slate-400 mb-2">Členství</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/otazky/kdo-je-clenem-spolku" className="text-slate-300 hover:text-blue-400 transition">
                      Kdo je členem spolku?
                    </Link>
                  </li>
                  <li>
                    <Link href="/otazky/kdo-mel-pravo-rozhodovat" className="text-slate-300 hover:text-blue-400 transition">
                      Kdo měl právo rozhodovat?
                    </Link>
                  </li>
                  <li>
                    <Link href="/otazky/kdo-mel-vest-clenskou-evidenci" className="text-slate-300 hover:text-blue-400 transition">
                      Kdo měl vést evidenci?
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-400 mb-2">Schůze</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/otazky/byly-schuze-legitimni" className="text-slate-300 hover:text-blue-400 transition">
                      Byly schůze legitimní?
                    </Link>
                  </li>
                  <li>
                    <Link href="/otazky/jsou-rozhodnuti-platna" className="text-slate-300 hover:text-blue-400 transition">
                      Jsou rozhodnutí platná?
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Otázky - Finance & Odpovědnost */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-400">💰 Finance & Odpovědnost</h3>
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-semibold text-slate-400 mb-2">Finance</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/otazky/vznikla-spolku-financni-ujma" className="text-slate-300 hover:text-blue-400 transition">
                      Vznikla spolku újma?
                    </Link>
                  </li>
                  <li>
                    <Link href="/otazky/kdo-nakladal-s-prispevky" className="text-slate-300 hover:text-blue-400 transition">
                      Kdo nakládal s příspěvky?
                    </Link>
                  </li>
                  <li>
                    <Link href="/otazky/pristup-k-financim-spolku" className="text-slate-300 hover:text-blue-400 transition">
                      Přístup k financím
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-400 mb-2">Odpovědnost</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/otazky/jednal-predseda-v-souladu-se-zakonem" className="text-slate-300 hover:text-blue-400 transition">
                      Jednal předseda v souladu?
                    </Link>
                  </li>
                  <li>
                    <Link href="/otazky/odpovednost-za-sverene-ukoly" className="text-slate-300 hover:text-blue-400 transition">
                      Odpovědnost za úkoly
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Otázky - Instituce & Meta + Aktéři */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-400">🏛️ Instituce & Meta</h3>
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-semibold text-slate-400 mb-2">Instituce</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/otazky/jaka-byla-role-mesta" className="text-slate-300 hover:text-blue-400 transition">
                      Jaká byla role města?
                    </Link>
                  </li>
                  <li>
                    <Link href="/otazky/mely-instituce-zasahnout-drive" className="text-slate-300 hover:text-blue-400 transition">
                      Měly zasáhnout dříve?
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-400 mb-2">Meta</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/otazky/co-dnes-vime-s-jistotou" className="text-slate-300 hover:text-blue-400 transition">
                      Co víme s jistotou?
                    </Link>
                  </li>
                  <li>
                    <Link href="/otazky/co-zustava-nejasne" className="text-slate-300 hover:text-blue-400 transition">
                      Co zůstává nejasné?
                    </Link>
                  </li>
                  <li>
                    <Link href="/otazky/proc-je-kauza-slozita" className="text-slate-300 hover:text-blue-400 transition">
                      Proč je kauza složitá?
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-slate-400 mb-2">👥 Aktéři</h4>
              <Link href="/akteri" className="text-slate-300 hover:text-blue-400 transition text-sm">
                Všichni aktéři →
              </Link>
            </div>
          </div>

          {/* Analýzy & Přehledy */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-400">📊 Analýzy & Info</h3>
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-semibold text-slate-400 mb-2">Přehledy</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/prehled" className="text-slate-300 hover:text-blue-400 transition">
                      Rychlý přehled
                    </Link>
                  </li>
                  <li>
                    <Link href="/detailni-analyza" className="text-slate-300 hover:text-blue-400 transition">
                      Detailní analýza
                    </Link>
                  </li>
                  <li>
                    <Link href="/udalosti" className="text-slate-300 hover:text-blue-400 transition">
                      Timeline událostí
                    </Link>
                  </li>
                  <li>
                    <Link href="/souvislosti" className="text-slate-300 hover:text-blue-400 transition">
                      Souvislosti
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-400 mb-2">Právní rámec</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/pravni-ramec" className="text-slate-300 hover:text-blue-400 transition">
                      Právní rámec
                    </Link>
                  </li>
                  <li>
                    <Link href="/metodika" className="text-slate-300 hover:text-blue-400 transition">
                      Metodika
                    </Link>
                  </li>
                  <li>
                    <Link href="/cast" className="text-slate-300 hover:text-blue-400 transition">
                      ČAST
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-400 mb-2">Ostatní</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/myty-a-dezinformace" className="text-slate-300 hover:text-blue-400 transition">
                      Mýty a dezinformace
                    </Link>
                  </li>
                  <li>
                    <Link href="/cisla" className="text-slate-300 hover:text-blue-400 transition">
                      Čísla
                    </Link>
                  </li>
                  <li>
                    <Link href="/pointy" className="text-slate-300 hover:text-blue-400 transition">
                      Pointy
                    </Link>
                  </li>
                  <li>
                    <Link href="/temata" className="text-slate-300 hover:text-blue-400 transition">
                      Témata
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-slate-400">
              <p>© 2024 Kauza Tělovýchovná jednota Krupka z.s. • IČO 46070516</p>
              <p className="text-xs mt-1">
                Právní pozice spolku Tělovýchovná jednota Krupka z.s. • Není pravomocným soudním rozhodnutím
              </p>
            </div>
            <div className="flex gap-4 text-sm">
              <Link href="/pravni-ramec" className="text-slate-400 hover:text-blue-400 transition">
                Kontakt
              </Link>
              <Link href="/metodika" className="text-slate-400 hover:text-blue-400 transition">
                Metodika
              </Link>
              <Link href="/otazky" className="text-slate-400 hover:text-blue-400 transition">
                Všechny otázky
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
