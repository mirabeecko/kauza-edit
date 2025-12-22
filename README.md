# Kauza TJ Krupka z.s.

Interaktivní webová aplikace - Mapa kauzy Tělovýchovná jednota Krupka z.s., IČO 46070516

## 📋 O projektu

Tato aplikace slouží jako **interaktivní mapa komplexní kauzy** kolem Tělovýchovné jednoty Krupka z.s.

Cíle:
- ✅ Srozumitelně vysvětlit komplexní kauzu
- ✅ Oddělit fakta, tvrzení, interpretace a otevřené otázky
- ✅ Umožnit nelineární průchod obsahem (styl Obsidian / knowledge graph)
- ✅ Fungovat jako veřejný referenční zdroj
- ✅ Být transparentní, profesionální, právně opatrný

**Nejde o obhajobu ani útok – jde o mapu reality založenou na datech.**

## 🏗️ Technologie

- **Framework:** Next.js 15 (App Router)
- **Jazyk:** TypeScript
- **Styling:** Tailwind CSS
- **Databáze:** Supabase (PostgreSQL)
- **Vizualizace:** D3.js / Cytoscape.js (pro knowledge graph)

## 🚀 Instalace a spuštění

### Prerekvizity

- Node.js 18+
- npm nebo yarn
- Supabase účet (pro databázi)

### Lokální development

1. **Klonovat repozitář (nebo použít existující složku)**

\`\`\`bash
cd /Users/mb/dev/kauzatjkrupka.cz
\`\`\`

2. **Nainstalovat dependencies**

\`\`\`bash
npm install
\`\`\`

3. **Nastavit environment variables**

Vytvořte soubor \`.env.local\` (zkopírujte z \`.env.local.example\`):

\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
\`\`\`

4. **Nastavit Supabase databázi**

V Supabase SQL editoru spusťte SQL z \`supabase/schema.sql\`.

5. **Spustit development server**

\`\`\`bash
npm run dev
\`\`\`

Aplikace poběží na [http://localhost:3000](http://localhost:3000)

## 📁 Struktura projektu

\`\`\`
/Users/mb/dev/kauzatjkrupka.cz/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Hlavní layout (Header, Left Panel, Right Panel)
│   ├── page.tsx             # Úvodní stránka / Rozcestník
│   ├── prehled/             # Rychlý přehled (5 min)
│   ├── otazky/              # Sekce otázek
│   │   ├── page.tsx         # Přehled všech otázek
│   │   └── [slug]/          # Dynamické stránky otázek
│   ├── temata/              # Sekce témat
│   ├── udalosti/            # Sekce událostí (timeline)
│   ├── akteri/              # Sekce aktérů
│   ├── dokumenty/           # Dokumenty a důkazy
│   └── pointy/              # Insight Cards
├── components/              # React komponenty
│   ├── Header.tsx           # Horní lišta
│   ├── LeftPanel.tsx        # Levý navigační panel
│   └── RightPanel.tsx       # Pravý kontextový panel
├── lib/                     # Utility funkce
│   └── supabase.ts          # Supabase klient
├── types/                   # TypeScript typy
│   └── index.ts             # Datové modely
├── supabase/                # Databázové schéma
│   └── schema.sql           # SQL pro vytvoření tabulek
├── public/                  # Statické soubory
├── next.config.ts           # Next.js konfigurace
├── tailwind.config.ts       # Tailwind CSS konfigurace
└── package.json             # Závislosti projektu
\`\`\`

## 📊 Datový model

Aplikace používá **graph-first model**:

### Hlavní tabulky

- **nodes** - všechny entity (event, person, org, document, topic, claim, question, insight)
- **edges** - vztahy mezi uzly (participated, influenced, caused, supports, contradicts...)
- **event_meta** - metadata pro události (datum, fáze, důležitost...)
- **insights** - grafické pointy (Insight Cards)
- **evidence** - citace z dokumentů
- **claims** - strukturovaná tvrzení / mýty
- **financial_data** - finanční údaje
- **phases** - časové fáze kauzy

Více v \`types/index.ts\` a \`supabase/schema.sql\`.

## 🎨 UX Struktura

### Globální layout

\`\`\`
┌──────────────────────────────────────────┐
│ Horní lišta: Logo | Kauza | Hledat | Info│
└──────────────────────────────────────────┘
┌─────────────┬───────────────────┬────────┐
│ Levý panel  │ Hlavní obsah      │ Pravý  │
│ (navigace) │                   │ panel  │
│             │                   │ Kontext│
└─────────────┴───────────────────┴────────┘
\`\`\`

### Hlavní sekce

1. **Úvod** - tři vstupy (5 min / 15-30 min / detailní analýza)
2. **Témata** - Historie TJ, Členství, Finance, Schůze, Role města...
3. **Události** - Chronologická timeline s detaily
4. **Aktéři** - Osoby a jejich role (faktické karty)
5. **Otázky** - "Co víme" / "Co nevíme" / Právní kontext
6. **Dokumenty** - Důkazy s citacemi
7. **Pointy** - Insight Cards pro složité kauzální řetězce

## 🔍 Filozofie obsahu

### Tón a styl

- **Neutrální, klidný, profesionální jazyk**
- Žádné emotivní soudy
- Formulace typu:
  - "spolek neeviduje"
  - "nebylo doloženo"
  - "vzniká otázka, zda..."

### Oddělení faktů

- **Fakta** - prokázaná data
- **Tvrzení** - co kdo tvrdí
- **Interpretace** - možné výklady
- **Otevřené otázky** - co zůstává nejasné

### Zásady důvěryhodnosti

- Každá stránka ukazuje **zdroje**
- Žádná pointa **bez důkazů**
- Žádné tvrzení **bez vazeb**
- Datum aktualizace u každé sekce

## 📝 Další vývoj

### Již implementováno

- ✅ Základní struktura aplikace
- ✅ Layout s třemi panely
- ✅ Úvodní stránka / Rozcestník
- ✅ Rychlý přehled (5 min)
- ✅ Sekce Otázky (včetně příkladu detailní otázky)
- ✅ Datový model a Supabase schéma
- ✅ TypeScript typy

### K dokončení

- ⏳ Naplnění databáze daty z dokumentů
- ⏳ Implementace Timeline komponenty
- ⏳ Knowledge Graph vizualizace (D3.js / Cytoscape.js)
- ⏳ Sekce Témata
- ⏳ Sekce Události
- ⏳ Sekce Aktéři
- ⏳ Insight Cards komponenty
- ⏳ Fulltextové vyhledávání
- ⏳ Export do PDF

## 🚢 Deployment

### Vercel (doporučeno pro Next.js)

1. Push na GitHub
2. Import projektu na [vercel.com](https://vercel.com)
3. Nastavit environment variables
4. Deploy

### Supabase Setup

1. Vytvořit nový projekt na [supabase.com](https://supabase.com)
2. Spustit SQL z \`supabase/schema.sql\` v SQL editoru
3. Zkopírovat URL a ANON KEY do \`.env.local\`
4. (Volitelně) Naplnit databázi daty pomocí skriptu

## 📖 Dokumentace zdrojových dat

Data pocházejí z dokumentů:
- \`TIMELINE TJ KRUPKA 2021-2024.md\`
- \`KOMPLEXNÍ ANALÝZA PŘÍPADU TJ KRUPKA.md\`
- \`⚜ TJ ODDÍLY 2021-2023 - výsledek hospodaření.md\`

Umístění: \`/Users/mb/Documents/MUYLAYF/\`

## 🤝 Kontakt

Pro dotazy nebo připomínky ohledně aplikace kontaktujte správce projektu.

## 📄 Licence

Tento projekt slouží jako dokumentace a referenční zdroj pro kauzu TJ Krupka z.s.

---

*Poslední aktualizace: 21.12.2025*
*Verze: 0.1.0 (Alpha)*
