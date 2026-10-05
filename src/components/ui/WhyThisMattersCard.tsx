'use client';

import React from 'react';
import { Info, ArrowRight } from 'lucide-react';

interface WhyThisMattersCardProps {
  story: string;
  actionText?: string;
  onActionClick?: () => void;
}

export const WhyThisMattersCard: React.FC<WhyThisMattersCardProps> = ({ story, actionText, onActionClick }) => {
  return (
    <div className="bg-teal-50/80 border border-teal-200/80 rounded-xl p-2.5 text-xs text-teal-900 flex items-center justify-between gap-2 shadow-2xs">
      <div className="flex items-center gap-2 font-medium">
        <Info className="w-3.5 h-3.5 text-teal-700 shrink-0" />
        <span><strong className="font-bold text-teal-950">Why This Matters:</strong> {story}</span>
      </div>
      {actionText && (
        <button
          onClick={onActionClick}
          className="text-teal-800 font-bold hover:underline shrink-0 flex items-center gap-1 text-[11px]"
        >
          {actionText} <ArrowRight className="w-3 h-3" />
        </button>
      )}
    </div>
  );
};
