/* eslint-disable @typescript-eslint/no-explicit-any */
import { Save, Calendar } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const CareerTimelineForm = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      careerMilestones: "",
      transferHistory: "",
      careerGoals: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Career Timeline Data:", data);
    toast.success("Career timeline updated!");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20"
    >
      <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-2xl p-4 flex items-center gap-4">
        <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 hidden sm:block">
          <Calendar size={18} />
        </div>
        <p className="text-[11px] sm:text-[12px] text-gray-300 leading-relaxed">
          <span className="text-cyan-400 font-bold">
            Career Timeline Planner
          </span>{" "}
          - Strategic contract decisions based on career phase and future goals.
        </p>
      </div>

      <div className="bg-[#11161D]/40 border border-gray-800/60 rounded-[32px] p-8 space-y-6">
        <div className="flex flex-col gap-2">
          <label className="text-[11px] font-bold text-gray-500 tracking-widest pl-1">
            Career Milestones
          </label>
          <textarea
            {...register("careerMilestones")}
            placeholder="e.g., First team debut 2020, International debut 2023, Premier League debut 2024"
            className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-4 text-sm text-white focus:border-cyan-500/50 outline-none transition-all min-h-[120px] resize-none placeholder:text-gray-700"
          ></textarea>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[11px] font-bold text-gray-500 tracking-widest pl-1">
            Transfer History
          </label>
          <textarea
            {...register("transferHistory")}
            placeholder="e.g., 2020: Youth Academy to First Team, 2022: Loan to Championship club"
            className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-4 text-sm text-white focus:border-cyan-500/50 outline-none transition-all min-h-[120px] resize-none placeholder:text-gray-700"
          ></textarea>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[11px] font-bold text-gray-500 tracking-widest pl-1">
            Career Goals
          </label>
          <textarea
            {...register("careerGoals")}
            placeholder="e.g., Win Premier League, Play in Champions League, National team starter"
            className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-4 text-sm text-white focus:border-cyan-500/50 outline-none transition-all min-h-[120px] resize-none placeholder:text-gray-700"
          ></textarea>
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

export default CareerTimelineForm;
