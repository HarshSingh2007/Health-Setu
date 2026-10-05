'use client';

import React from 'react';
import { Lock, ShieldCheck, CheckCircle2, AlertTriangle, FileText } from 'lucide-react';

export default function TrustSafetyPage() {
  const rules = [
    'AI does not diagnose definitively — clinical guidance is purely informational & triage-focused.',
    'AI does not automatically prescribe medications — prescription is restricted to licensed doctors.',
    'AI does not replace certified healthcare professionals or emergency first-responders.',
    'AI does not make autonomous emergency transport decisions without human verification.',
    'Simulated datasets are explicitly labeled as DEMO / SIMULATED DATA at all times.',
    'Government statistics and outbreak alerts require human public health verification.'
  ];

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-teal-700 uppercase tracking-widest flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-teal-600" /> AI Ethics & Safety Governance
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
            Trust, Safety & Governance Center
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Strict safety rules and human-in-the-loop verification guardrails governing HealthSetu AI.
          </p>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4 text-xs">
        <h3 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-2">
          Absolute AI Safety & Clinical Mandates
        </h3>

        <ul className="space-y-2.5">
          {rules.map((r, i) => (
            <li key={i} className="flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200 text-slate-800 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
