/* eslint-disable @typescript-eslint/no-explicit-any */
import { Save, Activity } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const MonitoringForm = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      recentMatches: "",
      goals: "",
      assists: "",
      minutesPlayed: "",
      passAccuracy: "",
      averageRating: "",
      technicalProgress: "",
      physicalProgress: "",
      mentalProgress: "",
      injuryHistory: "",
      alertsNotes: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Monitoring Data:", data);
    toast.success("Monitoring updates saved!");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20"
    >
      <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-2xl p-4 flex items-center gap-4">
        <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 hidden sm:block">
          <Activity size={18} />
        </div>
        <p className="text-[11px] sm:text-[12px] text-gray-300 leading-relaxed">
          <span className="text-cyan-400 font-bold">Player Monitoring</span> -
          Track performance, development, and contract status over time.
        </p>
      </div>

      <div className="bg-[#11161D]/40 border border-gray-800/60 rounded-[32px] p-8 space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500 tracking-widest pl-1">
              Recent Matches
            </label>
            <input
              {...register("recentMatches")}
              type="text"
              placeholder="25"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-700"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500 tracking-widest pl-1">
              Goals
            </label>
            <input
              {...register("goals")}
              type="text"
              placeholder="12"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-700"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500 tracking-widest pl-1">
              Assists
            </label>
            <input
              {...register("assists")}
              type="text"
              placeholder="7"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-700"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500 tracking-widest pl-1">
              Minutes Played
            </label>
            <input
              {...register("minutesPlayed")}
              type="text"
              placeholder="1890"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-700"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500 tracking-widest pl-1">
              Pass Accuracy %
            </label>
            <input
              {...register("passAccuracy")}
              type="text"
              placeholder="89%"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-700"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500 tracking-widest pl-1">
              Average Rating
            </label>
            <input
              {...register("averageRating")}
              type="text"
              placeholder="7.2 / 10"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-700"
            />
          </div>
        </div>

        {/* Progress Text Areas */}
        <div className="space-y-6">
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500 tracking-widest pl-1">
              Technical Progress
            </label>
            <textarea
              {...register("technicalProgress")}
              placeholder="e.g., Weak foot improved from 5/10 to 6/10, Passing accuracy increased"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-4 text-sm text-white focus:border-cyan-500/50 outline-none transition-all min-h-[100px] resize-none placeholder:text-gray-700"
            ></textarea>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500 tracking-widest pl-1">
              Physical Progress
            </label>
            <textarea
              {...register("physicalProgress")}
              placeholder="e.g., Strength increased by 15%, Stamina improved"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-4 text-sm text-white focus:border-cyan-500/50 outline-none transition-all min-h-[100px] resize-none placeholder:text-gray-700"
            ></textarea>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500 tracking-widest pl-1">
              Mental Progress
            </label>
            <textarea
              {...register("mentalProgress")}
              placeholder="e.g., Leadership qualities showing growth, Decision-making improved"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-4 text-sm text-white focus:border-cyan-500/50 outline-none transition-all min-h-[100px] resize-none placeholder:text-gray-700"
            ></textarea>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500 tracking-widest pl-1">
              Injury History
            </label>
            <textarea
              {...register("injuryHistory")}
              placeholder="e.g., Minor hamstring strain (2 weeks out, Jan 2025)"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-4 text-sm text-white focus:border-cyan-500/50 outline-none transition-all min-h-[100px] resize-none placeholder:text-gray-700"
            ></textarea>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500 tracking-widest pl-1">
              Alerts & Notes
            </label>
            <textarea
              {...register("alertsNotes")}
              placeholder="e.g., Positive: Assists trending upward, Warning: Yellow cards increased"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-4 text-sm text-white focus:border-cyan-500/50 outline-none transition-all min-h-[100px] resize-none placeholder:text-gray-700"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="flex justify-end pr-4">
        <button
          type="submit"
          className="bg-cyan-400 text-[#0B0E14] px-10 py-3 rounded-2xl font-bold text-[13px] tracking-wide flex items-center gap-3 hover:bg-cyan-300 transition-all shadow-[0_0_25px_rgba(34,211,238,0.2)] group cursor-pointer"
        >
          Save{" "}
          <Save
            size={18}
            className="group-hover:scale-110 transition-transform"
          />
        </button>
      </div>
    </form>
  );
};

export default MonitoringForm;
