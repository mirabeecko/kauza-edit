export default function MarekVanisPage() {
  const actor = {
    name: 'Marek Vaniš',
    role: 'Údajný předseda oddílu stolního tenisu',
    department: 'Stolní tenis',
    departmentIcon: '🏓',
    status: 'negative' as const,
    totalDamage: 653659,
    summary: 'Celková škoda oddílu stolního tenisu: 653.659 Kč. Nedodal seznamy členů, vybíral příspěvky ale neodváděl je.',
    breakdown: [
      {
        label: 'Zapřené oddílové příspěvky',
        amount: 518400,
        description: '60 členů × 2.400 Kč/rok × 3,6 roku (2020-2023). Vybíral příspěvky jménem spolku (přiznal při výslechu), ale spolku je neodvedl.',
        severity: 'critical' as const,
      },
      {
        label: 'Nezaplacené členské příspěvky',
        amount: 48000,
        description: '60 členů × 200 Kč/rok × 4 roky (2021-2024). Úhrada svazům ČSTV, Ústeckému kraji, obci.',
        severity: 'high' as const,
      },
      {
        label: 'Nezaplacené energie',
        amount: 43466,
        description: 'Elektřina 10.415 Kč + plyn 33.051 Kč (2020-2023). Oddíl používal prostory, ale energie neplatil.',
        severity: 'high' as const,
      },
      {
        label: 'Pokladna oddílu k 31.12.2020',
        amount: 43793,
        description: 'Hotovost v pokladně oddílu k 31.12.2020 nebyla předána ani vyúčtována.',
        severity: 'medium' as const,
      },
    ],
    keyActions: [
      { text: 'Nedodal seznamy členů', date: '2021-2024', type: 'violation' },
      { text: 'Vybíral příspěvky jménem spolku (přiznal při výslechu)', date: '2020-2024', type: 'violation' },
      { text: 'Neuhradil členské příspěvky', amount: 48000, date: '2021-2024', type: 'violation' },
      { text: 'Zapíral oddílové příspěvky', amount: 518400, date: '2020-2024', type: 'violation' },
      { text: 'Neplatil energie', amount: 43466, date: '2020-2023', type: 'violation' },
      { text: 'Pokladna oddílu nebyla předána', amount: 43793, date: '31.12.2020', type: 'violation' },
      { text: 'Neoprávněně svolával schůze', date: '2023', type: 'violation' },
      { text: 'Vyloučen z členství', date: '28.11.2023', type: 'consequence' },
    ],
    predzalobniVyzva: {
      date: '6.11.2023',
      recipient: 'Marek Vaniš',
      totalDemanded: 387460,
      items: [
        { label: 'Energie 2020-2023', amount: 41860, detail: 'Plyn 31.960 Kč + elektřina 9.900 Kč' },
        { label: 'Oddílové příspěvky 2020-2024', amount: 345600, detail: 'Vybírané příspěvky členů oddílu' },
      ],
      deadline: '8 dnů od doručení',
      note: 'Toto byla první předžalobní výzva. Celková škoda byla později vyčíslena na 653.659 Kč po kompletním auditu.',
    },
    relatedLinks: [
      { label: 'Události s účastí Vaniše', href: '/udalosti?actor=marek-vanis', icon: '📅' },
      { label: 'Finanční přehled', href: '/cisla', icon: '💰' },
      { label: 'Téma: Finance a majetek', href: '/temata/finance-a-majetek', icon: '📚' },
      { label: 'Téma: Členství a evidence', href: '/temata/clenstvi-a-evidence', icon: '📋' },
      { label: 'Otázka: Kdo koho poškodil?', href: '/otazky/kdo-koho-poskodil', icon: '❓' },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 py-8 md:py-16 border-b border-slate-600">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-slate-600/50 backdrop-blur rounded-full text-slate-200 text-sm font-medium border border-slate-500/30">
                  {actor.departmentIcon} {actor.department}
                </span>
                <span className="px-3 py-1 bg-slate-800/70 backdrop-blur rounded-full text-slate-300 text-sm font-medium border border-slate-600/30">
                  ❌ Vyloučen z členství
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3">
                {actor.name}
              </h1>
              <p className="text-xl text-slate-300 font-medium">
                {actor.role}
              </p>
            </div>
          </div>

          <div className="bg-slate-800/40 backdrop-blur border border-slate-600/50 rounded-2xl p-8 mt-8">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-slate-300 text-sm font-medium mb-2">Celková způsobená škoda</div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white">
                  {actor.totalDamage.toLocaleString('cs-CZ')} Kč
                </div>
              </div>
              <div className="text-8xl opacity-10 text-slate-400">
                💸
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 py-12 max-w-5xl">
        {/* Porušení povinností a podvodné jednání */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            ⚠️ Porušení povinností a podvodné jednání
          </h2>
          <div className="bg-slate-50 rounded-xl p-8 shadow-md">
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <span className="text-2xl flex-shrink-0">📋</span>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Odmítl předat seznam členů</h3>
                  <p className="text-sm text-slate-700">
                    Marek Vaniš opakovaně <strong>odmítl předat seznam členů oddílu stolního tenisu</strong>.
                    Tento seznam je klíčový pro kontrolu finančního hospodaření a ověření odvodu členských
                    příspěvků. Bez něj nelze zjistit, kolik členů oddíl skutečně měl a kolik příspěvků mělo
                    být odvedeno do spolkové pokladny.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <span className="text-2xl flex-shrink-0">💰</span>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Odmítl zaplatit prokazatelně vzniklé náklady oddílu</h3>
                  <p className="text-sm text-slate-700">
                    Vaniš <strong>odmítl zaplatit náklady oddílu, které prokazatelně vznikly činností jeho oddílu</strong>.
                    Jedná se zejména o energie (elektřina a plyn) za používání sportovních prostor, které jeho
                    oddíl využíval, ale náklady odmítl uhradit. Celková výše nezaplacených energií činí 43.466 Kč.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <span className="text-2xl flex-shrink-0">🧾</span>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Žádal proplácení dokladů bez skutečné platby</h3>
                  <p className="text-sm text-slate-700">
                    Vaniš <strong>požadoval proplacení dokladů, u kterých bylo zjištěno, že platby ve skutečnosti neproběhly</strong>.
                    Tímto způsobem se pokoušel získat finanční prostředky ze spolkové pokladny za výdaje,
                    které ve skutečnosti neuskutečnil. Šlo o podvodný pokus o získání peněz.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <span className="text-2xl flex-shrink-0">🎯</span>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">V rámci dotací chtěl proplácet nesprávné náklady</h3>
                  <p className="text-sm text-slate-700">
                    V rámci dotačního financování <strong>požadoval proplácení nákladů, které neodpovídaly
                    podmínkám dotace nebo byly nesprávné</strong>. Porušoval tak pravidla pro čerpání
                    dotačních prostředků a vystavoval spolek riziku vrácení dotace včetně sankcí.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <span className="text-2xl flex-shrink-0">📝</span>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Sám vytvářel a proplácet požadoval falešné doklady</h3>
                  <p className="text-sm text-slate-700">
                    Marek Vaniš <strong>sám vytvářel doklady, které následně požadoval proplatit</strong>.
                    Jednalo se o falšování dokumentů za účelem získání finančních prostředků ze spolkové
                    pokladny. Toto jednání naplňuje znaky trestného činu podvodu a zneužití pravomoci.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <span className="text-2xl flex-shrink-0">👩</span>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Požadoval dohody pro svou manželku za více než 70.000 Kč</h3>
                  <p className="text-sm text-slate-700">
                    Vaniš <strong>na svou manželku Denisu Vanišovou žádal proplatit dohody o provedení práce
                    za více než 70.000 Kč</strong>. Šlo o další pokus o neoprávněné získání finančních prostředků
                    ze spolkové pokladny prostřednictvím fingovaných pracovních dohod pro osobu blízkou,
                    což představuje konflikt zájmů a zneužití funkce.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Shrnutí */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span>📋</span>
              <span>Shrnutí</span>
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              {actor.summary}
            </p>
          </div>
        </section>

        {/* Rozpad škody */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            💰 Detailní rozpad škody
          </h2>
          <div className="space-y-4">
            {actor.breakdown.map((item, index) => {
              const severityColors = {
                critical: 'border-red-300 bg-red-50',
                high: 'border-amber-300 bg-amber-50',
                medium: 'border-slate-300 bg-slate-50',
              };
              const severityLabels = {
                critical: '🔴 Kritické',
                high: '🟠 Vysoké',
                medium: '⚪ Střední',
              };

              return (
                <div
                  key={index}
                  className={`p-6 rounded-xl ${severityColors[item.severity]} transition hover:shadow-lg shadow`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-slate-900">{item.label}</h3>
                        <span className="px-2 py-1 bg-white/60 rounded text-xs font-bold text-slate-700">
                          {severityLabels[item.severity]}
                        </span>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed mb-3">
                        {item.description}
                      </p>
                    </div>
                    <div className="text-right ml-6">
                      <div className="text-2xl font-black text-slate-900">
                        {item.amount.toLocaleString('cs-CZ')} Kč
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${
                        item.severity === 'critical'
                          ? 'bg-gradient-to-r from-red-500 to-red-600'
                          : item.severity === 'high'
                          ? 'bg-gradient-to-r from-amber-500 to-amber-600'
                          : 'bg-gradient-to-r from-slate-500 to-slate-600'
                      }`}
                      style={{ width: `${(item.amount / actor.totalDamage) * 100}%` }}
                    />
                  </div>
                  <div className="text-xs text-slate-600 mt-1 text-right">
                    {((item.amount / actor.totalDamage) * 100).toFixed(1)}% z celkové škody
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 p-6 bg-slate-900 text-white rounded-xl">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">CELKOVÁ ŠKODA</span>
              <span className="text-3xl font-black">{actor.totalDamage.toLocaleString('cs-CZ')} Kč</span>
            </div>
          </div>
        </section>

        {/* Předžalobní výzva */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            ⚖️ Předžalobní výzva
          </h2>
          <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">📨</span>
              <div>
                <div className="text-sm text-slate-700 font-medium">Dokument ze dne</div>
                <div className="text-2xl font-bold text-slate-900">{actor.predzalobniVyzva.date}</div>
              </div>
            </div>

            <div className="bg-white/70 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Požadované plnění</h3>
              <div className="space-y-3">
                {actor.predzalobniVyzva.items.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg shadow-sm">
                    <div>
                      <div className="font-bold text-slate-900">{item.label}</div>
                      <div className="text-sm text-slate-600">{item.detail}</div>
                    </div>
                    <div className="text-2xl font-black text-slate-900">
                      {item.amount.toLocaleString('cs-CZ')} Kč
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-lg font-bold text-slate-900">Celkem požadováno</span>
                <span className="text-3xl font-black text-slate-900">
                  {actor.predzalobniVyzva.totalDemanded.toLocaleString('cs-CZ')} Kč
                </span>
              </div>
            </div>

            <div className="bg-slate-100 border-l-4 border-slate-500 p-4 rounded">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⏱️</span>
                <div>
                  <div className="font-bold text-slate-900 mb-1">Lhůta k plnění</div>
                  <div className="text-sm text-slate-800">{actor.predzalobniVyzva.deadline}</div>
                </div>
              </div>
            </div>

            {actor.predzalobniVyzva.note && (
              <div className="mt-6 p-4 bg-slate-50 rounded-lg shadow-sm">
                <div className="flex items-start gap-2">
                  <span className="text-lg">ℹ️</span>
                  <p className="text-sm text-blue-900">
                    <strong>Poznámka:</strong> {actor.predzalobniVyzva.note}
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Klíčové kroky */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            📊 Časová osa klíčových kroků
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-4">
              {actor.keyActions.map((action, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-4 rounded-lg shadow-sm ${
                    action.type === 'consequence'
                      ? 'bg-slate-50'
                      : 'bg-slate-50'
                  }`}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center font-bold text-sm text-slate-600">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-slate-900">{action.text}</div>
                    {action.amount && (
                      <div className="text-lg font-bold text-red-700 mt-1">
                        {action.amount.toLocaleString('cs-CZ')} Kč
                      </div>
                    )}
                  </div>
                  <div className="text-sm text-slate-600 font-medium whitespace-nowrap">
                    {action.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dokumenty a důkazy */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            📄 Dokumenty a důkazy
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 bg-slate-50 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <span className="text-4xl">📨</span>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Předžalobní výzva</h3>
                  <p className="text-sm text-slate-800 mb-3">Dokument ze dne 6.11.2023</p>
                  <div className="text-sm text-slate-700 space-y-1">
                    <div>• Požadováno: 387.460 Kč</div>
                    <div>• Energie + oddílové příspěvky</div>
                    <div>• Lhůta: 8 dnů</div>
                  </div>
                  <div className="mt-4">
                    <span className="inline-block px-4 py-2 bg-slate-600 text-white rounded-lg text-sm font-bold hover:bg-slate-700 transition cursor-pointer">
                      📥 Stáhnout PDF
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <span className="text-4xl">⚖️</span>
                <div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">Rozhodnutí o vyloučení</h3>
                  <p className="text-sm text-blue-800 mb-3">Dokument ze dne 28.11.2023</p>
                  <div className="text-sm text-blue-700 space-y-1">
                    <div>• Právní základ: § 239 NOZ</div>
                    <div>• Doručeno datovou schránkou</div>
                    <div>• Okamžitá platnost</div>
                  </div>
                  <div className="mt-4">
                    <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition cursor-pointer">
                      📥 Stáhnout PDF
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <span className="text-4xl">📊</span>
                <div>
                  <h3 className="text-lg font-bold text-green-900 mb-2">Finanční výkaz oddílu</h3>
                  <p className="text-sm text-green-800 mb-3">TJ ODDÍLY 2021-2023</p>
                  <div className="text-sm text-green-700 space-y-1">
                    <div>• Kompletní rozpis škody</div>
                    <div>• Celkem: 653.659 Kč</div>
                    <div>• Všechny položky detailně</div>
                  </div>
                  <div className="mt-4">
                    <span className="inline-block px-4 py-2 bg-slate-600 text-white rounded-lg text-sm font-bold hover:bg-slate-700 transition cursor-pointer">
                      📥 Stáhnout PDF
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <span className="text-4xl">📧</span>
                <div>
                  <h3 className="text-lg font-bold text-purple-900 mb-2">Emailová korespondence</h3>
                  <p className="text-sm text-purple-800 mb-3">Výzvy 2021-2023</p>
                  <div className="text-sm text-purple-700 space-y-1">
                    <div>• Opakované výzvy k předání seznamů</div>
                    <div>• Výzvy k úhradě příspěvků</div>
                    <div>• Žádné odpovědi</div>
                  </div>
                  <div className="mt-4">
                    <span className="inline-block px-4 py-2 bg-slate-600 text-white rounded-lg text-sm font-bold hover:bg-slate-700 transition cursor-pointer">
                      📥 Zobrazit všechny
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Související stránky */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            🔗 Související stránky
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {actor.relatedLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block p-5 bg-white rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{link.icon}</span>
                  <span className="font-bold text-slate-900">{link.label}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Navigace */}
        <div className="flex items-center justify-between pt-8 mt-8">
          <a
            href="/akteri"
            className="flex items-center gap-2 px-6 py-3 bg-slate-200 hover:bg-slate-300 rounded-lg font-bold text-slate-900 transition"
          >
            <span>←</span>
            <span>Všichni aktéři</span>
          </a>
          <a
            href="/akteri/jaromir-pivonka"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold text-white transition"
          >
            <span>Jaromír Pivoňka</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
