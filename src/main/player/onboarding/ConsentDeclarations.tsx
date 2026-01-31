/* eslint-disable react-hooks/incompatible-library */
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Info, ChevronLeft, ChevronRight } from "lucide-react";
import { useOnboarding } from "@/context/OnboardingContext";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { sections } from "./data/data";

type FormValues = {
  consentAI: boolean;
  gdprCompliance: boolean;
  roleUnderstanding: boolean;
};

const ConsentDeclarations = () => {
  const navigate = useNavigate();

  const { data, updateStep } = useOnboarding();

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { isValid },
  } = useForm<FormValues>({
    defaultValues: data.consentDeclarations || {
      consentAI: false,
      gdprCompliance: false,
      roleUnderstanding: false,
    },
    mode: "onChange",
  });

  const onSubmit = (values: FormValues) => {
    updateStep("consentDeclarations", values);

    const payload = {
      ...data.personalDetails,
      ...data.footballProfile,
      ...data.careerHistory,
      ...data.physicalDevelopment,
      ...data.trainingRoutine,
      ...data.fatigueRecovery,
      ...data.lifestyleNutrition,
      ...data.goalsAmbition,
      ...values
    }

    console.log(payload)

    alert("Onboarding Complete! Check the browser console (F12) to see all form data.");

    // navigate("/dashboard");
  };

  return (
    <div className="p-4 text-white min-h-screen max-w-4xl mx-auto pb-20">
      <h2 className="text-xl font-bold mb-10 italic tracking-wide">Consent & Declarations</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#0b1219] border border-slate-800 rounded-2xl p-8 space-y-8 shadow-2xl"
      >
        {/* Top Information Box */}
        <div className="flex gap-3 bg-[#0d1e21] border border-cyan-900/30 p-4 rounded-xl items-start">
          <Info className="text-cyan-500 shrink-0 mt-0.5" size={18} />
          <div>
            <p className="text-cyan-100/90 text-[11px] font-bold mb-1 uppercase tracking-wider">
              Final Step: Review & Confirm
            </p>
            <p className="text-cyan-100/60 text-[11px] leading-relaxed">
              Please review and confirm the following declarations to complete your profile and access AI career intelligence.
            </p>
          </div>
        </div>

        {/* Declaration Cards */}
        <div className="space-y-6">
          {sections.map((section) => {
            const isChecked = watch(section.id as keyof FormValues);
            return (
              <div
                key={section.id}
                // Card click korle toggle hobe, loop avoid korar jonno logical check
                onClick={() => setValue(section.id as keyof FormValues, !isChecked, { shouldValidate: true })}
                className={`flex gap-4 p-6 rounded-2xl border transition-all cursor-pointer select-none ${isChecked
                  ? "bg-cyan-900/10 border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.05)]"
                  : "bg-[#0d1218] border-slate-800 hover:border-slate-700"
                  }`}
              >
                <div className="mt-1" onClick={(e) => e.stopPropagation()}>
                  <Checkbox
                    id={section.id}
                    checked={isChecked}
                    onCheckedChange={(checked) =>
                      setValue(section.id as keyof FormValues, !!checked, { shouldValidate: true })
                    }
                    className="w-5 h-5 rounded border-slate-700 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor={section.id} className="text-sm font-semibold text-gray-200 cursor-pointer">
                    {section.title}
                  </label>
                  <p className="text-[12px] text-gray-500 leading-relaxed font-light">
                    {section.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-12 pt-4">
          <Button
            variant="outline"
            type="button"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-6 h-11 rounded-xl border-slate-800 text-gray-300 hover:bg-slate-800 transition-all text-sm font-medium"
          >
            <ChevronLeft size={18} /> Back
          </Button>

          <Button
            type="submit"
            disabled={!watch("consentAI") || !watch("gdprCompliance") || !watch("roleUnderstanding")}
            className={`flex items-center gap-2 px-10 h-11 rounded-xl transition-all text-sm font-medium shadow-lg ${isValid
              ? "bg-[#234b52] hover:bg-[#2d5f68] text-cyan-100 ring-1 ring-cyan-500/30"
              : "bg-slate-800 text-gray-500 cursor-not-allowed opacity-50"
              }`}
          >
            Continue <ChevronRight size={18} />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ConsentDeclarations;