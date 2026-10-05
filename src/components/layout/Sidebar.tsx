'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useApp } from './AppContext';
import {
  Activity,
  Bot,
  Stethoscope,
  MapPin,
  Video,
  Baby,
  HeartPulse,
  UserCheck,
  Target,
  Flame,
  ShieldCheck,
  Home,
  Building2,
  SlidersHorizontal,
  Compass,
  Pill,
  BookOpen,
  Database,
  Lock,
  Sparkles,
  BarChart3,
  CloudSun
} from 'lucide-react';

export const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const { t } = useApp();

  const navGroups = [
    {
      title: 'OVERVIEW',
      items: [
        { href: '/dashboard', label: 'Situation Room', icon: Activity }
      ]
    },
    {
      title: 'CARE',
      items: [
        { href: '/ai-companion', label: 'Feature 01: AI Companion', icon: Bot, badge: 'AI' },
        { href: '/triage', label: 'Feature 02: Smart Triage', icon: Stethoscope },
        { href: '/telemedicine', label: 'Feature 04: Telemedicine', icon: Video }
      ]
    },
    {
      title: 'ACCESS',
      items: [
        { href: '/access-map', label: 'Feature 03: Healthcare Map', icon: MapPin },
        { href: '/medicines', label: 'Feature 05: Medicine Access', icon: Pill },
        { href: '/schemes', label: 'Feature 06: Scheme Finder', icon: BookOpen }
      ]
    },
    {
      title: 'PREVENTION',
      items: [
        { href: '/maternal-child', label: 'Feature 07: Maternal & Child', icon: Baby },
        { href: '/chronic', label: 'Feature 08: Chronic Care', icon: HeartPulse },
        { href: '/disease-environment', label: 'Feature 09: Disease & Env', icon: CloudSun }
      ]
    },
    {
      title: 'COMMUNITY',
      items: [
        { href: '/village-profile', label: 'Feature 10: Village Profile', icon: Home },
        { href: '/resilience-equity', label: 'Feature 11: Resilience & Equity', icon: ShieldCheck },
        { href: '/gap-finder', label: 'Feature 12: Gap Finder', icon: Compass },
        { href: '/community-missions', label: 'Feature 14: Missions & Impact', icon: Target }
      ]
    },
    {
      title: 'INTELLIGENCE',
      items: [
        { href: '/what-if', label: 'Feature 13: What-If Simulator', icon: SlidersHorizontal, badge: 'Sim' },
        { href: '/command-center', label: 'Feature 15: District Command', icon: Building2, badge: 'Dark Ops' }
      ]
    },
    {
      title: 'TRUST',
      items: [
        { href: '/trust-safety', label: 'Government Data Hub', icon: Lock }
      ]
    },
    {
      title: 'FINAL',
      items: [
        // FINAL MAJOR PAGE REQUIRED BY MASTER PROMPT
        { href: '/data-hub', label: 'Datasets & Sources', icon: Database, badge: 'Verified' }
      ]
    }
  ];

  return (
    <aside className="w-64 bg-[#08111c] text-slate-300 border-r border-slate-800 flex flex-col h-screen sticky top-0 shrink-0 select-none overflow-hidden">
      {/* Brand Header */}
      <div className="p-4 border-b border-slate-800 flex items-center gap-3 bg-[#05070b]">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-teal-500/20 text-slate-950 font-bold">
          <Sparkles className="w-5 h-5 text-slate-950" />
        </div>
        <div>
          <h1 className="font-bold text-white text-base leading-tight tracking-tight flex items-center gap-1.5">
            HealthSetu AI
          </h1>
          <p className="text-[10px] text-teal-400 font-medium">Rural Health Intelligence</p>
        </div>
      </div>

      {/* Navigation Links Scroll Container */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-5 scrollbar-thin scrollbar-thumb-slate-800">
        {navGroups.map((group, idx) => (
          <div key={idx}>
            <div className="px-2 mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
              {group.title}
            </div>
            <div className="space-y-0.5">
              {group.items.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                const isFinalDataPage = item.href === '/data-hub';
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-medium transition-all duration-150 ${
                      isActive
                        ? isFinalDataPage
                          ? 'bg-emerald-600 text-white shadow-md font-bold ring-2 ring-emerald-400/30'
                          : 'bg-teal-600/90 text-white shadow-sm font-semibold'
                        : isFinalDataPage
                        ? 'bg-slate-800/80 text-emerald-300 hover:bg-slate-800 hover:text-white border border-emerald-500/30 font-semibold'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Icon className={`w-4 h-4 shrink-0 transition-colors ${
                        isActive ? 'text-white' : isFinalDataPage ? 'text-emerald-400' : 'text-slate-400 group-hover:text-teal-400'
                      }`} />
                      <span className="truncate">{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className={`text-[9px] px-1.5 py-0.2 rounded font-semibold uppercase ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : isFinalDataPage
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                          : 'bg-slate-800 text-teal-400 border border-teal-800/40'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Disclaimer */}
      <div className="p-3 border-t border-slate-800/80 bg-[#05070b] text-[10px] text-slate-500 leading-tight">
        <p className="flex items-center gap-1 font-medium text-slate-400 mb-0.5">
          <ShieldCheck className="w-3 h-3 text-emerald-400" /> Human-in-the-Loop AI
        </p>
        <p>Viksit Bharat 2047 Initiative Platform</p>
      </div>
    </aside>
  );
};
