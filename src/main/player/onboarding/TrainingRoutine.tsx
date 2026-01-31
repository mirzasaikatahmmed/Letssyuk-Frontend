/* eslint-disable react-hooks/incompatible-library */
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Info, Save, ChevronLeft, ChevronRight } from "lucide-react";
import { useOnboarding } from "@/context/OnboardingContext";
import { useState } from "react";

type FormValues = {
  trainingDays: string;
  trainingDuration: string;
  weeklyExerciseHours: string;
  gymSessions: string;
  recoveryDays: string;
  otherExercise: string;
};

const TrainingRoutine = () => {
  const navigate = useNavigate();
  const { data, updateStep } = useOnboarding();

  const [focusAreas, setFocusAreas] = useState<string[]>(
    data.trainingRoutine?.focusAreas || [],
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: data.trainingRoutine || {},
  });

  const toggleFocusArea = (area: string) => {
    setFocusAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area],
    );
  };

  const onSubmit = (values: FormValues) => {
    updateStep("trainingRoutine", { ...values, focusAreas });


   

    navigate("../fatigue-recovery");
  };

  const onSaveLater = (values: FormValues) => {
    updateStep("trainingRoutine", { ...values, focusAreas });
    alert("Progress saved!");
  };

  const focusOptions = [
    "Technical Skills",
    "Strength Training",
    "Endurance & Cardio",
    "Speed & Agility",
    "Tactical Awareness",
    "Flexibility & Mobility",
  ];

  return (
    <div className=" p-4 text-white min-h-screen">
      <h2 className="text-xl font-bold mb-10">Training & Exercise Routine</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#0b1219] border border-slate-800 rounded-2xl p-8 space-y-6 shadow-2xl"
      >
        <div className="flex gap-3 bg-[#0d1e21] border border-cyan-900/40 p-4 rounded-xl items-start">
          <Info className="text-cyan-500 shrink-0 mt-0.5" size={20} />
          <p className="text-cyan-100/70 text-xs leading-relaxed">
            Understanding your training routine helps us provide balanced,
            realistic development recommendations tailored to your current
            schedule.
          </p>
        </div>

        <div className="space-y-5">
          {/* Training Days */}
          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-medium">
              Training days per week *
            </label>
            <div className="relative">
              <select
                {...register("trainingDays", {
                  required: "Please select training days",
                })}
                className={`w-full bg-[#111820] border ${errors.trainingDays ? "border-red-500" : "border-slate-800"} rounded-xl px-4 py-3.5 outline-none appearance-none focus:border-cyan-500/50 transition-colors`}
              >
                <option value="">Select Training days</option>
                <option value="1-2 Days">1 - 2 Days</option>
                <option value="3-4 Days">3 - 4 Days</option>
                <option value="5-6 Days">5 - 6 Days</option>
                <option value="7-8 Days">7 - 8 Days</option>
              </select>
              <ChevronRight
                className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-gray-500 pointer-events-none"
                size={18}
              />
            </div>
            {errors.trainingDays && (
              <p className="text-red-500 text-[11px] mt-1">
                {errors.trainingDays.message}
              </p>
            )}
          </div>

          {/* Training Duration */}
          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-medium">
              Average daily training duration *
            </label>
            <div className="relative">
              <select
                {...register("trainingDuration", {
                  required: "Please select training duration",
                })}
                className={`w-full bg-[#111820] border ${errors.trainingDuration ? "border-red-500" : "border-slate-800"} rounded-xl px-4 py-3.5 outline-none appearance-none focus:border-cyan-500/50 transition-colors`}
              >
                <option value="">Select Training duration</option>
                <option value="30-60 Minutes">30 - 60 Minutes</option>
                <option value="1-1.5 hrs">1 - 1.5 hrs</option>
                <option value="2-2.5 hrs">2 - 2.5 hrs</option>
                <option value="3-3.5 hrs">3 - 3.5 hrs</option>
              </select>
              <ChevronRight
                className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-gray-500 pointer-events-none"
                size={18}
              />
            </div>
            {errors.trainingDuration && (
              <p className="text-red-500 text-[11px] mt-1">
                {errors.trainingDuration.message}
              </p>
            )}
          </div>

          {/* Weekly Hours */}
          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-medium">
              Total weekly exercise hours
            </label>
            <input
              type="text"
              placeholder="e.g 12"
              {...register("weeklyExerciseHours")}
              className="w-full bg-[#111820] border border-slate-800 rounded-xl px-4 py-3.5 outline-none focus:border-cyan-500/50"
            />
            <p className="text-gray-500 text-[11px]">
              Including all football training, gym, and fitness work
            </p>
          </div>

          {/* Gym sessions per week */}
          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-medium">
              Gym sessions per week *
            </label>
            <div className="relative">
              <select
                {...register("gymSessions", {
                  required: "Gym session frequency is required",
                })}
                className={`w-full bg-[#111820] border ${
                  errors.gymSessions ? "border-red-500" : "border-slate-800"
                } rounded-xl px-4 py-3.5 outline-none appearance-none focus:border-cyan-500/50 transition-colors`}
              >
                <option value="">Select gym frequency</option>
                <option value="None">None</option>
                <option value="1 Session">1 Session</option>
                <option value="2 Session">2 Session</option>
                <option value="3 Session">3 Session</option>
                <option value="4 Session">4 Session</option>
                <option value="5+ Session">5+ Session</option>
              </select>
              <ChevronRight
                className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-gray-500 pointer-events-none"
                size={18}
              />
            </div>
            {errors.gymSessions && (
              <p className="text-red-500 text-[11px] mt-1">
                {errors.gymSessions.message}
              </p>
            )}
          </div>

          {/* Recovery Days */}
          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-medium">
              Recovery days per week *
            </label>
            <div className="relative">
              <select
                {...register("recoveryDays", {
                  required: "Recovery days are required",
                })}
                className={`w-full bg-[#111820] border ${errors.recoveryDays ? "border-red-500" : "border-slate-800"} rounded-xl px-4 py-3.5 outline-none appearance-none focus:border-cyan-500/50 transition-colors`}
              >
                <option value="">Select recovery days</option>
                <option value="0 days (no rest)">0 days (no rest)</option>
                <option value="1 day">1 day</option>
                <option value="2 days">2 days</option>
                <option value="3 days">3 days</option>
                <option value="4 days">4 days</option>
              </select>
              <ChevronRight
                className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-gray-500 pointer-events-none"
                size={18}
              />
            </div>
            {errors.recoveryDays && (
              <p className="text-red-500 text-[11px] mt-1">
                {errors.recoveryDays.message}
              </p>
            )}
          </div>

          {/* Multi-select Focus Areas */}
          <div className="space-y-3 pt-2">
            <label className="text-gray-300 text-sm font-medium">
              Training focus areas (Select all that apply)
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {focusOptions.map((area) => (
                <button
                  key={area}
                  type="button"
                  onClick={() => toggleFocusArea(area)}
                  className={`px-4 py-3.5 rounded-xl border text-sm font-medium transition-all text-center ${
                    focusAreas.includes(area)
                      ? "bg-cyan-500/10 border-cyan-500 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                      : "bg-[#111820] border-slate-800 text-gray-400 hover:border-slate-700"
                  }`}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-10">
          <button
            type="button"
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

export default TrainingRoutine;
