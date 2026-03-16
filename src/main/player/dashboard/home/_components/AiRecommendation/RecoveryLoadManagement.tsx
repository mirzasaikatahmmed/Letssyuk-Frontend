import { Card } from "@/components/ui/card";
import {
  Info,
  ChevronDown,
  ChevronLeft,
  Battery,
  Moon,
  Droplets,
  Gauge,
} from "lucide-react";
import { useNavigate } from "react-router";
import { useGetMeQuery } from "@/redux/features/auth/authApi";
import { useGetRecoveryLoadManagementQuery } from "@/redux/features/athlete/athleteAiApi";
import Loading from "@/components/share/Loading/Loading";

const RecoveryLoadManagement = () => {
  const navigate = useNavigate();

  const { data: userData } = useGetMeQuery();
  const playerId = userData?.playerOwned?.id;

  const {
    data: aiResponse,
    isLoading,
    isError,
  } = useGetRecoveryLoadManagementQuery(playerId as string, {
    skip: !playerId,
  });

  if (isLoading || isError || !aiResponse) {
    return <Loading count={3} className="p-6" />;
  }

  const { data: recoveryData } = aiResponse.analysis;

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
            <div className="p-2 bg-[#0A101C] rounded-lg border border-blue-500/20 hidden md:block">
              <Battery className="text-blue-500" size={24} />
            </div>
            <div>
              <h2 className="text-lg font-bold leading-none mb-1">
                {recoveryData.title}
              </h2>
              <p className="text-gray-500 text-xs leading-none">
                {recoveryData.subtitle}
              </p>
            </div>
          </div>
          <ChevronDown className="text-gray-600" size={20} />
        </div>
      </div>

      {/* Section 1: Sleep Optimization */}
      <Card className="bg-[#0D0B16] border-[#9C3DFF]/20 p-6 rounded-xl text-white">
        <div className="flex items-center gap-2 mb-6">
          <Moon className="text-[#9C3DFF]" size={16} />
          <h3 className="text-xs font-bold uppercase tracking-widest">
            SLEEP OPTIMIZATION
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-white text-[11px] font-bold block uppercase opacity-70">
                Duration:
              </span>
              <p className="text-[12px] text-gray-400">
                {recoveryData.sleep_optimization.duration}
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-white text-[11px] font-bold block uppercase opacity-70">
                Pre-sleep Routine:
              </span>
              <p className="text-[12px] text-gray-400">
                {recoveryData.sleep_optimization.pre_sleep_routine}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-white text-[11px] font-bold block uppercase opacity-70">
                Quality Improvement:
              </span>
              <p className="text-[12px] text-gray-400">
                {recoveryData.sleep_optimization.quality_improvement}
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-white text-[11px] font-bold block uppercase opacity-70">
                Recovery Strategies:
              </span>
              <p className="text-[12px] text-gray-400">
                {recoveryData.sleep_optimization.recovery_strategies}
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Section 2: Stretching & Mobility */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">
          STRETCHING & MOBILITY
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-[#0D161E]/40 border-gray-800 p-5 rounded-xl text-white">
            <h4 className="font-bold text-sm mb-2">Daily Routine</h4>
            <p className="text-[12px] text-gray-400">
              {recoveryData.stretching_mobility.daily_routine}
            </p>
          </Card>
          <Card className="bg-[#0D161E]/40 border-gray-800 p-5 rounded-xl text-white">
            <h4 className="font-bold text-sm mb-2">Pre-training</h4>
            <p className="text-[12px] text-gray-400">
              {recoveryData.stretching_mobility.pre_training}
            </p>
          </Card>
          <Card className="bg-[#0D161E]/40 border-gray-800 p-5 rounded-xl text-white">
            <h4 className="font-bold text-sm mb-2">Post-training</h4>
            <p className="text-[12px] text-gray-400">
              {recoveryData.stretching_mobility.post_training}
            </p>
          </Card>
          <Card className="bg-[#0D161E]/40 border-gray-800 p-5 rounded-xl text-white">
            <h4 className="font-bold text-sm mb-2">Mobility</h4>
            <p className="text-[12px] text-gray-400">
              {recoveryData.stretching_mobility.mobility}
            </p>
          </Card>
        </div>
      </div>

      {/* Section 3: Active Recovery */}
      <Card className="bg-[#0D161E]/40 border-gray-800 p-6 rounded-xl text-white">
        <h3 className="text-xs font-bold uppercase tracking-widest mb-6 px-1">
          ACTIVE RECOVERY
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-white text-[11px] font-bold block uppercase opacity-70">
                Activities:
              </span>
              <p className="text-[12px] text-gray-400">
                {recoveryData.active_recovery.activities}
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-white text-[11px] font-bold block uppercase opacity-70">
                Session:
              </span>
              <p className="text-[12px] text-gray-400">
                {recoveryData.active_recovery.session}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-white text-[11px] font-bold block uppercase opacity-70">
                Schedule:
              </span>
              <p className="text-[12px] text-gray-400">
                {recoveryData.active_recovery.schedule}
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-white text-[11px] font-bold block uppercase opacity-70">
                Regeneration:
              </span>
              <p className="text-[12px] text-gray-400">
                {recoveryData.active_recovery.regeneration}
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Section 4: Hydration & Nutrition */}
      <Card className="bg-[#0D1A15]/40 border-[#1ACB6C]/20 p-6 rounded-xl text-white">
        <div className="flex items-center gap-2 mb-6">
          <Droplets className="text-[#1ACB6C]" size={16} />
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#1ACB6C]">
            HYDRATION & NUTRITION
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-white text-[11px] font-bold block uppercase opacity-70">
                Daily Hydration:
              </span>
              <p className="text-[12px] text-gray-400">
                {recoveryData.hydration_nutrition.daily_hydration}
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-white text-[11px] font-bold block uppercase opacity-70">
                Post-training:
              </span>
              <p className="text-[12px] text-gray-400">
                {recoveryData.hydration_nutrition.post_training}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-white text-[11px] font-bold block uppercase opacity-70">
                Pre-training:
              </span>
              <p className="text-[12px] text-gray-400">
                {recoveryData.hydration_nutrition.pre_training}
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-white text-[11px] font-bold block uppercase opacity-70">
                Recovery Meals:
              </span>
              <p className="text-[12px] text-gray-400">
                {recoveryData.hydration_nutrition.recovery_meals}
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Section 5: Load vs Rest Balance */}
      <Card className="bg-[#0D161E]/40 border-[#00BFAE]/20 p-6 rounded-xl text-white shadow-[0_0_20px_rgba(0,191,174,0.05)]">
        <div className="flex items-center gap-2 mb-6">
          <Gauge className="text-[#00BFAE]" size={16} />
          <h3 className="text-xs font-bold uppercase tracking-widest">
            LOAD VS REST BALANCE
          </h3>
        </div>
        <div className="space-y-4">
          <div className="space-y-1">
            <span className="text-white text-[11px] font-bold block uppercase opacity-70">
              Load Monitoring:
            </span>
            <p className="text-[12px] text-gray-400">
              {recoveryData.load_rest_balance.load_monitoring}
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-white text-[11px] font-bold block uppercase opacity-70">
              Rest Days:
            </span>
            <p className="text-[12px] text-gray-400">
              {recoveryData.load_rest_balance.rest_days}
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-white text-[11px] font-bold block uppercase opacity-70">
              Overtraining Prevention:
            </span>
            <p className="text-[12px] text-gray-400">
              {recoveryData.load_rest_balance.overtraining_prevention}
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-white text-[11px] font-bold block uppercase opacity-70">
              Recovery Tracking:
            </span>
            <p className="text-[12px] text-gray-400">
              {recoveryData.load_rest_balance.recovery_tracking}
            </p>
          </div>
        </div>
      </Card>

      {/* Footer Info */}
      <div className="bg-[#0D1117] border border-gray-800 p-3 rounded-lg flex items-center gap-3">
        <Info size={16} className="text-gray-600 shrink-0" />
        <p className="text-gray-500 text-[10px] leading-relaxed">
          Recovery guidance only. Consult sports medicine professionals for
          personalized recovery and injury prevention plans.
        </p>
      </div>
    </div>
  );
};

export default RecoveryLoadManagement;
