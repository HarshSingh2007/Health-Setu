'use client';

import React from 'react';
import { mockDiseaseAlerts } from '@/lib/mockData';
import { DataConfidenceBadge } from '@/components/ui/DataConfidenceBadge';
import { CloudSun, Flame, AlertTriangle, ShieldAlert, Thermometer, Wind, Droplets } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export default function DiseaseEnvironmentPage() {
  const clusterData = [
    { village: 'Pipariya', fever: 14, respiratory: 6, diarrhea: 2 },
    { village: 'Kothri', fever: 4, respiratory: 3, diarrhea: 1 },
    { village: 'Siddhiqganj', fever: 9, respiratory: 8, diarrhea: 5 },
    { village: 'Diwadia', fever: 3, respiratory: 2, diarrhea: 8 }
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="bg-[#08111c] border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-teal-400 uppercase tracking-widest flex items-center gap-1.5">
            <CloudSun className="w-4 h-4 text-cyan-400" /> Feature 09: Disease & Environment Intelligence
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight mt-0.5">
            Health Environment Pulse & Disease Surveillance
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Integrates weather conditions, air quality, heatwave risks, and vector outbreak indicators.
          </p>
        </div>

        <DataConfidenceBadge status="OFFICIAL_VERIFIED" />
      </div>

      {/* Environmental Health Pulse Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
        <div className="bg-[#0d1722] border border-slate-800 p-4 rounded-2xl space-y-1">
          <div className="text-amber-400 font-bold flex items-center gap-1">
            <Thermometer className="w-4 h-4" /> Heatwave & Temperature Risk
          </div>
          <div className="text-xl font-extrabold text-white">38.5°C (High Risk)</div>
          <p className="text-slate-400 text-[11px]">IMD Alert: Increased dehydration & heat exhaustion risk in rural farming blocks.</p>
        </div>

        <div className="bg-[#0d1722] border border-slate-800 p-4 rounded-2xl space-y-1">
          <div className="text-cyan-400 font-bold flex items-center gap-1">
            <Wind className="w-4 h-4" /> Air Quality AQI
          </div>
          <div className="text-xl font-extrabold text-white">142 AQI (Moderate)</div>
          <p className="text-slate-400 text-[11px]">CPCB Registry: Respiratory illness surge expected in children under 5.</p>
        </div>

        <div className="bg-[#0d1722] border border-slate-800 p-4 rounded-2xl space-y-1">
          <div className="text-emerald-400 font-bold flex items-center gap-1">
            <Droplets className="w-4 h-4" /> Rainfall & Vector Risk
          </div>
          <div className="text-xl font-extrabold text-white">Post-Monsoon Standing Water</div>
          <p className="text-slate-400 text-[11px]">NVBDCP Warning: Dengue/Malaria vector breeding watch in Pipariya.</p>
        </div>
      </div>

      {/* Mandatory Outbreak Disclaimer */}
      <div className="bg-amber-500/10 border border-amber-500/30 text-amber-300 rounded-xl p-3 text-xs flex items-center gap-3">
        <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
        <span className="font-semibold">
          Disclaimer: Potential anomaly detected — public-health verification required. Environmental surveillance indicators show risk patterns, not confirmed clinical outbreaks.
        </span>
      </div>
    </div>
  );
}
