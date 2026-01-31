/* eslint-disable react-hooks/incompatible-library */
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Info, Save, ChevronLeft, ChevronRight } from "lucide-react";
import { useOnboarding } from "@/context/OnboardingContext";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FormValues = {
  typicalMeals: string;
  monitorHydration: string;
  nutritionRoutine: string;
  consistentSleep: string;
};

const yesNoOptions = ["Yes", "No"];

const LifestyleNutrition = () => {
  const navigate = useNavigate();
  const { data, updateStep } = useOnboarding();

  const {
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: data.lifestyleNutrition || {
      typicalMeals: "",
      monitorHydration: "",
      nutritionRoutine: "",
      consistentSleep: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    updateStep("lifestyleNutrition", values);
    navigate("../goals-ambition");
  };

  const onSaveLater = (values: FormValues) => {
    updateStep("lifestyleNutrition", values);
    alert("Progress saved. You can continue later.");
  };

  const renderYesNo = (field: keyof FormValues, description?: string) => {
    const selected = watch(field);

    return (
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-4">
          {yesNoOptions.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setValue(field, opt, { shouldValidate: true })}
              className={`h-11 rounded-xl border text-sm font-medium transition-all
                ${
                  selected === opt
                    ? "bg-cyan-500/10 border-cyan-500 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.1)]"
                    : "bg-[#111820] border-slate-800 text-gray-500 hover:border-slate-700"
                }`}
            >
              {opt}
            </button>
          ))}
        </div>
        {description && (
          <p className="text-[11px] text-gray-500 italic">{description}</p>
        )}
      </div>
    );
  };

  return (
    <div className="p-4 text-white max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-10">
        Lifestyle & Nutrition Habits
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#0b1219] border border-slate-800 rounded-2xl p-8 space-y-10 shadow-2xl"
      >
        {/* Info Box */}
        <div className="flex gap-3 bg-[#0d1e21] border border-cyan-900/30 p-4 rounded-xl items-start">
          <Info className="text-cyan-500 shrink-0 mt-0.5" size={18} />
          <div>
            <p className="text-cyan-100/90 text-[11px] font-semibold mb-1">
              Habit-based insights only:
            </p>
            <p className="text-cyan-100/60 text-[11px] leading-relaxed">
              We collect lifestyle habits to understand your routine, not to
              provide medical or nutritional advice.
            </p>
          </div>
        </div>

        {/* Typical Meals */}
        <div className="space-y-3">
          <label className="text-gray-300 text-sm font-medium">
            Typical meals per day*
          </label>
          <Select
            value={watch("typicalMeals")}
            onValueChange={(val) =>
              setValue("typicalMeals", val, { shouldValidate: true })
            }
          >
            <SelectTrigger
              className={`h-11 bg-[#111820] border w-full ${
                errors.typicalMeals ? "border-red-500" : "border-slate-800"
              } rounded-xl text-gray-400`}
            >
              <SelectValue placeholder="Select Meals *" />
            </SelectTrigger>
            <SelectContent className="bg-[#111820] border-slate-800 text-gray-300">
              <SelectItem value="1-2 meals">1-2 meals</SelectItem>
              <SelectItem value="3 meals">3 meals</SelectItem>
              <SelectItem value="4 meals">4 meals</SelectItem>
              <SelectItem value="5 meals">5 meals</SelectItem>
              <SelectItem value="6+ meals">6+ meals</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-[11px] text-gray-500 italic">
            Including snacks and main meals
          </p>
        </div>

        {/* Hydration */}
        <div className="space-y-2">
          <label className="text-gray-300 text-sm font-medium">
            Do you actively monitor hydration?
          </label>
          {renderYesNo(
            "monitorHydration",
            "e.g., tracking water intake, using hydration apps",
          )}
        </div>

        {/* Nutrition Routine */}
        <div className="space-y-2">
          <label className="text-gray-300 text-sm font-medium">
            Do you have a post-training nutrition routine?
          </label>
          {renderYesNo(
            "nutritionRoutine",
            "e.g., protein shake, meal within 1–2 hours, recovery snack",
          )}
        </div>

        {/* Sleep */}
        <div className="space-y-2">
          <label className="text-gray-300 text-sm font-medium">
            Do you maintain consistent sleep times?
          </label>
          {renderYesNo(
            "consistentSleep",
            "e.g., regular bedtime and wake-up time",
          )}
        </div>

        {/* Bottom Note */}
        <div className="flex gap-3 bg-[#0d1e21] border border-cyan-900/30 p-4 rounded-xl items-start">
          <Info className="text-cyan-500 mt-1" size={16} />
          <div>
            <p className="text-cyan-100/90 text-[11px] font-semibold mb-1">
              Note:
            </p>
            <p className="text-cyan-100/60 text-[11px] leading-relaxed">
              This information helps our AI understand your lifestyle balance
              and recovery patterns. We do not provide nutritional or medical
              advice.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center pt-6">
          <Button
            variant="outline"
            type="button"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-6 h-11 rounded-xl bg-[#111820] border-slate-800 text-gray-300 cursor-pointer"
          >
            <ChevronLeft size={18} /> Back
          </Button>

          <div className="flex gap-4">
            <Button
              variant="outline"
              type="button"
              onClick={handleSubmit(onSaveLater)}
              className="flex items-center gap-2 px-6 h-11 rounded-xl bg-[#111820] border-slate-800 text-gray-300 cursor-pointer"
            >
              Save & Continue Later <Save size={16} />
            </Button>

            <Button
              type="submit"
              className="flex items-center gap-2 px-8 h-11 rounded-xl bg-[#234b52]  text-cyan-100 shadow-lg cursor-pointer"
            >
              Continue <ChevronRight size={18} />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LifestyleNutrition;
