'use client';

import React from 'react';
import { mockCommunityMissions } from '@/lib/mockData';
import { DataConfidenceBadge } from '@/components/ui/DataConfidenceBadge';
import { Target, CheckCircle2, BarChart3, Users, Award, ArrowRight, Flag } from 'lucide-react';

export default function CommunityMissionsPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="bg-[#08111c] border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-teal-400 uppercase tracking-widest flex items-center gap-1.5">
            <Target className="w-4 h-4 text-emerald-400" /> Feature 14: Community Health Mission & Impact Loop
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight mt-0.5">
            Community Action Board & HealthSetu Impact Ledger
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Connects individual ASHA visits with village missions & district health impact tracking.
          </p>
        </div>

        <DataConfidenceBadge status="CONNECTED_LIVE" />
      </div>

      {/* HealthSetu Impact Ledger Counters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="bg-[#0d1722] border border-slate-800 p-5 rounded-2xl shadow-xl">
          <div className="text-3xl font-black text-teal-400">14,280</div>
          <div className="text-xs text-slate-400 font-medium mt-1">Care Journeys Completed</div>
        </div>

        <div className="bg-[#0d1722] border border-slate-800 p-5 rounded-2xl shadow-xl">
          <div className="text-3xl font-black text-sky-400">642</div>
          <div className="text-xs text-slate-400 font-medium mt-1">Teleconsultations Completed</div>
        </div>

        <div className="bg-[#0d1722] border border-slate-800 p-5 rounded-2xl shadow-xl">
          <div className="text-3xl font-black text-rose-400">184</div>
          <div className="text-xs text-slate-400 font-medium mt-1">High-Risk Cases Flagged</div>
        </div>

        <div className="bg-[#0d1722] border border-slate-800 p-5 rounded-2xl shadow-xl">
          <div className="text-3xl font-black text-emerald-400">2,450</div>
          <div className="text-xs text-slate-400 font-medium mt-1">Villages Reached</div>
        </div>
      </div>

      {/* Community Missions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockCommunityMissions.map((mis) => {
          const pct = Math.round((mis.completedCount / mis.targetCount) * 100);
          return (
            <div key={mis.id} className="bg-[#0d1722] border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${
                    mis.status === 'urgent' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' : 'bg-teal-500/20 text-teal-300 border border-teal-500/40'
                  }`}>
                    {mis.category}
                  </span>
                  <h3 className="font-bold text-white text-base mt-2">{mis.title}</h3>
                  <p className="text-xs text-slate-400">{mis.hindiTitle}</p>
                </div>
              </div>

              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between font-semibold text-slate-300">
                  <span>Village Target ({mis.targetVillage}):</span>
                  <span>{mis.completedCount} / {mis.targetCount} ({pct}%)</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-teal-500 h-full rounded-full" style={{ width: `${pct}%` }} />
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>Assigned: <strong className="text-slate-200">{mis.assignedAsha}</strong></span>
                <span>Deadline: {mis.deadline}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
