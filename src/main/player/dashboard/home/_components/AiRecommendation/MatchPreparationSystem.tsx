import { Card } from "@/components/ui/card";
import {
  Clock4,
  Calendar,
  Brain,
  Info,
  ChevronDown,
  ChevronLeft,
} from "lucide-react";
import { useNavigate } from "react-router";

const MatchPreparationSystem = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0B0E14] text-white p-6 space-y-6 min-h-screen font-sans">
      {/* Top Header Card with Back Button */}
      <div className="grid grid-cols-12 items-center gap-4">
       <div className="col-span-4">
         <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-900/50 text-gray-300 hover:border-cyan-500/50 transition-all text-sm font-medium bg-[#0B0E14] group shrink-0 cursor-pointer"
        >
          <ChevronLeft
            size={18}
            className="group-hover:-translate-x-0.5 transition-transform"
          />
          Back
        </button>
       </div>

        <div className="flex items-center justify-between  gap-4 flex-1 bg-[#111111] border border-gray-800 p-4 rounded-xl col-span-8">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-[#1A1610] rounded-lg border border-[#FF6600]/20 hidden md:block">
              <Clock4 className="text-[#FF6600]" size={24} />
            </div>
            <div>
              <h2 className="text-lg font-bold leading-none mb-1">
                Match Preparation System
              </h2>
              <p className="text-gray-500 text-xs leading-none">
                Comprehensive match readiness plan
              </p>
            </div>
          </div>
          <ChevronDown className="text-gray-600" size={20} />
        </div>
      </div>

      {/* Section 1: Pre-Match */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-[#FF6600] text-xs font-bold uppercase tracking-wider">
          <Calendar size={16} />
          <span>Pre-Match (48-24 hours before)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Tactical */}
          <Card className="bg-[#0D161E]/40 border-gray-800 p-5 rounded-xl text-white">
            <h4 className="font-bold text-sm mb-4">Tactical Preparation</h4>
            <ul className="space-y-3">
              <li className="text-[12px] text-gray-400 flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                Study opponent's right-back weaknesses
              </li>
              <li className="text-[12px] text-gray-400 flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                Practice cut-inside shots from left wing
              </li>
              <li className="text-[12px] text-gray-400 flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                Rehearse set-piece routines
              </li>
            </ul>
          </Card>

          {/* Physical */}
          <Card className="bg-[#0D161E]/40 border-gray-800 p-5 rounded-xl text-white">
            <h4 className="font-bold text-sm mb-4">Physical Preparation</h4>
            <ul className="space-y-3">
              <li className="text-[12px] text-gray-400 flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                Light jogging: 20 minutes
              </li>
              <li className="text-[12px] text-gray-400 flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                Dynamic stretching: 15 minutes
              </li>
              <li className="text-[12px] text-gray-400 flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                Mobility drills: 10 minutes
              </li>
            </ul>
          </Card>

          {/* Nutrition */}
          <Card className="bg-[#0D161E]/40 border-gray-800 p-5 rounded-xl text-white">
            <h4 className="font-bold text-sm mb-4">Nutrition Plan</h4>
            <ul className="space-y-3">
              <li className="text-[12px] text-gray-400 flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                Carb loading: Start 48h before
              </li>
              <li className="text-[12px] text-gray-400 flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                Hydration: 500ml every 2 hours
              </li>
              <li className="text-[12px] text-gray-400 flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                Last meal: 3 hours before kickoff
              </li>
            </ul>
          </Card>
        </div>
      </div>

      {/* Section 2: Match Day Warmup */}
      <Card className="bg-[#0D161E]/40 border-gray-800 p-6 rounded-xl text-white">
        <h3 className="text-sm font-bold uppercase tracking-wider mb-6">
          Match Day Warmup
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex justify-between items-baseline">
              <span className="text-gray-500 text-xs">Duration</span>
              <span className="text-lg font-bold">45 minutes</span>
            </div>
            <div className="space-y-2">
              <span className="text-white text-xs font-bold block">
                Sequence:
              </span>
              <p className="text-[12px] text-gray-400 leading-relaxed">
                Light jog &rarr; Dynamic stretch &rarr; Position drills &rarr;
                Team drills
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <span className="text-white text-xs font-bold block">
              Key Focus:
            </span>
            <ul className="space-y-2">
              <li className="text-[12px] text-gray-400">
                First touch precision
              </li>
              <li className="text-[12px] text-gray-400">
                Maintain mental calmness and visualize success
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Section 3: Post-Match Recovery */}
      <Card className="bg-[#0D161E]/40 border-gray-800 p-6 rounded-xl text-white">
        <h3 className="text-sm font-bold uppercase tracking-wider mb-6">
          Post-Match Recovery
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <h4 className="text-white text-xs font-bold">Immediate (0-2h):</h4>
            <p className="text-[12px] text-gray-400  font-light">
              Hydrate + Protein shake + Light stretch
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-white text-xs font-bold">24-hour plan:</h4>
            <p className="text-[12px] text-gray-400  font-light">
              Active recovery walk + Compression gear + Nutrition refuel
            </p>
          </div>
        </div>
      </Card>

      {/* Section 4: Psychological Components */}
      <Card className="bg-[#0F0D15] border-[#9C3DFF]/20 p-6 rounded-xl text-white shadow-[0_0_20px_rgba(156,61,255,0.05)]">
        <div className="flex items-center gap-2 mb-6">
          <div className="p-1.5 bg-[#9C3DFF]/10 rounded border border-[#9C3DFF]/20">
            <Brain className="text-[#9C3DFF]" size={16} />
          </div>
          <h3 className="text-sm font-bold uppercase tracking-wider">
            Psychological Components
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-1">
            <span className="text-white text-[11px] font-bold block">
              Visualization:
            </span>
            <span className="text-[11px] text-gray-500">
              Imagine successful dribbles past defender
            </span>
          </div>
          <div className="space-y-1">
            <span className="text-white text-[11px] font-bold block">
              Focus exercise:
            </span>
            <span className="text-[11px] text-gray-500">
              5-minute breathing routine
            </span>
          </div>
          <div className="space-y-1">
            <span className="text-white text-[11px] font-bold block">
              Stress management:
            </span>
            <span className="text-[11px] text-gray-500">
              Positive self-talk script
            </span>
          </div>
        </div>
      </Card>

      {/* Footer Info */}
      <div className="bg-[#0D1117] border border-gray-800 p-3 rounded-lg flex items-center gap-3">
        <Info size={16} className="text-gray-600 shrink-0" />
        <p className="text-gray-500 text-[10px] leading-relaxed">
          Match preparation guidance only. Always consult with your coach and
          medical team for personalized plans.
        </p>
      </div>
    </div>
  );
};

export default MatchPreparationSystem;
