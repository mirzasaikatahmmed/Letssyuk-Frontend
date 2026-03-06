import { useState, useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import {
  Upload,
  Save,
  Phone,
  Mail,
  MapPin,
  User,
  Briefcase,
  Shield,
  ArrowRight,
  ShieldCheck,
  Lock,
  Pencil,
} from "lucide-react";
import AgentProfileChangePassword from "./_components/ChangePassword";
import { toast } from "sonner";

interface ProfileFormData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  agencyName: string;
  specialization: string;
  bio: string;
  notifications: {
    email: boolean;
    performance: boolean;
    contracts: boolean;
  };
}

const AgentUserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  // Debug state change
  useEffect(() => {
    console.log("isEditing state:", isEditing);
  }, [isEditing]);

  const { register, handleSubmit, setValue, control } =
    useForm<ProfileFormData>({
      defaultValues: {
        fullName: "",
        email: "",
        phone: "",
        location: "",
        agencyName: "",
        specialization: "",
        bio: "",
        notifications: {
          email: true,
          performance: true,
          contracts: true,
        },
      },
    });

  const notificationStates = useWatch({
    control,
    name: "notifications",
  });

  const notifications = [
    {
      id: "email",
      label: "Email Notifications",
      desc: "Receive updates about your players via email",
      state: notificationStates?.email,
    },
    {
      id: "performance",
      label: "Performance Alerts",
      desc: "Get notified of significant player performance changes",
      state: notificationStates?.performance,
    },
    {
      id: "contracts",
      label: "Contract Reminders",
      desc: "Alerts for upcoming contract expirations",
      state: notificationStates?.contracts,
    },
  ];
  const onSubmit = (data: ProfileFormData) => {
    console.log("Saving Profile Data:", data);
    toast.success("Profile updated successfully!");
    setIsEditing(false);
  };

  const getInputClass = (isReadOnly: boolean) =>
    `w-full bg-[#0B0E14] border rounded-xl py-3 px-4 text-sm text-white outline-none transition-all placeholder:text-gray-700 ${
      isReadOnly
        ? "border-transparent opacity-70 cursor-default"
        : "border-gray-800 focus:border-[#53DDF5]/40 hover:border-gray-700"
    }`;

  const labelClass =
    "text-[12px] font-semibold text-gray-500 flex items-center gap-2 mb-2";
  const cardClass = "bg-[#11161D] border border-gray-800/60 rounded-2xl p-8";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-8 md:p-12 bg-[#0B0E14] min-h-screen text-white font-primary selection:bg-[#53DDF5]/30 animate-in fade-in duration-700 pb-20"
    >
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12 max-w-7xl mx-auto">
        <div>
          <h1 className="text-[32px] font-bold tracking-tight">
            Agent Profile
          </h1>
          <p className="text-gray-500 text-[15px] mt-1 font-medium">
            Manage your professional information and settings
          </p>
        </div>

        <div className="flex gap-4">
          {isEditing ? (
            <button
              type="submit"
              className="bg-[#53DDF5] text-[#0B0E14] px-8 py-3 rounded-xl font-bold text-sm flex items-center gap-3 transition-all hover:bg-[#42c5db] active:scale-95 shadow-[0_0_20px_rgba(83,221,245,0.2)] cursor-pointer"
            >
              Save Changes <Save size={18} />
            </button>
          ) : (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setIsEditing(true);
              }}
              className="bg-[#11161D] text-white border border-gray-800 hover:border-[#53DDF5]/50 px-8 py-3 rounded-xl font-bold text-sm flex items-center gap-3 transition-all active:scale-95 cursor-pointer"
            >
              Edit Profile <Pencil size={18} />
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {/* Left Side: Avatar Card */}
        <div className="lg:col-span-1 space-y-6">
          <div
            className={`${cardClass} flex flex-col items-center text-center py-10`}
          >
            <div className="relative group mb-6">
              <div className="h-32 w-32 rounded-full border-[3px] border-[#53DDF5]/10 p-1.5 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
                  alt="Profile"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <button
                type="button"
                className="absolute bottom-1 right-1 bg-[#53DDF5] p-2.5 rounded-full text-[#0B0E14] hover:scale-110 transition-all shadow-[0_4px_12px_rgba(0,0,0,0.5)] border-4 border-[#11161D] cursor-pointer"
              >
                <Upload size={14} strokeWidth={3} />
              </button>
            </div>
            <h2 className="text-[26px] font-bold">Marcus Reynolds</h2>
            <p className="text-[#53DDF5] text-[13px] font-bold mt-1">
              Licensed Football Agent
            </p>

            <div className="w-full h-px bg-gray-800/60 my-10" />

            <div className="w-full space-y-5">
              <div className="flex justify-between items-center px-2">
                <span className="text-[13px] font-semibold text-gray-500">
                  Total Players
                </span>
                <span className="font-bold text-[15px]">12</span>
              </div>
              <div className="flex justify-between items-center px-2">
                <span className="text-[13px] font-semibold text-gray-500">
                  Active Contracts
                </span>
                <span className="font-bold text-[15px]">12</span>
              </div>
              <div className="flex justify-between items-center px-2">
                <span className="text-[13px] font-semibold text-gray-500">
                  Member Since
                </span>
                <span className="font-bold text-gray-400 text-[14px]">
                  January 2020
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Information Forms */}
        <div className="lg:col-span-2 space-y-8">
          {/* Section: Personal Information */}
          <div className={cardClass}>
            <h3 className="text-[15px] font-bold text-white mb-8 flex items-center gap-2">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="space-y-2">
                <label className={labelClass}>
                  <User size={14} className="text-gray-600" /> Full Name
                </label>
                <input
                  {...register("fullName")}
                  type="text"
                  placeholder="Full Name"
                  readOnly={!isEditing}
                  className={getInputClass(!isEditing)}
                />
              </div>
              <div className="space-y-2">
                <label className={labelClass}>
                  <Mail size={14} className="text-gray-600" /> Email Address
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Email Address"
                  readOnly={!isEditing}
                  className={getInputClass(!isEditing)}
                />
              </div>
              <div className="space-y-2">
                <label className={labelClass}>
                  <Phone size={14} className="text-gray-600" /> Phone Number
                </label>
                <input
                  {...register("phone")}
                  type="text"
                  placeholder="Phone Number"
                  readOnly={!isEditing}
                  className={getInputClass(!isEditing)}
                />
              </div>
              <div className="space-y-2">
                <label className={labelClass}>
                  <MapPin size={14} className="text-gray-600" /> Location
                </label>
                <input
                  {...register("location")}
                  type="text"
                  placeholder="Location"
                  readOnly={!isEditing}
                  className={getInputClass(!isEditing)}
                />
              </div>
            </div>
          </div>

          {/* Section: Professional Information */}
          <div className={cardClass}>
            <h3 className="text-[15px] font-bold text-white mb-8">
              Professional Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="space-y-2">
                <label className={labelClass}>
                  <Briefcase size={14} className="text-gray-600" /> Agency Name
                </label>
                <input
                  {...register("agencyName")}
                  type="text"
                  placeholder="Agency Name"
                  readOnly={!isEditing}
                  className={getInputClass(!isEditing)}
                />
              </div>
              <div className="space-y-2">
                <label className={labelClass}>
                  <Shield size={14} className="text-gray-600" /> Specialization
                </label>
                <input
                  {...register("specialization")}
                  type="text"
                  placeholder="Specialization"
                  readOnly={!isEditing}
                  className={getInputClass(!isEditing)}
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className={labelClass}>Professional Bio</label>
                <textarea
                  {...register("bio")}
                  placeholder="Professional Bio"
                  readOnly={!isEditing}
                  className={`${getInputClass(!isEditing)} min-h-[120px] resize-none leading-relaxed py-4 border-gray-800/20`}
                />
              </div>
            </div>
          </div>

          {/* Section: Account Settings (Toggles) */}
          <div className={cardClass}>
            <h3 className="text-[15px] font-bold text-white mb-8">
              Account Settings
            </h3>
            <div className="space-y-4">
              {notifications.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-5 bg-[#0B0E14] border border-gray-800/60 rounded-xl transition-all hover:bg-gray-900/20"
                >
                  <div className="space-y-0.5">
                    <p className="text-[14px] font-bold text-white">
                      {item.label}
                    </p>
                    <p className="text-[11px] text-gray-500 font-medium">
                      {item.desc}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      if (isEditing) {
                        setValue(
                          `notifications.${item.id as "email" | "performance" | "contracts"}`,
                          !item.state,
                        );
                      }
                    }}
                    className={`w-11 h-6 rounded-full transition-all relative ${
                      !isEditing
                        ? "cursor-default opacity-50"
                        : "cursor-pointer"
                    } ${item.state ? "bg-[#53DDF5]" : "bg-gray-800"}`}
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all shadow-sm ${
                        item.state ? "right-1" : "left-1"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Security */}
          <div className={cardClass}>
            <h3 className="text-[15px] font-bold text-white mb-8">Security</h3>
            <div className="space-y-4">
              <div
                onClick={() => setShowPasswordModal(true)}
                className="flex items-center justify-between p-5 bg-[#0B0E14] border border-gray-800/60 rounded-xl cursor-pointer hover:border-[#53DDF5]/30 group transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-gray-900/60 rounded-lg text-gray-500 group-hover:text-[#53DDF5] transition-colors border border-transparent group-hover:border-[#53DDF5]/20">
                    <Lock size={18} />
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-white">
                      Change Password
                    </p>
                    <p className="text-[12px] text-gray-500 mt-0.5 font-medium">
                      Update your account password
                    </p>
                  </div>
                </div>
                <ArrowRight
                  size={18}
                  className="text-gray-700 group-hover:text-white transition-all group-hover:translate-x-1"
                />
              </div>

              <div className="flex items-center justify-between p-5 bg-[#0B0E14] border border-gray-800/60 rounded-xl cursor-pointer hover:border-[#53DDF5]/30 group transition-all opacity-80 hover:opacity-100">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-gray-900/60 rounded-lg text-gray-500 group-hover:text-[#53DDF5] transition-colors border border-transparent group-hover:border-[#53DDF5]/20">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-white">
                      Two-Factor Authentication
                    </p>
                    <p className="text-[12px] text-gray-500 mt-0.5 font-medium">
                      Add an extra layer of security
                    </p>
                  </div>
                </div>
                <ArrowRight
                  size={18}
                  className="text-gray-700 group-hover:text-white transition-all group-hover:translate-x-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Password Modal */}
      {showPasswordModal && (
        <AgentProfileChangePassword
          onClose={() => setShowPasswordModal(false)}
        />
      )}
    </form>
  );
};

export default AgentUserProfile;
