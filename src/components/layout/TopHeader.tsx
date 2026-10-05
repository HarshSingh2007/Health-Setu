'use client';

import React from 'react';
import { useApp } from './AppContext';
import { MapPin, Globe, UserCheck, Search, Bell, Menu } from 'lucide-react';
import { UserRole } from '@/types';

interface TopHeaderProps {
  onMobileMenuToggle?: () => void;
}

export const TopHeader: React.FC<TopHeaderProps> = ({ onMobileMenuToggle }) => {
  const { location, setLocation, language, setLanguage, role, setRole, t } = useApp();

  return (
    <header className="sticky top-0 z-30 bg-[#08111c]/95 backdrop-blur-md border-b border-slate-800 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 shadow-md text-white">
      {/* Left: Mobile Menu + Location Selector */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMobileMenuToggle}
          className="lg:hidden p-1.5 rounded-lg border border-slate-800 text-slate-300 hover:bg-slate-800"
          aria-label="Toggle menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 bg-[#0d1722] border border-slate-700/80 rounded-lg px-2.5 py-1 text-xs">
          <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
          <div className="flex items-center gap-1 font-medium text-slate-300">
            <span className="text-slate-500 hidden sm:inline">Hierarchy:</span>
            <select
              value={location.district}
              onChange={(e) => setLocation(prev => ({ ...prev, district: e.target.value }))}
              className="bg-transparent text-white font-semibold focus:outline-none cursor-pointer border-none py-0.5"
            >
              <option value="Sehore" className="bg-slate-900 text-white">Sehore District</option>
              <option value="Varanasi" className="bg-slate-900 text-white">Varanasi District</option>
              <option value="Barmer" className="bg-slate-900 text-white">Barmer District</option>
              <option value="Gaya" className="bg-slate-900 text-white">Gaya District</option>
            </select>
            <span className="text-slate-600">/</span>
            <select
              value={location.village}
              onChange={(e) => setLocation(prev => ({ ...prev, village: e.target.value }))}
              className="bg-transparent text-teal-300 font-semibold focus:outline-none cursor-pointer border-none py-0.5"
            >
              <option value="Pipariya" className="bg-slate-900 text-white">Pipariya Village</option>
              <option value="Kothri" className="bg-slate-900 text-white">Kothri Village</option>
              <option value="Siddhiqganj" className="bg-slate-900 text-white">Siddhiqganj Village</option>
            </select>
          </div>
        </div>
      </div>

      {/* Center: Quick Search Bar */}
      <div className="hidden md:flex items-center relative max-w-xs w-full">
        <Search className="w-4 h-4 text-slate-500 absolute left-3" />
        <input
          type="text"
          placeholder="Search PHC, medicines, schemes, ASHA tasks..."
          className="w-full bg-[#0d1722] text-xs text-white pl-9 pr-3 py-1.5 rounded-full border border-slate-700/80 focus:border-teal-500 focus:outline-none transition"
        />
      </div>

      {/* Right: Language Switcher + Role Selector + Status */}
      <div className="flex items-center gap-2.5">
        {/* Role Selector */}
        <div className="flex items-center gap-1.5 bg-[#0d1722] border border-slate-700 rounded-lg px-2 py-1 text-xs">
          <UserCheck className="w-3.5 h-3.5 text-teal-400 shrink-0" />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as UserRole)}
            className="bg-transparent font-medium text-white text-xs focus:outline-none cursor-pointer"
          >
            <option value="patient" className="bg-slate-900 text-white">Role: {t('rolePatient')}</option>
            <option value="asha" className="bg-slate-900 text-white">Role: {t('roleAsha')}</option>
            <option value="doctor" className="bg-slate-900 text-white">Role: {t('roleDoctor')}</option>
            <option value="admin" className="bg-slate-900 text-white">Role: {t('roleAdmin')}</option>
          </select>
        </div>

        {/* Language Selector */}
        <div className="flex items-center gap-1 bg-[#0d1722] border border-slate-700 rounded-lg p-0.5 text-xs font-medium">
          <Globe className="w-3.5 h-3.5 text-slate-400 ml-1.5" />
          <button
            onClick={() => setLanguage('en')}
            className={`px-2 py-0.5 rounded text-[11px] transition ${
              language === 'en' ? 'bg-teal-600 text-white font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('hi')}
            className={`px-2 py-0.5 rounded text-[11px] transition ${
              language === 'hi' ? 'bg-teal-600 text-white font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            हिंदी
          </button>
          <button
            onClick={() => setLanguage('hinglish')}
            className={`px-2 py-0.5 rounded text-[11px] transition ${
              language === 'hinglish' ? 'bg-teal-600 text-white font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Hinglish
          </button>
        </div>

        {/* Notifications */}
        <button className="relative p-1.5 rounded-lg border border-slate-700 bg-[#0d1722] text-slate-300 hover:text-white">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-slate-900"></span>
        </button>
      </div>
    </header>
  );
};
