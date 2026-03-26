import Error from "@/components/share/Error/Error";
import Loading from "@/components/share/Loading/Loading";
import SubscriptionPlanCard from "@/components/subscription/SubscriptionPlanCard";
import { useGetPlansQuery } from "@/redux/api/plansApi";
import { useCreateCheckoutSessionMutation } from "@/redux/api/subscriptionApi";
import { toast } from "sonner";

const ClubSubscription = () => {
  const { data: plansData, isLoading, isError } = useGetPlansQuery("CLUB");
  const [createCheckout] = useCreateCheckoutSessionMutation();

  const handleSelectPlan = async (planId: string, planName: string) => {
    try {
      if (planName.toLowerCase().includes("enterprise") || planName.toLowerCase().includes("custom")) {
        toast.info("Please contact our sales team for custom enterprise onboarding.");
        return;
      }

      toast.loading(`Preparing ${planName} checkout...`);
      const res = await createCheckout({ planId }).unwrap();
      
      if (res.success && res.data) {
        window.location.assign(res.data);
      } else {
        toast.dismiss();
        toast.error("Failed to create checkout session. Please try again.");
      }
    } catch (err: any) {
      toast.dismiss();
      toast.error(err?.data?.message || "Something went wrong. Please try again.");
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !plansData?.success) {
    return <Error message="Failed to load plans. Please try again later." />;
  }

  // Define sort order and button text mappings
  const sortOrder: Record<string, number> = {
    Academy: 1,
    Professional: 2,
    Enterprise: 3,
  };

  const getButtonText = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes("enterprise") || n.includes("custom")) return "Contact Sales";
    if (n.includes("professional") || n.includes("pro")) return "Book a Demo";
    return "Get Started";
  };

  const sortedPlans = [...plansData.data].sort((a, b) => {
    const orderA = sortOrder[a.name] || 99;
    const orderB = sortOrder[b.name] || 99;
    return orderA - orderB;
  });

  return (
    <div className="min-h-screen bg-[#070B14] py-16 px-4 sm:px-6 lg:px-8 text-center md:text-left">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#4FD1C5] text-sm font-bold tracking-widest uppercase mb-4">
            Club Pricing
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-2">
          {sortedPlans.map((plan: any) => (
            <SubscriptionPlanCard
              key={plan.id}
              name={plan.name}
              price={plan.price.toString()}
              period={plan.interval}
              description={plan.description || `Tailored solution for ${plan.name} operations.`}
              isCustom={plan.price === 0}
              isPopular={plan.name === "Professional"}
              buttonText={getButtonText(plan.name)}
              features={plan.features.map((feature: any) => ({
                text: feature.feature.name,
                included: true,
              }))}
              onSelect={() => handleSelectPlan(plan.id, plan.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClubSubscription;
