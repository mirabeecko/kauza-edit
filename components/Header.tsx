import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-slate-900 text-white border-b border-slate-700">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-xl font-bold hover:text-blue-400 transition">
            Kauza TJ Krupka
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/temata" className="hover:text-blue-400 transition">
              Témata
            </Link>
            <Link href="/udalosti" className="hover:text-blue-400 transition">
              Události
            </Link>
            <Link href="/akteri" className="hover:text-blue-400 transition">
              Aktéři
            </Link>
            <Link href="/otazky" className="hover:text-blue-400 transition">
              Otázky
            </Link>
            <Link href="/dokumenty" className="hover:text-blue-400 transition">
              Dokumenty
            </Link>
            <Link href="/pointy" className="hover:text-blue-400 transition">
              Pointy
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-3 py-1.5 text-sm bg-slate-800 hover:bg-slate-700 rounded transition">
            Hledat
          </button>
          <Link href="/info" className="px-3 py-1.5 text-sm bg-blue-600 hover:bg-blue-700 rounded transition">
            Info
          </Link>
        </div>
      </div>
    </header>
  );
}
