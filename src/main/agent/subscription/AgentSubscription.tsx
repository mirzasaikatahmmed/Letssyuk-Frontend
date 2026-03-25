import SubscriptionPlanCard from "@/components/subscription/SubscriptionPlanCard";
import { toast } from "sonner";

const AgentSubscription = () => {
  const handleSelectPlan = (planName: string) => {
    toast.success(`${planName} selected! Redirecting to payment...`);
  };

  const agentPlans = [
    {
      name: "Solo",
      price: "149",
      period: "month",
      description: "For independent agents with small rosters.",
      features: [
        { text: "Up to 10 clients", included: true },
        { text: "Player analytics dashboard", included: true },
        { text: "Market value tracking", included: true },
        { text: "Basic contract insights", included: true },
        { text: "Standard reports", included: true },
        { text: "Email support", included: true },
      ],
      isPopular: false,
      buttonText: "Book Demo",
    },
    {
      name: "Agency",
      price: "399",
      period: "month",
      description: "For growing agencies with larger portfolios.",
      features: [
        { text: "Up to 50 clients", included: true },
        { text: "Everything in Solo", included: true },
        { text: "Advanced deal intelligence", included: true },
        { text: "Club matching AI", included: true },
        { text: "Custom branded reports", included: true },
        { text: "Priority support", included: true },
      ],
      isPopular: true,
      buttonText: "Book a Demo",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "month",
      description: "For major agencies with complex needs.",
      features: [
        { text: "Unlimited clients", included: true },
        { text: "Everything in Agency", included: true },
        { text: "API access", included: true },
        { text: "Custom integrations", included: true },
        { text: "White-label options", included: true },
        { text: "Dedicated success team", included: true },
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
            Elevate Your <span className="text-[#00E5FF]">Agent Agency</span>
          </h1>
          <p className="text-[#B7BFCD] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Choose the perfect plan to discover, manage, and transfer top-tier talent worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {agentPlans.map((plan, index) => (
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

export default AgentSubscription;
