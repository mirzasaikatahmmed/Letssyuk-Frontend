import { useState, useRef } from "react";
import { X, Upload, Save } from "lucide-react";
import { useNavigate } from "react-router";
import { CustomSelect } from "@/components/share/CustomSelect/CustomSelect";

const ClubPlayerEdit = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "Marcus Sterling",
    position: "Forward",
    age: "24",
    nationality: "England",
    goals: "18",
    assists: "7",
    appearances: "28",
    contractExpiry: "2024-05-15",
    availability: "Available",
    notes: "",
  });

  const [profileImage, setProfileImage] = useState<string>(
    "https://img.freepik.com/free-photo/headshot-diverse-male-executive-with-beard-suit_613910-18471.jpg?semt=ais_hybrid&w=740&q=80",
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated Player Data:", { ...formData, profileImage });
    navigate(-1);
  };

  const inputClass =
    "w-full bg-[#11161D] border border-gray-800/80 rounded-xl h-12 px-4 text-sm text-gray-300 font-bold focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-gray-700";
  const labelClass = "text-xs font-bold text-gray-500 mb-2 block";
  const sectionTitleClass =
    "text-[14px] font-black text-white mb-6 tracking-wide";

  return (
    <div className="bg-[#0B0E14] min-h-screen p-10 flex justify-center items-start animate-in fade-in duration-1000">
      <div className="w-full max-w-3xl space-y-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-black text-white tracking-tight">
              Update Player Data
            </h1>
            <p className="text-sm font-bold text-gray-600 mt-1 uppercase tracking-wider">
              Player ID:{" "}
              <span className="text-cyan-500/80">OA-ENG-2024-001</span>
            </p>
          </div>
          <button
            onClick={() => navigate(-1)}
            type="button"
            className="p-2 text-gray-600 hover:text-white transition-colors hover:bg-white/5 rounded-full"
          >
            <X size={24} />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[#11161D]/40 border border-gray-800/60 p-10 rounded-[32px] shadow-2xl backdrop-blur-sm space-y-12"
        >
          {/* Profile Picture */}
          <section>
            <h3 className={sectionTitleClass}>Profile Picture</h3>
            <div className="flex items-center gap-8">
              <div className="h-28 w-28 rounded-full border-2 border-gray-800 overflow-hidden shadow-xl">
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
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <CustomSelect
                label="Position *"
                value={formData.position}
                options={["Forward", "Midfielder", "Defender", "Goalkeeper"]}
                onChange={(val) => handleSelectChange("position", val)}
              />
              <div>
                <label className={labelClass}>Age *</label>
                <input
                  name="age"
                  type="text"
                  value={formData.age}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Nationality *</label>
                <input
                  name="nationality"
                  type="text"
                  value={formData.nationality}
                  onChange={handleChange}
                  className={inputClass}
                />
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
                  name="goals"
                  type="text"
                  value={formData.goals}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Assists</label>
                <input
                  name="assists"
                  type="text"
                  value={formData.assists}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Appearances</label>
                <input
                  name="appearances"
                  type="text"
                  value={formData.appearances}
                  onChange={handleChange}
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
                  name="contractExpiry"
                  type="date"
                  value={formData.contractExpiry}
                  onChange={handleChange}
                  className={`${inputClass} block scheme-dark`}
                />
              </div>
              <CustomSelect
                label="Availability Status"
                value={formData.availability}
                options={[
                  "Available",
                  "Minor Injury",
                  "Major Injury",
                  "Fatigued",
                  "Suspended",
                ]}
                onChange={(val) => handleSelectChange("availability", val)}
              />
              <div className="col-span-2">
                <label className="text-xs font-bold text-gray-600 mb-2 block uppercase tracking-wide">
                  Injury / Fatigue Notes
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Any injury concerns, recovery status, or fatigue management notes..."
                  className="w-full bg-[#11161D] border border-gray-800/80 rounded-2xl p-6 text-sm text-gray-300 font-bold focus:outline-none focus:border-cyan-500/50 transition-all min-h-[140px] resize-none placeholder:text-gray-800"
                />
              </div>
            </div>
          </section>

          {/* Footer Actions */}
          <div className="flex justify-end pt-6">
            <button
              type="submit"
              className="bg-[#22d3ee] hover:bg-cyan-300 shadow-[0_10px_30px_rgba(34,211,238,0.2)] text-[#0B0E14] font-black py-3.5 px-8 rounded-2xl flex items-center gap-3 transition-all active:scale-95 group"
            >
              Update Player
              <Save
                size={20}
                strokeWidth={3}
                className="text-[#0B0E14]/70 group-hover:text-[#0B0E14] transition-colors"
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClubPlayerEdit;
