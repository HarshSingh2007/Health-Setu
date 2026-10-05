'use client';

import React, { useState } from 'react';
import { mockGovernmentDataSources } from '@/lib/mockData';
import { GovernmentDataSourceItem } from '@/types';
import { DataConfidenceBadge } from '@/components/ui/DataConfidenceBadge';
import { Database, Search, Filter, ExternalLink, ShieldCheck, Info, CheckCircle2, Lock, X } from 'lucide-react';

export default function GovernmentDatasetsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedDataset, setSelectedDataset] = useState<GovernmentDataSourceItem | null>(null);

  const categories = [
    'ALL',
    'Healthcare Facilities',
    'Medicines',
    'Maternal & Child',
    'Disease Surveillance',
    'Government Schemes',
    'Environmental'
  ];

  const filtered = mockGovernmentDataSources.filter(ds => {
    if (selectedCategory !== 'ALL' && ds.category !== selectedCategory) return false;
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      return (
        ds.name.toLowerCase().includes(q) ||
        ds.dataset.toLowerCase().includes(q) ||
        ds.organization.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-2xl space-y-3 relative overflow-hidden">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-widest">
          <Database className="w-4 h-4 text-emerald-400" /> Data Transparency Center (Final Navigation Page)
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-white">
          Trusted Data. Transparent Decisions.
        </h1>
        <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
          Every data-driven insight, recommendation, risk score, and map layer in HealthSetu AI is traceable to its authoritative government dataset or verified public source.
        </p>

        {/* Data Privacy Guarantee */}
        <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400 border-t border-slate-800/80">
          <span className="flex items-center gap-1.5 font-semibold text-emerald-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Non-PII Anonymized Public Data Only
          </span>
          <span className="flex items-center gap-1.5 text-slate-400">
            <Lock className="w-4 h-4 text-slate-400" /> Zero Exposure of Private Patient Health Records
          </span>
        </div>
      </section>

      {/* Search & Category Filter Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-slate-500 font-semibold flex items-center gap-1 mr-1">
              <Filter className="w-3.5 h-3.5" /> Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-xl font-semibold transition cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-teal-700 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative max-w-xs w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search datasets, orgs, APIs..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-1.5 text-xs focus:outline-none focus:border-teal-500"
            />
          </div>
        </div>
      </div>

      {/* Dataset Grid / Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((ds) => (
          <div key={ds.id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4 flex flex-col justify-between hover:border-teal-300 transition">
            <div className="space-y-3 text-xs">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                    {ds.category}
                  </span>
                  <h3 className="font-bold text-slate-900 text-base mt-1.5">{ds.name}</h3>
                  <p className="text-slate-500 font-medium">{ds.organization}</p>
                </div>
                <DataConfidenceBadge status={ds.status} />
              </div>

              <p className="text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100 font-medium">
                {ds.description}
              </p>

              <div className="grid grid-cols-2 gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                <div>
                  <div className="text-slate-400 font-medium text-[10px]">Data Integration Type</div>
                  <div className="font-bold text-slate-800 mt-0.5">{ds.dataType}</div>
                </div>
                <div>
                  <div className="text-slate-400 font-medium text-[10px]">Coverage & Last Updated</div>
                  <div className="font-bold text-slate-800 mt-0.5">{ds.coverage} ({ds.lastUpdated})</div>
                </div>
              </div>

              {/* Used In Features */}
              <div>
                <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mb-1">
                  HealthSetu Modules Driven By This Dataset:
                </div>
                <div className="flex flex-wrap gap-1">
                  {ds.usedIn.map((mod, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-teal-50 border border-teal-200 text-teal-900 font-bold text-[10px]">
                      {mod}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <button
                onClick={() => setSelectedDataset(ds)}
                className="text-teal-700 font-bold hover:underline flex items-center gap-1"
              >
                Inspect Dataset Metadata & Schema →
              </button>
              <a
                href={ds.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold flex items-center gap-1.5 shadow-xs transition"
              >
                View Official Portal Source <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Dataset Detail Drawer Modal */}
      {selectedDataset && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs" onClick={() => setSelectedDataset(null)} />

          <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-3xl p-6 text-slate-900 shadow-2xl z-10 space-y-4 text-xs">
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div>
                <DataConfidenceBadge status={selectedDataset.status} />
                <h3 className="text-lg font-extrabold text-slate-900 mt-1">{selectedDataset.name}</h3>
                <p className="text-slate-500 font-medium">{selectedDataset.organization}</p>
              </div>
              <button onClick={() => setSelectedDataset(null)} className="p-1 rounded bg-slate-100 text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <div className="font-bold text-slate-800 mb-1">Dataset Description & Scope:</div>
                <p className="text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200">
                  {selectedDataset.description}
                </p>
              </div>

              <div>
                <div className="font-bold text-slate-800 mb-1">Key Data Fields Tracked:</div>
                <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                  {selectedDataset.dataFields.map((field, i) => (
                    <span key={i} className="px-2 py-1 rounded bg-slate-100 border border-slate-200 text-slate-800">
                      {field}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-end">
              <a
                href={selectedDataset.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold flex items-center gap-1.5 shadow-xs transition"
              >
                Open Official Source URL <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
