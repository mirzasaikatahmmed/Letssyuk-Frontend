/* eslint-disable react-hooks/incompatible-library */
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Info, Save, ChevronLeft, ChevronRight } from "lucide-react";
import { useOnboarding } from "@/context/OnboardingContext";

type FormValues = {
  primaryPosition: string;
  secondaryPosition: string;
  clubStatus: string;
  playingLevel: string;
  dominantFoot: string;
};

const secondaryPositions = [
  "Goalkeeper",
  "Centre-Back",
  "Left-Back",
  "Right-Back",
  "Defensive Midfielder",
  "Central Midfielder",
  "Attacking Midfielder",
  "Left Winger",
  "Right Winger",
  "Striker",
];

const FootballProfile = () => {
  const navigate = useNavigate();
  const { data, updateStep } = useOnboarding();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: data.footballProfile,
  });

  const selectedFoot = watch("dominantFoot");
  const selectedSecondary = watch("secondaryPosition");

  const onSubmit = (values: FormValues) => {
    updateStep("footballProfile", values);


    navigate("../career-history");
  };

  const onSaveLater = (values: FormValues) => {
    updateStep("footballProfile", values);
    alert("Football profile saved. You can continue later.");
  };

  return (
    <div className=" p-4 text-white">
      <h2 className="text-xl font-bold mb-10">Football Profile</h2>

      <form
        id="football-form"
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#0b1219] border border-slate-800 rounded-2xl p-8 space-y-8 shadow-2xl"
      >
        <div className="flex gap-3 bg-[#0d1e21] border border-cyan-900/40 p-4 rounded-xl items-center">
          <Info className="text-cyan-500 shrink-0" size={20} />
          <p className="text-cyan-100/70 text-xs leading-relaxed">
            Your football profile helps us match you with the right
            opportunities and provide position-specific development guidance.
          </p>
        </div>

        <div className="space-y-6">
          {/* Primary Position - Updated with Image Options */}
          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-medium">
              Primary Position*
            </label>
            <select
              {...register("primaryPosition", {
                required: "Primary position is required",
              })}
              className={`w-full bg-[#111820] border ${
                errors.primaryPosition ? "border-red-500" : "border-slate-800"
              } rounded-xl px-4 py-3.5 outline-none focus:border-cyan-500/50 appearance-none`}
            >
              <option value="">Select Primary Position</option>
              <option value="Goalkeeper">Goalkeeper</option>
              <option value="Centre-Back">Centre-Back</option>
              <option value="Right-Back">Right-Back</option>
              <option value="Defensive Midfielder">Defensive Midfielder</option>
              <option value="Central Midfielder">Central Midfielder</option>
              <option value="Attacking Midfielder">Attacking Midfielder</option>
              <option value="Left Winger">Left Winger</option>
              <option value="Right Winger">Right Winger</option>
              <option value="Striker">Striker</option>
              <option value="Second Striker">Second Striker</option>
            </select>
            {errors.primaryPosition && (
              <p className="text-red-500 text-xs mt-1">
                {errors.primaryPosition.message}
              </p>
            )}
          </div>

          {/* Secondary Position */}
          <div className="space-y-3">
            <label className="text-gray-300 text-sm font-medium">
              Secondary Position (Optional)
            </label>
            <div className="grid grid-cols-2 gap-3">
              {secondaryPositions.map((pos) => (
                <button
                  key={pos}
                  type="button"
                  onClick={() => setValue("secondaryPosition", pos)}
                  className={`py-3 px-4 rounded-xl border text-sm transition-all ${
                    selectedSecondary === pos
                      ? "bg-cyan-400 text-black border-cyan-400 font-bold"
                      : "bg-[#111820] border-slate-800 text-gray-400 hover:border-slate-700"
                  }`}
                >
                  {pos}
                </button>
              ))}
            </div>
            <input type="hidden" {...register("secondaryPosition")} />
          </div>

          {/* Club Status */}
          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-medium">
              Current Club or Status*
            </label>
            <input
              {...register("clubStatus", {
                required: "Club status is required",
              })}
              placeholder='e.g., "Manchester United U23" or "Free Agent"'
              className={`w-full bg-[#111820] border ${
                errors.clubStatus ? "border-red-500" : "border-slate-800"
              } rounded-xl px-4 py-3.5 outline-none focus:border-cyan-500/50`}
            />
          </div>

          {/* Playing Level - Updated with Image Options */}
          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-medium">
              Playing Level*
            </label>
            <select
              {...register("playingLevel", {
                required: "Playing level is required",
              })}
              className={`w-full bg-[#111820] border ${
                errors.playingLevel ? "border-red-500" : "border-slate-800"
              } rounded-xl px-4 py-3.5 outline-none focus:border-cyan-500/50 appearance-none`}
            >
              <option value="">Select playing level</option>
              <option value="Academy">Academy</option>
              <option value="Semi-Professional">Semi-Professional</option>
              <option value="Professional">Professional</option>
              <option value="Free Agent">Free Agent</option>
            </select>
            {errors.playingLevel && (
              <p className="text-red-500 text-xs mt-1">
                {errors.playingLevel.message}
              </p>
            )}
          </div>

          {/* Dominant Foot */}
          <div className="space-y-3">
            <label className="text-gray-300 text-sm font-medium">
              Dominant Foot*
            </label>
            <div className="flex gap-4">
              {["Left", "Right", "Both"].map((foot) => (
                <button
                  key={foot}
                  type="button"
                  onClick={() =>
                    setValue("dominantFoot", foot, { shouldValidate: true })
                  }
                  className={`flex-1 py-3 rounded-xl border transition-all ${
                    selectedFoot === foot
                      ? "bg-cyan-400 text-black border-cyan-400 font-bold"
                      : "bg-[#111820] border-slate-800 text-gray-400 hover:border-slate-700"
                  }`}
                >
                  {foot}
                </button>
              ))}
            </div>
            <input
              type="hidden"
              {...register("dominantFoot", {
                required: "Please select your dominant foot",
              })}
            />
            {errors.dominantFoot && (
              <p className="text-red-500 text-xs mt-1">
                {errors.dominantFoot.message}
              </p>
            )}
          </div>
        </div>
      </form>

      <div className="flex justify-between items-center mt-10">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-slate-800 text-gray-300 hover:bg-slate-800 transition-all"
        >
          <ChevronLeft size={18} /> Back
        </button>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={handleSubmit(onSaveLater)}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-slate-800 text-gray-300 hover:bg-slate-800 transition-all cursor-pointer"
          >
            Save & Continue Later <Save size={16} />
          </button>

          <button
            type="submit"
            form="football-form"
            className="flex items-center gap-2 px-8 py-2.5 rounded-xl bg-[#234b52] hover:bg-[#2d5f68] text-cyan-100 transition-all font-medium cursor-pointer"
          >
            Continue <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FootballProfile;
