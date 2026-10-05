'use client';

import React from 'react';
import { useApp } from './AppContext';
import { Award, Zap, HeartPulse, AlertTriangle, Pill, SlidersHorizontal, CheckCircle2, ChevronRight, Play, Database } from 'lucide-react';
import { JudgePreset } from '@/types';
import Link from 'next/link';

export const HackathonDemoBar: React.FC = () => {
  const { judgePreset, applyPresetScenario, t, judgeStep, setJudgeStep } = useApp();

  const presets: { id: JudgePreset; label: string; icon: React.ReactNode; color: string }[] = [
    {
      id: 'pregnancy',
      label: '1. High-Risk Pregnancy (Pipariya)',
      icon: <HeartPulse className="w-3.5 h-3.5 text-rose-500" />,
      color: 'hover:border-rose-300 hover:bg-rose-50/50'
    },
    {
      id: 'fever_cluster',
      label: '2. Fever Outbreak Radar (Sehore)',
      icon: <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />,
      color: 'hover:border-amber-300 hover:bg-amber-50/50'
    },
    {
      id: 'medicine_shortage',
      label: '3. Amoxicillin Shortage Flag',
      icon: <Pill className="w-3.5 h-3.5 text-teal-600" />,
      color: 'hover:border-teal-300 hover:bg-teal-50/50'
    },
    {
      id: 'simulator_demo',
      label: '4. What-If Telemedicine Expansion',
      icon: <SlidersHorizontal className="w-3.5 h-3.5 text-sky-600" />,
      color: 'hover:border-sky-300 hover:bg-sky-50/50'
    }
  ];

  const presentationFlow = [
    { step: 1, href: '/dashboard', label: '1. Situation Room' },
    { step: 2, href: '/triage', label: '2. Smart AI Triage' },
    { step: 3, href: '/access-map', label: '3. Healthcare Map' },
    { step: 4, href: '/gap-finder', label: '4. Gap Finder' },
    { step: 5, href: '/what-if', label: '5. What-If Sim' },
    { step: 6, href: '/command-center', label: '6. Command Center' },
    { step: 7, href: '/data-hub', label: '7. Govt Datasets (Final Page)' }
  ];

  return (
    <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white border-b border-teal-800/40 px-3 py-1.5 text-xs flex flex-wrap items-center justify-between gap-2 shadow-md">
      <div className="flex items-center gap-2 font-medium">
        <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-semibold uppercase tracking-wide animate-pulse">
          <Award className="w-3.5 h-3.5 text-emerald-400" />
          JUDGE MODE (HACKATHON)
        </span>
        <span className="hidden md:inline text-slate-300 font-normal">
          5-Minute Presentation Stepper:
        </span>
      </div>

      {/* Guided Presentation Stepper */}
      <div className="flex items-center gap-1 overflow-x-auto text-[10px]">
        {presentationFlow.map((pf) => {
          const isCurrent = judgeStep === pf.step;
          return (
            <Link
              key={pf.step}
              href={pf.href}
              onClick={() => setJudgeStep(pf.step)}
              className={`px-2 py-0.5 rounded font-semibold transition shrink-0 ${
                isCurrent ? 'bg-emerald-500 text-slate-950 font-bold shadow-2xs' : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              {pf.label}
            </Link>
          );
        })}
      </div>

      {/* Preset Scenario Quick Switches */}
      <div className="flex flex-wrap items-center gap-1.5">
        {presets.map((p) => {
          const isActive = judgePreset === p.id;
          return (
            <button
              key={p.id}
              onClick={() => applyPresetScenario(p.id)}
              className={`flex items-center gap-1.5 px-2 py-0.5 rounded border text-[10px] transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-teal-600/90 border-teal-400 text-white font-semibold shadow-xs ring-2 ring-teal-400/30'
                  : 'bg-slate-800/80 border-slate-700/80 text-slate-200 hover:text-white ' + p.color
              }`}
            >
              {p.icon}
              <span className="hidden xl:inline">{p.label}</span>
            </button>
          );
        })}

        {judgePreset !== 'default' && (
          <button
            onClick={() => applyPresetScenario('default')}
            className="px-2 py-0.5 rounded border border-slate-700 bg-slate-800 text-slate-300 hover:text-white text-[10px] uppercase font-mono tracking-wider"
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
};
