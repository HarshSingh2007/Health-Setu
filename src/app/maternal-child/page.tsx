'use client';

import React from 'react';
import { mockMaternalRecords, mockChildRecords } from '@/lib/mockData';
import { Baby, Calendar, HeartPulse, CheckCircle2, AlertTriangle, UserCheck } from 'lucide-react';

export default function MaternalChildPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-teal-700 uppercase tracking-widest flex items-center gap-1.5">
            <Baby className="w-4 h-4 text-pink-600" /> Maternal & Child Health Timeline
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
            Family Care & ANC Vaccination Journey
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Track ANC checkups, Hemoglobin/BP trends, EDD calculator & child growth timeline.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Col: Maternal ANC Care Tracker */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <HeartPulse className="w-5 h-5 text-rose-600" /> Pregnant Mothers Registry
          </h2>

          <div className="space-y-4">
            {mockMaternalRecords.map((m) => (
              <div key={m.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3 text-xs">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">{m.patientName} (Age {m.age})</h3>
                    <p className="text-slate-500">Village: {m.village} | Wk {m.pregnancyWeek} (EDD: {m.edd})</p>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-teal-100 text-teal-800 font-bold">
                    ANC {m.ancVisitsCompleted}/{m.ancVisitsRequired}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center bg-white p-2.5 rounded-lg border border-slate-200 font-mono">
                  <div>
                    <div className="text-[10px] text-slate-400">Hemoglobin</div>
                    <div className={`font-bold ${m.hemoglobinGdl < 10 ? 'text-rose-600' : 'text-slate-800'}`}>
                      {m.hemoglobinGdl} g/dL
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400">Blood Pressure</div>
                    <div className="font-bold text-slate-800">{m.bpSys}/{m.bpDia}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400">Weight</div>
                    <div className="font-bold text-slate-800">{m.weightKg} kg</div>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="font-semibold text-slate-700">Vaccination Schedule:</div>
                  {m.vaccinations.map((v, i) => (
                    <div key={i} className="flex items-center justify-between text-[11px] p-1.5 rounded bg-white border border-slate-100">
                      <span>{v.name} ({v.date})</span>
                      <span className={`px-1.5 py-0.2 rounded font-semibold ${
                        v.status === 'completed' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {v.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Col: Child Growth & Vaccination Reminder */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <Baby className="w-5 h-5 text-teal-600" /> Child Growth & Immunization Timeline
          </h2>

          <div className="space-y-4">
            {mockChildRecords.map((c) => (
              <div key={c.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3 text-xs">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">{c.childName} (Age {c.ageMonths} months)</h3>
                    <p className="text-slate-500">Mother: {c.motherName} | Village: {c.village}</p>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 font-bold">
                    {c.nutritionStatus}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="font-semibold text-slate-700">Immunization History & Upcoming:</div>
                  <div className="space-y-1">
                    {c.vaccinations.map((v, i) => (
                      <div key={i} className="flex items-center justify-between text-[11px] p-1.5 rounded bg-white border border-slate-100">
                        <span>{v.name} (Due: {v.dueDate})</span>
                        <span className={`px-1.5 py-0.2 rounded font-semibold ${
                          v.status === 'completed' ? 'bg-emerald-100 text-emerald-800' : 'bg-purple-100 text-purple-800'
                        }`}>
                          {v.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
