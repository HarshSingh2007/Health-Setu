'use client';

import React, { useState } from 'react';
import { mockResilienceIndexes } from '@/lib/mockData';
import { DataConfidenceBadge } from '@/components/ui/DataConfidenceBadge';
import { ShieldCheck, Award, Info, Scale, CheckCircle2 } from 'lucide-react';

export default function ResilienceEquityPage() {
  const selectedResilience = mockResilienceIndexes[0]; // Pipariya (72/100)
  const [activeTab, setActiveTab] = useState<'resilience' | 'equity'>('resilience');

  const equityComparison = [
    { block: 'Ashta Block', accessScore: 78, bedsPer10k: 12.4, ashaRatio: '1:1200', equityRating: 'Moderate Equity' },
    { block: 'Ichhawar Block', accessScore: 62, bedsPer10k: 8.1, ashaRatio: '1:1800', equityRating: 'Underserved' },
    { block: 'Budhni Block', accessScore: 84, bedsPer10k: 16.5, ashaRatio: '1:950', equityRating: 'High Equity' },
    { block: 'Shyampur Block', accessScore: 54, bedsPer10k: 5.2, ashaRatio: '1:2100', equityRating: 'Critical Access Gap' }
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="bg-[#08111c] border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-teal-400 uppercase tracking-widest flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Feature 11: Health Resilience & Equity Score
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight mt-0.5">
            HealthSetu AI Analytical Score Engine
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Measures local healthcare accessibility, emergency readiness, ASHA coverage & regional equity disparities.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-[#0d1722] p-1.5 rounded-xl border border-slate-700 text-xs">
          <button
            onClick={() => setActiveTab('resilience')}
            className={`px-3 py-1 rounded-lg font-bold transition ${activeTab === 'resilience' ? 'bg-teal-600 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            Resilience Index
          </button>
          <button
            onClick={() => setActiveTab('equity')}
            className={`px-3 py-1 rounded-lg font-bold transition ${activeTab === 'equity' ? 'bg-teal-600 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            Health Equity View
          </button>
        </div>
      </div>

      {activeTab === 'resilience' ? (
        <div className="bg-[#0d1722] border border-slate-800 text-white rounded-3xl p-8 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-4 text-center md:border-r border-slate-800 pr-0 md:pr-6">
            <div className="text-xs font-semibold text-teal-400 uppercase tracking-widest">
              {selectedResilience.village} Village Resilience
            </div>
            <div className="text-6xl font-black text-emerald-400 mt-2 tracking-tight">
              {selectedResilience.overallScore}
              <span className="text-2xl text-slate-500 font-normal">/100</span>
            </div>
            <div className="text-xs text-slate-300 mt-2 font-medium">
              Rank #{selectedResilience.rankInDistrict} of {selectedResilience.totalVillagesInDistrict} Villages in District
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            {Object.entries(selectedResilience.breakdown).map(([key, value]) => {
              const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
              return (
                <div key={key} className="bg-[#111f2d] p-3 rounded-xl border border-slate-700 space-y-1">
                  <div className="text-slate-400 text-[10px] truncate">{formattedKey}</div>
                  <div className="font-extrabold text-white text-base">{value}/100</div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-teal-400 h-full rounded-full" style={{ width: `${value}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="bg-[#0d1722] border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4 text-xs text-white">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="font-bold text-base flex items-center gap-2">
              <Scale className="w-5 h-5 text-teal-400" /> Regional Health Equity View (Sehore District Blocks)
            </h3>
            <DataConfidenceBadge status="OFFICIAL_VERIFIED" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {equityComparison.map((eq, i) => (
              <div key={i} className="p-4 rounded-xl bg-[#111f2d] border border-slate-700 space-y-2">
                <div className="flex items-center justify-between font-bold text-sm">
                  <span>{eq.block}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] ${
                    eq.equityRating === 'High Equity' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'
                  }`}>
                    {eq.equityRating}
                  </span>
                </div>
                <div className="text-slate-300 text-[11px]">Access Score: {eq.accessScore}/100 | Hospital Beds: {eq.bedsPer10k} per 10k pop</div>
                <div className="text-slate-400 text-[11px]">ASHA Worker Ratio: {eq.ashaRatio}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
