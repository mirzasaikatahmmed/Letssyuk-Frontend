
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

interface ClubInfoStepProps {
  onNext: () => void;
}

export default function ClubInfoStep({ onNext }: ClubInfoStepProps) {
  const { formData, updateFormData } = useFormContext();

  const handleNext = () => {
    if (formData.clubName && formData.country && formData.leagueLevel) {
      onNext();
    }
  };

  return (
    <div className="w-full max-w-2xl border border-cyan-500/50 rounded-xl p-8 bg-[#235D671A] ">
      <h2 className="text-2xl font-bold text-white mb-2">Club Information</h2>
      <p className="text-gray-400 text-sm mb-6">
        This helps us tailor analytics and recruitment insights for your competition level.
      </p>

      <div className="space-y-6">
        {/* Club Name */}
        <div>
          <Label htmlFor="clubName" className="text-white mb-2 block">
            Club Name <span className="text-red-400">*</span>
          </Label>
          <Input
            id="clubName"
            placeholder="e.g., Arsenal FC"
            value={formData.clubName}
            onChange={(e) =>
              updateFormData({ clubName: e.target.value })
            }
            className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400"
          />
        </div>

        {/* Country and League */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="country" className="text-white mb-2 block">
              Country <span className="text-red-400">*</span>
            </Label>
            <Select
              value={formData.country}
              onValueChange={(value) =>
                updateFormData({ country: value })
              }
            >
              <SelectTrigger className="bg-slate-800/50 border-slate-700 text-white w-full ">
                <SelectValue placeholder="England" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700 ">
                <SelectItem value="England">England</SelectItem>
                <SelectItem value="Spain">Spain</SelectItem>
                <SelectItem value="France">France</SelectItem>
                <SelectItem value="Germany">Germany</SelectItem>
                <SelectItem value="Italy">Italy</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="league" className="text-white mb-2 block">
              League / Competition Level <span className="text-red-400">*</span>
            </Label>
            <Select
              value={formData.leagueLevel}
              onValueChange={(value) =>
                updateFormData({ leagueLevel: value })
              }
            >
              <SelectTrigger className="bg-slate-800/50 border-slate-700 text-white  w-full">
                <SelectValue placeholder="Select League" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700">
                <SelectItem value="Premier League">Premier League</SelectItem>
                <SelectItem value="Championship">Championship</SelectItem>
                <SelectItem value="League One">League One</SelectItem>
                <SelectItem value="League Two">League Two</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Club Website */}
        <div>
          <Label htmlFor="website" className="text-white mb-2 block">
            Club Website <span className="text-gray-500 text-xs">(optional)</span>
          </Label>
          <Input
            id="website"
            placeholder="https://www.yourclub.com"
            value={formData.clubWebsite}
            onChange={(e) =>
              updateFormData({ clubWebsite: e.target.value })
            }
            className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400"
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-end gap-4 mt-8">
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
