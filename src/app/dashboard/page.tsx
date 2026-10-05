'use client';

import React from 'react';
import { useApp } from '@/components/layout/AppContext';
import { mockFacilities, mockDiseaseAlerts, mockMaternalRecords, mockMedicines } from '@/lib/mockData';
import { DataConfidenceBadge } from '@/components/ui/DataConfidenceBadge';
import { WhyThisMattersCard } from '@/components/ui/WhyThisMattersCard';
import { HealthcareNetworkRings } from '@/components/ui/HealthcareNetworkRings';
import {
  Activity,
  Users,
  Building2,
  Video,
  Pill,
  AlertTriangle,
  HeartPulse,
  Baby,
  ShieldAlert,
  MapPin,
  CheckCircle2,
  Database,
  Info
} from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export default function SituationCenterDashboard() {
  const { location, setLocation, t, openLineageModalByKey } = useApp();

  const chartData = [
    { name: 'Pipariya PHC', occupancy: 75, beds: 4, tele: 14 },
    { name: 'Ashta CHC', occupancy: 90, beds: 18, tele: 38 },
    { name: 'Sehore DH', occupancy: 64, beds: 64, tele: 85 },
    { name: 'Kothri HWC', occupancy: 50, beds: 2, tele: 22 }
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header & Location Selector */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
        <div>
          <div className="text-xs font-semibold text-teal-700 uppercase tracking-widest flex items-center gap-1.5">
            <Activity className="w-4 h-4 text-teal-600" />
            {t('situationToday')}
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
            Healthcare Situation Center
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Real-time public health intelligence for {location.village} Village, {location.district} District
          </p>
        </div>

        {/* Location Selector */}
        <div className="flex items-center gap-2 bg-slate-100 p-2 rounded-xl border border-slate-200 text-xs">
          <MapPin className="w-4 h-4 text-teal-700 shrink-0" />
          <span className="text-slate-500 font-medium">Selected Location:</span>
          <select
            value={location.village}
            onChange={(e) => setLocation(prev => ({ ...prev, village: e.target.value }))}
            className="bg-white px-2.5 py-1 rounded-lg border border-slate-300 font-bold text-slate-900 focus:outline-none cursor-pointer"
          >
            <option value="Pipariya">Pipariya Village</option>
            <option value="Kothri">Kothri Village</option>
            <option value="Siddhiqganj">Siddhiqganj Village</option>
          </select>
        </div>
      </div>

      {/* Healthcare Network Ring Component */}
      <HealthcareNetworkRings />

      {/* Active Alert Banner */}
      <div className="bg-amber-500/10 border border-amber-300/80 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-700 font-bold shrink-0">
            <AlertTriangle className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-amber-900 uppercase text-[10px] tracking-wider bg-amber-200/80 px-2 py-0.5 rounded mr-2">
              ACTIVE ALERT
            </span>
            <span className="font-semibold text-slate-800">
              Fever Cluster Anomaly Detected in Pipariya Village (14 Cases in 48h) & Critical Amoxicillin Stock
            </span>
          </div>
        </div>
        <a
          href="/disease-intelligence"
          className="px-3 py-1.5 rounded-lg bg-amber-600 text-white font-semibold text-[11px] hover:bg-amber-700 transition"
        >
          Inspect Outbreak Radar →
        </a>
      </div>

      {/* KPI Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
        {[
          { key: 'peopleServed', label: t('peopleServed'), value: '2,450', sub: '100% Coverage', icon: Users, color: 'text-teal-700 bg-teal-50', confidence: 'CONNECTED_LIVE' },
          { key: 'facilities', label: t('facilitiesActive'), value: '5', sub: '4 PHC/CHC + DH', icon: Building2, color: 'text-sky-700 bg-sky-50', confidence: 'OFFICIAL_VERIFIED' },
          { key: 'tele', label: t('teleconsultations'), value: '642', sub: '+18 Today', icon: Video, color: 'text-indigo-700 bg-indigo-50', confidence: 'CONNECTED_LIVE' },
          { key: 'medicineAvailability', label: t('medicineAvailability'), value: '88%', sub: 'Amoxicillin Low', icon: Pill, color: 'text-amber-700 bg-amber-50', confidence: 'OFFICIAL_VERIFIED' },
          { key: 'highRisk', label: t('highRiskCases'), value: '3', sub: '2 ANC / 1 Fever', icon: AlertTriangle, color: 'text-rose-700 bg-rose-50', confidence: 'CONNECTED_LIVE' },
          { key: 'preventive', label: t('preventiveActions'), value: '142', sub: 'Vaccines/Visits', icon: CheckCircle2, color: 'text-emerald-700 bg-emerald-50', confidence: 'CONNECTED_LIVE' },
          { key: 'reminders', label: 'Vaccination Reminders', value: '18', sub: 'Pending Drive', icon: HeartPulse, color: 'text-purple-700 bg-purple-50', confidence: 'OFFICIAL_VERIFIED' },
          { key: 'maternal', label: t('maternalAlerts'), value: '2', sub: 'Anemia Watch', icon: Baby, color: 'text-pink-700 bg-pink-50', confidence: 'CONNECTED_LIVE' }
        ].map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <button
              key={idx}
              onClick={() => openLineageModalByKey(kpi.key)}
              className="bg-white border border-slate-200 rounded-2xl p-3 shadow-xs space-y-1 text-left hover:border-teal-400 transition cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-slate-500 font-medium truncate">{kpi.label}</span>
                <div className={`p-1 rounded-md ${kpi.color}`}>
                  <Icon className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="text-base font-extrabold text-slate-900 group-hover:text-teal-700 transition">{kpi.value}</div>
              <div className="text-[9px] text-slate-400 font-mono flex items-center gap-1">
                <Database className="w-2.5 h-2.5 text-teal-600" /> Lineage
              </div>
            </button>
          );
        })}
      </div>

      {/* Why This Matters Storytelling */}
      <WhyThisMattersCard
        story="12 healthcare facilities in Sehore District require stock review for Amoxicillin 500mg, and 3 village clusters show potential access gaps requiring telemedicine kiosks."
        actionText="Inspect Gap Finder"
        onActionClick={() => window.location.href = '/gap-finder'}
      />

      {/* Main Intelligence Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Facility Occupancy & Teleconsultation Capacity */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-base font-bold text-slate-900">Healthcare Facility Load & Capacity</h3>
              <p className="text-xs text-slate-500">OPD Occupancy & Telemedicine Session Volume</p>
            </div>
            <DataConfidenceBadge status="OFFICIAL_VERIFIED" />
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip contentStyle={{ borderRadius: '12px', fontSize: '12px' }} />
                <Bar dataKey="occupancy" fill="#0d9488" name="Bed Occupancy %" radius={[6, 6, 0, 0]} />
                <Bar dataKey="tele" fill="#0284c7" name="Teleconsultations Today" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Col: High Risk Flagged Patient Queue */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-rose-600" /> High-Risk Priority Queue
            </h3>
            <span className="text-[10px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded uppercase">
              Action Needed
            </span>
          </div>

          <div className="space-y-3">
            {mockMaternalRecords.map((rec) => (
              <div key={rec.id} className="p-3 rounded-xl border border-rose-200 bg-rose-50/50 space-y-1.5 text-xs">
                <div className="flex items-center justify-between font-bold text-slate-900">
                  <span>{rec.patientName} (Age {rec.age})</span>
                  <span className="px-2 py-0.5 rounded bg-rose-600 text-white text-[10px]">HIGH RISK</span>
                </div>
                <div className="text-[11px] text-slate-600">
                  Village: {rec.village} | EDD: {rec.edd}
                </div>
                <div className="text-[11px] text-rose-800 font-medium">
                  Flag: {rec.riskIndicators.join(', ')}
                </div>
                <div className="pt-1 flex items-center justify-between text-[10px] text-slate-500 border-t border-rose-100">
                  <span>Assigned: {rec.assignedAsha}</span>
                  <a href="/triage" className="text-teal-700 font-semibold hover:underline">Escalate →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
