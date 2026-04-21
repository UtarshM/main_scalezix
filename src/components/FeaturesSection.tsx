import { Zap, BarChart3, Server, Shield } from "lucide-react";
import Reveal from "@/components/Reveal";

const features = [
  { icon: Zap, title: "No-code Integrations", desc: "Connect your existing tools without writing a single line of code." },
  { icon: BarChart3, title: "Real-time Insights", desc: "Monitor performance and get actionable analytics in real time." },
  { icon: Server, title: "Scalable Architecture", desc: "Built to handle millions of requests with zero downtime." },
  { icon: Shield, title: "Secure & Reliable", desc: "Enterprise-grade security with SOC 2 compliance and encryption." },
];

const FeaturesSection = () => (
  <section id="features" className="py-24 md:py-32 border-t border-border">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: text */}
        <div>
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Features</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              Everything you need
              <br />
              <span className="text-muted-foreground">to scale.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-muted-foreground mb-10 max-w-md">
              A complete platform designed for teams that want to move fast and ship AI-powered products.
            </p>
          </Reveal>

          <div className="space-y-6">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={200 + i * 80} direction="left">
                <div className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                    <f.icon size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1">{f.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right: visual placeholder */}
        <Reveal delay={200} direction="right">
          <div className="glass-card rounded-2xl p-1 aspect-square max-w-md mx-auto lg:ml-auto">
            <div className="w-full h-full rounded-xl bg-gradient-to-br from-muted to-background flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                  <Zap className="text-primary" size={28} />
                </div>
                <div className="space-y-2 px-8">
                  <div className="h-2 w-32 bg-muted rounded-full mx-auto" />
                  <div className="h-2 w-24 bg-muted rounded-full mx-auto" />
                  <div className="h-2 w-28 bg-muted rounded-full mx-auto" />
                </div>
                <div className="grid grid-cols-2 gap-3 px-8 pt-4">
                  {[1, 2, 3, 4].map((n) => (
                    <div key={n} className="h-16 rounded-lg bg-muted/50 border border-border" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
