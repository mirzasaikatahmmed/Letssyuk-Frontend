import { useRef, useState } from 'react';
import { ShieldCheck, FileDown, Loader2 } from 'lucide-react';
import { ProfilePicture } from './_components/ProfilePicture';
import { PersonalInfo } from './_components/PersonalInfo';
import { SecuritySettings } from './_components/SecuritySettings';
import CVTemplate from './_components/CVTemplate';
// @ts-ignore
import html2pdf from 'html2pdf.js';

import { useLazyGetFormattedPlayerCvQuery } from '@/redux/features/athlete/athleteAiApi';
import { useGetMeQuery } from '@/redux/features/auth/authApi';
import { toast } from 'sonner';

const PlayerProfile = () => {
  const cvRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [cvData, setCvData] = useState<any>(null);

  // 1. Fetch current user data from the 'get-me' endpoint
  const { data: userDataFromMe } = useGetMeQuery();
  const playerId = userDataFromMe?.playerOwned?.id;

  // 2. Prep Lazy RTK Query for the CV
  const [triggerGetCv] = useLazyGetFormattedPlayerCvQuery();

  // Static user data context as requested by user
  const staticUserData = {
    fullName: userDataFromMe?.fullName || "Super Admin",
    phone: userDataFromMe?.phone || "0123456789",
    email: userDataFromMe?.email || "admin@gmail.com",
    location: "Dhaka, Bangladesh",
    profilePicture: userDataFromMe?.profilePicture || null
  };

  const handleDownloadCV = async () => {
    if (!playerId) {
      toast.error("Player ID not found. Please ensure your profile is fully set up.");
      return;
    }

    setIsDownloading(true);

    try {
      // 3. Trigger the dynamic RTK Query API call for CV data
      const apiResult = await triggerGetCv(playerId).unwrap();

      if (apiResult.success) {
        if (!apiResult.data) {
          throw new Error("CV data was not found on the server. Please ensure your profile is complete.");
        }

        // 4. Merge requested static fields with the dynamic API data
        const fullCvData = {
          ...staticUserData,
          ...apiResult.data
        };
        setCvData(fullCvData);

        // A small delay to ensure the template renders with the new state
        await new Promise(resolve => setTimeout(resolve, 500));
        
        if (!cvRef.current) {
          throw new Error("CV Template failed to render in the DOM.");
        }
        
        const options = {
          margin: 0.2,
          filename: `${(staticUserData.fullName || "Player").replace(/\s+/g, '_')}_CV.pdf`,
          image: { type: 'jpeg' as const, quality: 0.98 },
          html2canvas: { 
            scale: 2, 
            useCORS: true, 
            letterRendering: true,
            scrollY: 0,
            windowWidth: 800
          },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' as const }
        };

        // Generate and save PDF
        await html2pdf().from(cvRef.current).set(options).save();
        toast.success("CV generated successfully!");
      } else {
        toast.error("Failed to fetch CV data from the server. Please try again.");
      }
    } catch (error: any) {
      console.error("Redux API CV Error detailed:", error);
      const errorMessage = error?.status 
        ? `API Error (${error.status}): ${error?.data?.message || "Check your network"}`
        : error?.message || "Check your console for details";
      toast.error(`Error: ${errorMessage}`);
    } finally {
      // Ensure loading state is always reset
      setIsDownloading(false);
    }
  };

  return (
    <div className="bg-[#0B0E14] min-h-screen p-4 md:p-8 text-white space-y-8 font-sans">
      {/* Header Section */}
      <div className="max-w-4xl w-full flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Profile Settings</h1>
          <p className="text-gray-400 text-base">Manage your account information and security</p>
        </div>

        <button
          onClick={handleDownloadCV}
          disabled={isDownloading}
          className="flex items-center justify-center gap-2.5 bg-[#0FB9B1] hover:bg-[#0da29b] text-[#0B0E14] font-bold px-6 py-3.5 rounded-xl transition-all shadow-[0_4px_20px_rgba(15,185,177,0.2)] hover:scale-[1.02] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {isDownloading ? <Loader2 size={20} className="animate-spin" /> : <FileDown size={20} />}
          {isDownloading ? "Preparing PDF..." : "Download CV (PDF)"}
        </button>
      </div>

      <div className="max-w-4xl space-y-6">
        <ProfilePicture />
        <PersonalInfo />
        <SecuritySettings />

        {/* Footer Privacy Notice */}
        <div className="bg-[#101D24] border border-[#1A2E38] p-5 rounded-xl flex items-start gap-4 transition-all hover:border-[#30D5C8]/30">
          <div className="mt-1 p-1.5 bg-[#0FB9B1]/10 rounded-full shrink-0">
            <ShieldCheck size={18} className="text-[#0FB9B1]" />
          </div>
          <div className="text-sm leading-relaxed text-gray-400">
            <span className="font-bold text-white mr-1">Your Privacy:</span>
            All personal information is encrypted and stored securely. You can update or 
            delete your data at any time under GDPR regulations.
          </div>
        </div>
      </div>

      {/* Hidden CV Template for PDF mapping - only render when we have data */}
      {cvData && (
        <div className="absolute top-[-9999px] left-[-9999px] w-[800px]">
          <CVTemplate ref={cvRef} data={cvData} />
        </div>
      )}
    </div>
  );
};

export default PlayerProfile;