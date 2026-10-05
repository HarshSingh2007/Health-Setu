'use client';

import React from 'react';
import { AlertOctagon, Phone, ShieldAlert, Navigation, Clock, CheckCircle2 } from 'lucide-react';

export default function EmergencyPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="bg-rose-950 border border-rose-800 text-white rounded-2xl p-6 shadow-xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-bold text-rose-400 uppercase tracking-widest flex items-center gap-1.5">
            <AlertOctagon className="w-4 h-4 text-rose-400 animate-pulse" /> 24/7 National Emergency Command
          </div>
          <h1 className="text-2xl font-bold tracking-tight mt-0.5">
            Emergency Medical Access & Dispatch
          </h1>
          <p className="text-xs text-rose-200 mt-0.5">
            Direct connection to 108 Ambulance Network, CHC Casualty Wards & Trauma Centers.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="tel:108"
            className="px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-sm shadow-lg flex items-center gap-2 animate-bounce"
          >
            <Phone className="w-4 h-4" /> CALL 108 AMBULANCE
          </a>
        </div>
      </div>

      {/* Emergency Hotline Numbers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold">
        <div className="bg-white border border-slate-200 p-4 rounded-xl text-center space-y-1">
          <div className="text-rose-600 font-extrabold text-lg">108</div>
          <div className="text-slate-800">National Emergency Health Ambulance</div>
        </div>
        <div className="bg-white border border-slate-200 p-4 rounded-xl text-center space-y-1">
          <div className="text-teal-600 font-extrabold text-lg">102</div>
          <div className="text-slate-800">Janani Shishu Suraksha Ambulance</div>
        </div>
        <div className="bg-white border border-slate-200 p-4 rounded-xl text-center space-y-1">
          <div className="text-sky-600 font-extrabold text-lg">112</div>
          <div className="text-slate-800">Unified Emergency Services Hub</div>
        </div>
      </div>
    </div>
  );
}
