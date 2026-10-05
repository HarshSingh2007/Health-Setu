'use client';

import React from 'react';
import { FileHeart, CheckCircle2, ArrowRight, ShieldCheck, User } from 'lucide-react';

export default function PassportPage() {
  const steps = [
    { title: 'Community Screening', desc: 'Symptom & Vitals Logged by ASHA', status: 'Completed', date: 'Oct 01, 2026' },
    { title: 'AI Triage Assessment', desc: 'Risk Score 45/100 (Moderate Risk)', status: 'Completed', date: 'Oct 02, 2026' },
    { title: 'Telemedicine Consult', desc: 'Dr. Sharma (Ashta CHC) e-Prescription', status: 'Completed', date: 'Oct 02, 2026' },
    { title: 'Jan Aushadhi Medicine Refill', desc: 'Amoxicillin & Paracetamol Picked Up', status: 'Completed', date: 'Oct 03, 2026' },
    { title: 'ASHA Follow-up Visit', desc: 'Vitals re-checked, temp normal 98.6°F', status: 'Scheduled', date: 'Oct 08, 2026' },
    { title: 'Preventive Health Care', desc: 'Routine ANC Checkup 4', status: 'Upcoming', date: 'Oct 15, 2026' }
  ];

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-teal-700 uppercase tracking-widest flex items-center gap-1.5">
            <FileHeart className="w-4 h-4 text-teal-600" /> Digital Health Milestone Timeline
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
            My Health Journey Passport
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Privacy-first vertical visual milestone timeline from initial screening to preventive follow-up.
          </p>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
          <div className="w-10 h-10 rounded-full bg-teal-700 text-white font-bold flex items-center justify-center">
            SP
          </div>
          <div>
            <div className="font-bold text-slate-900 text-sm">Sunita Bai Patel (ABHA ID: 91-4820-3910-4492)</div>
            <div className="text-slate-500">Pipariya Village | Age 24 | Pregnancy Wk 32</div>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-teal-200 ml-4 pl-6 space-y-6 text-xs">
          {steps.map((st, idx) => (
            <div key={idx} className="relative group">
              {/* Bullet Node */}
              <div className={`absolute -left-[31px] top-0.5 w-4 h-4 rounded-full border-2 ${
                st.status === 'Completed'
                  ? 'bg-teal-600 border-white ring-2 ring-teal-400'
                  : st.status === 'Scheduled'
                  ? 'bg-amber-400 border-white ring-2 ring-amber-300'
                  : 'bg-slate-300 border-white'
              }`} />

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1">
                <div className="flex items-center justify-between font-bold text-slate-900">
                  <span>{st.title}</span>
                  <span className="text-[10px] font-mono text-slate-400">{st.date}</span>
                </div>
                <p className="text-slate-600">{st.desc}</p>
                <span className={`inline-block text-[10px] font-semibold px-2 py-0.2 rounded ${
                  st.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                }`}>
                  {st.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
