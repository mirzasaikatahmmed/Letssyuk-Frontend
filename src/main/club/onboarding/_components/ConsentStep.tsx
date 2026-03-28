import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useState, useEffect } from 'react';
import {
  useUpsertConsentMutation,
  useGetClubOnboardingQuery,
} from '@/redux/api/clubOnboardingApi';
import { toast } from 'sonner';
import Loading from '@/components/share/Loading/Loading';
import { ChevronLeft, CheckCircle } from 'lucide-react';

interface ConsentStepProps {
  onComplete: () => void;
  onBack: () => void;
}

const CONSENT_ITEMS = [
  {
    id: 'analysisOfMatchAndPlayerData',
    title: 'AI Analysis of Match and Player Data',
    description:
      'I consent to OnySport AI analyzing match performance and player statistics to provide insights and recommendations.',
  },
  {
    id: 'sharingRecruitmentNeeds',
    title: 'Sharing Recruitment Needs',
    description:
      'I consent to sharing recruitment needs for opportunity intelligence and matching with suitable players.',
  },
  {
    id: 'dataStorageAndGDPRCompliance',
    title: 'Data Storage and GDPR Compliance',
    description:
      'I consent to data storage in line with GDPR regulations and understand my rights to access, modify, or delete my data at any time.',
  },
] as const;

export default function ConsentStep({
  onComplete,
  onBack,
}: ConsentStepProps) {
  const [consents, setConsents] = useState<Record<string, boolean>>({
    analysisOfMatchAndPlayerData: false,
    sharingRecruitmentNeeds: false,
    dataStorageAndGDPRCompliance: false,
  });

  const { data: onboardingData, isLoading: isFetching } = useGetClubOnboardingQuery({});
  const [upsertConsent, { isLoading: isSubmitting }] = useUpsertConsentMutation();

  useEffect(() => {
    if (onboardingData?.club?.consent) {
      const dbConsent = onboardingData.club.consent;
      setConsents({
        analysisOfMatchAndPlayerData: dbConsent.analysisOfMatchAndPlayerData || false,
        sharingRecruitmentNeeds: dbConsent.sharingRecruitmentNeeds || false,
        dataStorageAndGDPRCompliance: dbConsent.dataStorageAndGDPRCompliance || false,
      });
    }
  }, [onboardingData]);

  const handleConsentToggle = (consentId: string) => {
    setConsents(prev => ({
      ...prev,
      [consentId]: !prev[consentId]
    }));
  };

  const allConsented = Object.values(consents).every(Boolean);

  const handleComplete = async () => {
    if (!allConsented) {
      toast.error('Please accept all consent items to proceed.');
      return;
    }

    if (!onboardingData?.club?.id) {
      toast.error('Club information is missing. Please complete the previous steps first.');
      return;
    }

    try {
      await upsertConsent({
        clubId: onboardingData.club.id,
        ...consents,
      }).unwrap();

      toast.success('Onboarding completed successfully!');
      onComplete(); // Navigate on success
    } catch (error) {
      console.error('Failed to save consent:', error);
      toast.error('Failed to save. Please check your network and try again.');
    }
  };

  if (isFetching) {
    return <Loading count={3} className="bg-transparent max-w-2xl mx-auto" />;
  }

  return (
    <div className="w-full max-w-2xl border border-slate-700/50 rounded-xl p-8 bg-[#0F151B]">
      <h2 className="text-2xl font-bold text-slate-100 mb-2">
        Consent & Compliance
      </h2>
      <p className="text-slate-400 text-sm mb-6">
        Please review and accept the following to continue
      </p>

      <div className="space-y-4 mb-8">
        {CONSENT_ITEMS.map((item) => (
          <div
            key={item.id}
            className={`flex items-start gap-4 p-4 rounded-xl border transition-colors ${
              consents[item.id]
                ? 'bg-[#1D7980]/15 border-[#1D7980]/70' 
                : 'bg-slate-800/40 border-slate-700/60 hover:border-slate-500/80'
            }`}
          >
            <Checkbox
              id={item.id}
              checked={consents[item.id]}
              onCheckedChange={() => handleConsentToggle(item.id)}
              className="mt-1 w-5 h-5 rounded border-slate-500 bg-[#0F151B] data-[state=checked]:bg-[#1D7980] data-[state=checked]:border-[#1D7980]"
            />
            <div className="flex-1">
              <Label
                htmlFor={item.id}
                className="text-slate-200 font-semibold cursor-pointer block text-base leading-none mb-2"
              >
                {item.title}
              </Label>
              <Label
                htmlFor={item.id}
                className="text-slate-400 text-sm cursor-pointer font-normal block leading-tight"
              >
                {item.description}
              </Label>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-5 mb-8">
        <p className="text-slate-400 text-sm leading-relaxed">
          By completing this setup, you agree to OnySport AI's Terms of Service
          and Privacy Policy. Your data is encrypted and stored securely.
        </p>
      </div>

      <div className="h-px bg-slate-800/80 w-full my-6"></div>

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
          onClick={handleComplete}
          disabled={!allConsented || isSubmitting}
          className={`font-semibold px-5 py-2 h-10 rounded-lg transition-colors ${
            allConsented
              ? 'bg-[#1D7980] hover:bg-[#196b72] text-white cursor-pointer'
              : 'bg-slate-800 text-slate-500 cursor-not-allowed border-none hover:bg-slate-800 hover:text-slate-500'
          }`}
        >
          {isSubmitting ? "Finishing..." : "Go to dashboard"}
          {!isSubmitting && <CheckCircle className="h-4 w-4 ml-2 opacity-80" />}
        </Button>
      </div>
    </div>
  );
}
