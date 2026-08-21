import seoPagesData from "@/content/seo-location-pages.json";
import {
  canadaCities,
  CanadaCity,
  CanadaServiceCityPage,
  CanadaFaq,
  CanadaInternalLink,
  CanadaService,
} from "@/content/canada";

export type SeoLocationPageRaw = {
  Category: string;
  Service: string;
  City: string;
  "Page URL / Slug": string;
  "Meta Title": string;
  "Meta Description": string;
  H1: string;
  "Focus Keyword": string;
  "Secondary Keywords": string;
  "OG Title": string;
  "Image Alt Text": string;
  "Target Word Count": number;
  Priority: string;
  Status: string;
};

export type SeoCityData = {
  name: string;
  slug: string;
  province: string;
  intro: string;
  marketFocus: string;
  regionalProofHook: string;
  industries: string[];
  nearbyAreas: string[];
  painPoints: string[];
  keywords: string[];
};

const seoCitiesData: Record<string, SeoCityData> = {
  mississauga: {
    name: "Mississauga",
    slug: "mississauga",
    province: "Ontario",
    intro: "Mississauga teams often need cleaner systems for managing inbound demand, multi-location communication, and sales follow-up at scale.",
    marketFocus: "service operators, logistics-adjacent businesses, real estate teams, and companies serving the broader GTA",
    regionalProofHook: "Mississauga businesses often need systems that handle volume cleanly while keeping reporting and ownership straightforward.",
    industries: ["Logistics-adjacent services", "Real estate", "Professional services", "Home services"],
    nearbyAreas: ["Brampton", "Oakville", "Etobicoke"],
    painPoints: [
      "Lead volume increases without matching process maturity.",
      "Teams lose visibility when channels, reps, and follow-up multiply.",
      "CRM usage becomes inconsistent across the funnel."
    ],
    keywords: ["Mississauga AI automation", "Mississauga CRM setup", "Mississauga SEO"]
  },
  oakville: {
    name: "Oakville",
    slug: "oakville",
    province: "Ontario",
    intro: "Oakville teams usually need stronger lead handling, cleaner CRM visibility, and faster cross-team execution as growth creates operational complexity.",
    marketFocus: "professional services, local businesses, premium brands, and corporate offices in Halton region",
    regionalProofHook: "Oakville buyers reward premium service, quick response times, and consistent follow-up across all communication channels.",
    industries: ["Professional services", "Finance", "Healthcare", "Home services"],
    nearbyAreas: ["Mississauga", "Burlington", "Milton"],
    painPoints: [
      "Manual coordination and administration eat up valuable client-facing hours.",
      "Fragmented CRM data slows down sales follow-up and reporting.",
      "Lead response times fall short during high-inquiry periods."
    ],
    keywords: ["Oakville AI automation", "Oakville CRM systems", "Oakville business software"]
  },
  brampton: {
    name: "Brampton",
    slug: "brampton",
    province: "Ontario",
    intro: "Brampton businesses often need practical automation and marketing systems that help smaller teams operate with more speed and consistency.",
    marketFocus: "growing local businesses, service operators, healthcare, and owner-led teams scaling beyond manual follow-up",
    regionalProofHook: "Brampton markets reward businesses that respond quickly, stay organized, and make it easy for prospects to keep moving.",
    industries: ["Healthcare", "Local services", "Home services", "Professional services"],
    nearbyAreas: ["Mississauga", "Vaughan", "Etobicoke"],
    painPoints: [
      "Owner-led teams become the bottleneck as volume rises.",
      "Sales follow-up and service coordination depend too much on memory.",
      "Marketing activity is hard to tie back to qualified opportunities."
    ],
    keywords: ["Brampton AI automation", "Brampton software development", "Brampton lead generation systems"]
  },
  etobicoke: {
    name: "Etobicoke",
    slug: "etobicoke",
    province: "Ontario",
    intro: "Etobicoke businesses often need systems that keep customer experience polished while removing friction from internal coordination and follow-up.",
    marketFocus: "service firms, local operators, and growth-stage teams looking to optimize operations within the GTA",
    regionalProofHook: "Etobicoke businesses gain a strong edge when customer inquiry responses and internal handoffs are handled with automated speed.",
    industries: ["Professional services", "Logistics", "Real estate", "Retail-adjacent services"],
    nearbyAreas: ["Mississauga", "Toronto", "Vaughan"],
    painPoints: [
      "Customer follow-up suffers as team members switch between multiple tools.",
      "Data handoffs between sales and delivery teams are inconsistent.",
      "Reporting lacks real-time accuracy, making strategic decisions harder."
    ],
    keywords: ["Etobicoke AI agency", "Etobicoke CRM automation", "Etobicoke custom software"]
  },
  milton: {
    name: "Milton",
    slug: "milton",
    province: "Ontario",
    intro: "Milton businesses often need practical systems that improve throughput, visibility, and commercial discipline without overcomplicating the stack.",
    marketFocus: "field services, professional services, and local growth companies scaling their operations in the Halton region",
    regionalProofHook: "Milton operators win by optimizing team schedules, improving response speed, and reducing manual spreadsheet tasks.",
    industries: ["Field services", "Construction-adjacent", "Professional services", "Logistics"],
    nearbyAreas: ["Oakville", "Burlington", "Mississauga"],
    painPoints: [
      "Operational processes are too dependent on individual memory instead of systems.",
      "Managing scheduling and client communications is highly manual.",
      "It is difficult to generate real-time performance reports."
    ],
    keywords: ["Milton AI systems", "Milton workflow automation", "Milton business tools"]
  },
  ontario: {
    name: "Ontario",
    slug: "ontario",
    province: "Ontario",
    intro: "Ontario businesses benefit from province-wide scalable AI systems, workflow automation, and custom software that supports long-term growth.",
    marketFocus: "growing mid-market companies, local brands, and multi-location service operators across Ontario",
    regionalProofHook: "Ontario markets reward brands that offer a smooth, fast, and professional digital experience from click to delivery.",
    industries: ["Professional services", "Logistics and distribution", "Healthcare", "Real estate"],
    nearbyAreas: ["Toronto", "Mississauga", "Hamilton", "Ottawa"],
    painPoints: [
      "Siloed communication across different city branches slows down work.",
      "Hiring and training costs rise while admin tasks remain repetitive.",
      "Lead routing and response lack consistency across regional sales teams."
    ],
    keywords: ["Ontario AI automation", "Ontario SEO services", "Ontario custom software"]
  },
  ottawa: {
    name: "Ottawa",
    slug: "ottawa",
    province: "Ontario",
    intro: "Ottawa organizations often need smarter operational systems that preserve trust, clarity, and compliance while making teams more efficient.",
    marketFocus: "B2B services, associations, healthcare, and teams where process quality matters as much as speed",
    regionalProofHook: "Ottawa buyers usually value clarity, consistency, and dependable execution across the full customer journey.",
    industries: ["B2B services", "Healthcare", "Associations", "Education"],
    nearbyAreas: ["Kanata", "Nepean", "Gatineau"],
    painPoints: [
      "Workflows slow down because every exception gets handled manually.",
      "Customer communication needs to stay professional and consistent.",
      "Leaders need better visibility without adding reporting burden."
    ],
    keywords: ["Ottawa AI agency", "Ottawa software company", "Ottawa CRM systems"]
  },
  vancouver: {
    name: "Vancouver",
    slug: "vancouver",
    province: "British Columbia",
    intro: "Vancouver businesses often need systems that keep customer experience polished while removing friction from internal coordination and follow-up.",
    marketFocus: "service firms, local operators, digital-first brands, and teams where premium positioning needs premium execution",
    regionalProofHook: "Vancouver markets reward smooth digital experience, fast support, and clear handoff between marketing, sales, and operations.",
    industries: ["Professional services", "Hospitality", "Real estate", "Health and wellness"],
    nearbyAreas: ["Burnaby", "Richmond", "Coquitlam"],
    painPoints: [
      "Teams want speed without making the customer experience feel robotic.",
      "Growth channels create conversations that are hard to track across tools.",
      "Internal handoffs stay too dependent on people remembering next steps."
    ],
    keywords: ["Vancouver AI agency", "Vancouver software development", "Vancouver marketing systems"]
  },
  calgary: {
    name: "Calgary",
    slug: "calgary",
    province: "Alberta",
    intro: "Calgary businesses often need practical systems that improve throughput, visibility, and commercial discipline without overcomplicating the stack.",
    marketFocus: "professional services, field services, growth-stage businesses, and operations-focused leadership teams",
    regionalProofHook: "Calgary operators usually care about efficiency, measurable ROI, and systems that can support growth without ballooning headcount.",
    industries: ["Field services", "Professional services", "Real estate", "Construction-adjacent teams"],
    nearbyAreas: ["Airdrie", "Chestermere", "Okotoks"],
    painPoints: [
      "Operational knowledge sits in people instead of systems.",
      "Revenue teams need stronger follow-up discipline.",
      "Leaders want clearer reporting before adding more staff or spend."
    ],
    keywords: ["Calgary AI automation", "Calgary CRM integration", "Calgary lead systems"]
  }
};

const getCityData = (cityName: string): CanadaCity => {
  const slug = cityName.toLowerCase().trim();

  if (slug in canadaCities) {
    return canadaCities[slug as any];
  }

  if (slug in seoCitiesData) {
    return seoCitiesData[slug] as any;
  }

  return {
    slug: slug as any,
    name: cityName,
    province: "Ontario",
    intro: `${cityName} teams usually need stronger lead handling, cleaner CRM visibility, and faster cross-team execution as growth creates operational complexity.`,
    marketFocus: "service operators, local businesses, and operations-focused teams",
    regionalProofHook: `${cityName} buyers tend to compare options, making response speed and trust signals especially important.`,
    industries: ["Professional services", "Healthcare", "Real estate", "Local services"],
    nearbyAreas: [],
    painPoints: [
      "Lead response slows down as teams and channels scale.",
      "Reporting lives in too many tools for leadership to trust quickly.",
      "Manual follow-up creates avoidable leakage in the funnel.",
    ],
    keywords: [`${cityName} AI automation`, `${cityName} SEO agency`, `${cityName} CRM automation`],
  };
};

const getServiceData = (serviceName: string, category: string, slug: string): CanadaService => {
  const serviceSlug = slug.replace(/^\//, "").replace(/-[^-]+$/, "");
  return {
    slug: serviceSlug as any,
    name: serviceName,
    icon: "workflow",
    short: `${serviceName} systems that remove manual bottlenecks and keep work moving.`,
    category: category,
    overview: `Scalezix designs ${serviceName} systems for businesses that want cleaner workflows, faster response times, and less manual coordination.`,
    metaDescription: `${serviceName} systems designed to optimize operations and support business growth.`,
    problemStatement: "Manual steps, fragmented processes, and repetitive admin work slow growth teams down.",
    solutionAngle: "We define the workflow, integrate tools, and deploy automation layers to streamline execution.",
    audience: [
      "Revenue teams with slow response times",
      "Operations teams juggling disconnected tools",
      "Service businesses looking to standardize delivery",
    ],
    deliverables: [
      "Process audit and implementation roadmap",
      "System integrations and workflow logic",
      "Custom triggers, status updates, and reports",
    ],
    outcomes: [
      "Faster response and routing",
      "Less manual coordination",
      "Higher process consistency",
      "Better visibility across teams",
    ],
    process: [
      "Audit the current process and map friction points.",
      "Design integration and execution logic.",
      "Deploy, test, and refine against actual usage.",
    ],
    aeoQuestions: [],
    proofPoints: [
      "Designed for practical operational gains",
      "Best for businesses looking to scale efficiently",
    ],
    keywords: [serviceName.toLowerCase(), `${serviceName.toLowerCase()} services`],
    relatedCaseStudySlug: "real-estate-lead-routing",
    relatedBlogSlugs: [],
  };
};

function serviceCityFaqs(city: CanadaCity, serviceName: string): CanadaFaq[] {
  return [
    {
      question: `What does ${serviceName.toLowerCase()} help with for ${city.name} businesses?`,
      answer: `${serviceName} helps ${city.name} businesses reduce friction across lead handling, customer communication, internal coordination, and reporting. The exact workflow depends on the service, but the goal is always stronger execution and clearer commercial outcomes.`,
    },
    {
      question: `How long does ${serviceName.toLowerCase()} typically take in ${city.name}?`,
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

function buildInternalLinks(city: CanadaCity, serviceName: string, serviceSlug: string): CanadaInternalLink[] {
  return [
    {
      label: `${city.name} AI services hub`,
      href: `/ca/${city.slug}`,
    },
    {
      label: `${serviceName} overview`,
      href: `/services`,
    },
  ];
}

export function getSeoLocationPage(slug: string): CanadaServiceCityPage | null {
  const pageSlug = `/${slug.toLowerCase().trim()}`;
  const rawPage = (seoPagesData as SeoLocationPageRaw[]).find(
    (p) => p["Page URL / Slug"].toLowerCase().trim() === pageSlug
  );

  if (!rawPage) {
    return null;
  }

  const city = getCityData(rawPage.City);
  const service = getServiceData(rawPage.Service, rawPage.Category, rawPage["Page URL / Slug"]);

  return {
    city,
    service,
    title: rawPage["Meta Title"],
    metaDescription: rawPage["Meta Description"],
    heroTitle: rawPage.H1,
    heroIntro: `Scalezix delivers professional ${rawPage.Service.toLowerCase()} systems designed to help businesses in ${rawPage.City} automate operations, improve team efficiency, and scale customer experiences.`,
    cityIntro: `Our approach combines ${rawPage.Category.toLowerCase()} expertise, CRM-aware execution, and pragmatic systems rollout so teams in ${rawPage.City} can optimize how work moves without disrupting daily workflows.`,
    painPoints: [...city.painPoints],
    solutionAngle: service.solutionAngle,
    outcomes: [...service.outcomes],
    idealFor: [
      `${city.name} businesses in ${city.industries.slice(0, 2).join(" and ").toLowerCase()}`,
      ...service.audience.slice(0, 3),
    ],
    deliverables: [...service.deliverables],
    process: [...service.process],
    proofTitle: `${rawPage.Service} built around measurable operating gains`,
    proofBody: `Scalezix approaches ${rawPage.Service.toLowerCase()} as part of a broader business system. That means tighter follow-up, cleaner reporting, stronger handoffs, and choices shaped around how ${city.name} teams actually work.`,
    faqs: serviceCityFaqs(city, rawPage.Service),
    internalLinks: buildInternalLinks(city, rawPage.Service, service.slug),
  };
}

export function getSeoLocationSlugs(): string[] {
  return (seoPagesData as SeoLocationPageRaw[]).map((p) =>
    p["Page URL / Slug"].replace(/^\//, "").toLowerCase().trim()
  );
}

export function getSeoCities(): CanadaCity[] {
  const uniqueCityNames = Array.from(new Set((seoPagesData as SeoLocationPageRaw[]).map((p) => p.City)));
  return uniqueCityNames.map((name) => getCityData(name));
}

export function getSeoCity(citySlug: string): CanadaCity | null {
  const slug = citySlug.toLowerCase().trim();
  if (slug in canadaCities) {
    return canadaCities[slug as any];
  }
  if (slug in seoCitiesData) {
    return seoCitiesData[slug] as any;
  }
  return null;
}

export type SeoCategorizedServices = {
  category: string;
  services: {
    name: string;
    slug: string;
    description: string;
  }[];
};

export function getSeoServicesForCity(citySlug: string): SeoCategorizedServices[] {
  const cityPages = (seoPagesData as SeoLocationPageRaw[]).filter(
    (p) => p.City.toLowerCase().trim() === citySlug.toLowerCase().trim()
  );

  const categoriesMap: Record<string, { name: string; slug: string; description: string }[]> = {};

  cityPages.forEach((p) => {
    if (!categoriesMap[p.Category]) {
      categoriesMap[p.Category] = [];
    }
    categoriesMap[p.Category].push({
      name: p.Service,
      slug: p["Page URL / Slug"].replace(/^\//, ""),
      description: p["Meta Description"],
    });
  });

  return Object.keys(categoriesMap).map((category) => ({
    category,
    services: categoriesMap[category],
  }));
}
