'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useApp } from './AppContext';
import { Activity, Bot, Stethoscope, MapPin, Building2, X, Sparkles, UserCheck, Pill, SlidersHorizontal, AlertOctagon } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const { t } = useApp();

  const quickLinks = [
    { href: '/dashboard', label: 'Situation', icon: Activity },
    { href: '/ai-companion', label: 'AI Companion', icon: Bot },
    { href: '/triage', label: 'Triage', icon: Stethoscope },
    { href: '/access-map', label: 'Access Map', icon: MapPin },
    { href: '/asha-app', label: 'ASHA App', icon: UserCheck }
  ];

  return (
    <>
      {/* Touch-First Bottom Bar for Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900 border-t border-slate-800 flex items-center justify-around py-2 px-1 text-[10px]">
        {quickLinks.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-md transition ${
                isActive ? 'text-teal-400 font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>

      {/* Slide-out Drawer for All Modules */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {/* Overlay */}
          <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs" onClick={onClose} />

          {/* Drawer content */}
          <div className="relative w-4/5 max-w-xs bg-slate-900 text-white h-full flex flex-col z-10 shadow-2xl overflow-y-auto p-4">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center text-slate-950 font-bold">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="font-bold text-sm">HealthSetu AI</span>
              </div>
              <button onClick={onClose} className="p-1 rounded bg-slate-800 text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-3">
              <div className="text-xs font-semibold text-teal-400 uppercase tracking-wider">Quick Modules</div>
              <Link href="/dashboard" onClick={onClose} className="block py-1.5 text-sm text-slate-300 hover:text-white">Healthcare Situation Center</Link>
              <Link href="/ai-companion" onClick={onClose} className="block py-1.5 text-sm text-slate-300 hover:text-white">AI Health Companion</Link>
              <Link href="/triage" onClick={onClose} className="block py-1.5 text-sm text-slate-300 hover:text-white">Smart AI Triage</Link>
              <Link href="/access-map" onClick={onClose} className="block py-1.5 text-sm text-slate-300 hover:text-white">Rural Healthcare Access Map</Link>
              <Link href="/asha-app" onClick={onClose} className="block py-1.5 text-sm text-slate-300 hover:text-white">ASHA / ANM Field App</Link>
              <Link href="/command-center" onClick={onClose} className="block py-1.5 text-sm text-slate-300 hover:text-white">District Command Center</Link>
              <Link href="/what-if" onClick={onClose} className="block py-1.5 text-sm text-slate-300 hover:text-white">What-If Simulator</Link>
              <Link href="/resilience-index" onClick={onClose} className="block py-1.5 text-sm text-slate-300 hover:text-white">Village Health Resilience Index</Link>
              <Link href="/medicines" onClick={onClose} className="block py-1.5 text-sm text-slate-300 hover:text-white">Government Medicine Access</Link>
              <Link href="/emergency" onClick={onClose} className="block py-1.5 text-sm text-slate-300 hover:text-white text-rose-400 font-semibold">Emergency Command Center</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
