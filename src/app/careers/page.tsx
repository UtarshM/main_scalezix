import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Careers | Build AI Systems with Scalezix",
  description:
    "Explore careers at Scalezix and join an AI-first team building automation, software, and growth systems for modern businesses.",
  path: "/careers",
  keywords: ["Scalezix careers", "AI jobs Ahmedabad", "automation careers India"],
});

export default function CareersPage() {
  const positions = [
    {
      title: "AI Automation Engineer",
      type: "Full-time / Intern",
      location: "Ahmedabad / Hybrid",
      description: "Design and implement workflow automations connecting CRMs, databases, and communication channels using APIs, Make.com, and Python.",
      skills: ["REST APIs", "Make.com / Zapier", "Python / Node.js", "AI Prompts / LangChain"]
    },
    {
      title: "Full-Stack Developer (Next.js)",
      type: "Full-time",
      location: "Ahmedabad / Hybrid",
      description: "Build beautiful, highly performant web applications, internal tools, and client portals using React, Next.js, and Tailwind CSS.",
      skills: ["React & TypeScript", "Next.js App Router", "Tailwind CSS", "Node.js & PostgreSQL"]
    },
    {
      title: "Database Analyst",
      type: "Full-time",
      location: "Ahmedabad / Hybrid",
      description: "Collect and document user requirements. Design and develop database architecture for information systems projects. Design, construct, modify, integrate, implement and test data models and database management systems. Conduct research and provide advice to other informatics professionals regarding the selection, application and implementation of database management tools. Operate database management systems to analyze data and perform data mining analysis. May lead, coordinate or supervise other workers in this group.",
      skills: ["Database Architecture", "Data Modeling", "DBMS Integration", "Data Mining & Analysis", "Requirements Collection", "Team Coordination"]
    },
    {
      title: "SEO & Growth Marketer",
      type: "Full-time",
      location: "Ahmedabad",
      description: "Own organic search acquisition and paid campaigns. Design content structures and implement SEO/AEO funnels for Scalezix and clients.",
      skills: ["Technical SEO & AEO", "Google & Meta Ads", "Conversion Optimization", "Content Automation"]
    }
  ];

  return (
    <main className="w-full bg-[#0C0D0F]">
      
      {/* Hero Section */}
      <section className="w-full bg-[#0C0D0F] text-white pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 xl:px-8">
          <div className="max-w-4xl">
            <span className="eyebrow mb-5">Careers</span>
            <h1 className="text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
              Build the Future of AI with Scalezix
            </h1>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300">
              We are an AI-first engineering and automation team based in Ahmedabad. We value speed, clean execution, and direct business impact. If you want to move fast and build things that companies actually use, you belong here.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full bg-white text-slate-900 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 xl:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Left Side: Culture & Values */}
            <div className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Why Work Here</h2>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  We focus on solving real operational problems with automated intelligence. We don't write reports; we deploy systems.
                </p>
                <ul className="mt-6 space-y-4 text-xs leading-relaxed text-slate-600">
                  <li className="flex gap-2">
                    <span className="text-[#473BFD] font-bold">&bull;</span>
                    <div>
                      <strong className="text-slate-800 block">AI-First Culture</strong>
                      Prompting, automation, and model integrations are at the core of everything we do.
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#473BFD] font-bold">&bull;</span>
                    <div>
                      <strong className="text-slate-800 block">High Speed & Zero Bureaucracy</strong>
                      We ship modular code and live automations in weeks, not quarters. No red tape.
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#473BFD] font-bold">&bull;</span>
                    <div>
                      <strong className="text-slate-800 block">Real Commercial Impact</strong>
                      Your work will qualify real leads, route millions in revenue, and save thousands of manual hours.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 text-[10px] font-mono text-slate-400">
                Work environment: Hybrid / i-Hub Ahmedabad
              </div>
            </div>

            {/* Right Side: Positions List */}
            <div className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-6 flex flex-col gap-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Open Positions</h2>
                <p className="mt-1 text-xs text-slate-500">
                  Review our active roles and apply by sending your resume.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                {positions.map((pos, idx) => (
                  <div key={idx} className="rounded-xl border border-slate-200/60 bg-white p-4 flex flex-col gap-2.5">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-semibold text-sm text-slate-800">{pos.title}</h3>
                      <span className="text-[9px] font-mono border border-slate-200 px-2 py-0.5 rounded-full text-slate-500 shrink-0">
                        {pos.type}
                      </span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-slate-600">
                      {pos.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {pos.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#473BFD]/5 text-[#473BFD] border border-[#473BFD]/10">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs text-slate-600">
                Don't see a matching position? Send your resume and a short description of what you build to{" "}
                <a href="mailto:hr@scalezix.com" className="font-mono font-semibold text-[#473BFD] hover:underline">
                  hr@scalezix.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
