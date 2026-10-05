'use client';

import React, { useState } from 'react';
import { mockAshaVisits } from '@/lib/mockData';
import { UserCheck, CheckCircle2, AlertTriangle, Wifi, WifiOff, Calendar, Plus, RefreshCw, Phone } from 'lucide-react';

export default function AshaFieldAppPage() {
  const [isOffline, setIsOffline] = useState(false);
  const [visits, setVisits] = useState(mockAshaVisits);
  const [offlineQueueCount, setOfflineQueueCount] = useState(0);

  const completeVisit = (id: string) => {
    setVisits(prev => prev.map(v => v.id === id ? { ...v, status: 'VISITED' } : v));
    if (isOffline) {
      setOfflineQueueCount(prev => prev + 1);
    }
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto">
      {/* Mobile-First Header */}
      <div className="bg-gradient-to-r from-teal-900 via-teal-950 to-slate-900 text-white rounded-2xl p-5 border border-teal-800 shadow-xl space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-300">
            <UserCheck className="w-4 h-4 text-emerald-400" />
            ASHA Kamla Verma (Pipariya)
          </div>
          <button
            onClick={() => setIsOffline(!isOffline)}
            className={`px-3 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5 transition cursor-pointer ${
              isOffline ? 'bg-amber-500 text-slate-950' : 'bg-emerald-500 text-slate-950'
            }`}
          >
            {isOffline ? <WifiOff className="w-3.5 h-3.5" /> : <Wifi className="w-3.5 h-3.5" />}
            {isOffline ? 'Offline Queue Active' : 'Online Sync'}
          </button>
        </div>

        <div>
          <h1 className="text-xl font-bold tracking-tight">Today&apos;s Field Visit Schedule</h1>
          <p className="text-xs text-slate-300 mt-0.5">3 Assigned Home Visits | 1 High Risk Maternal Alert</p>
        </div>
      </div>

      {/* Offline Banner */}
      {isOffline && (
        <div className="bg-amber-500/15 border border-amber-300 text-amber-900 rounded-xl p-3 text-xs flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <WifiOff className="w-4 h-4 text-amber-600" />
            Offline Mode — Visits saved to local queue ({offlineQueueCount} pending)
          </div>
          <button
            onClick={() => { setIsOffline(false); setOfflineQueueCount(0); alert("Local queue synced successfully!"); }}
            className="px-2.5 py-1 bg-amber-600 text-white rounded-lg text-[10px] font-bold"
          >
            Sync Now
          </button>
        </div>
      )}

      {/* Visit Tasks */}
      <div className="space-y-3">
        {visits.map((v) => (
          <div key={v.id} className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs space-y-2 text-xs">
            <div className="flex items-start justify-between">
              <div>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  v.priority === 'HIGH' ? 'bg-rose-100 text-rose-800' : 'bg-teal-100 text-teal-800'
                }`}>
                  {v.type} ({v.priority} PRIORITY)
                </span>
                <h3 className="font-bold text-slate-900 text-sm mt-1">{v.patientName}</h3>
                <p className="text-slate-500">Village: {v.village} | Date: {v.scheduledDate}</p>
              </div>

              <span className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                v.status === 'VISITED' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
              }`}>
                {v.status}
              </span>
            </div>

            {v.notes && (
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-slate-700 font-medium">
                Note: {v.notes}
              </div>
            )}

            {v.status === 'PENDING' && (
              <button
                onClick={() => completeVisit(v.id)}
                className="w-full py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold flex items-center justify-center gap-1.5 transition shadow-xs"
              >
                <CheckCircle2 className="w-4 h-4" /> Log Home Visit Completed
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
