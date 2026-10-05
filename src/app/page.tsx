'use client';

import React from 'react';
import Link from 'next/link';
import { useApp } from '@/components/layout/AppContext';
import { NetworkVisualizer } from '@/components/maps/NetworkVisualizer';
import { HealthcareNetworkRings } from '@/components/ui/HealthcareNetworkRings';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Activity,
  Bot,
  Stethoscope,
  MapPin,
  SlidersHorizontal,
  Building2,
  Users,
  Award,
  HeartPulse,
  Pill,
  BookOpen,
  Leaf,
  Flag,
  CheckCircle2,
  Play
} from 'lucide-react';

export default function LandingPage() {
  const { t, applyPresetScenario } = useApp();

  return (
    <div className="space-y-12 max-w-7xl mx-auto text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#05070b] via-[#08111c] to-[#0d1722] border border-slate-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider">
              <Award className="w-4 h-4 text-emerald-400" />
              WhyCode_4U Hackathon 2026 Theme
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Healthcare Intelligence for Every Individual.
            </h1>

            <p className="text-base md:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Connecting people, communities, healthcare workers and healthcare systems across India&apos;s last mile — with transparent, trusted and explainable intelligence.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/dashboard"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-slate-950 font-bold text-sm shadow-lg shadow-teal-500/20 flex items-center gap-2 transition transform hover:-translate-y-0.5"
              >
                <Activity className="w-4 h-4 text-slate-950" /> Explore Healthcare Intelligence
              </Link>
              <button
                onClick={() => applyPresetScenario('pregnancy')}
                className="px-5 py-3 rounded-xl bg-[#0d1722] hover:bg-slate-800 border border-slate-700 text-teal-300 font-semibold text-sm flex items-center gap-2 transition"
              >
                <Play className="w-4 h-4 text-emerald-400" /> Enter Demo Mode
              </button>
            </div>

            {/* Quick Metrics Banner */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-800/80 text-xs">
              <div>
                <div className="text-slate-400 text-[11px]">Rural Population Reached</div>
                <div className="text-white font-extrabold text-lg mt-0.5">2,450+ Villages</div>
              </div>
              <div>
                <div className="text-slate-400 text-[11px]">Primary Health Centers</div>
                <div className="text-teal-300 font-extrabold text-lg mt-0.5">142 PHCs / CHCs</div>
              </div>
              <div>
                <div className="text-slate-400 text-[11px]">Health Resilience Score</div>
                <div className="text-emerald-400 font-extrabold text-lg mt-0.5">78/100 Avg</div>
              </div>
            </div>
          </div>

          {/* Right Hero Graphic: Live Infrastructure Visualizer */}
          <div className="lg:col-span-5">
            <NetworkVisualizer />
          </div>
        </div>
      </section>

      {/* Visual System: The Healthcare Network */}
      <HealthcareNetworkRings />

      {/* From Patient to Community to District Journey Pipeline */}
      <section className="bg-[#08111c] border border-slate-800 rounded-3xl p-8 shadow-xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <div className="text-xs font-semibold text-teal-400 uppercase tracking-widest">Unified Public Health Pathway</div>
            <h2 className="text-2xl font-bold text-white tracking-tight mt-0.5">
              From Individual to Community to District
            </h2>
          </div>
          <span className="px-3 py-1 rounded-full bg-[#0d1722] text-slate-300 text-xs font-medium border border-slate-700">
            End-to-End Care System
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
          {[
            { step: '01', title: 'Individual', desc: 'Symptom & Vitals Logged', color: 'border-slate-700 bg-[#0d1722]' },
            { step: '02', title: 'AI Triage', desc: 'Risk Assessment & Facility Routing', color: 'border-teal-500/40 bg-teal-950/40' },
            { step: '03', title: 'ASHA Worker', desc: 'Field Visit & Escort Log', color: 'border-emerald-500/40 bg-emerald-950/40' },
            { step: '04', title: 'Facility', desc: 'PHC / CHC / Telemedicine Consult', color: 'border-cyan-500/40 bg-cyan-950/40' },
            { step: '05', title: 'Follow-up', desc: 'Medication Adherence & ANC Care', color: 'border-indigo-500/40 bg-indigo-950/40' },
            { step: '06', title: 'Community Pulse', desc: 'Resilience Score & Outbreak Radar', color: 'border-sky-500/40 bg-sky-950/40' },
            { step: '07', title: 'District Action', desc: 'Resource Priorities & Policy Action', color: 'border-teal-400 bg-teal-900/60' }
          ].map((item, idx) => (
            <div key={idx} className={`p-3.5 rounded-2xl border text-white ${item.color} flex flex-col justify-between space-y-2`}>
              <div className="flex items-center justify-between text-[11px] font-mono font-bold text-slate-400">
                <span>STEP {item.step}</span>
                {idx < 6 && <ArrowRight className="w-3.5 h-3.5 text-slate-500 hidden lg:block" />}
              </div>
              <div>
                <div className="font-bold text-xs text-white">{item.title}</div>
                <div className="text-[11px] text-slate-300 leading-tight mt-0.5">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Grid Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#08111c] border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3 hover:border-teal-500/50 transition">
          <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-300 font-bold">
            <Bot className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">Feature 01: AI Health Companion</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Multi-lingual conversational AI assistant providing symptom discussions, preventive health guidance, and healthcare navigation without autonomous medical diagnosis.
          </p>
          <Link href="/ai-companion" className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 hover:text-teal-300 pt-1">
            Open AI Companion <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="bg-[#08111c] border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3 hover:border-teal-500/50 transition">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 font-bold">
            <SlidersHorizontal className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">Feature 13: What-If Simulator</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Interactive scenario modeling tool for healthcare planners. Test "+1 Telemedicine Centre" or "+20% Stock" to see real-time impact on accessibility and travel hours saved.
          </p>
          <Link href="/what-if" className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 hover:text-teal-300 pt-1">
            Launch Simulator <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="bg-[#08111c] border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3 hover:border-teal-500/50 transition">
          <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-300 font-bold">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">Feature 11: Resilience & Equity Score</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Transparent composite score measuring emergency access, ASHA coverage, medicine availability, telemedicine readiness, maternal health, and regional equity.
          </p>
          <Link href="/resilience-equity" className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 hover:text-teal-300 pt-1">
            View Resilience Score <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Viksit Bharat 2047 Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white rounded-3xl p-8 border border-slate-800 flex flex-wrap items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-widest">
            <Flag className="w-4 h-4 text-emerald-400" /> Viksit Bharat 2047 Vision
          </div>
          <h3 className="text-xl font-bold">Empowering Last-Mile Healthcare for 1.4 Billion Indians</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            HealthSetu AI bridges individual patient needs with ASHA field workers, PHC doctors, and district health officers, accelerating preventive healthcare and resilient rural infrastructure.
          </p>
        </div>
        <Link
          href="/viksit-bharat"
          className="px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-600 text-slate-950 font-extrabold text-xs shadow-md transition"
        >
          Explore 2047 Vision Roadmap
        </Link>
      </section>
    </div>
  );
}
