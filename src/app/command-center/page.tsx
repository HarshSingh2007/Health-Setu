'use client';

import React from 'react';
import { useApp } from '@/components/layout/AppContext';
import { Building2, ShieldAlert, Activity, Moon, Sun, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';

export default function DistrictCommandCenterPage() {
  const { darkCommandMode, setDarkCommandMode } = useApp();

  return (
    <div className={`space-y-6 max-w-7xl mx-auto transition-colors duration-300 ${darkCommandMode ? 'text-white' : 'text-slate-900'}`}>
      {/* Top Banner */}
      <div className={`rounded-2xl p-6 border shadow-xl flex flex-wrap items-center justify-between gap-4 ${
        darkCommandMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
      }`}>
        <div>
          <div className="text-xs font-semibold text-teal-400 uppercase tracking-widest flex items-center gap-1.5">
            <Building2 className="w-4 h-4 text-teal-300 animate-pulse" /> Sehore District Health Situation Room
          </div>
          <h1 className="text-2xl font-bold tracking-tight mt-0.5">
            District Command & Emergency Allocation Center
          </h1>
          <p className={`text-xs mt-0.5 ${darkCommandMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Aggregates facility load, outbreak alerts, medicine shortages & AI resource allocation proposals.
          </p>
        </div>

        <button
          onClick={() => setDarkCommandMode(!darkCommandMode)}
          className={`px-4 py-2 rounded-xl border text-xs font-bold flex items-center gap-2 transition cursor-pointer ${
            darkCommandMode ? 'bg-slate-800 border-slate-700 text-amber-300' : 'bg-slate-100 border-slate-300 text-slate-800'
          }`}
        >
          {darkCommandMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          {darkCommandMode ? 'Light Mode' : 'Dark Command Mode'}
        </button>
      </div>

      {/* Resource Allocation Recommendation Card */}
      <div className={`p-6 rounded-2xl border space-y-4 shadow-xl ${
        darkCommandMode ? 'bg-slate-900 border-teal-500/40' : 'bg-teal-950 text-white border-teal-800'
      }`}>
        <div className="flex items-center justify-between border-b border-teal-800/60 pb-3">
          <div className="flex items-center gap-2 text-xs font-bold text-teal-400 uppercase tracking-widest">
            <ShieldAlert className="w-4 h-4 text-amber-400" /> AI Resource Allocation Recommendation
          </div>
          <span className="text-[10px] font-bold text-amber-300 bg-amber-500/20 border border-amber-500/40 px-2 py-0.5 rounded">
            Human Decision Required
          </span>
        </div>

        <div className="space-y-2 text-xs">
          <div className="font-extrabold text-base text-white">
            Potential Medicine Shortage Flagged: Pipariya PHC (Amoxicillin 500mg)
          </div>
          <p className="text-slate-300 leading-relaxed">
            Demand surge predicted (+45%) due to active fever cluster in Pipariya village. Current inventory: 45 units remaining (Critical).
          </p>
          <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700 text-teal-200 font-semibold">
            Suggested Action: Reallocate 300 units Amoxicillin from surplus stock at Sehore District Hospital (DH) to Pipariya PHC via courier van.
          </div>
        </div>

        <div className="pt-2 flex items-center gap-3">
          <button
            onClick={() => alert("Resource reallocation request approved and sent to Sehore DH Dispatch!")}
            className="px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-600 text-slate-950 font-extrabold text-xs shadow-md transition"
          >
            Approve & Reallocate Stock
          </button>
          <button
            onClick={() => alert("Recommendation dismissed.")}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs border border-slate-700"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
