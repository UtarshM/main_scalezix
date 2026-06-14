import type { Metadata } from "next";
import { Bot, BrainCircuit, ChartNoAxesCombined, DatabaseZap, MessageSquareText, Waypoints, Cpu, Megaphone } from "lucide-react";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { company, siteUrl } from "@/content/site";

export const metadata: Metadata = {
  title: `Services | ${company.name}`,
  description: "Explore our AI automation services: workflow optimization, custom agents, CRM integrations, and chatbot systems.",
  alternates: {
    canonical: `${siteUrl}/services`,
  },
};

const techServices = [
  {
    title: "AI Automation",
    description: "Replace repetitive manual work with AI-powered execution flows that run across your tools.",
    icon: Bot,
  },
  {
    title: "Custom AI Agents",
    description: "Deploy tailored agents that qualify leads, summarize data, trigger actions, and support teams in real time.",
    icon: BrainCircuit,
  },
  {
    title: "Data Intelligence",
    description: "Turn fragmented reporting into live dashboards, predictive insights, revenue visibility, and better decision-making.",
    icon: ChartNoAxesCombined,
  },
];

const marketingServices = [
  {
    title: "AI Chatbots & WhatsApp",
    description: "Launch responsive AI chat experiences for WhatsApp, websites, support, and lead capture funnels.",
    icon: MessageSquareText,
  },
  {
    title: "CRM & API Integrations",
    description: "Connect your CRM, ERP, communication channels, ad platforms, and internal systems into one reliable automation layer.",
    icon: DatabaseZap,
  },
  {
    title: "Workflow & Journey Optimization",
    description: "Redesign bottlenecks across operations, sales, marketing, and service delivery to unlock faster throughput.",
    icon: Waypoints,
  },
];

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-24 pt-32 md:pt-40">
        <section className="section-shell">
          <p className="section-kicker">Services</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
            AI systems built for speed, clarity, and measurable growth.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{company.seoDescription}</p>

          {/* Tech Section */}
          <div className="mt-20">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                <Cpu className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-semibold md:text-3xl">Tech & AI Engineering</h2>
            </div>
            <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
              We design and engineer robust backend code, custom model integrations, analytics dashboards, and secure automated workflows.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {techServices.map((service) => {
                const Icon = service.icon;
                return (
                  <article key={service.title} className="panel h-full p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.description}</p>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Marketing Section */}
          <div className="mt-20">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-secondary/20 bg-secondary/10 text-secondary">
                <Megaphone className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-semibold md:text-3xl">Growth & Marketing Automation</h2>
            </div>
            <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
              We build customer acquisition systems, WhatsApp marketing campaigns, automated lead routing, and CRM marketing funnels.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {marketingServices.map((service) => {
                const Icon = service.icon;
                return (
                  <article key={service.title} className="panel h-full p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-secondary/20 bg-secondary/10 text-secondary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.description}</p>
                  </article>
                );
              })}
            </div>
          </div>

        </section>
      </main>
      <SiteFooter />
    </>
  );
}
