/* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { 
  Clock, 
  X
} from 'lucide-react';


export const NotificationItem = ({ icon: Icon, title, description, time, priority, actionText }: any) => {
  const priorityColors = {
    "High Priority": "bg-red-500/10 text-red-500 border-red-500/20",
    "Medium": "bg-amber-500/10 text-amber-500 border-amber-500/20"
  };

  return (
    <Card className="bg-[#0B1219] border-gray-800 p-5 rounded-xl border-[0.5px] hover:border-[#30D5C8]/30 transition-all group relative">
      <button className="absolute top-4 right-4 text-gray-600 hover:text-white transition-colors">
        <X size={16} />
      </button>

      <div className="flex gap-4">
        {/* Icon Container */}
        <div className="h-10 w-10 shrink-0 rounded-lg bg-[#162129] flex items-center justify-center border border-gray-700">
          <Icon size={20} className="text-[#30D5C8]" />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className="text-sm font-bold text-white leading-none">{title}</h4>
            {priority && (
              <span className={`text-[10px] px-2 py-0.5 rounded-full border font-bold uppercase tracking-wider ${priorityColors[priority]}`}>
                {priority}
              </span>
            )}
          </div>
          
          <p className="text-xs text-gray-400 leading-relaxed max-w-2xl">
            {description}
          </p>

          <div className="flex items-center justify-between pt-3">
            <div className="flex items-center gap-1.5 text-gray-500">
              <Clock size={12} />
              <span className="text-[10px] font-medium">{time}</span>
            </div>
            
            {actionText && (
              <button className="px-4 py-1.5 bg-transparent border border-[#30D5C8]/40 text-[#30D5C8] text-[11px] font-bold rounded-lg hover:bg-[#30D5C8] hover:text-[#0B0E14] transition-all">
                {actionText}
              </button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};