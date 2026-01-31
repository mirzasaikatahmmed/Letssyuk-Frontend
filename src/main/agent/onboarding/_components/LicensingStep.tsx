import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useClubFormContext } from "../context/AgentFormContext";
import { Shield } from "lucide-react";

interface LicensingStepProps {
  onNext: () => void;
  onBack: () => void;
}

export default function LicensingStep({ onNext, onBack }: LicensingStepProps) {
  const { formData, updateFormData } = useClubFormContext();

  return (
    <div className="w-full max-w-2xl border border-[#53DDF5]/30 rounded-2xl p-8 bg-[#11161D]">
      <h2 className="text-2xl font-bold text-white mb-2">
        Licensing Verification
      </h2>
      <p className="text-gray-400 text-sm mb-6">
        Verify your professional credentials
      </p>

      <div className="space-y-6">
        <div>
          <Label className="text-gray-300 text-sm font-medium block mb-3">
            Are you registered with a league?{" "}
            <span className="text-red-400">*</span>
          </Label>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => updateFormData({ isLicensed: true })}
              className={`p-6 rounded-xl border-2 text-left transition-all ${
                formData.isLicensed
                  ? "border-[#53DDF5] bg-[#53DDF5]/10 text-white"
                  : "border-slate-700 bg-[#161d26] text-gray-400 hover:border-slate-600"
              }`}
            >
              <span className="block font-bold text-lg">Yes</span>
              <span className="block text-sm mt-1 opacity-80">
                I am registered with a league
              </span>
            </button>
            <button
              type="button"
              onClick={() => updateFormData({ isLicensed: false })}
              className={`p-6 rounded-xl border-2 text-left transition-all ${
                !formData.isLicensed
                  ? "border-[#53DDF5] bg-[#53DDF5]/10 text-white"
                  : "border-slate-700 bg-[#161d26] text-gray-400 hover:border-slate-600"
              }`}
            >
              <span className="block font-bold text-lg">No</span>
              <span className="block text-sm mt-1 opacity-80">
                Not yet registered
              </span>
            </button>
          </div>
        </div>

        {formData.isLicensed && (
          <>
            <div>
              <Label
                htmlFor="authority"
                className="text-gray-300 text-sm font-medium"
              >
                League / Licensing Authority
              </Label>
              <Input
                id="authority"
                placeholder="e.g., The FA, FIFA, etc."
                value={formData.licensingAuthority}
                onChange={(e) =>
                  updateFormData({ licensingAuthority: e.target.value })
                }
                className="mt-2 bg-[#161d26] border-slate-700 text-white placeholder:text-gray-500 focus:border-[#53DDF5]/50 h-12 rounded-xl"
              />
            </div>
            <div>
              <Label
                htmlFor="licenseNumber"
                className="text-gray-300 text-sm font-medium"
              >
                Registration Number{" "}
                <span className="text-gray-500 text-xs">(Optional)</span>
              </Label>
              <Input
                id="licenseNumber"
                placeholder="Enter your registration number"
                value={formData.licenseNumber}
                onChange={(e) =>
                  updateFormData({ licenseNumber: e.target.value })
                }
                className="mt-2 bg-[#161d26] border-slate-700 text-white placeholder:text-gray-500 focus:border-[#53DDF5]/50 h-12 rounded-xl"
              />
            </div>
          </>
        )}

        <div className="flex gap-3 bg-[#0d1e21] border border-[#53DDF5]/20 p-4 rounded-xl items-start">
          <Shield className="text-[#53DDF5] shrink-0 mt-0.5" size={18} />
          <p className="text-gray-400 text-sm">
            Your documents are{" "}
            <span className="text-[#53DDF5]">
              encrypted and securely stored
            </span>{" "}
            in compliance with industry standards.
          </p>
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
          className="bg-[#53DDF5] hover:bg-[#53DDF5]/90 text-slate-950 font-medium px-8 h-11 rounded-xl"
        >
          Continue &gt;
        </Button>
      </div>
    </div>
  );
}
