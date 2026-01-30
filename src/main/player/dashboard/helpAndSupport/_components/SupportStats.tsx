// import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { 
  Clock, 
  Headphones, 
  CheckCircle2, 
} from 'lucide-react';

export const SupportStats = () => {
  const stats = [
    { label: "24/7", sub: "Support Available", icon: Clock, color: "#0DA9A2" },
    { label: "< 2h", sub: "Avg Response Time", icon: Headphones, color: "#00A63E" },
    { label: "98%", sub: "Satisfaction Rate", icon: CheckCircle2, color: "#9810FA" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, i) => (
        <Card key={i} className="bg-[#0A0A0A] border-gray-800 p-6  gap-4 rounded-xl">
         <div className="flex  justify-start items-center gap-3">
             <div 
            className="p-3 rounded-lg flex items-center justify-center shadow-lg"
            style={{ backgroundColor: `${stat.color}20`, color: stat.color, boxShadow: `0 0 15px ${stat.color}10` }}
          >
            <stat.icon size={24} />
          </div>
          <div>
            <h4 className="text-xl font-bold text-white">{stat.label}</h4>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{stat.sub}</p>
          </div>
         </div>
        </Card>
      ))}
    </div>
  );
};
