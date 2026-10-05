'use client';

import React, { useState } from 'react';
import { mockResilienceIndexes } from '@/lib/mockData';
import { DataConfidenceBadge } from '@/components/ui/DataConfidenceBadge';
import { ShieldCheck, CheckCircle2, Award, Info, HelpCircle } from 'lucide-react';

export default function ResilienceIndexPage() {
  const selectedResilience = mockResilienceIndexes[0]; // Pipariya (72/100)
  const [activeSegment, setActiveSegment] = useState<string>('medicineAvailability');

  const segmentExplanations: Record<string, { label: string; score: number; detail: string; status: 'good' | 'warning' | 'critical' }> = {
    healthcareAccess: { label: 'Healthcare Access', score: 78, detail: 'Pipariya PHC located 0.8 km from village square with 4 beds.', status: 'good' },
    emergencyAccess: { label: 'Emergency Readiness', score: 65, detail: '108 Ambulance response time average 28 minutes from Ashta CHC.', status: 'warning' },
    healthWorkerCoverage: { label: 'Health Worker Coverage', score: 88, detail: '2 ASHA workers covering 480 households (100% census logged).', status: 'good' },
    medicineAvailability: { label: 'Medicine Availability', score: 54, detail: 'Critical stock shortage of Amoxicillin 500mg (only 45 units remaining).', status: 'critical' },
    telemedicineAccess: { label: 'Telemedicine Readiness', score: 80, detail: 'Daily e-Sanjeevani portal slot capacity active at PHC.', status: 'good' },
    preventiveCare: { label: 'Preventive Care Coverage', score: 75, detail: '142 preventive home visits logged in the past 30 days.', status: 'good' },
    maternalChildHealth: { label: 'Maternal & Child Health', score: 70, detail: '2 pregnant mothers flagged with moderate anemia (Hb < 10 g/dL).', status: 'warning' },
    chronicCareCoverage: { label: 'Chronic Care Coverage', score: 66, detail: '66% of hypertension patients logged with good medication adherence.', status: 'warning' }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-teal-700 uppercase tracking-widest flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-teal-600" /> Transparent Community Indicator
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
            Village Health Resilience Index (0–100)
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Interactive multi-segment score measuring local healthcare accessibility, emergency readiness, and medicine stock.
          </p>
        </div>

        <DataConfidenceBadge status="DEMO_SIMULATED" />
      </div>

      {/* Main Score Hero Card */}
      <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-4 text-center md:border-r border-slate-800 pr-0 md:pr-6">
          <div className="text-xs font-semibold text-teal-400 uppercase tracking-widest">
            {selectedResilience.village} Village Score
          </div>
          <div className="text-6xl font-black text-emerald-400 mt-2 tracking-tight">
            {selectedResilience.overallScore}
            <span className="text-2xl text-slate-400 font-normal">/100</span>
          </div>
          <div className="text-xs text-slate-300 mt-2 font-medium">
            Rank #{selectedResilience.rankInDistrict} of {selectedResilience.totalVillagesInDistrict} Villages in District
          </div>
        </div>

        {/* Interactive Breakdown Segment Grid */}
        <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          {Object.entries(selectedResilience.breakdown).map(([key, value]) => {
            const isSelected = activeSegment === key;
            const item = segmentExplanations[key];
            return (
              <button
                key={key}
                onClick={() => setActiveSegment(key)}
                className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                  isSelected
                    ? 'bg-teal-600 border-teal-400 text-white shadow-lg ring-2 ring-teal-400/40'
                    : 'bg-slate-800/80 border-slate-700 text-slate-200 hover:bg-slate-800'
                }`}
              >
                <div className="text-[10px] text-slate-300 font-medium truncate">{item?.label || key}</div>
                <div className="font-extrabold text-lg mt-0.5">{value}/100</div>
                <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden mt-1">
                  <div className={`h-full rounded-full ${value < 60 ? 'bg-rose-500' : value < 75 ? 'bg-amber-400' : 'bg-emerald-400'}`} style={{ width: `${value}%` }} />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Segment Deep Dive */}
      {activeSegment && segmentExplanations[activeSegment] && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <h3 className="font-bold text-slate-900 text-sm">
              Segment Deep Dive: {segmentExplanations[activeSegment].label} ({segmentExplanations[activeSegment].score}/100)
            </h3>
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
              segmentExplanations[activeSegment].status === 'critical' ? 'bg-rose-100 text-rose-800' : 'bg-emerald-100 text-emerald-800'
            }`}>
              {segmentExplanations[activeSegment].status}
            </span>
          </div>
          <p className="text-slate-700 text-xs leading-relaxed font-medium">
            {segmentExplanations[activeSegment].detail}
          </p>
        </div>
      )}
    </div>
  );
}
