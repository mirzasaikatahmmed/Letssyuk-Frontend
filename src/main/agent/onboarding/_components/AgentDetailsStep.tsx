import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useClubFormContext } from "../context/AgentFormContext";

interface ClubDetailsStepProps {
  onNext: () => void;
}

export default function AgentDetailsStep({ onNext }: ClubDetailsStepProps) {
  const { formData, updateFormData } = useClubFormContext();

  const canProceed =
    formData.fullName && formData.email && formData.phone && formData.country;

  return (
    <div className="w-full max-w-2xl border border-[#53DDF5]/30 rounded-2xl p-8 bg-[#11161D]">
      <h2 className="text-2xl font-bold text-white mb-2">Club Details</h2>
      <p className="text-gray-400 text-sm mb-6">
        This information helps clubs verify your professional identity.
      </p>

      <div className="space-y-5">
        <div>
          <Label
            htmlFor="fullName"
            className="text-gray-300 text-sm font-medium"
          >
            Full Name <span className="text-red-400">*</span>
          </Label>
          <Input
            id="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={(e) => updateFormData({ fullName: e.target.value })}
            className="mt-2 bg-[#161d26] border-slate-700 text-white placeholder:text-gray-500 focus:border-[#53DDF5]/50 h-12 rounded-xl"
          />
        </div>

        <div>
          <Label
            htmlFor="clubName"
            className="text-gray-300 text-sm font-medium"
          >
            Club Name <span className="text-gray-500 text-xs">(optional)</span>
          </Label>
          <Input
            id="clubName"
            placeholder="Enter your club name (optional)"
            value={formData.clubName}
            onChange={(e) => updateFormData({ clubName: e.target.value })}
            className="mt-2 bg-[#161d26] border-slate-700 text-white placeholder:text-gray-500 focus:border-[#53DDF5]/50 h-12 rounded-xl"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label
              htmlFor="email"
              className="text-gray-300 text-sm font-medium"
            >
              Email Address <span className="text-red-400">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => updateFormData({ email: e.target.value })}
              className="mt-2 bg-[#161d26] border-slate-700 text-white placeholder:text-gray-500 focus:border-[#53DDF5]/50 h-12 rounded-xl w-full"
            />
          </div>
          <div>
            <Label
              htmlFor="phone"
              className="text-gray-300 text-sm font-medium"
            >
              Phone / WhatsApp <span className="text-red-400">*</span>
            </Label>
            <Input
              id="phone"
              placeholder="+44 20 1234 5678"
              value={formData.phone}
              onChange={(e) => updateFormData({ phone: e.target.value })}
              className="mt-2 bg-[#161d26] border-slate-700 text-white placeholder:text-gray-500 focus:border-[#53DDF5]/50 h-12 rounded-xl w-full"
            />
          </div>
        </div>

        <div>
          <Label
            htmlFor="country"
            className="text-gray-300 text-sm font-medium"
          >
            Country of Operation
          </Label>
          <Select
            value={formData.country}
            onValueChange={(value) => updateFormData({ country: value })}
          >
            <SelectTrigger className="mt-2 bg-[#161d26] border-slate-700 text-white h-12 rounded-xl w-full">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent className="bg-[#161d26] border-slate-700">
              <SelectItem value="England">England</SelectItem>
              <SelectItem value="Spain">Spain</SelectItem>
              <SelectItem value="France">France</SelectItem>
              <SelectItem value="Germany">Germany</SelectItem>
              <SelectItem value="Italy">Italy</SelectItem>
              <SelectItem value="Bangladesh">Bangladesh</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-end mt-8">
        <Button
          onClick={onNext}
          disabled={!canProceed}
          className={`px-8 h-11 rounded-xl font-medium ${
            canProceed
              ? "bg-[#53DDF5] hover:bg-[#53DDF5]/90 text-slate-950"
              : "bg-slate-700 text-gray-500 cursor-not-allowed"
          }`}
        >
          Continue &gt;
        </Button>
      </div>
    </div>
  );
}
