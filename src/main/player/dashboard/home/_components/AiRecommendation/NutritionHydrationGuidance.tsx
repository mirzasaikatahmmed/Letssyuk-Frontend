import { useNavigate } from "react-router";
import { Card } from "@/components/ui/card";
import {
  Utensils,
  Droplets,
  Info,
  ChevronLeft,
  ChevronDown,
} from "lucide-react";
import { FaCircle } from "react-icons/fa";

const NutritionHydrationGuidance = () => {
  const navigate = useNavigate();
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
        "Greek yogurt (150g) with granola and banana",
      ],
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
        "Handful of nuts (30g) with dried fruit",
      ],
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
        "Turkey wrap with avocado, hummus + sweet potato (200g)",
      ],
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
        "Toast with honey and sliced banana",
      ],
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
        "Turkey meatballs with whole wheat pasta + tomato sauce",
      ],
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
        "Small handful of almonds (15-20)",
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
            <div className="p-2 bg-[#00A63E22] rounded-lg border border-[#00A63E]/20 hidden md:block">
              <Utensils className="text-[#00A63E]" size={24} />
            </div>
            <div>
              <h2 className="text-lg font-bold leading-none mb-1">
                Nutrition & Hydration Guidance
              </h2>
              <p className="text-gray-500 text-xs leading-none">
                Personalized meal timing and hydration strategy
              </p>
            </div>
          </div>
          <ChevronDown className="text-gray-600" size={20} />
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4 text-[#00A63E]">
        <Utensils size={14} />
        <span className="text-xs font-bold uppercase tracking-wider pl-1">
          Daily Meal Schedule
        </span>
      </div>

      {/* Meal Cards */}
      <div className="space-y-4">
        {mealSchedule.map((meal, index) => (
          <Card
            key={index}
            className="bg-[#0B1219] border-gray-800 p-6 rounded-xl border-t-[0.5px] shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="space-y-1">
                <h3 className="text-md font-bold text-white uppercase tracking-tight">
                  {meal.type}
                </h3>
                <p className="text-[10px] text-gray-500 font-bold uppercase">
                  {meal.time}
                </p>
              </div>
              <div
                className="px-3 py-1 rounded-md text-[10px] font-bold border"
                style={{
                  color: meal.statusColor,
                  borderColor: `${meal.statusColor}33`,
                  backgroundColor: `${meal.statusColor}11`,
                }}
              >
                {meal.status}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <span className="text-[10px] text-gray-500 font-bold uppercase block opacity-70">
                  Recommended:
                </span>
                <ul className="space-y-2">
                  {meal.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-[12px] text-gray-300 flex items-start gap-2 leading-snug"
                    >
                      <FaCircle
                        size={6}
                        className="text-[#00A63E] mt-1.5 shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:text-right flex md:flex-col justify-between md:justify-end items-center md:items-end bg-black/20 p-3 rounded-lg border border-gray-800/50">
                <p className="text-[10px] text-gray-500 font-bold uppercase">
                  Portion Size
                </p>
                <p className="text-sm font-bold text-white">{meal.portion}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Hydration Strategy */}
      <Card className="bg-[#0B1219] border-gray-800 p-6 rounded-xl mt-8 shadow-lg">
        <div className="flex items-center gap-2 mb-6">
          <Droplets size={18} className="text-blue-500" />
          <h3 className="font-bold text-white text-sm uppercase tracking-widest">
            Hydration Strategy
          </h3>
        </div>

        <div className="space-y-6 text-white">
          <div className="flex justify-between items-end mb-2">
            <span className="text-[10px] text-gray-500 font-bold uppercase">
              Daily Target
            </span>
            <span className="text-xl font-bold text-blue-400">2.5-3L</span>
          </div>
          <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              style={{ width: "75%" }}
            ></div>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "500ml water 2h before training",
              "200-300ml every 15-20 min during training",
              "Monitor urine color - aim for pale yellow",
              "Electrolyte drink during intense sessions",
            ].map((text, i) => (
              <li
                key={i}
                className="text-[12px] text-gray-300 flex items-center gap-2"
              >
                <FaCircle size={6} className="text-blue-400 shrink-0" />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </Card>

      {/* Disclaimer */}
      <div className="bg-[#0D1117] border border-gray-800 p-3 rounded-lg flex gap-3 mt-4 items-center">
        <Info size={16} className="text-gray-600 shrink-0" />
        <p className="text-gray-500 text-[10px] leading-relaxed">
          General guidance based on athletic nutrition principles. Consult a
          qualified sports nutritionist for personalized plans.
        </p>
      </div>
    </div>
  );
};

export default NutritionHydrationGuidance;
