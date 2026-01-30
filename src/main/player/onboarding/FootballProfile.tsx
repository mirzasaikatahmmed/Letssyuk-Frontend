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
    // ✅ Prefill when coming back
    defaultValues: data.footballProfile,
  });

  const selectedFoot = watch("dominantFoot");
  const selectedSecondary = watch("secondaryPosition");

  // 👉 Continue to next step
  const onSubmit = (values: FormValues) => {
    updateStep("footballProfile", values);
    navigate("../career-history");
  };

  // 👉 Save draft only
  const onSaveLater = (values: FormValues) => {
    updateStep("footballProfile", values);
    alert("Football profile saved. You can continue later.");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 text-white">
      <h2 className="text-xl font-bold mb-6">Football Profile</h2>

      <form
        id="football-form"
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#0b1219] border border-slate-800 rounded-2xl p-8 space-y-8 shadow-2xl"
      >
        {/* Info Box */}
        <div className="flex gap-3 bg-[#0d1e21] border border-cyan-900/40 p-4 rounded-xl items-center">
          <Info className="text-cyan-500 shrink-0" size={20} />
          <p className="text-cyan-100/70 text-xs leading-relaxed">
            Your football profile helps us match you with the right
            opportunities and provide position-specific development guidance.
          </p>
        </div>

        <div className="space-y-6">
          {/* Primary Position */}
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
              } rounded-xl px-4 py-3.5`}
            >
              <option value="">Select Primary Position</option>
              <option>Goalkeeper</option>
              <option>Centre-Back</option>
              <option>Striker</option>
            </select>
            {errors.primaryPosition && (
              <p className="text-red-500 text-xs">
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
                  className={`py-3 px-4 rounded-xl border text-sm ${
                    selectedSecondary === pos
                      ? "bg-cyan-400 text-black border-cyan-400"
                      : "bg-[#111820] border-slate-800 text-gray-400"
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
              className={`w-full bg-[#111820] border ${
                errors.clubStatus ? "border-red-500" : "border-slate-800"
              } rounded-xl px-4 py-3.5`}
            />
          </div>

          {/* Playing Level */}
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
              } rounded-xl px-4 py-3.5`}
            >
              <option value="">Level</option>
              <option>Amateur</option>
              <option>Professional</option>
            </select>
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
                  className={`flex-1 py-3 rounded-xl border ${
                    selectedFoot === foot
                      ? "bg-cyan-400 text-black border-cyan-400"
                      : "bg-[#111820] border-slate-800 text-gray-400"
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
              <p className="text-red-500 text-xs">
                {errors.dominantFoot.message}
              </p>
            )}
          </div>
        </div>
      </form>

      {/* Footer Buttons */}
      <div className="flex justify-between items-center mt-10">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-slate-800 text-gray-300"
        >
          <ChevronLeft size={18} /> Back
        </button>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={handleSubmit(onSaveLater)}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-slate-800 text-gray-300"
          >
            Save & Continue Later <Save size={16} />
          </button>

          <button
            type="submit"
            form="football-form"
            className="flex items-center gap-2 px-8 py-2.5 rounded-xl bg-[#234b52] text-cyan-100"
          >
            Continue <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FootballProfile;
