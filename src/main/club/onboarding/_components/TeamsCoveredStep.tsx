

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useFormContext } from '../context/FormContext';

interface TeamsCoveredStepProps {
  onNext: () => void;
  onBack: () => void;
}

export default function TeamsCoveredStep({
  onNext,
  onBack,
}: TeamsCoveredStepProps) {
  const { formData, updateFormData } = useFormContext();

  const handleNext = () => {
    if (formData.selectedTeam && formData.numberOfTeams) {
      onNext();
    }
  };

  return (
    <div className="w-full max-w-2xl border border-cyan-500/50 rounded-xl p-8 bg-[#235D671A]">
      <h2 className="text-2xl font-bold text-white mb-2">Teams Covered</h2>
      <p className="text-gray-400 text-sm mb-6">
        Select which teams you want to analyse
      </p>

      <div className="space-y-6">
        {/* Teams to be analysed */}
        <div>
          <Label htmlFor="teams" className="text-white mb-2 block">
            Teams to be analysed <span className="text-red-400">*</span>
          </Label>
          <Select
            value={formData.selectedTeam}
            onValueChange={(value) =>
              updateFormData({ selectedTeam: value })
            }
          >
            <SelectTrigger className="bg-slate-800/50 border-slate-700 text-white w-full">
              <SelectValue placeholder="Select Team" />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-slate-700">
              <SelectItem value="Our Team">Our Team</SelectItem>
              <SelectItem value="Opponents">Opponents</SelectItem>
              <SelectItem value="Both">Both</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Number of teams */}
        <div>
          <Label htmlFor="numberOfTeams" className="text-white mb-2 block">
            Number of teams <span className="text-red-400">*</span>
          </Label>
          <Input
            id="numberOfTeams"
            type="number"
            placeholder="1"
            min="1"
            value={formData.numberOfTeams}
            onChange={(e) =>
              updateFormData({ numberOfTeams: e.target.value })
            }
            className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400"
          />
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
