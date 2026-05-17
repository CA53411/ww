import { useState } from "react";
import { Link } from "react-router";
import { Check, ArrowLeft, Zap, Crown, Rocket, Shield, CreditCard } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "¥0",
    period: "/month",
    description: "Perfect for exploring the Corolas ecosystem",
    features: [
      "Access to all public projects",
      "Basic AI features",
      "Community support",
      "1GB storage",
    ],
    cta: "Get Started",
    popular: false,
    icon: <Zap size={20} />,
  },
  {
    name: "Pro",
    price: "¥99",
    period: "/month",
    description: "For power users and creators",
    features: [
      "Everything in Free",
      "Advanced AI models (GPT-4o, Claude 3.5)",
      "Priority support",
      "50GB storage",
      "Custom integrations",
      "API access",
      "Platonic premium companions",
    ],
    cta: "Subscribe",
    popular: true,
    icon: <Crown size={20} />,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For teams and organizations",
    features: [
      "Everything in Pro",
      "Dedicated support",
      "Unlimited storage",
      "Custom deployment",
      "SLA guarantee",
      "Team management",
      "White-label options",
    ],
    cta: "Contact Us",
    popular: false,
    icon: <Rocket size={20} />,
  },
];

export default function Payment() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#070708] text-white">
      {/* Header */}
      <header className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-white/50 hover:text-white transition-colors"
            >
              <ArrowLeft size={18} />
              <span className="text-sm">Back to Home</span>
            </Link>
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-[#c8a45c]" />
              <span className="text-sm text-white/50">Secure Checkout</span>
            </div>
          </div>
        </div>
      </header>

      <main className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Title */}
          <div className="text-center mb-12 animate-fade-in-up">
            <span className="text-xs uppercase tracking-[0.2em] text-[#c8a45c] mb-4 block">
              Pricing
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-4">
              Choose Your{" "}
              <span className="text-gradient-gold">Plan</span>
            </h1>
            <p className="text-white/50 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
              Unlock the full potential of the Corolas ecosystem with our
              flexible pricing. All plans include access to the core platform.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                billingCycle === "monthly"
                  ? "bg-white text-[#070708]"
                  : "text-white/50 hover:text-white hover:bg-white/5 border border-white/10"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                billingCycle === "yearly"
                  ? "bg-white text-[#070708]"
                  : "text-white/50 hover:text-white hover:bg-white/5 border border-white/10"
              }`}
            >
              Yearly{" "}
              <span className="text-xs text-green-400 ml-1">Save 20%</span>
            </button>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <div
                key={plan.name}
                className={`relative p-6 sm:p-8 rounded-2xl border transition-all duration-300 group ${
                  plan.popular
                    ? "bg-[#0e0e10] border-[#c8a45c]/30 shadow-[0_0_40px_rgba(200,164,92,0.08)]"
                    : "bg-[#0e0e10] border-white/[0.06] hover:border-white/[0.12]"
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#c8a45c] text-[#070708] text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#c8a45c]/10 flex items-center justify-center text-[#c8a45c]">
                    {plan.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{plan.name}</h3>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-3xl sm:text-4xl font-light">
                    {billingCycle === "yearly" && plan.price !== "Custom"
                      ? `¥${Math.round(parseInt(plan.price.replace("¥", "")) * 0.8)}`
                      : plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-white/40 text-sm ml-1">
                      {billingCycle === "yearly" ? "/year" : plan.period}
                    </span>
                  )}
                </div>

                <p className="text-sm text-white/40 mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm"
                    >
                      <Check
                        size={16}
                        className="text-[#c8a45c] mt-0.5 flex-shrink-0"
                      />
                      <span className="text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedPlan(plan.name)}
                  className={`w-full py-3 rounded-xl text-sm font-medium transition-all ${
                    plan.popular
                      ? "bg-white text-[#070708] hover:bg-white/90"
                      : "border border-white/20 text-white hover:bg-white/5"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          {/* Payment Methods */}
          <div className="mt-16 text-center">
            <p className="text-xs text-white/30 uppercase tracking-widest mb-4">
              Payment Methods
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0e0e10] border border-white/[0.06]">
                <CreditCard size={16} className="text-white/50" />
                <span className="text-sm text-white/50">Zpay (China)</span>
              </div>
              <span className="text-white/20">·</span>
              <span className="text-sm text-white/30">
                Stripe & PayPal — Coming Soon
              </span>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-20">
            <h2 className="text-2xl font-light text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {[
                {
                  q: "Can I upgrade or downgrade anytime?",
                  a: "Yes, you can change your plan at any time. Prorated credits will be applied.",
                },
                {
                  q: "Is there a free trial?",
                  a: "The Free plan is always available. Pro plan does not require a trial — subscribe when ready.",
                },
                {
                  q: "What happens to my data if I cancel?",
                  a: "Your data remains accessible on the Free tier. Pro features will be limited after cancellation.",
                },
                {
                  q: "Do you offer student discounts?",
                  a: "Yes, verified students get 50% off Pro plans. Contact us with your .edu email.",
                },
              ].map((faq) => (
                <div
                  key={faq.q}
                  className="p-5 rounded-xl bg-[#0e0e10] border border-white/[0.06]"
                >
                  <h4 className="text-sm font-medium mb-2">{faq.q}</h4>
                  <p className="text-xs text-white/40 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
