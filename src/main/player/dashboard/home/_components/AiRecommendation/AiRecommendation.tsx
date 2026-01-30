/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react';
import { Card } from "@/components/ui/card";
import { ChevronRight, Sparkles, Target, Utensils, Calendar, Heart, Info } from 'lucide-react';
import {  useNavigate } from "react-router";

const AIRecommendations = () => {
  const recommendations = [
    {
      title: "Priority Focus Areas",
      subtitle: "2 areas need attention",
      icon: <Target size={20} />,
      color: "#FE9A00",
      redirect:  "priority-focus-areas"
    },
    {
      title: "Nutrition & Hydration Guidance",
      subtitle: "Personalized meal timing and hydration strategy",
      icon: <Utensils size={20} />,
      color: "#00C950",
      redirect: "nutrition-hydration-guidance"
    },
    {
      title: "Suggested Weekly Structure",
      subtitle: "AI-optimized training schedule",
      icon: <Calendar size={20} />,
      color: "#0FB9B1",
      redirect: "suggested-weekly-structure"
    },
    {
      title: "Mental Health & Wellbeing Support",
      subtitle: "Resources and guidance for mental wellness",
      icon: <Heart size={20} />,
      color: "#F6339A",
      redirect: "mental-health"
    },
  ];

  // Helper for 10% opacity background
  const getBgColor = (hex :  any) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, 0.1)`;
  };

  const navigate = useNavigate()

  return (
    <div className="space-y-6 w-full  mx-auto ">
      {/* Main Recommendations Card */}
      <Card className="bg-[#0B1219] border-gray-800 p-8 rounded-2xl">
        <div className="flex items-center gap-2 mb-8">
          <Sparkles className="text-[#53DDF5]" size={20} />
          <h2 className="text-white font-bold text-lg">AI Recommendations</h2>
        </div>

        <div className="space-y-4">
          {recommendations.map((item, index) => (
            <div
              onClick={() => navigate(item.redirect)}
              key={index}
              className="group flex items-center justify-between p-4 rounded-xl border border-gray-800 bg-[#0D161E] hover:bg-[#121D26] transition-all cursor-pointer"
            >
              <div className="flex items-center gap-4">
                {/* Icon Container with 10% Opacity BG */}
                <div 
                  className="p-3 rounded-lg flex items-center justify-center border"
                  style={{ 
                    backgroundColor: getBgColor(item.color),
                    borderColor: `${item.color}33`, // 20% opacity border
                    color: item.color 
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                  <p className="text-gray-500 text-xs mt-0.5">{item.subtitle}</p>
                </div>
              </div>
              <ChevronRight className="text-gray-600 group-hover:text-gray-400 transition-colors" size={18} />
            </div>
          ))}
        </div>
      </Card>

      {/* Data Transparency Footer */}
      <div className="bg-[#101D24] border border-[#1A2E38] p-4 rounded-xl flex gap-3">
        <div className="mt-1">
          <Info size={18} className="text-[#0FB9B1]" />
        </div>
        <div className="text-[12px] leading-relaxed text-gray-300 flex flex-col">
          <span className="font-bold text-white">Data Transparency:</span>
          <p className="inline">
            All insights are generated from your profile data and are used for career intelligence only. 
            OnyxSport AI is not an agent and does not represent you in contract negotiations. 
            You maintain full control of your data under GDPR regulations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIRecommendations;