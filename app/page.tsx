import Link from 'next/link';
import { showCityContent } from '@/lib/config';

// KOMPONENTY PRO VIZUALIZACI

interface StatCardProps {
  value: string;
  label: string;
  icon: string;
  color: 'red' | 'orange' | 'blue' | 'green';
  trend: string;
}

function StatCard({ value, label, icon, color }: StatCardProps) {
  const colors = {
    red: 'from-red-500 to-red-600 border-red-300',
    orange: 'from-orange-500 to-orange-600 border-orange-300',
    blue: 'from-blue-500 to-blue-600 border-blue-300',
    green: 'from-green-500 to-green-600 border-green-300',
  };

  return (
    <div className={`bg-gradient-to-br ${colors[color]} rounded-xl md:rounded-2xl p-4 md:p-4 md:p-6 text-white shadow-lg md:shadow-xl border-2 md:border-4 hover:scale-105 transition`}>
      <div className="text-3xl md:text-5xl mb-2 md:mb-3">{icon}</div>
      <div className="text-2xl md:text-4xl font-black mb-1 md:mb-2">{value}</div>
      <div className="text-sm md:text-lg font-semibold opacity-90">{label}</div>
    </div>
  );
}

interface ProgressBarProps {
  label: string;
  value: number;
  max: number;
  color: 'red' | 'orange' | 'yellow';
}

function ProgressBar({ label, value, max, color }: ProgressBarProps) {
  const percentage = (value / max) * 100;
  const colors = {
    red: 'bg-red-500',
    orange: 'bg-orange-500',
    yellow: 'bg-yellow-500',
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between mb-1 md:mb-2">
        <span className="text-xs md:text-sm font-semibold">{label}</span>
        <span className="text-sm md:text-base font-bold">{value.toLocaleString('cs-CZ')} Kč</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-5 md:h-6 overflow-hidden">
        <div
          className={`${colors[color]} h-full rounded-full transition-all duration-1000 flex items-center justify-end pr-1 md:pr-2`}
          style={{ width: `${percentage}%` }}
        >
          <span className="text-xs font-bold text-white">{percentage.toFixed(0)}%</span>
        </div>
      </div>
    </div>
  );
}

interface TimelinePointProps {
  year: string;
  label: string;
  status: 'complete' | 'active';
  description: string;
}

function TimelinePoint({ year, label, status, description }: TimelinePointProps) {
  return (
    <div className="flex items-start space-x-3 md:space-x-4">
      <div className="flex-shrink-0">
        <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-black text-base md:text-lg ${
          status === 'active'
            ? 'bg-blue-500 text-white animate-pulse'
            : 'bg-green-500 text-white'
        }`}>
          {status === 'active' ? '▶' : '✓'}
        </div>
      </div>
      <div className="flex-1">
        <div className="font-bold text-base md:text-lg">{year}</div>
        <div className="text-lg md:text-xl font-black text-slate-900">{label}</div>
        <div className="text-xs md:text-sm text-slate-600">{description}</div>
      </div>
    </div>
  );
}

interface ActionCardProps {
  href: string;
  icon: string;
  title: string;
  description: string;
  color: 'blue' | 'purple' | 'orange';
  time: string;
}

function ActionCard({ href, icon, title, description, color, time }: ActionCardProps) {
  const colors = {
    blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
    purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
    orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
  };

  return (
    <Link href={href}>
      <div className={`bg-gradient-to-br ${colors[color]} rounded-xl md:rounded-2xl p-5 md:p-4 md:p-8 text-white shadow-lg md:shadow-xl hover:scale-105 transition h-full`}>
        <div className="text-4xl md:text-6xl mb-3 md:mb-4">{icon}</div>
        <h3 className="text-xl md:text-2xl font-black mb-2">{title}</h3>
        <p className="text-sm md:text-base text-slate-100 mb-3 md:mb-4">{description}</p>
        <div className="inline-block px-2 md:px-3 py-1 bg-white/20 rounded-full text-xs md:text-sm font-semibold">
          ⏱️ {time}
        </div>
      </div>
    </Link>
  );
}

interface FactBoxProps {
  icon: string;
  title: string;
  facts: string[];
  color: 'green' | 'red';
}

function FactBox({ icon, title, facts, color }: FactBoxProps) {
  const colors = {
    green: 'bg-green-50 border-green-300',
    red: 'bg-red-50 border-red-300',
  };

  return (
    <div className={`${colors[color]} rounded-xl md:rounded-2xl p-4 md:p-4 md:p-6 border-2`}>
      <h3 className="text-xl md:text-3xl font-black mb-3 md:mb-4 flex items-center">
        <span className="mr-2 md:mr-3 text-2xl md:text-4xl">{icon}</span>
        {title}
      </h3>
      <ul className="space-y-2 md:space-y-3">
        {facts.map((fact, i) => (
          <li key={i} className="flex items-start">
            <span className="mr-2 md:mr-3 text-lg md:text-xl flex-shrink-0">{color === 'green' ? '✓' : '✗'}</span>
            <span className="text-sm md:text-base font-semibold">{fact}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// HLAVNÍ KOMPONENTA

export default function Home() {
  return (
    <div className="overflow-y-auto">
      {/* Hero sekce - dramatická */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-6 md:py-12 md:py-0">
        {/* Simplified background for mobile - only show on desktop */}
        <div className="hidden md:block absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzFmMjkzNyIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-3 md:px-4 py-2 bg-red-600 text-white text-xs md:text-sm font-bold rounded-full mb-4 md:mb-6">
              🚨 AKTIVNÍ KAUZA
            </div>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 leading-tight">
              Kauza <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Tělovýchovná jednota Krupka z.s.</span>
            </h1>
            <p className="text-sm md:text-xl lg:text-2xl text-blue-200 mb-6 md:mb-8 px-4">
              {(2045635).toLocaleString('cs-CZ')} Kč škody<br className="md:hidden" />
              <span className="hidden md:inline"> • </span>3+ roky trvání<br className="md:hidden" />
              <span className="hidden md:inline"> • </span>0 trestně stíhaných
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <Link href="/prehled" className="px-6 md:px-3 md:px-8 py-3 md:py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold text-base md:text-lg transition transform hover:scale-105 shadow-2xl">
                ⚡ Začít zde
              </Link>
              <Link href="/otazky" className="px-6 md:px-3 md:px-8 py-3 md:py-4 bg-white/10 hover:bg-white/20 rounded-xl font-bold text-base md:text-lg transition backdrop-blur">
                ❓ Klíčové otázky
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* PROSTÁ FAKTA - bez interpretací */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 py-8 md:py-8 md:py-16">
        <div className="container mx-auto px-4 md:px-3 md:px-8 max-w-6xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-center mb-6 md:mb-12 text-slate-900">
            📋 Prostá fakta (bez interpretací)
          </h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-4 md:gap-8">
            {/* Co bylo slíbeno */}
            <div className="bg-white rounded-2xl shadow-xl p-4 md:p-4 md:p-4 md:p-8 border-2 border-green-300">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-black mb-4 md:mb-6 text-green-700 flex items-center gap-2 md:gap-3">
                <span>✅</span>
                <span>Co bylo slíbeno</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                  <span className="text-green-600 text-xl">✓</span>
                  <div className="flex-1">
                    <div className="font-bold text-slate-900">Předsedové oddílů doloží seznamy členů</div>
                    <div className="text-sm text-slate-600 mt-1">Dohoda 24.8.2021</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                  <span className="text-green-600 text-xl">✓</span>
                  <div className="flex-1">
                    <div className="font-bold text-slate-900">Členské příspěvky 200 Kč/rok patří spolku</div>
                    <div className="text-sm text-slate-600 mt-1">Stanovy a dohoda</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                  <span className="text-green-600 text-xl">✓</span>
                  <div className="flex-1">
                    <div className="font-bold text-slate-900">Oddíly hradí náklady za provoz (energie)</div>
                    <div className="text-sm text-slate-600 mt-1">Dohoda o nákladech</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Co se nestalo */}
            <div className="bg-white rounded-2xl shadow-xl p-4 md:p-4 md:p-4 md:p-8 border-2 border-red-300">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-black mb-4 md:mb-6 text-red-700 flex items-center gap-2 md:gap-3">
                <span>❌</span>
                <span>Co se nestalo</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                  <span className="text-red-600 text-xl">✗</span>
                  <div className="flex-1">
                    <div className="font-bold text-slate-900">Seznamy NIKDY nebyly předány</div>
                    <div className="text-sm text-slate-600 mt-1">3+ roky, přes opakované výzvy</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                  <span className="text-red-600 text-xl">✗</span>
                  <div className="flex-1">
                    <div className="font-bold text-slate-900">Příspěvky vybírány, ale NEODVEDENY</div>
                    <div className="text-sm text-slate-600 mt-1">1.214.400 Kč (oddílové příspěvky)</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                  <span className="text-red-600 text-xl">✗</span>
                  <div className="flex-1">
                    <div className="font-bold text-slate-900">Energie NEPLACENY spolku</div>
                    <div className="text-sm text-slate-600 mt-1">299.921 Kč (spolek platil za oddíly)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 md:mt-8 p-4 md:p-4 md:p-6 bg-white rounded-xl shadow-lg text-center border-2 border-slate-300">
            <p className="text-sm md:text-base lg:text-lg text-slate-700 font-semibold">
              Fakta bez hodnocení. To, co bylo dohodnuto vs. to, co se skutečně stalo.
            </p>
          </div>
        </div>
      </div>

      {/* MEGA STATS - vizuální dominance čísel */}
      <div className="min-h-screen flex items-center justify-center py-8 md:py-8 md:py-16">
        <div className="container mx-auto px-4 md:px-3 md:px-8 max-w-7xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-center mb-6 md:mb-12 text-slate-900">
          Kauza v číslech
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-3 md:gap-6">
          <StatCard
            value={(2045635).toLocaleString('cs-CZ') + " Kč"}
            label="Celková škoda"
            icon="💸"
            color="red"
            trend="critical"
          />
          <StatCard
            value="3+ roky"
            label="Trvání kauzy"
            icon="⏰"
            color="orange"
            trend="warning"
          />
          <StatCard
            value="2"
            label="Vyloučení členové"
            icon="❌"
            color="red"
            trend="action"
          />
          <StatCard
            value="39 dní"
            label="Zpoždění žaloby"
            icon="⚖️"
            color="blue"
            trend="legal"
          />
        </div>
        </div>
      </div>

      {/* VIZUÁLNÍ BREAKDOWN */}
      <div className="min-h-screen flex items-center justify-center py-8 md:py-8 md:py-16">
        <div className="container mx-auto px-4 md:px-3 md:px-8 max-w-7xl">
      <div className="grid md:grid-cols-2 gap-4 md:gap-4 md:gap-8">
        {/* Levý - Škoda */}
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-4 md:p-4 md:p-8 border-2 border-red-200">
          <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center">
            <span className="text-3xl md:text-4xl mr-2 md:mr-3">💰</span>
            Rozložení škody
          </h3>
          <div className="space-y-4">
            <ProgressBar
              label="Zapřené oddílové příspěvky"
              value={1214400}
              max={2046000}
              color="red"
            />
            <ProgressBar
              label="Nezaplacené energie"
              value={299921}
              max={2046000}
              color="orange"
            />
            <ProgressBar
              label="Členské příspěvky + pokladny"
              value={321314}
              max={2046000}
              color="yellow"
            />
          </div>
          <div className="mt-6 pt-6 border-t-2 border-slate-200">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">CELKEM:</span>
              <span className="text-3xl font-black text-red-600">{(2045635).toLocaleString('cs-CZ')} Kč</span>
            </div>
          </div>
        </div>

        {/* Pravý - Timeline vizuální */}
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-4 md:p-4 md:p-8 border-2 border-blue-200">
          <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center">
            <span className="text-3xl md:text-4xl mr-2 md:mr-3">📅</span>
            Časová osa kauzy
          </h3>
          <div className="space-y-6">
            <TimelinePoint
              year="2021"
              label="Příprava"
              status="complete"
              description="Zvolení předsedy, dohody"
            />
            <TimelinePoint
              year="2022-23"
              label="Eskalace"
              status="complete"
              description="Výzvy ignorovány, vybírání bez odvodu"
            />
            <TimelinePoint
              year="2023"
              label="Vyloučení"
              status="complete"
              description="28.11. - Vaniš a Pivoňka vyloučeni"
            />
            <TimelinePoint
              year="2024"
              label="Soudní řízení"
              status="active"
              description="Žaloby PO LHŮTĚ, problematické rozhodnutí"
            />
          </div>
        </div>
      </div>
        </div>
      </div>

      {/* KLÍČOVÍ AKTÉŘI */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-600 to-red-700 py-8 md:py-8 md:py-16">
        <div className="container mx-auto px-4 md:px-3 md:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-center mb-6 md:mb-12 text-white">
            🎯 Klíčoví aktéři kauzy
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-3 md:gap-4 md:p-6">
            <a href="/akteri/miroslav-brozek" className="bg-white/10 backdrop-blur rounded-2xl p-4 md:p-4 md:p-8 hover:bg-white/20 transition transform hover:scale-105 border-2 border-green-400">
              <div className="text-4xl md:text-6xl mb-3 md:mb-4 text-center">✅</div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 text-center text-white">Miroslav Brožek</h3>
              <div className="text-sm text-slate-100 mb-4">Legitimní předseda Tělovýchovná jednota Krupka z.s.</div>
              <div className="space-y-2 text-sm">
                <div className="p-2 bg-green-500/40 rounded">Zvolen 24.8.2021 na 5 let</div>
                <div className="p-2 bg-green-500/40 rounded">Jednal v souladu se zákonem</div>
                <div className="p-2 bg-green-500/40 rounded">Potvrzeno Rozhodčí komisí ČAST</div>
              </div>
            </a>

            <a href="/akteri/marek-vanis" className="bg-white/10 backdrop-blur rounded-2xl p-4 md:p-4 md:p-8 hover:bg-white/20 transition transform hover:scale-105">
              <div className="text-4xl md:text-6xl mb-3 md:mb-4 text-center">🏓</div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 text-center text-white">Marek Vaniš</h3>
              <div className="text-sm text-slate-100 mb-4">Údajný předseda oddílu stolního tenisu</div>
              <div className="space-y-2 text-sm">
                <div className="p-2 bg-red-500/40 rounded">Nikdy nedoložil seznamy členů</div>
                <div className="p-2 bg-red-500/40 rounded">Spolek eviduje nesoulad 653 tis. Kč</div>
                <div className="p-2 bg-red-500/40 rounded">Vyloučen 28.11.2023</div>
              </div>
            </a>

            <a href="/akteri/jaromir-pivonka" className="bg-white/10 backdrop-blur rounded-2xl p-4 md:p-4 md:p-8 hover:bg-white/20 transition transform hover:scale-105">
              <div className="text-4xl md:text-6xl mb-3 md:mb-4 text-center">🏓</div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 text-center text-white">Jaromír Pivoňka</h3>
              <div className="text-sm text-slate-100 mb-4">Člen oddílu stolního tenisu</div>
              <div className="space-y-2 text-sm">
                <div className="p-2 bg-red-500/40 rounded">Spolupracovník Vaniše</div>
                <div className="p-2 bg-red-500/40 rounded">K datu neeviduje doložení předání pokladny</div>
                <div className="p-2 bg-red-500/40 rounded">Vyloučen 28.11.2023</div>
              </div>
            </a>

            <a href="/akteri/gustav-vlach" className="bg-white/10 backdrop-blur rounded-2xl p-4 md:p-4 md:p-8 hover:bg-white/20 transition transform hover:scale-105">
              <div className="text-4xl md:text-6xl mb-3 md:mb-4 text-center">⛷️</div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 text-center text-white">Gustav Vlach</h3>
              <div className="text-sm text-slate-100 mb-4">Předseda lyžařského oddílu</div>
              <div className="space-y-2 text-sm">
                <div className="p-2 bg-red-500/40 rounded">Nikdy nedoložil seznamy členů</div>
                <div className="p-2 bg-red-500/40 rounded">Spolek eviduje nesoulad 1,04 mil. Kč</div>
                <div className="p-2 bg-red-500/40 rounded">Zánik členství prosinec 2023</div>
              </div>
            </a>
          </div>

          <div className="mt-10 text-center">
            <a href="/akteri" className="inline-block px-3 md:px-8 py-3 bg-white text-red-700 font-bold rounded-xl hover:bg-slate-100 transition transform hover:scale-105 shadow-lg">
              👥 Zobrazit všechny aktéry →
            </a>
          </div>
        </div>
      </div>

      {/* QUICK ACTIONS - vizuální CTA */}
      <div className="min-h-screen flex items-center justify-center py-8 md:py-16">
        <div className="container mx-auto px-3 md:px-8 max-w-7xl">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        <ActionCard
          href="/prehled"
          icon="⚡"
          title="5min přehled"
          description="Rychlý start"
          color="blue"
          time="5 minut"
        />
        <ActionCard
          href="/cisla"
          icon="💰"
          title="Vysvětlení v číslech"
          description="Finanční rozpis"
          color="orange"
          time="8 minut"
        />
        <ActionCard
          href="/otazky"
          icon="❓"
          title="Klíčové otázky"
          description="Co víme vs. co nevíme"
          color="purple"
          time="10 minut"
        />
        <ActionCard
          href="/udalosti"
          icon="📅"
          title="Celá timeline"
          description="Kompletní chronologie"
          color="orange"
          time="15 minut"
        />
      </div>
        </div>
      </div>

      {/* JAK TO VŠECHNO ZAČALO */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 py-8 md:py-16">
        <div className="container mx-auto px-3 md:px-8 max-w-7xl">
        <h2 className="text-4xl font-black text-center mb-8 text-white">
          🎬 Jak to všechno začalo?
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur rounded-2xl p-4 md:p-8 mb-6">
            <div className="text-xl font-bold mb-4">📅 24. srpna 2021</div>
            <p className="text-lg mb-4">
              Na shromáždění delegátů byl <strong>jednomyslně zvolen</strong> Miroslav Brožek
              předsedou Tělovýchovná jednota Krupka z.s. na <strong>5 let</strong>.
            </p>
            <div className="mt-6 p-4 bg-white/10 rounded-xl">
              <div className="text-sm font-semibold mb-3">Kdo ho zvolil (přítomní delegáti):</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div>• Marek Vaniš</div>
                <div>• Gustav Vlach</div>
                <div>• Antonín Rosenkranc</div>
                <div>• Jiří Kulík</div>
                <div>• Martin Kulík</div>
                <div>• Zbyněk Brei</div>
                <div>• Romana Vodvářková</div>
                <div>• pí. Kratochvílová</div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
            <div className="text-xl font-bold mb-4">🤝 První dohoda</div>
            <p className="text-lg">
              Všichni předsedové oddílů přislíbili, že doloží <strong>aktualizované seznamy členů</strong>.
            </p>
            <p className="text-lg mt-3 text-blue-100">
              <strong>Důvod:</strong> Členská základna byla neaktuální (obsahovala osoby starší 100 let)
            </p>
          </div>
        </div>
        </div>
      </div>

      {/* PROČ TO VŠECHNO ZAČALO */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-700 py-8 md:py-16">
        <div className="container mx-auto px-3 md:px-8 max-w-7xl">
        <h2 className="text-4xl font-black text-center mb-8 text-white">
          🤔 Proč to všechno začalo?
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-3 md:gap-6">
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-xl font-bold mb-3">Záměr nového předsedy</h3>
            <ul className="space-y-2 text-sm">
              <li>✓ Transparentnost</li>
              <li>✓ Řádné účetnictví</li>
              <li>✓ Aktuální členská evidence</li>
              <li>✓ Dodržování zákonů a stanov</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
            <div className="text-3xl mb-3">⚠️</div>
            <h3 className="text-xl font-bold mb-3">Co se ale ukázalo</h3>
            <ul className="space-y-2 text-sm">
              <li>✗ Předsedové oddílů nepředávali seznamy</li>
              <li>✗ Vybírali příspěvky, ale neodváděli je</li>
              <li>✗ Neplatili náklady na energie</li>
              <li>✗ Ignorovali výzvy a předžalobní výzvy</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 max-w-4xl mx-auto bg-white/20 backdrop-blur rounded-2xl p-4 md:p-6 text-center">
          <p className="text-xl font-semibold">
            💡 Kauza vznikla pokusem o <strong>nápravu chaosu</strong>, který narazil na
            <strong> systematické porušování povinností</strong> a <strong>nečinnost</strong>.
          </p>
        </div>
        </div>
      </div>

      {/* EXISTUJÍ DŮKAZY? */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-500 to-green-700 py-8 md:py-16">
        <div className="container mx-auto px-3 md:px-8 max-w-7xl">
        <h2 className="text-4xl font-black text-center mb-8 text-white">
          📋 Existují důkazy?
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-7xl font-black mb-4">ANO</div>
            <p className="text-xl">Každé tvrzení je podloženo dokumenty</p>
          </div>

          <div className="grid md:grid-cols-3 gap-3 md:gap-6">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-4 md:p-6 text-center">
              <div className="text-5xl mb-3">📧</div>
              <div className="text-3xl font-black mb-2">50+</div>
              <div className="text-sm">emailů a výzev</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-4 md:p-6 text-center">
              <div className="text-5xl mb-3">📄</div>
              <div className="text-3xl font-black mb-2">20+</div>
              <div className="text-sm">právních dokumentů</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-4 md:p-6 text-center">
              <div className="text-5xl mb-3">⚖️</div>
              <div className="text-3xl font-black mb-2">100%</div>
              <div className="text-sm">ověřitelných faktů</div>
            </div>
          </div>

          <div className="mt-8 bg-white/20 backdrop-blur rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4">📎 Klíčové dokumenty:</h3>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div>✓ Zápis ze shromáždění 24.8.2021</div>
              <div>✓ Výzvy k předání seznamů (září-prosinec 2021)</div>
              <div>✓ Předžalobní výzvy (listopad 2023)</div>
              <div>✓ Rozhodnutí o vyloučení (datové schránky)</div>
              <div>✓ Policejní výslechy (přiznání)</div>
              <div>✓ Účetní doklady a vyúčtování</div>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* HOSPODAŘENÍ ODDÍLŮ */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-900 py-8 md:py-16">
        <div className="container mx-auto px-3 md:px-8 max-w-7xl">
        <h2 className="text-4xl font-black text-center mb-8 text-white">
          📊 Hospodaření oddílů
        </h2>
        <p className="text-center text-lg mb-10 text-slate-200">
          Finanční situace jednotlivých oddílů podle dokumentu "TJ ODDÍLY 2021-2023 - výsledek hospodaření"
        </p>

        <div className="grid md:grid-cols-3 gap-3 md:gap-4 md:p-6 max-w-5xl mx-auto">
          {/* Oddíl stolního tenisu */}
          <a
            href="/akteri/marek-vanis"
            className="bg-white/10 backdrop-blur rounded-2xl p-4 md:p-6 hover:bg-white/20 transition transform hover:scale-105"
          >
            <div className="text-4xl mb-3 text-center">🏓</div>
            <h3 className="text-xl font-bold mb-3 text-center">Stolní tenis</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between p-2 bg-red-500/30 rounded">
                <span>Celková škoda:</span>
                <span className="font-bold">{(653659).toLocaleString('cs-CZ')} Kč</span>
              </div>
              <div className="flex justify-between p-2 bg-orange-500/30 rounded">
                <span>Oddílové přísp.:</span>
                <span className="font-bold">{(518400).toLocaleString('cs-CZ')} Kč</span>
              </div>
              <div className="flex justify-between p-2 bg-yellow-500/30 rounded">
                <span>Členské přísp.:</span>
                <span className="font-bold">{(48000).toLocaleString('cs-CZ')} Kč</span>
              </div>
              <div className="flex justify-between p-2 bg-yellow-500/30 rounded">
                <span>Energie:</span>
                <span className="font-bold">{(43466).toLocaleString('cs-CZ')} Kč</span>
              </div>
              <div className="flex justify-between p-2 bg-blue-500/30 rounded">
                <span>Pokladna 2020:</span>
                <span className="font-bold">{(43793).toLocaleString('cs-CZ')} Kč</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/20 text-xs text-slate-300">
              <div>Odpovědní:</div>
              <div className="font-semibold">→ Marek Vaniš (předseda)</div>
              <div className="font-semibold">→ Jaromír Pivoňka (člen)</div>
            </div>
          </a>

          {/* Lyžařský oddíl */}
          <a
            href="/akteri/gustav-vlach"
            className="bg-white/10 backdrop-blur rounded-2xl p-4 md:p-6 hover:bg-white/20 transition transform hover:scale-105"
          >
            <div className="text-4xl mb-3 text-center">⛷️</div>
            <h3 className="text-xl font-bold mb-3 text-center">Lyžařský oddíl</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between p-2 bg-red-500/30 rounded">
                <span>Celková škoda:</span>
                <span className="font-bold">{(1041378).toLocaleString('cs-CZ')} Kč</span>
              </div>
              <div className="flex justify-between p-2 bg-orange-500/30 rounded">
                <span>Oddílové přísp.:</span>
                <span className="font-bold">{(379200).toLocaleString('cs-CZ')} Kč</span>
              </div>
              <div className="flex justify-between p-2 bg-yellow-500/30 rounded">
                <span>Členské přísp.:</span>
                <span className="font-bold">{(63200).toLocaleString('cs-CZ')} Kč</span>
              </div>
              <div className="flex justify-between p-2 bg-yellow-500/30 rounded">
                <span>Energie (TJ zaplatila):</span>
                <span className="font-bold">{(256455).toLocaleString('cs-CZ')} Kč</span>
              </div>
              <div className="flex justify-between p-2 bg-blue-500/30 rounded">
                <span>Pokladna 2020:</span>
                <span className="font-bold">{(132523).toLocaleString('cs-CZ')} Kč</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/20 text-xs text-slate-300">
              <div>Odpovědný:</div>
              <div className="font-semibold">→ Gustav Vlach (předseda)</div>
            </div>
          </a>

          {/* Oddíl karate */}
          <a
            href="/akteri/martin-kulik"
            className="bg-white/10 backdrop-blur rounded-2xl p-4 md:p-6 hover:bg-white/20 transition transform hover:scale-105"
          >
            <div className="text-4xl mb-3 text-center">🥋</div>
            <h3 className="text-xl font-bold mb-3 text-center">Karate</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between p-2 bg-red-500/30 rounded">
                <span>Celková škoda:</span>
                <span className="font-bold">{(350598).toLocaleString('cs-CZ')} Kč</span>
              </div>
              <div className="flex justify-between p-2 bg-orange-500/30 rounded">
                <span>Oddílové přísp.:</span>
                <span className="font-bold">{(316800).toLocaleString('cs-CZ')} Kč</span>
              </div>
              <div className="flex justify-between p-2 bg-yellow-500/30 rounded">
                <span>Členské přísp.:</span>
                <span className="font-bold">{(32000).toLocaleString('cs-CZ')} Kč</span>
              </div>
              <div className="flex justify-between p-2 bg-green-500/30 rounded">
                <span>Energie:</span>
                <span className="font-bold">0 Kč</span>
              </div>
              <div className="flex justify-between p-2 bg-blue-500/30 rounded">
                <span>Pokladna 2020:</span>
                <span className="font-bold">{(1798).toLocaleString('cs-CZ')} Kč</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/20 text-xs text-slate-300">
              <div>Poznámka:</div>
              <div className="text-xs">Předsedou byl Jiří Kulík, ne Martin Kulík</div>
            </div>
          </a>
        </div>

        <div className="mt-10 text-center">
          <a
            href="/cisla"
            className="inline-block px-3 md:px-8 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition transform hover:scale-105 shadow-lg"
          >
            💰 Zobrazit detailní finanční rozpis →
          </a>
        </div>
        </div>
      </div>

      {/* KAUZA NA JEDEN POHLED - Infografika */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-500 to-red-700 py-8 md:py-16">
        <div className="container mx-auto px-3 md:px-8 max-w-7xl">
        <h2 className="text-4xl font-black text-center mb-12 text-white">
          ⚠️ Jádro problému
        </h2>
        <div className="grid md:grid-cols-3 gap-4 md:gap-4 md:p-8 text-center">
          <div>
            <div className="text-6xl font-black mb-2">0</div>
            <div className="text-xl font-bold mb-1">seznamů členů</div>
            <div className="text-red-200 text-sm">předáno za 3+ roky</div>
          </div>
          <div>
            <div className="text-6xl font-black mb-2">{(1214400).toLocaleString('cs-CZ')}</div>
            <div className="text-xl font-bold mb-1">zapřených příspěvků</div>
            <div className="text-red-200 text-sm">vybírali, ale neodvedli (Kč)</div>
          </div>
          <div>
            <div className="text-6xl font-black mb-2">39</div>
            <div className="text-xl font-bold mb-1">dní po lhůtě</div>
            <div className="text-red-200 text-sm">podána žaloba</div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <p className="text-xl font-semibold">
            = Systematické porušování povinností + Žaloba mimo lhůtu
          </p>
        </div>
        </div>
      </div>

      {/* PROSTÁ FAKTA */}
      <div className="min-h-screen flex items-center justify-center bg-white py-8 md:py-16">
        <div className="container mx-auto px-3 md:px-8 max-w-7xl">
        <h2 className="text-3xl font-black text-center mb-10 text-slate-900">
          Prostá fakta (bez interpretací)
        </h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          <FactBox
            icon="✅"
            title="Co bylo slíbeno"
            facts={[
              "Předsedové oddílů doloží seznamy členů (24.8.2021)",
              "Členské příspěvky 200 Kč/rok patří spolku",
              "Oddíly hradí náklady za provoz (energie)",
            ]}
            color="green"
          />
          <FactBox
            icon="❌"
            title="Co se nestalo"
            facts={[
              "Seznamy NIKDY nebyly předány (3+ roky)",
              `Oddílové příspěvky vybírány, ale NEODVEDENY (${(1214400).toLocaleString('cs-CZ')} Kč)`,
              `Energie NEPLACENY (${(299921).toLocaleString('cs-CZ')} Kč), TJ musela platit`,
            ]}
            color="red"
          />
        </div>
        </div>
      </div>
    </div>
  );
}
