'use client';

import React, { useState } from 'react';
import { mockMedicines } from '@/lib/mockData';
import { Pill, Search, ShieldCheck, CheckCircle2, AlertTriangle, RefreshCw } from 'lucide-react';

export default function MedicinesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [medicines, setMedicines] = useState(mockMedicines);
  const [pharmacistMode, setPharmacistMode] = useState(false);

  const filtered = medicines.filter(m =>
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.genericName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleStock = (id: string) => {
    setMedicines(prev => prev.map(m => {
      if (m.id === id) {
        const nextStatus = m.stockStatus === 'CRITICAL' ? 'NORMAL' : 'CRITICAL';
        return { ...m, stockStatus: nextStatus, stockQuantity: nextStatus === 'NORMAL' ? 850 : 25 };
      }
      return m;
    }));
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-teal-700 uppercase tracking-widest flex items-center gap-1.5">
            <Pill className="w-4 h-4 text-teal-600" /> Government Medicine Access
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
            Jan Aushadhi & PHC Medicine Stock Tracker
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Check live stock levels, official Jan Aushadhi MRP prices & generic alternatives.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200 text-xs">
          <span className="text-slate-500 font-medium">Pharmacist Update Toggle:</span>
          <button
            onClick={() => setPharmacistMode(!pharmacistMode)}
            className={`px-3 py-1 rounded-lg font-semibold transition ${
              pharmacistMode ? 'bg-teal-700 text-white' : 'bg-white text-slate-700 border border-slate-300'
            }`}
          >
            {pharmacistMode ? 'Stock Edit Active' : 'Read Only'}
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md w-full">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search medicine by brand, generic name, or category..."
          className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-xs focus:outline-none focus:border-teal-500 shadow-xs"
        />
      </div>

      {/* Medicine Inventory Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((med) => (
          <div key={med.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-start justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                  {med.category}
                </span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  med.stockStatus === 'CRITICAL'
                    ? 'bg-rose-100 text-rose-800 border border-rose-300 animate-pulse'
                    : med.stockStatus === 'LOW'
                    ? 'bg-amber-100 text-amber-800 border border-amber-300'
                    : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                }`}>
                  {med.stockStatus} ({med.stockQuantity} Units)
                </span>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-sm">{med.name}</h3>
                <p className="text-xs text-slate-500 font-mono mt-0.5">Generic: {med.genericName}</p>
              </div>

              {/* Pricing Comparison */}
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 grid grid-cols-2 gap-2 text-xs">
                <div>
                  <div className="text-[10px] text-slate-400">Jan Aushadhi Price</div>
                  <div className="font-extrabold text-teal-700 mt-0.5">₹{med.janAushadhiPriceINR.toFixed(2)}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">Private Market MRP</div>
                  <div className="font-bold text-slate-500 line-through mt-0.5">₹{med.marketPriceINR.toFixed(2)}</div>
                </div>
              </div>

              <div className="text-[11px] text-slate-600">
                Available at: <strong className="text-slate-800">{med.availableAt}</strong>
              </div>
            </div>

            {pharmacistMode && (
              <button
                onClick={() => toggleStock(med.id)}
                className="w-full py-1.5 rounded-lg bg-slate-800 hover:bg-slate-900 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition mt-2"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Toggle Stock Status
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
