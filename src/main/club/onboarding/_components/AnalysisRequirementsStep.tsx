
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useFormContext } from '../context/FormContext';

interface AnalysisRequirementsStepProps {
  onNext: () => void;
  onBack: () => void;
}

const SERVICES = [
  {
    id: 'scouting',
    title: 'Scouting',
    description: 'Player recruitment and talent identification',
  },
  {
    id: 'tactical',
    title: 'Tactical analysis',
    description: 'Team tactics and formation analysis',
  },
  {
    id: 'academy',
    title: 'Academy development tracking',
    description: 'Youth player progression monitoring',
  },
];

export default function AnalysisRequirementsStep({
  onNext,
  onBack,
}: AnalysisRequirementsStepProps) {
  const { formData, updateFormData } = useFormContext();

  const handleServiceToggle = (serviceId: string) => {
    const newServices = formData.services.includes(serviceId)
      ? formData.services.filter((s) => s !== serviceId)
      : [...formData.services, serviceId];
    updateFormData({ services: newServices });
  };

  const handleNext = () => {
    if (formData.services.length > 0) {
      onNext();
    }
  };

  return (
    <div className="w-full max-w-2xl border border-cyan-500/50 rounded-xl p-8 bg-[#235D671A]">
      <h2 className="text-2xl font-bold text-white mb-2">
        Analysis Requirements
      </h2>
      <p className="text-gray-400 text-sm mb-6">
        What services do you want from OnySport AI?
      </p>

      <div className="space-y-4 mb-8">
        {SERVICES.map((service) => (
          <div key={service.id}>
            <div className="flex items-start gap-3 p-4 rounded-lg border border-slate-700 bg-slate-800/50 hover:border-cyan-500/30 cursor-pointer transition-colors">
              <Checkbox
                id={service.id}
                checked={formData.services.includes(service.id)}
                onCheckedChange={() => handleServiceToggle(service.id)}
                className="mt-1 w-5 h-5 rounded border-gray-500 bg-slate-700 accent-cyan-400"
              />
              <div className="flex-1">
                <Label
                  htmlFor={service.id}
                  className="text-white font-semibold cursor-pointer block"
                >
                  {service.title}
                </Label>
                <p className="text-gray-400 text-sm mt-1">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between gap-4 mt-8">
        <Button
          onClick={onBack}
          variant="outline"
          className="border-slate-600 text-gray-400 hover:bg-slate-800 px-6 py-2 bg-transparent cursor-pointer"
        >
          ← Back
        </Button>
        <Button
          onClick={handleNext}
          className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold px-6 py-2 rounded-lg cursor-pointer"
        >
          Next →
        </Button>
      </div>
    </div>
  );
}
