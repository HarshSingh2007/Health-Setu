'use client';

import React from 'react';
import { calculateSustainabilityMetrics } from '@/lib/simulationEngine';
import { DataConfidenceBadge } from '@/components/ui/DataConfidenceBadge';
import { Leaf, ShieldCheck, TrendingUp, DollarSign, Recycle, ArrowRight } from 'lucide-react';

export default function SustainabilityPage() {
  const metrics = calculateSustainabilityMetrics();

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-emerald-700 uppercase tracking-widest flex items-center gap-1.5">
            <Leaf className="w-4 h-4 text-emerald-600" /> Sustainability & Resource Efficiency
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
            Swasthya Sustainability Score & Footprint
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Estimates travel distance avoided through teleconsultations & medicine wastage reduction.
          </p>
        </div>

        <DataConfidenceBadge status="DEMO_SIMULATED" />
      </div>

      {/* Main Sustainability Hero */}
      <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700">
          <div className="text-xs text-emerald-400 font-semibold uppercase tracking-widest">Sustainability Score</div>
          <div className="text-5xl font-black text-emerald-400 mt-2">{metrics.sustainabilityScore}/100</div>
          <div className="text-[11px] text-slate-400 mt-1">Resource & Travel Efficiency</div>
        </div>

        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700">
          <div className="text-xs text-sky-400 font-semibold uppercase tracking-widest">Travel Avoided</div>
          <div className="text-4xl font-extrabold text-white mt-2">{metrics.estimatedTravelAvoidedKm.toLocaleString()} km</div>
          <div className="text-[11px] text-slate-400 mt-1">Rural Travel Burden Saved</div>
        </div>

        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700">
          <div className="text-xs text-teal-400 font-semibold uppercase tracking-widest">Est. CO2 Reduced</div>
          <div className="text-4xl font-extrabold text-white mt-2">{metrics.estimatedCO2SavedKg.toLocaleString()} kg</div>
          <div className="text-[11px] text-slate-400 mt-1">Emissions Prevention</div>
        </div>

        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700">
          <div className="text-xs text-amber-400 font-semibold uppercase tracking-widest">Patient Out-of-Pocket Saved</div>
          <div className="text-4xl font-extrabold text-white mt-2">₹{metrics.transportBurdenAvoidedINR.toLocaleString()}</div>
          <div className="text-[11px] text-slate-400 mt-1">Direct Fare/Fuel Savings</div>
        </div>
      </div>

      {/* Visual Comparison Card: With vs Without Telemedicine */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4 text-xs">
        <h3 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-3">
          Impact Comparison: With Telemedicine vs Without Telemedicine
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 space-y-2">
            <div className="font-bold text-teal-900 text-sm">WITH HealthSetu Telemedicine Kiosk</div>
            <ul className="space-y-1 text-teal-800 font-medium">
              <li>• Average Travel Distance: 0.8 km (Walkable to Pipariya PHC)</li>
              <li>• Patient Transport Cost: ₹0</li>
              <li>• Time Lost in Travel: ~10 minutes</li>
              <li>• Carbon Emissions: 0 kg CO2</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="font-bold text-slate-800 text-sm">WITHOUT Telemedicine (Traditional Referral)</div>
            <ul className="space-y-1 text-slate-600 font-medium">
              <li>• Average Travel Distance: 28.5 km (Bus/Auto to District Hospital)</li>
              <li>• Patient Transport Cost: ₹180 per round trip</li>
              <li>• Time Lost in Travel: 3.5 Hours</li>
              <li>• Carbon Emissions: ~5.7 kg CO2 per trip</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
