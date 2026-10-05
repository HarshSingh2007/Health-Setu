'use client';

import React from 'react';
import { BarChart3, Users, Video, Pill, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function ImpactLedgerPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-teal-700 uppercase tracking-widest flex items-center gap-1.5">
            <BarChart3 className="w-4 h-4 text-teal-600" /> Transparent Public Audit
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
            HealthSetu Impact Ledger
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Real-time counter of application activity, care journeys completed, and shortage alerts resolved.
          </p>
        </div>
        <span className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-600">
          Application Activity Metrics
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs">
          <div className="text-3xl font-black text-teal-700">14,280</div>
          <div className="text-xs text-slate-500 font-medium mt-1">Care Journeys Completed</div>
        </div>

        <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs">
          <div className="text-3xl font-black text-indigo-700">642</div>
          <div className="text-xs text-slate-500 font-medium mt-1">Teleconsultations Session</div>
        </div>

        <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs">
          <div className="text-3xl font-black text-rose-700">184</div>
          <div className="text-xs text-slate-500 font-medium mt-1">High-Risk Cases Flagged</div>
        </div>

        <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs">
          <div className="text-3xl font-black text-emerald-700">2,450</div>
          <div className="text-xs text-slate-500 font-medium mt-1">Villages Reached</div>
        </div>
      </div>
    </div>
  );
}
