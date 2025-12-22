import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import LeftPanel from "@/components/LeftPanel";
import RightPanel from "@/components/RightPanel";

export const metadata: Metadata = {
  title: "Kauza TJ Krupka z.s.",
  description: "Interaktivní mapa kauzy Tělovýchovná jednota Krupka z.s., IČO 46070516",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className="antialiased">
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="flex flex-1 overflow-hidden">
            <LeftPanel />
            <main className="flex-1 overflow-y-auto bg-white">
              {children}
            </main>
            <RightPanel />
          </div>
        </div>
      </body>
    </html>
  );
}
