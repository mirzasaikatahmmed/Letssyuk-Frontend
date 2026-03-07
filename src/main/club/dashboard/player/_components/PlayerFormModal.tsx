import { useState, useRef } from "react";
import { useForm, useWatch } from "react-hook-form";
import { X, Upload, Save } from "lucide-react";
import { toast } from "sonner";
import { CustomSelect } from "@/components/share/CustomSelect/CustomSelect";
import { type Player } from "../_data/data";

interface PlayerFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: "add" | "edit";
  playerData?: Player | null;
}

interface PlayerFormData {
  fullName: string;
  position: string;
  age: string;
  nationality: string;
  goals: string;
  assists: string;
  appearances: string;
  contractExpiry: string;
  availability: string;
  notes: string;
}

const PlayerFormModal = ({
  isOpen,
  onClose,
  mode,
  playerData,
}: PlayerFormModalProps) => {
  const [profileImage, setProfileImage] = useState<string>(
    mode === "edit" && playerData
      ? playerData.avatar
      : "https://img.freepik.com/free-photo/headshot-diverse-male-executive-with-beard-suit_613910-18471.jpg?semt=ais_hybrid&w=740&q=80",
  );

  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<PlayerFormData>({
    defaultValues: {
      fullName: mode === "edit" && playerData ? playerData.name : "",
      position: mode === "edit" && playerData ? playerData.position : "Forward",
      age: mode === "edit" && playerData ? playerData.age.toString() : "",
      nationality: mode === "edit" && playerData ? playerData.country : "",
      goals:
        mode === "edit" && playerData ? playerData.stats.goals.toString() : "0",
      assists:
        mode === "edit" && playerData
          ? playerData.stats.assists.toString()
          : "0",
      appearances:
        mode === "edit" && playerData
          ? playerData.stats.appearances.toString()
          : "0",
      contractExpiry:
        mode === "edit" && playerData ? playerData.contract.expiryDate : "",
      availability:
        mode === "edit" && playerData ? playerData.availability : "Available",
      notes: mode === "edit" && playerData ? playerData.fitness.notes : "",
    },
  });

  const currentPosition = useWatch({ control, name: "position" });
  const currentAvailability = useWatch({ control, name: "availability" });

  if (!isOpen) return null;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerImageUpload = () => {
    fileInputRef.current?.click();
  };

  const onSubmit = (data: PlayerFormData) => {
    console.log(`${mode === "add" ? "Adding" : "Updating"} Player Data:`, {
      ...data,
      profileImage,
    });
    toast.success(
      `Player ${mode === "add" ? "added" : "updated"} successfully!`,
    );
    onClose();
  };

  const inputClass =
    "w-full bg-[#11161D] border border-gray-800/80 rounded-xl h-12 px-4 text-sm text-gray-300 font-bold focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-gray-700";
  const errorInputClass = "border-red-500/50 focus:border-red-500/50";
  const labelClass = "text-xs font-bold text-gray-500 mb-2 block";
  const sectionTitleClass =
    "text-[14px] font-black text-white mb-6 tracking-wide";

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300 overflow-y-auto">
      <div className="w-full max-w-3xl my-auto space-y-6 relative">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-3xl font-black text-white tracking-tight">
              {mode === "add" ? "Add New Player" : "Update Player Data"}
            </h1>
            <p className="text-sm font-bold text-gray-600 mt-1 uppercase tracking-wider">
              {mode === "edit" ? `Player ID: ` : "Assigning New ID"}
              <span className="text-cyan-500/80">
                {mode === "edit" ? playerData?.playerId : "GEN-2024-XXX"}
              </span>
            </p>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-2 text-gray-600 hover:text-white transition-colors hover:bg-white/5 rounded-full cursor-pointer"
          >
            <X size={24} />
          </button>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#11161D] border border-gray-800/60 p-10 rounded-[32px] shadow-2xl space-y-12"
        >
          {/* Profile Picture */}
          <section>
            <h3 className={sectionTitleClass}>Profile Picture</h3>
            <div className="flex items-center gap-8">
              <div className="h-28 w-28 rounded-full border-2 border-gray-800 overflow-hidden shadow-xl bg-[#0B0E14]">
                <img
                  src={profileImage}
                  className="h-full w-full object-cover"
                  alt="Profile"
                />
              </div>
              <div className="space-y-4">
                <p className="text-[14px] font-bold text-gray-500">
                  Upload Image
                </p>
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={triggerImageUpload}
                    className="bg-[#162129] text-gray-300 text-[13px] font-bold px-6 py-2.5 rounded-xl border border-gray-800 hover:border-cyan-500/30 hover:text-white transition-all cursor-pointer flex items-center gap-2 group shadow-lg shadow-black/20"
                  >
                    <Upload
                      size={16}
                      className="text-gray-500 group-hover:text-cyan-400"
                      strokeWidth={2.5}
                    />
                    Choose File
                    <input
                      ref={fileInputRef}
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </button>
                  <p className="text-[11px] text-gray-700 font-bold uppercase tracking-wider">
                    JPG, PNG, or GIF
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Basic Information */}
          <section className="space-y-6">
            <h3 className={sectionTitleClass}>Basic Information</h3>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <label className={labelClass}>Full Name *</label>
                <input
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                  type="text"
                  placeholder="Enter full name"
                  className={`${inputClass} ${errors.fullName ? errorInputClass : ""}`}
                />
                {errors.fullName && (
                  <span className="text-[10px] text-red-500 font-bold uppercase mt-1">
                    {errors.fullName.message}
                  </span>
                )}
              </div>
              <CustomSelect
                label="Position *"
                value={currentPosition}
                options={["Forward", "Midfielder", "Defender", "Goalkeeper"]}
                onChange={(val) => setValue("position", val)}
              />
              <div>
                <label className={labelClass}>Age *</label>
                <input
                  {...register("age", { required: "Age is required" })}
                  type="text"
                  placeholder="24"
                  className={`${inputClass} ${errors.age ? errorInputClass : ""}`}
                />
                {errors.age && (
                  <span className="text-[10px] text-red-500 font-bold uppercase mt-1">
                    {errors.age.message}
                  </span>
                )}
              </div>
              <div>
                <label className={labelClass}>Nationality *</label>
                <input
                  {...register("nationality", {
                    required: "Nationality is required",
                  })}
                  type="text"
                  placeholder="England"
                  className={`${inputClass} ${errors.nationality ? errorInputClass : ""}`}
                />
                {errors.nationality && (
                  <span className="text-[10px] text-red-500 font-bold uppercase mt-1">
                    {errors.nationality.message}
                  </span>
                )}
              </div>
            </div>
          </section>

          {/* Performance Statistics */}
          <section className="space-y-6">
            <h3 className={sectionTitleClass}>Performance Statistics</h3>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <label className={labelClass}>Goals</label>
                <input
                  {...register("goals")}
                  type="text"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Assists</label>
                <input
                  {...register("assists")}
                  type="text"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Appearances</label>
                <input
                  {...register("appearances")}
                  type="text"
                  className={inputClass}
                />
              </div>
            </div>
          </section>

          {/* Contract & Availability */}
          <section className="space-y-6">
            <h3 className={sectionTitleClass}>Contract & Availability</h3>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <label className={labelClass}>Contract Expiry Date *</label>
                <input
                  {...register("contractExpiry", {
                    required: "Expiry date is required",
                  })}
                  type="date"
                  className={`${inputClass} block scheme-dark ${errors.contractExpiry ? errorInputClass : ""}`}
                />
                {errors.contractExpiry && (
                  <span className="text-[10px] text-red-500 font-bold uppercase mt-1">
                    {errors.contractExpiry.message}
                  </span>
                )}
              </div>
              <CustomSelect
                label="Availability Status"
                value={currentAvailability}
                options={[
                  "Available",
                  "Minor Injury",
                  "Major Injury",
                  "Fatigued",
                  "Suspended",
                ]}
                onChange={(val) => setValue("availability", val)}
              />
              <div className="col-span-2">
                <label className="text-xs font-bold text-gray-600 mb-2 block uppercase tracking-wide">
                  Injury / Fatigue Notes
                </label>
                <textarea
                  {...register("notes")}
                  placeholder="Any injury concerns, recovery status, or fatigue management notes..."
                  className="w-full bg-[#11161D] border border-gray-800/80 rounded-2xl p-6 text-sm text-gray-300 font-bold focus:outline-none focus:border-cyan-500/50 transition-all min-h-[140px] resize-none placeholder:text-gray-800"
                />
              </div>
            </div>
          </section>

          {/* Footer Actions */}
          <div className="flex justify-end pt-6 border-t border-gray-800/50">
            <div className="flex gap-4">
              <button
                type="button"
                onClick={onClose}
                className="px-8 py-3.5 text-gray-400 font-bold hover:text-white transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#22d3ee] hover:bg-cyan-300 shadow-[0_10px_30px_rgba(34,211,238,0.2)] text-[#0B0E14] font-black py-3.5 px-8 rounded-2xl flex items-center gap-3 transition-all active:scale-95 group cursor-pointer"
              >
                {mode === "add" ? "Add Player" : "Update Player"}
                <Save
                  size={20}
                  strokeWidth={3}
                  className="text-[#0B0E14]/70 group-hover:text-[#0B0E14] transition-colors"
                />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlayerFormModal;
