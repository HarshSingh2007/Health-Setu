'use client';

import React, { useState } from 'react';
import { runWhatIfSimulation } from '@/lib/simulationEngine';
import { mockResilienceIndexes } from '@/lib/mockData';
import { SlidersHorizontal, ArrowRight, ShieldCheck, Zap, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function WhatIfSimulatorPage() {
  const baseResilience = mockResilienceIndexes[0]; // Pipariya (72)

  const [params, setParams] = useState({
    telemedicineCentersAdd: 1,
    medicineStockIncreasePct: 20,
    ashaWorkersAdd: 2,
    vaccinationDriveActive: true,
    mobileVanActive: false
  });

  const simResult = runWhatIfSimulation(params, baseResilience);

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-teal-700 uppercase tracking-widest flex items-center gap-1.5">
            <SlidersHorizontal className="w-4 h-4 text-teal-600 animate-spin" /> Interactive Policy Simulator
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
            What-If Health Scenario Simulator
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Model intervention strategies to predict impacts on village accessibility, travel burden, and facility load.
          </p>
        </div>

        <span className="px-3 py-1.5 rounded-xl bg-amber-50 text-amber-900 border border-amber-300 text-xs font-semibold">
          AI Scenario Estimate — Not Official Forecast
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left 5 Cols: Sliders & Controls */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5 text-xs">
          <h3 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-3">
            Intervention Scenario Controls
          </h3>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between font-semibold text-slate-800 mb-1">
                <span>Add Telemedicine Sub-Centers:</span>
                <span className="text-teal-700 font-bold">+{params.telemedicineCentersAdd} Centers</span>
              </div>
              <input
                type="range"
                min="0"
                max="4"
                value={params.telemedicineCentersAdd}
                onChange={(e) => setParams(prev => ({ ...prev, telemedicineCentersAdd: Number(e.target.value) }))}
                className="w-full accent-teal-600"
              />
            </div>

            <div>
              <div className="flex justify-between font-semibold text-slate-800 mb-1">
                <span>Increase Essential Medicine Stock:</span>
                <span className="text-teal-700 font-bold">+{params.medicineStockIncreasePct}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="50"
                step="10"
                value={params.medicineStockIncreasePct}
                onChange={(e) => setParams(prev => ({ ...prev, medicineStockIncreasePct: Number(e.target.value) }))}
                className="w-full accent-teal-600"
              />
            </div>

            <div>
              <div className="flex justify-between font-semibold text-slate-800 mb-1">
                <span>Deploy Additional ASHA Field Workers:</span>
                <span className="text-teal-700 font-bold">+{params.ashaWorkersAdd} Workers</span>
              </div>
              <input
                type="range"
                min="0"
                max="5"
                value={params.ashaWorkersAdd}
                onChange={(e) => setParams(prev => ({ ...prev, ashaWorkersAdd: Number(e.target.value) }))}
                className="w-full accent-teal-600"
              />
            </div>

            <div className="pt-2 border-t border-slate-100 space-y-2">
              <label className="flex items-center gap-2 font-semibold text-slate-800 cursor-pointer">
                <input
                  type="checkbox"
                  checked={params.mobileVanActive}
                  onChange={(e) => setParams(prev => ({ ...prev, mobileVanActive: e.target.checked }))}
                  className="rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                />
                Deploy Weekly Mobile Health Van
              </label>

              <label className="flex items-center gap-2 font-semibold text-slate-800 cursor-pointer">
                <input
                  type="checkbox"
                  checked={params.vaccinationDriveActive}
                  onChange={(e) => setParams(prev => ({ ...prev, vaccinationDriveActive: e.target.checked }))}
                  className="rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                />
                Activate Intensive Vaccination Drive
              </label>
            </div>
          </div>
        </div>

        {/* Right 7 Cols: Side-by-Side Current vs Simulated Result */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="font-bold text-base text-white">Current Situation vs Simulated Outcome</h3>
            <span className="text-xs font-mono text-teal-400">Pipariya Village</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Current Baseline */}
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-3">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Current Baseline</div>
              <div>
                <div className="text-[10px] text-slate-400">Resilience Index</div>
                <div className="text-3xl font-bold text-slate-200">{baseResilience.overallScore}/100</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-400">Teleconsult Capacity</div>
                <div className="text-lg font-bold text-slate-300">40 Consults/Day</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-400">CHC OPD Load</div>
                <div className="text-lg font-bold text-slate-300">90% Capacity</div>
              </div>
            </div>

            {/* Simulated Outcome */}
            <div className="p-4 rounded-xl bg-teal-950/80 border border-teal-500/50 space-y-3 ring-2 ring-teal-400/20">
              <div className="text-xs font-bold text-teal-400 uppercase tracking-widest">Simulated Scenario</div>
              <div>
                <div className="text-[10px] text-teal-300">New Resilience Index</div>
                <div className="text-3xl font-extrabold text-emerald-400">{simResult.resilienceScoreNew}/100</div>
              </div>
              <div>
                <div className="text-[10px] text-teal-300">New Teleconsult Capacity</div>
                <div className="text-lg font-bold text-white">+{simResult.teleconsultationCapacityNew} Consults/Day</div>
              </div>
              <div>
                <div className="text-[10px] text-teal-300">Estimated Travel Hours Saved</div>
                <div className="text-lg font-bold text-emerald-300">{simResult.travelBurdenHoursSaved} Hours/Week</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
