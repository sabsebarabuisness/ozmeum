import { Check, Sparkles, Zap, Building2 } from "lucide-react"

const plans = [
  {
    name: "Creator",
    price: "$19",
    period: "/month",
    description: "Perfect for individual creators and YouTubers",
    icon: Sparkles,
    features: [
      "Unlimited projects",
      "1080p export",
      "10 AI requests/day",
      "Basic effects library",
      "Community support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "For serious creators who need more power",
    icon: Zap,
    features: [
      "Everything in Creator",
      "4K/8K export",
      "Unlimited AI requests",
      "Premium effects & LUTs",
      "Cloud rendering (100 hrs)",
      "Priority support",
      "OTIO export",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Team",
    price: "$149",
    period: "/month",
    description: "For studios and production teams",
    icon: Building2,
    features: [
      "Everything in Pro",
      "5 team seats",
      "Unlimited cloud rendering",
      "Custom AI training",
      "Dedicated success manager",
      "SLA guarantee",
      "SSO & compliance",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 px-4">
      {/* Background */}
      <div className="absolute inset-0 bg-zinc-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.08),transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 font-mono text-sm tracking-wider mb-3">SIMPLE PRICING</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Start free. Scale as you grow.</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            No hidden fees. Cancel anytime. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-2xl transition-all duration-300 ${
                plan.popular
                  ? "bg-gradient-to-b from-blue-600/10 to-zinc-900 border-2 border-blue-500/50 scale-105"
                  : "bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    plan.popular
                      ? "bg-blue-500/20 border border-blue-500/30"
                      : "bg-zinc-800/50 border border-zinc-700/50"
                  }`}
                >
                  <plan.icon className={`w-6 h-6 ${plan.popular ? "text-blue-400" : "text-zinc-400"}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-zinc-500">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-zinc-500">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <Check className={`w-4 h-4 ${plan.popular ? "text-blue-400" : "text-zinc-500"}`} />
                    <span className="text-sm text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3 rounded-lg font-medium transition-all duration-200 ${
                  plan.popular
                    ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25"
                    : "bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Enterprise callout */}
        <div className="mt-12 p-6 md:p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Need something custom?</h3>
              <p className="text-zinc-400">
                We offer custom enterprise solutions for large teams and specific requirements.
              </p>
            </div>
            <button className="shrink-0 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-lg border border-zinc-700 transition-colors">
              Talk to Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
