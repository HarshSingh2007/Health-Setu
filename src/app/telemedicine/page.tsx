'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/layout/AppContext';
import { Video, User, Bot, FileText, CheckCircle2, ShieldAlert, Mic, PhoneOff, Calendar, AlertCircle } from 'lucide-react';

export default function TelemedicinePage() {
  const { role, setRole } = useApp();
  const [activeToken, setActiveToken] = useState('TELE-2026-089');

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header & Role Switcher Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-400 uppercase tracking-widest">
            <Video className="w-4 h-4 text-teal-300 animate-pulse" /> e-Sanjeevani Telemedicine Studio
          </div>
          <h1 className="text-2xl font-bold tracking-tight mt-1">Virtual Consultation Studio</h1>
          <p className="text-xs text-slate-300 mt-0.5">Connects rural patients with PHC/CHC doctors without long travel burden.</p>
        </div>

        <div className="flex items-center gap-2 bg-slate-800 p-1.5 rounded-xl border border-slate-700 text-xs">
          <span className="text-slate-400 font-medium px-2">Studio View:</span>
          <button
            onClick={() => setRole('patient')}
            className={`px-3 py-1 rounded-lg font-semibold transition ${role === 'patient' ? 'bg-teal-600 text-white' : 'text-slate-300 hover:text-white'}`}
          >
            Patient Portal
          </button>
          <button
            onClick={() => setRole('doctor')}
            className={`px-3 py-1 rounded-lg font-semibold transition ${role === 'doctor' ? 'bg-teal-600 text-white' : 'text-slate-300 hover:text-white'}`}
          >
            Doctor Clinical Panel
          </button>
        </div>
      </div>

      {/* Safety Notice */}
      <div className="bg-amber-500/10 border border-amber-300 text-amber-900 rounded-xl p-3 text-xs flex items-center gap-2 font-medium">
        <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
        Safe Consultation Protocol: Automated prescribing is strictly disabled. AI clinical summary provides decision support to certified doctors only.
      </div>

      {/* Main Studio View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left 7 Cols: Video Stream / Patient Queue */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white h-[480px] flex flex-col justify-between shadow-xl relative overflow-hidden">
          {/* Simulated Video Canvas */}
          <div className="absolute inset-0 bg-slate-950/60 flex items-center justify-center">
            <div className="text-center space-y-3">
              <div className="w-20 h-20 rounded-full bg-teal-500/20 border-2 border-teal-400 flex items-center justify-center text-teal-300 mx-auto animate-pulse">
                <Video className="w-8 h-8" />
              </div>
              <div className="font-bold text-base">Live Video Stream Connected</div>
              <div className="text-xs text-slate-400 font-mono">Consultation Token: {activeToken} | Dr. R.K. Sharma (Ashta CHC)</div>
            </div>
          </div>

          {/* Top Video Header Overlay */}
          <div className="relative z-10 flex items-center justify-between bg-slate-950/80 p-3 rounded-xl border border-slate-800 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="font-semibold text-emerald-400">Encrypted Consultation Active</span>
            </div>
            <span className="font-mono text-slate-400">Duration: 04:12</span>
          </div>

          {/* Bottom Call Controls Overlay */}
          <div className="relative z-10 flex items-center justify-center gap-3 bg-slate-950/80 p-3 rounded-xl border border-slate-800">
            <button className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white">
              <Mic className="w-4 h-4" />
            </button>
            <button className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white">
              <Video className="w-4 h-4" />
            </button>
            <button className="px-5 py-2.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs flex items-center gap-2">
              <PhoneOff className="w-4 h-4" /> End Teleconsultation
            </button>
          </div>
        </div>

        {/* Right 5 Cols: Doctor Clinical Summary / AI Notes */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4 text-xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <Bot className="w-4 h-4 text-teal-600" /> AI Clinical Summary & Notes
            </h3>
            <span className="px-2 py-0.5 rounded bg-teal-50 text-teal-800 font-semibold text-[10px] border border-teal-200">
              Doctor Review Mode
            </span>
          </div>

          <div className="space-y-3">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="font-bold text-slate-900">Patient: Sunita Bai Patel (Age 24)</div>
              <div className="text-slate-600">Location: Pipariya Village | Pregnancy Wk 32</div>
              <div className="text-rose-700 font-semibold mt-1">AI Flag: Moderate Anemia (Hb 9.4 g/dL) & Fever (101°F)</div>
            </div>

            <div>
              <div className="font-semibold text-slate-700 mb-1">AI Suggested Care Guidance:</div>
              <ul className="space-y-1 bg-teal-50/60 p-2.5 rounded-xl border border-teal-200 text-slate-800">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                  Recommend IFA (Iron Folic Acid) supplement continuation.
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                  Schedule rapid blood malaria slide at Pipariya PHC.
                </li>
              </ul>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Doctor Prescriptive Notes & Referral Instructions:</label>
              <textarea
                rows={3}
                defaultValue="Advised Paracetamol 500mg SOS. Continue IFA red tablets daily. ASHA Kamla Verma to log BP tomorrow."
                className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-medium focus:outline-none focus:border-teal-500"
              />
            </div>

            <button
              onClick={() => alert("Digital prescription & ASHA follow-up task generated successfully!")}
              className="w-full py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold flex items-center justify-center gap-2 shadow-xs transition"
            >
              <FileText className="w-4 h-4" /> Issue Signed e-Prescription & Referral
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
