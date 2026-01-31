/* eslint-disable react-hooks/incompatible-library */
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Info, Save, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useOnboarding } from "@/context/OnboardingContext";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FormValues = {
  primaryGoal: string;
  targetTimeframe: string;
  shortTermGoals: string;
  seasonGoals: string;
  longTermAmbition: string;
  willingToAdjust: string;
  willingToRelocate: string;
  preferredAreas: string[];
};

const GoalsAmbitions = () => {
  const navigate = useNavigate();
  const { data, updateStep } = useOnboarding();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: data.goalsAmbition || {
      preferredAreas: [],
      willingToRelocate: "",
      willingToAdjust: "",
    },
  });

  const selectedAreas = watch("preferredAreas") || [];
  const willingToRelocate = watch("willingToRelocate");
  const willingToAdjust = watch("willingToAdjust");

  const toggleArea = (area: string) => {
    const current = [...selectedAreas];
    const index = current.indexOf(area);
    if (index > -1) {
      current.splice(index, 1);
    } else {
      current.push(area);
    }
    setValue("preferredAreas", current);
  };

  const onSubmit = (values: FormValues) => {
    updateStep("goalsAmbition", values);
    navigate("../consent-declarations");
  };

  const areas = [
    "London & South East",
    "South West England",
    "Midlands",
    "North West England",
    "North East England",
    "Yorkshire & Humber",
    "East of England",
    "Scotland",
    "Wales",
    "Northern Ireland",
    "Anywhere in England",
    "International (Europe)",
  ];

  return (
    <div className="p-4 text-white min-h-screen max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-10 italic">Goals & Ambitions</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#0b1219] border border-slate-800 rounded-2xl p-8 space-y-10 shadow-2xl"
      >
        {/* Info Box */}
        <div className="flex gap-3 bg-[#0d1e21] border border-cyan-900/30 p-4 rounded-xl items-start">
          <Info className="text-cyan-500 shrink-0 mt-0.5" size={18} />
          <div>
            <p className="text-cyan-100/90 text-[11px] font-bold mb-1">
              Critical for AI insights:
            </p>
            <p className="text-cyan-100/60 text-[11px] leading-relaxed">
              Your goals drive our entire recommendation system. Be specific and
              honest. Your goals help our AI align opportunities and development
              plans with your ambitions.
            </p>
          </div>
        </div>

        {/* Primary Career Goal */}
        <div className="space-y-3">
          <label className="text-gray-300 text-sm font-medium">
            Primary career goal *
          </label>
          <Textarea
            {...register("primaryGoal", {
              required: "Primary career goal is required",
            })}
            placeholder="e.g., Sign a professional contract with a League Two club"
            className={`bg-[#111820] border ${errors.primaryGoal ? "border-red-500" : "border-slate-800"} rounded-xl min-h-[100px] focus:border-cyan-500/50 resize-none text-sm transition-colors`}
          />
          {errors.primaryGoal && (
            <p className="text-red-500 text-[10px] mt-1">
              {errors.primaryGoal.message}
            </p>
          )}
          <p className="text-[11px] text-gray-500 italic">
            Be as specific as possible
          </p>
        </div>

        {/* Target Timeframe */}
        <div className="space-y-3">
          <label className="text-gray-300 text-sm font-medium">
            Target timeframe *
          </label>
          <Select
            onValueChange={(val) => {
              setValue("targetTimeframe", val, { shouldValidate: true });
            }}
          >
            <SelectTrigger
              className={`w-full bg-[#111820] border ${errors.targetTimeframe ? "border-red-500" : "border-slate-800"} rounded-xl h-12 text-gray-400`}
            >
              <SelectValue placeholder="Select Timeframe*" />
            </SelectTrigger>
            <SelectContent className="bg-[#111820] border-slate-800 text-gray-300">
              <SelectItem value="6-months">6 Months</SelectItem>
              <SelectItem value="1-year">1 Year</SelectItem>
              <SelectItem value="2-years">2 Years</SelectItem>
              <SelectItem value="5-years">5 Years+</SelectItem>
            </SelectContent>
          </Select>
          <input
            type="hidden"
            {...register("targetTimeframe", {
              required: "Please select a timeframe",
            })}
          />
          {errors.targetTimeframe && (
            <p className="text-red-500 text-[10px] mt-1">
              {errors.targetTimeframe.message}
            </p>
          )}
        </div>

        {/* Short-term & Season Goals */}
        <div className="space-y-10">
          <div className="space-y-3">
            <label className="text-gray-300 text-sm font-medium">
              Short-term goals (next 3 months)
            </label>
            <Textarea
              {...register("shortTermGoals")}
              placeholder="e.g., Improve match fitness, secure a trial, work on weak foot"
              className="bg-[#111820] border-slate-800 rounded-xl min-h-[100px] focus:border-cyan-500/50 resize-none text-sm"
            />
            <p className="text-[11px] text-gray-500 italic">
              Be as specific as possible
            </p>
          </div>

          <div className="space-y-3">
            <label className="text-gray-300 text-sm font-medium">
              Season goals (12 months)
            </label>
            <Textarea
              {...register("seasonGoals")}
              placeholder="e.g., Become a regular starter, score 10+ goals, earn promotion"
              className="bg-[#111820] border-slate-800 rounded-xl min-h-[100px] focus:border-cyan-500/50 resize-none text-sm"
            />
            <p className="text-[11px] text-gray-500 italic">
              Be as specific as possible
            </p>
          </div>
        </div>

        {/* Long-term Ambition */}
        <div className="space-y-3">
          <label className="text-gray-300 text-sm font-medium">
            Long-term ambition
          </label>
          <Textarea
            {...register("longTermAmbition")}
            placeholder="e.g., Play in the Championship, represent my country, play in Europe"
            className="bg-[#111820] border-slate-800 rounded-xl min-h-[100px] focus:border-cyan-500/50 resize-none text-sm"
          />
          <p className="text-[11px] text-gray-500 italic">
            Be as specific as possible
          </p>
        </div>

        {/* Willing to Adjust Routine */}
        <div className="space-y-4">
          <p className="text-[13px] text-gray-300">
            Are you willing to adjust your routine to achieve your goals? *
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                setValue("willingToAdjust", "committed", {
                  shouldValidate: true,
                })
              }
              className={`py-6 rounded-xl border transition-all ${
                willingToAdjust === "committed"
                  ? "bg-cyan-900/20 border-cyan-500/50 text-cyan-400"
                  : "bg-[#111820] border-slate-800 text-gray-500"
              }`}
            >
              Yes I'm committed
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                setValue("willingToAdjust", "maintain", {
                  shouldValidate: true,
                })
              }
              className={`py-6 rounded-xl border transition-all ${
                willingToAdjust === "maintain"
                  ? "bg-cyan-900/20 border-cyan-500/50 text-cyan-400"
                  : "bg-[#111820] border-slate-800 text-gray-500"
              }`}
            >
              Prefer to maintain current routine
            </Button>
          </div>
          <input
            type="hidden"
            {...register("willingToAdjust", {
              required: "Please make a selection",
            })}
          />
          {errors.willingToAdjust && (
            <p className="text-red-500 text-[10px] mt-1">
              {errors.willingToAdjust.message}
            </p>
          )}
        </div>

        {/* Willing to Relocate & Preferred Areas */}
        <div className="space-y-6">
          <p className="text-[13px] text-gray-300">
            Are you willing to relocate to achieve your goals? *
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                setValue("willingToRelocate", "yes", { shouldValidate: true })
              }
              className={`py-6 rounded-xl border transition-all font-bold ${
                willingToRelocate === "yes"
                  ? "bg-[#5eead4] border-transparent text-[#0b1219] hover:bg-[#5eead4]/90"
                  : "bg-[#111820] border-slate-800 text-gray-500"
              }`}
            >
              Yes, I'm open to relocating.
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                setValue("willingToRelocate", "no", { shouldValidate: true })
              }
              className={`py-6 rounded-xl border transition-all ${
                willingToRelocate === "no"
                  ? "bg-cyan-900/20 border-cyan-500/50 text-cyan-400"
                  : "bg-[#111820] border-slate-800 text-gray-500"
              }`}
            >
              Prefer to stay in current location
            </Button>
          </div>
          <input
            type="hidden"
            {...register("willingToRelocate", {
              required: "Please make a selection",
            })}
          />
          {errors.willingToRelocate && (
            <p className="text-red-500 text-[10px] mt-1">
              {errors.willingToRelocate.message}
            </p>
          )}

          {/* Relocation Areas Selection Box */}
          <div className="bg-[#090f15] border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-2 text-cyan-500 text-xs font-medium">
              <MapPin size={14} />
              <span>
                Preferred relocation areas{" "}
                <span className="text-gray-500 font-normal">
                  (Select all that apply)
                </span>
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {areas.map((area) => (
                <Button
                  key={area}
                  type="button"
                  variant="outline"
                  onClick={() => toggleArea(area)}
                  className={`justify-start h-11 px-4 rounded-xl border text-[11px] transition-all ${
                    selectedAreas.includes(area)
                      ? "bg-cyan-900/20 border-cyan-500/50 text-cyan-400"
                      : "bg-[#111820] border-slate-800/60 text-gray-400"
                  }`}
                >
                  {area}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex justify-between items-center mt-12 pt-4">
          <Button
            variant="outline"
            type="button"
            onClick={() => navigate(-1)}
            className="px-6 h-11 rounded-xl border-slate-800 text-gray-300"
          >
            <ChevronLeft size={18} className="mr-2" /> Back
          </Button>
          <div className="flex gap-4">
            <Button
              variant="outline"
              type="button"
              className="px-6 h-11 rounded-xl border-slate-800 text-gray-300"
            >
              Save & Continue Later <Save size={16} className="ml-2" />
            </Button>
            <Button
              type="submit"
              className="px-8 h-11 rounded-xl bg-[#234b52] hover:bg-[#2d5f68] text-cyan-100"
            >
              Continue <ChevronRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GoalsAmbitions;
