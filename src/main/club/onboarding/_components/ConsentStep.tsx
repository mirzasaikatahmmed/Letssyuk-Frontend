

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useFormContext } from '../context/FormContext';

interface ConsentStepProps {
  onComplete: () => void;
  onBack: () => void;
}

const CONSENT_ITEMS = [
  {
    id: 'ai-analysis',
    title: 'AI Analysis of Match and Player Data',
    description:
      'I consent to OnySport AI analyzing match performance and player statistics to provide insights and recommendations.',
  },
  {
    id: 'sharing-recruitment',
    title: 'Sharing Recruitment Needs',
    description:
      'I consent to sharing recruitment needs for opportunity intelligence and matching with suitable players.',
  },
  {
    id: 'data-storage',
    title: 'Data Storage and GDPR Compliance',
    description:
      'I consent to data storage in line with GDPR regulations and understand my rights to access, modify, or delete my data at any time.',
  },
];

export default function ConsentStep({
  onComplete,
  onBack,
}: ConsentStepProps) {
  const { formData, updateFormData } = useFormContext();

  const handleConsentToggle = (consentId: string) => {
    const newConsent = formData.consent.includes(consentId)
      ? formData.consent.filter((c) => c !== consentId)
      : [...formData.consent, consentId];
    updateFormData({ consent: newConsent });
  };

  const handleComplete = () => {
    if (formData.consent.length === CONSENT_ITEMS.length) {
      onComplete();
    }
  };

  const allConsented =
    formData.consent.length === CONSENT_ITEMS.length;

  return (
    <div className="w-full max-w-2xl border border-cyan-500/50 rounded-xl p-8 bg-[#235D6710]">
      <h2 className="text-2xl font-bold text-white mb-2">
        Consent & Compliance
      </h2>
      <p className="text-gray-400 text-sm mb-6">
        Please review and accept the following to continue
      </p>

      <div className="space-y-4 mb-8">
        {CONSENT_ITEMS.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-3 p-4 rounded-lg border border-slate-700 bg-[#235D671A] hover:border-cyan-500/30 transition-colors"
          >
            <Checkbox
              id={item.id}
              checked={formData.consent.includes(item.id)}
              onCheckedChange={() => handleConsentToggle(item.id)}
              className="mt-1 w-5 h-5 rounded border-gray-500 bg-slate-700 accent-cyan-400 cursor-pointer"
            />
            <div className="flex-1">
              <Label
                htmlFor={item.id}
                className="text-white font-semibold cursor-pointer block"
              >
                {item.title}
              </Label>
              <p className="text-gray-400 text-sm mt-1">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 mb-8">
        <p className="text-gray-400 text-sm">
          By completing this setup, you agree to OnySport AI's Terms of Service
          and Privacy Policy. Your data is encrypted and stored securely.
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between gap-4">
        <Button
          onClick={onBack}
          variant="outline"
          className="border-slate-600 text-gray-400 hover:bg-slate-800 px-6 py-2 bg-transparent  cursor-pointer"
        >
          ← Back
        </Button>
        <Button
          onClick={handleComplete}
          disabled={!allConsented}
          className={`font-semibold px-6 py-2 rounded-lg  cursor-pointer ${
            allConsented
              ? 'bg-cyan-500 hover:bg-cyan-600 text-slate-950'
              : 'bg-slate-700 text-gray-400 cursor-not-allowed'
          }`}
        >
          Go to dashboard →
        </Button>
      </div>
    </div>
  );
}
