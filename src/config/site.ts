// Site-wide config. Swap these per client — this is the ONLY file most clients touch.

export const site = {
  brand: "AquaLine",
  tagline: "Same-Day Plumbing, Done Right",
  phone: "+1 (555) 012-3456",
  phoneRaw: "+15550123456",
  email: "hello@aqualine.example.com",
  address: "789 Waterline Ave, Los Angeles, CA 90015",
  serviceCities: [
    "Downtown LA",
    "Hollywood",
    "Santa Monica",
    "Beverly Hills",
    "Pasadena",
    "Long Beach",
  ],
  hours: {
    weekdays: "Mon – Sat: 7:00 AM – 9:00 PM",
    emergency: "Emergency Service: 24/7",
  },
  hero: {
    eyebrow: "24/7 Emergency · Licensed · Guaranteed",
    headline: "Plumbing problems, solved fast.",
    subhead:
      "From burst pipes to full repipes, our licensed plumbers arrive on time with flat-rate pricing and leave your home cleaner than we found it.",
    primaryCta: { label: "Call Now", href: "tel:+15550123456" },
    secondaryCta: { label: "Request Service", href: "#contact" },
    trustLine: "Trusted by 15,000+ homeowners · 25+ years experience",
  },
  deals: [
    "$25 Off First Service",
    "Free Leak Detection This Month",
    "Same-Day Service Guarantee",
    "24/7 Emergency Plumbing — Call Now",
    "Licensed Master Plumbers — All Work Guaranteed",
  ],
  review: {
    stars: 4.9,
    count: 1580,
  },
  socials: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    google: "https://g.page/",
  },
};

export const services = [
  {
    title: "Emergency Repairs",
    desc: "Burst pipes, major leaks, sewer backups — we dispatch a licensed plumber in under an hour, day or night.",
    icon: "Wrench",
  },
  {
    title: "Drain & Sewer Cleaning",
    desc: "Hydro jetting, snaking, and camera inspection to clear stubborn clogs and restore full-flow drainage.",
    icon: "Waves",
  },
  {
    title: "Water Heater Service",
    desc: "Installation, repair, and tankless conversions for gas, electric, and heat-pump water heaters.",
    icon: "Flame",
  },
  {
    title: "Leak Detection",
    desc: "Non-invasive acoustic and thermal leak detection to find hidden water damage before it gets expensive.",
    icon: "Search",
  },
  {
    title: "Fixture Installation",
    desc: "Faucets, toilets, sinks, showers, disposals — pro install with clean lines and warrantied labor.",
    icon: "Droplets",
  },
  {
    title: "Repiping & Rerouting",
    desc: "Whole-home repipe with PEX or copper. We protect finishes, pass inspection, and stand behind the work for life.",
    icon: "GitBranch",
  },
  {
    title: "Gas Line Service",
    desc: "Licensed gas line install, repair, and leak certification for ranges, water heaters, and outdoor kitchens.",
    icon: "Zap",
  },
  {
    title: "Backflow Testing",
    desc: "Annual backflow certification and repair to keep your municipal water supply safe and code-compliant.",
    icon: "ShieldCheck",
  },
];

export const whyChoose = [
  {
    title: "Licensed Master Plumbers",
    desc: "State-licensed, bonded, and insured. No trainees on your jobsite — only certified pros.",
    icon: "Award",
  },
  {
    title: "Flat-Rate Pricing",
    desc: "Every quote in writing before we start. No hourly creep, no surprise fees, ever.",
    icon: "BadgeDollarSign",
  },
  {
    title: "Under-60 Minute Response",
    desc: "Emergency dispatch across the metro area in less than an hour, 24 hours a day.",
    icon: "Timer",
  },
  {
    title: "Lifetime Workmanship Warranty",
    desc: "If our work fails, we fix it — free. Manufacturer warranties pass directly to you.",
    icon: "ShieldCheck",
  },
  {
    title: "Clean, Respectful Crews",
    desc: "Shoe covers, drop cloths, full cleanup. Your home stays exactly as you left it.",
    icon: "Sparkles",
  },
  {
    title: "Fully Stocked Trucks",
    desc: "Most jobs done in one visit. No waiting, no return trips for parts or fittings.",
    icon: "Truck",
  },
];

export const process = [
  {
    n: "01",
    title: "Book Your Service",
    desc: "Call, text, or use the form. We confirm within 15 minutes and schedule a slot that works.",
  },
  {
    n: "02",
    title: "On-Site Diagnosis",
    desc: "A licensed plumber arrives on time, inspects the issue, and gives a flat-rate quote upfront.",
  },
  {
    n: "03",
    title: "Fast, Clean Repair",
    desc: "We complete the work to code, pressure-test, and walk you through what was done.",
  },
  {
    n: "04",
    title: "Cleanup & Warranty",
    desc: "Site is spotless, work is warrantied, and you get a written report for insurance or records.",
  },
];

export const stats = [
  { n: "25+", label: "Years in Business" },
  { n: "15,000+", label: "Jobs Completed" },
  { n: "4.9★", label: "1,580+ Reviews" },
  { n: "60 min", label: "Avg. Response" },
];

export const testimonials = [
  {
    quote:
      "A pipe burst under our sink at 2 AM — AquaLine had a tech at our door in 40 minutes, stopped the leak, and had it fully repaired by morning. No drama, fair price.",
    name: "Rachel M.",
    role: "Homeowner, Pasadena",
  },
  {
    quote:
      "We repiped the whole house with them. They protected every surface, hit every inspection on the first pass, and the final invoice matched the quote to the dollar.",
    name: "Tom & Lisa B.",
    role: "Homeowners, Santa Monica",
  },
  {
    quote:
      "Used them for a tankless water heater conversion. Showed up on time, clean work, walked me through the controls. Genuinely the easiest contractor experience I've had.",
    name: "Daniel K.",
    role: "Homeowner, Beverly Hills",
  },
  {
    quote:
      "Our restaurant had a sewer backup during dinner service. They had us open again in 90 minutes. Professional, fast, didn't overcharge. These are our plumbers now.",
    name: "Sophia L.",
    role: "Restaurant Owner",
  },
];

export const faqs = [
  {
    q: "Are you licensed and insured?",
    a: "Yes. Every plumber on our team holds a state master or journeyman license, and the company carries full commercial liability and workers' comp.",
  },
  {
    q: "Do you offer 24/7 emergency service?",
    a: "Yes, 24/7/365. Burst pipes, sewer backups, no water — call and a licensed plumber is dispatched immediately, not a call center that routes you.",
  },
  {
    q: "How much does a typical repair cost?",
    a: "Most repairs run $175–$750 depending on scope. Every quote is flat-rate and in writing before we start. Emergencies add a standard after-hours fee that we disclose upfront.",
  },
  {
    q: "Do you pull permits?",
    a: "Yes. Any work that legally requires a permit (repipes, gas lines, water heater installs, sewer work) is pulled, inspected, and passed before we close out the job.",
  },
  {
    q: "Do you offer a warranty?",
    a: "We back all workmanship for the life of the installation against defects caused by our labor. Manufacturer warranties pass through directly to you.",
  },
  {
    q: "What areas do you serve?",
    a: `We cover ${[
      "Downtown LA",
      "Hollywood",
      "Santa Monica",
      "Beverly Hills",
      "Pasadena",
      "Long Beach",
    ].join(", ")}, plus nearby communities. Not sure? Call us — we probably cover you.`,
  },
];
