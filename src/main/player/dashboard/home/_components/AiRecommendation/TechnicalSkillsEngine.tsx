import { Card } from "@/components/ui/card";
import { Info, ChevronDown, ChevronLeft, Zap } from "lucide-react";
import { useNavigate } from "react-router";
import { useGetMeQuery } from "@/redux/features/auth/authApi";
import { useGetTechnicalSkillsEngineQuery } from "@/redux/features/athlete/athleteAiApi";
import Loading from "@/components/share/Loading/Loading";

const getPriorityColor = (priority: string | null) => {
  if (!priority) return "text-gray-500";
  switch (priority.toLowerCase()) {
    case "high":
    case "critical":
      return "text-red-500";
    case "medium":
      return "text-yellow-500";
    case "low":
    default:
      return "text-green-500";
  }
};
const TechnicalSkillsEngine = () => {
  const navigate = useNavigate();

  const { data: userData } = useGetMeQuery();
  const playerId = userData?.playerOwned?.id;

  const {
    data: aiResponse,
    isLoading,
    isError,
  } = useGetTechnicalSkillsEngineQuery(playerId as string, {
    skip: !playerId,
  });

  if (isLoading || isError || !aiResponse) {
    return <Loading count={3} className="p-6" />;
  }

  const { data: techData } = aiResponse.analysis;
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

        <div className="flex items-center justify-between gap-4 flex-1 bg-[#111111] border border-gray-800 p-4 rounded-xl col-span-8">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-[#001D21] rounded-lg border border-[#00BFAE]/20 hidden md:block">
              <Zap className="text-[#00BFAE]" size={24} />
            </div>
            <div>
              <h2 className="text-lg font-bold leading-none mb-1">
                {techData.title}
              </h2>
              <p className="text-gray-500 text-xs leading-none">
                {techData.subtitle}
              </p>
            </div>
          </div>
          <ChevronDown className="text-gray-600" size={20} />
        </div>
      </div>

      {/* Technical Assessment Header */}
      <Card className="bg-[#0D161E]/40 border-gray-800 p-5 rounded-xl text-white">
        <h3 className="text-xs font-bold uppercase tracking-widest mb-1">
          Technical Assessment
        </h3>
        <p className="text-[11px] text-gray-400">
          <span className="font-bold text-gray-300">
            Assessment:{" "}
          </span>
          {techData.technical_assessment || "Initial assessment pending comprehensive data review."}
        </p>
      </Card>

      {/* Skill Ratings Section */}
      <div className="pt-4">
        <h3 className="text-xs font-bold text-white uppercase tracking-widest pl-1">
          Skill Ratings (1-10 scale)
        </h3>
        <Card className="bg-[#0B0E14] border-0">
          {techData.skill_ratings.map((skill, idx) => (
            <div key={idx} className=" relative bg-[#0D161E] border border-gray-800 p-6 rounded-xl space-y-8 mb-4">
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-bold text-gray-200">
                  {skill.skill || "Skill N/A"}
                </h4>
                <div
                  className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-black/40 border border-gray-800/50 ${getPriorityColor(
                    skill.priority
                  )}`}
                >
                  {skill.priority || "Normal"}
                </div>
              </div>

              <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-8">
                {/* Current Bar */}
                <div className="space-y-1.5">
                  <div className="flex flex-col items-baseline gap-1">
                    <span className="text-gray-500 text-[16px] font-medium">
                      Current
                    </span>
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-white text-md font-bold leading-none">
                        {skill.current || 0}
                      </span>
                      <span className="text-gray-600 text-[10px] font-bold">
                        /10
                      </span>
                    </div>
                  </div>
                  <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gray-600"
                      style={{ width: `${(skill.current || 0) * 10}%` }}
                    ></div>
                  </div>
                </div>

                {/* Target Bar */}
                <div className="space-y-1.5">
                  <div className="flex flex-col items-baseline gap-1">
                    <span className="text-gray-500 text-[16px] font-medium">
                      Target
                    </span>
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-[#00BFAE] text-md font-bold leading-none">
                        {skill.target || 0}
                      </span>
                      <span className="text-gray-600 text-[10px] font-bold">
                        /10
                      </span>
                    </div>
                  </div>
                  <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#00BFAE]"
                      style={{ width: `${(skill.target || 0) * 10}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              {idx !== techData.skill_ratings.length - 1 && (
                <div className="absolute -bottom-4 left-0 right-0 h-px bg-gray-800/30" />
              )}
            </div>
          ))}
        </Card>
      </div>

      {/* Development Plan */}
      <div className="space-y-4 pt-2">
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">
          Development Plan
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-[#0D161E]/40 border-gray-800 p-5 rounded-xl space-y-4">
            <h4 className="text-sm font-bold text-gray-200">
              Passing Mechanics
            </h4>
            <div className="space-y-3">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-white block uppercase opacity-70">
                  Drills:
                </span>
                <p className="text-[11px] text-gray-400">
                  {techData.development_plan.passing_mechanics.drills || "Pending analysis"}
                </p>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-gray-400">Frequency:</span>
                <span className="font-bold text-[#00BFAE]">
                  {techData.development_plan.passing_mechanics.frequency || "TBD"}
                </span>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-gray-400">Duration:</span>
                <span className="font-bold text-[#00BFAE]">
                  {techData.development_plan.passing_mechanics.duration || "TBD"}
                </span>
              </div>
            </div>
          </Card>

          <Card className="bg-[#0D161E]/40 border-gray-800 p-5 rounded-xl space-y-4">
            <h4 className="text-sm font-bold text-gray-200">
              Weak Foot Training
            </h4>
            <div className="space-y-3">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-white block uppercase opacity-70">
                  Drills:
                </span>
                <p className="text-[11px] text-gray-400">
                  {techData.development_plan.weak_foot_training.drills || "Pending analysis"}
                </p>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-gray-400">Frequency:</span>
                <span className="font-bold text-[#00BFAE]">
                  {techData.development_plan.weak_foot_training.frequency || "TBD"}
                </span>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-gray-400">Duration:</span>
                <span className="font-bold text-[#00BFAE]">
                  {techData.development_plan.weak_foot_training.duration || "TBD"}
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Daily Routine */}
      <Card className="bg-[#0D161E]/40 border border-[#00BFAE]/10 p-5 rounded-xl space-y-4 relative overflow-hidden">
        <div className="flex justify-between items-center relative z-10">
          <h3 className="text-xs text-white font-bold uppercase tracking-widest pl-1">
            Daily Routine
          </h3>
          <div className="text-[11px] text-white font-bold">
            Total Duration:{" "}
            <span className="text-white">
              {techData.daily_routine.total_duration || "TBD"}
            </span>
          </div>
        </div>
        <div className="space-y-2 relative z-10">
          <p className="text-[11px] text-gray-400">
            <span className="text-[#00BFAE] font-bold mr-1">• Warmup:</span> {techData.daily_routine.warmup || "Pending"}
          </p>
          <p className="text-[11px] text-gray-400">
            <span className="text-[#00BFAE] font-bold mr-1">
              • Main session:
            </span>{" "}
            {techData.daily_routine.main_session || "Pending"}
          </p>
          <p className="text-[11px] text-gray-400">
            <span className="text-[#00BFAE] font-bold mr-1">• Cooldown:</span>{" "}
            {techData.daily_routine.cooldown || "Pending"}
          </p>
        </div>
      </Card>

      {/* Progress Tracking */}
      <Card className="bg-[#0D161E]/40 border-gray-800 p-5 rounded-xl space-y-4">
        <h3 className="text-xs text-white font-bold uppercase tracking-widest pl-1">
          Progress Tracking
        </h3>
        <div className="space-y-4">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-white block uppercase opacity-70">
              Weekly targets:
            </span>
            <p className="text-[11px] text-gray-400">
              {techData.progress_tracking.weekly_targets || "Pending"}
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-white block uppercase opacity-70">
              Key metrics:
            </span>
            <p className="text-[11px] text-gray-400">
               {techData.progress_tracking.key_metrics || "Pending"}
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-white block uppercase opacity-70">
              Success indicators:
            </span>
            <p className="text-[11px] text-gray-400">
               {techData.progress_tracking.success_indicators || "Pending"}
            </p>
          </div>
        </div>
      </Card>

      {/* Footer Info */}
      <div className="bg-[#0D1117] border border-gray-800 p-3 rounded-lg flex items-center gap-3">
        <Info size={16} className="text-gray-600 shrink-0" />
        <p className="text-gray-500 text-[10px] leading-relaxed">
          Technical development guidance. Work with qualified coaches for proper
          technique and progression.
        </p>
      </div>
    </div>
  );
};

export default TechnicalSkillsEngine;
