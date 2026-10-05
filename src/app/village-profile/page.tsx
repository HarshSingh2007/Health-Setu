'use client';

import React from 'react';
import { useApp } from '@/components/layout/AppContext';
import { Home, ShieldCheck, Bot, CheckCircle2, AlertTriangle, Users, Building2, Pill } from 'lucide-react';

export default function VillageProfilePage() {
  const { location } = useApp();

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-teal-700 uppercase tracking-widest flex items-center gap-1.5">
            <Home className="w-4 h-4 text-teal-600" /> Village Health Intelligence Profile
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
            {location.village} Village Health Profile
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Comprehensive village demographic, facility, maternal/child, and AI health action plan.
          </p>
        </div>
        <span className="px-3 py-1.5 rounded-xl bg-teal-50 border border-teal-200 text-teal-800 font-extrabold text-sm">
          Resilience Score: 72/100
        </span>
      </div>

      {/* Grid: Demographics + Facilities + Action Plan */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-xs">
        {/* Left 4 Cols: Demographics & Healthcare Facilities */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
            <h3 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-2">
              Village Overview & Demographics
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between text-slate-700 font-medium">
                <span>Population:</span>
                <span className="font-bold text-slate-900">2,450 Citizens</span>
              </div>
              <div className="flex justify-between text-slate-700 font-medium">
                <span>Households:</span>
                <span className="font-bold text-slate-900">480 Homes</span>
              </div>
              <div className="flex justify-between text-slate-700 font-medium">
                <span>ASHA Workers Assigned:</span>
                <span className="font-bold text-teal-700">2 Workers (Kamla & Sunita)</span>
              </div>
              <div className="flex justify-between text-slate-700 font-medium">
                <span>Primary Health Facility:</span>
                <span className="font-bold text-slate-900">Pipariya PHC (0.8 km)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right 8 Cols: AI-Drafted Village Health Action Plan */}
        <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="font-bold text-base flex items-center gap-2">
              <Bot className="w-5 h-5 text-teal-400" /> AI-Drafted Village Health Action Plan
            </h3>
            <span className="text-[10px] font-bold text-amber-300 bg-amber-500/20 border border-amber-500/40 px-2 py-0.5 rounded">
              Human Review Required
            </span>
          </div>

          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1">
              <div className="font-bold text-teal-300 text-xs">Priority 1: Resolve Amoxicillin Stock Shortage</div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Emergency dispatch of 500 units Amoxicillin 500mg capsules to Pipariya PHC to control active fever cluster.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1">
              <div className="font-bold text-teal-300 text-xs">Priority 2: High-Risk ANC Home Visits</div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Schedule bi-weekly hemoglobin monitoring for 2 pregnant mothers flagged with moderate anemia.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1">
              <div className="font-bold text-teal-300 text-xs">Priority 3: Telemedicine OPD Expansion</div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Increase e-Sanjeevani daily slot capacity by +15 sessions to handle seasonal respiratory cases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
