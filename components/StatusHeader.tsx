
import React from 'react';
import { SignalHigh, Wifi, BatteryFull } from 'lucide-react';

export const StatusHeader: React.FC = () => {
  return (
    <div className="flex justify-between items-center w-full px-8 py-3 text-xs font-semibold text-gray-800 select-none">
      <span>9:41</span>
      <div className="flex items-center gap-1.5">
        <SignalHigh size={14} strokeWidth={2.5} />
        <Wifi size={14} strokeWidth={2.5} />
        <BatteryFull size={14} strokeWidth={2.5} className="rotate-0" />
      </div>
    </div>
  );
};
