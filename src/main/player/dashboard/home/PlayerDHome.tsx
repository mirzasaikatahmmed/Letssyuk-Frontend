/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react';
// import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Target, Calendar, Zap } from 'lucide-react';
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdDone } from "react-icons/md";
import { SignalCard } from "./_components/SignalCard";
import AIRecommendations from "./_components/AiRecommendation/AiRecommendation";

const PlayerDHome = () => {
  return (
    <div className=" space-y-8 bg-[#0B0E14] min-h-screen text-white">
      <div>
        <h1 className="text-3xl font-bold">Career Overview</h1>
        <p className="text-gray-400 text-sm">Your personal football career command centre</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Completion Card */}
        <Card className="md:col-span-2 bg-[#235D6730] border-gray-800 p-6 flex items-center justify-between text-white">
          <div className="flex items-center gap-6">
            <div className="relative w-32 h-32 flex items-center justify-center">
               <svg className="w-full h-full transform -rotate-90">
                <circle cx="64" cy="64" r="50" stroke="#1f2937" strokeWidth="8" fill="transparent" />
                <circle cx="64" cy="64" r="50" stroke="#53DDF5" strokeWidth="8" fill="transparent" 
                  strokeDasharray="314" strokeDashoffset="172" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold">45%</span>
                <span className="text-[10px] text-gray-400">Complete</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <User className="text-[#53DDF5]" size={20} />
                <h3 className="font-semibold text-lg">Complete Your Data & Profile</h3>
              </div>
              <p className="text-xs text-gray-400">2 sections remaining</p>
              <div className="bg-[#235D6780] p-3 rounded-lg border border-gray-800 max-w-md">
                <p className="text-[11px] text-gray-300">
                  <span className="text-[#53DDF5] font-bold">Tip:</span> Complete your profile and update daily to unlock personalized AI recommendations.
                </p>
              </div>
              <Button className="w-full bg-[#53DDF5] hover:bg-cyan-400 text-black font-semibold h-12">
                Complete Now &gt;
              </Button>
            </div>
          </div>
        </Card>

        {/* AI Confidence Card */}
        <Card className="bg-[#121212] border-gray-800 p-6 flex flex-col justify-between">
          <div className="flex items-center gap-2 text-cyan-400">
            <Zap size={18} />
            <span className="text-xs font-bold uppercase">AI Confidence</span>
          </div>
          <div className="py-4">
            <h2 className="text-4xl font-black text-white">Strong</h2>
            <p className="text-xs text-gray-500 mt-1">Goal achievement likelihood</p>
          </div>
          <div className="bg-[#00C9504D] border border-[#00C950] p-2 rounded-md flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00C950] rounded-full animate-pulse"></div>
            <span className="text-[#00C950] text-[10px] font-bold uppercase">On Track</span>
          </div>
        </Card>
      </div>

      {/* Primary Career Goal */}
      <Card className=" bg-transparent border-gray-800 p-6 text-white">
        <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-[#162129] rounded-lg border border-gray-700">
                <Target className="text-cyan-400" size={24} />
            </div>
            <div>
                <h3 className="font-bold">Primary Career Goal</h3>
                <p className="text-xs text-gray-400">Sign a professional contract with a League Two club</p>
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-[#0B0E14] p-4 rounded-xl border border-gray-800">
              <div className="flex justify-between items-start items-end mb-2">
               <div className="flex flex-col ">
                 <span className="text-xs text-gray-400">Progress</span>
                 <span className="text-2xl font-bold">68 <span className="text-sm">%</span></span>
               </div>
                <FaArrowTrendUp className="text-[#00C950]" />
               
              </div>
              <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-[#53DDF5]" style={{ width: '68%' }}></div>
              </div>
           </div>

           <div className="bg-[#0B0E14] p-4 rounded-xl border border-gray-800 flex justify-between">
              <div>
                <p className="text-xs text-gray-400">Time Remaining</p>
                <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-2xl font-bold">7</span>
                    <span className="text-gray-400 text-sm">months</span>
                </div>
                <p className="text-[10px] text-gray-500 mt-1">Target: June 2026</p>
              </div>
              <Calendar className="text-gray-600" size={20} />
           </div>

           <div className="bg-[#0B0E14] p-4 rounded-xl border border-gray-800 flex justify-between items-start">
              <div>
                <p className="text-xs text-gray-400">Next Milestone</p>
              <h4 className="text-md font-bold mt-2">Trial Invitation</h4>
              <p className="text-[10px] text-gray-500">Est. March 2026</p>
              </div>
              <MdDone />
           </div>
        </div>
      </Card>

      {/* Performance Signals */}
      <div className="space-y-4 text-white">
        <h3 className="font-bold text-sm uppercase tracking-wider">Performance Signals</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <SignalCard label="Training" value="5.2" unit="days/week" color="#00C950" status="Excellent" />
          <SignalCard label="Matches" value="8" unit="this season" color="#FE9A00" status="Can Improve" />
          <SignalCard label="Recovery" value="2" unit="days/week" color="#53DDF5" status="Balanced" />
        </div>
      </div>

      <AIRecommendations />
    </div>
  );
};



export default PlayerDHome;