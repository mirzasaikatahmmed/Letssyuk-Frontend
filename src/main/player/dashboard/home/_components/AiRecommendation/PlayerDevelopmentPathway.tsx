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
import { useGetMeQuery } from "@/redux/features/auth/authApi";
import { useGetPlayerDevelopmentPathwayQuery } from "@/redux/features/athlete/athleteAiApi";
import Loading from "@/components/share/Loading/Loading";

const PlayerDevelopmentPathway = () => {
  const navigate = useNavigate();

  const { data: userData } = useGetMeQuery();
  const playerId = userData?.playerOwned?.id;

  const {
    data: aiResponse,
    isLoading,
    isError,
  } = useGetPlayerDevelopmentPathwayQuery(playerId as string, {
    skip: !playerId,
  });

  if (isLoading || isError || !aiResponse) {
    return <Loading count={3} className="p-6" />;
  }

  const { data: pathwayData } = aiResponse.analysis;

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
                {pathwayData.title}
              </h2>
              <p className="text-gray-500 text-xs leading-none">
                {pathwayData.subtitle}
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
                {pathwayData.three_month_plan.skill_priorities}
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-white text-[11px] font-bold block">
                Performance Benchmarks:
              </span>
              <p className="text-[11px] text-gray-400">
                {pathwayData.three_month_plan.performance_benchmarks}
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-white text-[11px] font-bold block">
                Training Focus:
              </span>
              <p className="text-[11px] text-gray-400">
                {pathwayData.three_month_plan.training_focus}
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-white text-[11px] font-bold block">
                Success Indicators:
              </span>
              <p className="text-[11px] text-gray-400">
                {pathwayData.three_month_plan.success_indicators}
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
                {pathwayData.six_month_plan.milestones}
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-white text-[11px] font-bold block">
                Skill Targets:
              </span>
              <p className="text-[11px] text-gray-400">
                {pathwayData.six_month_plan.skill_targets}
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-white text-[11px] font-bold block">
                Physical Goals:
              </span>
              <p className="text-[11px] text-gray-400">
                {pathwayData.six_month_plan.physical_goals}
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-white text-[11px] font-bold block">
                Tactical Targets:
              </span>
              <p className="text-[11px] text-gray-400">
                {pathwayData.six_month_plan.tactical_targets}
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
                {pathwayData.twelve_month_plan.season_objectives}
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-white text-[11px] font-bold block">
                Performance Benchmarks:
              </span>
              <p className="text-[11px] text-gray-400">
                {pathwayData.twelve_month_plan.performance_benchmarks}
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-white text-[11px] font-bold block">
                Career Steps:
              </span>
              <p className="text-[11px] text-gray-400">
                {pathwayData.twelve_month_plan.career_steps}
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-white text-[11px] font-bold block">
                Level Advancement:
              </span>
              <p className="text-[11px] text-gray-400">
                {pathwayData.twelve_month_plan.level_advancement}
              </p>
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
              {pathwayData.long_term_pathway.career_phases}
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-white text-[11px] font-bold block uppercase opacity-70">
              Development Trajectory:
            </span>
            <p className="text-[11px] text-gray-400">
              {pathwayData.long_term_pathway.development_trajectory}
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-white text-[11px] font-bold block uppercase opacity-70">
              Next Steps:
            </span>
            <p className="text-[11px] text-gray-400">
              {pathwayData.long_term_pathway.next_steps}
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
              {pathwayData.tracking_monitoring.progress_metrics}
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-white text-[11px] font-bold block uppercase opacity-70">
              Review Points:
            </span>
            <p className="text-[11px] text-gray-400">
              {pathwayData.tracking_monitoring.review_points}
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-white text-[11px] font-bold block uppercase opacity-70">
              Adjustment Protocols:
            </span>
            <p className="text-[11px] text-gray-400">
              {pathwayData.tracking_monitoring.adjustment_protocols}
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
