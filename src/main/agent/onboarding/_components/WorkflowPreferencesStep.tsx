import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useClubFormContext } from "../context/AgentFormContext";
import { FileText, LayoutDashboard } from "lucide-react";

const REPORT_FORMATS = [
  { id: "pdf", label: "PDF", icon: FileText },
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "both", label: "Both", icon: FileText },
];

const NOTIFICATION_OPTIONS = [
  { id: "email", label: "Email" },
  { id: "dashboard", label: "Dashboard" },
];

interface WorkflowPreferencesStepProps {
  onNext: () => void;
  onBack: () => void;
}

export default function WorkflowPreferencesStep({
  onNext,
  onBack,
}: WorkflowPreferencesStepProps) {
  const { formData, updateFormData } = useClubFormContext();

  const toggleNotification = (id: string) => {
    const current = formData.notifications;
    const updated = current.includes(id)
      ? current.filter((n) => n !== id)
      : [...current, id];
    updateFormData({ notifications: updated });
  };

  const canProceed =
    !!formData.reportFormat && formData.notifications.length > 0;

  return (
    <div className="w-full max-w-2xl border border-[#53DDF5]/30 rounded-2xl p-8 bg-[#11161D]">
      <h2 className="text-2xl font-bold text-white mb-2">
        Workflow Preferences
      </h2>
      <p className="text-gray-400 text-sm mb-6">
        How would you like to receive your reports and updates?
      </p>

      <div className="space-y-8">
        <div>
          <Label className="text-gray-300 text-sm font-medium block mb-4">
            Preferred report format <span className="text-red-400">*</span>
          </Label>
          <div className="grid grid-cols-3 gap-4">
            {REPORT_FORMATS.map((format) => {
              const Icon = format.icon;
              const isSelected = formData.reportFormat === format.id;
              return (
                <button
                  key={format.id}
                  type="button"
                  onClick={() => updateFormData({ reportFormat: format.id })}
                  className={`relative p-6 rounded-xl border-2 text-center transition-all ${
                    isSelected
                      ? "border-[#53DDF5] bg-[#53DDF5]/10 text-[#53DDF5]"
                      : "border-slate-700 bg-[#161d26] text-gray-500 hover:border-slate-600"
                  }`}
                >
                  <Icon className="w-8 h-8 mx-auto mb-2" />
                  <span className="block font-medium">{format.label}</span>
                  {isSelected && (
                    <div className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
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
        </div>

        <div>
          <Label className="text-gray-300 text-sm font-medium block mb-4">
            Preferred notifications <span className="text-red-400">*</span>
          </Label>
          <div className="grid grid-cols-2 gap-4">
            {NOTIFICATION_OPTIONS.map((opt) => {
              const isSelected = formData.notifications.includes(opt.id);
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => toggleNotification(opt.id)}
                  className={`p-6 rounded-xl border-2 text-center transition-all ${
                    isSelected
                      ? "border-[#53DDF5] bg-[#53DDF5]/10 text-white"
                      : "border-slate-700 bg-[#161d26] text-gray-500 hover:border-slate-600"
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8">
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
