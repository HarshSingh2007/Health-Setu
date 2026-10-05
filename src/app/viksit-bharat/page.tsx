'use client';

import React from 'react';
import { Flag, ShieldCheck, HeartPulse, Home, Bot, Leaf, ArrowRight, Sparkles, User, CheckCircle2 } from 'lucide-react';

export default function ViksitBharatPage() {
  const pillars = [
    { title: 'HEALTHY CITIZENS', desc: 'Universal last-mile healthcare access and preventive clinical guidance for every individual.', icon: HeartPulse, color: 'text-rose-600 bg-rose-50 border-rose-200' },
    { title: 'HEALTHY VILLAGES', desc: 'Stronger primary health centers (PHC/CHC) equipped with digital telemedicine & ASHA field workers.', icon: Home, color: 'text-teal-600 bg-teal-50 border-teal-200' },
    { title: 'DIGITAL HEALTH', desc: 'Connected health records via ABDM ABHA ID and real-time public health surveillance.', icon: Bot, color: 'text-indigo-600 bg-indigo-50 border-indigo-200' },
    { title: 'RESILIENT COMMUNITIES', desc: 'Early outbreak warning radar and high-risk maternal/child care tracking.', icon: ShieldCheck, color: 'text-sky-600 bg-sky-50 border-sky-200' },
    { title: 'SUSTAINABLE HEALTHCARE', desc: 'Reduced unnecessary travel burden, CO2 emissions savings, and medicine wastage prevention.', icon: Leaf, color: 'text-emerald-600 bg-emerald-50 border-emerald-200' }
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-widest">
          <Flag className="w-4 h-4 text-emerald-400" /> Strategic Vision Roadmap
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">
          Viksit Bharat 2047 — Health Vision
        </h1>
        <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
          HealthSetu AI contributes to India&apos;s 100th year of Independence by transforming last-mile healthcare from reactive treatment to preventive, resilient community health.
        </p>

        <div className="text-[11px] text-slate-400 font-mono bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
          Disclaimer: Presented as this project&apos;s architectural vision & contribution toward national digital health goals.
        </div>
      </div>

      {/* "One Patient -> One Community" Story Pipeline */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="font-bold text-slate-900 text-base">
            &quot;One Patient → One Community&quot; Visual Storyline
          </h3>
          <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-lg border border-teal-200">
            Systemic Ripple Effect
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-xs">
          {[
            { step: '01', title: '1 Patient Follow-up', desc: 'Sunita Bai completes ANC Visit 3 & Hb test.' },
            { step: '02', title: 'ASHA Logs Data', desc: 'Kamla Verma updates NHM Field App.' },
            { step: '03', title: 'Community Pulse Updates', desc: 'Pipariya Village Maternal score improves.' },
            { step: '04', title: 'District Receives Signal', desc: 'Sehore CMO sees zero maternal mortality risk.' },
            { step: '05', title: 'Viksit Bharat 2047', desc: 'Resilient rural public health infrastructure.' }
          ].map((st, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 flex flex-col justify-between">
              <div className="text-[10px] font-mono text-teal-700 font-bold">STEP {st.step}</div>
              <div>
                <div className="font-bold text-slate-900 text-xs">{st.title}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{st.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((pil, idx) => {
          const Icon = pil.icon;
          return (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3">
              <div className={`w-10 h-10 rounded-xl border flex items-center justify-center font-bold ${pil.color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">{pil.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{pil.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
