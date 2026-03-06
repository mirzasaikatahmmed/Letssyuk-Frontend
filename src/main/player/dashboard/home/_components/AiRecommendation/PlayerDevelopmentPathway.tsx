import { Card } from "@/components/ui/card";
import {
  TrendingUp,
  Info,
  ChevronDown,
  ChevronLeft,
  Clock,
  Target,
  Calendar,
} from "lucide-react";
import { useNavigate } from "react-router";

const PlayerDevelopmentPathway = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0B0E14] text-white p-6 space-y-6 min-h-screen font-sans">
      {/* Top Header with Back Button */}
      <div className="grid grid-cols-12 items-center gap-4 mb-2">
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

        <div className="flex items-center justify-between gap-4 flex-1 bg-[#111111] border border-gray-800 p-4 rounded-xl col-span-8 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-[#101A15] rounded-lg border border-[#1ACB6C]/20 hidden md:block">
              <TrendingUp className="text-[#1ACB6C]" size={24} />
            </div>
            <div>
              <h2 className="text-lg font-bold leading-none mb-1">
                Player Development Pathway
              </h2>
              <p className="text-gray-500 text-xs leading-none">
                Long-term career progression planning
              </p>
            </div>
          </div>
          <ChevronDown className="text-gray-600" size={20} />
        </div>
      </div>

      {/* Section 1: Development Plans (3, 6, 12 Months) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* 3-Month Plan */}
        <Card className="bg-[#0D161E]/40 border-gray-800 p-5 rounded-xl text-white space-y-6">
          <div className="flex items-center gap-2">
            <Clock className="text-green-500" size={18} />
            <h3 className="text-xs font-bold uppercase tracking-widest">
              3-Month Plan
            </h3>
          </div>
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-white text-[11px] font-bold block">
                Skill Priorities:
              </span>
              <p className="text-[11px] text-gray-400">
                Weak foot, defensive positioning
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-white text-[11px] font-bold block">
                Performance Benchmarks:
              </span>
              <p className="text-[11px] text-gray-400">
                85% pass accuracy, 5 goals/assists
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-white text-[11px] font-bold block">
                Training Focus:
              </span>
              <p className="text-[11px] text-gray-400">
                Technical repetition, tactical understanding
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-white text-[11px] font-bold block">
                Success Indicators:
              </span>
              <p className="text-[11px] text-gray-400">
                Consistent starting position, improved stats
              </p>
            </div>
          </div>
        </Card>

        {/* 6-Month Plan */}
        <Card className="bg-[#0D161E]/40 border-gray-800 p-5 rounded-xl text-white space-y-6">
          <div className="flex items-center gap-2">
            <Calendar className="text-blue-500" size={18} />
            <h3 className="text-xs font-bold uppercase tracking-widest">
              6-Month Plan
            </h3>
          </div>
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-white text-[11px] font-bold block">
                Milestones:
              </span>
              <p className="text-[11px] text-gray-400">
                Secure starting spot, improve fitness metrics
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-white text-[11px] font-bold block">
                Skill Targets:
              </span>
              <p className="text-[11px] text-gray-400">
                Master 3 new dribbling moves
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-white text-[11px] font-bold block">
                Physical Goals:
              </span>
              <p className="text-[11px] text-gray-400">
                Increase stamina by 15%
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-white text-[11px] font-bold block">
                Tactical Targets:
              </span>
              <p className="text-[11px] text-gray-400">
                Understand multiple formations
              </p>
            </div>
          </div>
        </Card>

        {/* 12-Month Plan */}
        <Card className="bg-[#0D161E]/40 border-gray-800 p-5 rounded-xl text-white space-y-6">
          <div className="flex items-center gap-2">
            <Target className="text-red-500" size={18} />
            <h3 className="text-xs font-bold uppercase tracking-widest">
              12-Month Plan
            </h3>
          </div>
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-white text-[11px] font-bold block">
                Season Objectives:
              </span>
              <p className="text-[11px] text-gray-400">
                10+ goals/assists, team leadership
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-white text-[11px] font-bold block">
                Performance Benchmarks:
              </span>
              <p className="text-[11px] text-gray-400">Elite level metrics</p>
            </div>
            <div className="space-y-1">
              <span className="text-white text-[11px] font-bold block">
                Career Steps:
              </span>
              <p className="text-[11px] text-gray-400">
                Move to higher division
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-white text-[11px] font-bold block">
                Level Advancement:
              </span>
              <p className="text-[11px] text-gray-400">Professional contract</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Section 2: Long-Term Pathway */}
      <Card className="bg-[#0D161E]/40 border-gray-800 p-6 rounded-xl text-white">
        <h3 className="text-xs font-bold uppercase tracking-widest mb-6">
          LONG-TERM PATHWAY
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <span className="text-white text-[11px] font-bold block uppercase opacity-70">
              Career Phases:
            </span>
            <p className="text-[11px] text-gray-400">
              Development (18-21), Peak (22-28), Leadership (29+)
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-white text-[11px] font-bold block uppercase opacity-70">
              Development Trajectory:
            </span>
            <p className="text-[11px] text-gray-400">
              Academy &rarr; Reserve &rarr; First team &rarr; International
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-white text-[11px] font-bold block uppercase opacity-70">
              Next Steps:
            </span>
            <p className="text-[11px] text-gray-400">
              European exposure, national team consideration
            </p>
          </div>
        </div>
      </Card>

      {/* Section 3: Tracking & Monitoring */}
      <Card className="bg-[#0D161E]/40 border-gray-800 p-6 rounded-xl text-white">
        <h3 className="text-xs font-bold uppercase tracking-widest mb-6">
          TRACKING & MONITORING
        </h3>
        <div className="space-y-4">
          <div className="space-y-1">
            <span className="text-white text-[11px] font-bold block uppercase opacity-70">
              Progress Metrics:
            </span>
            <p className="text-[11px] text-gray-400">
              Monthly performance reviews
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-white text-[11px] font-bold block uppercase opacity-70">
              Review Points:
            </span>
            <p className="text-[11px] text-gray-400">End of each phase</p>
          </div>
          <div className="space-y-1">
            <span className="text-white text-[11px] font-bold block uppercase opacity-70">
              Adjustment Protocols:
            </span>
            <p className="text-[11px] text-gray-400">
              Modify based on performance
            </p>
          </div>
        </div>
      </Card>

      {/* Footer Info */}
      <div className="bg-[#0D1117] border border-gray-800 p-3 rounded-lg flex items-center gap-3">
        <Info size={16} className="text-gray-600 shrink-0" />
        <p className="text-gray-500 text-[10px] leading-relaxed">
          Career planning guidance. Results depend on many factors including
          performance, opportunities, and external circumstances.
        </p>
      </div>
    </div>
  );
};

export default PlayerDevelopmentPathway;
