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
import { useGetMeQuery } from "@/redux/features/auth/authApi";
import { useGetMentalHealthSupportQuery } from "@/redux/features/athlete/athleteAiApi";
import Loading from "@/components/share/Loading/Loading";

const MentalHealth = () => {
  const navigate = useNavigate();

  const { data: userData } = useGetMeQuery();
  const playerId = userData?.playerOwned?.id;

  const {
    data: aiResponse,
    isLoading,
    isError,
  } = useGetMentalHealthSupportQuery(playerId as string, {
    skip: !playerId,
  });

  if (isLoading || isError || !aiResponse) {
    return <Loading count={3} className="p-6" />;
  }

  const { data: mentalData } = aiResponse.analysis;

  const wellnessPractices = [
    {
      title: "Mindfulness & Breathing",
      items: mentalData.daily_mental_wellness_practices.mindfulness_breathing || [],
    },
    {
      title: "Stress Management",
      items: mentalData.daily_mental_wellness_practices.stress_management || [],
    },
    {
      title: "Performance Anxiety",
      items: mentalData.daily_mental_wellness_practices.performance_anxiety || [],
    },
    {
      title: "Work-Life Balance",
      items: mentalData.daily_mental_wellness_practices.work_life_balance || [],
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
            {mentalData.title}
          </span>
          <span className="opacity-80 ml-1">
            {mentalData.subtitle}. Football careers involve unique pressures—performance anxiety,
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
          {mentalData.professional_support_helplines_uk.map((helpline, idx) => (
            <Card key={idx} className={`bg-[#000000] border ${idx % 2 === 0 ? "border-green-900/30" : "border-blue-900/30"} p-5 rounded-xl relative shadow-md`}>
              <div className={`absolute top-4 right-4 ${idx % 2 === 0 ? "text-green-500" : "text-blue-500"} text-[11px] font-bold`}>
                {helpline.availability}
              </div>
              <h4 className="font-bold text-white text-sm leading-none">
                {helpline.name}
              </h4>
              <p className="text-[11px] text-gray-500">
                {helpline.description}
              </p>
              <div className="flex flex-wrap gap-6 text-[12px] font-medium items-center mt-2">
                {helpline.phone && (
                  <a
                    href={`tel:${helpline.phone}`}
                    className={`flex items-center gap-2 ${idx % 2 === 0 ? "text-green-500" : "text-blue-500"} hover:opacity-80`}
                  >
                    <Phone size={14} /> {helpline.phone}
                  </a>
                )}
                {helpline.secondary_contact && (
                  <a
                    href={helpline.secondary_contact.includes("@") ? `mailto:${helpline.secondary_contact}` : "#"}
                    className={`flex items-center gap-2 ${idx % 2 === 0 ? "text-green-500" : "text-blue-500"} hover:opacity-80`}
                  >
                    <MessageSquare size={14} /> {helpline.secondary_contact}
                  </a>
                )}
              </div>
            </Card>
          ))}
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
            {mentalData.when_to_seek_professional_help.map((text, i) => (
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
