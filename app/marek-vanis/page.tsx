export default function MarekVanisPage() {
  const actor = {
    slug: 'marek-vanis',
    name: 'Marek Vaniš',
    role: 'Údajný předseda oddílu stolního tenisu',
    category: 'Vyloučení členové',
    status: 'negative',
    summary: 'Nikdy nedoložil legitimnost své funkce. Nedodal seznamy členů. Vybíral příspěvky, ale neodváděl je.',
    keyActions: [
      'Nedodal seznamy členů (3+ roky)',
      'Neuhradil členské příspěvky',
      'Vybíral příspěvky jménem spolku (přiznal při výslechu)',
      'Neoprávněně svolával schůze',
      'Pokusil se převést majetek na město',
      'Vyloučen 28.11.2023',
    ],
    relatedEvents: 15,
  };

  const statusColors = {
    positive: 'border-green-300 bg-green-50',
    negative: 'border-red-300 bg-red-50',
    neutral: 'border-slate-300 bg-slate-50',
  };

  const statusIcons = {
    positive: '✅',
    negative: '❌',
    neutral: '➖',
  };

  return (
    <div className="container mx-auto px-8 py-12 max-w-6xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl font-bold text-slate-900">{actor.name}</h1>
        <span className={`text-sm font-semibold px-3 py-1 rounded-full ${actor.status === 'negative' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
          {actor.category}
        </span>
      </div>

      <p className="text-xl text-slate-600 mb-6">
        {actor.role}
      </p>

      <div className={`p-6 rounded-lg border-2 ${statusColors[actor.status]} mb-8`}>
        <div className="flex items-center mb-3">
          <span className="text-2xl mr-3">{statusIcons[actor.status]}</span>
          <h3 className="text-2xl font-semibold text-slate-900">Přehled</h3>
        </div>
        <p className="text-lg text-slate-700">{actor.summary}</p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-slate-900 mb-4">Klíčové kroky a události</h3>
        <ul className="list-disc list-inside space-y-2 text-lg text-slate-700">
          {actor.keyActions.map((action, index) => (
            <li key={index}>{action}</li>
          ))}
        </ul>
      </div>

      <div className="flex items-center text-lg text-slate-600">
        <span>📅 {actor.relatedEvents} souvisejících událostí</span>
      </div>
    </div>
  );
}
