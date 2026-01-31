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

const POSITIONS = [
  "Goalkeeper",
  "Defender",
  "Midfielder",
  "Forward",
  "Winger",
  "Striker",
];

interface SquadRosterStepProps {
  onNext: () => void;
  onBack: () => void;
}

export default function SquadRosterStep({
  onNext,
  onBack,
}: SquadRosterStepProps) {
  const { formData, updateFormData } = useClubFormContext();

  const updatePlayer = (field: "name" | "position" | "age", value: string) => {
    updateFormData({
      player: { ...formData.player, [field]: value },
    });
  };

  const playerFilled =
    formData.player.name || formData.player.position || formData.player.age;
  const playerComplete =
    formData.player.name && formData.player.position && formData.player.age;
  const canProceed =
    formData.numberOfPlayers && (!playerFilled || playerComplete);

  return (
    <div className="w-full max-w-2xl border border-[#53DDF5]/30 rounded-2xl p-8 bg-[#11161D]">
      <h2 className="text-2xl font-bold text-white mb-2">Squad Roster</h2>
      <p className="text-gray-400 text-sm mb-6">
        You can add full performance and contract data later inside the
        dashboard.
      </p>

      <div className="space-y-6">
        <div>
          <Label
            htmlFor="playerCount"
            className="text-gray-300 text-sm font-medium"
          >
            Number of players in squad (Approximately)
          </Label>
          <Input
            id="playerCount"
            type="text"
            placeholder="e.g., 5"
            value={formData.numberOfPlayers}
            onChange={(e) =>
              updateFormData({ numberOfPlayers: e.target.value })
            }
            className="mt-2 bg-[#161d26] border-slate-700 text-white placeholder:text-gray-500 focus:border-[#53DDF5]/50 h-12 rounded-xl"
          />
        </div>

        <div>
          <Label className="text-gray-300 text-sm font-medium block mb-1">
            Add 1 Player to start{" "}
            <span className="text-gray-500">(Optional)</span>
          </Label>
          <p className="text-gray-500 text-xs mb-4">
            You can add players later inside the dashboard.
          </p>

          <div className="grid grid-cols-[1fr_140px_80px] gap-3 items-end">
            <div>
              <Input
                placeholder="Player name"
                value={formData.player.name}
                onChange={(e) => updatePlayer("name", e.target.value)}
                className="bg-[#161d26] border-slate-700 text-white placeholder:text-gray-500 focus:border-[#53DDF5]/50 h-11 rounded-xl"
              />
            </div>
            <Select
              value={formData.player.position}
              onValueChange={(value) => updatePlayer("position", value)}
            >
              <SelectTrigger className="bg-[#161d26] border-slate-700 text-gray-400 h-11 rounded-xl">
                <SelectValue placeholder="Position" />
              </SelectTrigger>
              <SelectContent className="bg-[#161d26] border-slate-700">
                {POSITIONS.map((pos) => (
                  <SelectItem key={pos} value={pos}>
                    {pos}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              placeholder="Age"
              type="number"
              min="16"
              max="50"
              value={formData.player.age}
              onChange={(e) => updatePlayer("age", e.target.value)}
              className="bg-[#161d26] border-slate-700 text-white placeholder:text-gray-500 focus:border-[#53DDF5]/50 h-11 rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <Button
          onClick={onBack}
          variant="outline"
          className="border-slate-600 text-gray-400 hover:bg-slate-800 px-6 h-11 rounded-xl"
        >
          &lt; Back
        </Button>
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
