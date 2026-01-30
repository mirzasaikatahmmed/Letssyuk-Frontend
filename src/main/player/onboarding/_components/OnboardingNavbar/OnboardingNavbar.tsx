import { ShieldCheck } from "lucide-react";
import logo from "@/assets/logo/logo.png";

const OnboardingNavbar = () => {
  return (
    <header className="w-full bg-[#0a0c14] px-8 pt-8 pb-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Row: Logo and Badge */}
        <div className="flex justify-between items-center mb-6">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="overflow-hidden h-20 w-40 flex items-center justify-center">
              <img
                className="scale-125 object-contain"
                src={logo}
                alt="OnyxSport AI Logo"
              />
            </div>
          </div>

          {/* Badge Section */}
          <div className="flex items-center gap-2 px-3 py-1.5 border border-slate-800 bg-slate-900/30 rounded-lg">
            <ShieldCheck size={16} className="text-cyan-500" />
            <span className="text-gray-400 text-[11px] font-medium tracking-wide">
              GDPR Protected
            </span>
          </div>
        </div>

        {/* Bottom Row: Text Title */}
        <div className="flex flex-col gap-4">
          <h1 className="text-gray-400 text-lg font-normal">
            Complete your athlete profile
          </h1>

          {/* Horizontal Line */}
          <div className="w-full h-px bg-gray-800/50"></div>
        </div>
      </div>
    </header>
  );
};

export default OnboardingNavbar;
