export const companyInfo = {
  name: "Scalezix Technologies",
  website: "https://scalezix.com",
  phone: "+91 82000 10241",
  email: "hello@scalezix.com",
  address: "i-Hub, Prajna Puram, KCG Campus, Navrangpura, Ahmedabad, Gujarat 380015",
  address2: "208, 2nd Floor, Shalin Centrum, Behind H.P. Petrol Pump, Sector-11, Gandhinagar - 382011",
  whatsappHref:
    "https://wa.me/918200010241?text=Hi%20Scalezix,%20I%20want%20to%20book%20a%20free%20AI%20strategy%20call.",
  calendlyHref: "https://calendly.com/scalezix/free-strategy-call",
};

export const homeTicker = [
  "200+ Automations Deployed",
  "3x Productivity Increase",
  "<6 Weeks Deployment",
  "Ahmedabad's #1 AI Agency",
  "AWS Summit 2025",
  "GoodFirms Listed",
];

export const trustStats = [
  { label: "Automations Deployed", value: "200+" },
  { label: "Clients Served", value: "50+" },
  { label: "Avg Productivity Gain", value: "3x" },
  { label: "Deployment Time", value: "<6 Weeks" },
  { label: "Team Members", value: "10+" },
];

export const serviceCards: Array<{
  slug: string;
  name: string;
  icon: ServiceIconKey;
  short: string;
  bullets: string[];
  audience: string;
}> = [
  {
    slug: "ai-automation",
    name: "AI Automation",
    icon: "workflow",
    short: "Replace manual work with intelligent workflows that run 24/7.",
    bullets: [
      "Workflow automation audits",
      "Lead routing and qualification flows",
      "WhatsApp and CRM automations",
      "Internal productivity systems",
    ],
    audience: "D2C brands, real estate teams, healthcare operators, SMEs",
  },
  {
    slug: "software-development",
    name: "Software Development",
    icon: "code",
    short: "React, FastAPI, and AWS applications built for scale.",
    bullets: [
      "Web apps and portals",
      "Custom CRMs and internal dashboards",
      "APIs and integrations",
      "Cloud deployment pipelines",
    ],
    audience: "Startups, growing businesses, agencies, internal ops teams",
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    icon: "megaphone",
    short: "SEO, paid ads, social media, and content tied to revenue.",
    bullets: [
      "SEO and AEO strategy",
      "Meta and Google Ads management",
      "Social content systems",
      "Performance reporting and CRO support",
    ],
    audience: "Real estate, D2C, education, healthcare, service businesses",
  },
  {
    slug: "ai-agents",
    name: "AI Agents",
    icon: "bot",
    short: "Deploy agents that qualify leads, summarize data, and execute tasks.",
    bullets: [
      "Custom business agents",
      "Multi-system task execution",
      "Reasoning-driven workflows",
      "Operator copilots",
    ],
    audience: "Teams that need autonomous execution, support, and intelligence",
  },
  {
    slug: "crm-integrations",
    name: "CRM & Integrations",
    icon: "network",
    short: "Connect your tools into one unified automation layer.",
    bullets: [
      "CRM implementation",
      "Sales pipeline automation",
      "Marketing and ops integrations",
      "Reporting synchronization",
    ],
    audience: "Sales-heavy businesses with fragmented data and tools",
  },
  {
    slug: "ai-chatbots",
    name: "AI Chatbots",
    icon: "message",
    short: "WhatsApp, website, and support bots that convert and retain.",
    bullets: [
      "Website chatbots",
      "WhatsApp lead flows",
      "Support automation",
      "Qualification and handoff logic",
    ],
    audience: "Support, sales, and marketing teams wanting 24/7 response coverage",
  },
];

export const serviceDetailContent = {
  "ai-automation": {
    title: "AI Automation Services for Indian Businesses",
    description:
      "From chatbots to full workflow automation, we deploy AI that saves time, reduces cost, and scales revenue.",
    sections: [
      {
        title: "What is AI automation?",
        text: "AI automation combines workflows, logic, prompts, and connected tools so repetitive business processes run faster with less manual effort.",
      },
      {
        title: "Our AI services",
        text: "We build internal workflows, lead routing systems, notification chains, reporting automations, WhatsApp journeys, and agent-assisted execution layers.",
      },
      {
        title: "Industries we serve",
        text: "Real estate, D2C, healthcare, education, agencies, and SME service businesses across India.",
      },
      {
        title: "Tools we use",
        text: "n8n, OpenAI, Anthropic, WhatsApp API, Zapier, CRMs, and internal dashboards.",
      },
    ],
    faqs: [
      "What is AI automation for business?",
      "How much does AI automation cost in India?",
      "Which businesses benefit from AI automation?",
      "How long does it take to deploy AI automation?",
      "What is the difference between AI agents and AI automation?",
      "Can AI automation work with WhatsApp?",
      "What tools does Scalezix use for AI automation?",
      "How do I get started with AI automation?",
    ],
  },
  "software-development": {
    title: "Custom Software Development — React, FastAPI & AWS",
    description:
      "We build fast, scalable, modern web applications and APIs for startups and growing businesses across India.",
    sections: [
      {
        title: "What we build",
        text: "Web apps, CRMs, marketplaces, dashboards, APIs, admin portals, and internal business tooling.",
      },
      {
        title: "Tech stack",
        text: "Next.js, React, FastAPI, TypeScript, PostgreSQL, MongoDB, AWS, and modern deployment pipelines.",
      },
      {
        title: "Development process",
        text: "Discover, design, build, test, deploy, and then support with a structured iteration loop.",
      },
      {
        title: "Engagement models",
        text: "Fixed-scope buildouts, retainers, and dedicated execution partnerships.",
      },
    ],
    faqs: [
      "What tech stack do you use?",
      "How long does a software project take?",
      "Do you provide post-launch support?",
    ],
  },
  "digital-marketing": {
    title: "Digital Marketing Services That Drive Revenue",
    description:
      "SEO, performance marketing, social media, and content systems tied to measurable business outcomes.",
    sections: [
      {
        title: "What we manage",
        text: "SEO, Meta Ads, Google Ads, content, social media systems, email marketing, and reporting.",
      },
      {
        title: "Our process",
        text: "Research, positioning, funnel strategy, campaign execution, reporting, and optimization.",
      },
      {
        title: "Industries",
        text: "Real estate, D2C, healthcare, education, and B2B service businesses.",
      },
      {
        title: "Tools",
        text: "Google Analytics, Search Console, Meta Ads Manager, SEMrush, and funnel reporting stacks.",
      },
    ],
    faqs: [
      "What digital marketing services do you offer?",
      "How long before I see SEO results?",
      "Do you run paid ads?",
    ],
  },
  "ai-agents": {
    title: "Custom AI Agents for Reasoning and Execution",
    description:
      "Deploy bespoke AI agents that qualify leads, summarize data, coordinate tasks, and execute work across your systems.",
    sections: [
      {
        title: "What AI agents do",
        text: "AI agents go beyond static automation by reasoning across inputs, selecting actions, and carrying tasks forward with business context.",
      },
      {
        title: "Where they help",
        text: "Sales qualification, internal copilots, reporting support, document handling, and multi-step operational execution.",
      },
      {
        title: "How we build them",
        text: "We define tools, guardrails, prompts, and operational logic so the agent behaves like a useful digital operator, not a gimmick.",
      },
      {
        title: "Deployment model",
        text: "Agents can operate through internal dashboards, CRM actions, WhatsApp flows, or embedded support experiences.",
      },
    ],
    faqs: [
      "What is an AI agent?",
      "How is an AI agent different from automation?",
      "Can AI agents work with CRMs and WhatsApp?",
    ],
  },
  "crm-integrations": {
    title: "CRM & Integration Systems That Unify Sales Operations",
    description:
      "Connect your marketing, sales, and support stack into one cleaner automation layer with better visibility and less manual duplication.",
    sections: [
      {
        title: "Why integration matters",
        text: "Disconnected tools create reporting blind spots, slow follow-up, and wasted operator time.",
      },
      {
        title: "What we integrate",
        text: "CRMs, forms, WhatsApp, ad platforms, spreadsheets, dashboards, and internal workflows.",
      },
      {
        title: "What improves",
        text: "Lead visibility, response speed, reporting confidence, and downstream execution quality.",
      },
      {
        title: "Typical outcomes",
        text: "Cleaner pipelines, better handoffs, and fewer missed opportunities across the customer journey.",
      },
    ],
    faqs: [
      "Can you connect our existing CRM?",
      "Do you work with WhatsApp and forms?",
      "Will we get a reporting layer too?",
    ],
  },
  "ai-chatbots": {
    title: "AI Chatbots for Support, Lead Capture, and Qualification",
    description:
      "Website and WhatsApp chatbots that respond faster, capture intent, and create better sales or support handoffs.",
    sections: [
      {
        title: "Where chatbots fit",
        text: "Lead capture, FAQ handling, support routing, qualification, and follow-up assistance.",
      },
      {
        title: "What we optimize for",
        text: "Conversion quality, handoff accuracy, business tone, and deeper integration with your internal systems.",
      },
      {
        title: "Channels",
        text: "Website chat, WhatsApp, and support flows embedded into broader automation systems.",
      },
      {
        title: "Business benefit",
        text: "Always-on response capability without losing brand control or flooding teams with low-quality leads.",
      },
    ],
    faqs: [
      "Can chatbots qualify leads?",
      "Do you build WhatsApp chatbots too?",
      "Can the bot hand off to a human team member?",
    ],
  },
} as const;

export const products = [
  {
    slug: "scalezix-crm",
    name: "Scalezix CRM",
    tag: "AI-Ready CRM",
    description:
      "Centralize leads, automate outreach, and keep your pipeline moving without manual chaos.",
    features: ["Lead scoring", "Pipeline automation", "Smart follow-ups", "Reporting dashboards"],
  },
  {
    slug: "whatsapp-ai",
    name: "WhatsApp AI Platform",
    tag: "Conversational Growth Engine",
    description:
      "Run campaigns, chatbot flows, and team inbox management on WhatsApp at scale.",
    features: ["24/7 automation", "Campaign broadcasts", "Lead capture", "Inbox workflows"],
  },
  {
    slug: "custom-ai-agents",
    name: "Custom AI Agents",
    tag: "Bespoke Automation",
    description:
      "Purpose-built AI agents that reason, connect your systems, and execute across operations.",
    features: [
      "Multi-system integration",
      "Real-time reasoning",
      "Task execution",
      "Business-specific training",
    ],
  },
];

export const caseStudies = [
  {
    slug: "real-estate-lead-routing",
    title: "40% Operational Time Saved",
    industry: "Real Estate Client — Ahmedabad",
    challenge: "Manual lead routing slowed down response time and created missed follow-ups.",
    solution: "AI workflow automation replaced manual triage and synchronized CRM routing.",
    results: ["40% operational time saved", "Faster lead distribution", "Better sales visibility"],
  },
  {
    slug: "d2c-chatbot-crm-growth",
    title: "2x Revenue Growth",
    industry: "D2C Brand",
    challenge: "Sales conversations were fragmented between ads, WhatsApp, and manual follow-up.",
    solution: "AI chatbot plus CRM automation created a tighter lead-to-sale loop.",
    results: ["2x revenue growth", "Improved follow-up speed", "Cleaner pipeline tracking"],
  },
  {
    slug: "service-business-reporting",
    title: "85% Reduction in Reporting Lag",
    industry: "Service Business",
    challenge: "Leadership decisions were delayed by spreadsheet-heavy reporting habits.",
    solution: "Live dashboards and synced data flows replaced fragmented reporting.",
    results: ["85% less reporting lag", "Better visibility", "Lower coordination burden"],
  },
];

export const blogPosts = [
  {
    slug: "what-is-ai-automation-2026",
    title: "What is AI Automation and How Can It Help Your Business in 2026?",
    category: "AI Automation",
    excerpt:
      "A practical guide to what AI automation means, where it creates ROI, and how Indian businesses should approach rollout in 2026.",
    metaDescription:
      "Learn what AI automation is, how it works, where it saves time, and how Indian businesses can deploy it profitably in 2026.",
    keywords: [
      "AI automation",
      "AI automation for business",
      "AI automation India",
      "business automation 2026",
    ],
    publishedAt: "2026-06-27",
    readingTime: "8 min read",
    author: "Scalezix Editorial Team",
    intro:
      "AI automation is no longer just about connecting forms to spreadsheets. In 2026, it means combining workflows, LLM reasoning, business rules, notifications, and CRM actions so teams move faster without adding operational chaos.",
    sections: [
      {
        heading: "What AI automation actually means",
        body: [
          "AI automation is the use of connected software, prompts, rules, and business data to complete operational work with less manual effort. The difference between ordinary automation and AI automation is that AI can interpret messy input, summarize information, classify intent, and choose next steps with more flexibility.",
          "A basic automation might send every form fill into a CRM. An AI-powered automation can read the lead message, detect urgency, label industry, prioritize the account, assign the correct sales rep, and trigger the right WhatsApp follow-up immediately.",
        ],
      },
      {
        heading: "Where businesses see the biggest gains",
        body: [
          "The highest ROI usually comes from repetitive decisions that already happen many times a day: lead qualification, support routing, reporting summaries, internal approvals, follow-up reminders, CRM hygiene, and customer communication workflows.",
          "When teams spend hours copying data between tools or deciding the same thing over and over, AI automation can compress that work into seconds while improving consistency.",
        ],
      },
      {
        heading: "What good implementation looks like",
        body: [
          "Good AI automation starts with a workflow audit, not with random tools. You first identify bottlenecks, map where delays happen, and define a measurable outcome such as faster response time, lower reporting lag, or higher lead conversion.",
          "Then you design the flow, connect the tools, define guardrails, and test failure cases. This is what separates production automation from a fragile demo.",
        ],
      },
      {
        heading: "How to start without overcomplicating it",
        body: [
          "Start with one workflow that is frequent, measurable, and painful. For many businesses, that means inbound lead handling, support triage, or reporting generation.",
          "If the workflow saves time every day and touches revenue or customer experience, it is usually a strong first candidate.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is AI automation for business?",
        answer:
          "AI automation for business combines workflows, tools, prompts, and data so repetitive operational tasks can be handled faster with less manual intervention.",
      },
      {
        question: "Which businesses benefit most from AI automation?",
        answer:
          "Businesses with repetitive lead handling, customer communication, reporting, and multi-tool coordination usually benefit the most.",
      },
      {
        question: "How long does it take to deploy AI automation?",
        answer:
          "A focused first workflow can often be scoped and launched in a few weeks, while broader automation systems take longer depending on integrations and complexity.",
      },
    ],
  },
  {
    slug: "automate-whatsapp-for-business-india",
    title: "How to Automate WhatsApp for Business in India",
    category: "AI Automation",
    excerpt:
      "A step-by-step look at using WhatsApp automation for lead capture, qualification, follow-up, and support in India.",
    metaDescription:
      "Learn how to automate WhatsApp for business in India using flows, AI replies, lead qualification, CRM sync, and support automation.",
    keywords: [
      "automate WhatsApp for business",
      "WhatsApp automation India",
      "WhatsApp business AI",
      "WhatsApp lead automation",
    ],
    publishedAt: "2026-06-27",
    readingTime: "7 min read",
    author: "Scalezix Editorial Team",
    intro:
      "For many Indian businesses, WhatsApp is already the real sales desk. The problem is that manual handling creates missed follow-ups, slow replies, and uneven lead quality. Automation fixes that when it is connected to CRM, support, and sales logic properly.",
    sections: [
      {
        heading: "Why WhatsApp automation matters",
        body: [
          "Customers want quick answers, especially after clicking an ad or sending an inquiry. If your team takes too long, the conversation cools and the lead often disappears.",
          "WhatsApp automation keeps the first interaction fast, structured, and consistent while still allowing human takeover when needed.",
        ],
      },
      {
        heading: "What you can automate",
        body: [
          "Typical workflows include instant greeting, lead qualification questions, appointment nudges, brochure delivery, team handoff, abandoned inquiry follow-up, and support routing.",
          "The best systems also update your CRM automatically so the conversation does not stay trapped inside WhatsApp.",
        ],
      },
      {
        heading: "The right setup architecture",
        body: [
          "A good WhatsApp automation stack usually includes approved API access, message templates, workflow logic, a CRM or spreadsheet destination, and optional AI classification for open-text responses.",
          "This means your business gets both speed and data visibility, rather than just an auto-reply bot with no operational value.",
        ],
      },
      {
        heading: "Common mistakes to avoid",
        body: [
          "The biggest mistakes are over-automating sensitive conversations, asking too many questions upfront, and not designing a clean human handoff.",
          "Users should feel guided, not trapped. Good automation reduces friction instead of creating it.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can WhatsApp automation qualify leads?",
        answer:
          "Yes. It can ask a few high-intent questions, tag the lead, assign priority, and push the record into your CRM automatically.",
      },
      {
        question: "Do I need a CRM for WhatsApp automation?",
        answer:
          "You do not strictly need one, but connecting WhatsApp to a CRM gives far better reporting, follow-up discipline, and team visibility.",
      },
      {
        question: "Can a human step into the chat later?",
        answer:
          "Yes. The best setups use automation for speed and structure, then hand over to a human when the conversation becomes high-value or complex.",
      },
    ],
  },
  {
    slug: "ai-chatbots-vs-human-support",
    title: "AI Chatbots vs Human Support: Which is Better for SMEs?",
    category: "Business Growth",
    excerpt:
      "How SMEs should think about support quality, response speed, and operating cost when choosing between AI chatbots and human teams.",
    metaDescription:
      "Compare AI chatbots vs human support for SMEs across cost, speed, quality, and customer experience with practical rollout advice.",
    keywords: [
      "AI chatbots vs human support",
      "SME support automation",
      "AI chatbot for SMEs",
      "customer support AI",
    ],
    publishedAt: "2026-06-27",
    readingTime: "6 min read",
    author: "Scalezix Editorial Team",
    intro:
      "The real decision is not chatbot or human. It is what should be automated, what should be escalated, and how your support operation can stay fast without losing trust.",
    sections: [
      {
        heading: "Where AI chatbots outperform humans",
        body: [
          "Chatbots are stronger at instant replies, simple FAQ handling, structured qualification, and after-hours coverage. They do not get tired, they do not forget scripts, and they can maintain response consistency at scale.",
          "For basic support volume, this is often enough to dramatically reduce queue pressure.",
        ],
      },
      {
        heading: "Where humans still win",
        body: [
          "Humans are better at emotionally sensitive issues, negotiation, ambiguity, and edge cases where policy, empathy, or commercial judgment matters.",
          "A user with a billing problem, urgent escalation, or unusual request usually needs a person, not a scripted loop.",
        ],
      },
      {
        heading: "The best model for SMEs",
        body: [
          "Most SMEs should use a hybrid model. Let AI handle first response, triage, repetitive answers, ticket tagging, and context collection. Then pass complex cases to human agents with the conversation summary already prepared.",
          "That model protects service quality while reducing manual load.",
        ],
      },
      {
        heading: "How to evaluate success",
        body: [
          "Do not judge support automation only by cost. Track first response time, resolution speed, escalation quality, CSAT trends, and the percentage of conversations the team no longer has to handle manually.",
          "Good chatbot systems improve both experience and operating efficiency.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should SMEs replace support teams with AI chatbots?",
        answer:
          "Usually no. SMEs get better outcomes by using AI chatbots for first-line handling and human agents for complex or sensitive conversations.",
      },
      {
        question: "What support tasks should a chatbot handle?",
        answer:
          "FAQ replies, lead capture, issue triage, status updates, routing, and basic qualification are strong chatbot use cases.",
      },
      {
        question: "Will chatbot automation hurt customer experience?",
        answer:
          "It can if it is badly designed. A well-implemented hybrid system usually improves response speed while preserving human support where it matters most.",
      },
    ],
  },
  {
    slug: "software-development-cost-india",
    title: "How Much Does Custom Software Development Cost in India?",
    category: "Software Development",
    excerpt:
      "Understand the variables that shape software cost, team structure, delivery speed, and build quality in India.",
    metaDescription:
      "Understand what drives custom software development cost in India, from scope and integrations to product complexity and team model.",
    keywords: [
      "software development cost India",
      "custom software development India",
      "web app development cost",
      "software project pricing India",
    ],
    publishedAt: "2026-06-27",
    readingTime: "8 min read",
    author: "Scalezix Editorial Team",
    intro:
      "Custom software cost in India depends less on hourly rate than on scope clarity, integration complexity, product expectations, and the number of unknowns still unresolved at project start.",
    sections: [
      {
        heading: "The main factors that affect cost",
        body: [
          "Project cost is shaped by product scope, design complexity, backend logic, user roles, integrations, analytics needs, QA expectations, and launch support.",
          "A simple internal dashboard is very different from a multi-role SaaS product with payments, notifications, workflows, and admin tooling.",
        ],
      },
      {
        heading: "Why unclear scope becomes expensive",
        body: [
          "Many teams underestimate how much rework comes from changing assumptions during development. If features, user flows, and system behavior are unclear, the cost expands through revisions and technical debt.",
          "Clarity upfront is one of the biggest cost controls available.",
        ],
      },
      {
        heading: "How engagement model changes pricing",
        body: [
          "Fixed-scope builds work best when the outcome is well defined. Retainers suit ongoing product evolution. Dedicated team models are useful when roadmap velocity matters more than a tightly bounded feature list.",
          "The right model depends on whether you need predictability, speed, or flexibility most.",
        ],
      },
      {
        heading: "What businesses should ask before signing",
        body: [
          "Ask what is included in discovery, design, QA, deployment, support, documentation, analytics, and future iteration. A low quote can become expensive if critical delivery work is missing.",
          "The goal is not the cheapest build. It is the most commercially sensible one.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why do software quotes vary so much in India?",
        answer:
          "Quotes vary because team quality, scope clarity, integrations, design depth, QA standards, and post-launch support are often very different between vendors.",
      },
      {
        question: "Is fixed-price or retainer better for software projects?",
        answer:
          "Fixed-price works for clear scope. Retainer is usually better when the roadmap will evolve after discovery or launch.",
      },
      {
        question: "How can I reduce software development cost without hurting quality?",
        answer:
          "Reduce scope ambiguity, prioritize must-have features, launch in phases, and choose a team that can challenge unnecessary complexity early.",
      },
    ],
  },
  {
    slug: "top-business-processes-to-automate",
    title: "Top 10 Business Processes You Can Automate with AI Today",
    category: "AI Automation",
    excerpt:
      "A prioritized list of the workflows most businesses should automate first if they want measurable gains without overengineering.",
    metaDescription:
      "Discover the top business processes to automate with AI, from lead routing and follow-up to reporting, support, and internal ops.",
    keywords: [
      "business processes to automate",
      "AI workflow automation",
      "automation opportunities",
      "AI business operations",
    ],
    publishedAt: "2026-06-27",
    readingTime: "9 min read",
    author: "Scalezix Editorial Team",
    intro:
      "If a process is repetitive, time-sensitive, and spread across multiple tools, it is probably a candidate for AI automation. The fastest wins usually come from workflows that already happen daily and already create team friction.",
    sections: [
      {
        heading: "1. Lead capture and routing",
        body: [
          "Route inbound leads automatically based on source, urgency, geography, and buyer intent. This reduces response delay and prevents hot leads from sitting idle.",
        ],
      },
      {
        heading: "2. Follow-up reminders and re-engagement",
        body: [
          "Automate follow-up sequences across WhatsApp, email, and CRM tasks so prospects do not disappear because someone forgot to respond.",
        ],
      },
      {
        heading: "3. Reporting summaries",
        body: [
          "Turn scattered dashboards and spreadsheets into scheduled summaries for leadership, sales, and operations without requiring manual compilation every week.",
        ],
      },
      {
        heading: "4. Support triage and FAQ handling",
        body: [
          "Use AI to answer repeat questions, classify issue types, and escalate the right tickets to the right people with useful context attached.",
        ],
      },
      {
        heading: "5. CRM hygiene and status updates",
        body: [
          "Keep records tagged, assigned, updated, and deduplicated automatically so sales reporting stays trustworthy.",
        ],
      },
      {
        heading: "6. Internal approvals and notifications",
        body: [
          "Automate repetitive approval chains, reminders, and exception handling so tasks do not stall between teams.",
        ],
      },
      {
        heading: "7. Proposal and document generation",
        body: [
          "Draft repeatable documents using templates, structured inputs, and review steps so teams spend less time rebuilding the same materials.",
        ],
      },
      {
        heading: "8. Appointment scheduling flows",
        body: [
          "Let automation qualify the user, offer the right booking path, and trigger confirmations and reminders across channels.",
        ],
      },
      {
        heading: "9. Campaign response classification",
        body: [
          "Tag campaign replies by interest, urgency, location, and next action so marketing and sales teams can move faster.",
        ],
      },
      {
        heading: "10. Dashboard alerts and anomaly checks",
        body: [
          "Send proactive summaries or alerts when performance drops, lead quality changes, or operational bottlenecks cross a threshold.",
        ],
      },
    ],
    faqs: [
      {
        question: "What business process should I automate first?",
        answer:
          "Start with a workflow that is repetitive, measurable, and closely tied to revenue, speed, or customer experience.",
      },
      {
        question: "Do I need many tools before automation becomes useful?",
        answer:
          "No. Even a small stack can benefit if a workflow causes delay, manual copying, or inconsistent execution.",
      },
      {
        question: "How do I know if automation is worth it?",
        answer:
          "If the process happens frequently, creates team friction, and has a clear success metric, automation is usually worth evaluating.",
      },
    ],
  },
  {
    slug: "ai-automation-guide-canadian-businesses-2026",
    title: "AI Automation for Canadian Businesses: The 2026 Strategy Guide",
    category: "Canada AI & Operations",
    excerpt:
      "Discover how Canadian companies in Toronto, Vancouver, Calgary, and Montreal leverage AI workflow automation to optimize ops, streamline CRMs, and scale revenue.",
    metaDescription:
      "Comprehensive 2026 guide on AI automation for Canadian businesses. Learn how companies in Toronto, Vancouver, and Calgary automate workflows, CRMs, and customer journeys.",
    keywords: [
      "AI automation Canada",
      "business automation Toronto",
      "AI workflow automation Vancouver",
      "CRM automation Calgary",
      "Canadian AI agency",
    ],
    publishedAt: "2026-07-24",
    readingTime: "9 min read",
    author: "Scalezix Canada Team",
    intro:
      "As Canadian enterprises and growing mid-market companies face tight labor markets, rising operational overhead, and increased competition across hubs like Toronto, Vancouver, and Calgary, operational efficiency has moved from a luxury to a baseline requirement. In 2026, AI automation provides Canadian businesses with the strategic leverage needed to scale revenue without expanding payroll linearly.",
    sections: [
      {
        heading: "Why Canadian companies are accelerating AI adoption in 2026",
        body: [
          "Canadian businesses operate in a unique environment characterized by strict data compliance standards (PIPEDA), high regional labor costs, and distributed hybrid workforces across provinces. From Ontario's financial services and B2B tech corridors to British Columbia's fast-moving digital economy, automated workflows reduce administrative overhead and accelerate speed-to-lead.",
          "Rather than replacing employees, leading Canadian teams are equipping their workforce with AI agents and automated workflows that eliminate manual data entry, ticket triage, and repetitive scheduling tasks.",
        ],
      },
      {
        heading: "Top high-impact AI automation workflows for Canadian operators",
        body: [
          "1. Inbound Lead Triage & Multi-channel Routing: Automatically capturing, qualifying, and assigning leads from ads, website forms, and emails into your CRM (HubSpot, Salesforce, Zoho) in under 60 seconds.",
          "2. Automated Client Onboarding & Verification: Removing manual paper-pushing and repetitive email follow-ups for Canadian professional services, real estate, and financial advisory firms.",
          "3. Operational Reporting & Cross-System Synchronization: Bridging disconnected tools (Slack, QuickBooks, CRMs, custom databases) so leadership gets real-time operational metrics without spreadsheet delays.",
        ],
      },
      {
        heading: "Navigating Canadian data privacy (PIPEDA & provincial regulations)",
        body: [
          "Deploying AI in Canada requires strict adherence to privacy legislation. Responsible AI automation ensures customer PII is encrypted, access control policies are strictly governed, and AI providers meet Canadian data handling expectations.",
          "At Scalezix, we build enterprise-grade security protocols directly into every workflow, ensuring complete data residency and auditability across all automated operations.",
        ],
      },
      {
        heading: "How to start your AI automation journey in Canada",
        body: [
          "Begin by auditing your operational bottlenecks. Focus on single high-volume, high-friction processes—such as sales follow-ups or customer inquiry triage—before expanding into full end-to-end multi-department automation.",
          "Working with a specialized AI engineering team ensures that your system architecture is scalable, well-integrated, and delivers measurable ROI within weeks.",
        ],
      },
    ],
    faqs: [
      {
        question: "How does AI automation benefit Canadian small and medium enterprises (SMEs)?",
        answer:
          "AI automation helps Canadian SMEs handle higher inquiry volumes, reduce manual data entry, cut customer response times, and scale operations without incurring large payroll increases.",
      },
      {
        question: "Are Scalezix AI automation solutions compliant with Canadian privacy laws (PIPEDA)?",
        answer:
          "Yes. Scalezix builds enterprise-grade automation workflows with strict permission structures, data encryption, and PIPEDA-compliant data handling practices.",
      },
      {
        question: "Which Canadian cities does Scalezix serve?",
        answer:
          "Scalezix provides AI automation, custom software, and AI agent solutions to businesses across Toronto, Vancouver, Calgary, Edmonton, Ottawa, Montreal, Mississauga, Brampton, Surrey, and Winnipeg.",
      },
    ],
  },
  {
    slug: "custom-ai-agents-vs-chatbots-canada",
    title: "Custom AI Agents vs. Basic Chatbots: What Canadian Executives Need to Know",
    category: "AI Systems & Tech",
    excerpt:
      "Why traditional chatbots fail Canadian customer expectations and how autonomous AI agents revolutionize sales, support, and operations.",
    metaDescription:
      "Compare custom AI agents vs traditional chatbots for Canadian enterprises. Understand the difference in reasoning, CRM integration, and operational execution.",
    keywords: [
      "custom AI agents Canada",
      "AI chatbots Toronto",
      "enterprise AI agents Vancouver",
      "automated lead qualification",
      "AI operational agents",
    ],
    publishedAt: "2026-07-24",
    readingTime: "8 min read",
    author: "Scalezix Editorial Team",
    intro:
      "Canadian consumers and B2B buyers have grown weary of generic, decision-tree chatbots that offer unhelpful canned responses. Forward-thinking executive teams in Toronto, Montreal, and Ottawa are replacing legacy widgets with autonomous, context-aware AI agents.",
    sections: [
      {
        heading: "The evolution from static chatbots to reasoning AI agents",
        body: [
          "Traditional chatbots follow rigid rules and static decision trees. When a user asks a complex question outside the pre-programmed script, the bot fails. In contrast, modern AI agents possess contextual reasoning capabilities—they can understand nuanced inquiries, query external databases, analyze buyer intent, and execute actions across connected business systems.",
          "Instead of sending links to FAQ pages, an AI agent acts as a digital team member capable of performing real tasks safely.",
        ],
      },
      {
        heading: "Key capabilities of custom AI agents for Canadian revenue teams",
        body: [
          "Autonomous Lead Qualification: AI agents conduct multi-turn conversations on websites or messaging channels, assess prospect budget and urgency, and log structured notes directly into your CRM.",
          "Multi-system Execution: Rather than just answering questions, an AI agent can check calendar availability, issue quotes, update ticket statuses, or query inventory systems in real time.",
        ],
      },
      {
        heading: "Deploying AI agents across Toronto, Vancouver, and Calgary tech hubs",
        body: [
          "Whether managing B2B tech funnels in Toronto's Bay Street corridor or supporting high-growth service firms in Vancouver, custom AI agents ensure your brand delivers 24/7 responsiveness without compromising on service quality or tone.",
        ],
      },
      {
        heading: "Building a hybrid AI agent + human handoff model",
        body: [
          "The most successful Canadian implementations maintain a seamless human escalation protocol. The AI agent handles 70-80% of routine qualification and support inquiries, immediately passing high-value or emotionally complex cases to human representatives with full interaction history.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the main difference between an AI agent and a regular chatbot?",
        answer:
          "A regular chatbot relies on fixed decision trees and static scripts, whereas an AI agent uses LLM reasoning to understand context, access tools, perform tasks, and integrate with CRMs.",
      },
      {
        question: "Can custom AI agents integrate with existing CRM tools like HubSpot or Salesforce?",
        answer:
          "Yes, Scalezix custom AI agents are built to integrate natively with CRMs, ERPs, ticketing tools, and messaging channels via APIs.",
      },
      {
        question: "Is human oversight possible with AI agents?",
        answer:
          "Absolutely. We design guardrails, escalation triggers, and human-in-the-loop workflows so human agents can step in whenever needed.",
      },
    ],
  },
  {
    slug: "custom-software-development-canada-cost-guide",
    title: "Custom Software Development & CRM Integration in Canada: 2026 Pricing & ROI Guide",
    category: "Software & Growth",
    excerpt:
      "A realistic breakdown of custom software development costs, CRM integration strategies, and tech stack choices for Canadian startups and growing businesses.",
    metaDescription:
      "Guide to custom software development costs, tech stack selection, and CRM integration in Canada. Budgeting advice for Toronto, Vancouver, and Calgary companies.",
    keywords: [
      "custom software development Canada",
      "CRM integration Toronto",
      "web application development Vancouver",
      "software development cost Canada",
      "FastAPI React Next.js Canada",
    ],
    publishedAt: "2026-07-24",
    readingTime: "10 min read",
    author: "Scalezix Engineering Team",
    intro:
      "Building custom web applications, internal tools, and CRM integration pipelines is one of the most effective investments a growing Canadian company can make. However, navigating software development costs, technical architecture, and partner selection requires clear pricing transparency and strategic planning.",
    sections: [
      {
        heading: "What drives custom software development costs in Canada?",
        body: [
          "Custom software pricing across Canadian markets varies based on scope complexity, UI/UX requirements, database architecture, third-party API integrations, and ongoing maintenance. Off-the-shelf software often incurs hidden licensing fees and forces businesses into rigid workflows, whereas custom builds deliver long-term operational ownership.",
        ],
      },
      {
        heading: "Modern tech stacks for scalable Canadian web apps (Next.js, FastAPI, AWS)",
        body: [
          "For high performance and future AI compatibility, modern Canadian software development leans heavily on Next.js/React for frontend interfaces, FastAPI/Python or Node.js for backend microservices, and AWS/Vercel for scalable cloud hosting.",
        ],
      },
      {
        heading: "The power of unified CRM & workflow integrations",
        body: [
          "Disjointed software tools create data silos and reporting delays. By integrating your custom portals, mobile apps, and marketing channels directly into CRMs like Scalezix CRM, HubSpot, or Salesforce, sales and operations teams gain 360-degree visibility over customer lifecycles.",
        ],
      },
      {
        heading: "Choosing the right software development partner for Canadian market success",
        body: [
          "Look for a partner that combines deep technical expertise with business outcome orientation. A great engineering team doesn't just write code—they audit your business model, eliminate unnecessary features, and build scalable infrastructure designed for growth.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does custom software development cost for Canadian businesses?",
        answer:
          "Costs range from $5,000 for focused workflow tools and MVP prototypes to $25,000+ for enterprise-grade SaaS platforms, custom CRMs, and complex AI-integrated portals.",
      },
      {
        question: "Why choose custom software over off-the-shelf SaaS products?",
        answer:
          "Custom software eliminates recurring per-seat licensing fees, adapts exactly to your business SOPs, and allows seamless integration with AI agents and proprietary data pipelines.",
      },
      {
        question: "How long does a typical software build take to launch?",
        answer:
          "A focused MVP or internal workflow tool typically launches in 4 to 8 weeks, followed by iterative feature rollouts.",
      },
    ],
  },
] as const;

export const faqGroups = {
  general: [
    "What is Scalezix?",
    "Where is Scalezix located?",
    "What industries do you serve?",
    "How do I get started?",
  ],
  automation: [
    "What is AI automation?",
    "How long does it take to deploy AI automation?",
    "How much does AI automation cost?",
    "Do I need technical knowledge to use AI automation?",
  ],
  software: [
    "What tech stack do you use?",
    "How long does a software project take?",
    "Do you provide post-launch support?",
  ],
  marketing: [
    "What digital marketing services do you offer?",
    "How long before I see SEO results?",
    "Do you run paid ads?",
  ],
  products: [
    "What is Scalezix CRM?",
    "What is WhatsApp AI?",
    "Is there a free trial?",
  ],
};
import type { ServiceIconKey } from "@/components/site/service-icon";
