'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LeftPanel() {
  const [activeSection, setActiveSection] = useState('temata');

  const sections = [
    { id: 'temata', label: 'Témata', icon: '📚' },
    { id: 'udalosti', label: 'Události', icon: '📅' },
    { id: 'akteri', label: 'Aktéři', icon: '👥' },
    { id: 'otazky', label: 'Otázky', icon: '❓' },
    { id: 'dokumenty', label: 'Dokumenty', icon: '📄' },
    { id: 'timeline', label: 'Časová osa', icon: '⏱️' },
    { id: 'graf', label: 'Knowledge Graph', icon: '🕸️' },
  ];

  return (
    <aside className="w-64 bg-slate-50 border-r border-slate-200 h-full overflow-y-auto">
      <div className="p-4">
        <h3 className="text-sm font-semibold text-slate-600 uppercase mb-4">
          Navigace
        </h3>
        <nav className="space-y-1">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={`/${section.id}`}
              onClick={() => setActiveSection(section.id)}
              className={`
                flex items-center space-x-3 px-3 py-2 rounded-lg transition
                ${activeSection === section.id
                  ? 'bg-blue-100 text-blue-900 font-medium'
                  : 'text-slate-700 hover:bg-slate-100'
                }
              `}
            >
              <span className="text-lg">{section.icon}</span>
              <span>{section.label}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-8">
          <h3 className="text-sm font-semibold text-slate-600 uppercase mb-4">
            Rychlý přístup
          </h3>
          <div className="space-y-2 text-sm">
            <Link href="/prehled" className="block text-slate-600 hover:text-blue-600">
              → Rychlý přehled (5 min)
            </Link>
            <Link href="/souvislosti" className="block text-slate-600 hover:text-blue-600">
              → Souvislosti (15 min)
            </Link>
            <Link href="/detailni-analyza" className="block text-slate-600 hover:text-blue-600">
              → Detailní analýza
            </Link>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-sm font-semibold text-slate-600 uppercase mb-4">
            Fáze kauzy
          </h3>
          <div className="space-y-2 text-sm">
            <div className="px-3 py-2 bg-green-50 rounded text-green-800 border border-green-200">
              📍 Fáze 1: Příprava (2021)
            </div>
            <div className="px-3 py-2 bg-orange-50 rounded text-orange-800 border border-orange-200">
              📍 Fáze 2: Eskalace (2022-23)
            </div>
            <div className="px-3 py-2 bg-red-50 rounded text-red-800 border border-red-200">
              📍 Fáze 3: Právní boj (2024)
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
