'use client';

import React from 'react';
import { DataLineage } from '@/types';
import { DataConfidenceBadge } from './DataConfidenceBadge';
import { X, ExternalLink, Database, Info, CheckCircle2 } from 'lucide-react';

interface DataLineageModalProps {
  lineage: DataLineage | null;
  onClose: () => void;
}

export const DataLineageModal: React.FC<DataLineageModalProps> = ({ lineage, onClose }) => {
  if (!lineage) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl p-6 text-slate-900 shadow-2xl z-10 space-y-4">
        <div className="flex items-start justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-teal-700 uppercase tracking-widest">Data Lineage & Traceability</div>
              <h3 className="font-extrabold text-base text-slate-900 leading-tight">Where did this number come from?</h3>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg bg-slate-100 text-slate-400 hover:text-slate-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="bg-teal-50/70 border border-teal-200 rounded-2xl p-4 space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <span className="font-bold text-slate-900 text-sm">{lineage.metricName}</span>
            <DataConfidenceBadge status={lineage.confidence} />
          </div>
          <div className="text-teal-900 font-extrabold text-xl">{lineage.value}</div>
        </div>

        <div className="space-y-3 text-xs">
          <div className="grid grid-cols-2 gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
            <div>
              <div className="text-slate-400 font-medium text-[10px]">Dataset Name</div>
              <div className="font-bold text-slate-800 mt-0.5">{lineage.datasetName}</div>
            </div>
            <div>
              <div className="text-slate-400 font-medium text-[10px]">Issuing Organization</div>
              <div className="font-bold text-slate-800 mt-0.5">{lineage.organization}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
            <div>
              <div className="text-slate-400 font-medium text-[10px]">Geographic Coverage</div>
              <div className="font-bold text-slate-800 mt-0.5">{lineage.coverage}</div>
            </div>
            <div>
              <div className="text-slate-400 font-medium text-[10px]">Last Updated Date</div>
              <div className="font-bold text-slate-800 mt-0.5">{lineage.lastUpdated}</div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="text-slate-400 font-medium text-[10px]">Calculation / Aggregation Method</div>
            <p className="text-slate-800 font-medium leading-relaxed">{lineage.calculationLogic}</p>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
          <span className="text-slate-400">Official Portal Registry Link</span>
          <a
            href={lineage.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold flex items-center gap-1.5 shadow-xs transition"
          >
            Verify Official Source <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
