import { useMemo, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Info, Save, ChevronRight } from "lucide-react";
import { useOnboarding } from "@/context/OnboardingContext";
import countryList from "react-select-country-list";
import ISO6391 from "iso-639-1";
import {
  useUpsertPersonalMutation,
  useGetPlayerDetailsQuery,
} from "@/redux/api/playerApi";
import { useGetMeQuery } from "@/redux/features/auth/authApi";
import { toast } from "sonner";
import { useAppSelector } from "@/redux/hooks";
import Loading from "@/components/share/Loading/Loading";

type FormValues = {
  fullName: string;
  email: string;
  dob: string;
  nationality: string;
  gender: string;
  religion: string;
  language: string;
};

const PersonalDetails = () => {
  const navigate = useNavigate();
  const { updateStep } = useOnboarding();

  const user = useAppSelector((state) => state.auth.user);
  const { data: userData } = useGetMeQuery();

  // Get player details using playerId from getMe response (checking both direct and data wrapped)
  const playerOwned =
    userData?.playerOwned || (userData as any)?.data?.playerOwned;
  const playerId = playerOwned?.id;

  const { data: playerData, isFetching: isPlayerLoading } =
    useGetPlayerDetailsQuery(playerId, {
      skip: !playerId,
    });

  const [upsertPersonal] = useUpsertPersonalMutation();

  // Country list data
  const countries = useMemo(() => countryList().getData(), []);

  // Full language list
  const languages = useMemo(() => {
    const list = ISO6391.getAllNames().sort((a, b) => a.localeCompare(b));
    return list;
  }, []);

  const religions = [
    "Islam",
    "Christianity",
    "Hinduism",
    "Buddhism",
    "Sikhism",
    "Judaism",
    "Jainism",
    "Shinto",
    "Other",
    "Atheist / Irreligious",
    "Prefer not to say",
  ];

  // Helper: Format date for input type="date"
  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "";
    return new Date(dateStr).toISOString().split("T")[0];
  };

  // Helper: Title case for display
  const toTitleCase = (str?: string) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: playerData?.data?.personal,
  });

  // Populate form with existing data from backend
  useEffect(() => {
    if (playerData?.data?.personal) {
      const personal = playerData.data.personal;
      reset({
        fullName: personal.fullName || "",
        email: personal.email || "",
        dob: formatDate(personal.dob),
        nationality: personal.nationality || "",
        gender: toTitleCase(personal.gender),
        religion: toTitleCase(personal.religion),
        language: toTitleCase(personal.preferredLanguage),
      });
    }
  }, [playerData, reset]);

  const transformData = (values: FormValues) => {
    return {
      fullName: values.fullName,
      email: values.email,
      dob: values.dob,
      nationality: values.nationality,
      gender: values.gender.toUpperCase(),
      religion: values.religion.toUpperCase(),
      preferredLanguage: values.language.toUpperCase(),
    };
  };

  const onSubmit = async (values: FormValues) => {
    try {
      if (!user?.id) {
        toast.error("User ID not found. Please log in again.");
        return;
      }

      toast.loading("Updating personal details...", { id: "personal-upsert" });
      const payload = transformData(values);

      const res = await upsertPersonal({
        userId: user.id,
        data: payload,
      }).unwrap();

      if (res.success) {
        toast.success(res.message || "Personal details updated!", {
          id: "personal-upsert",
        });
        updateStep("personalDetails", values);
        navigate("../football-profile");
      }
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to update personal details.", {
        id: "personal-upsert",
      });
    }
  };

  const onSaveLater = async (values: FormValues) => {
    try {
      if (!user?.id) {
        toast.error("User ID not found. Please log in again.");
        return;
      }

      toast.loading("Saving progress...", { id: "personal-save" });
      const payload = transformData(values);

      const res = await upsertPersonal({
        userId: user.id,
        data: payload,
      }).unwrap();

      if (res.success) {
        toast.success("Progress saved successfully.", { id: "personal-save" });
        updateStep("personalDetails", values);
      }
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to save progress.", {
        id: "personal-save",
      });
    }
  };

  if (isPlayerLoading) {
    return <Loading />;
  }

  return (
    <div className="p-4">
      <h2 className="text-white font-bold text-lg mb-10">Personal Details</h2>

      <form
        id="onboarding-form"
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#0b1219] border border-slate-800 rounded-xl p-8 space-y-6 shadow-2xl"
      >
        {/* Info Box */}
        <div className="flex items-center gap-3 bg-[#112429] border border-cyan-900/50 p-4 rounded-lg">
          <Info className="text-cyan-500 shrink-0 mt-0.5" size={18} />
          <p className="text-cyan-100/80 text-base leading-relaxed">
            We collect your personal details to create your unique athlete
            profile and ensure accurate AI-driven career intelligence.
          </p>
        </div>

        {/* Fields */}
        <div className="space-y-5">
          {/* Full Name */}
          <div className="flex flex-col gap-2">
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
          <div className="flex flex-col gap-2">
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
          <div className="flex flex-col gap-2">
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
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm font-medium">
              Select Nationality*
            </label>
            <select
              {...register("nationality", {
                required: "Nationality is required",
              })}
              className="w-full bg-[#161d26] border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-hidden focus:ring-2 focus:ring-cyan-500/30 transition-all cursor-pointer"
            >
              <option value="">Select your country</option>
              {countries.map((country) => (
                <option
                  selected={playerData?.data?.personal?.nationality}
                  key={country.value}
                  value={country.label}
                  className="bg-[#12121A]"
                >
                  {country.label}
                </option>
              ))}
            </select>
            {errors.nationality && (
              <p className="text-red-400 text-xs">
                {errors.nationality.message}
              </p>
            )}
          </div>

          {/* Gender */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm font-medium">Gender*</label>
            <select
              {...register("gender", { required: "Please select your gender" })}
              className="w-full bg-[#161d26] border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-hidden focus:ring-2 focus:ring-cyan-500/30 transition-all cursor-pointer"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && (
              <p className="text-red-400 text-xs">{errors.gender.message}</p>
            )}
          </div>

          {/* Religion */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm font-medium">
              Religion
            </label>
            <select
              {...register("religion")}
              className="w-full bg-[#161d26] border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-hidden focus:ring-2 focus:ring-cyan-500/30 transition-all cursor-pointer"
            >
              <option value="">Select Religion</option>
              {religions.map((religion) => (
                <option
                  key={religion}
                  value={religion}
                  className="bg-[#111821]"
                >
                  {religion}
                </option>
              ))}
            </select>
          </div>

          {/* Language */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm font-medium">
              Preferred Language*
            </label>
            <select
              {...register("language", {
                required: "Please select your language",
              })}
              className="w-full bg-[#161d26] border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-hidden focus:ring-2 focus:ring-cyan-500/30 transition-all cursor-pointer"
            >
              <option value="">Select Language</option>
              {languages.map((lang) => (
                <option key={lang} value={lang} className="bg-[#12121A]">
                  {lang}
                </option>
              ))}
            </select>
            {errors.language && (
              <p className="text-red-400 text-xs">{errors.language.message}</p>
            )}
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
          className="px-8 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-[#0b0f14] font-bold text-sm flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(6,182,212,0.2)] cursor-pointer"
        >
          Continue <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default PersonalDetails;
