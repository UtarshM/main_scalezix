import type { Metadata } from "next";
import { Briefcase, Code2, MapPin, Megaphone, Terminal } from "lucide-react";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { company, siteUrl } from "@/content/site";

export const metadata: Metadata = {
  title: `Careers | ${company.name}`,
  description: "Join our team at Scalezix. We are hiring a Software Developer, Computer Programmer, and Marketing Manager.",
  alternates: {
    canonical: `${siteUrl}/careers`,
  },
};

const jobs = [
  {
    title: "Software Developer",
    department: "Engineering",
    location: "Remote / Ahmedabad, India",
    type: "Full-time",
    icon: Code2,
    description: "Design, build, and maintain our custom AI systems, integration layers, and automation workflows using Next.js, Node.js, and modern AI APIs.",
    responsibilities: [
      "Develop custom AI agents and workflow automation platforms using Next.js and TypeScript.",
      "Integrate CRM, databases, and third-party APIs into cohesive automation layers.",
      "Build robust and scalable microservices and tools for our clients.",
      "Collaborate with marketing and operations to refine internal and external products."
    ],
    requirements: [
      "Familiarity with OpenAI, Anthropic, or Gemini APIs.",
      "Experience setting up databases (PostgreSQL, Firestore, etc.).",
      "Familiarity with workflow builders like n8n or Make is a plus."
    ],
    applyLink: "mailto:career@scalezix.com?subject=Application%20for%20Software%20Developer"
  },
  {
    title: "Computer Programmer",
    department: "Engineering",
    location: "Remote / Ahmedabad, India",
    type: "Full-time",
    icon: Terminal,
    description: "Write clean, optimized, and robust code for backend services, data pipelines, and LLM orchestration tools.",
    responsibilities: [
      "Develop clean, structured, and performant backend code in Python and Node.js.",
      "Design and maintain database schemas, migrations, and query optimizations.",
      "Build data extraction, processing, and ingestion pipelines.",
      "Write comprehensive unit and integration tests to ensure system stability."
    ],
    requirements: [
      "Strong understanding of data structures, algorithms, and software design patterns.",
      "Proficiency in Python, Node.js, SQL, and Git version control.",
      "Experience writing clean, type-safe, and self-documenting code.",
      "Detail-oriented mindset with a focus on code quality and testing."
    ],
    applyLink: "mailto:career@scalezix.com?subject=Application%20for%20Computer%20Programmer"
  },
  {
    title: "Marketing Manager",
    department: "Growth & Marketing",
    location: "Remote / Ahmedabad, India",
    type: "Full-time",
    icon: Megaphone,
    description: "Lead marketing efforts for Scalezix, including content creation, social media growth (LinkedIn), case study design, and inbound lead generation.",
    responsibilities: [
      "Create high-quality copy, blog posts, and LinkedIn content highlighting our AI case studies.",
      "Develop and execute inbound marketing campaigns for B2B client acquisition.",
      "Collaborate with the engineering team to turn complex technical builds into clear, business-focused case studies.",
      "Manage community engagement, newsletter distributions, and website content updates."
    ],
    requirements: [
      "2+ years of marketing experience, ideally in B2B SaaS, tech, or digital agencies.",
      "Excellent copywriting, communication, and visual design storytelling skills.",
      "Experience with LinkedIn organic growth and SEO strategies.",
      "Ability to understand technical concepts and present them as business outcomes (ROI, time saved)."
    ],
    applyLink: "mailto:career@scalezix.com?subject=Application%20for%20Marketing%20Manager"
  }
];

export default function CareersPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-24 pt-32 md:pt-40">
        <section className="section-shell">
          <div className="max-w-4xl">
            <p className="section-kicker">Careers</p>
            <h1 className="mt-6 text-5xl font-semibold leading-tight md:text-7xl">
              Build the future of business operations.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We are a team of builders, creators, and operators deploying production-grade AI systems and automations. We move fast, work with cutting-edge tech, and focus on delivering measurable growth for businesses worldwide.
            </p>
          </div>

          <div className="mt-16 space-y-8">
            {jobs.map((job) => {
              const Icon = job.icon;
              return (
                <article key={job.title} className="panel p-6 md:p-8 grid gap-6 lg:grid-cols-[1fr_2fr]">
                  {/* Left Column: Job Summary */}
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="text-2xl font-semibold text-foreground">{job.title}</h2>
                    <p className="mt-1 text-sm text-primary font-medium">{job.department}</p>
                    
                    <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4" />
                        <span>{job.type}</span>
                      </div>
                    </div>

                    <a
                      href={job.applyLink}
                      className="button-primary mt-6 inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold tracking-wide"
                    >
                      APPLY NOW
                    </a>
                  </div>

                  {/* Right Column: Details */}
                  <div className="space-y-6 lg:border-l lg:border-white/10 lg:pl-8">
                    <div>
                      <h3 className="text-base font-semibold text-foreground">About the Role</h3>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{job.description}</p>
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-foreground">Key Responsibilities</h3>
                      <ul className="mt-2 list-disc list-inside space-y-1.5 text-sm text-muted-foreground">
                        {job.responsibilities.map((resp) => (
                          <li key={resp} className="leading-7">{resp}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-foreground">Requirements</h3>
                      <ul className="mt-2 list-disc list-inside space-y-1.5 text-sm text-muted-foreground">
                        {job.requirements.map((req) => (
                          <li key={req} className="leading-7">{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
