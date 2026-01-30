import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Save } from "lucide-react";

type FormValues = {
  matches: number;
  timeframe: string;
  avgMinutes: number;
  goals: number;
  assists: number;
  cleanSheets: number;
  competitionLevel: string;
};

const CareerHistory = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("Final submit", data);
  };

  return (
    <div className="p-4">
      <h2 className="text-white font-bold text-lg mb-4">
        Career & Match History
      </h2>
      <form
        id="career-history-form"
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#0b1219] border border-slate-800 rounded-xl p-8 space-y-6 shadow-2xl"
      >
        <div className="space-y-5">
          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-medium">
              Matches Played
            </label>
            <input
              type="number"
              {...register("matches")}
              placeholder="Matches Played"
              className="w-full bg-[#161d26] border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-medium">
              Timeframe
            </label>
            <select
              {...register("timeframe")}
              className="w-full bg-[#161d26] border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none"
            >
              <option>This Season</option>
              <option>Last Season</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-medium">
              Avg minutes per match
            </label>
            <input
              type="number"
              {...register("avgMinutes")}
              placeholder="Avg minutes"
              className="w-full bg-[#161d26] border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-2">
              <label className="text-gray-300 text-xs font-medium">Goals</label>
              <input
                type="number"
                {...register("goals")}
                placeholder="0"
                className="w-full bg-[#161d26] border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none text-center"
              />
            </div>
            <div className="space-y-2">
              <label className="text-gray-300 text-xs font-medium">
                Assists
              </label>
              <input
                type="number"
                {...register("assists")}
                placeholder="0"
                className="w-full bg-[#161d26] border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none text-center"
              />
            </div>
            <div className="space-y-2">
              <label className="text-gray-300 text-xs font-medium">
                Clean Sheets
              </label>
              <input
                type="number"
                {...register("cleanSheets")}
                placeholder="0"
                className="w-full bg-[#161d26] border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none text-center"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-medium">
              Competition Level
            </label>
            <select
              {...register("competitionLevel")}
              className="w-full bg-[#161d26] border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none"
            >
              <option value="">Select Level</option>
              <option>Local</option>
              <option>National</option>
              <option>International</option>
            </select>
          </div>
        </div>
      </form>

      <div className="flex justify-between items-center gap-4 pt-6">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="px-6 py-2.5 rounded-lg border border-slate-700 text-gray-300 hover:bg-slate-800 transition-all text-sm font-medium"
        >
          ← Back
        </button>

        <div className="flex gap-4">
          <button
            type="button"
            className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-slate-700 text-gray-300 hover:bg-slate-800 transition-all text-sm font-medium"
          >
            Save & Continue Later <Save size={16} />
          </button>

          <button
            type="submit"
            form="career-history-form"
            className="px-8 py-2.5 rounded-lg bg-cyan-700 hover:bg-cyan-600 text-white transition-all text-sm font-medium flex items-center gap-2"
          >
            Finish <span className="text-lg">›</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerHistory;
