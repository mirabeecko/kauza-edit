'use client';

import { useState } from "react";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import LeftPanel from "@/components/LeftPanel";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [leftPanelOpen, setLeftPanelOpen] = useState(false);

  const toggleLeftPanel = () => {
    setLeftPanelOpen(!leftPanelOpen);
  };

  const closeLeftPanel = () => {
    setLeftPanelOpen(false);
  };

  return (
    <html lang="cs">
      <head>
        <title>Kauza TJ Krupka z.s.</title>
        <meta name="description" content="Interaktivní mapa kauzy Tělovýchovná jednota Krupka z.s., IČO 46070516" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        <div className="min-h-screen flex flex-col">
          <Header onMenuToggle={toggleLeftPanel} />
          <div className="flex flex-1 overflow-hidden relative">
            <LeftPanel isOpen={leftPanelOpen} onClose={closeLeftPanel} />
            <main className="flex-1 overflow-y-auto bg-white">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
