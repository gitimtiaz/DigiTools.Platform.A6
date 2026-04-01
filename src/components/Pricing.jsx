import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    tagline: "Perfect for getting started",
    price: 0,
    period: "month",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Pro",
    tagline: "Best for professionals",
    price: 29,
    period: "month",
    badge: "Most Popular",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    cta: "Start Pro Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    tagline: "For teams and businesses",
    price: 99,
    period: "month",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 text-base">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 flex flex-col gap-6 transition-all ${
                plan.highlighted
                  ? "bg-gradient-to-b from-violet-700 to-purple-700 text-white shadow-2xl shadow-violet-200 scale-105"
                  : "bg-white border border-gray-100 shadow-sm"
              }`}
            >
              {/* Most Popular Badge */}
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-200 text-amber-700 text-xs font-bold px-5 py-1 rounded-full shadow">
                  {plan.badge}
                </span>
              )}

              {/* Plan Name & Tagline */}
              <div>
                <h3
                  className={`text-xl font-bold mb-1 ${
                    plan.highlighted ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm ${
                    plan.highlighted ? "text-violet-200" : "text-gray-500"
                  }`}
                >
                  {plan.tagline}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1">
                <span
                  className={`text-4xl font-extrabold ${
                    plan.highlighted ? "text-white" : "text-gray-900"
                  }`}
                >
                  ${plan.price}
                </span>
                <span
                  className={`text-sm ${
                    plan.highlighted ? "text-violet-200" : "text-gray-400"
                  }`}
                >
                  /{plan.period}
                </span>
              </div>

              {/* Features List */}
              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <Check
                      size={16}
                      className={
                        plan.highlighted ? "text-violet-200" : "text-violet-500"
                      }
                    />
                    <span
                      className={
                        plan.highlighted ? "text-violet-100" : "text-gray-600"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${
                  plan.highlighted
                    ? "bg-white text-violet-700 hover:bg-violet-50"
                    : "bg-violet-600 hover:bg-violet-700 text-white hover:shadow-md"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
