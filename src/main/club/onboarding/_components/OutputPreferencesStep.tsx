
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useFormContext } from '../context/FormContext';

interface OutputPreferencesStepProps {
  onNext: () => void;
  onBack: () => void;
}

const REPORT_FREQUENCIES = [
  { id: 'match', label: 'Match-by-match', description: 'After every game' },
  { id: 'weekly', label: 'Weekly', description: 'End of each week' },
  { id: 'monthly', label: 'Monthly', description: 'End of each month' },
];

const DELIVERY_METHODS = [
  { id: 'pdf', label: 'PDF' },
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'both', label: 'Both' },
];

export default function OutputPreferencesStep({
  onNext,
  onBack,
}: OutputPreferencesStepProps) {
  const { formData, updateFormData } = useFormContext();

  const handleFrequencyToggle = (frequencyId: string) => {
    const newFrequencies = formData.reportFrequency.includes(frequencyId)
      ? formData.reportFrequency.filter((f) => f !== frequencyId)
      : [...formData.reportFrequency, frequencyId];
    updateFormData({ reportFrequency: newFrequencies });
  };

  const handleDeliveryToggle = (methodId: string) => {
    const newMethods = formData.deliveryMethods.includes(methodId)
      ? formData.deliveryMethods.filter((m) => m !== methodId)
      : [...formData.deliveryMethods, methodId];
    updateFormData({ deliveryMethods: newMethods });
  };

  const handleNext = () => {
    if (formData.reportFrequency.length > 0 && formData.deliveryMethods.length > 0) {
      onNext();
    }
  };

  return (
    <div className="w-full max-w-2xl border border-cyan-500/50 rounded-xl p-8 bg-[#235D671A]">
      <h2 className="text-2xl font-bold text-white mb-2">Output Preferences</h2>
      <p className="text-gray-400 text-sm mb-6">
        How would you like to receive your analytics reports?
      </p>

      <div className="space-y-8">
        {/* Report Frequency */}
        <div>
          <Label className="text-white font-semibold mb-4 block">
            Report Frequency <span className="text-red-400">*</span>
          </Label>
          <div className="space-y-3">
            {REPORT_FREQUENCIES.map((freq) => (
              <div key={freq.id} className="flex items-center gap-3 border border-[#235D6780] bg-[#235D6710] p-3  rounded-md">
                <Checkbox
                  id={`freq-${freq.id}`}
                  checked={formData.reportFrequency.includes(freq.id)}
                  onCheckedChange={() => handleFrequencyToggle(freq.id)}
                  className="w-4 h-4 rounded border-gray-500 bg-slate-700 accent-cyan-400 cursor-pointer"
                />
                <Label
                  htmlFor={`freq-${freq.id}`}
                  className="text-white cursor-pointer justify-start items-start gap-2 flex flex-col"
                >
                  <span>{freq.label}</span>
                  <span className="text-xs text-gray-400">
                    {freq.description}
                  </span>
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Preferred Delivery */}
        <div>
          <Label className="text-white font-semibold mb-4 block">
            Preferred Delivery <span className="text-red-400">*</span>
          </Label>
          <div className="space-y-3">
            {DELIVERY_METHODS.map((method) => (
              <div key={method.id} className="flex items-center gap-3 border border-[#235D6780] bg-[#235D6710] p-3  rounded-md">
                <Checkbox
                  id={`delivery-${method.id}`}
                  checked={formData.deliveryMethods.includes(method.id)}
                  onCheckedChange={() => handleDeliveryToggle(method.id)}
                  className="w-4 h-4 rounded border-gray-500 bg-slate-700 accent-cyan-400 cursor-pointer"
                />
                <Label
                  htmlFor={`delivery-${method.id}`}
                  className="text-white cursor-pointer"
                >
                  {method.label}
                </Label>
              </div>
            ))}
          </div>
        </div>
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
