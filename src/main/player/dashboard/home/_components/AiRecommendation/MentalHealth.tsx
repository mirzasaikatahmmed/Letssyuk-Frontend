import { useNavigate } from "react-router";
import { Card } from "@/components/ui/card";
import {
  Heart,
  Phone,
  Info,
  AlertTriangle,
  ChevronLeft,
  ChevronDown,
} from "lucide-react";
import { FaCircle } from "react-icons/fa";

const MentalHealth = () => {
  const navigate = useNavigate();
  const wellnessPractices = [
    {
      title: "Mindfulness & Breathing",
      items: [
        "5-10 min daily meditation or breathing exercises",
        "Pre-match visualization and positive affirmations",
        "Focus on controllables, let go of outcomes",
      ],
    },
    {
      title: "Stress Management",
      items: [
        "Regular sleep schedule (7-9 hours nightly)",
        "Talk to trusted friends, family, or teammates",
        "Journal your thoughts and feelings daily",
      ],
    },
    {
      title: "Performance Anxiety",
      items: [
        "Break goals into smaller, achievable steps",
        "Focus on process, not just results",
        "Celebrate small wins and progress",
      ],
    },
    {
      title: "Work-Life Balance",
      items: [
        "Schedule downtime and hobbies outside football",
        "Maintain social connections beyond the sport",
        "Plan for life beyond your playing career",
      ],
    },
  ];

  return (
    <div className="bg-[#0B0E14] text-white p-6 space-y-6 min-h-screen font-sans">
      {/* Top Header with Back Button */}
      <div className="grid grid-cols-12 items-center gap-4 mb-2">
        <div className="col-span-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-900/50 text-gray-300 hover:border-cyan-500/50 transition-all text-sm font-medium bg-[#0B0E14] group shrink-0 cursor-pointer"
          >
            <ChevronLeft
              size={18}
              className="group-hover:-translate-x-0.5 transition-transform"
            />
            Back
          </button>
        </div>

        <div className="flex items-center justify-between gap-4 flex-1 bg-[#111111] border border-gray-800 p-4 rounded-xl col-span-8 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-[#1A1017] rounded-lg border border-[#F6339A]/20 hidden md:block">
              <Heart className="text-[#F6339A]" size={24} />
            </div>
            <div>
              <h2 className="text-lg font-bold leading-none mb-1">
                Mental Health & Wellbeing
              </h2>
              <p className="text-gray-500 text-xs leading-none">
                Resources and guidance for mental wellness
              </p>
            </div>
          </div>
          <ChevronDown className="text-gray-600" size={20} />
        </div>
      </div>

      {/* Top Banner */}
      <div className="bg-[#1A1017] border border-[#F6339A]/20 p-5 rounded-xl flex gap-4 shadow-lg">
        <Heart className="text-[#F6339A] shrink-0 mt-1" size={24} />
        <div className="text-xs leading-relaxed text-gray-300">
          <span className="font-bold text-white block mb-2 text-sm">
            Your mental wellbeing matters.
          </span>
          <p className="opacity-80">
            Football careers involve unique pressures—performance anxiety,
            contract uncertainty, injuries, and competition. It's completely
            normal to need support. These resources help you maintain resilience
            and mental strength throughout your journey.
          </p>
        </div>
      </div>

      {/* Daily Practices Grid */}
      <section className="space-y-4">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">
          Daily Wellness Practices
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {wellnessPractices.map((practice, index) => (
            <Card
              key={index}
              className="bg-[#0D161E]/40 border-gray-800 p-6 rounded-xl hover:border-[#F6339A]/20 transition-all shadow-sm"
            >
              <h4 className="font-bold text-white text-sm mb-4 border-b border-gray-800 pb-2 flex items-center gap-2">
                <FaCircle size={6} className="text-[#F6339A]" />
                {practice.title}
              </h4>
              <ul className="space-y-3">
                {practice.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-[12px] text-gray-400 flex items-start gap-3 leading-snug"
                  >
                    <span className="bg-[#F6339A]/10 p-1 rounded mt-0.5">
                      <div className="w-1 h-1 bg-[#F6339A] rounded-full"></div>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* Professional Support Section */}
      <section className="space-y-4">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">
          Professional Support (UK)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Samaritans */}
          <Card className="bg-[#0B1219] border-[#00A63E44] p-5 rounded-xl relative group shadow-md">
            <div className="absolute top-4 right-4 bg-[#00A63E22] text-[#00A63E] text-[10px] font-bold px-2 py-0.5 rounded border border-[#00A63E44]">
              24/7
            </div>
            <h4 className="font-bold text-white text-sm mb-1">Samaritans</h4>
            <p className="text-[11px] text-gray-500 mb-4 font-medium uppercase tracking-tighter">
              Confidential emotional support
            </p>
            <div className="flex flex-col gap-2 text-[12px] font-medium">
              <a
                href="tel:116123"
                className="flex items-center gap-2 text-[#00A63E] hover:underline bg-[#00A63E11] p-2 rounded-lg border border-[#00A63E22]"
              >
                <Phone size={14} /> 116 123
              </a>
              <a
                href="mailto:jo@samaritans.org"
                className="flex items-center gap-2 text-[#00A63E] hover:underline bg-[#00A63E11] p-2 rounded-lg border border-[#00A63E22]"
              >
                jo@samaritans.org
              </a>
            </div>
          </Card>

          {/* Mind */}
          <Card className="bg-[#0B1219] border-[#155DFC44] p-5 rounded-xl relative shadow-md">
            <div className="absolute top-4 right-4 bg-[#155DFC22] text-[#155DFC] text-[10px] font-bold px-2 py-0.5 rounded border border-[#155DFC44]">
              Mon-Fri 9-6
            </div>
            <h4 className="font-bold text-white text-sm mb-1">Mind</h4>
            <p className="text-[11px] text-gray-500 mb-4 font-medium uppercase tracking-tighter">
              Information and local support
            </p>
            <div className="flex flex-col gap-2 text-[12px] font-medium">
              <span className="flex items-center gap-2 text-[#155DFC] bg-[#155DFC11] p-2 rounded-lg border border-[#155DFC22]">
                <Phone size={14} /> 0300 123 3393
              </span>
              <span className="flex items-center gap-2 text-[#155DFC] bg-[#155DFC11] p-2 rounded-lg border border-[#155DFC22]">
                Text: 86463
              </span>
            </div>
          </Card>
        </div>

        {/* Warning Section */}
        <Card className="bg-[#1A1610] border-[#FE9A0044] p-6 rounded-xl shadow-lg border-l-4 border-l-[#FE9A00]">
          <div className="flex items-center gap-3 text-[#FE9A00] mb-6">
            <AlertTriangle size={20} />
            <h4 className="font-bold text-sm uppercase tracking-widest">
              When to Seek Urgent Help
            </h4>
          </div>
          <ul className="space-y-3">
            {[
              "Persistent feelings of sadness or hopelessness (> 2 weeks)",
              "Significant changes in sleep, appetite, or energy levels",
              "Difficulty concentrating or making daily decisions",
              "Loss of interest in football or previously enjoyed activities",
              "Thoughts of self-harm - Call 999 or visit A&E immediately",
            ].map((text, i) => (
              <li
                key={i}
                className="text-[12px] text-gray-400 flex items-start gap-3"
              >
                <AlertTriangle
                  size={12}
                  className="text-[#FE9A00] mt-0.5 shrink-0"
                />
                {text}
              </li>
            ))}
          </ul>
        </Card>
      </section>

      {/* Footer Info */}
      <div className="bg-[#0D1117] border border-gray-800 p-3 rounded-lg flex items-center gap-3">
        <Info size={16} className="text-gray-600 shrink-0" />
        <p className="text-gray-500 text-[10px] leading-relaxed">
          Guidance provided for wellness mapping. For clinical concerns, always
          prioritize local healthcare professionals or club medical staff.
        </p>
      </div>
    </div>
  );
};

export default MentalHealth;
