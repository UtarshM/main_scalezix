import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const CTASection = () => (
  <section className="py-24 md:py-32 border-t border-border">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Ready to scale
            <br />
            <span className="text-muted-foreground">with AI?</span>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto">
            Join hundreds of companies already using Scalezix to automate, optimize, and grow.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="rounded-full px-8 text-sm font-medium gap-2 group">
              Book a Call
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 text-sm font-medium border-border text-foreground hover:bg-muted">
              Start Free
            </Button>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default CTASection;
