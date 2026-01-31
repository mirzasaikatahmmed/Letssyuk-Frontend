/* eslint-disable react-hooks/incompatible-library */
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Info, Save, ChevronLeft, ChevronRight } from "lucide-react";
import { useOnboarding } from "@/context/OnboardingContext";

type FormValues = {
  matches: number;
  timeframe: string;
  avgMinutes: string;
  goals: number;
  assists: number;
  cleanSheets: number;
  competitionLevel: string;
};

const CareerHistory = () => {
  const navigate = useNavigate();
  const { data, updateStep } = useOnboarding();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: data.careerHistory || {
      matches: 0,
      goals: 0,
      assists: 0,
      cleanSheets: 0,
      timeframe: "This Season",
    },
  });

  const onSubmit = (values: FormValues) => {
    updateStep("careerHistory", values);



    navigate("../physical-development");
  };

  const onSaveLater = (values: FormValues) => {
    updateStep("careerHistory", values);
  };

  return (
    <div className=" p-4 text-white min-h-screen">
      <h2 className="text-xl font-bold mb-10">Career & Match History</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#0b1219] border border-slate-800 rounded-2xl p-8 space-y-8 shadow-2xl"
      >
        {/* Info Box */}
        <div className="flex gap-3 bg-[#0d1e21] border border-cyan-900/40 p-4 rounded-xl items-center">
          <Info className="text-cyan-500 shrink-0" size={20} />
          <p className="text-cyan-100/70 text-xs leading-relaxed">
            Your match history helps our AI understand your playing experience
            and performance trends. This data is used for career insights only.
          </p>
        </div>

        <div className="space-y-6">
          {/* Matches & Timeframe Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-gray-300 text-sm font-medium">
                Matches played *
              </label>
              <input
                type="number"
                {...register("matches", { required: "Required" })}
                className="w-full bg-[#111820] border border-slate-800 rounded-xl px-4 py-3.5 outline-none focus:border-cyan-500/50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-gray-300 text-sm font-medium">
                Time Frame *
              </label>
              <div className="relative">
                <select
                  {...register("timeframe")}
                  className="w-full bg-[#111820] border border-slate-800 rounded-xl px-4 py-3.5 outline-none focus:border-cyan-500/50 appearance-none"
                >
                  <option value="This Season">This Season</option>
                  <option value="Last 5 Matches">Last 5 Matches</option>
                  <option value="Last 10 Matches">Last 10 Matches</option>
                  <option value="Last 12 Matches">Last 12 Matches</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  <ChevronRight className="rotate-90" size={18} />
                </div>
              </div>
            </div>
          </div>

          {/* Avg Minutes */}
          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-medium">
              Average minutes played per match
            </label>
            <input
              type="text"
              placeholder="e.g., 75"
              {...register("avgMinutes")}
              className="w-full bg-[#111820] border border-slate-800 rounded-xl px-4 py-3.5 outline-none focus:border-cyan-500/50"
            />
          </div>

          {/* Performance Statistics Grid */}
          <div className="space-y-4 pt-4">
            <h3 className="text-lg font-semibold">Performance Statistics</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-gray-300 text-sm font-medium">
                  Goals
                </label>
                <input
                  type="number"
                  {...register("goals")}
                  className="w-full bg-[#111820] border border-slate-800 rounded-xl px-4 py-3.5 outline-none focus:border-cyan-500/50 text-center"
                />
              </div>
              <div className="space-y-2">
                <label className="text-gray-300 text-sm font-medium">
                  Assists
                </label>
                <input
                  type="number"
                  {...register("assists")}
                  className="w-full bg-[#111820] border border-slate-800 rounded-xl px-4 py-3.5 outline-none focus:border-cyan-500/50 text-center"
                />
              </div>
              <div className="space-y-2">
                <label className="text-gray-300 text-sm font-medium">
                  Clean Sheets
                </label>
                <input
                  type="number"
                  {...register("cleanSheets")}
                  className="w-full bg-[#111820] border border-slate-800 rounded-xl px-4 py-3.5 outline-none focus:border-cyan-500/50 text-center"
                />
              </div>
            </div>
            <p className="text-gray-500 text-xs italic">
              Enter the most relevant stats for your position
            </p>
          </div>

          {/* Competition Level - Updated with Screenshot Options */}
          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-medium">
              Competition Level *
            </label>
            <div className="relative">
              <select
                {...register("competitionLevel", {
                  required: "Competition level is required",
                })}
                className={`w-full bg-[#111820] border ${errors.competitionLevel ? "border-red-500" : "border-slate-800"} rounded-xl px-4 py-3.5 outline-none focus:border-cyan-500/50 appearance-none`}
              >
                <option value="">Select competition level</option>
                <option value="Youth academy (U18/U21)">
                  Youth academy (U18/U21)
                </option>
                <option value="Professional Academy">
                  Professional Academy
                </option>
                <option value="Semi-Professional">Semi-Professional</option>
                <option value="League Two">League Two</option>
                <option value="League One">League One</option>
                <option value="League Championship">League Championship</option>
                <option value="Premier League">Premier League</option>
                <option value="National League">National League</option>
                <option value="Grassroots/Amateur">Grassroots/Amateur</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                <ChevronRight className="rotate-90" size={18} />
              </div>
            </div>
            {errors.competitionLevel && (
              <p className="text-red-500 text-xs mt-1">
                {errors.competitionLevel.message}
              </p>
            )}
          </div>
        </div>
            {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-10">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-slate-800 text-gray-300 hover:bg-slate-800 transition-all text-sm font-medium"
        >
          <ChevronLeft size={18} /> Back
        </button>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={handleSubmit(onSaveLater)}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-slate-800 text-gray-300 hover:bg-slate-800 transition-all text-sm font-medium cursor-pointer"
          >
            Save & Continue Later <Save size={16} />
          </button>

          <button
            type="submit"
            className="flex items-center gap-2 px-8 py-2.5 rounded-xl bg-[#234b52] hover:bg-[#2d5f68] text-cyan-100 transition-all text-sm font-medium shadow-lg cursor-pointer"
          >
            Continue <ChevronRight size={18} />
          </button>
        </div>
      </div>
      </form>

  
    </div>
  );
};

export default CareerHistory;
