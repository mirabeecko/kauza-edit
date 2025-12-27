'use client';

import Link from 'next/link';
import { useState } from 'react';

interface LeftPanelProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function LeftPanel({ isOpen = false, onClose }: LeftPanelProps) {
  const [activeSection, setActiveSection] = useState('temata');

  const sections = [
    { id: 'temata', label: 'Témata', icon: '📚', href: '/temata' },
    { id: 'udalosti', label: 'Události', icon: '📅', href: '/udalosti' },
    { id: 'akteri', label: 'Aktéři', icon: '👥', href: '/akteri' },
    { id: 'otazky', label: 'Otázky', icon: '❓', href: '/otazky' },
    { id: 'cisla', label: 'Čísla', icon: '💰', href: '/cisla' },
    { id: 'pointy', label: 'Pointy', icon: '💡', href: '/pointy' },
  ];

  const handleLinkClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {/* Backdrop pro mobil */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Levý panel */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-64 bg-slate-50 border-r border-slate-200 h-full overflow-y-auto
          transform transition-transform duration-300 ease-in-out
          lg:transform-none
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="p-4">
          {/* Close button pro mobil */}
          <div className="lg:hidden flex justify-between items-center mb-4">
            <h3 className="text-sm font-semibold text-slate-600 uppercase">
              Navigace
            </h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-200 rounded transition"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <h3 className="hidden lg:block text-sm font-semibold text-slate-600 uppercase mb-4">
            Navigace
          </h3>

          <nav className="space-y-1">
            {sections.map((section) => (
              <Link
                key={section.id}
                href={section.href}
                onClick={() => {
                  setActiveSection(section.id);
                  handleLinkClick();
                }}
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
              <Link
                href="/prehled"
                className="block text-slate-600 hover:text-blue-600"
                onClick={handleLinkClick}
              >
                → Rychlý přehled (5 min)
              </Link>
              <Link
                href="/souvislosti"
                className="block text-slate-600 hover:text-blue-600"
                onClick={handleLinkClick}
              >
                → Souvislosti (15 min)
              </Link>
              <Link
                href="/detailni-analyza"
                className="block text-slate-600 hover:text-blue-600"
                onClick={handleLinkClick}
              >
                → Detailní analýza
              </Link>
            </div>
          </div>

        </div>
      </aside>
    </>
  );
}
