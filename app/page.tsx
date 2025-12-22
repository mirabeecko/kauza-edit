import Link from 'next/link';

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
    <div className={`bg-gradient-to-br ${colors[color]} rounded-2xl p-6 text-white shadow-xl border-4 transform hover:scale-105 transition`}>
      <div className="text-5xl mb-3">{icon}</div>
      <div className="text-4xl font-black mb-2">{value}</div>
      <div className="text-lg font-semibold opacity-90">{label}</div>
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
      <div className="flex justify-between mb-2">
        <span className="font-semibold">{label}</span>
        <span className="font-bold">{(value / 1000).toFixed(0)}k Kč</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-6 overflow-hidden">
        <div
          className={`${colors[color]} h-full rounded-full transition-all duration-1000 flex items-center justify-end pr-2`}
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
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center font-black text-lg ${
          status === 'active'
            ? 'bg-blue-500 text-white animate-pulse'
            : 'bg-green-500 text-white'
        }`}>
          {status === 'active' ? '▶' : '✓'}
        </div>
      </div>
      <div className="flex-1">
        <div className="font-bold text-lg">{year}</div>
        <div className="text-xl font-black text-slate-900">{label}</div>
        <div className="text-sm text-slate-600">{description}</div>
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
      <div className={`bg-gradient-to-br ${colors[color]} rounded-2xl p-8 text-white shadow-xl transform hover:scale-105 transition h-full`}>
        <div className="text-6xl mb-4">{icon}</div>
        <h3 className="text-2xl font-black mb-2">{title}</h3>
        <p className="text-white/80 mb-4">{description}</p>
        <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
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
    <div className={`${colors[color]} rounded-2xl p-6 border-2`}>
      <h3 className="text-3xl font-black mb-4 flex items-center">
        <span className="mr-3 text-4xl">{icon}</span>
        {title}
      </h3>
      <ul className="space-y-3">
        {facts.map((fact, i) => (
          <li key={i} className="flex items-start">
            <span className="mr-3 text-xl flex-shrink-0">{color === 'green' ? '✓' : '✗'}</span>
            <span className="font-semibold">{fact}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// HLAVNÍ KOMPONENTA

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 min-h-screen">
      {/* Hero sekce - dramatická */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzFmMjkzNyIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="container mx-auto px-8 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-red-600 text-white text-sm font-bold rounded-full mb-6 animate-pulse">
              🚨 AKTIVNÍ KAUZA
            </div>
            <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
              Kauza<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                TJ Krupka z.s.
              </span>
            </h1>
            <p className="text-2xl text-blue-200 mb-8">
              2 miliony Kč škody • 3+ roky trvání • 0 trestně stíhaných
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/prehled" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold text-lg transition transform hover:scale-105 shadow-2xl">
                ⚡ Začít zde
              </Link>
              <Link href="/otazky" className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-xl font-bold text-lg transition backdrop-blur">
                ❓ Klíčové otázky
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 py-16 max-w-7xl">

      {/* MEGA STATS - vizuální dominance čísel */}
      <div className="mb-20">
        <h2 className="text-4xl font-black text-center mb-12 text-slate-900">
          Kauza v číslech
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          <StatCard
            value="2 mil. Kč"
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

      {/* VIZUÁLNÍ BREAKDOWN */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {/* Levý - Škoda */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-red-200">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <span className="text-4xl mr-3">💰</span>
            Rozložení škody
          </h3>
          <div className="space-y-4">
            <ProgressBar
              label="Nezaplacené příspěvky"
              value={500000}
              max={2000000}
              color="red"
            />
            <ProgressBar
              label="Nezaplacené energie"
              value={560000}
              max={2000000}
              color="orange"
            />
            <ProgressBar
              label="Soudní výlohy + ostatní"
              value={940000}
              max={2000000}
              color="yellow"
            />
          </div>
          <div className="mt-6 pt-6 border-t-2 border-slate-200">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">CELKEM:</span>
              <span className="text-3xl font-black text-red-600">2 mil. Kč</span>
            </div>
          </div>
        </div>

        {/* Pravý - Timeline vizuální */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-200">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <span className="text-4xl mr-3">📅</span>
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

      {/* QUICK ACTIONS - vizuální CTA */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <ActionCard
          href="/prehled"
          icon="⚡"
          title="5min přehled"
          description="Rychlý start"
          color="blue"
          time="5 minut"
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

      {/* KAUZA NA JEDEN POHLED - Infografika */}
      <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-3xl shadow-2xl p-12 text-white mb-20">
        <h2 className="text-4xl font-black text-center mb-12">
          ⚠️ Jádro problému
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-6xl font-black mb-2">0</div>
            <div className="text-xl font-bold mb-1">seznamů členů</div>
            <div className="text-red-200 text-sm">předáno za 3+ roky</div>
          </div>
          <div>
            <div className="text-6xl font-black mb-2">500k</div>
            <div className="text-xl font-bold mb-1">vybráno, neodvedeno</div>
            <div className="text-red-200 text-sm">členské příspěvky (Kč)</div>
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

      {/* PROSTÁ FAKTA */}
      <div className="bg-white rounded-3xl shadow-xl p-10 border-2 border-slate-200 mb-20">
        <h2 className="text-3xl font-black text-center mb-10 text-slate-900">
          Prostá fakta (bez interpretací)
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
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
              "Příspěvky vybírány, ale NEODVEDENY (500k Kč)",
              "Energie NEPLACENY (560k Kč za 4 roky)",
            ]}
            color="red"
          />
        </div>
      </div>
    </div>
  </div>
  );
}
