import { Button } from "@/components/ui/button";
import { useClubFormContext } from "../context/AgentFormContext";
import {
  BarChart3,
  CircleDot,
  FileText,
  TrendingUp,
  RefreshCw,
  Target,
} from "lucide-react";

const PRIMARY_GOALS = [
  {
    id: "monitor-performance",
    title: "Monitor player performance trends",
    icon: BarChart3,
  },
  {
    id: "prepare-transfers",
    title: "Prepare players for transfers",
    icon: CircleDot,
  },
  {
    id: "track-contracts",
    title: "Track contract timelines",
    icon: FileText,
  },
  {
    id: "identify-players",
    title: "Identify rising or declining players",
    icon: TrendingUp,
  },
  {
    id: "compare-players",
    title: "Compare players within my roster",
    icon: RefreshCw,
  },
  {
    id: "scouting",
    title: "Scouting & recruitment",
    icon: Target,
  },
];

interface ServicesRequiredStepProps {
  onNext: () => void;
  onBack: () => void;
}

export default function ServicesRequiredStep({
  onNext,
  onBack,
}: ServicesRequiredStepProps) {
  const { formData, updateFormData } = useClubFormContext();

  const canProceed = !!formData.primaryGoal;

  return (
    <div className="w-full max-w-2xl border border-[#53DDF5]/30 rounded-2xl p-8 bg-[#11161D]">
      <h2 className="text-2xl font-bold text-white mb-2">Services Required</h2>
      <p className="text-gray-400 text-sm mb-2">
        Help us personalize your experience
      </p>
      <p className="text-gray-300 text-sm font-medium mb-6">
        What&apos;s your primary goal? *
      </p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {PRIMARY_GOALS.map((goal) => {
          const Icon = goal.icon;
          const isSelected = formData.primaryGoal === goal.id;
          return (
            <button
              key={goal.id}
              type="button"
              onClick={() => updateFormData({ primaryGoal: goal.id })}
              className={`relative p-5 rounded-xl border-2 text-left transition-all ${
                isSelected
                  ? "border-[#53DDF5] bg-[#53DDF5]/10"
                  : "border-slate-700 bg-[#161d26] hover:border-slate-600"
              }`}
            >
              <Icon
                className={`w-8 h-8 mb-2 ${
                  isSelected ? "text-[#53DDF5]" : "text-gray-500"
                }`}
              />
              <span
                className={`text-sm font-medium ${
                  isSelected ? "text-white" : "text-gray-400"
                }`}
              >
                {goal.title}
              </span>
              {isSelected && (
                <div className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-[#53DDF5] flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-slate-950"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              )}
            </button>
          );
        })}
      </div>

      <div className="flex gap-3 bg-[#0d1e21] border border-[#53DDF5]/20 p-4 rounded-xl items-start mb-8">
        <Target className="text-[#53DDF5] shrink-0 mt-0.5" size={18} />
        <p className="text-gray-400 text-sm">
          Your data is protected and used solely to enhance your OnyxSport AI
          experience.
        </p>
      </div>

      <div className="flex justify-between">
        <Button
          onClick={onBack}
          variant="outline"
          className="border-slate-600 text-gray-400 hover:bg-slate-800 px-6 h-11 rounded-xl"
        >
          &lt; Back
        </Button>
        <Button
          onClick={onNext}
          disabled={!canProceed}
          className={`px-8 h-11 rounded-xl font-medium ${
            canProceed
              ? "bg-[#53DDF5] hover:bg-[#53DDF5]/90 text-slate-950"
              : "bg-slate-700 text-gray-500 cursor-not-allowed"
          }`}
        >
          Continue &gt;
        </Button>
      </div>
    </div>
  );
}
