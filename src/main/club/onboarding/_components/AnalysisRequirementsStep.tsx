import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useState, useEffect } from 'react';
import {
  useUpsertServicesMutation,
  useGetClubOnboardingQuery,
} from '@/redux/api/clubOnboardingApi';
import { toast } from 'sonner';
import Loading from '@/components/share/Loading/Loading';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface AnalysisRequirementsStepProps {
  onNext: () => void;
  onBack: () => void;
}

const SERVICES = [
  {
    id: 'SCOUTING',
    title: 'Scouting',
    description: 'Player recruitment and talent identification',
  },
  {
    id: 'TACTICAL_ANALYSIS',
    title: 'Tactical analysis',
    description: 'Team tactics and formation analysis',
  },
  {
    id: 'ACADEMY_DEVELOPMENT_TRACKING',
    title: 'Academy development tracking',
    description: 'Youth player progression monitoring',
  },
];

export default function AnalysisRequirementsStep({
  onNext,
  onBack,
}: AnalysisRequirementsStepProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const { data: onboardingData, isLoading: isFetching } = useGetClubOnboardingQuery({});
  const [upsertServices, { isLoading: isSubmitting }] = useUpsertServicesMutation();

  useEffect(() => {
    if (onboardingData?.club?.services && onboardingData.club.services.length > 0) {
      setSelectedServices(onboardingData.club.services.map((s: any) => s.serviceKey));
    }
  }, [onboardingData]);

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter((s) => s !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleNext = async () => {
    if (selectedServices.length === 0) {
      toast.error('Please select at least one analysis requirement.');
      return;
    }

    if (!onboardingData?.club?.id) {
      toast.error('Club information is missing. Please complete the previous steps first.');
      return;
    }

    try {
      await upsertServices({
        clubId: onboardingData.club.id,
        services: selectedServices,
      }).unwrap();

      toast.success('Analysis requirements saved successfully!');
      onNext();
    } catch (error) {
      console.error('Failed to save analysis requirements:', error);
      toast.error('Failed to save. Please check your network and try again.');
    }
  };

  if (isFetching) {
    return <Loading count={3} className="bg-transparent max-w-2xl mx-auto" />;
  }

  return (
    <div className="w-full max-w-2xl border border-slate-700/50 rounded-xl p-8 bg-[#0F151B]">
      <h2 className="text-2xl font-bold text-slate-100 mb-2">
        Analysis Requirements
      </h2>
      <p className="text-slate-400 text-sm mb-6">
        What services do you want from OnySport AI?
      </p>

      <div className="space-y-4 mb-8">
        {SERVICES.map((service) => (
          <div key={service.id}>
            <div 
              className={`flex items-start gap-4 p-4 rounded-xl border transition-colors ${
                selectedServices.includes(service.id) 
                  ? 'bg-[#1D7980]/15 border-[#1D7980]/70' 
                  : 'bg-slate-800/40 border-slate-700/60 hover:border-slate-500/80'
              }`}
            >
              <Checkbox
                id={service.id}
                checked={selectedServices.includes(service.id)}
                onCheckedChange={() => handleServiceToggle(service.id)}
                className="mt-1 w-5 h-5 rounded border-slate-500 bg-[#0F151B] data-[state=checked]:bg-[#1D7980] data-[state=checked]:border-[#1D7980]"
              />
              <div className="flex-1">
                <Label
                  htmlFor={service.id}
                  className="text-slate-200 font-semibold cursor-pointer block text-base"
                >
                  {service.title}
                </Label>
                <Label
                  htmlFor={service.id}
                  className="text-slate-400 text-sm mt-1 cursor-pointer font-normal block"
                >
                  {service.description}
                </Label>
              </div>
            </div>
          </div>
        ))}
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
