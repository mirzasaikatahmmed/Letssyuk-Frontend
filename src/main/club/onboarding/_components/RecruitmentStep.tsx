import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { useState, useEffect } from 'react';
import {
  useUpsertRecruitmentMutation,
  useGetClubOnboardingQuery,
} from '@/redux/api/clubOnboardingApi';
import { toast } from 'sonner';
import Loading from '@/components/share/Loading/Loading';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface RecruitmentStepProps {
  onNext: () => void;
  onBack: () => void;
}

const POSITIONS = [
  { id: 'FORWARD', label: 'Forward' },
  { id: 'MIDFIELDER', label: 'Midfielder' },
  { id: 'DEFENDER', label: 'Defender' },
  { id: 'GOALKEEPER', label: 'Goalkeeper' },
];

const CONTRACT_TYPES = [
  { id: 'TRIAL', label: 'Trial' },
  { id: 'SHORT_TERM', label: 'Short-term' },
  { id: 'SEASON_LONG', label: 'Season-long' },
];

export default function RecruitmentStep({
  onNext,
  onBack,
}: RecruitmentStepProps) {
  const [isRecruiting, setIsRecruiting] = useState<boolean>(true);
  const [positions, setPositions] = useState<string[]>([]);
  const [ageRangeMin, setAgeRangeMin] = useState<number>(18);
  const [ageRangeMax, setAgeRangeMax] = useState<number>(23);
  const [contractTypes, setContractTypes] = useState<string[]>([]);

  const { data: onboardingData, isLoading: isFetching } = useGetClubOnboardingQuery({});
  const [upsertRecruitment, { isLoading: isSubmitting }] = useUpsertRecruitmentMutation();

  useEffect(() => {
    // Populate form if data exists
    if (onboardingData?.club?.recruitmentPreference) {
      const pref = onboardingData.club.recruitmentPreference;
      setIsRecruiting(pref.isRecruiting ?? true);
      setPositions(pref.positions || []);
      setAgeRangeMin(pref.minAge || 18);
      setAgeRangeMax(pref.maxAge || 23);
      setContractTypes(pref.contractTypes || []);
    }
  }, [onboardingData]);

  const handlePositionToggle = (positionId: string) => {
    setPositions(prev =>
      prev.includes(positionId)
        ? prev.filter((p) => p !== positionId)
        : [...prev, positionId]
    );
  };

  const handleContractToggle = (contractId: string) => {
    setContractTypes(prev =>
      prev.includes(contractId)
        ? prev.filter((c) => c !== contractId)
        : [...prev, contractId]
    );
  };

  const handleNext = async () => {
    if (isRecruiting && (positions.length === 0 || contractTypes.length === 0)) {
      toast.error('Please select both required positions and contract types.');
      return;
    }

    if (!onboardingData?.club?.id) {
      toast.error('Club information is missing. Please complete the previous steps first.');
      return;
    }

    try {
      if (isRecruiting) {
        await upsertRecruitment({
          clubId: onboardingData.club.id,
          isRecruiting,
          positions,
          minAge: ageRangeMin,
          maxAge: ageRangeMax,
          contractTypes,
        }).unwrap();
      } else {
        await upsertRecruitment({
          clubId: onboardingData.club.id,
          isRecruiting,
        }).unwrap();
      }

      toast.success('Recruitment preferences saved successfully!');
      onNext();
    } catch (error) {
      console.error('Failed to save recruitment preferences:', error);
      toast.error('Failed to save. Please check your network and try again.');
    }
  };

  if (isFetching) {
    return <Loading count={3} className="bg-transparent max-w-2xl mx-auto" />;
  }

  return (
    <div className="w-full max-w-2xl border border-slate-700/50 rounded-xl p-8 bg-[#0F151B]">
      <h2 className="text-2xl font-bold text-slate-100 mb-2">
        Recruitment & Opportunities
      </h2>
      <p className="text-slate-400 text-sm mb-6">
        This information helps OnySport AI surface suitable player opportunities.
      </p>

      <div className="space-y-8">
        {/* Recruiting Toggle */}
        <div className="flex items-center justify-between p-4 rounded-xl bg-slate-800/40 border border-slate-700/60">
          <Label className="text-slate-200 font-semibold cursor-pointer">
            Are you currently recruiting players?
          </Label>
          <Switch
            checked={isRecruiting}
            onCheckedChange={setIsRecruiting}
            className="data-[state=checked]:bg-[#1D7980]"
          />
        </div>

        {/* Show positions and contract types only if recruiting */}
        {isRecruiting && (
          <div className="animate-in fade-in duration-300 space-y-8">
            {/* Positions */}
            <div>
              <Label className="text-slate-300 font-semibold mb-4 block">
                Positions Currently Needed <span className="text-slate-500">*</span>
              </Label>
              <div className="grid grid-cols-2 gap-4">
                {POSITIONS.map((position) => (
                  <div key={position.id} className="flex items-center gap-3">
                    <Checkbox
                      id={`position-${position.id}`}
                      checked={positions.includes(position.id)}
                      onCheckedChange={() => handlePositionToggle(position.id)}
                      className="w-4 h-4 rounded border-slate-500 bg-[#0F151B] data-[state=checked]:bg-[#1D7980] data-[state=checked]:border-[#1D7980]"
                    />
                    <Label
                      htmlFor={`position-${position.id}`}
                      className="text-slate-300 font-normal cursor-pointer text-sm"
                    >
                      {position.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Age Range */}
            <div>
              <Label className="text-slate-300 font-semibold mb-4 block">
                Age Range: {ageRangeMin} - {ageRangeMax} years
              </Label>
              <div className="space-y-6">
                <div>
                  <Label className="text-slate-500 text-sm block mb-2">
                    Min Age
                  </Label>
                  <Slider
                    value={[ageRangeMin]}
                    onValueChange={(value) => {
                      if (value[0] <= ageRangeMax) setAgeRangeMin(value[0]);
                    }}
                    min={10}
                    max={60}
                    step={1}
                    className="w-full"
                  />
                </div>
                <div>
                  <Label className="text-slate-500 text-sm block mb-2">
                    Max Age
                  </Label>
                  <Slider
                    value={[ageRangeMax]}
                    onValueChange={(value) => {
                      if (value[0] >= ageRangeMin) setAgeRangeMax(value[0]);
                    }}
                    min={10}
                    max={60}
                    step={1}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Contract Types */}
            <div>
              <Label className="text-slate-300 font-semibold mb-4 block">
                Contract Type <span className="text-slate-500">*</span>
              </Label>
              <div className="space-y-3">
                {CONTRACT_TYPES.map((contract) => (
                  <div key={contract.id} className="flex items-center gap-3">
                    <Checkbox
                      id={`contract-${contract.id}`}
                      checked={contractTypes.includes(contract.id)}
                      onCheckedChange={() => handleContractToggle(contract.id)}
                      className="w-4 h-4 rounded border-slate-500 bg-[#0F151B] data-[state=checked]:bg-[#1D7980] data-[state=checked]:border-[#1D7980]"
                    />
                    <Label
                      htmlFor={`contract-${contract.id}`}
                      className="text-slate-300 font-normal cursor-pointer text-sm"
                    >
                      {contract.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="h-px bg-slate-800/80 w-full my-6 mt-10"></div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center gap-4">
        <Button
          onClick={onBack}
          disabled={isSubmitting}
          variant="outline"
          className="border-slate-700 bg-transparent text-slate-300 px-5 py-2 h-10 hover:bg-slate-800/50 hover:text-white rounded-lg cursor-pointer disabled:opacity-50"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back
        </Button>
        <Button
          onClick={handleNext}
          disabled={isSubmitting}
          className="bg-[#1B575D] hover:bg-[#1D636A] text-slate-100 font-medium px-5 py-2 h-10 rounded-lg cursor-pointer disabled:opacity-50 transition-colors"
        >
          {isSubmitting ? "Saving..." : "Next"}
          {!isSubmitting && <ChevronRight className="h-4 w-4 ml-1 opacity-80" />}
        </Button>
      </div>
    </div>
  );
}
