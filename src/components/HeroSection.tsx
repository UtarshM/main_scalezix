import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Gradient orbs */}
    <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[180px] animate-pulse-glow" />
    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/8 rounded-full blur-[160px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

    {/* Grid overlay */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `linear-gradient(hsl(0 0% 100% / 0.05) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.05) 1px, transparent 1px)`,
        backgroundSize: "80px 80px",
      }}
    />

    <div className="relative container z-10 pt-32 pb-24">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-muted/50 text-xs text-muted-foreground mb-10 animate-fade-in backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span>AI-Powered Automation Platform</span>
        </div>

        {/* Headline */}
        <h1
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8 animate-fade-in tracking-tight"
          style={{ animationDelay: "0.1s" }}
        >
          Scale Your Business
          <br />
          <span className="text-muted-foreground">with AI.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          We help companies automate workflows, reduce costs, and grow faster
          using cutting-edge AI solutions.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <Button size="lg" className="rounded-full px-8 text-sm font-medium gap-2 group">
            Book a Demo
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8 text-sm font-medium border-border text-foreground hover:bg-muted">
            Get Started
          </Button>
        </div>
      </div>
    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
