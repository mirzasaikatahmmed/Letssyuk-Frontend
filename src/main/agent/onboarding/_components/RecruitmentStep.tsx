

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { useFormContext } from '../context/FormContext';

interface RecruitmentStepProps {
  onNext: () => void;
  onBack: () => void;
}

const POSITIONS = [
  { id: 'forward', label: 'Forward' },
  { id: 'midfielder', label: 'Midfielder' },
  { id: 'defender', label: 'Defender' },
  { id: 'goalkeeper', label: 'Goalkeeper' },
];

const CONTRACT_TYPES = [
  { id: 'trial', label: 'Trial' },
  { id: 'short-term', label: 'Short-term' },
  { id: 'season-long', label: 'Season-long' },
];

export default function RecruitmentStep({
  onNext,
  onBack,
}: RecruitmentStepProps) {
  const { formData, updateFormData } = useFormContext();

  const handlePositionToggle = (positionId: string) => {
    const newPositions = formData.positions.includes(positionId)
      ? formData.positions.filter((p) => p !== positionId)
      : [...formData.positions, positionId];
    updateFormData({ positions: newPositions });
  };

  const handleContractToggle = (contractId: string) => {
    const newContracts = formData.contractTypes.includes(contractId)
      ? formData.contractTypes.filter((c) => c !== contractId)
      : [...formData.contractTypes, contractId];
    updateFormData({ contractTypes: newContracts });
  };

  const handleNext = () => {
    if (
      !formData.isRecruiting ||
      (formData.positions.length > 0 &&
        formData.contractTypes.length > 0)
    ) {
      onNext();
    }
  };

  return (
    <div className="w-full max-w-2xl border border-cyan-500/50 rounded-xl p-8 bg-[#235D671A]">
      <h2 className="text-2xl font-bold text-white mb-2">
        Recruitment & Opportunities
      </h2>
      <p className="text-gray-400 text-sm mb-6">
        This information helps OnySport AI surface suitable player opportunities.
      </p>

      <div className="space-y-8">
        {/* Recruiting Toggle */}
        <div className="flex items-center justify-between p-4 rounded-lg bg-slate-800/50 border border-slate-700">
          <Label className="text-white font-semibold cursor-pointer">
            Are you currently recruiting players?
          </Label>
          <Switch
            checked={formData.isRecruiting}
            onCheckedChange={(checked) =>
              updateFormData({ isRecruiting: checked })
            }
            className="data-[state=checked]:bg-cyan-500"
          />
        </div>

        {/* Show positions and contract types only if recruiting */}
        {formData.isRecruiting && (
          <>
            {/* Positions */}
            <div>
              <Label className="text-white font-semibold mb-4 block">
                Positions Currently Needed <span className="text-red-400">*</span>
              </Label>
              <div className="grid grid-cols-2 gap-4">
                {POSITIONS.map((position) => (
                  <div key={position.id} className="flex items-center gap-3">
                    <Checkbox
                      id={`position-${position.id}`}
                      checked={formData.positions.includes(position.id)}
                      onCheckedChange={() =>
                        handlePositionToggle(position.id)
                      }
                      className="w-4 h-4 rounded border-gray-500 bg-slate-700 accent-cyan-400"
                    />
                    <Label
                      htmlFor={`position-${position.id}`}
                      className="text-white cursor-pointer"
                    >
                      {position.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Age Range */}
            <div>
              <Label className="text-white font-semibold mb-4 block">
                Age Range: {formData.ageRangeMin} - {formData.ageRangeMax} years
              </Label>
              <div className="space-y-6">
                <div>
                  <Label className="text-gray-400 text-sm block mb-2">
                    Min Age
                  </Label>
                  <Slider
                    value={[formData.ageRangeMin]}
                    onValueChange={(value) =>
                      updateFormData({ ageRangeMin: value[0] })
                    }
                    min={16}
                    max={60}
                    step={1}
                    className="w-full "
                  />
                </div>
                <div>
                  <Label className="text-gray-400 text-sm block mb-2">
                    Max Age
                  </Label>
                  <Slider
                    value={[formData.ageRangeMax]}
                    onValueChange={(value) =>
                      updateFormData({ ageRangeMax: value[0] })
                    }
                    min={16}
                    max={60}
                    step={1}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Contract Types */}
            <div>
              <Label className="text-white font-semibold mb-4 block">
                Contract Type <span className="text-red-400">*</span>
              </Label>
              <div className="space-y-3">
                {CONTRACT_TYPES.map((contract) => (
                  <div key={contract.id} className="flex items-center gap-3">
                    <Checkbox
                      id={`contract-${contract.id}`}
                      checked={formData.contractTypes.includes(contract.id)}
                      onCheckedChange={() =>
                        handleContractToggle(contract.id)
                      }
                      className="w-4 h-4 rounded border-gray-500 bg-slate-700 accent-cyan-400"
                    />
                    <Label
                      htmlFor={`contract-${contract.id}`}
                      className="text-white cursor-pointer"
                    >
                      {contract.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between gap-4 mt-8">
        <Button
          onClick={onBack}
          variant="outline"
          className="border-slate-600 text-gray-400 hover:bg-slate-800 px-6 py-2 bg-transparent  cursor-pointer"
        >
          ← Back
        </Button>
        <Button
          onClick={handleNext}
          className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold px-6 py-2 rounded-lg  cursor-pointer"
        >
          Next →
        </Button>
      </div>
    </div>
  );
}
