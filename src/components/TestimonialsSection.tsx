import Reveal from "@/components/Reveal";

const testimonials = [
  {
    quote: "Scalezix transformed our operations. We automated 80% of our manual workflows in just 3 months.",
    name: "Sarah Chen",
    role: "CTO",
    company: "TechFlow",
  },
  {
    quote: "The AI agents they built handle our customer support better than we ever imagined. Response time dropped 90%.",
    name: "Marcus Rodriguez",
    role: "VP Operations",
    company: "NovaBridge",
  },
  {
    quote: "Working with Scalezix felt like adding a senior AI team to our company overnight. Incredible speed and quality.",
    name: "Emily Park",
    role: "CEO",
    company: "DataSphere",
  },
  {
    quote: "Their data intelligence platform gave us insights we didn't know were possible. Revenue up 40% in Q1.",
    name: "James Liu",
    role: "Head of Growth",
    company: "ScaleUp Labs",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-24 md:py-32 border-t border-border">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Testimonials</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Loved by <span className="text-muted-foreground">teams.</span>
          </h2>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 100} direction="up">
            <div className="glass-card rounded-xl p-7 h-full flex flex-col">
              <p className="text-sm text-foreground/80 leading-relaxed mb-6 flex-1">"{t.quote}"</p>
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
