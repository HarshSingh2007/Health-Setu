'use client';

import React from 'react';
import { User, Users, Home, UserCheck, Activity, Building2, Flag } from 'lucide-react';

export const HealthcareNetworkRings: React.FC = () => {
  const steps = [
    { label: 'Person', icon: User, color: 'border-slate-300 bg-slate-100 text-slate-700' },
    { label: 'Family', icon: Users, color: 'border-teal-300 bg-teal-50 text-teal-700' },
    { label: 'Village', icon: Home, color: 'border-emerald-300 bg-emerald-50 text-emerald-700' },
    { label: 'Health Worker', icon: UserCheck, color: 'border-cyan-300 bg-cyan-50 text-cyan-700' },
    { label: 'Facility', icon: Activity, color: 'border-sky-300 bg-sky-50 text-sky-700' },
    { label: 'District', icon: Building2, color: 'border-indigo-300 bg-indigo-50 text-indigo-700' },
    { label: 'Nation', icon: Flag, color: 'border-rose-300 bg-rose-50 text-rose-700' }
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 text-center">
        Healthcare Network Ecosystem Layer
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
        {steps.map((st, i) => {
          const Icon = st.icon;
          return (
            <React.Fragment key={i}>
              <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl border font-semibold ${st.color}`}>
                <Icon className="w-3.5 h-3.5" />
                <span>{st.label}</span>
              </div>
              {i < steps.length - 1 && (
                <span className="text-slate-300 font-bold hidden sm:inline">→</span>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
