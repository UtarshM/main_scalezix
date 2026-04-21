import { Bot, Workflow, Brain, Plug, BarChart3, MessageSquare } from "lucide-react";
import Reveal from "@/components/Reveal";

const services = [
  { icon: Bot, title: "AI Automation", desc: "Automate repetitive tasks and complex workflows with intelligent AI systems." },
  { icon: Workflow, title: "Workflow Optimization", desc: "Streamline your business processes for maximum efficiency and output." },
  { icon: Brain, title: "Custom AI Agents", desc: "Purpose-built AI agents that learn, adapt, and execute on your behalf." },
  { icon: Plug, title: "CRM & API Integrations", desc: "Seamlessly connect your tools with custom integrations and APIs." },
  { icon: BarChart3, title: "Data Intelligence", desc: "Transform raw data into actionable insights with advanced analytics." },
  { icon: MessageSquare, title: "AI Chatbots", desc: "Deploy intelligent conversational agents that handle support 24/7." },
];

const ServicesSection = () => (
  <section id="services" className="py-24 md:py-32">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Services</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-5">
            What we <span className="text-muted-foreground">build.</span>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="text-muted-foreground">
            End-to-end AI solutions tailored to scale your operations and accelerate growth.
          </p>
        </Reveal>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 80} direction="up">
            <div className="glass-card rounded-xl p-7 hover-lift h-full group">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <s.icon className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
