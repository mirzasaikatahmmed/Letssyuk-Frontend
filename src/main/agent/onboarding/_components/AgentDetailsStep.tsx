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
  useUpsertAgentDetailsMutation, 
  useGetAgentsQuery 
} from "@/redux/features/agent/agentOnboardingApi";
import { toast } from "sonner";
import { ChevronRight } from "lucide-react";
import Loading from "@/components/share/Loading/Loading";

interface AgentDetailsStepProps {
  onNext: () => void;
}

const COUNTRIES = [
  'ENGLAND', 'SPAIN', 'GERMANY', 'ITALY', 'FRANCE', 'PORTUGAL',
  'NETHERLANDS', 'BELGIUM', 'TURKEY', 'SCOTLAND', 'SWITZERLAND',
  'AUSTRIA', 'GREECE', 'DENMARK', 'SWEDEN', 'NORWAY', 'POLAND',
  'UKRAINE', 'CZECH_REPUBLIC', 'CROATIA'
];

const formatString = (str: string) => {
  return str.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
};

export default function AgentDetailsStep({ onNext }: AgentDetailsStepProps) {
  const [fullName, setFullName] = useState("");
  const [agencyName, setAgencyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");

  const { data: agentsData, isLoading: isFetching } = useGetAgentsQuery({});
  const [upsertAgentDetails, { isLoading: isSubmitting }] = useUpsertAgentDetailsMutation();

  useEffect(() => {
    if (agentsData?.data && agentsData.data.length > 0) {
      const agent = agentsData.data[0];
      setFullName(agent.fullName || "");
      setAgencyName(agent.agencyName || "");
      setEmail(agent.email || "");
      setPhone(agent.phone || "");
      setCountry(agent.country ? agent.country.toUpperCase() : "");
    }
  }, [agentsData]);

  const canProceed = fullName && email && phone && country;

  const handleNext = async () => {
    if (!canProceed) return;

    try {
      await upsertAgentDetails({
        fullName,
        agencyName,
        email,
        phone,
        country: formatString(country),
      }).unwrap();
      
      toast.success("Agent details saved!");
      onNext();
    } catch (error) {
      console.error("Failed to save agent details:", error);
      toast.error("Failed to save. Please try again.");
    }
  };

  if (isFetching) {
    return <Loading count={3} className="bg-transparent max-w-4xl mx-auto" />;
  }

  return (
    <div className="w-full max-w-4xl bg-[#11161D]">
      <div className="space-y-6 border border-[#53DDF5]/30 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-white mb-2">Agent Details</h2>
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
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-2 bg-[#161d26] border-slate-700 text-white placeholder:text-gray-500 focus:border-[#53DDF5]/50 h-12 rounded-xl"
            />
          </div>

          <div>
            <Label
              htmlFor="agencyName"
              className="text-gray-300 text-sm font-medium"
            >
              Agency Name
            </Label>
            <Input
              id="agencyName"
              placeholder="Enter your agency name"
              value={agencyName}
              onChange={(e) => setAgencyName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
              value={country}
              onValueChange={setCountry}
            >
              <SelectTrigger className="mt-2 bg-[#161d26] border-slate-700 text-white h-12 rounded-xl w-full cursor-pointer">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent className="bg-black text-white border-slate-700 max-h-64">
                {COUNTRIES.map((country) => (
                  <SelectItem key={country} value={country} className="cursor-pointer hover:bg-slate-800 hover:text-white focus:bg-slate-800 focus:text-white">
                    {formatString(country)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-8">
        <Button
          onClick={handleNext}
          disabled={!canProceed || isSubmitting}
          className={`px-8 h-11 rounded-xl font-medium transition-colors ${
            canProceed
              ? "bg-[#53DDF5] hover:bg-[#53DDF5]/90 text-slate-950 cursor-pointer"
              : "bg-slate-800 text-slate-500 cursor-not-allowed border-none hover:bg-slate-800 hover:text-slate-500"
          }`}
        >
          {isSubmitting ? "Saving..." : "Continue"}
          {!isSubmitting && <ChevronRight className="h-4 w-4 ml-1 opacity-80" />}
        </Button>
      </div>
    </div>
  );
}
