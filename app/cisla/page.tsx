import Link from 'next/link';

// KOMPONENTY PRO VIZUALIZACI FINANCÍ

interface FinancialCardProps {
  name: string;
  role: string;
  totalAmount: number;
  breakdown: Array<{
    label: string;
    amount: number;
    period?: string;
    status: 'confirmed' | 'admitted' | 'calculated';
  }>;
  evidence: string[];
  actorSlug: string;
  severity: 'high' | 'medium' | 'low';
}

function FinancialCard({ name, role, totalAmount, breakdown, evidence, actorSlug, severity }: FinancialCardProps) {
  const severityColors = {
    high: 'border-red-300 bg-red-50',
    medium: 'border-orange-300 bg-orange-50',
    low: 'border-yellow-300 bg-yellow-50',
  };

  const severityBadges = {
    high: 'bg-red-600 text-white',
    medium: 'bg-orange-600 text-white',
    low: 'bg-yellow-600 text-white',
  };

  const statusIcons = {
    confirmed: '✓',
    admitted: '📝',
    calculated: '🧮',
  };

  const statusLabels = {
    confirmed: 'Potvrzeno',
    admitted: 'Přiznáno',
    calculated: 'Vypočteno',
  };

  return (
    <div className={`p-6 rounded-xl border-2 ${severityColors[severity]} mb-6`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <Link href={`/akteri/${actorSlug}`} className="text-2xl font-bold text-slate-900 hover:text-blue-600 transition">
            {name} →
          </Link>
          <div className="text-sm text-slate-600">{role}</div>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-bold ${severityBadges[severity]}`}>
          {totalAmount.toLocaleString('cs-CZ')} Kč
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-slate-700 mb-3">Rozpis:</h4>
        <div className="space-y-2">
          {breakdown.map((item, i) => (
            <div key={i} className="flex items-start justify-between p-3 bg-white rounded-lg">
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{statusIcons[item.status]}</span>
                  <span className="text-sm font-medium text-slate-900">{item.label}</span>
                </div>
                {item.period && (
                  <div className="text-xs text-slate-500 ml-7">{item.period}</div>
                )}
                <div className="text-xs text-slate-500 ml-7">{statusLabels[item.status]}</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-slate-900">{item.amount.toLocaleString('cs-CZ')} Kč</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-slate-300">
        <div className="text-xs font-semibold text-slate-600 mb-2">📎 Důkazy:</div>
        <div className="space-y-1">
          {evidence.map((item, i) => (
            <div key={i} className="text-xs text-slate-700 flex items-start">
              <span className="mr-2">•</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface SummaryStatProps {
  label: string;
  value: string;
  icon: string;
  color: 'red' | 'orange' | 'blue' | 'green';
}

function SummaryStat({ label, value, icon, color }: SummaryStatProps) {
  const colors = {
    red: 'bg-gradient-to-br from-red-500 to-red-600',
    orange: 'bg-gradient-to-br from-orange-500 to-orange-600',
    blue: 'bg-gradient-to-br from-blue-500 to-blue-600',
    green: 'bg-gradient-to-br from-green-500 to-green-600',
  };

  return (
    <div className={`${colors[color]} text-white rounded-2xl p-6 text-center`}>
      <div className="text-5xl mb-3">{icon}</div>
      <div className="text-3xl font-black mb-2">{value}</div>
      <div className="text-sm font-medium opacity-90">{label}</div>
    </div>
  );
}

export default function CislaPage() {
  // Finanční data pro každého aktéra
  const financialData: FinancialCardProps[] = [
    {
      name: 'Marek Vaniš',
      role: 'Údajný předseda oddílu stolního tenisu',
      actorSlug: 'marek-vanis',
      totalAmount: 653659,
      severity: 'high',
      breakdown: [
        {
          label: 'Zapřené oddílové příspěvky',
          amount: 518400,
          period: '60 členů × 2.400 Kč/rok/člen × 3 roky (2021-2023)',
          status: 'calculated',
        },
        {
          label: 'Nezaplacené členské příspěvky',
          amount: 48000,
          period: '60 členů × 200 Kč/rok × 4 roky (2020-2023)',
          status: 'confirmed',
        },
        {
          label: 'Nezaplacené energie (elektřina + plyn)',
          amount: 43466,
          period: 'TJ zaplatila za oddíl (10.415 Kč + 33.051 Kč)',
          status: 'confirmed',
        },
        {
          label: 'Pokladna oddílu k 31.12.2020',
          amount: 43793,
          period: 'Nepředáno spolku',
          status: 'admitted',
        },
      ],
      evidence: [
        'PDF dokument "TJ ODDÍLY 2021-2023 - výsledek hospodaření"',
        'Přiznání při policejním výslechu - Vaniš uvedl, že vybíral příspěvky jménem spolku',
        'Opakované výzvy k úhradě nebo předání seznamů (září-prosinec 2021)',
        'Předžalobní výzvy (listopad 2023)',
        'Nevydání seznamů členů za 3+ roky',
        'Judikatura NS ČR 5 Tdo 663/2015 - identický případ zpronevěry',
      ],
    },
    {
      name: 'Gustav Vlach',
      role: 'Předseda lyžařského oddílu',
      actorSlug: 'gustav-vlach',
      totalAmount: 1041378,
      severity: 'high',
      breakdown: [
        {
          label: 'Zapřené oddílové příspěvky',
          amount: 379200,
          period: '79 členů × 1.200 Kč/rok/člen × 4 roky (2020-2023)',
          status: 'calculated',
        },
        {
          label: 'Nezaplacené členské příspěvky',
          amount: 63200,
          period: '79 členů × 200 Kč/rok × 4 roky (2020-2023)',
          status: 'confirmed',
        },
        {
          label: 'Nezaplacené energie',
          amount: 256455,
          period: 'TJ musela zaplatit za lyžařský oddíl (pouze elektřina)',
          status: 'confirmed',
        },
        {
          label: 'Pokladna oddílu k 31.12.2020',
          amount: 132523,
          period: 'Vlach přiznal, ale nepředal',
          status: 'admitted',
        },
      ],
      evidence: [
        'PDF dokument "TJ ODDÍLY 2021-2023 - výsledek hospodaření"',
        'Přiznání Vlacha - písemně uvedl částku 132.523 Kč v pokladně',
        'Výzvy k předání finančních prostředků',
        'Nedodání seznamů členů a účetní dokumentace',
        'Účetní doklady TJ - platby za energie lyžařského oddílu',
      ],
    },
    {
      name: 'Martin Kulík (oddíl Karate)',
      role: 'Údajný předseda oddílu karate',
      actorSlug: 'martin-kulik',
      totalAmount: 350598,
      severity: 'medium',
      breakdown: [
        {
          label: 'Zapřené oddílové příspěvky',
          amount: 316800,
          period: '40 členů × 3.600 Kč/rok/člen × 2,2 roku',
          status: 'calculated',
        },
        {
          label: 'Nezaplacené členské příspěvky',
          amount: 32000,
          period: '40 členů × 200 Kč/rok × 4 roky (2020-2023)',
          status: 'confirmed',
        },
        {
          label: 'Nezaplacené energie',
          amount: 0,
          period: 'Karate nemělo samostatné odběrné místo',
          status: 'confirmed',
        },
        {
          label: 'Pokladna oddílu k 31.12.2020',
          amount: 1798,
          period: 'Nepředáno spolku',
          status: 'admitted',
        },
      ],
      evidence: [
        'PDF dokument "TJ ODDÍLY 2021-2023 - výsledek hospodaření"',
        'Nedodání seznamů členů',
        'Neuhrazení členských příspěvků',
        'Zápis ze shromáždění - předsedou oddílu karate byl Jiří Kulík, ne Martin',
        'Zánik členství dle § 238 NOZ',
      ],
    },
    {
      name: 'Jitka Illéšová',
      role: 'Účetní spolku',
      actorSlug: 'jitka-illesova',
      totalAmount: 30000,
      severity: 'medium',
      breakdown: [
        {
          label: 'Honorář za účetnictví 2021',
          amount: 30000,
          period: '6 × 5.000 Kč',
          status: 'confirmed',
        },
        {
          label: 'Uzavření účetnictví 2021',
          amount: 0,
          period: 'Práce nebyla dokončena',
          status: 'confirmed',
        },
      ],
      evidence: [
        'Platební příkazy - 6 plateb po 5.000 Kč',
        'Odmítnutí uzavřít účetnictví 2021',
        'Předání dokumentů městu Krupka (neoprávněně)',
        'Zadržování účetní dokumentace',
      ],
    },
  ];

  // Celkové sumy
  const totalDamage = financialData.reduce((sum, item) => sum + item.totalAmount, 0);
  const highSeverity = financialData.filter(d => d.severity === 'high').reduce((s, d) => s + d.totalAmount, 0);

  return (
    <div className="container mx-auto px-8 py-12 max-w-6xl">
      {/* Hlavička */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          💰 Vysvětlení v číslech
        </h1>
        <p className="text-xl text-slate-600">
          Detailní finanční rozpis škody podle jednotlivých aktérů. Každá položka je podložena důkazy.
        </p>
      </div>

      {/* Infoblok */}
      <div className="mb-12 p-6 bg-blue-50 rounded-xl border border-blue-200">
        <h3 className="text-lg font-bold text-blue-900 mb-3">
          📊 Jak číst tuto stránku
        </h3>
        <div className="text-sm text-blue-900 space-y-2">
          <p>
            <strong>Status značek:</strong>
          </p>
          <ul className="list-none ml-4 space-y-1">
            <li>✓ <strong>Potvrzeno</strong> - ověřeno z dokumentů nebo oficiálních zdrojů</li>
            <li>📝 <strong>Přiznáno</strong> - osoba sama přiznala při výslechu nebo písemně</li>
            <li>🧮 <strong>Vypočteno</strong> - kalkulace na základě známých dat</li>
          </ul>
          <p className="mt-3">
            Všechny částky jsou v Kč. Kliknutím na jméno aktéra přejdete na jeho profil.
          </p>
        </div>
      </div>

      {/* Přehledové statistiky */}
      <div className="grid md:grid-cols-4 gap-4 mb-12">
        <SummaryStat
          icon="💸"
          value={`${(totalDamage / 1000000).toFixed(1)} mil.`}
          label="Celková škoda"
          color="red"
        />
        <SummaryStat
          icon="⚠️"
          value={`${(highSeverity / 1000000).toFixed(1)} mil.`}
          label="Vysoká závažnost"
          color="orange"
        />
        <SummaryStat
          icon="👥"
          value={financialData.length.toString()}
          label="Aktérů"
          color="blue"
        />
        <SummaryStat
          icon="📄"
          value="50+"
          label="Důkazů"
          color="green"
        />
      </div>

      {/* Finanční karty jednotlivých aktérů */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Rozpis podle aktérů
        </h2>
        {financialData.map((data, index) => (
          <FinancialCard key={index} {...data} />
        ))}
      </div>

      {/* Celkový součet */}
      <div className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-2xl p-8 mb-12">
        <h2 className="text-3xl font-black mb-6 text-center">
          📊 Celkový přehled škody
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-white/10 backdrop-blur rounded-lg">
              <span className="font-semibold">🏓 Stolní tenis (Vaniš, Pivoňka)</span>
              <span className="text-2xl font-black">653.659 Kč</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-white/10 backdrop-blur rounded-lg">
              <span className="font-semibold">⛷️ Lyžaři (Vlach)</span>
              <span className="text-2xl font-black">1.041.378 Kč</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-white/10 backdrop-blur rounded-lg">
              <span className="font-semibold">🥋 Karate (Kulík)</span>
              <span className="text-2xl font-black">350.598 Kč</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-white/10 backdrop-blur rounded-lg">
              <span className="font-semibold">👩‍💼 Účetní (Illéšová)</span>
              <span className="text-2xl font-black">30.000 Kč</span>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t-2 border-white/30">
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold">CELKEM:</span>
              <span className="text-5xl font-black">2.076 mil. Kč</span>
            </div>
            <p className="text-center text-sm mt-4 text-white/80">
              Dle dokumentu "TJ ODDÍLY 2021-2023 - výsledek hospodaření"
            </p>
          </div>
        </div>
      </div>

      {/* Souvislející sekce */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">
            🔗 Související sekce
          </h3>
          <div className="space-y-2">
            <Link href="/akteri" className="block text-sm text-blue-600 hover:underline">
              → Profily všech aktérů
            </Link>
            <Link href="/dokumenty" className="block text-sm text-blue-600 hover:underline">
              → Dokumenty a důkazy
            </Link>
            <Link href="/temata/finance-a-majetek" className="block text-sm text-blue-600 hover:underline">
              → Téma: Finance a majetek
            </Link>
            <Link href="/otazky/kdo-koho-poskodil" className="block text-sm text-blue-600 hover:underline">
              → Otázka: Kdo koho poškodil?
            </Link>
          </div>
        </div>

        <div className="p-6 bg-amber-50 rounded-lg border border-amber-200">
          <h3 className="text-lg font-bold text-amber-900 mb-4">
            ⚖️ Právní kontext
          </h3>
          <div className="text-sm text-amber-900 space-y-2">
            <p>
              <strong>§ 206 TZ - Zpronevěra:</strong> Vybírání příspěvků bez odvodu
            </p>
            <p>
              <strong>§ 2991 NOZ - Neoprávněné obohacení:</strong> Používání prostor bez úhrady
            </p>
            <p>
              <strong>NS ČR 5 Tdo 663/2015:</strong> Judikatura k identickému případu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
