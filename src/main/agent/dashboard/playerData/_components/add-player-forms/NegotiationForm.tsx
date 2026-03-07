/* eslint-disable @typescript-eslint/no-explicit-any */
import { Save, DollarSign } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const NegotiationForm = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      prioritySalary: "",
      priorityBonuses: "",
      priorityImageRights: "",
      priorityOptionYears: "",
      willingToConcede: "",
      notWillingToConcede: "",
      keyTalkingPoints: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Negotiation Data:", data);
    toast.success("Negotiation strategies saved!");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20"
    >
      {/* AI Analyzer Info Box */}
      <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-2xl p-4 flex items-center gap-4">
        <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 hidden sm:block">
          <DollarSign size={18} />
        </div>
        <p className="text-[11px] sm:text-[12px] text-gray-300 leading-relaxed">
          <span className="text-cyan-400 font-bold">
            Negotiation Preparation
          </span>{" "}
          - Define priorities and strategies for upcoming contract discussions.
        </p>
      </div>

      {/* Priorities Grid */}
      <div className="bg-[#11161D]/40 border border-gray-800/60 rounded-[32px] p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs text-gray-300 capitalize tracking-widest pl-1">
              Priority: Salary (1-10)
            </label>
            <input
              {...register("prioritySalary")}
              type="text"
              placeholder="9"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-700"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs text-gray-300 capitalize tracking-widest pl-1">
              Priority: Bonuses (1-10)
            </label>
            <input
              {...register("priorityBonuses")}
              type="text"
              placeholder="7"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-700"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs text-gray-300 capitalize tracking-widest pl-1">
              Priority: Image Rights (1-10)
            </label>
            <input
              {...register("priorityImageRights")}
              type="text"
              placeholder="8"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-700"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs text-gray-300 capitalize tracking-widest pl-1">
              Priority: Option Years (1-10)
            </label>
            <input
              {...register("priorityOptionYears")}
              type="text"
              placeholder="6"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-700"
            />
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-xs text-gray-300 capitalize tracking-widest pl-1">
              Willing to Concede
            </label>
            <textarea
              {...register("willingToConcede")}
              placeholder="e.g., Reduce signing bonus by 25%, Accept 1 additional commercial appearance"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-4 text-sm text-white focus:border-cyan-500/50 outline-none transition-all min-h-[100px] resize-none placeholder:text-gray-700"
            ></textarea>
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-xs text-gray-300 capitalize tracking-widest pl-1">
              Not Willing to Concede
            </label>
            <textarea
              {...register("notWillingToConcede")}
              placeholder="e.g., Performance-based salary reductions, Unilateral option years"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-4 text-sm text-white focus:border-cyan-500/50 outline-none transition-all min-h-[100px] resize-none placeholder:text-gray-700"
            ></textarea>
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-xs text-gray-300 capitalize tracking-widest pl-1">
              Key Talking Points
            </label>
            <textarea
              {...register("keyTalkingPoints")}
              placeholder="e.g., Player's 15 assists ranked 3rd in league, 89% pass completion (top 10%), Leadership qualities"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-4 text-sm text-white focus:border-cyan-500/50 outline-none transition-all min-h-[120px] resize-none placeholder:text-gray-700"
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

export default NegotiationForm;
