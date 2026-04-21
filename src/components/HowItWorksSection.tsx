import { Search, Wrench, Rocket } from "lucide-react";
import Reveal from "@/components/Reveal";

const steps = [
  { icon: Search, num: "01", title: "Analyze", desc: "We deep-dive into your business processes to identify automation opportunities." },
  { icon: Wrench, num: "02", title: "Build", desc: "Our team designs and develops custom AI systems tailored to your needs." },
  { icon: Rocket, num: "03", title: "Scale", desc: "Deploy, monitor, and continuously optimize for maximum performance." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-24 md:py-32 border-t border-border">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">How It Works</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Three steps to <span className="text-muted-foreground">scale.</span>
          </h2>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-14 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 150} direction="up">
            <div className="text-center relative">
              <div className="w-12 h-12 rounded-full bg-muted border border-border flex items-center justify-center mx-auto mb-6 relative z-10">
                <s.icon size={20} className="text-muted-foreground" />
              </div>
              <span className="text-xs text-muted-foreground font-mono mb-2 block">{s.num}</span>
              <h3 className="font-heading text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
