/* eslint-disable react-hooks/incompatible-library */
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Info, Save, ChevronLeft, ChevronRight, Trophy } from "lucide-react";
import { useOnboarding } from "@/context/OnboardingContext";

type FormValues = {
  sleepDuration: string;
  matchCongestion: string;
  fatigueLevel: string;
  injuryHistory: string;
  availabilityStatus: string;
  hasSponsorship: string;
  openToSponsorship: string;
};

const FatigueRecovery = () => {
  const navigate = useNavigate();
  const { data, updateStep } = useOnboarding();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: data.fatigueRecovery || {
      fatigueLevel: "",
      hasSponsorship: "",
      openToSponsorship: "",
      injuryHistory: "",
      availabilityStatus: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    updateStep("fatigueRecovery", values);

   
    navigate("../lifestyle-nutrition");
  };

  const onSaveLater = (values: FormValues) => {
    updateStep("fatigueRecovery", values);
    alert("Progress saved locally!");
  };

  return (
    <div className=" p-4 text-white min-h-screen">
      <h2 className="text-xl font-bold mb-10">
        Fatigue, Recovery & Availability
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#0b1219] border border-slate-800 rounded-2xl p-8 space-y-8 shadow-2xl"
      >
        {/* Info Box */}
        <div className="flex gap-3 bg-[#0d1e21] border border-cyan-900/30 p-4 rounded-xl items-start">
          <Info className="text-cyan-500 shrink-0 mt-0.5" size={18} />
          <p className="text-cyan-100/60 text-[11px] leading-relaxed">
            Your physical profile and self-assessment help our AI provide
            personalized development recommendations and match you with suitable
            opportunities.
          </p>
        </div>

        {/* --- Dropdown Sections --- */}
        <div className="grid grid-cols-1 gap-6">
          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-medium">
              Average sleep duration per night *
            </label>
            <select
              {...register("sleepDuration", { required: "Required" })}
              className={`w-full bg-[#111820] border ${errors.sleepDuration ? "border-red-500" : "border-slate-800"} rounded-xl px-4 py-3.5 outline-none appearance-none focus:border-cyan-500/50 transition-colors`}
            >
              <option value="">Select sleep duration</option>
              <option value="Less than 5hrs">Less than 5 hours</option>
              <option value="5-6 hrs">5 - 6 hours</option>
              <option value="6-7 hrs">6 - 7 hours</option>
              <option value="7-8 hrs">7 - 8 hours</option>
              <option value="8-9 hrs">8 - 9 hours</option>
              <option value="9+ hrs">9+ hours</option>
            </select>
            {errors.sleepDuration && (
              <p className="text-red-500 text-[10px] mt-1">
                {errors.sleepDuration.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-medium">
              Typical match congestion per week*
            </label>
            <select
              {...register("matchCongestion", { required: "Required" })}
              className={`w-full bg-[#111820] border ${errors.matchCongestion ? "border-red-500" : "border-slate-800"} rounded-xl px-4 py-3.5 outline-none appearance-none focus:border-cyan-500/50 transition-colors`}
            >
              <option value="">Match congestion</option>
              <option value="No regular matches">No regular matches</option>
              <option value="1 match per week">1 match per week</option>
              <option value="2 matches per week">2 matches per week</option>
              <option value="3+ matches per week">3+ matches per week</option>
            </select>
            {errors.matchCongestion && (
              <p className="text-red-500 text-[10px] mt-1">
                {errors.matchCongestion.message}
              </p>
            )}
          </div>
        </div>

        {/* Fatigue Buttons with fresh/fatigued labels */}
        <div className="space-y-4">
          <label className="text-gray-300 text-sm font-medium">
            Current self-reported fatigue level *
          </label>
          <div className="flex justify-between gap-4">
            {["01", "02", "03", "04", "05"].map((level) => (
              <button
                key={level}
                type="button"
                onClick={() => {
                  setValue("fatigueLevel", level);
                  trigger("fatigueLevel");
                }}
                className={`flex-1 py-3 rounded-lg border transition-all font-bold ${
                  watch("fatigueLevel") === level
                    ? "bg-cyan-500/10 border-cyan-500 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.1)]"
                    : "bg-[#111820] border-slate-800 text-gray-500"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
          <div className="flex justify-between text-[10px] text-gray-500 px-1 italic">
            <span>Very fresh</span>
            <span>Extremely fatigued</span>
          </div>
          <input
            type="hidden"
            {...register("fatigueLevel", {
              required: "Please select a fatigue level",
            })}
          />
          {errors.fatigueLevel && (
            <p className="text-red-500 text-[10px] mt-1">
              {errors.fatigueLevel.message}
            </p>
          )}
        </div>

        {/* Injury History (Updated) */}
        <div className="space-y-2">
          <label className="text-gray-300 text-sm font-medium">
            Injury history (last 12 months)
          </label>
          <textarea
            {...register("injuryHistory")}
            placeholder="e.g., Minor hamstring strain in August 2025 (2 weeks out)"
            className="w-full bg-[#111820] border border-slate-800 rounded-xl px-4 py-3 h-24 outline-none focus:border-cyan-500/50 transition-colors text-sm resize-none"
          />
          <p className="text-[10px] text-gray-500 italic">
            This helps us provide safer development recommendations
          </p>
        </div>

        {/* Availability Status (Updated) */}
        <div className="space-y-2">
          <label className="text-gray-300 text-sm font-medium">
            Current availability status *
          </label>
          <select
            {...register("availabilityStatus", { required: "Required" })}
            className={`w-full bg-[#111820] border ${errors.availabilityStatus ? "border-red-500" : "border-slate-800"} rounded-xl px-4 py-3.5 outline-none appearance-none focus:border-cyan-500/50 transition-colors`}
          >
            <option value="">Select availability *</option>
            <option value="Fully available">Fully available</option>
            <option value="Available with minor restriction">
              Available with minor restriction
            </option>
            <option value="Returning from injury">Returning from injury</option>
            <option value="Currently injured">Currently injured</option>
            <option value="Unavailable">Unavailable</option>
          </select>
          {errors.availabilityStatus && (
            <p className="text-red-500 text-[10px] mt-1">
              {errors.availabilityStatus.message}
            </p>
          )}
        </div>

        {/* --- Sponsorship Section --- */}
        <div className="bg-[#090f15]/50 border border-slate-800/60 rounded-2xl p-6 space-y-6">
          <div className="flex gap-3 bg-[#0d1e21] border border-cyan-900/30 p-4 rounded-lg items-center">
            <Trophy className="text-cyan-500 shrink-0" size={18} />
            <div>
              <h4 className="text-sm font-semibold text-gray-100">
                Sponsorship & Brand Partnerships
              </h4>
              <p className="text-gray-500 text-[10px] mt-0.5">
                Help us understand your current sponsorship status and future
                interests. This helps match you with relevant opportunities.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-[12px] text-gray-400">
              Do you currently have any sponsorship deals? *
            </p>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => {
                  setValue("hasSponsorship", "yes");
                  trigger("hasSponsorship");
                }}
                className={`py-3.5 rounded-xl border text-[11px] font-medium transition-all ${
                  watch("hasSponsorship") === "yes"
                    ? "bg-cyan-900/20 border-cyan-500/50 text-cyan-400"
                    : "bg-[#111820] border-slate-800/80 text-gray-500 hover:border-slate-700"
                }`}
              >
                Yes, I have sponsorships
              </button>
              <button
                type="button"
                onClick={() => {
                  setValue("hasSponsorship", "no");
                  trigger("hasSponsorship");
                }}
                className={`py-3.5 rounded-xl border text-[11px] font-medium transition-all ${
                  watch("hasSponsorship") === "no"
                    ? "bg-cyan-900/20 border-cyan-500/50 text-cyan-400"
                    : "bg-[#111820] border-slate-800/80 text-gray-500 hover:border-slate-700"
                }`}
              >
                No current sponsorships
              </button>
            </div>
            <input
              type="hidden"
              {...register("hasSponsorship", {
                required: "Please select if you have sponsorship",
              })}
            />
            {errors.hasSponsorship && (
              <p className="text-red-500 text-[10px] mt-1">
                {errors.hasSponsorship.message}
              </p>
            )}
          </div>

          <div className="space-y-3">
            <p className="text-[12px] text-gray-400">
              Are you open to future sponsorship opportunities? *
            </p>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => {
                  setValue("openToSponsorship", "yes");
                  trigger("openToSponsorship");
                }}
                className={`py-3.5 rounded-xl border text-[11px] font-medium transition-all ${
                  watch("openToSponsorship") === "yes"
                    ? "bg-cyan-900/20 border-cyan-500/50 text-cyan-400"
                    : "bg-[#111820] border-slate-800/80 text-gray-500 hover:border-slate-700"
                }`}
              >
                Yes, open to opportunities
              </button>
              <button
                type="button"
                onClick={() => {
                  setValue("openToSponsorship", "no");
                  trigger("openToSponsorship");
                }}
                className={`py-3.5 rounded-xl border text-[11px] font-medium transition-all ${
                  watch("openToSponsorship") === "no"
                    ? "bg-cyan-900/20 border-cyan-500/50 text-cyan-400"
                    : "bg-[#111820] border-slate-800/80 text-gray-500 hover:border-slate-700"
                }`}
              >
                Not interested at this time
              </button>
            </div>
            <input
              type="hidden"
              {...register("openToSponsorship", {
                required: "Please select if you are open to sponsorship",
              })}
            />
            {errors.openToSponsorship && (
              <p className="text-red-500 text-[10px] mt-1">
                {errors.openToSponsorship.message}
              </p>
            )}
          </div>

          <div className="bg-[#0d161d] border border-slate-800/40 p-4 rounded-xl">
            <p className="text-[10px] text-gray-500 leading-relaxed flex flex-col gap-2">
              <span className="text-gray-300 font-bold">Important:</span>{" "}
              OnyxSport AI does not act as an agent or negotiate sponsorship
              deals. We provide intelligence and may share opportunities, but
              all agreements are between you and the sponsor. Always consult
              with your agent, legal advisor, or guardian before signing any
              contracts.
            </p>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-between items-center mt-10">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-slate-800 text-gray-300 hover:bg-slate-800 transition-all text-sm font-medium cursor-pointer"
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

export default FatigueRecovery;
