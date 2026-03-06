/* eslint-disable @typescript-eslint/no-explicit-any */
import { Save, BarChart3 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const AlternativeOffersForm = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      offer1ClubName: "",
      offer1BaseSalary: "",
      offer1Bonuses: "",
      offer1Term: "",
      offer1PlayingTime: "",
      offer2ClubName: "",
      offer2BaseSalary: "",
      offer2Bonuses: "",
      offer2Term: "",
      offer2PlayingTime: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Alternative Offers Data:", data);
    toast.success("Alternative offers saved successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20"
    >
      {/* AI Analyzer Info Box */}
      <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-2xl p-4 flex items-center gap-4">
        <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 hidden sm:block">
          <BarChart3 size={18} />
        </div>
        <p className="text-[11px] sm:text-[12px] text-gray-300 leading-relaxed">
          <span className="text-cyan-400 font-bold">Scenario Comparison</span> -
          Input alternative offers to compare side-by-side with AI-powered
          insights.
        </p>
      </div>

      {/* Alternative Offer #1 */}
      <div className="bg-[#11161D]/40 border border-gray-800/60 rounded-[32px] p-8">
        <h3 className="text-[14px] font-bold text-white mb-6">
          Alternative Offer #1
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500 tracking-widest pl-1">
              Club Name
            </label>
            <input
              {...register("offer1ClubName")}
              type="text"
              placeholder="Bayern Munich"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-700"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500 tracking-widest pl-1">
              Base Salary
            </label>
            <input
              {...register("offer1BaseSalary")}
              type="text"
              placeholder="€100,000/week"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-700"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500 tracking-widest pl-1">
              Total Bonuses (Est.)
            </label>
            <input
              {...register("offer1Bonuses")}
              type="text"
              placeholder="€150,000/year"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-700"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500 tracking-widest pl-1">
              Contract Term
            </label>
            <input
              {...register("offer1Term")}
              type="text"
              placeholder="4 years"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-700"
            />
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-[11px] font-bold text-gray-500 tracking-widest pl-1">
              Expected Playing Time
            </label>
            <input
              {...register("offer1PlayingTime")}
              type="text"
              placeholder="Rotation player (60% starting probability)"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-700"
            />
          </div>
        </div>
      </div>

      {/* Alternative Offer #2 */}
      <div className="bg-[#11161D]/40 border border-gray-800/60 rounded-[32px] p-8">
        <h3 className="text-[14px] font-bold text-white mb-6">
          Alternative Offer #2
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500 tracking-widest pl-1">
              Club Name
            </label>
            <input
              {...register("offer2ClubName")}
              type="text"
              placeholder="Atletico Madrid"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-700"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500 tracking-widest pl-1">
              Base Salary
            </label>
            <input
              {...register("offer2BaseSalary")}
              type="text"
              placeholder="€90,000/week"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-700"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500 tracking-widest pl-1">
              Total Bonuses (Est.)
            </label>
            <input
              {...register("offer2Bonuses")}
              type="text"
              placeholder="€200,000/year"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-700"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500 tracking-widest pl-1">
              Contract Term
            </label>
            <input
              {...register("offer2Term")}
              type="text"
              placeholder="2 years"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-700"
            />
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-[11px] font-bold text-gray-500 tracking-widest pl-1">
              Expected Playing Time
            </label>
            <input
              {...register("offer2PlayingTime")}
              type="text"
              placeholder="Key player (85% starting probability)"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-700"
            />
          </div>
        </div>
      </div>

      {/* Form Action */}
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

export default AlternativeOffersForm;
