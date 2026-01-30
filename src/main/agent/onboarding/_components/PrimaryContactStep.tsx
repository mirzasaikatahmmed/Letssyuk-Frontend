
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useFormContext } from '../context/FormContext';

interface PrimaryContactStepProps {
  onNext: () => void;
  onBack: () => void;
}

export default function PrimaryContactStep({
  onNext,
  onBack,
}: PrimaryContactStepProps) {
  const { formData, updateFormData } = useFormContext();

  const handleNext = () => {
    if (
      formData.fullName &&
      formData.role &&
      formData.email &&
      formData.phone
    ) {
      onNext();
    }
  };

  return (
    <div className="w-full max-w-2xl border border-cyan-500/50 rounded-xl p-8 bg-[#235D671A]">
      <h2 className="text-2xl font-bold text-white mb-2">Primary Contact</h2>
      <p className="text-gray-400 text-sm mb-6">
        Primary dashboard administrator
      </p>

      <div className="space-y-6">
        {/* Full Name */}
        <div>
          <Label htmlFor="fullName" className="text-white mb-2 block">
            Full Name <span className="text-red-400">*</span>
          </Label>
          <Input
            id="fullName"
            placeholder="e.g., John Smith"
            value={formData.fullName}
            onChange={(e) =>
              updateFormData({ fullName: e.target.value })
            }
            className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400"
          />
        </div>

        {/* Role */}
        <div>
          <Label htmlFor="role" className="text-white mb-2 block">
            Role <span className="text-red-400">*</span>
          </Label>
          <Input
            id="role"
            placeholder="e.g., Analyzer, instructor"
            value={formData.role}
            onChange={(e) =>
              updateFormData({ role: e.target.value })
            }
            className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400"
          />
        </div>

        {/* Email and Phone */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email" className="text-white mb-2 block">
              Email Address <span className="text-red-400">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john.smith@club.com"
              value={formData.email}
              onChange={(e) =>
                updateFormData({ email: e.target.value })
              }
              className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-white mb-2 block">
              Phone / Whatsapp <span className="text-red-400">*</span>
            </Label>
            <Input
              id="phone"
              placeholder="+44 7700 900000"
              value={formData.phone}
              onChange={(e) =>
                updateFormData({ phone: e.target.value })
              }
              className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400"
            />
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
