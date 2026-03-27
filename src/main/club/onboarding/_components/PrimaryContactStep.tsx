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
import { useState, useEffect } from "react";
import {
  useUpsertPrimaryContactMutation,
  useGetClubOnboardingQuery,
} from "@/redux/api/clubOnboardingApi";
import { toast } from "sonner";
import Loading from "@/components/share/Loading/Loading";

interface PrimaryContactStepProps {
  onNext: () => void;
  onBack: () => void;
}

const contactRoles = [
  "DIRECTOR",
  "HEAD_COACH",
  "ASSISTANT_COACH",
  "SCOUT",
  "ANALYST",
  "RECRUITMENT",
  "MEDICAL",
  "ADMINISTRATOR",
  "OTHER",
];

const formatString = (str: string) => {
  return str
    .replace(/_/g, " ")
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());
};

export default function PrimaryContactStep({
  onNext,
  onBack,
}: PrimaryContactStepProps) {
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const { data: onboardingData, isLoading: isFetching } =
    useGetClubOnboardingQuery({});
  const [upsertPrimaryContact, { isLoading: isSubmitting }] =
    useUpsertPrimaryContactMutation();

  useEffect(() => {
    const primaryContact = onboardingData?.club?.contacts?.find(
      (c: any) => c.isPrimary,
    );
    if (primaryContact) {
      setFullName(primaryContact.fullName || "");
      setRole(primaryContact.role || "");
      setEmail(primaryContact.email || "");
      setPhone(primaryContact.phone || "");
    } else {
      if (onboardingData?.club?.adminEmail) {
        setEmail(onboardingData.club.adminEmail);
      }
    }
  }, [onboardingData]);

  const handleNext = async () => {
    if (!fullName || !role || !email) {
      toast.error(
        "Please fill in all required fields (Full Name, Role, Email)",
      );
      return;
    }

    if (!onboardingData?.club?.id) {
      toast.error('Club information is missing. Please complete the previous step first.');
      return;
    }

    try {
      await upsertPrimaryContact({
        clubId: onboardingData.club.id,
        fullName,
        role,
        email,
        phone: phone || undefined,
      }).unwrap();

      toast.success("Primary contact saved successfully!");
      onNext();
    } catch (error) {
      console.error("Failed to save primary contact:", error);
      toast.error(
        "Failed to save. Please check your information and try again.",
      );
    }
  };

  if (isFetching) {
    return <Loading count={3} className="bg-transparent max-w-2xl mx-auto" />;
  }

  return (
    <div className="w-full max-w-2xl border border-cyan-500/50 rounded-xl p-8 bg-[#235D671A]">
      <h2 className="text-2xl font-bold text-white mb-2">Primary Contact</h2>
      <p className="text-gray-400 text-sm mb-6">
        Primary dashboard administrator
      </p>

      <div className="space-y-6">
        {/* Full Name */}
        <div>
          <Label htmlFor="fullName" className="text-white mb-2 block">
            Full Name <span className="text-red-400">*</span>
          </Label>
          <Input
            id="fullName"
            placeholder="e.g., John Smith"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400"
          />
        </div>

        {/* Role */}
        <div>
          <Label htmlFor="role" className="text-white mb-2 block">
            Role <span className="text-red-400">*</span>
          </Label>
          <Select value={role} onValueChange={(value) => setRole(value)}>
            <SelectTrigger className="bg-slate-800/50 border-slate-700 text-white w-full cursor-pointer">
              <SelectValue placeholder="Select Role" />
            </SelectTrigger>
            <SelectContent className="bg-black text-white border-slate-700">
              {contactRoles.map((role) => (
                <SelectItem key={role} value={role}>
                  {formatString(role)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Email and Phone */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email" className="text-white mb-2 block">
              Email Address <span className="text-red-400">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john.smith@club.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-white mb-2 block">
              Phone / Whatsapp{" "}
              <span className="text-gray-500 text-xs">(optional)</span>
            </Label>
            <Input
              id="phone"
              placeholder="+44 7700 900000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400"
            />
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between gap-4 mt-8">
        <Button
          onClick={onBack}
          disabled={isSubmitting}
          variant="outline"
          className="border-slate-600 text-gray-400 hover:bg-slate-800 px-6 py-2 bg-transparent cursor-pointer disabled:opacity-50"
        >
          ← Back
        </Button>
        <Button
          onClick={handleNext}
          disabled={isSubmitting}
          className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold px-6 py-2 rounded-lg cursor-pointer disabled:opacity-50"
        >
          {isSubmitting ? "Saving..." : "Next →"}
        </Button>
      </div>
    </div>
  );
}
