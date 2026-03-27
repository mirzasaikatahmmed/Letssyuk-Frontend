import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useState, useEffect } from 'react';
import {
  useUpsertOutputMutation,
  useGetClubOnboardingQuery,
} from '@/redux/api/clubOnboardingApi';
import { toast } from 'sonner';
import Loading from '@/components/share/Loading/Loading';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface OutputPreferencesStepProps {
  onNext: () => void;
  onBack: () => void;
}

const REPORT_FREQUENCIES = [
  { id: 'MATCH_BY_MATCH', label: 'Match-by-match', description: 'After every game' },
  { id: 'WEEKLY', label: 'Weekly', description: 'End of each week' },
  { id: 'MONTHLY', label: 'Monthly', description: 'End of each month' },
];

const DELIVERY_METHODS = [
  { id: 'PDF', label: 'PDF' },
  { id: 'DASHBOARD', label: 'Dashboard' },
];

export default function OutputPreferencesStep({
  onNext,
  onBack,
}: OutputPreferencesStepProps) {
  const [frequency, setFrequency] = useState<string>('');
  const [channels, setChannels] = useState<string[]>([]);

  const { data: onboardingData, isLoading: isFetching } = useGetClubOnboardingQuery({});
  const [upsertOutput, { isLoading: isSubmitting }] = useUpsertOutputMutation();

  useEffect(() => {
    if (onboardingData?.club?.outputPreference) {
      const pref = onboardingData.club.outputPreference;
      setFrequency(pref.frequency || '');
      setChannels(pref.channels || []);
    }
  }, [onboardingData]);

  const handleDeliveryToggle = (methodId: string) => {
    setChannels(prev =>
      prev.includes(methodId)
        ? prev.filter((m) => m !== methodId)
        : [...prev, methodId]
    );
  };

  const handleNext = async () => {
    if (!frequency || channels.length === 0) {
      toast.error('Please select both a report frequency and at least one delivery method.');
      return;
    }

    if (!onboardingData?.club?.id) {
      toast.error('Club information is missing. Please complete the previous steps first.');
      return;
    }

    try {
      await upsertOutput({
        clubId: onboardingData.club.id,
        frequency,
        channels,
      }).unwrap();

      toast.success('Output preferences saved successfully!');
      onNext();
    } catch (error) {
      console.error('Failed to save output preferences:', error);
      toast.error('Failed to save. Please check your network and try again.');
    }
  };

  if (isFetching) {
    return <Loading count={3} className="bg-transparent max-w-2xl mx-auto" />;
  }

  return (
    <div className="w-full max-w-2xl border border-slate-700/50 rounded-xl p-8 bg-[#0F151B]">
      <h2 className="text-2xl font-bold text-slate-100 mb-2">Output Preferences</h2>
      <p className="text-slate-400 text-sm mb-6">
        How would you like to receive your analytics reports?
      </p>

      <div className="space-y-8">
        {/* Report Frequency */}
        <div>
          <Label className="text-slate-300 font-semibold mb-4 block">
            Report Frequency <span className="text-slate-500">*</span>
          </Label>
          <div className="space-y-3">
            {REPORT_FREQUENCIES.map((freq) => (
              <div 
                key={freq.id} 
                className={`flex items-start gap-4 border p-4 rounded-xl transition-colors cursor-pointer ${
                  frequency === freq.id 
                    ? 'bg-[#1D7980]/15 border-[#1D7980]/70' 
                    : 'bg-slate-800/40 border-slate-700/60 hover:border-slate-500/80'
                }`}
                onClick={() => setFrequency(freq.id)}
              >
                <div 
                  className={`mt-1 flex h-5 w-5 rounded-full border border-slate-500 items-center justify-center shrink-0 ${
                    frequency === freq.id ? 'border-[#1D7980]' : ''
                  }`}
                >
                  {frequency === freq.id && (
                    <div className="h-2.5 w-2.5 rounded-full bg-[#1D7980]" />
                  )}
                </div>
                <div className="flex flex-col pointer-events-none">
                  <span className="text-slate-200 font-semibold text-base leading-none">{freq.label}</span>
                  <span className="text-sm text-slate-400 mt-2 font-normal leading-none">
                    {freq.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Preferred Delivery */}
        <div>
          <Label className="text-slate-300 font-semibold mb-4 block">
            Preferred Delivery <span className="text-slate-500">*</span>
          </Label>
          <div className="space-y-3">
            {DELIVERY_METHODS.map((method) => (
              <div 
                key={method.id} 
                className={`flex items-center gap-3 border p-4 rounded-xl transition-colors ${
                  channels.includes(method.id)
                    ? 'bg-[#1D7980]/15 border-[#1D7980]/70' 
                    : 'bg-slate-800/40 border-slate-700/60 hover:border-slate-500/80'
                }`}
              >
                <Checkbox
                  id={`delivery-${method.id}`}
                  checked={channels.includes(method.id)}
                  onCheckedChange={() => handleDeliveryToggle(method.id)}
                  className="w-5 h-5 rounded border-slate-500 bg-[#0F151B] data-[state=checked]:bg-[#1D7980] data-[state=checked]:border-[#1D7980]"
                />
                <Label
                  htmlFor={`delivery-${method.id}`}
                  className="text-slate-200 font-semibold cursor-pointer text-base leading-none"
                >
                  {method.label}
                </Label>
              </div>
            ))}
          </div>
        </div>
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
