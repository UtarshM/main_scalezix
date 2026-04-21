import Reveal from "@/components/Reveal";

const logos = [
  "OpenAI", "Google Cloud", "AWS", "Stripe", "Slack",
  "Notion", "Vercel", "GitHub", "Microsoft", "Salesforce",
];

const LogosSection = () => (
  <section className="py-16 border-t border-b border-border">
    <div className="container">
      <Reveal>
        <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground mb-10">
          Trusted by innovative teams
        </p>
      </Reveal>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
        {logos.map((name, i) => (
          <Reveal key={name} delay={i * 50}>
            <span className="text-sm font-medium text-muted-foreground/40 hover:text-muted-foreground transition-colors duration-300 cursor-default">
              {name}
            </span>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default LogosSection;
