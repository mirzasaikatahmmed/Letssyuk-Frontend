// import React from 'react';
import { Card } from "@/components/ui/card";
import { Heart, Phone, Info, AlertTriangle } from 'lucide-react';
import { FaCircle } from "react-icons/fa";

const MentalHealth = () => {
  const wellnessPractices = [
    {
      title: "Mindfulness & Breathing",
      items: [
        "5-10 min daily meditation or breathing exercises",
        "Pre-match visualization and positive affirmations",
        "Focus on controllables, let go of outcomes"
      ]
    },
    {
      title: "Stress Management",
      items: [
        "Regular sleep schedule (7-9 hours nightly)",
        "Talk to trusted friends, family, or teammates",
        "Journal your thoughts and feelings daily"
      ]
    },
    {
      title: "Performance Anxiety",
      items: [
        "Break goals into smaller, achievable steps",
        "Focus on process, not just results",
        "Celebrate small wins and progress"
      ]
    },
    {
      title: "Work-Life Balance",
      items: [
        "Schedule downtime and hobbies outside football",
        "Maintain social connections beyond the sport",
        "Plan for life beyond your playing career"
      ]
    }
  ];

  return (
    <div className="bg-[#0B0E14] text-white p-6 space-y-8 min-h-screen">
      {/* Top Banner */}
      <div className="bg-[#1A1017] border border-[#F6339A33] p-4 rounded-xl flex gap-3">
        <Heart className="text-[#F6339A] shrink-0" size={20} />
        <div className="text-xs leading-relaxed text-gray-300">
          <span className="font-bold text-white block mb-1">Your mental wellbeing matters.</span>
          <p>
            Football careers involve unique pressures—performance anxiety, contract uncertainty, injuries, and competition. 
            It's completely normal to need support. These resources are here to help you maintain balance, resilience, 
            and mental strength throughout your career journey.
          </p>
        </div>
      </div>

      {/* Daily Practices Grid */}
      <section className="space-y-4">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Daily Mental Wellness Practices</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {wellnessPractices.map((practice, index) => (
            <Card key={index} className="bg-[#0D161E] border-gray-800 p-5 rounded-xl">
              <h4 className="font-bold text-white  text-sm">{practice.title}</h4>
              <ul className="space-y-2">
                {practice.items.map((item, i) => (
                  <li key={i} className="text-[12px] text-gray-400 flex items-start gap-2">
                    <FaCircle size={5} className="text-[#53DDF5] mt-1.5 shrink-0" />
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
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Professional Support & Helplines (UK)</h3>
        
        {/* Samaritans */}
        <Card className="bg-[#0B1219] border-[#00A63E44] p-5 rounded-xl relative group">
          <div className="absolute top-4  right-4 bg-[#00A63E22] text-[#00A63E] text-[10px] font-bold px-2 py-0.5 rounded border border-[#00A63E44]">24/7</div>
          <h4 className="font-bold text-white text-sm ">Samaritans</h4>
          <p className="text-[11px] text-gray-500 ">24/7 confidential emotional support</p>
          <div className="flex gap-4 text-[12px] font-medium text-[#00A63E]">
            <a href="tel:116123" className="flex items-center gap-1.5 hover:underline"><Phone size={14}/> 116123</a>
            <a href="mailto:jo@samaritans.org" className="flex items-center gap-1.5 hover:underline">jo@samaritans.org</a>
          </div>
        </Card>

        {/* Mind */}
        <Card className="bg-[#0B1219] border-[#155DFC44] p-5 rounded-xl relative">
          <div className="absolute top-4 right-4 bg-[#155DFC22] text-[#155DFC] text-[10px] font-bold px-2 py-0.5 rounded border border-[#155DFC44]">Mon-Fri 9am-6pm</div>
          <h4 className="font-bold text-white text-sm">Mind</h4>
          <p className="text-[11px] text-gray-500 ">Mental health information and support</p>
          <div className="flex gap-4 text-[12px] font-medium text-[#155DFC]">
            <span className="flex items-center gap-1.5"><Phone size={14}/> 0300 123 3393</span>
            <span className="flex items-center gap-1.5">Text: 86463</span>
          </div>
        </Card>

        {/* Professional Help Warnings */}
        <Card className="bg-[#1A1610] border-[#FE9A0044] p-5 rounded-xl">
          <div className="flex items-center gap-2  text-[#FE9A00]">
            <AlertTriangle size={18} />
            <h4 className="font-bold text-sm">When to Seek Professional Help</h4>
          </div>
          <ul className="space-y-2">
            {[
              "Persistent feelings of sadness, anxiety, or hopelessness lasting more than 2 weeks",
              "Changes in sleep, appetite, or energy levels affecting daily life",
              "Difficulty concentrating or making decisions",
              "Loss of interest in football or activities you usually enjoy",
              "Thoughts of self-harm or suicide - seek immediate help via 999 or go to A&E"
            ].map((text, i) => (
              <li key={i} className="text-[12px] text-gray-400 flex items-start gap-2">
                <FaCircle size={5} className="text-[#FE9A00] mt-1.5 shrink-0" />
                {text}
              </li>
            ))}
          </ul>
        </Card>
      </section>

      {/* Medical Disclaimer */}
      <div className="bg-[#101D24] border border-[#1A2E38] p-4 rounded-xl flex items-start gap-3">
        <Info size={18} className="text-[#0FB9B1] mt-0.5 shrink-0" />
        <p className="text-gray-400 text-[11px] leading-relaxed">
          This information is for guidance only and does not constitute medical advice. If you're experiencing 
          mental health concerns, please consult with a qualified healthcare professional. In an emergency, 
          call 999 or visit your nearest A&E.
        </p>
      </div>
    </div>
  );
};

export default MentalHealth;