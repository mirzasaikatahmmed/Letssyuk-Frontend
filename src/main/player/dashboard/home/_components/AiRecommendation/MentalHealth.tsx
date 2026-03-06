import { useNavigate } from "react-router";
import { Card } from "@/components/ui/card";
import {
  Heart,
  Phone,
  Info,
  AlertTriangle,
  ChevronLeft,
  MessageSquare,
} from "lucide-react";

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
    <div className="bg-[#000000] text-white p-8 space-y-8 min-h-screen font-sans">
      {/* Back Button Only (as per image) */}
      <div className="mb-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-700 text-gray-200 hover:bg-gray-800 transition-all text-sm font-semibold cursor-pointer"
        >
          <ChevronLeft size={20} />
          Back
        </button>
      </div>

      {/* Top Banner */}
      <div className="bg-[#1A1017] border border-[#F6339A]/20 p-6 rounded-xl flex gap-4 shadow-lg">
        <Heart className="text-[#F6339A] shrink-0 mt-1" size={20} />
        <div className="text-[12px] leading-relaxed text-gray-300">
          <span className="font-bold text-white mb-2 text-sm inline">
            Your mental wellbeing matters.
          </span>
          <span className="opacity-80 ml-1">
            Football careers involve unique pressures—performance anxiety,
            contract uncertainty, injuries, and competition. It's completely
            normal to need support. These resources are here to help you
            maintain balance, resilience, and mental strength throughout your
            career journey.
          </span>
        </div>
      </div>

      {/* Daily Mental Wellness Practices Grid */}
      <section className="space-y-4">
        <h3 className="text-sm font-bold text-white pl-1">
          Daily Mental Wellness Practices
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {wellnessPractices.map((practice, index) => (
            <Card
              key={index}
              className="bg-[#0B0C0E] border-gray-800 p-6 rounded-xl shadow-sm"
            >
              <h4 className="font-bold text-white text-sm mb-4">
                {practice.title}
              </h4>
              <ul className="space-y-3">
                {practice.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-[12px] text-gray-400 flex items-start gap-2 leading-snug"
                  >
                    <span className="w-1 h-1 bg-cyan-400 rounded-full mt-2 shrink-0"></span>
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
        <h3 className="text-sm font-bold text-white pl-1">
          Professional Support & Helplines (UK)
        </h3>

        <div className="space-y-2">
          {/* Samaritans */}
          <Card className="bg-[#000000] border border-green-900/30 p-5 rounded-xl relative shadow-md">
            <div className="absolute top-4 right-4 text-green-500 text-[11px] font-bold">
              24/7
            </div>
            <h4 className="font-bold text-white text-sm leading-none">
              Samaritans
            </h4>
            <p className="text-[11px] text-gray-500">
              24/7 confidential emotional support
            </p>
            <div className="flex gap-6 text-[12px] font-medium items-center">
              <a
                href="tel:116123"
                className="flex items-center gap-2 text-green-500 hover:opacity-80"
              >
                <Phone size={14} /> 116123
              </a>
              <a
                href="mailto:jo@samaritans.org"
                className="flex items-center gap-2 text-green-500 hover:opacity-80"
              >
                <MessageSquare size={14} /> jo@samaritans.org
              </a>
            </div>
          </Card>

          {/* Mind */}
          <Card className="bg-[#000000] border border-blue-900/30 p-5 rounded-xl relative shadow-md">
            <div className="absolute top-4 right-4 text-blue-500 text-[11px] font-bold">
              Mon-Fri 9am-6pm
            </div>
            <h4 className="font-bold text-white text-sm leading-none">
              Mind
            </h4>
            <p className="text-[11px] text-gray-500">
              Mental health information and support
            </p>
            <div className="flex gap-6 text-[12px] font-medium items-center">
              <span className="flex items-center gap-2 text-blue-500">
                <Phone size={14} /> 0300 123 3393
              </span>
              <span className="flex items-center gap-2 text-blue-500">
                <MessageSquare size={14} /> Text: 86463
              </span>
            </div>
          </Card>
        </div>

        {/* When to Seek Professional Help Card */}
        <Card className="bg-[#141008] border-[#FE9A00]/20 p-6 rounded-xl shadow-lg">
          <div className="flex items-center gap-3 text-[#FE9A00] mb-4">
            <AlertTriangle size={20} />
            <h4 className="font-bold text-sm">
              When to Seek Professional Help
            </h4>
          </div>
          <ul className="space-y-2">
            {[
              "Persistent feelings of sadness, anxiety, or hopelessness lasting more than 2 weeks",
              "Changes in sleep, appetite, or energy levels affecting daily life",
              "Difficulty concentrating or making decisions",
              "Loss of interest in football or activities you usually enjoy",
              "Thoughts of self-harm or suicide - seek immediate help via 999 or go to A&E",
            ].map((text, i) => (
              <li
                key={i}
                className="text-[12px] text-gray-400 flex items-start gap-2 opacity-80 leading-relaxed"
              >
                <span className="text-white mt-1.5">•</span>
                {text}
              </li>
            ))}
          </ul>
        </Card>
      </section>

      {/* Medical Disclaimer Card */}
      <Card className="bg-[#0A1414] border-[#0DA9A2]/20 p-5 rounded-xl flex items-start gap-4 shadow-xl">
        <Info size={20} className="text-[#0DA9A2] shrink-0 mt-0.5" />
        <p className="text-gray-400 text-[12px] leading-relaxed">
          This information is for guidance only and does not constitute medical
          advice. If you're experiencing mental health concerns, please consult
          with a qualified healthcare professional. In an emergency, call 999 or
          visit your nearest A&E.
        </p>
      </Card>
    </div>
  );
};

export default MentalHealth;
