import type { ServiceIconKey } from "@/components/site/service-icon";

export const canadaRootPath = "/ca";

export const canadaServiceSlugs = [
  "ai-automation",
  "ai-agents",
  "software-development",
  "crm-integrations",
  "digital-marketing",
  "ai-chatbots",
] as const;

export type CanadaServiceSlug = (typeof canadaServiceSlugs)[number];

export type CanadaFaq = {
  question: string;
  answer: string;
};

export type CanadaService = {
  slug: CanadaServiceSlug;
  name: string;
  icon: ServiceIconKey;
  short: string;
  category: string;
  overview: string;
  metaDescription: string;
  problemStatement: string;
  solutionAngle: string;
  audience: string[];
  deliverables: string[];
  outcomes: string[];
  process: string[];
  aeoQuestions: CanadaFaq[];
  proofPoints: string[];
  keywords: string[];
  relatedCaseStudySlug: string;
  relatedBlogSlugs: string[];
};

export const canadaCitySlugs = [
  "toronto",
  "vancouver",
  "calgary",
  "edmonton",
  "ottawa",
  "mississauga",
  "brampton",
  "surrey",
  "winnipeg",
  "montreal",
] as const;

export type CanadaCitySlug = (typeof canadaCitySlugs)[number];

export type CanadaCity = {
  slug: CanadaCitySlug;
  name: string;
  province: string;
  intro: string;
  marketFocus: string;
  regionalProofHook: string;
  industries: string[];
  nearbyAreas: string[];
  painPoints: string[];
  keywords: string[];
};

export type CanadaInternalLink = {
  label: string;
  href: string;
};

export type CanadaServiceCityPage = {
  city: CanadaCity;
  service: CanadaService;
  title: string;
  metaDescription: string;
  heroTitle: string;
  heroIntro: string;
  cityIntro: string;
  painPoints: string[];
  solutionAngle: string;
  outcomes: string[];
  idealFor: string[];
  deliverables: string[];
  process: string[];
  proofTitle: string;
  proofBody: string;
  faqs: CanadaFaq[];
  internalLinks: CanadaInternalLink[];
};

export const canadaServices: Record<CanadaServiceSlug, CanadaService> = {
  "ai-automation": {
    slug: "ai-automation",
    name: "AI Automation",
    icon: "workflow",
    short: "Operational automation systems that remove manual bottlenecks and keep work moving.",
    category: "Automation systems",
    overview:
      "Scalezix designs AI automation systems for businesses that want cleaner handoffs, faster response times, and less manual coordination across sales, service, and operations.",
    metaDescription:
      "Scalezix builds AI automation systems for businesses that need faster workflows, cleaner handoffs, and more reliable execution.",
    problemStatement:
      "Manual routing, fragmented approvals, and repetitive admin work slow revenue teams down long before headcount becomes the real problem.",
    solutionAngle:
      "We map your workflows, connect your tools, and deploy automation layers that move tasks, summaries, notifications, and decisions forward with less manual handling.",
    audience: [
      "Revenue teams with slow lead response",
      "Operations teams juggling disconnected tools",
      "Service businesses trying to standardize delivery",
      "Leaders who need cleaner reporting without spreadsheet chasing",
    ],
    deliverables: [
      "Workflow audit and automation roadmap",
      "Lead routing and qualification logic",
      "Approval chains, alerts, and status automations",
      "CRM, inbox, and internal tool integrations",
    ],
    outcomes: [
      "Faster response and routing",
      "Less manual coordination",
      "Higher process consistency",
      "Better visibility across teams",
    ],
    process: [
      "Audit the current workflow and identify the highest-friction handoffs.",
      "Design the automation logic, exceptions, and system integrations.",
      "Deploy, test, and tune the workflow against real operating conditions.",
    ],
    aeoQuestions: [
      {
        question: "What is AI automation for business?",
        answer:
          "AI automation combines workflows, prompts, logic, and integrations so repetitive business tasks can move faster with less manual work.",
      },
      {
        question: "How long does AI automation implementation take?",
        answer:
          "A focused workflow can usually be scoped and launched in a few weeks, while broader multi-team systems take longer based on integrations and approvals.",
      },
      {
        question: "Which teams benefit most from AI automation?",
        answer:
          "Sales, operations, support, and reporting-heavy teams usually benefit most because they handle frequent, repeatable work with clear success metrics.",
      },
    ],
    proofPoints: [
      "Designed for multi-step workflows, not single-step demos",
      "Built around revenue operations, service delivery, and cross-tool execution",
      "Strong fit for businesses growing beyond manual coordination",
    ],
    keywords: ["AI automation agency Canada", "business automation services", "workflow automation"],
    relatedCaseStudySlug: "real-estate-lead-routing",
    relatedBlogSlugs: ["ai-automation-guide-canadian-businesses-2026", "top-business-processes-to-automate"],
  },
  "ai-agents": {
    slug: "ai-agents",
    name: "AI Agents",
    icon: "bot",
    short: "Reasoning systems that qualify, summarize, decide, and act across your tools.",
    category: "AI systems",
    overview:
      "Scalezix builds custom AI agents for businesses that need more than scripted automation. We design agents that reason over business context, use tools safely, and support teams with execution.",
    metaDescription:
      "Scalezix builds custom AI agents that reason over business context, use tools safely, and support execution across teams.",
    problemStatement:
      "Teams outgrow simple automations when work requires judgment, context, summarization, or multi-step decision making.",
    solutionAngle:
      "We define the agent workflow, tool access, prompts, guardrails, and escalation logic so the system behaves like a practical operator instead of a novelty bot.",
    audience: [
      "Teams handling complex lead qualification",
      "Businesses needing internal copilots",
      "Operations teams with multi-step approvals",
      "Companies that want AI support without losing control",
    ],
    deliverables: [
      "Custom agent design and workflow mapping",
      "Prompting, tool definitions, and guardrails",
      "CRM, support, and internal system integrations",
      "Testing, observability, and iteration support",
    ],
    outcomes: [
      "Better decision support",
      "Faster multi-step execution",
      "Reduced context switching",
      "More scalable internal operations",
    ],
    process: [
      "Define where an agent adds value versus where deterministic automation is enough.",
      "Design prompts, tools, approvals, and escalation paths around your business model.",
      "Deploy in monitored workflows and optimize based on actual usage.",
    ],
    aeoQuestions: [
      {
        question: "What is the difference between an AI agent and automation?",
        answer:
          "Automation follows fixed logic, while an AI agent can interpret input, reason through context, and choose between actions within defined guardrails.",
      },
      {
        question: "Can AI agents connect to CRM and support tools?",
        answer:
          "Yes. AI agents are most useful when connected to the systems where work already happens, such as CRMs, inboxes, dashboards, and internal tools.",
      },
      {
        question: "When should a business choose AI agents?",
        answer:
          "AI agents make sense when workflows involve messy input, summarization, prioritization, or multi-step decision making that static automations cannot handle well.",
      },
    ],
    proofPoints: [
      "Designed for operational usefulness, not just conversation",
      "Structured around controls, escalation, and measurable execution",
      "Best for businesses moving toward AI-assisted decision workflows",
    ],
    keywords: ["AI agents Canada", "custom AI agents", "AI systems partner"],
    relatedCaseStudySlug: "service-business-reporting",
    relatedBlogSlugs: ["custom-ai-agents-vs-chatbots-canada", "ai-chatbots-vs-human-support"],
  },
  "software-development": {
    slug: "software-development",
    name: "Software Development",
    icon: "code",
    short: "Custom product and internal software built around operations, growth, and AI readiness.",
    category: "Software delivery",
    overview:
      "Scalezix builds modern software for businesses that need more than a brochure site. We deliver portals, internal tools, CRMs, customer workflows, and product systems designed to support long-term growth.",
    metaDescription:
      "Scalezix builds custom software, portals, CRMs, and internal tools for businesses that need scalable digital systems.",
    problemStatement:
      "Many businesses rely on disconnected point solutions when what they really need is software shaped around their process, data, and operating model.",
    solutionAngle:
      "We combine product thinking, engineering, integrations, and AI-readiness so your system becomes a working growth asset instead of another silo.",
    audience: [
      "Companies replacing spreadsheets with software",
      "Businesses needing customer or staff portals",
      "Teams building internal dashboards and CRMs",
      "Founders validating productized service or SaaS ideas",
    ],
    deliverables: [
      "Discovery, architecture, and technical scoping",
      "Web apps, dashboards, portals, and CRMs",
      "APIs, integrations, and cloud deployment pipelines",
      "Post-launch iteration and support planning",
    ],
    outcomes: [
      "Cleaner operational workflows",
      "Better data visibility",
      "Improved digital customer experience",
      "A stronger platform for future automation",
    ],
    process: [
      "Clarify the workflow, users, and commercial goals behind the build.",
      "Design and develop the product architecture, integrations, and interfaces.",
      "Launch in phases with QA, monitoring, and iteration built into delivery.",
    ],
    aeoQuestions: [
      {
        question: "When does a business need custom software development?",
        answer:
          "Custom software makes sense when generic tools create friction, your workflow is commercially important, or multiple teams need one connected system.",
      },
      {
        question: "What affects software development timelines?",
        answer:
          "Scope clarity, user roles, integrations, workflow complexity, and post-launch requirements all affect delivery timelines.",
      },
      {
        question: "Can custom software support automation later?",
        answer:
          "Yes. Good software architecture makes future automation, reporting, and AI integrations much easier to implement safely.",
      },
    ],
    proofPoints: [
      "Built for operational leverage, not just visual polish",
      "Useful for internal systems, productized services, and customer-facing experiences",
      "Strong fit when automation and software need to work together",
    ],
    keywords: ["software development Canada", "custom software company", "web app development"],
    relatedCaseStudySlug: "service-business-reporting",
    relatedBlogSlugs: ["custom-software-development-canada-cost-guide", "top-business-processes-to-automate"],
  },
  "crm-integrations": {
    slug: "crm-integrations",
    name: "CRM & Integrations",
    icon: "network",
    short: "Connect your CRM, forms, inboxes, and ops stack into one reliable execution layer.",
    category: "Revenue operations",
    overview:
      "Scalezix helps businesses unify CRM, marketing, support, and operations systems so lead handling, follow-up, reporting, and handoffs become more reliable.",
    metaDescription:
      "Scalezix connects CRMs, forms, inboxes, and operations systems into one cleaner revenue execution layer.",
    problemStatement:
      "Disconnected sales and service tools create missed follow-ups, messy data, slow reporting, and low confidence in the pipeline.",
    solutionAngle:
      "We design integration layers and CRM workflows that keep lead data, activity, and team actions synchronized across the customer journey.",
    audience: [
      "Sales teams with fragmented pipeline visibility",
      "Businesses using forms, ads, inboxes, and CRMs separately",
      "Operators trying to reduce duplicate entry and handoff errors",
      "Leaders who need more trustworthy reporting",
    ],
    deliverables: [
      "CRM workflow mapping and cleanup",
      "Lead source, form, and inbox integrations",
      "Assignment logic, follow-up triggers, and reporting sync",
      "Automation support across customer lifecycle stages",
    ],
    outcomes: [
      "Cleaner pipeline visibility",
      "Faster lead follow-up",
      "Less manual duplication",
      "More dependable reporting",
    ],
    process: [
      "Audit how data enters, moves through, and leaks out of the current system.",
      "Design the integration and ownership logic across teams and tools.",
      "Deploy the workflows, test failure cases, and improve operator visibility.",
    ],
    aeoQuestions: [
      {
        question: "Why are CRM integrations important for growing businesses?",
        answer:
          "CRM integrations keep data, follow-up, and reporting aligned across marketing, sales, and service so teams stop working from different versions of the truth.",
      },
      {
        question: "Can CRM workflows include WhatsApp and form leads?",
        answer:
          "Yes. High-performing CRM setups usually include forms, ads, inboxes, WhatsApp, scheduling tools, and reporting layers.",
      },
      {
        question: "What results come from CRM integration work?",
        answer:
          "Businesses usually gain cleaner pipeline data, better response speed, more consistent follow-up, and stronger reporting confidence.",
      },
    ],
    proofPoints: [
      "Designed for cross-tool visibility and follow-up discipline",
      "Useful when revenue, service, and support data are spread across channels",
      "Often the foundation for better automation and reporting",
    ],
    keywords: ["CRM integrations Canada", "CRM automation", "revenue operations setup"],
    relatedCaseStudySlug: "d2c-chatbot-crm-growth",
    relatedBlogSlugs: ["automate-whatsapp-for-business-india", "top-business-processes-to-automate"],
  },
  "digital-marketing": {
    slug: "digital-marketing",
    name: "Digital Marketing",
    icon: "megaphone",
    short: "SEO, AEO, paid media, and content systems tied to conversion and revenue.",
    category: "Growth systems",
    overview:
      "Scalezix approaches digital marketing as a growth system, not a channel checklist. We align SEO, AEO, paid media, landing pages, and reporting around commercial intent.",
    metaDescription:
      "Scalezix builds SEO, AEO, paid media, and content systems designed to improve lead quality, conversion, and reporting clarity.",
    problemStatement:
      "Many growth programs generate activity without giving leadership enough clarity on what is compounding, converting, or leaking.",
    solutionAngle:
      "We connect search visibility, answer-engine readiness, paid acquisition, funnel messaging, and reporting so your marketing stack supports revenue instead of just traffic.",
    audience: [
      "Service businesses building higher-intent inbound",
      "Operators who need better lead quality from search",
      "Teams coordinating SEO, paid media, and conversion work",
      "Brands looking for measurable marketing systems",
    ],
    deliverables: [
      "SEO and AEO strategy with landing page planning",
      "Paid media support and funnel messaging",
      "Content systems and buyer-intent topic mapping",
      "Reporting, CRO support, and performance reviews",
    ],
    outcomes: [
      "Higher-intent traffic",
      "Clearer conversion pathways",
      "Stronger answer-engine visibility",
      "More measurable growth reporting",
    ],
    process: [
      "Map search intent, audience problems, and current funnel gaps.",
      "Build landing pages, content systems, and reporting around commercial queries.",
      "Iterate on visibility, conversion, and message-market fit over time.",
    ],
    aeoQuestions: [
      {
        question: "What is the difference between SEO and AEO?",
        answer:
          "SEO focuses on ranking in search results, while AEO helps your content become easier for AI systems and answer engines to understand, extract, and cite.",
      },
      {
        question: "When should a business invest in SEO-first growth?",
        answer:
          "SEO-first is strongest when buyers research before converting, local or service intent matters, and the business wants compounding inbound over time.",
      },
      {
        question: "How do landing pages support marketing performance?",
        answer:
          "Landing pages connect search intent to clear messaging, proof, and conversion paths so traffic turns into qualified conversations more reliably.",
      },
    ],
    proofPoints: [
      "Blends SEO, AEO, landing pages, and conversion thinking",
      "Useful for businesses that want commercial search visibility, not vanity traffic",
      "Best when paired with strong offers and clear sales handoff",
    ],
    keywords: ["digital marketing Canada", "SEO agency Canada", "AEO services"],
    relatedCaseStudySlug: "d2c-chatbot-crm-growth",
    relatedBlogSlugs: ["what-is-ai-automation-2026", "ai-chatbots-vs-human-support"],
  },
  "ai-chatbots": {
    slug: "ai-chatbots",
    name: "AI Chatbots",
    icon: "message",
    short: "Conversational systems tied to qualification, support, CRM updates, and handoff logic.",
    category: "Conversational systems",
    overview:
      "Scalezix builds AI chatbots as part of a broader AI system. The goal is not a basic website bot. The goal is a conversational layer that helps qualify, support, route, and hand off work cleanly.",
    metaDescription:
      "Scalezix builds AI chatbot systems for support, lead qualification, CRM-connected follow-up, and human handoff.",
    problemStatement:
      "Basic chatbots create noise when they answer without context, fail to hand off properly, or stay disconnected from the rest of the business workflow.",
    solutionAngle:
      "We build chatbot systems around qualification logic, support triage, CRM syncing, human escalation, and measurable business outcomes so the chatbot supports the operation instead of sitting beside it.",
    audience: [
      "Teams handling repetitive support requests",
      "Businesses qualifying inbound leads at volume",
      "Operators that need 24/7 response without low-quality handoffs",
      "Companies wanting conversational systems connected to revenue operations",
    ],
    deliverables: [
      "Website and WhatsApp conversational flows",
      "Qualification, triage, and handoff logic",
      "CRM and workflow integrations",
      "Conversation design, guardrails, and reporting",
    ],
    outcomes: [
      "Faster first response",
      "Better lead qualification",
      "More reliable support routing",
      "Lower manual handling for repetitive conversations",
    ],
    process: [
      "Define the conversations that should be automated and those that need human escalation.",
      "Design intents, flows, qualification questions, and backend integrations.",
      "Launch with reporting and optimize based on conversation quality and outcomes.",
    ],
    aeoQuestions: [
      {
        question: "What makes an AI chatbot effective for business?",
        answer:
          "An effective AI chatbot is connected to the business workflow, qualifies intent clearly, hands off properly, and improves response speed without hurting customer experience.",
      },
      {
        question: "Can AI chatbots do more than answer FAQs?",
        answer:
          "Yes. Strong chatbot systems can qualify leads, route issues, update CRMs, trigger follow-up, and prepare context for human teams.",
      },
      {
        question: "Should chatbots replace human teams?",
        answer:
          "Usually no. The best systems use chatbots for first-line handling and structured handoff, while humans manage complex, sensitive, or high-value conversations.",
      },
    ],
    proofPoints: [
      "Positioned as a workflow layer, not a novelty widget",
      "Connected to qualification, CRM, and escalation logic",
      "Best for businesses that care about speed and handoff quality",
    ],
    keywords: ["AI chatbot agency Canada", "WhatsApp chatbot", "lead qualification chatbot"],
    relatedCaseStudySlug: "d2c-chatbot-crm-growth",
    relatedBlogSlugs: ["automate-whatsapp-for-business-india", "ai-chatbots-vs-human-support"],
  },
};

export const canadaCities: Record<CanadaCitySlug, CanadaCity> = {
  toronto: {
    slug: "toronto",
    name: "Toronto",
    province: "Ontario",
    intro:
      "Toronto teams usually need stronger lead handling, cleaner CRM visibility, and faster cross-team execution as growth creates operational complexity.",
    marketFocus:
      "high-volume service businesses, agencies, SaaS teams, and operators balancing growth with process discipline",
    regionalProofHook:
      "Toronto buyers tend to compare multiple providers before booking, which makes response speed, follow-up structure, and trust signals especially important.",
    industries: ["Professional services", "Real estate", "Healthcare", "Home services"],
    nearbyAreas: ["North York", "Scarborough", "Etobicoke"],
    painPoints: [
      "Lead response slows down as teams and channels scale.",
      "Reporting lives in too many tools for leadership to trust quickly.",
      "Manual follow-up creates avoidable leakage in the funnel.",
    ],
    keywords: ["Toronto AI automation", "Toronto SEO agency", "Toronto CRM automation"],
  },
  vancouver: {
    slug: "vancouver",
    name: "Vancouver",
    province: "British Columbia",
    intro:
      "Vancouver businesses often need systems that keep customer experience polished while removing friction from internal coordination and follow-up.",
    marketFocus:
      "service firms, local operators, digital-first brands, and teams where premium positioning needs premium execution",
    regionalProofHook:
      "Vancouver markets reward smooth digital experience, fast support, and clear handoff between marketing, sales, and operations.",
    industries: ["Professional services", "Hospitality", "Real estate", "Health and wellness"],
    nearbyAreas: ["Burnaby", "Richmond", "Coquitlam"],
    painPoints: [
      "Teams want speed without making the customer experience feel robotic.",
      "Growth channels create conversations that are hard to track across tools.",
      "Internal handoffs stay too dependent on people remembering next steps.",
    ],
    keywords: ["Vancouver AI agency", "Vancouver software development", "Vancouver marketing systems"],
  },
  calgary: {
    slug: "calgary",
    name: "Calgary",
    province: "Alberta",
    intro:
      "Calgary businesses often need practical systems that improve throughput, visibility, and commercial discipline without overcomplicating the stack.",
    marketFocus:
      "professional services, field services, growth-stage businesses, and operations-focused leadership teams",
    regionalProofHook:
      "Calgary operators usually care about efficiency, measurable ROI, and systems that can support growth without ballooning headcount.",
    industries: ["Field services", "Professional services", "Real estate", "Construction-adjacent teams"],
    nearbyAreas: ["Airdrie", "Chestermere", "Okotoks"],
    painPoints: [
      "Operational knowledge sits in people instead of systems.",
      "Revenue teams need stronger follow-up discipline.",
      "Leaders want clearer reporting before adding more staff or spend.",
    ],
    keywords: ["Calgary AI automation", "Calgary CRM integration", "Calgary lead systems"],
  },
  edmonton: {
    slug: "edmonton",
    name: "Edmonton",
    province: "Alberta",
    intro:
      "Edmonton teams often benefit from systems that reduce repetitive admin work, improve response speed, and make service delivery easier to manage.",
    marketFocus:
      "service businesses, healthcare-adjacent operators, local growth companies, and teams modernizing their internal process stack",
    regionalProofHook:
      "Edmonton businesses usually win when operational reliability and lead handling improve at the same time.",
    industries: ["Healthcare", "Local services", "Professional services", "Education"],
    nearbyAreas: ["St. Albert", "Sherwood Park", "Leduc"],
    painPoints: [
      "Too much team time goes into coordination instead of delivery.",
      "Customer inquiries and support requests are handled inconsistently.",
      "Reporting is delayed because data lives across disconnected systems.",
    ],
    keywords: ["Edmonton AI systems", "Edmonton automation", "Edmonton digital marketing"],
  },
  ottawa: {
    slug: "ottawa",
    name: "Ottawa",
    province: "Ontario",
    intro:
      "Ottawa organizations often need smarter operational systems that preserve trust, clarity, and compliance while making teams more efficient.",
    marketFocus:
      "B2B services, associations, healthcare, and teams where process quality matters as much as speed",
    regionalProofHook:
      "Ottawa buyers usually value clarity, consistency, and dependable execution across the full customer journey.",
    industries: ["B2B services", "Healthcare", "Associations", "Education"],
    nearbyAreas: ["Kanata", "Nepean", "Gatineau"],
    painPoints: [
      "Workflows slow down because every exception gets handled manually.",
      "Customer communication needs to stay professional and consistent.",
      "Leaders need better visibility without adding reporting burden.",
    ],
    keywords: ["Ottawa AI agency", "Ottawa software company", "Ottawa CRM systems"],
  },
  mississauga: {
    slug: "mississauga",
    name: "Mississauga",
    province: "Ontario",
    intro:
      "Mississauga teams often need cleaner systems for managing inbound demand, multi-location communication, and sales follow-up at scale.",
    marketFocus:
      "service operators, logistics-adjacent businesses, real estate teams, and companies serving the broader GTA",
    regionalProofHook:
      "Mississauga businesses often need systems that handle volume cleanly while keeping reporting and ownership straightforward.",
    industries: ["Logistics-adjacent services", "Real estate", "Professional services", "Home services"],
    nearbyAreas: ["Brampton", "Oakville", "Etobicoke"],
    painPoints: [
      "Lead volume increases without matching process maturity.",
      "Teams lose visibility when channels, reps, and follow-up multiply.",
      "CRM usage becomes inconsistent across the funnel.",
    ],
    keywords: ["Mississauga AI automation", "Mississauga CRM setup", "Mississauga SEO"],
  },
  brampton: {
    slug: "brampton",
    name: "Brampton",
    province: "Ontario",
    intro:
      "Brampton businesses often need practical automation and marketing systems that help smaller teams operate with more speed and consistency.",
    marketFocus:
      "growing local businesses, service operators, healthcare, and owner-led teams scaling beyond manual follow-up",
    regionalProofHook:
      "Brampton markets reward businesses that respond quickly, stay organized, and make it easy for prospects to keep moving.",
    industries: ["Healthcare", "Local services", "Home services", "Professional services"],
    nearbyAreas: ["Mississauga", "Vaughan", "Etobicoke"],
    painPoints: [
      "Owner-led teams become the bottleneck as volume rises.",
      "Sales follow-up and service coordination depend too much on memory.",
      "Marketing activity is hard to tie back to qualified opportunities.",
    ],
    keywords: ["Brampton AI automation", "Brampton software development", "Brampton lead generation systems"],
  },
  surrey: {
    slug: "surrey",
    name: "Surrey",
    province: "British Columbia",
    intro:
      "Surrey businesses often need systems that help them keep growth organized across inbound demand, field coordination, and customer communication.",
    marketFocus:
      "growing local operators, healthcare, trades-adjacent services, and teams expanding in the Fraser Valley market",
    regionalProofHook:
      "Surrey teams often win by tightening follow-up, reducing manual handoff gaps, and making customer communication easier to manage.",
    industries: ["Healthcare", "Local services", "Trades-adjacent businesses", "Professional services"],
    nearbyAreas: ["Langley", "Delta", "White Rock"],
    painPoints: [
      "Fast growth creates coordination gaps between teams and channels.",
      "Inquiry handling becomes uneven across staff and shifts.",
      "Reporting stays reactive instead of helping decisions happen faster.",
    ],
    keywords: ["Surrey AI systems", "Surrey marketing automation", "Surrey CRM integration"],
  },
  winnipeg: {
    slug: "winnipeg",
    name: "Winnipeg",
    province: "Manitoba",
    intro:
      "Winnipeg businesses often need durable systems that reduce repetitive work, improve visibility, and help lean teams do more without adding complexity.",
    marketFocus:
      "service businesses, healthcare, local operators, and practical teams focused on stable growth",
    regionalProofHook:
      "Winnipeg teams usually value systems that are reliable, measurable, and easy for staff to adopt in day-to-day operations.",
    industries: ["Healthcare", "Professional services", "Local services", "Education"],
    nearbyAreas: ["St. James", "St. Vital", "East Kildonan"],
    painPoints: [
      "Manual work quietly absorbs too much operational time.",
      "Teams need better systems without a heavy internal tech function.",
      "Customer communication and reporting feel more manual than they should.",
    ],
    keywords: ["Winnipeg AI automation", "Winnipeg CRM services", "Winnipeg software company"],
  },
  montreal: {
    slug: "montreal",
    name: "Montreal",
    province: "Quebec",
    intro:
      "Montreal businesses often need strong digital systems that support a sophisticated buyer journey, multilingual expectations, and operational clarity.",
    marketFocus:
      "professional services, digital businesses, healthcare, and teams balancing growth, quality, and process maturity",
    regionalProofHook:
      "In Montreal, buyer experience and process quality both matter, so systems need to improve speed without making the brand feel generic.",
    industries: ["Professional services", "Healthcare", "Technology", "Education"],
    nearbyAreas: ["Laval", "Longueuil", "West Island"],
    painPoints: [
      "Customer journeys involve more touchpoints and more expectations.",
      "Teams need cleaner internal systems to support higher-quality delivery.",
      "Operational visibility becomes harder as workflows spread across tools.",
    ],
    keywords: ["Montreal AI automation", "Montreal software development", "Montreal SEO services"],
  },
};

export function getCanadaServicesList() {
  return canadaServiceSlugs.map((slug) => canadaServices[slug]);
}

export function getCanadaCitiesList() {
  return canadaCitySlugs.map((slug) => canadaCities[slug]);
}

export function getCanadaService(slug: string) {
  if (!isCanadaServiceSlug(slug)) {
    return null;
  }

  return canadaServices[slug];
}

export function getCanadaCity(slug: string) {
  if (!isCanadaCitySlug(slug)) {
    return null;
  }

  return canadaCities[slug];
}

export function isCanadaServiceSlug(slug: string): slug is CanadaServiceSlug {
  return canadaServiceSlugs.includes(slug as CanadaServiceSlug);
}

export function isCanadaCitySlug(slug: string): slug is CanadaCitySlug {
  return canadaCitySlugs.includes(slug as CanadaCitySlug);
}

export function buildCanadaCityPath(citySlug: CanadaCitySlug) {
  return `${canadaRootPath}/${citySlug}`;
}

export function buildCanadaServicePath(citySlug: CanadaCitySlug, serviceSlug: CanadaServiceSlug) {
  return `${buildCanadaCityPath(citySlug)}/${serviceSlug}`;
}

function serviceCityFaqs(city: CanadaCity, service: CanadaService): CanadaFaq[] {
  return [
    {
      question: `What does ${service.name.toLowerCase()} help with for ${city.name} businesses?`,
      answer: `${service.name} helps ${city.name} businesses reduce friction across lead handling, customer communication, internal coordination, and reporting. The exact workflow depends on the service, but the goal is always stronger execution and clearer commercial outcomes.`,
    },
    {
      question: `How long does ${service.name.toLowerCase()} typically take in ${city.name}?`,
      answer: `Most ${city.name} projects start with discovery and prioritization. A focused first workflow or landing page system can move quickly, while broader multi-team implementations take longer depending on scope, integrations, and approvals.`,
    },
    {
      question: `Is this a fit for small and mid-sized teams in ${city.name}?`,
      answer: `Yes. Scalezix is a strong fit for ${city.name} teams that need more leverage from a lean team, especially when manual follow-up, repetitive work, or disconnected tools are slowing growth.`,
    },
    {
      question: `How is Scalezix different from a basic chatbot or generic agency in ${city.name}?`,
      answer: `Scalezix focuses on AI systems, automation, CRM-connected execution, and measurable business workflows. Chatbots can be part of the stack, but they are never the whole strategy.`,
    },
  ];
}

function buildInternalLinks(city: CanadaCity, service: CanadaService): CanadaInternalLink[] {
  const otherServices = canadaServiceSlugs
    .filter((slug) => slug !== service.slug)
    .slice(0, 2)
    .map((slug) => ({
      label: `${canadaServices[slug].name} in ${city.name}`,
      href: buildCanadaServicePath(city.slug, slug),
    }));

  return [
    {
      label: `${city.name} AI services hub`,
      href: buildCanadaCityPath(city.slug),
    },
    {
      label: `${service.name} overview`,
      href: `/services/${service.slug}`,
    },
    ...otherServices,
  ];
}

export function getCanadaServiceCityPage(
  citySlug: CanadaCitySlug,
  serviceSlug: CanadaServiceSlug,
): CanadaServiceCityPage {
  const city = canadaCities[citySlug];
  const service = canadaServices[serviceSlug];

  return {
    city,
    service,
    title: `${service.name} in ${city.name}, ${city.province} | Scalezix`,
    metaDescription: `${service.name} in ${city.name} for businesses that need ${service.outcomes[0].toLowerCase()}, ${service.outcomes[1].toLowerCase()}, and stronger execution across ${city.marketFocus}.`,
    heroTitle: `${service.name} in ${city.name} for teams that need stronger execution`,
    heroIntro: `${city.intro} Scalezix delivers ${service.name.toLowerCase()} systems that help ${city.marketFocus} move faster, stay organized, and turn more demand into dependable outcomes.`,
    cityIntro: `${city.regionalProofHook} Our approach combines ${service.category.toLowerCase()}, CRM-aware execution, and pragmatic rollout so teams in ${city.name} can improve how work moves without overcomplicating adoption.`,
    painPoints: [...city.painPoints],
    solutionAngle: service.solutionAngle,
    outcomes: [...service.outcomes],
    idealFor: [
      `${city.name} businesses in ${city.industries.slice(0, 2).join(" and ").toLowerCase()}`,
      ...service.audience.slice(0, 3),
    ],
    deliverables: [...service.deliverables],
    process: [...service.process],
    proofTitle: `${service.name} built around measurable operating gains`,
    proofBody: `Scalezix approaches ${service.name.toLowerCase()} as part of a broader business system. That means tighter follow-up, cleaner reporting, stronger handoffs, and delivery choices shaped around how ${city.name} teams actually work.`,
    faqs: serviceCityFaqs(city, service),
    internalLinks: buildInternalLinks(city, service),
  };
}

export function getCanadaCityServicePages(citySlug: CanadaCitySlug) {
  return canadaServiceSlugs.map((serviceSlug) => getCanadaServiceCityPage(citySlug, serviceSlug));
}

export function getCanadaServiceCityPages(serviceSlug: CanadaServiceSlug) {
  return canadaCitySlugs.map((citySlug) => getCanadaServiceCityPage(citySlug, serviceSlug));
}

export const canadaServiceCityPages = canadaCitySlugs.flatMap((citySlug) =>
  canadaServiceSlugs.map((serviceSlug) => getCanadaServiceCityPage(citySlug, serviceSlug)),
);
