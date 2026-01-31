/* eslint-disable react-hooks/incompatible-library */
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Info, Save, ChevronLeft, ChevronRight } from "lucide-react";
import { useOnboarding } from "@/context/OnboardingContext";

type FormValues = {
  height: number;
  weight: number;
  injuryHistory: string;
  strengths: string;
  areasToImprove: string;
};

const PhysicalDevelopment = () => {
  const navigate = useNavigate();
  const { data, updateStep } = useOnboarding();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: data.physicalDevelopment,
  });

  const onSubmit = (values: FormValues) => {
    updateStep("physicalDevelopment", values);
    navigate("../training-routine");
  };

  const onSaveLater = (values: FormValues) => {
    updateStep("physicalDevelopment", values);
    alert("Physical profile saved!");
  };

  return (
    <div className="p-4 text-white min-h-screen">
      <h2 className="text-xl font-bold mb-10">Physical & Development</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#0b1219] border border-slate-800 rounded-2xl p-8 space-y-8 shadow-2xl"
      >
        {/* Info Box */}
        <div className="flex gap-3 bg-[#0d1e21] border border-cyan-900/40 p-4 rounded-xl items-start">
          <Info className="text-cyan-500 shrink-0 mt-0.5" size={20} />
          <p className="text-cyan-100/70 text-xs leading-relaxed">
            Your physical profile and self-assessment help our AI provide
            personalized development recommendations and match you with suitable
            opportunities.
          </p>
        </div>

        <div className="space-y-6">
          {/* Height and Weight Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-gray-300 text-sm font-medium">
                Height (cm)*
              </label>
              <input
                type="number"
                placeholder="172"
                {...register("height", {
                  required: "Height is required",
                  min: { value: 50, message: "Please enter a valid height" },
                })}
                className={`w-full bg-[#111820] border ${errors.height ? "border-red-500" : "border-slate-800"} rounded-xl px-4 py-3.5 outline-none focus:border-cyan-500/50`}
              />
              {errors.height && (
                <p className="text-red-500 text-[11px] mt-1">
                  {errors.height.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-gray-300 text-sm font-medium">
                Weight (kg) *
              </label>
              <input
                type="number"
                placeholder="75"
                {...register("weight", {
                  required: "Weight is required",
                  min: { value: 20, message: "Please enter a valid weight" },
                })}
                className={`w-full bg-[#111820] border ${errors.weight ? "border-red-500" : "border-slate-800"} rounded-xl px-4 py-3.5 outline-none focus:border-cyan-500/50`}
              />
              {errors.weight && (
                <p className="text-red-500 text-[11px] mt-1">
                  {errors.weight.message}
                </p>
              )}
            </div>
          </div>

          {/* Injury History */}
          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-medium">
              Injury history (last 12 months)*
            </label>
            <textarea
              {...register("injuryHistory", {
                required: "Injury history is required",
              })}
              placeholder="e.g., Minor hamstring strain in August 2025 (2 weeks out)"
              rows={4}
              className={`w-full bg-[#111820] border ${errors.injuryHistory ? "border-red-500" : "border-slate-800"} rounded-xl px-4 py-3.5 outline-none focus:border-cyan-500/50 resize-none placeholder:text-gray-600`}
            />
            {errors.injuryHistory && (
              <p className="text-red-500 text-[11px] mt-1">
                {errors.injuryHistory.message}
              </p>
            )}
            <p className="text-gray-500 text-[11px]">
              This helps us provide safer development recommendations
            </p>
          </div>

          {/* Self-identified strengths */}
          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-medium">
              Self-identified strengths*
            </label>
            <textarea
              {...register("strengths", { required: "Strengths are required" })}
              placeholder="e.g., Strong passing range, good positioning, aerial ability"
              rows={4}
              className={`w-full bg-[#111820] border ${errors.strengths ? "border-red-500" : "border-slate-800"} rounded-xl px-4 py-3.5 outline-none focus:border-cyan-500/50 resize-none placeholder:text-gray-600`}
            />
            {errors.strengths && (
              <p className="text-red-500 text-[11px] mt-1">
                {errors.strengths.message}
              </p>
            )}
          </div>

          {/* Areas to improve */}
          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-medium">
              Areas to improve*
            </label>
            <textarea
              {...register("areasToImprove", {
                required: "Areas to improve are required",
              })}
              placeholder="e.g., Left foot technique, speed, defensive awareness"
              rows={4}
              className={`w-full bg-[#111820] border ${errors.areasToImprove ? "border-red-500" : "border-slate-800"} rounded-xl px-4 py-3.5 outline-none focus:border-cyan-500/50 resize-none placeholder:text-gray-600`}
            />
            {errors.areasToImprove && (
              <p className="text-red-500 text-[11px] mt-1">
                {errors.areasToImprove.message}
              </p>
            )}
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="flex justify-between items-center mt-10">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-slate-800 text-gray-300 hover:bg-slate-800 transition-all text-sm cursor-pointer"
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

export default PhysicalDevelopment;
