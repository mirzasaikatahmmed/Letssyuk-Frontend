import React from "react";
import { Mail, Phone, MapPin, Globe, Award, Briefcase, GraduationCap, User } from "lucide-react";

interface CVData {
  fullName: string;
  email: string;
  phone: string;
  location: string | null;
  profilePicture: string | null;
  summary: { text: string };
  performance: {
    competitionLevel: string;
    keyStats: Array<{ label: string; value: string }>;
  };
  highlights: {
    summary: string[];
  };
  skills: {
    coreSkills: string[];
  };
  positionProfile: {
    primaryPosition: string;
    positionSummary: string;
  };
}

const CVTemplate = React.forwardRef<HTMLDivElement, { data: CVData }>((props, ref) => {
  const { data } = props;

  return (
    <div
      ref={ref}
      className="bg-white text-gray-800 p-10 max-w-[800px] border border-gray-100 shadow-sm mx-auto font-sans leading-relaxed"
      style={{ minHeight: "1120px" }} // A4 approx
    >
      {/* Header Section */}
      <div className="flex justify-between items-start border-b-2 border-[#7C8B6D]/20 pb-8 mb-8">
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold text-[#4A3728] uppercase tracking-wider mb-2">
            {data.fullName}
          </h1>
          <p className="text-[#6B8E23] text-xl font-semibold mb-6 flex items-center gap-2">
            <User size={20} className="shrink-0" />
            {data.positionProfile?.primaryPosition || "Football Player"}
          </p>

          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-[#6B8E23]" />
              {data.email}
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-[#6B8E23]" />
              {data.phone}
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[#6B8E23]" />
              {data.location || "Los Angeles, CA"}
            </div>
            <div className="flex items-center gap-2">
              <Globe size={14} className="text-[#6B8E23]" />
              www.onyxsportai.com
            </div>
          </div>
        </div>

        {/* Profile Pic Placeholder */}
        <div className="w-32 h-32 rounded-full border-4 border-[#7C8B6D]/20 overflow-hidden bg-gray-50 flex items-center justify-center shrink-0">
          {data.profilePicture ? (
            <img src={data.profilePicture} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            <User size={64} className="text-gray-300" />
          )}
        </div>
      </div>

      {/* Professional Summary */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-[#6B8E23] p-1.5 rounded-full">
            <User size={16} className="text-white" />
          </div>
          <h2 className="text-lg font-bold text-[#4A3728] uppercase tracking-wide">
            Professional Summary
          </h2>
        </div>
        <div className="border-t border-[#7C8B6D]/20 pt-4 px-1">
          <p className="text-gray-600 leading-relaxed italic border-l-4 border-[#6B8E23]/30 pl-4 py-1 bg-[#6B8E23]/5 rounded-r">
            {data.summary?.text || "Professional summary pending AI analysis updates."}
          </p>
        </div>
      </section>

      {/* Key Stats / Performance */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-[#6B8E23] p-1.5 rounded-full">
            <Briefcase size={16} className="text-white" />
          </div>
          <h2 className="text-lg font-bold text-[#4A3728] uppercase tracking-wide">
            Performance Insights
          </h2>
        </div>
        <div className="border-t border-[#7C8B6D]/20 pt-6 px-1 grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.performance?.keyStats?.map((stat, i) => (
            <div key={i} className="text-center group">
              <p className="text-sm text-gray-400 capitalize mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-[#4A3728] group-hover:text-[#6B8E23] transition-colors">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights / Experience */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-[#6B8E23] p-1.5 rounded-full">
            <Award size={16} className="text-white" />
          </div>
          <h2 className="text-lg font-bold text-[#4A3728] uppercase tracking-wide">
            Match Highlights
          </h2>
        </div>
        <div className="border-t border-[#7C8B6D]/20 pt-6 px-1">
          <ul className="space-y-4">
            {data.highlights?.summary?.map((highlight, index) => (
              <li key={index} className="flex gap-4 group">
                <span className="text-[#6B8E23] font-bold mt-0.5 group-hover:scale-110 transition-transform">•</span>
                <p className="text-gray-600 leading-snug">{highlight}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Skills & Attributes */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-[#6B8E23] p-1.5 rounded-full">
            <GraduationCap size={16} className="text-white" />
          </div>
          <h2 className="text-lg font-bold text-[#4A3728] uppercase tracking-wide">
            Core Attributes & Skills
          </h2>
        </div>
        <div className="border-t border-[#7C8B6D]/20 pt-6 px-1 grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
          {data.skills?.coreSkills?.length > 0 ? (
            data.skills.coreSkills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-[#4A3728] uppercase">
                  <span>{skill}</span>
                  <span className="text-[#6B8E23]">Expert</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#6B8E23] rounded-full w-[85%] transition-all duration-1000"></div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 italic text-sm">Attributes and skills profile pending data updates.</p>
          )}
        </div>
      </section>

      {/* Footer Branding */}
      <div className="mt-auto pt-10 flex justify-between items-end text-[10px] text-gray-400 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#6B8E23]/50 uppercase tracking-widest">Powered By</span>
          <img src="/logo-dark.png" alt="Onyx AI" className="h-4 opacity-50 gray-scale" />
        </div>
        <div>
          Generated on {new Date().toLocaleDateString()} • {data.email}
        </div>
      </div>
    </div>
  );
});

CVTemplate.displayName = "CVTemplate";

export default CVTemplate;
