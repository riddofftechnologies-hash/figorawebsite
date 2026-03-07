// ─── Services ────────────────────────────────────────────
export interface Service {
  icon: string;
  name: string;
  desc: string;
  tag: string;
}

export const services: Service[] = [
  {
    icon: '🏛️',
    name: 'Branding',
    desc: 'Brand Architecture. Built to Last. We transcend logos, crafting comprehensive identities that speak volumes without uttering a word. Our process fuses deep strategy with intentional design, guaranteeing a brand that is timeless and uniquely yours.',
    tag: 'Identity Systems',
  },
  {
    icon: '🔍',
    name: 'SEO',
    desc: 'Winning the SERP. Our approach is pure science: marrying Technical SEO with Strategic Content to ensure maximum visibility, authority, and sustained ranking stability.',
    tag: 'Search Authority',
  },
  {
    icon: '📱',
    name: 'Social Media Marketing',
    desc: 'We build robust, integrated digital presences, crafting scroll-stopping content and platform-specific narratives that ignite conversation and deliver consistent brand visibility.',
    tag: 'Platform Growth',
  },
  {
    icon: '📈',
    name: 'Performance Marketing',
    desc: "ROI-Driven Acquisition. We bypass guesswork, leveraging advanced AdTech, real-time Conversion Rate Optimization (CRO), and Data Intelligence to drive measurable sales and guarantee profitable client acquisition.",
    tag: 'Paid Acquisition',
  },
  {
    icon: '🤝',
    name: 'Influencer Marketing',
    desc: "From Advocacy to Acquisition. We don't just find faces; we build scalable Advocate Programs. Engineering high-impact, authentic UGC campaigns that transform influence into unparalleled market reach.",
    tag: 'UGC Programs',
  },
  {
    icon: '🎬',
    name: 'Production',
    desc: 'Cinematic Storytelling. Optimized for the Feed. From concept to final cut, we master the art of scroll-stopping visuals that resonate instantly. Lights, camera, brand dominance.',
    tag: 'Visual Content',
  },
];

// ─── Stats ───────────────────────────────────────────────
export interface Stat {
  number: string;
  label: string;
  desc: string;
}

export const stats: Stat[] = [
  {
    number: '30+',
    label: 'Clients',
    desc: 'Trusted by brands across diverse industries who sought measurable, transformative growth.',
  },
  {
    number: '3+',
    label: 'Countries',
    desc: 'Our impact transcends borders — driving digital growth internationally.',
  },
  {
    number: '175',
    label: 'ROAS',
    desc: 'Return On Ad Spend that sets a new benchmark in performance marketing.',
  },
  {
    number: '100%',
    label: 'Commitment',
    desc: 'Every campaign, every brand, every decision made with complete dedication to your success.',
  },
];

// ─── Clients ─────────────────────────────────────────────
export const clients: string[] = [
  'ALRAMS',
  'HARMAN MOTORS',
  'RIDDOFF',
  'WINDOOR',
  'GLOW AURA',
  'VB KAYAM',
  'ENLIGHTEN',
  'SPRINGS',
  'LEGAL STANLEY',
  'EMPIRE MARINE',
];

// ─── Testimonials ─────────────────────────────────────────
export interface Testimonial {
  text: string;
  initials: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    text: '"Figora completely transformed our digital presence. The SEO strategy they built for us drove a 3x increase in organic traffic within four months. They don\'t just deliver — they over-deliver."',
    initials: 'A',
    name: 'Arun Mathew',
    role: 'CEO, Alrams',
  },
  {
    text: '"Working with Figora felt like having an in-house team that genuinely cared about our brand. Their branding work gave us an identity we\'re proud to show the world."',
    initials: 'R',
    name: 'Rahul Sharma',
    role: 'Director, Harman Motors',
  },
  {
    text: '"The performance marketing campaigns Figora ran for us achieved a ROAS we hadn\'t even dreamed of. Data-driven, creative, and completely aligned with our goals."',
    initials: 'S',
    name: 'Sneha Nair',
    role: 'Founder, Glow Aura',
  },
];

// ─── Blog Posts ───────────────────────────────────────────
export interface BlogPost {
  thumbClass: string;
  emoji: string;
  cat: string;
  date: string;
  title: string;
  excerpt: string;
}

export const blogPosts: BlogPost[] = [
  {
    thumbClass: 'thumb-1',
    emoji: '🔍',
    cat: 'SEO',
    date: 'June 12, 2025',
    title: 'Why Technical SEO Is the Silent Backbone of Every Top-Ranking Site',
    excerpt: "Beyond keywords and backlinks, it's the architecture of your site that search engines truly reward. Here's what most brands miss.",
  },
  {
    thumbClass: 'thumb-2',
    emoji: '📊',
    cat: 'Performance',
    date: 'May 28, 2025',
    title: "Decoding ROAS: How We Consistently Drive Returns Others Can't",
    excerpt: "Return on Ad Spend isn't luck — it's a science. We break down the data intelligence framework behind our 175 ROAS benchmark.",
  },
  {
    thumbClass: 'thumb-3',
    emoji: '🎯',
    cat: 'Branding',
    date: 'May 10, 2025',
    title: 'Brand Architecture: Building Identities That Outlast Trends',
    excerpt: 'What separates logos from legacies? Deep strategy. Discover how we approach brand-building as a long-term investment.',
  },
];

// ─── Works / Portfolio ────────────────────────────────────
export interface Work {
  number: string;
  type: string;
  name: string;
  desc: string;
}

export const works: Work[] = [
  {
    number: '01',
    type: 'Branding + SEO',
    name: 'Harman Motors — Digital Identity Overhaul',
    desc: 'Complete brand architecture redesign paired with an aggressive SEO strategy that placed them top-3 across 40+ local search terms.',
  },
  {
    number: '02',
    type: 'Performance Marketing',
    name: 'Glow Aura — 175 ROAS Campaign',
    desc: "Data-driven paid acquisition strategy that scaled Glow Aura's e-commerce revenue 12x in under 90 days.",
  },
  {
    number: '03',
    type: 'Social Media + Production',
    name: 'Empire Marine — Content Dominance',
    desc: 'Scroll-stopping cinematic content series that grew their social following by 340% and established category authority.',
  },
  {
    number: '04',
    type: 'Influencer Marketing',
    name: 'Riddoff — UGC Advocacy Program',
    desc: 'Built an authentic influencer ecosystem of 80+ advocates, generating millions of organic impressions and measurable sales lift.',
  },
];

// ─── Crew / Team ──────────────────────────────────────────
export interface CrewMember {
  emoji: string;
  name: string;
  role: string;
  gradient: string;
}

export const crew: CrewMember[] = [
  { emoji: '👤', name: 'Anand R.',  role: 'Founder & Strategist',  gradient: 'linear-gradient(135deg,#7B2FFF,#E040FB)' },
  { emoji: '👤', name: 'Sreya M.', role: 'Creative Director',      gradient: 'linear-gradient(135deg,#E040FB,#FF6B6B)' },
  { emoji: '👤', name: 'Jijo P.',  role: 'SEO Lead',               gradient: 'linear-gradient(135deg,#FF6B6B,#FFD93D)' },
  { emoji: '👤', name: 'Athira K.',role: 'Performance Marketer',   gradient: 'linear-gradient(135deg,#FFD93D,#7B2FFF)' },
  { emoji: '👤', name: 'Rahul V.', role: 'Content Strategist',     gradient: 'linear-gradient(135deg,#7B2FFF,#FF6B6B)' },
  { emoji: '👤', name: 'Nisha T.', role: 'Production Lead',        gradient: 'linear-gradient(135deg,#A855F7,#E040FB)' },
];
