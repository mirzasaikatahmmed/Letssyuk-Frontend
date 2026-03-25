import SubscriptionPlanCard from "@/components/subscription/SubscriptionPlanCard";
import { toast } from "sonner";

const PlayerSubscription = () => {
  const handleSelectPlan = (planName: string) => {
    toast.success(`${planName} selected! Redirecting to payment...`);
  };

  const playerPlans = [
    {
      name: "Starter",
      price: "29",
      period: "month",
      description: "Essential analytics for developing players.",
      features: [
        { text: "Personal performance dashboard", included: true },
        { text: "Weekly training insights", included: true },
        { text: "Basic video analysis", included: true },
        { text: "Progress tracking", included: true },
        { text: "Email support", included: true },
      ],
      isPopular: false,
      buttonText: "Get Started",
    },
    {
      name: "Elite",
      price: "79",
      period: "month",
      description: "For players seeking advanced recruitment exposure.",
      features: [
        { text: "Everything in Starter", included: true },
        { text: "AI-powered recommendations", included: true },
        { text: "Advanced video breakdowns", included: true },
        { text: "Benchmark comparisons", included: true },
        { text: "Load management tools", included: true },
        { text: "Priority support", included: true },
      ],
      isPopular: true,
      buttonText: "Book a Demo",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "month",
      description: "Full-scale solution for pro careers and branding.",
      features: [
        { text: "Everything in Elite", included: true },
        { text: "Custom development plans", included: true },
        { text: "1-on-1 analyst sessions", included: true },
        { text: "Brand analytics (OnyxBrand)", included: true },
        { text: "Agent collaboration tools", included: true },
        { text: "Dedicated account manager", included: true },
      ],
      isPopular: false,
      isCustom: true,
      buttonText: "Contact Sales",
    },
  ];

  return (
    <div className="min-h-screen bg-[#070B14] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#00E5FF] text-sm font-bold tracking-widest uppercase mb-4">Pricing Plans</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Launch Your <span className="text-[#00E5FF]">Pro Soccer</span> Career
          </h1>
          <p className="text-[#B7BFCD] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            From youth to elite, pick a plan that fits your ambition and potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {playerPlans.map((plan, index) => (
            <SubscriptionPlanCard
              key={index}
              {...plan}
              onSelect={() => handleSelectPlan(plan.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerSubscription;
