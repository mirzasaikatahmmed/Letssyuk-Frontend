import SubscriptionPlanCard from "@/components/subscription/SubscriptionPlanCard";
import { toast } from "sonner";

const ClubSubscription = () => {
  const handleSelectPlan = (planName: string) => {
    toast.success(`${planName} selected! Redirecting to payment...`);
  };

  const clubPlans = [
    {
      name: "Academy",
      price: "999",
      period: "month",
      description: "For youth development programs.",
      features: [
        { text: "Academy player tracking", included: true },
        { text: "Development pathways", included: true },
        { text: "Basic scouting tools", included: true },
        { text: "Performance analytics", included: true },
        { text: "5 user seats", included: true },
        { text: "Standard support", included: true },
      ],
      isPopular: false,
      buttonText: "Get Started",
    },
    {
      name: "Professional",
      price: "2,999",
      period: "month",
      description: "For professional club operations.",
      features: [
        { text: "Everything in Academy", included: true },
        { text: "Full scouting suite", included: true },
        { text: "Tactical analysis tools", included: true },
        { text: "Match intelligence", included: true },
        { text: "Recruitment database", included: true },
        { text: "Priority support", included: true },
      ],
      isPopular: true,
      buttonText: "Book a Demo",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "month",
      description: "For elite clubs with complex needs.",
      features: [
        { text: "Everything in Professional", included: true },
        { text: "OnyxVision integration", included: true },
        { text: "Custom AI models", included: true },
        { text: "API access", included: true },
        { text: "Unlimited seats", included: true },
        { text: "Dedicated team", included: true },
      ],
      isPopular: false,
      isCustom: true,
      buttonText: "Contact Sales",
    },
  ];

  return (
    <div className="min-h-screen bg-[#070B14] py-16 px-4 sm:px-6 lg:px-8 text-center md:text-left">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#00E5FF] text-sm font-bold tracking-widest uppercase mb-4">Partner Pricing</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Elite <span className="underline decoration-[#00E5FF] underline-offset-8">Scouting</span> Operations
          </h1>
          <p className="text-[#B7BFCD] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            Empower your coaching staff and recruitment team with next-generation AI analytics and a global pool of talent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-8">
          {clubPlans.map((plan, index) => (
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

export default ClubSubscription;
