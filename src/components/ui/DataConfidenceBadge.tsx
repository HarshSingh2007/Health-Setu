'use client';

import React from 'react';
import { DataConfidenceType } from '@/types';
import { ShieldCheck, Wifi, Sliders, Database } from 'lucide-react';

interface DataConfidenceBadgeProps {
  status: DataConfidenceType;
  showIcon?: boolean;
}

export const DataConfidenceBadge: React.FC<DataConfidenceBadgeProps> = ({ status, showIcon = true }) => {
  switch (status) {
    case 'OFFICIAL_VERIFIED':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-800 border border-emerald-300 text-[10px] font-extrabold uppercase tracking-wide">
          {showIcon && <ShieldCheck className="w-3 h-3 text-emerald-600" />}
          <span>OFFICIAL / VERIFIED</span>
        </span>
      );
    case 'CONNECTED_LIVE':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-800 border border-sky-300 text-[10px] font-extrabold uppercase tracking-wide">
          {showIcon && <Wifi className="w-3 h-3 text-sky-600 animate-pulse" />}
          <span>CONNECTED LIVE</span>
        </span>
      );
    case 'DEMO_SIMULATED':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-800 border border-amber-300 text-[10px] font-extrabold uppercase tracking-wide">
          {showIcon && <Sliders className="w-3 h-3 text-amber-600" />}
          <span>DEMO / SIMULATED</span>
        </span>
      );
    case 'STATIC_OFFICIAL':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-500/10 text-slate-800 border border-slate-300 text-[10px] font-extrabold uppercase tracking-wide">
          {showIcon && <Database className="w-3 h-3 text-slate-600" />}
          <span>STATIC OFFICIAL DATA</span>
        </span>
      );
    default:
      return null;
  }
};
