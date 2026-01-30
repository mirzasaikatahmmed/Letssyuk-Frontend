/* eslint-disable @typescript-eslint/no-explicit-any */
import { Sparkles, TrendingUp, Activity, Target } from 'lucide-react';

export const LiveAIInsights = ({ stats }: any) => {
  return (
    <div className="space-y-6 sticky top-24">
      {/* AI Insights Card */}
      <div className="bg-gradient-to-br from-[#11161D] to-[#0B0E14] border border-[#53DDF5]/20 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-2 mb-4 text-[#53DDF5]">
          <Sparkles size={18} />
          <h3 className="text-sm font-black uppercase tracking-widest">Live AI Insights</h3>
        </div>
        <ul className="space-y-4">
          <li className="flex items-start gap-3 text-xs text-gray-400 leading-relaxed">
            <TrendingUp size={14} className="text-[#53DDF5] mt-0.5" />
            <span>Current goal conversion rate: <b className="text-white">{(stats.goals / (stats.matches || 1)).toFixed(2)} goals/match</b></span>
          </li>
          <li className="flex items-start gap-3 text-xs text-gray-400 leading-relaxed">
            <Activity size={14} className="text-[#53DDF5] mt-0.5" />
            <span>Average playing time: <b className="text-white">{Math.round(stats.minutes / (stats.matches || 1))} mins/match</b></span>
          </li>
          <li className="flex items-start gap-3 text-xs text-gray-400 leading-relaxed">
            <Target size={14} className="text-[#53DDF5] mt-0.5" />
            <span>Finisher profile - <b className="text-white">goal-oriented</b></span>
          </li>
        </ul>
      </div>

      {/* Performance Summary Card */}
      <div className="bg-[#11161D] border border-gray-800 rounded-2xl p-6">
        <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-6">Performance Summary</h3>
        <div className="space-y-4">
          {Object.entries(stats).map(([key, val]) => (
            <div key={key} className="flex justify-between items-center border-b border-gray-800/50 pb-2">
              <span className="text-xs text-gray-500 capitalize">{key.replace('_', ' ')}</span>
              <span className="text-sm font-black text-[#53DDF5]">{val as number || 0}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};