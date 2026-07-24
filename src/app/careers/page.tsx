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
      title: "SEO & Growth Marketer",
      type: "Full-time",
      location: "Ahmedabad",
      description: "Own organic search acquisition and paid campaigns. Design content structures and implement SEO/AEO funnels for Scalezix and clients.",
      skills: ["Technical SEO & AEO", "Google & Meta Ads", "Conversion Optimization", "Content Automation"]
    }
  ];

  return (
    <main className="section-shell">
      <div className="max-w-4xl">
        <p className="section-kicker w-fit">Careers</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-slate-900 dark:text-white md:text-6xl">
          Build the Future of AI with Scalezix
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
          We are an AI-first engineering and automation team based in Ahmedabad. We value speed, clean execution, and direct business impact. If you want to move fast and build things that companies actually use, you belong here.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left Side: Culture & Values */}
        <section className="mesh-card rounded-[1.8rem] p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-medium text-slate-900 dark:text-white">Why Work Here</h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              We focus on solving real operational problems with automated intelligence. We don't write reports; we deploy systems.
            </p>
            <ul className="mt-6 space-y-4 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              <li className="flex gap-2">
                <span className="text-[#1f77ff] font-bold">&bull;</span>
                <div>
                  <strong className="text-slate-800 dark:text-white block">AI-First Culture</strong>
                  Prompting, automation, and model integrations are at the core of everything we do.
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-[#1f77ff] font-bold">&bull;</span>
                <div>
                  <strong className="text-slate-800 dark:text-white block">High Speed & Zero Bureaucracy</strong>
                  We ship modular code and live automations in weeks, not quarters. No red tape.
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-[#1f77ff] font-bold">&bull;</span>
                <div>
                  <strong className="text-slate-800 dark:text-white block">Real Commercial Impact</strong>
                  Your work will qualify real leads, route millions in revenue, and save thousands of manual hours.
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-black/5 dark:border-white/5 text-[10px] font-mono text-slate-400">
            Work environment: Hybrid / i-Hub Ahmedabad
          </div>
        </section>

        {/* Right Side: Positions List */}
        <section className="metal-panel rounded-[1.8rem] p-6 flex flex-col gap-6">
          <div>
            <h2 className="text-2xl font-medium text-slate-900 dark:text-white">Open Positions</h2>
            <p className="mt-1 text-xs text-slate-500 dark:text-muted-foreground">
              Review our active roles and apply by sending your resume.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {positions.map((pos, idx) => (
              <div key={idx} className="rounded-xl border border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01] p-4 flex flex-col gap-2.5">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="font-semibold text-sm text-slate-800 dark:text-white">{pos.title}</h3>
                  <span className="text-[9px] font-mono border border-black/10 dark:border-white/10 px-2 py-0.5 rounded-full text-slate-500 dark:text-slate-400 shrink-0">
                    {pos.type}
                  </span>
                </div>
                <p className="text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
                  {pos.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {pos.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#1f77ff]/5 text-[#1f77ff] dark:text-[#00f5ff] border border-[#1f77ff]/10">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-black/5 dark:border-white/5 text-xs text-slate-600 dark:text-slate-300">
            Don't see a matching position? Send your resume and a short description of what you build to{" "}
            <a href="mailto:hello@scalezix.com" className="font-mono font-semibold text-[#1f77ff] hover:underline">
              hello@scalezix.com
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
