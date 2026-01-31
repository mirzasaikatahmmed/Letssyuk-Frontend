import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useClubFormContext } from "../context/AgentFormContext";
import { Shield } from "lucide-react";

interface ConsentStepProps {
  onComplete: () => void;
  onBack: () => void;
}

const CONSENT_ITEMS = [
  {
    id: "ai" as const,
    label: "I consent to AI analysis of contracts and player data *",
  },
  {
    id: "gdpr" as const,
    label: "I consent to data storage in line with GDPR regulations *",
  },
];

export default function ConsentStep({ onComplete, onBack }: ConsentStepProps) {
  const { formData, updateFormData } = useClubFormContext();

  const handleToggle = (id: "ai" | "gdpr") => {
    if (id === "ai") {
      updateFormData({ consentAI: !formData.consentAI });
    } else {
      updateFormData({ consentGDPR: !formData.consentGDPR });
    }
  };

  const allConsented = formData.consentAI && formData.consentGDPR;

  return (
    <div className="w-full max-w-2xl border border-[#53DDF5]/30 rounded-2xl p-8 bg-[#11161D]">
      <h2 className="text-2xl font-bold text-white mb-2">Consent</h2>
      <p className="text-gray-400 text-sm mb-6">
        Please review and accept our terms.
      </p>

      <div className="space-y-4 mb-6">
        {CONSENT_ITEMS.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-3 p-4 rounded-xl border border-slate-700 bg-[#161d26] hover:border-[#53DDF5]/30 transition-colors cursor-pointer"
            onClick={() => handleToggle(item.id === "ai" ? "ai" : "gdpr")}
          >
            <Checkbox
              id={item.id}
              checked={
                item.id === "ai" ? formData.consentAI : formData.consentGDPR
              }
              onCheckedChange={() =>
                handleToggle(item.id === "ai" ? "ai" : "gdpr")
              }
              className="mt-1 w-5 h-5 rounded border-gray-500 data-[state=checked]:bg-[#53DDF5] data-[state=checked]:border-[#53DDF5]"
            />
            <Label
              htmlFor={item.id}
              className="text-gray-300 font-medium cursor-pointer flex-1"
            >
              {item.label}
            </Label>
          </div>
        ))}
      </div>

      <div className="flex gap-3 bg-[#0d1e21] border border-[#53DDF5]/20 p-4 rounded-xl items-start mb-8">
        <Shield className="text-[#53DDF5] shrink-0 mt-0.5" size={18} />
        <p className="text-gray-400 text-sm">
          Your data is protected and used solely to enhance your OnyxSport AI
          experience. We comply with all data protection regulations.
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
          onClick={onComplete}
          disabled={!allConsented}
          className={`px-8 h-11 rounded-xl font-medium ${
            allConsented
              ? "bg-[#53DDF5] hover:bg-[#53DDF5]/90 text-slate-950"
              : "bg-slate-700 text-gray-500 cursor-not-allowed"
          }`}
        >
          Go to dashboard &gt;
        </Button>
      </div>
    </div>
  );
}
