'use client';

import React from 'react';
import { mockDiseaseAlerts } from '@/lib/mockData';
import { Flame, AlertTriangle, ShieldAlert, Activity, CheckCircle2, MapPin } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export default function DiseaseIntelligencePage() {
  const clusterData = [
    { village: 'Pipariya', fever: 14, respiratory: 6, diarrhea: 2 },
    { village: 'Kothri', fever: 4, respiratory: 3, diarrhea: 1 },
    { village: 'Siddhiqganj', fever: 9, respiratory: 8, diarrhea: 5 },
    { village: 'Diwadia', fever: 3, respiratory: 2, diarrhea: 8 }
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-teal-700 uppercase tracking-widest flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-amber-500 animate-pulse" /> Outbreak & Anomaly Intelligence Radar
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
            District Disease Surveillance & Early Warning
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            AI anomaly detection flagging symptom clusters before outbreak escalation.
          </p>
        </div>
      </div>

      {/* Mandatory Outbreak Disclaimer */}
      <div className="bg-amber-500/10 border border-amber-300 text-amber-900 rounded-xl p-3 text-xs flex items-center gap-3">
        <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
        <span className="font-semibold">
          Disclaimer: Potential anomaly detected — public-health verification required. Anomaly scores indicate early surveillance patterns, not confirmed diagnosis.
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left 7 Cols: Cluster Chart */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
          <h3 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-3">
            Symptom Cluster Count Across Villages (Sehore District)
          </h3>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={clusterData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="village" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip contentStyle={{ borderRadius: '12px', fontSize: '12px' }} />
                <Bar dataKey="fever" fill="#f59e0b" name="Fever Cases" radius={[6, 6, 0, 0]} />
                <Bar dataKey="respiratory" fill="#0284c7" name="Respiratory Cases" radius={[6, 6, 0, 0]} />
                <Bar dataKey="diarrhea" fill="#10b981" name="Diarrheal Cases" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right 5 Cols: Active Alerts Queue */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
          <h3 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-3">
            Surveillance Alerts & AI Anomaly Score
          </h3>

          <div className="space-y-3">
            {mockDiseaseAlerts.map((alert) => (
              <div key={alert.id} className="p-4 rounded-xl border border-amber-200 bg-amber-50/50 space-y-2 text-xs">
                <div className="flex items-center justify-between font-bold text-slate-900">
                  <span className="flex items-center gap-1.5 text-amber-900">
                    <AlertTriangle className="w-4 h-4 text-amber-600" /> {alert.diseaseType}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-amber-600 text-white font-mono text-[10px]">
                    Anomaly: {alert.aiAnomalyScore}/100
                  </span>
                </div>
                <div className="text-slate-700 font-medium">
                  Location: {alert.village} Village ({alert.casesCount} cases logged)
                </div>
                <div className="text-[11px] text-amber-800 bg-amber-100 p-2 rounded-lg font-medium">
                  {alert.verificationStatus}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
