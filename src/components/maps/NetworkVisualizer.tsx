'use client';

import React, { useState } from 'react';
import { Building2, Home, Activity, Bot, UserCheck, Stethoscope, Video, ShieldAlert, Sparkles, MapPin } from 'lucide-react';

export const NetworkVisualizer: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>('node-ai');

  const nodes = [
    { id: 'node-india', label: 'Bharat (India)', icon: MapPin, type: 'National', status: 'Active (28 States / 8 UTs)', color: 'border-amber-400 bg-amber-500/10 text-amber-300' },
    { id: 'node-district', label: 'Sehore District', icon: Building2, type: 'District Command', status: '42 Villages / 4 Blocks', color: 'border-sky-400 bg-sky-500/10 text-sky-300' },
    { id: 'node-village', label: 'Pipariya Village', icon: Home, type: 'Village Community', status: 'Pop: 2,450 | Resilience: 72/100', color: 'border-emerald-400 bg-emerald-500/10 text-emerald-300' },
    { id: 'node-phc', label: 'Pipariya PHC', icon: Activity, type: 'Primary Care', status: 'Beds: 4 | Doctor: 1 | Telemedicine', color: 'border-teal-400 bg-teal-500/10 text-teal-300' },
    { id: 'node-chc', label: 'Ashta CHC', icon: Stethoscope, type: 'Secondary Referral', status: 'Beds: 18 | Emergency 24x7', color: 'border-cyan-400 bg-cyan-500/10 text-cyan-300' },
    { id: 'node-asha', label: 'ASHA Field Worker', icon: UserCheck, type: 'Last-Mile Outreach', status: 'Visits Today: 8 | High-Risk: 2', color: 'border-rose-400 bg-rose-500/10 text-rose-300' },
    { id: 'node-tele', label: 'e-Sanjeevani Telemed', icon: Video, type: 'Digital Consult', status: 'Queue: 3 Patients | Status: Live', color: 'border-indigo-400 bg-indigo-500/10 text-indigo-300' },
    { id: 'node-ai', label: 'HealthSetu AI Engine', icon: Bot, type: 'Intelligence Core', status: 'Triage Risk / Anomaly / Gap Radar', color: 'border-emerald-300 bg-teal-400/20 text-emerald-200 ring-2 ring-emerald-400/40' }
  ];

  return (
    <div className="relative w-full bg-slate-950 border border-slate-800 rounded-2xl p-6 text-white overflow-hidden shadow-2xl">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

      {/* Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-400 uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-teal-300 animate-spin" /> Live Infrastructure Visualizer
          </div>
          <h3 className="text-lg font-bold text-white tracking-tight">Bharat Healthcare Connectivity Graph</h3>
        </div>
        <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/30 text-xs font-mono">
          Interactive Node Network
        </span>
      </div>

      {/* Node Grid Architecture */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {nodes.map((node) => {
          const Icon = node.icon;
          const isSelected = activeNode === node.id;
          return (
            <button
              key={node.id}
              onClick={() => setActiveNode(node.id)}
              className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${node.color} ${
                isSelected ? 'scale-105 shadow-xl shadow-teal-500/10 ring-2 ring-teal-400' : 'opacity-85 hover:opacity-100 hover:scale-102'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <Icon className="w-5 h-5 shrink-0" />
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-black/40 font-mono uppercase">{node.type}</span>
              </div>
              <div className="font-bold text-xs truncate">{node.label}</div>
              <div className="text-[10px] opacity-75 mt-0.5 truncate">{node.status}</div>
            </button>
          );
        })}
      </div>

      {/* Active Node Detail Card */}
      {activeNode && (
        <div className="relative z-10 bg-slate-900/90 border border-slate-800 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-300 font-bold">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <div className="text-slate-400 text-[10px] uppercase tracking-wider">Active Connectivity Pipeline</div>
              <div className="text-white font-bold text-sm">
                Patient → AI Triage → ASHA Worker → PHC → CHC → District Command
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 font-mono font-medium">Real-Time Data Flow Active</span>
          </div>
        </div>
      )}
    </div>
  );
};
