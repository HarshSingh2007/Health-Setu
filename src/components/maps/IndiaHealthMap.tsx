'use client';

import React, { useState } from 'react';
import { Facility } from '@/types';
import { mockFacilities } from '@/lib/mockData';
import { MapPin, Phone, Clock, Navigation, Stethoscope, ShieldAlert, CheckCircle2, Video, Search, Filter } from 'lucide-react';

export const IndiaHealthMap: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('ALL');
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(mockFacilities[0]);
  const [filterEmergency, setFilterEmergency] = useState<boolean>(false);

  const filtered = mockFacilities.filter(f => {
    if (selectedType !== 'ALL' && f.type !== selectedType) return false;
    if (filterEmergency && !f.emergencyServices) return false;
    return true;
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Column: Interactive Map & Filters */}
      <div className="lg:col-span-2 space-y-4">
        {/* Filter Bar */}
        <div className="bg-white border border-slate-200 rounded-xl p-3 flex flex-wrap items-center justify-between gap-3 shadow-xs">
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-slate-500 font-medium flex items-center gap-1 mr-1">
              <Filter className="w-3.5 h-3.5" /> Filter Type:
            </span>
            {['ALL', 'PHC', 'CHC', 'District Hospital', 'Jan Aushadhi', 'Telemedicine Center'].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-2.5 py-1 rounded-lg font-medium transition cursor-pointer ${
                  selectedType === type
                    ? 'bg-teal-700 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={filterEmergency}
              onChange={(e) => setFilterEmergency(e.target.checked)}
              className="rounded border-slate-300 text-teal-600 focus:ring-teal-500"
            />
            <span className="text-rose-600 font-semibold flex items-center gap-1">
              <ShieldAlert className="w-3.5 h-3.5" /> 24/7 Emergency Only
            </span>
          </label>
        </div>

        {/* Visual Map Canvas Representation */}
        <div className="relative w-full h-[420px] bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white overflow-hidden shadow-xl flex flex-col justify-between">
          {/* Map Grid Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
          
          {/* Simulated Topographic Lines */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <svg className="w-full h-full" stroke="currentColor" fill="none" strokeWidth="1">
              <circle cx="40%" cy="50%" r="120" stroke="#0d9488" strokeDasharray="4 4" />
              <circle cx="40%" cy="50%" r="220" stroke="#0284c7" strokeDasharray="6 6" />
              <path d="M 50 100 Q 200 150 400 80 T 700 300" stroke="#10b981" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Map Controls */}
          <div className="relative z-10 flex items-center justify-between text-xs">
            <div className="bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 font-mono text-teal-300">
              Region: Ashta Block, Sehore District (MP)
            </div>
            <div className="bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 text-slate-400">
              Interactive GPS Grid Active
            </div>
          </div>

          {/* Map Pins */}
          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-3 my-auto">
            {filtered.map((fac) => {
              const isSelected = selectedFacility?.id === fac.id;
              return (
                <button
                  key={fac.id}
                  onClick={() => setSelectedFacility(fac)}
                  className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-teal-600/90 border-teal-400 text-white shadow-lg ring-2 ring-teal-400/40 scale-105'
                      : 'bg-slate-800/90 border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/40 text-teal-300">
                      {fac.type}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">{fac.distanceKm} km</span>
                  </div>
                  <div className="font-bold text-xs truncate">{fac.name}</div>
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-300 mt-1">
                    <Clock className="w-3 h-3 text-emerald-400" />
                    <span>~{fac.travelTimeMin} min travel</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Map Legend */}
          <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-400 bg-slate-950/90 p-2.5 rounded-xl border border-slate-800">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> PHC / CHC</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span> Telemedicine</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span> Emergency Hub</span>
            </div>
            <span className="text-teal-400 font-medium">DEMO MAP DATA</span>
          </div>
        </div>
      </div>

      {/* Right Column: Selected Facility Details */}
      <div>
        {selectedFacility ? (
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-semibold text-teal-800 uppercase tracking-widest px-2 py-0.5 rounded bg-teal-50 border border-teal-200">
                  {selectedFacility.type}
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-1.5 leading-snug">{selectedFacility.name}</h3>
                <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {selectedFacility.village}, {selectedFacility.block} Block
                </p>
              </div>
              <span className="px-2 py-1 rounded text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                {selectedFacility.openStatus}
              </span>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <div className="text-slate-400 text-[10px]">Distance & Time</div>
                <div className="font-bold text-slate-800 mt-0.5">{selectedFacility.distanceKm} km ({selectedFacility.travelTimeMin} mins)</div>
              </div>
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <div className="text-slate-400 text-[10px]">Beds Available</div>
                <div className="font-bold text-teal-800 mt-0.5">{selectedFacility.bedsAvailable} Beds</div>
              </div>
            </div>

            {/* Services Checklist */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-700">Services Available:</div>
              <div className="grid grid-cols-2 gap-1.5 text-xs text-slate-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className={`w-4 h-4 ${selectedFacility.emergencyServices ? 'text-emerald-500' : 'text-slate-300'}`} />
                  <span>24/7 Emergency</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className={`w-4 h-4 ${selectedFacility.maternalServices ? 'text-emerald-500' : 'text-slate-300'}`} />
                  <span>Maternal & ANC</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className={`w-4 h-4 ${selectedFacility.pediatricServices ? 'text-emerald-500' : 'text-slate-300'}`} />
                  <span>Pediatric Care</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className={`w-4 h-4 ${selectedFacility.telemedicineAvailable ? 'text-emerald-500' : 'text-slate-300'}`} />
                  <span>Teleconsultation</span>
                </div>
              </div>
            </div>

            {/* Contact Actions */}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`tel:${selectedFacility.contactNumber}`}
                className="w-full py-2 px-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs text-center flex items-center justify-center gap-2 shadow-xs transition"
              >
                <Phone className="w-4 h-4" /> Call Facility ({selectedFacility.contactNumber})
              </a>
              <button
                onClick={() => alert(`Navigating to ${selectedFacility.name}...`)}
                className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium text-xs flex items-center justify-center gap-2 border border-slate-200 transition"
              >
                <Navigation className="w-4 h-4 text-teal-700" /> Get Directions
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center text-slate-500 text-xs">
            Select a facility on the map to view detailed availability and services.
          </div>
        )}
      </div>
    </div>
  );
};
