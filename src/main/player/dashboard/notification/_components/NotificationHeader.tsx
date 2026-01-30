/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
// import { Card } from "@/components/ui/card";
import { 
  CheckCircle2,
  Trash2,
} from 'lucide-react';


export const NotificationHeader = ({ onClearAll, onMarkAllRead } : any) => {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Notifications</h1>
          <p className="text-gray-400 text-sm mt-1">Stay updated with your career progress</p>
        </div>
        
        <div className="flex items-center gap-3 ">
          <button 
            onClick={onMarkAllRead}
            className="flex items-center gap-2 px-4 py-2 cursor-pointer bg-[#162129] border border-gray-800 text-gray-400 text-xs font-bold rounded-lg hover:text-white hover:border-gray-600 transition-all"
          >
            <CheckCircle2 size={14} /> Mark All Read
          </button>
          <button 
            onClick={onClearAll}
            className="flex items-center gap-2 px-4 py-2 cursor-pointer bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold rounded-lg hover:bg-red-500 hover:text-white transition-all"
          >
            <Trash2 size={14} /> Clear All
          </button>
        </div>
      </div>

      <div className="flex gap-2 p-1 bg-[#0A0A0A] border border-gray-800 rounded-xl w-fit">
        {['All Notifications', 'Unread'].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all  ${
              activeFilter === filter 
                ? 'bg-[#30D5C8] text-[#0B0E14]' 
                : 'text-gray-500 hover:text-gray-300 '
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};