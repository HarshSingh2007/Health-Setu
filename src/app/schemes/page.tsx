'use client';

import React from 'react';
import { mockSchemes } from '@/lib/mockData';
import { BookOpen, ExternalLink, CheckCircle2, ShieldCheck, FileText } from 'lucide-react';

export default function GovernmentSchemesPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-teal-700 uppercase tracking-widest flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-teal-600" /> Government Health Scheme Finder
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
            Health Benefits & Schemes Portal
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Discover PM-JAY, PMMVY, JSY & ABDM health coverage benefits for rural households.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockSchemes.map((sch) => (
          <div key={sch.id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-bold text-teal-700 uppercase tracking-widest bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                    {sch.sourceOrg}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">{sch.name}</h3>
                  <p className="text-xs text-slate-500 font-medium">{sch.hindiName}</p>
                </div>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs space-y-1">
                <div className="text-slate-400 font-medium">Benefit / Coverage</div>
                <div className="font-extrabold text-teal-800 text-sm">{sch.coverageINR}</div>
                <p className="text-slate-600 mt-1">{sch.purpose}</p>
              </div>

              <div className="space-y-1.5 text-xs">
                <div className="font-semibold text-slate-800">Indicative Eligibility:</div>
                <ul className="space-y-1 text-slate-600">
                  {sch.eligibility.map((e, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-1 text-xs">
                <div className="font-semibold text-slate-800">Required Documents:</div>
                <div className="flex flex-wrap gap-1">
                  {sch.requiredDocuments.map((doc, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700 text-[11px]">
                      {doc}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-400">Official Portal Source</span>
              <a
                href={sch.officialPortal}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-teal-700 hover:bg-teal-800 text-white font-semibold flex items-center gap-1.5 transition"
              >
                Visit Official Portal <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
