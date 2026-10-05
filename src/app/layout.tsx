import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '@/components/layout/AppContext';
import { MainLayoutWrapper } from '@/components/layout/MainLayoutWrapper';

export const metadata: Metadata = {
  title: 'HealthSetu AI — Bharat Rural Healthcare Intelligence Platform',
  description: "AI-powered last-mile healthcare coordination & community health intelligence for rural & Tier-3/4 India. WhyCode_4U Hackathon 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-[#05070b] text-slate-100 selection:bg-teal-500 selection:text-slate-950">
        <AppProvider>
          <MainLayoutWrapper>{children}</MainLayoutWrapper>
        </AppProvider>
      </body>
    </html>
  );
}
