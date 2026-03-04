interface Plan {
  name: string;
  price: string;
  users: string;
  dotColor: string;
}

const plans: Plan[] = [
  { name: "Free", price: "$0", users: "542 users", dotColor: "bg-gray-500" },
  { name: "Free (Under-18)", price: "$0", users: "188 users", dotColor: "bg-gray-500" },
  { name: "Pro Monthly", price: "$29", users: "1,456 users", dotColor: "bg-cyan-400" },
  { name: "Club Monthly", price: "$99", users: "248 users", dotColor: "bg-amber-400" },
  { name: "Enterprise Annual", price: "$1,200", users: "112 users", dotColor: "bg-purple-400" },
];

const SubscriptionPlansPanel = () => {
  return (
    <div className="bg-[#0f1117] border border-white/[0.07] rounded-xl p-5 flex flex-col gap-4">
      <h3 className="text-white font-semibold text-sm">Subscription Plans</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="bg-[#080a0f] border border-white/[0.06] rounded-xl p-4 flex flex-col gap-3"
          >
            <div className="flex items-center justify-between">
              <span className={`w-2.5 h-2.5 rounded-full ${plan.dotColor}`} />
              <span className="text-white font-bold text-lg">{plan.price}</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-gray-300 text-sm font-medium leading-tight">
                {plan.name}
              </span>
              <span className="text-gray-500 text-xs">{plan.users}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlansPanel;
