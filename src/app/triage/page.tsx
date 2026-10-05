'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/layout/AppContext';
import { runSmartTriage } from '@/lib/triageEngine';
import { TriageInput, TriageResult } from '@/types';
import { ShowYourWorkPanel } from '@/components/ai/ShowYourWorkPanel';
import { Stethoscope, CheckCircle2, AlertTriangle, ArrowRight, ArrowLeft, ShieldAlert, HeartPulse, Thermometer, Activity, MapPin } from 'lucide-react';

export default function SmartAiTriagePage() {
  const { location, t } = useApp();
  const [step, setStep] = useState<number>(1);

  const [input, setInput] = useState<TriageInput>({
    age: 26,
    gender: 'female',
    symptoms: ['Fever', 'Headache'],
    durationDays: 2,
    temperatureF: 101.4,
    bloodPressureSys: 130,
    bloodPressureDia: 85,
    spO2: 97,
    isPregnant: true,
    pregnancyWeek: 32,
    preExistingConditions: ['Anemia'],
    location
  });

  const [result, setResult] = useState<TriageResult | null>(null);

  const handleNext = () => {
    if (step === 4) {
      const triageRes = runSmartTriage(input);
      setResult({
        ...triageRes,
        evidenceBasedOn: [
          'Pipariya Village Active Fever Surveillance Cluster',
          'Gestational Anemia ANC Risk Parameters (Hb 9.4 g/dL)',
          'ICMR & NHM Rural Triage Protocols 2026'
        ],
        confidenceScore: 92
      });
      setStep(5);
    } else {
      setStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setStep(prev => Math.max(1, prev - 1));
  };

  const toggleSymptom = (sym: string) => {
    setInput(prev => ({
      ...prev,
      symptoms: prev.symptoms.includes(sym)
        ? prev.symptoms.filter(s => s !== sym)
        : [...prev.symptoms, sym]
    }));
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-teal-700 uppercase tracking-widest flex items-center gap-1.5">
            <Stethoscope className="w-4 h-4 text-teal-600" /> Smart Guided Assessment
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
            5-Step Clinical AI Triage Wizard
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Evaluates symptoms, vitals & risk factors to direct patients to the right care facility.
          </p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center gap-1.5 font-mono text-xs bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200 font-semibold text-slate-700">
          Step <span className="text-teal-700 text-sm font-extrabold">{step}</span> / 5
        </div>
      </div>

      {/* Stepper Progress Bar */}
      <div className="grid grid-cols-5 gap-2">
        {['1. Patient Info', '2. Symptoms', '3. Vitals', '4. Risk Check', '5. Care Pathway'].map((stLabel, idx) => {
          const stNum = idx + 1;
          const isDone = step > stNum;
          const isCurrent = step === stNum;
          return (
            <div
              key={idx}
              className={`py-2 px-1 text-center rounded-xl text-[11px] font-semibold transition border ${
                isCurrent
                  ? 'bg-teal-700 text-white border-teal-800 shadow-2xs'
                  : isDone
                  ? 'bg-teal-50 text-teal-800 border-teal-200'
                  : 'bg-slate-100 text-slate-400 border-slate-200'
              }`}
            >
              {stLabel}
            </div>
          );
        })}
      </div>

      {/* Step Content Container */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
        {/* Step 1: Patient Information */}
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
              Step 1: Basic Patient Information
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-slate-700 font-medium mb-1">Age (Years)</label>
                <input
                  type="number"
                  value={input.age}
                  onChange={(e) => setInput(prev => ({ ...prev, age: Number(e.target.value) }))}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 font-semibold text-slate-900 focus:outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-1">Gender</label>
                <select
                  value={input.gender}
                  onChange={(e) => setInput(prev => ({ ...prev, gender: e.target.value as any }))}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 font-semibold text-slate-900 focus:outline-none focus:border-teal-500"
                >
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {input.gender === 'female' && (
                <div className="sm:col-span-2 bg-pink-50/70 border border-pink-200 rounded-xl p-3 space-y-2">
                  <label className="flex items-center gap-2 text-pink-900 font-semibold cursor-pointer">
                    <input
                      type="checkbox"
                      checked={input.isPregnant}
                      onChange={(e) => setInput(prev => ({ ...prev, isPregnant: e.target.checked }))}
                      className="rounded border-pink-300 text-pink-600 focus:ring-pink-500"
                    />
                    Is the patient currently pregnant?
                  </label>

                  {input.isPregnant && (
                    <div className="pt-2 flex items-center gap-3">
                      <span className="text-slate-700">Pregnancy Week:</span>
                      <input
                        type="number"
                        value={input.pregnancyWeek}
                        onChange={(e) => setInput(prev => ({ ...prev, pregnancyWeek: Number(e.target.value) }))}
                        className="w-24 bg-white border border-pink-300 rounded-lg px-2 py-1 font-bold text-slate-900"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step 2: Symptoms & Duration */}
        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
              Step 2: Symptoms & Duration
            </h3>

            <div className="space-y-3">
              <label className="block text-xs font-semibold text-slate-700">Select All Present Symptoms:</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {[
                  'Fever', 'Chest Pain', 'Shortness of Breath', 'Severe Headache',
                  'Chills & Rigors', 'Cough', 'Vomiting / Diarrhea', 'Ankle Swelling',
                  'Blurred Vision', 'Unusual Bleeding', 'Dizziness', 'Joint Pain'
                ].map((sym) => {
                  const isChecked = input.symptoms.includes(sym);
                  return (
                    <button
                      key={sym}
                      onClick={() => toggleSymptom(sym)}
                      className={`p-2.5 rounded-xl border text-left font-medium transition cursor-pointer ${
                        isChecked
                          ? 'bg-teal-700 text-white border-teal-800 shadow-2xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {sym}
                    </button>
                  );
                })}
              </div>

              <div className="pt-3">
                <label className="block text-xs font-semibold text-slate-700 mb-1">Symptom Duration (Days):</label>
                <input
                  type="number"
                  value={input.durationDays}
                  onChange={(e) => setInput(prev => ({ ...prev, durationDays: Number(e.target.value) }))}
                  className="w-32 bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 font-bold text-slate-900"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Vitals Input */}
        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
              Step 3: Vitals Measurements (Optional / Available)
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="bg-amber-50/50 p-3 rounded-xl border border-amber-200 space-y-1">
                <label className="block font-semibold text-amber-900 flex items-center gap-1">
                  <Thermometer className="w-4 h-4 text-amber-600" /> Temperature (°F)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={input.temperatureF || ''}
                  onChange={(e) => setInput(prev => ({ ...prev, temperatureF: Number(e.target.value) }))}
                  placeholder="e.g. 101.4"
                  className="w-full bg-white border border-amber-300 rounded-lg px-3 py-1.5 font-bold text-slate-900"
                />
              </div>

              <div className="bg-sky-50/50 p-3 rounded-xl border border-sky-200 space-y-1">
                <label className="block font-semibold text-sky-900 flex items-center gap-1">
                  <Activity className="w-4 h-4 text-sky-600" /> Blood Oxygen SpO2 (%)
                </label>
                <input
                  type="number"
                  value={input.spO2 || ''}
                  onChange={(e) => setInput(prev => ({ ...prev, spO2: Number(e.target.value) }))}
                  placeholder="e.g. 97"
                  className="w-full bg-white border border-sky-300 rounded-lg px-3 py-1.5 font-bold text-slate-900"
                />
              </div>

              <div className="bg-rose-50/50 p-3 rounded-xl border border-rose-200 space-y-1">
                <label className="block font-semibold text-rose-900 flex items-center gap-1">
                  <HeartPulse className="w-4 h-4 text-rose-600" /> Systolic BP (mmHg)
                </label>
                <input
                  type="number"
                  value={input.bloodPressureSys || ''}
                  onChange={(e) => setInput(prev => ({ ...prev, bloodPressureSys: Number(e.target.value) }))}
                  placeholder="e.g. 130"
                  className="w-full bg-white border border-rose-300 rounded-lg px-3 py-1.5 font-bold text-slate-900"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Summary Review */}
        {step === 4 && (
          <div className="space-y-4 text-xs">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
              Step 4: Review Patient Data Before AI Calculation
            </h3>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
              <div><strong>Age & Gender:</strong> {input.age} Years, {input.gender.toUpperCase()} {input.isPregnant ? `(Pregnant - Wk ${input.pregnancyWeek})` : ''}</div>
              <div><strong>Selected Symptoms:</strong> {input.symptoms.join(', ')} ({input.durationDays} Days)</div>
              <div><strong>Vitals Logged:</strong> Temp: {input.temperatureF}°F | SpO2: {input.spO2}% | BP: {input.bloodPressureSys}/{input.bloodPressureDia} mmHg</div>
              <div><strong>Location:</strong> {input.location.village}, {input.location.district} District</div>
            </div>

            <div className="bg-teal-50 border border-teal-200 text-teal-900 p-3 rounded-xl font-medium">
              Ready to generate clinical risk assessment score and referral pathway. Click Next.
            </div>
          </div>
        )}

        {/* Step 5: Structured AI Response Cards & "Show Your Work" Panel */}
        {step === 5 && result && (
          <div className="space-y-6">
            {/* Structured Risk Response Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
              <div className="bg-amber-500/10 border border-amber-300 p-4 rounded-2xl space-y-1">
                <div className="text-[10px] font-bold text-amber-800 uppercase tracking-widest">1. Risk Level</div>
                <div className="text-xl font-extrabold text-amber-900">{result.riskLevel} ({result.riskScore}/100)</div>
                <div className="text-amber-800 font-medium">{result.urgencyLabel}</div>
              </div>

              <div className="bg-teal-50 border border-teal-200 p-4 rounded-2xl space-y-1">
                <div className="text-[10px] font-bold text-teal-800 uppercase tracking-widest">2. What To Do</div>
                <div className="font-bold text-teal-950">{result.recommendedActions[0]}</div>
                <div className="text-teal-800 font-medium">Follow up within {result.followUpHours} hours</div>
              </div>

              <div className="bg-rose-50 border border-rose-200 p-4 rounded-2xl space-y-1">
                <div className="text-[10px] font-bold text-rose-800 uppercase tracking-widest">3. Warning Signs</div>
                <div className="font-bold text-rose-950">{result.warningSigns[0] || 'Monitor for chest pain or breathing difficulty.'}</div>
              </div>

              <div className="bg-sky-50 border border-sky-200 p-4 rounded-2xl space-y-1">
                <div className="text-[10px] font-bold text-sky-800 uppercase tracking-widest">4. Where To Go</div>
                <div className="text-xl font-extrabold text-sky-950">{result.recommendedFacility}</div>
                <div className="text-sky-800 font-medium">Escort by ASHA Kamla Verma</div>
              </div>
            </div>

            {/* "Show Your Work" AI Panel */}
            <ShowYourWorkPanel
              whyRecommendation="Elevated body temperature (101.4°F) combined with 32-week pregnancy gestational anemia (Hb 9.4 g/dL) requires PHC clinical evaluation within 24 hours to prevent pre-eclampsia complications."
              basedOnDataSources={result.evidenceBasedOn}
              limitations="AI triage engine provides informational guidance based on logged parameters; it does not replace a doctor or provide definitive diagnosis."
              confidenceScore={result.confidenceScore}
            />
          </div>
        )}

        {/* Wizard Controls */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          {step > 1 && step < 5 ? (
            <button
              onClick={handleBack}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs flex items-center gap-1.5 transition"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back
            </button>
          ) : <div />}

          {step < 5 && (
            <button
              onClick={handleNext}
              className="px-6 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition"
            >
              {step === 4 ? 'Calculate Triage Risk' : 'Next Step'} <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}

          {step === 5 && (
            <button
              onClick={() => setStep(1)}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs"
            >
              Start New Triage
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
