/* eslint-disable @typescript-eslint/no-explicit-any */
import { Save, Compass } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const OpportunitiesForm = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      preferredLeagues: "",
      preferredCountries: "",
      targetClubs: "",
      scoutingInsights: "",
      playerPreferences: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Opportunities Data:", data);
    toast.success("Opportunities profile saved!");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20"
    >
      <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-2xl p-4 flex items-center gap-4">
        <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 hidden sm:block">
          <Compass size={18} />
        </div>
        <p className="text-[11px] sm:text-[12px] text-gray-300 leading-relaxed">
          <span className="text-cyan-400 font-bold">Opportunity Matching</span>{" "}
          - Help AI suggest suitable clubs and opportunities based on player
          preferences.
        </p>
      </div>

      <div className="bg-[#11161D]/40 border border-gray-800/60 rounded-[32px] p-8 space-y-6">
        <div className="flex flex-col gap-2">
          <label className="text-[11px] font-bold text-gray-500 tracking-widest pl-1">
            Preferred Leagues
          </label>
          <textarea
            {...register("preferredLeagues")}
            placeholder="e.g., Premier League, La Liga, Bundesliga"
            className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-4 text-sm text-white focus:border-cyan-500/50 outline-none transition-all min-h-[100px] resize-none placeholder:text-gray-700"
          ></textarea>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[11px] font-bold text-gray-500 tracking-widest pl-1">
            Preferred Countries
          </label>
          <input
            {...register("preferredCountries")}
            type="text"
            placeholder="England, Spain, Germany"
            className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-3 text-sm text-white focus:border-cyan-500/50 outline-none transition-all placeholder:text-gray-700"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[11px] font-bold text-gray-500 tracking-widest pl-1">
            Target Clubs (If Any)
          </label>
          <textarea
            {...register("targetClubs")}
            placeholder="e.g., Arsenal, Bayern Munich, AC Milan"
            className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-4 text-sm text-white focus:border-cyan-500/50 outline-none transition-all min-h-[100px] resize-none placeholder:text-gray-700"
          ></textarea>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[11px] font-bold text-gray-500 tracking-widest pl-1">
            Scouting Insights
          </label>
          <textarea
            {...register("scoutingInsights")}
            placeholder="e.g., Scout from Barcelona attended last 3 matches, Interest from Serie A clubs"
            className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-4 text-sm text-white focus:border-cyan-500/50 outline-none transition-all min-h-[100px] resize-none placeholder:text-gray-700"
          ></textarea>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[11px] font-bold text-gray-500 tracking-widest pl-1">
            Player Preferences
          </label>
          <textarea
            {...register("playerPreferences")}
            placeholder="e.g., Wants Champions League football, Family prefers southern Europe"
            className="bg-[#0B0E14] border border-gray-800/60 rounded-xl px-5 py-4 text-sm text-white focus:border-cyan-500/50 outline-none transition-all min-h-[100px] resize-none placeholder:text-gray-700"
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

export default OpportunitiesForm;
