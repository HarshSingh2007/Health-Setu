'use client';

import React from 'react';
import { HeartPulse, Activity, CheckCircle2, AlertTriangle, Calendar } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export default function ChronicCarePage() {
  const bpData = [
    { date: 'Sep 01', sys: 142, dia: 90 },
    { date: 'Sep 08', sys: 138, dia: 88 },
    { date: 'Sep 15', sys: 135, dia: 85 },
    { date: 'Sep 22', sys: 130, dia: 82 },
    { date: 'Sep 29', sys: 128, dia: 80 }
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-teal-700 uppercase tracking-widest flex items-center gap-1.5">
            <HeartPulse className="w-4 h-4 text-teal-600" /> Chronic Care Management
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
            Diabetes & Hypertension Health Tracker
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Monitors blood pressure and blood glucose trends, medicine adherence & ASHA visit triggers.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left 7 Cols: BP & Sugar Trend Chart */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Blood Pressure Trend (5-Week Monitoring)</h3>
              <p className="text-xs text-slate-500">Patient: Rameshwar Prasad (Age 62, Pipariya)</p>
            </div>
            <span className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 font-bold text-xs">
              Adherence: 94% Good
            </span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={bpData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="date" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} domain={[60, 160]} />
                <Tooltip contentStyle={{ borderRadius: '12px', fontSize: '12px' }} />
                <Line type="monotone" dataKey="sys" stroke="#f43f5e" strokeWidth={3} name="Systolic BP (mmHg)" />
                <Line type="monotone" dataKey="dia" stroke="#0284c7" strokeWidth={2} name="Diastolic BP (mmHg)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right 5 Cols: ASHA Follow-up Triggers */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4 text-xs">
          <h3 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-3">
            ASHA Worker Chronic Care Follow-ups
          </h3>

          <div className="space-y-3">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="font-bold text-slate-900">Rameshwar Prasad (Age 62)</div>
              <div className="text-slate-600">Medication: Amlodipine 5mg Daily</div>
              <div className="text-emerald-700 font-semibold mt-1">Status: BP Controlled (128/80 mmHg)</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="font-bold text-slate-900">Mohan Lal Sahu (Age 58)</div>
              <div className="text-slate-600">Medication: Metformin 500mg SR</div>
              <div className="text-amber-700 font-semibold mt-1">Status: Refill Reminder Due in 3 Days</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
