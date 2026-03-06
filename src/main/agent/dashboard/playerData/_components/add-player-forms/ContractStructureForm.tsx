/* eslint-disable @typescript-eslint/no-explicit-any */
import { Upload, FileCode, Save } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const ContractStructureForm = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      baseSalary: "",
      signingBonus: "",
      appearanceBonus: "",
      goalBonus: "",
      assistBonus: "",
      performanceBonuses: "",
      escalationClauses: "",
      clubOptions: "",
      playerOptions: "",
      releaseClause: "",
      imageRightsPlayer: "30%",
      imageRightsClub: "70%",
      commercialObligations: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Contract Structure Data:", data);
    toast.success("Contract details saved successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20"
    >
      {/* AI Analyzer Info Box */}
      <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-2xl p-4 flex items-center gap-4">
        <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 hidden sm:block">
          <FileCode size={18} />
        </div>
        <p className="text-[11px] sm:text-[12px] text-gray-300 leading-relaxed">
          <span className="text-cyan-400 font-bold">
            Contract Structure Analyzer
          </span>{" "}
          - This data helps AI break down complex contracts into clear
          components for analysis and recommendations.
        </p>
      </div>

      {/* Upload Section */}
      <div className="bg-[#11161D]/40 border border-gray-800/60 rounded-[32px] p-8">
        <h3 className="text-[12px] font-bold text-gray-400 tracking-widest mb-6">
          Upload Contract Document
        </h3>
        <div className="border-2 border-dashed border-gray-800/60 rounded-3xl p-12 flex flex-col items-center justify-center gap-4 hover:border-cyan-500/30 transition-colors cursor-pointer group bg-[#0B0E14]/30">
          <div className="h-16 w-16 bg-[#11161D] rounded-2xl flex items-center justify-center text-gray-600 group-hover:text-cyan-400 transition-colors border border-gray-800">
            <Upload size={28} />
          </div>
          <div className="text-center">
            <p className="text-gray-400 text-sm font-medium">
              Upload PDF, DOCX, or Image
            </p>
            <button
              type="button"
              className="text-cyan-400 text-xs font-bold mt-1  tracking-wider hover:underline"
            >
              Browse Files
            </button>
          </div>
        </div>
      </div>

      {/* Main Form Fields */}
      <div className="bg-[#11161D]/40 border border-gray-800/60 rounded-[32px] p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {/* Full Width Field */}
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-[11px] font-bold text-gray-500  tracking-widest pl-1">
              Base Salary
            </label>
            <input
              {...register("baseSalary")}
              type="text"
              placeholder="£85,000"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-700"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500  tracking-widest pl-1">
              Signing Bonus
            </label>
            <input
              {...register("signingBonus")}
              type="text"
              placeholder="£100,000"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-700"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500  tracking-widest pl-1">
              Appearance Bonus (per match)
            </label>
            <input
              {...register("appearanceBonus")}
              type="text"
              placeholder="£2,000"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-700"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500  tracking-widest pl-1">
              Goal Bonus (per goal)
            </label>
            <input
              {...register("goalBonus")}
              type="text"
              placeholder="£10,000"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-700"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500  tracking-widest pl-1">
              Assist Bonus (per assist)
            </label>
            <input
              {...register("assistBonus")}
              type="text"
              placeholder="£5,000"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-700"
            />
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-[11px] font-bold text-gray-500  tracking-widest pl-1">
              Team Performance Bonuses
            </label>
            <textarea
              {...register("performanceBonuses")}
              placeholder="e.g., £25,000 for top 4 finish, £50,000 for Champions League qualification"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-4 text-sm text-white focus:border-cyan-500/50 outline-none transition-all min-h-[100px] resize-none placeholder:text-gray-700"
            ></textarea>
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-[11px] font-bold text-gray-500  tracking-widest pl-1">
              Escalation Clauses
            </label>
            <textarea
              {...register("escalationClauses")}
              placeholder="e.g., 10% increase if player starts 20+ matches in Year 2"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-4 text-sm text-white focus:border-cyan-500/50 outline-none transition-all min-h-[100px] resize-none placeholder:text-gray-700"
            ></textarea>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500  tracking-widest pl-1">
              Club Option Years
            </label>
            <input
              {...register("clubOptions")}
              type="text"
              placeholder="1 year at £90,000/week"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-700"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500  tracking-widest pl-1">
              Player Option Years
            </label>
            <input
              {...register("playerOptions")}
              type="text"
              placeholder="None / 1 year / etc."
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-700"
            />
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-[11px] font-bold text-gray-500  tracking-widest pl-1">
              Release Clause
            </label>
            <input
              {...register("releaseClause")}
              type="text"
              placeholder="€15 million"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-700"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500  tracking-widest pl-1">
              Image Rights - Player %
            </label>
            <input
              {...register("imageRightsPlayer")}
              type="text"
              placeholder="30%"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-700"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500  tracking-widest pl-1">
              Image Rights - Club %
            </label>
            <input
              {...register("imageRightsClub")}
              type="text"
              placeholder="70%"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-700"
            />
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-[11px] font-bold text-gray-500  tracking-widest pl-1">
              Commercial Obligations
            </label>
            <textarea
              {...register("commercialObligations")}
              placeholder="e.g., 10 mandatory sponsor appearances annually"
              className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-4 text-sm text-white focus:border-cyan-500/50 outline-none transition-all min-h-[120px] resize-none placeholder:text-gray-700"
            ></textarea>
          </div>
        </div>
      </div>

      {/* Form Action */}
      <div className="flex justify-end pr-4">
        <button
          type="submit"
          className="bg-cyan-400 text-[#0B0E14] px-10 py-3 rounded-2xl font-bold text-[13px]  tracking-wide flex items-center gap-3 hover:bg-cyan-300 transition-all shadow-[0_0_25px_rgba(34,211,238,0.2)] group cursor-pointer"
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

export default ContractStructureForm;
