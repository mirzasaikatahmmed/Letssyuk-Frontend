// import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { ProfilePicture } from './_components/ProfilePicture';
import { PersonalInfo } from './_components/PersonalInfo';
import { SecuritySettings } from './_components/SecuritySettings';
//

const PlayerProfile = () => {
  return (
    <div className="bg-[#0B0E14] min-h-screen p-4 md:p-8 text-white space-y-8 font-sans">
      {/* Header Section */}
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold tracking-tight">Profile Settings</h1>
        <p className="text-gray-400 text-base mt-1">Manage your account information and security</p>
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
    </div>
  );
};

export default PlayerProfile;