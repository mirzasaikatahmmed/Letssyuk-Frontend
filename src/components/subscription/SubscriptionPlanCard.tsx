import { Check } from "lucide-react";

interface PlanFeature {
  text: string;
  included: boolean;
}

interface SubscriptionPlanCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PlanFeature[];
  isPopular?: boolean;
  isCustom?: boolean;
  buttonText?: string;
  onSelect: () => void;
  accentColor?: string;
}

const SubscriptionPlanCard = ({
  name,
  price,
  period,
  description,
  features,
  isPopular = false,
  isCustom = false,
  buttonText = "Get Started",
  onSelect,
}: SubscriptionPlanCardProps) => {
  return (
    <div
      className={`relative flex flex-col h-full rounded-2xl p-10 transition-all duration-500 ${
        isPopular
          ? "bg-[#122D6B66] border-2 border-[#1E3A8A] shadow-[0_0_40px_rgba(29,78,216,0.3)] scale-[1.05] z-10"
          : "bg-[#122D6B66] border border-white/5"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-[#4FD1C5] text-white text-[10px] font-bold rounded-full tracking-widest uppercase shadow-[0_0_20px_rgba(79,209,197,0.5)]">
          Most Popular
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-400 text-sm font-light min-h-[40px] tracking-wide leading-relaxed">{description}</p>
      </div>

      <div className="mb-10 flex items-baseline gap-1">
        <span className="text-4xl font-bold text-white">
          {isCustom ? "Custom" : `€${price}`}
        </span>
        <span className="text-gray-500 text-sm font-medium">
          /{isCustom ? "Pricing" : period}
        </span>
      </div>

      <div className="space-y-5 mb-12 grow">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-4">
            <Check
              className={`size-4 mt-1 shrink-0 ${
                feature.included ? "text-[#4FD1C5]" : "text-gray-700"
              }`}
            />
            <span
              className={`text-sm tracking-wide leading-relaxed ${
                feature.included ? "text-gray-200" : "text-gray-600 line-through"
              }`}
            >
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={onSelect}
        className={`w-full h-14 font-bold transition-all duration-300 text-sm tracking-widest cursor-pointer ${
          isPopular
            ? "bg-linear-to-b from-[#6EE7E7] to-[#45AFC0] text-white hover:brightness-110 shadow-[0_4px_20px_rgba(79,209,197,0.4)] rounded-full border-t border-white/20"
            : "bg-transparent hover:bg-white/5 text-white border border-[#4FD1C5]/30 hover:border-[#4FD1C5]/60 rounded-xl"
        }`}
      >
        {buttonText.toUpperCase()}
      </button>

      {isPopular && (
        <div className="absolute inset-0 rounded-2xl border-2 border-cyan-400/20 pointer-events-none opacity-50 blur-[1px]" />
      )}
    </div>
  );
};

export default SubscriptionPlanCard;
