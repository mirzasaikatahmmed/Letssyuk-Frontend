import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Info, Save } from "lucide-react";
import { useOnboarding } from "@/context/OnboardingContext";

type FormValues = {
  fullName: string;
  email: string;
  dob: string;
  nationality: string;
  gender: string;
  language: string;
};

const PersonalDetails = () => {
  const navigate = useNavigate();
  const { data, updateStep } = useOnboarding();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: data.personalDetails,
  });

  const onSubmit = (values: FormValues) => {
    updateStep("personalDetails", values);
    navigate("../football-profile");
  };

  const onSaveLater = (values: FormValues) => {
    updateStep("personalDetails", values);
  };

  return (
    <div className="p-4">
      <h2 className="text-white font-bold text-lg mb-10">Personal Details</h2>

      <form
        id="onboarding-form"
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#0b1219] border border-slate-800 rounded-xl p-8 space-y-6 shadow-2xl"
      >
        {/* Info Box */}
        <div className="flex gap-3 bg-[#112429] border border-cyan-900/50 p-4 rounded-lg items-start">
          <Info className="text-cyan-500 shrink-0 mt-0.5" size={18} />
          <p className="text-cyan-100/80 text-xs leading-relaxed">
            We collect your personal details to create your unique athlete
            profile and ensure accurate AI-driven career intelligence.
          </p>
        </div>

        {/* Fields */}
        <div className="space-y-5">
          {/* Full Name */}
          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-medium">
              Full Name*
            </label>
            <input
              {...register("fullName", { required: "Full name is required" })}
              placeholder="Enter your full name"
              className="w-full bg-[#161d26] border border-slate-800 rounded-lg px-4 py-3 text-white focus:border-cyan-500/50"
            />
            {errors.fullName && (
              <p className="text-red-400 text-xs">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-medium">
              Email Address*
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              placeholder="your.email@example.com"
              className="w-full bg-[#161d26] border border-slate-800 rounded-lg px-4 py-3 text-white focus:border-cyan-500/50"
            />
          </div>

          {/* DOB */}
          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-medium">
              Date of birth*
            </label>
            <input
              type="date"
              {...register("dob", { required: true })}
              className="w-full bg-[#161d26] border border-slate-800 rounded-lg px-4 py-3 text-white focus:border-cyan-500/50"
            />
          </div>

          {/* Nationality */}
          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-medium">
              Select Nationality*
            </label>
            <select
              {...register("nationality", { required: true })}
              className="w-full bg-[#161d26] border border-slate-800 rounded-lg px-4 py-3 text-white focus:border-cyan-500/50"
            >
              <option value="">Nationality</option>
              <option>Bangladesh</option>
              <option>England</option>
            </select>
          </div>

          {/* Gender */}
          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-medium">Gender*</label>
            <select
              {...register("gender", { required: true })}
              className="w-full bg-[#161d26] border border-slate-800 rounded-lg px-4 py-3 text-white"
            >
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          {/* Language */}
          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-medium">
              Preferred Language*
            </label>
            <select
              {...register("language", { required: true })}
              className="w-full bg-[#161d26] border border-slate-800 rounded-lg px-4 py-3 text-white"
            >
              <option>English</option>
              <option>Bangla</option>
            </select>
          </div>
        </div>
      </form>

      {/* Actions */}
      <div className="flex justify-end items-center gap-4 pt-6">
        <button
          type="button"
          onClick={handleSubmit(onSaveLater)}
          className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-slate-700 text-gray-300 hover:bg-slate-800 text-sm cursor-pointer"
        >
          Save & Continue Later <Save size={16} />
        </button>

        <button
          type="submit"
          form="onboarding-form"
          className="px-8 py-2.5 rounded-lg bg-[#235D67] text-[#12121A] text-sm flex items-center gap-2 cursor-pointer"
        >
          Continue <span className="text-lg">›</span>
        </button>
      </div>
    </div>
  );
};

export default PersonalDetails;
