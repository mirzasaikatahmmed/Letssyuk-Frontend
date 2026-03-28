import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, useEffect } from "react";
import {
  useUpsertTeamsMutation,
  useGetClubOnboardingQuery,
} from "@/redux/api/clubOnboardingApi";
import { toast } from "sonner";
import Loading from "@/components/share/Loading/Loading";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const TEAM_OPTIONS = [
  { id: 'FIRST_TEAM', label: 'First Team' },
  { id: 'U23', label: 'U23' },
  { id: 'U21', label: 'U21' },
  { id: 'U19', label: 'U19' },
  { id: 'U18', label: 'U18' },
  { id: 'U16', label: 'U16' },
  { id: 'U15', label: 'U15' },
  { id: 'OTHER', label: 'Other/Academy' }
];

export const formatString = (str: string) => {
  return str.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
};

interface TeamsCoveredStepProps {
  onNext: () => void;
  onBack: () => void;
}

export default function TeamsCoveredStep({
  onNext,
  onBack,
}: TeamsCoveredStepProps) {
  const [numberOfTeams, setNumberOfTeams] = useState<string>("1");
  const [selectedTeams, setSelectedTeams] = useState<string[]>([]);
  
  const { data: onboardingData, isLoading: isFetching } = useGetClubOnboardingQuery({});
  const [upsertTeams, { isLoading: isSubmitting }] = useUpsertTeamsMutation();

  useEffect(() => {
    if (onboardingData?.club?.teams && onboardingData.club.teams.length > 0) {
      setNumberOfTeams(onboardingData.club.teams.length.toString());
      setSelectedTeams(onboardingData.club.teams.map((t: any) => t.teamType));
    }
  }, [onboardingData]);

  const handleToggleTeam = (teamId: string) => {
    setSelectedTeams(prev => 
      prev.includes(teamId) 
        ? prev.filter(id => id !== teamId)
        : [...prev, teamId]
    );
  };

  const handleNext = async () => {
    if (!numberOfTeams || selectedTeams.length === 0) {
      toast.error("Please provide the number of teams and select at least one team.");
      return;
    }

    if (!onboardingData?.club?.id) {
      toast.error('Club information is missing. Please complete the previous steps first.');
      return;
    }

    try {
      await upsertTeams({
        clubId: onboardingData.club.id,
        numberOfTeams: parseInt(numberOfTeams, 10),
        teams: selectedTeams.map(team => ({ teamType: team })) 
      }).unwrap();

      toast.success("Teams covered saved successfully!");
      onNext();
    } catch (error) {
      console.error("Failed to save teams covered:", error);
      toast.error("Failed to save. Please check your network and try again.");
    }
  };

  if (isFetching) {
    return <Loading count={3} className="bg-transparent max-w-2xl mx-auto" />;
  }

  return (
    <div className="w-full max-w-2xl border border-slate-700/50 rounded-xl p-8 bg-[#0F151B]">
      <h2 className="text-2xl font-bold text-slate-100 mb-2">Teams Covered</h2>
      <p className="text-slate-400 text-sm mb-6">
        Select which teams you want to analyse
      </p>

      <div className="space-y-6">
        {/* Teams to be analysed Checkboxes */}
        <div>
          <Label className="text-slate-300 mb-4 block">
            Teams to be analysed <span className="text-slate-500">*</span>
          </Label>
          <div className="grid grid-cols-2 gap-4 bg-[#0F151B] border border-slate-800 rounded-md p-4">
            {TEAM_OPTIONS.map((option) => (
              <div key={option.id} className="flex items-center space-x-3">
                <Checkbox 
                  id={`team-${option.id}`} 
                  checked={selectedTeams.includes(option.id)}
                  onCheckedChange={() => handleToggleTeam(option.id)}
                  className="border-slate-500 data-[state=checked]:bg-[#1D7980] data-[state=checked]:border-[#1D7980]"
                />
                <Label 
                  htmlFor={`team-${option.id}`}
                  className="text-sm text-slate-300 font-normal cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Number of teams */}
        <div>
          <Label htmlFor="numberOfTeams" className="text-slate-300 mb-2 block">
            Number of teams <span className="text-slate-500">*</span>
          </Label>
          <Input
            id="numberOfTeams"
            type="number"
            placeholder="1"
            min="1"
            value={numberOfTeams}
            onChange={(e) => setNumberOfTeams(e.target.value)}
            className="bg-[#0F151B] border-slate-800 text-slate-200 placeholder:text-slate-600 focus:border-cyan-600 focus:ring-cyan-600 w-full h-10"
          />
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
