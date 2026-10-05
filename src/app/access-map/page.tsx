'use client';

import React from 'react';
import { IndiaHealthMap } from '@/components/maps/IndiaHealthMap';
import { MapPin, Building2, Phone } from 'lucide-react';

export default function AccessMapPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-teal-700 uppercase tracking-widest flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-teal-600" /> Rural Healthcare Access Map
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
            Interactive India Healthcare GIS
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Find nearby PHCs, CHCs, District Hospitals, Jan Aushadhi Kendras & Telemedicine Hubs.
          </p>
        </div>
      </div>

      <IndiaHealthMap />
    </div>
  );
}
