import { Check } from "lucide-react";

export interface StepItem {
  id: number;
  label: string;
}

interface StepIndicatorProps {
  currentStep: number;
  steps: StepItem[];
}

export default function StepIndicator({ currentStep, steps }: StepIndicatorProps) {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="flex items-center gap-0">
        {steps.map((step, index) => {
          const isCompleted = step.id < currentStep;
          const isActive = step.id === currentStep;

          return (
            <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${isActive || isCompleted
                      ? "border-[#53DDF5] bg-[#0B0E14] text-[#53DDF5]"
                      : "border-gray-700 bg-[#11161D] text-gray-600"
                    } ${isActive ? "shadow-[0_0_15px_#53DDF540]" : ""}`}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <span className="text-sm font-semibold">{step.id}</span>
                  )}
                </div>
                <span
                  className={`text-[10px] font-bold tracking-widest mt-3 whitespace-nowrap ${isActive || isCompleted ? "text-[#53DDF5]" : "text-gray-600"
                    }`}
                >
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-12 md:w-16 h-[2px] mx-2 transition-all duration-500 ${isCompleted ? "bg-[#53DDF5]" : "bg-gray-800"
                    }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
