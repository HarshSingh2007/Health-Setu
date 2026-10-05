'use client';

import React from 'react';
import { mockCommunityMissions } from '@/lib/mockData';
import { Target, CheckCircle2, Clock, Users, Award } from 'lucide-react';

export default function MissionsPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-teal-700 uppercase tracking-widest flex items-center gap-1.5">
            <Target className="w-4 h-4 text-teal-600" /> Community Health Resilience Drives
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
            Community Mission Board
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            ASHA/ANM healthcare worker task drives aggregating village screening and maternal follow-ups.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockCommunityMissions.map((mis) => {
          const pct = Math.round((mis.completedCount / mis.targetCount) * 100);
          return (
            <div key={mis.id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${
                    mis.status === 'urgent' ? 'bg-rose-100 text-rose-800' : 'bg-teal-100 text-teal-800'
                  }`}>
                    {mis.category}
                  </span>
                  <h3 className="font-bold text-slate-900 text-base mt-2">{mis.title}</h3>
                  <p className="text-xs text-slate-500">{mis.hindiTitle}</p>
                </div>
              </div>

              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between font-semibold text-slate-700">
                  <span>Village Target ({mis.targetVillage}):</span>
                  <span>{mis.completedCount} / {mis.targetCount} ({pct}%)</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-teal-600 h-full rounded-full" style={{ width: `${pct}%` }} />
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Assigned: <strong>{mis.assignedAsha}</strong></span>
                <span>Deadline: {mis.deadline}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
