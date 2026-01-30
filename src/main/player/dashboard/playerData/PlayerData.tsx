import React from "react";
import { Card } from "@/components/ui/card";
import {
  User,
  Trophy,
  History,
  Activity,
  Dumbbell,
  Heart,
  Utensils,
  Target,
  FileText,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { IoIosCheckmarkCircle } from "react-icons/io";

const PlayerData = () => {
  const dataCategories = [
    {
      title: "Personal Details",
      subtitle: "Profile",
      icon: <User size={20} />,
    },
    {
      title: "Football Profile",
      subtitle: "Profile",
      icon: <Trophy size={20} />,
    },
    {
      title: "Career & Match History",
      subtitle: "Career",
      icon: <History size={20} />,
    },
    {
      title: "Physical & Development",
      subtitle: "Development",
      icon: <Activity size={20} />,
    },
    {
      title: "Training & Exercise Routine",
      subtitle: "Training",
      icon: <Dumbbell size={20} />,
    },
    {
      title: "Fatigue, Recovery & Availability",
      subtitle: "Wellbeing",
      icon: <Heart size={20} />,
    },
    {
      title: "Lifestyle & Nutrition Habits",
      subtitle: "Wellbeing",
      icon: <Utensils size={20} />,
    },
    {
      title: "Goals & Ambitions",
      subtitle: "Goals",
      icon: <Target size={20} />,
    },
    {
      title: "Consent & Declarations",
      subtitle: "Legal",
      icon: <FileText size={20} />,
    },
  ];

  return (
    <div className="bg-[#0B0E14] min-h-screen p-8 text-white space-y-10 font-sans">
      {/* Header with GDPR Badge */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Data</h1>
          <p className="text-gray-400 text-base mt-1">
            Manage or update your data
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#30D5C8]/30 bg-[#0B1219] text-[12px] font-bold text-gray-400 uppercase tracking-widest">
          <ShieldCheck size={16} className="text-[#30D5C8]" />
          GDPR Protected
        </div>
      </div>

      {/* 1. Progress Bar Section */}
      <Card
        style={{
          background:
            "linear-gradient(145deg, #121212 0%, #121212 20%, #235D67 55%, #121212 75%, #121212 90%)",
        }}
        className="border-gray-800 p-8 rounded-xl border-[0.5px] text-white"
      >
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-base font-bold">Data Update Completion</h3>
            <p className="text-sm text-gray-400 mt-1">
              45% complete • 8 sections
            </p>
          </div>
          <span className="text-4xl font-bold">45%</span>
        </div>
        <div className="h-2.5 w-full bg-[#121212]/60 rounded-full overflow-hidden border border-white/5">
          <div
            className="h-full bg-gradient-to-r from-[#30D5C8] via-[#30D5C8] to-[#BED1FF]"
            style={{ width: "45%" }}
          ></div>
        </div>
      </Card>

      {/* 2. Data Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dataCategories.map((item, index) => (
          <Card
            key={index}
            className="group relative bg-[#0B1219] border-gray-800 hover:border-gray-700 transition-all p-7 rounded-xl cursor-pointer overflow-hidden"
          >
            {/* Top Side Border Gradient */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#30D5C8] to-[#BED1FF] opacity-30 group-hover:opacity-100 transition-opacity"></div>

            <div className="flex justify-between items-start ">
              <div className="p-3 bg-[#162129] rounded-lg text-[#53DDF5] border border-white/5">
                {item.icon}
              </div>
              <ChevronRight
                size={20}
                className="text-gray-600 group-hover:text-[#30D5C8] transition-colors"
              />
            </div>

            <div className="space-y-2 ">
              <h4 className="text-base font-bold text-white group-hover:text-[#53DDF5] transition-colors">
                {item.title}
              </h4>
              <p className="text-sm text-gray-500 font-medium">
                {item.subtitle}
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-gray-800/50 pt-4">
              <div className="flex items-center gap-2 text-[12px] text-gray-400 font-bold uppercase tracking-tight">
                <IoIosCheckmarkCircle className="text-[#30D5C8]/60" size={16} />
                <span>Click to edit</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* 3. Privacy Info Box */}
      <div className="bg-[#0B1219] border border-[#1A2E38] p-6 rounded-xl flex items-start gap-4">
        <div className="mt-1 p-2 bg-[#0FB9B1]/10 rounded-full shrink-0">
          <Activity size={18} className="text-[#0FB9B1]" />
        </div>
        <div className="text-sm leading-relaxed text-gray-400">
          <span className="font-bold text-white mr-1 text-base">
            Data Privacy & Control:
          </span>
          You have full control over your profile data. All information is
          protected under GDPR regulations. You can update, export, or delete
          your data at any time. Changes to your training routine or lifestyle
          will automatically refresh AI recommendations.
        </div>
      </div>
    </div>
  );
};

export default PlayerData;
