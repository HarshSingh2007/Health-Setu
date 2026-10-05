'use client';

import React from 'react';
import { Compass, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';

export default function GapFinderPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-teal-700 uppercase tracking-widest flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-teal-600" /> Geographic Healthcare Analytics
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
            Healthcare Access Gap Finder
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Identifies underserved population clusters requiring telemedicine, PHC expansion, or ASHA outreach.
          </p>
        </div>
        <span className="px-3 py-1.5 rounded-xl bg-teal-50 border border-teal-200 text-teal-900 font-semibold text-xs">
          AI Recommendations — Human Decision Required
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3">
          <div className="flex items-center justify-between font-bold text-slate-900">
            <span className="text-sm">Underserved Cluster: Siddhiqganj South</span>
            <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 text-[10px]">GAP SCORE: HIGH</span>
          </div>
          <p className="text-slate-600">Population: 1,850 | Distance to nearest CHC: 18.2 km | Telemedicine Access: 45%</p>
          <div className="p-3 rounded-xl bg-teal-50 border border-teal-200 text-teal-900 font-medium">
            AI Recommendation: Establish 1 e-Sanjeevani Telemedicine Kiosk & deploy weekly Mobile Health Van.
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3">
          <div className="flex items-center justify-between font-bold text-slate-900">
            <span className="text-sm">Underserved Cluster: Diwadia East</span>
            <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-[10px]">GAP SCORE: MODERATE</span>
          </div>
          <p className="text-slate-600">Population: 1,120 | Distance to nearest PHC: 8.5 km | ASHA Coverage: 60%</p>
          <div className="p-3 rounded-xl bg-teal-50 border border-teal-200 text-teal-900 font-medium">
            AI Recommendation: Assign 1 additional ASHA worker for maternal ANC escort.
          </div>
        </div>
      </div>
    </div>
  );
}
