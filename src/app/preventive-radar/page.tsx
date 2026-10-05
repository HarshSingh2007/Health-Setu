'use client';

import React from 'react';
import { Radar, ShieldCheck, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function PreventiveRadarPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-teal-700 uppercase tracking-widest flex items-center gap-1.5">
            <Radar className="w-4 h-4 text-teal-600 animate-pulse" /> Preventive Health Intelligence
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
            Preventive Health Radar
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Identifies missed checkups, escalating BP readings, and vaccination gaps before disease onset.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-amber-500" /> Missed Child Immunization
          </div>
          <p className="text-slate-600">Child: Aarav Patel (Age 14m) — MR-2 / DPT Booster-1 due in 2 weeks.</p>
          <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-semibold">
            Action Triggered: ASHA Kamla Verma assigned home reminder visit.
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-rose-500" /> Escalating BP Pattern
          </div>
          <p className="text-slate-600">Patient: Rameshwar Prasad (Age 62) — BP increased from 130 to 142 mmHg.</p>
          <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 font-semibold">
            Action Triggered: Schedule PHC teleconsultation & medication refill check.
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Maternal ANC Visit Watch
          </div>
          <p className="text-slate-600">Patient: Sunita Bai Patel (Week 32) — ANC Visit 4 due Oct 15.</p>
          <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 font-semibold">
            Action Triggered: Hemoglobin re-test scheduled at Pipariya PHC.
          </div>
        </div>
      </div>
    </div>
  );
}
