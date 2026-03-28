import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, UploadCloud, X, FileImage, Loader2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { 
  useUpsertAgentLicenseMutation, 
  useGetAgentsQuery,
  useUploadCloudinaryFileMutation
} from "@/redux/features/agent/agentOnboardingApi";
import { toast } from "sonner";
import { ChevronRight } from "lucide-react";
import Loading from "@/components/share/Loading/Loading";

interface LicensingStepProps {
  onNext: () => void;
  onBack: () => void;
}

export default function LicensingStep({ onNext, onBack }: LicensingStepProps) {
  const [licensed, setLicensed] = useState<boolean>(false);
  const [licensingAuthority, setLicensingAuthority] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [url, setUrl] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const { data: agentsData, isLoading: isFetching } = useGetAgentsQuery({});
  const [upsertAgentLicense, { isLoading: isSubmitting }] = useUpsertAgentLicenseMutation();
  const [uploadCloudinaryFile, { isLoading: isUploading }] = useUploadCloudinaryFileMutation();

  useEffect(() => {
    if (agentsData?.data && agentsData.data.length > 0) {
      const agent = agentsData.data[0];
      setLicensed(agent.licensed || false);
      setLicensingAuthority(agent.licensingAuthority || "");
      setLicenseNumber(agent.licenseNumber || "");
      setUrl(agent.url || "");
    }
  }, [agentsData]);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      
      // Basic validation
      if (!file.type.startsWith('image/')) {
        toast.error('Please select an image file (JPG, PNG, etc).');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        toast.error('File size must be less than 5MB.');
        return;
      }

      setSelectedFile(file);
      
      // Auto-upload the selected file
      try {
        const formData = new FormData();
        formData.append("files", file);
        
        const response = await uploadCloudinaryFile(formData).unwrap();
        
        // Response is an array according to the instructions
        if (response && response.length > 0 && response[0].secure_url) {
          setUrl(response[0].secure_url);
          toast.success("License photo uploaded successfully!");
        } else {
          toast.error("Invalid response from upload service.");
          setSelectedFile(null);
        }
      } catch (error) {
        console.error("Upload failed", error);
        toast.error("Failed to upload image.");
        setSelectedFile(null);
      }
    }
  };

  const clearFile = () => {
    setSelectedFile(null);
    setUrl("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const canProceed = !licensed || (licensed && licensingAuthority && url);

  const handleNext = async () => {
    if (!canProceed) {
      toast.error('Please fill in all required licensing fields.');
      return;
    }

    try {
      await upsertAgentLicense({
        licensed,
        licensingAuthority: licensed ? licensingAuthority : "",
        licenseNumber: licensed ? licenseNumber : "",
        url: licensed ? url : ""
      }).unwrap();
      
      toast.success("Licensing information saved!");
      onNext();
    } catch (error) {
      console.error("Failed to save licensing details:", error);
      toast.error("Failed to save. Please try again.");
    }
  };

  if (isFetching) {
    return <Loading count={3} className="bg-transparent max-w-4xl mx-auto" />;
  }

  return (
    <div className="w-full max-w-4xl bg-[#11161D]">
      <div className="space-y-6 border border-[#53DDF5]/30 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-white mb-2">
          Licensing Verification
        </h2>
        <p className="text-gray-400 text-sm mb-6">
          Verify your professional credentials
        </p>

        <div className="space-y-8">
          <div>
            <Label className="text-gray-300 text-sm font-medium block mb-3">
              Are you a licensed agent?
              <span className="text-red-400">*</span>
            </Label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setLicensed(true)}
                className={`p-6 rounded-xl border-2 transition-all text-center cursor-pointer ${
                  licensed
                    ? "border-[#53DDF5] bg-[#53DDF5]/10 text-white"
                    : "border-slate-700 bg-[#161d26] text-gray-400 hover:border-slate-600"
                }`}
              >
                <span className="block font-bold text-lg pointer-events-none">Yes</span>
                <span className="block text-sm mt-1 opacity-80 pointer-events-none">
                  I am a licensed agent
                </span>
              </button>
              <button
                type="button"
                onClick={() => setLicensed(false)}
                className={`p-6 rounded-xl border-2 text-center transition-all cursor-pointer ${
                  !licensed
                    ? "border-[#53DDF5] bg-[#53DDF5]/10 text-white"
                    : "border-slate-700 bg-[#161d26] text-gray-400 hover:border-slate-600"
                }`}
              >
                <span className="block font-bold text-lg pointer-events-none">No</span>
                <span className="block text-sm mt-1 opacity-80 pointer-events-none">
                  Not yet licensed
                </span>
              </button>
            </div>
          </div>

          <div className={`space-y-6 transition-all duration-300 overflow-hidden ${licensed ? 'opacity-100 max-h-[800px]' : 'opacity-0 max-h-0'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label
                  htmlFor="authority"
                  className="text-gray-300 text-sm font-medium"
                >
                  Licensing Authority <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="authority"
                  placeholder="e.g., FIFA, The FA"
                  value={licensingAuthority}
                  onChange={(e) => setLicensingAuthority(e.target.value)}
                  className="mt-2 bg-[#161d26] border-slate-700 text-white placeholder:text-gray-500 focus:border-[#53DDF5]/50 h-12 rounded-xl w-full"
                />
              </div>
              <div>
                <Label
                  htmlFor="licenseNumber"
                  className="text-gray-300 text-sm font-medium"
                >
                  License Number <span className="text-gray-500 text-xs">(optional)</span>
                </Label>
                <Input
                  id="licenseNumber"
                  placeholder="Enter your license number"
                  value={licenseNumber}
                  onChange={(e) => setLicenseNumber(e.target.value)}
                  className="mt-2 bg-[#161d26] border-slate-700 text-white placeholder:text-gray-500 focus:border-[#53DDF5]/50 h-12 rounded-xl w-full"
                />
              </div>
            </div>

            <div>
              <Label className="text-gray-300 text-sm font-medium mb-3 block">
                License Photo / Certificate <span className="text-red-400">*</span>
              </Label>
              
              <div 
                className={`border-2 border-dashed rounded-xl p-6 transition-all ${
                  url || isUploading 
                    ? "border-[#53DDF5]/50 bg-[#53DDF5]/5" 
                    : "border-slate-600 bg-[#161d26] hover:border-slate-500"
                } relative`}
              >
                {!url && !isUploading && (
                  <div className="flex flex-col items-center justify-center text-center cursor-pointer" onClick={() => fileInputRef.current?.click()}>
                    <div className="h-12 w-12 rounded-full bg-slate-800 flex items-center justify-center mb-3 text-gray-400">
                      <UploadCloud size={24} />
                    </div>
                    <p className="text-sm font-medium text-white mb-1">Click to upload your license</p>
                    <p className="text-xs text-gray-500">JPG, PNG (max 5MB)</p>
                  </div>
                )}

                {isUploading && (
                  <div className="flex flex-col items-center justify-center text-center py-4">
                    <Loader2 className="h-8 w-8 text-[#53DDF5] animate-spin mb-3" />
                    <p className="text-sm font-medium text-white">Uploading document...</p>
                  </div>
                )}

                {url && !isUploading && (
                  <div className="flex flex-col sm:flex-row items-center gap-4 bg-[#161d26] p-4 rounded-lg border border-slate-700">
                    <div className="h-14 w-14 shrink-0 rounded bg-slate-800 border border-slate-600 flex items-center justify-center overflow-hidden relative group">
                      <img src={url} alt="License" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col items-center sm:items-start text-center sm:text-left">
                      <p className="text-sm font-semibold text-white truncate max-w-full flex items-center gap-2">
                        <FileImage size={14} className="text-[#53DDF5]" />
                        {selectedFile?.name || "license_document.jpg"}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        Securely uploaded to Cloudinary
                      </p>
                    </div>
                    <Button 
                      onClick={clearFile}
                      variant="ghost" 
                      className="text-gray-400 hover:text-red-400 hover:bg-red-400/10 h-8 px-3 shrink-0 cursor-pointer"
                    >
                      <X size={16} className="mr-1" /> Remove
                    </Button>
                  </div>
                )}

                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileSelect} 
                  accept="image/jpeg, image/png, image/jpg" 
                  className="hidden" 
                />
              </div>
            </div>
          </div>

          <div className="flex gap-3 bg-[#0d1e21] border border-[#53DDF5]/20 p-4 rounded-xl items-start">
            <Shield className="text-[#53DDF5] shrink-0 mt-0.5" size={18} />
            <p className="text-gray-400 text-sm">
              Your documents are{" "}
              <span className="text-[#53DDF5]">
                encrypted and securely stored
              </span>{" "}
              in compliance with industry standards.
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between mt-8">
        <Button
          onClick={onBack}
          disabled={isSubmitting || isUploading}
          variant="outline"
          className="border-slate-600 text-gray-400 bg-transparent px-6 h-11 rounded-xl cursor-pointer hover:bg-slate-800 disabled:opacity-50"
        >
          &lt; Back
        </Button>
        <Button
          onClick={handleNext}
          disabled={!canProceed || isSubmitting || isUploading}
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
