import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Reveal from "@/components/Reveal";

const plans = [
  {
    name: "Starter",
    price: "$2,499",
    period: "/month",
    desc: "For small teams getting started with AI automation.",
    features: ["1 AI workflow", "Basic integrations", "Email support", "Analytics dashboard", "5 team members"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    price: "$5,999",
    period: "/month",
    desc: "For growing companies ready to scale operations.",
    features: ["5 AI workflows", "Advanced integrations", "Priority support", "Custom AI agents", "25 team members", "API access"],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For large organizations with complex needs.",
    features: ["Unlimited workflows", "Custom integrations", "Dedicated support", "Custom AI models", "Unlimited team", "SLA guarantee", "On-prem option"],
    cta: "Contact Sales",
    popular: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-24 md:py-32 border-t border-border">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Pricing</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Simple, transparent <span className="text-muted-foreground">pricing.</span>
          </h2>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {plans.map((p, i) => (
          <Reveal key={p.name} delay={i * 100} direction="up">
            <div
              className={`rounded-xl p-7 h-full flex flex-col relative ${
                p.popular
                  ? "bg-foreground/[0.03] border-2 border-primary/30"
                  : "glass-card"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest bg-primary text-primary-foreground px-3 py-1 rounded-full font-semibold">
                  Most Popular
                </span>
              )}
              <div className="mb-6">
                <h3 className="font-heading text-lg font-semibold mb-1">{p.name}</h3>
                <p className="text-xs text-muted-foreground mb-4">{p.desc}</p>
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-3xl font-bold">{p.price}</span>
                  {p.period && <span className="text-sm text-muted-foreground">{p.period}</span>}
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <Check size={14} className="text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-full text-sm ${
                  p.popular ? "" : "bg-muted text-foreground hover:bg-muted/80 border border-border"
                }`}
              >
                {p.cta}
              </Button>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
