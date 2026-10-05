'use client';

import React, { createContext, useContext, useState } from 'react';
import { Language, UserRole, LocationState, JudgePreset, DataLineage } from '@/types';
import { translations } from '@/lib/translations';
import { mockLineageData } from '@/lib/mockData';
import { DataLineageModal } from '../ui/DataLineageModal';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  role: UserRole;
  setRole: (role: UserRole) => void;
  location: LocationState;
  setLocation: React.Dispatch<React.SetStateAction<LocationState>>;
  judgePreset: JudgePreset;
  setJudgePreset: (preset: JudgePreset) => void;
  darkCommandMode: boolean;
  setDarkCommandMode: (mode: boolean) => void;
  t: (key: string) => string;
  applyPresetScenario: (preset: JudgePreset) => void;
  
  // Data Lineage Engine
  activeLineage: DataLineage | null;
  openLineageModalByKey: (key: string) => void;
  closeLineageModal: () => void;

  // Hackathon Presentation Stepper
  judgeStep: number;
  setJudgeStep: React.Dispatch<React.SetStateAction<number>>;
}

const defaultLocation: LocationState = {
  country: 'India',
  state: 'Madhya Pradesh',
  district: 'Sehore',
  block: 'Ashta',
  village: 'Pipariya'
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [role, setRole] = useState<UserRole>('patient');
  const [location, setLocation] = useState<LocationState>(defaultLocation);
  const [judgePreset, setJudgePreset] = useState<JudgePreset>('default');
  const [darkCommandMode, setDarkCommandMode] = useState<boolean>(false);
  const [activeLineage, setActiveLineage] = useState<DataLineage | null>(null);
  const [judgeStep, setJudgeStep] = useState<number>(1);

  const t = (key: string): string => {
    return translations[language]?.[key] || translations['en']?.[key] || key;
  };

  const openLineageModalByKey = (key: string) => {
    if (mockLineageData[key]) {
      setActiveLineage(mockLineageData[key]);
    } else {
      setActiveLineage({
        metricName: key,
        value: 'Standard Government Indicator',
        datasetName: 'National Health Authority (NHA) & ABDM Registry',
        organization: 'Ministry of Health & Family Welfare',
        coverage: 'National / District Sehore',
        lastUpdated: '2026-10-04',
        calculationLogic: 'Aggregated from official monthly health return records.',
        confidence: 'OFFICIAL_VERIFIED',
        sourceUrl: 'https://hfr.abdm.gov.in'
      });
    }
  };

  const closeLineageModal = () => {
    setActiveLineage(null);
  };

  const applyPresetScenario = (preset: JudgePreset) => {
    setJudgePreset(preset);
    if (preset === 'pregnancy') {
      setRole('asha');
      setLocation(prev => ({ ...prev, village: 'Pipariya' }));
    } else if (preset === 'fever_cluster') {
      setRole('admin');
      setLocation(prev => ({ ...prev, village: 'Pipariya' }));
    } else if (preset === 'medicine_shortage') {
      setRole('doctor');
      setLocation(prev => ({ ...prev, village: 'Ashta Town' }));
    } else if (preset === 'simulator_demo') {
      setRole('admin');
    }
  };

  return (
    <AppContext.Provider value={{
      language,
      setLanguage,
      role,
      setRole,
      location,
      setLocation,
      judgePreset,
      setJudgePreset,
      darkCommandMode,
      setDarkCommandMode,
      t,
      applyPresetScenario,
      activeLineage,
      openLineageModalByKey,
      closeLineageModal,
      judgeStep,
      setJudgeStep
    }}>
      {children}
      <DataLineageModal lineage={activeLineage} onClose={closeLineageModal} />
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
