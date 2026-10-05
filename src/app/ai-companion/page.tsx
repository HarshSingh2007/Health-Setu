'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/layout/AppContext';
import { Bot, Send, Mic, ShieldAlert, AlertTriangle, CheckCircle2, MapPin, Stethoscope, Sparkles, RefreshCw } from 'lucide-react';
import { RiskLevel } from '@/types';

export default function AiHealthCompanion() {
  const { t, language } = useApp();
  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string; time: string }>>([
    {
      sender: 'ai',
      text: 'Namaste! I am your HealthSetu AI Health Companion. How can I help you or your family today? You can type your symptoms in English, Hindi, or Hinglish.',
      time: '10:00 AM'
    }
  ]);

  const [currentRisk, setCurrentRisk] = useState<{
    level: RiskLevel;
    score: number;
    symptoms: string[];
    warningSigns: string[];
    recommendedAction: string;
    facility: string;
  }>({
    level: 'MODERATE',
    score: 45,
    symptoms: ['Fever (101°F)', 'Chills', 'Mild Cough'],
    warningSigns: ['Fever persisting for 2 days in a fever cluster village'],
    recommendedAction: 'Visit Pipariya PHC for Malaria/Dengue rapid blood slide test and consult Dr. Verma.',
    facility: 'Pipariya PHC (0.8 km)'
  });

  const handleSend = () => {
    if (!inputText.trim()) return;
    const userMsg = { sender: 'user' as const, text: inputText, time: '10:02 AM' };
    setMessages(prev => [...prev, userMsg]);

    // Simulate AI clinical guidance response
    setTimeout(() => {
      const lower = inputText.toLowerCase();
      let aiReply = "Based on what you described, I recommend consulting with your local ASHA worker or visiting the Pipariya PHC. Stay hydrated and monitor your temperature.";
      
      if (lower.includes('chest pain') || lower.includes('breathing')) {
        aiReply = "⚠️ CRITICAL WARNING: Chest pain or severe difficulty breathing requires immediate emergency attention. Please call 108 ambulance or visit Ashta CHC Emergency immediately.";
        setCurrentRisk({
          level: 'EMERGENCY',
          score: 85,
          symptoms: ['Chest pain / Respiratory distress'],
          warningSigns: ['Severe cardiac/respiratory red flag detected'],
          recommendedAction: 'Immediate 108 Emergency Transport dispatch required.',
          facility: 'Ashta CHC Emergency (4.2 km)'
        });
      } else if (lower.includes('fever') || lower.includes('bukhar')) {
        aiReply = "I understand you have fever. Since Pipariya village currently has a fever cluster alert, it is important to get a rapid malaria/dengue blood test at Pipariya PHC. Take paracetamol if prescribed, drink ORS fluids, and rest.";
      }

      setMessages(prev => [...prev, { sender: 'ai', text: aiReply, time: '10:02 AM' }]);
    }, 600);

    setInputText('');
  };

  const simulateVoiceInput = () => {
    setIsRecording(true);
    setTimeout(() => {
      setInputText("Mujhe 2 din se bukhar aur sirdard hai, Pipariya me doctor hain kya?");
      setIsRecording(false);
    }, 1500);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-400 uppercase tracking-widest">
            <Bot className="w-4 h-4 text-teal-300 animate-pulse" />
            AI Health Companion
          </div>
          <h1 className="text-2xl font-bold tracking-tight mt-1">Multi-Lingual AI Health Assistant</h1>
          <p className="text-xs text-slate-300 mt-0.5">Supports English, Hindi (हिंदी), and Hinglish voice & text triage.</p>
        </div>
        <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-700 text-xs font-mono text-teal-300">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          Model: Clinical Health Intelligence v2.4
        </div>
      </div>

      {/* Mandatory Non-Diagnostic Disclaimer */}
      <div className="bg-amber-500/10 border border-amber-300 text-amber-900 rounded-xl p-3 text-xs flex items-center gap-3">
        <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
        <span className="font-semibold">{t('aiDisclaimer')}</span>
      </div>

      {/* Main Grid: Chat Conversation + Clinical Risk Side Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left 8 Cols: Chat Stream */}
        <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl flex flex-col h-[520px] shadow-xs overflow-hidden">
          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex gap-3 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {m.sender === 'ai' && (
                  <div className="w-8 h-8 rounded-xl bg-teal-700 flex items-center justify-center text-white shrink-0 shadow-xs">
                    <Bot className="w-4 h-4" />
                  </div>
                )}
                <div className={`max-w-md p-3.5 rounded-2xl text-xs space-y-1 ${
                  m.sender === 'user'
                    ? 'bg-teal-700 text-white rounded-br-none'
                    : 'bg-slate-100 text-slate-800 rounded-bl-none border border-slate-200'
                }`}>
                  <p className="leading-relaxed">{m.text}</p>
                  <div className={`text-[9px] text-right font-mono ${m.sender === 'user' ? 'text-teal-200' : 'text-slate-400'}`}>
                    {m.time}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Prompt Suggestion Pills */}
          <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 flex items-center gap-2 overflow-x-auto text-[11px]">
            <span className="text-slate-400 shrink-0 font-medium">Quick Prompts:</span>
            <button onClick={() => setInputText("Severe fever 102F and chills for 2 days")} className="px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-teal-400 shrink-0">
              🌡️ Fever 102°F & Chills
            </button>
            <button onClick={() => setInputText("Pregnancy month 8 BP high and ankle swelling")} className="px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-teal-400 shrink-0">
              🤰 Pregnancy BP Concern
            </button>
            <button onClick={() => setInputText("Child missed 9 month vaccination")} className="px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-teal-400 shrink-0">
              👶 Missed Vaccine
            </button>
          </div>

          {/* Input Box & Voice Button */}
          <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <button
              onClick={simulateVoiceInput}
              className={`p-2.5 rounded-xl border transition ${
                isRecording
                  ? 'bg-rose-500 text-white border-rose-600 animate-pulse'
                  : 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200'
              }`}
              title="Voice Input (Hindi/Hinglish)"
            >
              <Mic className="w-4 h-4" />
            </button>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type symptoms in English, Hindi, or Hinglish..."
              className="flex-1 bg-slate-100 text-xs px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-teal-500 focus:bg-white"
            />
            <button
              onClick={handleSend}
              className="px-4 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs flex items-center gap-1.5 shadow-xs transition"
            >
              <Send className="w-3.5 h-3.5" /> Send
            </button>
          </div>
        </div>

        {/* Right 4 Cols: Structured Clinical Risk Panel */}
        <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-sm font-bold text-slate-900">Clinical Risk Assessment</h3>
            <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
              currentRisk.level === 'EMERGENCY'
                ? 'bg-rose-500 text-white animate-pulse'
                : currentRisk.level === 'HIGH'
                ? 'bg-rose-100 text-rose-800 border border-rose-300'
                : 'bg-amber-100 text-amber-800 border border-amber-300'
            }`}>
              {currentRisk.level} RISK ({currentRisk.score}/100)
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <div className="text-slate-400 font-medium text-[10px] uppercase tracking-wider mb-1">Identified Symptoms</div>
              <div className="flex flex-wrap gap-1">
                {currentRisk.symptoms.map((s, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="text-slate-400 font-medium text-[10px] uppercase tracking-wider mb-1">Warning Signs</div>
              <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>{currentRisk.warningSigns[0]}</span>
              </div>
            </div>

            <div>
              <div className="text-slate-400 font-medium text-[10px] uppercase tracking-wider mb-1">Recommended Action</div>
              <p className="text-slate-800 bg-teal-50 p-2.5 rounded-xl border border-teal-200 font-medium">
                {currentRisk.recommendedAction}
              </p>
            </div>

            <div>
              <div className="text-slate-400 font-medium text-[10px] uppercase tracking-wider mb-1">Nearest Facility</div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-teal-700" /> {currentRisk.facility}
                </span>
                <a href="/access-map" className="text-teal-700 font-semibold hover:underline text-[11px]">Map →</a>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <a
              href="/triage"
              className="w-full py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-xs transition"
            >
              <Stethoscope className="w-4 h-4" /> Open Full 5-Step Smart Triage Wizard
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
