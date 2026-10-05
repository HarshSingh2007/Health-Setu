'use client';

import React from 'react';
import { Bot, CheckCircle2, ShieldAlert, FileText, Database, HelpCircle } from 'lucide-react';
import { DataConfidenceBadge } from '../ui/DataConfidenceBadge';

interface ShowYourWorkPanelProps {
  whyRecommendation: string;
  basedOnDataSources: string[];
  limitations: string;
  confidenceScore: number;
}

export const ShowYourWorkPanel: React.FC<ShowYourWorkPanelProps> = ({
  whyRecommendation,
  basedOnDataSources,
  limitations,
  confidenceScore
}) => {
  return (
    <div className="bg-slate-900 border border-slate-800 text-white rounded-2xl p-5 shadow-xl space-y-4 text-xs">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Bot className="w-4 h-4 text-teal-400" />
          <span className="font-bold text-sm text-white">AI Reasoning & Data Traceability (&quot;Show Your Work&quot;)</span>
        </div>
        <span className="px-2.5 py-0.5 rounded bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold text-[10px]">
          HUMAN REVIEW REQUIRED
        </span>
      </div>

      <div className="space-y-3">
        <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
          <div className="text-teal-400 font-bold text-[11px] uppercase tracking-wider">Why This Recommendation?</div>
          <p className="text-slate-200 leading-relaxed font-medium">{whyRecommendation}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1.5">
            <div className="text-sky-400 font-bold text-[11px] uppercase tracking-wider">Based On Trusted Datasets:</div>
            <ul className="space-y-1">
              {basedOnDataSources.map((ds, idx) => (
                <li key={idx} className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{ds}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1.5">
            <div className="text-amber-400 font-bold text-[11px] uppercase tracking-wider">Clinical Limitations & Guardrails:</div>
            <p className="text-slate-300 leading-relaxed">{limitations}</p>
            <div className="pt-1 text-[10px] text-slate-400 font-mono">
              Model Confidence Score: <strong className="text-teal-300">{confidenceScore}%</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
