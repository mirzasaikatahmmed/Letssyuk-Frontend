// import React from 'react';
import { Card } from "@/components/ui/card";
import { Utensils, Droplets, Info } from 'lucide-react';
import { FaCircle } from "react-icons/fa"; // For the bullet points

const NutritionHydrationGuidance = () => {
  const mealSchedule = [
    {
      type: "Breakfast",
      time: "7:00 AM - 8:00 AM",
      portion: "500-600 kcal",
      status: "Essential",
      statusColor: "#00A63E",
      items: [
        "Oats (60-80g) with berries + honey",
        "2-3 eggs (scrambled/boiled) with whole grain toast",
        "Greek yogurt (150g) with granola and banana"
      ]
    },
    {
      type: "Mid-Morning Snack",
      time: "10:00 AM - 10:30 AM",
      portion: "150-200 kcal",
      status: "Optional",
      statusColor: "#155DFC",
      items: [
        "Apple or banana with almond butter (15g)",
        "Protein smoothie (200ml) with mixed berries",
        "Handful of nuts (30g) with dried fruit"
      ]
    },
    {
      type: "Lunch",
      time: "12:30 PM - 1:30 PM",
      portion: "600-800 kcal",
      status: "Essential",
      statusColor: "#00A63E",
      items: [
        "Grilled chicken/fish (150g) + brown rice/quinoa (100g) + vegetables",
        "Pasta (100g dry) with lean meat sauce + side salad",
        "Turkey wrap with avocado, hummus + sweet potato (200g)"
      ]
    },
    {
      type: "Pre-Training Snack",
      time: "2-3 hours before training",
      portion: "200-300 kcal",
      status: "Important",
      statusColor: "#E17100",
      items: [
        "Rice cakes (2-3) with peanut butter and banana",
        "Energy bar (whole grain) + piece of fruit",
        "Toast with honey and sliced banana"
      ]
    },
    {
      type: "Dinner",
      time: "6:30 PM - 7:30 PM",
      portion: "600-800 kcal",
      status: "Essential",
      statusColor: "#00A63E",
      items: [
        "Salmon/lean beef (150g) + roasted vegetables + quinoa (80g)",
        "Chicken stir-fry with mixed vegetables + brown rice",
        "Turkey meatballs with whole wheat pasta + tomato sauce"
      ]
    },
    {
      type: "Evening Snack (Optional)",
      time: "9:00 PM - 10:00 PM",
      portion: "100-150 kcal",
      status: "Optional",
      statusColor: "#155DFC",
      items: [
        "Cottage cheese (100g) with berries",
        "Casein protein shake for muscle recovery",
        "Small handful of almonds (15-20)"
      ]
    }
  ];

  return (
    <div className="bg-[#0B0E14] text-white p-6 space-y-6 min-h-screen">
      {/* Main Section Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-[#00A63E22] rounded-lg">
          <Utensils className="text-[#00A63E]" size={20} />
        </div>
        <div>
          <h2 className="text-lg font-bold">Nutrition & Hydration Guidance</h2>
          <p className="text-gray-400 text-xs italic">Personalized meal timing and hydration strategy</p>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4 text-[#00A63E]">
        <Utensils size={14} />
        <span className="text-xs font-bold uppercase tracking-wider">Daily Meal Schedule</span>
      </div>

      {/* Meal Cards */}
      <div className="space-y-4">
        {mealSchedule.map((meal, index) => (
          <Card key={index} className="bg-[#0B1219] border-gray-800 p-5 rounded-xl border-t-[0.5px]">
            <div className="flex justify-between items-start ">
              <div className="space-y-1">
                <h3 className="text-md font-bold text-white">{meal.type}</h3>
                <p className="text-[10px] text-gray-500 uppercase">{meal.time}</p>
              </div>
              <div 
                className="px-3 py-1 rounded-md text-[10px] font-bold border"
                style={{ 
                  color: meal.statusColor, 
                  borderColor: `${meal.statusColor}33`, 
                  backgroundColor: `${meal.statusColor}11` 
                }}
              >
                {meal.status}
              </div>
            </div>

            <div className="flex justify-between items-end">
              <div className="space-y-3">
                <p className="text-[10px] text-gray-500 font-bold uppercase">What to eat:</p>
                <ul className="space-y-1.5">
                  {meal.items.map((item, i) => (
                    <li key={i} className="text-[12px] text-gray-300 flex items-start gap-2">
                      <FaCircle size={6} className="text-[#53DDF5] mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-gray-500 font-bold uppercase">Portion Size</p>
                <p className="text-sm font-bold text-gray-300">{meal.portion}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Hydration Strategy */}
      <Card className="bg-[#0B1219] border-gray-800 p-6 rounded-xl mt-8">
        <div className="flex items-center gap-2 ">
          <Droplets size={18} className="text-[#155DFC]" />
          <h3 className="font-bold text-white text-sm">Hydration Strategy</h3>
        </div>

        <div className="space-y-6  text-white">
          <div className="flex justify-between items-end mb-2">
            <span className="text-[10px]  font-bold uppercase">Daily Target</span>
            <span className="text-xl font-bold">2.5-3L</span>
          </div>
          <div className="h-1.5 w-full rounded-full overflow-hidden">
            <div className="h-full bg-[#155DFC]" style={{ width: '75%' }}></div>
          </div>

          <ul className="space-y-2">
            {[
              "500ml water 2h before training",
              "200-300ml every 15-20 min during training",
              "Monitor urine color - aim for pale yellow",
              "Electrolyte drink during intense sessions (90+ min)"
            ].map((text, i) => (
              <li key={i} className="text-[12px] text-gray-300 flex items-center gap-2">
                <FaCircle size={6} className="text-[#155DFC]" />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </Card>

      {/* Disclaimer */}
      <div className="bg-[#101D24] border border-[#1A2E38] p-4 rounded-xl flex items-start gap-3 mt-4">
        <Info size={18} className="text-[#0FB9B1] mt-0.5 shrink-0" />
        <p className="text-gray-400 text-[11px] leading-relaxed">
          General guidance based on athletic nutrition principles. Consult a qualified sports nutritionist for personalized plans.
        </p>
      </div>
    </div>
  );
};

export default NutritionHydrationGuidance;