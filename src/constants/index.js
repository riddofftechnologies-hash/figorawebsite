// Navigation Links (Updated for Agency)
const navLinks = [
    { label: "About Us", path: "/about-us" },
    { label: "Services", path: "/services" },
    { label: "Works", path: "/works" },
    { label: "Ideas", path: "/ideas" },
    { label: "Contact", path: "/contact-us" },
];

// Services Data
const services = [
    {
        id: 1,
        title: "Branding",
        slug: "branding",
        description: "We craft identities that live across every touchpoint and speak without words. From strategy to design, we build brands that are timeless, intentional, and unmistakably yours.",
        image: "/10.png",
        subServices: ["Brand Guidelines", "Rebranding", "Website Branding"],
    },
    {
        id: 2,
        title: "SEO",
        slug: "search-engine-optimization",
        description: "Climb the ranks and stay there. We mix tech, content and strategy to make sure Google and your customers find YOU first.",
        image: "/7.png",
        subServices: ["Technical SEO", "Content Strategy", "Local SEO"],
    },
    {
        id: 3,
        title: "Social Media Marketing",
        slug: "social-media-marketing",
        description: "From scroll-stopping posts to stories that spark conversation, we turn your socials into a community, not just a feed.",
        image: "/11.png",
        subServices: ["Content Creation", "Community Management", "Analytics"],
    },
    {
        id: 4,
        title: "Performance Marketing",
        slug: "performance-marketing",
        description: "Visuals that speak your brand fluently and leave a lasting impression. Designed with intent, not just to make your brand seem pretty.",
        image: "/12.png",
        subServices: ["Print Design", "Digital Assets", "Marketing Collateral"],
    },
    {
        id: 5,
        title: "Influencer Marketing",
        slug: "influencer-marketing",
        description: "Add soul to your brand with hand-crafted illustrations and lovable characters that people remember (and share).",
        image: "/13.png",
        subServices: ["Custom Illustrations", "Mascot Design", "Icon Sets"],
    },
    {
        id: 6,
        title: "Production",
        slug: "production",
        description: "We design intuitive, user-centered interfaces that make every click feel effortless. From layout to flow, every detail is crafted to boost engagement and conversion.",
        image: "/14.png",
        subServices: ["Web Design", "App Design", "Design Systems"],
    },
    {
        id: 7,
        title: "Production",
        slug: "production-photography",
        description: "Lights, camera, conversion. We shoot scroll-worthy visuals that tell your story and elevate your brand's look instantly.",
        image: "/services/production.webp",
        subServices: ["Photography", "Videography", "Event Coverage"],
    },
];

// Projects/Works Data
const projects = [
    {
        id: 4,
        title: "Project Delta",
        slug: "project-delta",
        subtitle: "Website Design",
        category: "ux-ui",
        image: "/projects/project4.webp",
    },
    {
        id: 5,
        title: "Project Epsilon",
        slug: "project-epsilon",
        subtitle: "Brand Photography",
        category: "production",
        image: "/projects/project5.webp",
    },
    {
        id: 6,
        title: "Project Zeta",
        slug: "project-zeta",
        subtitle: "SEO Strategy",
        category: "seo",
        image: "/projects/project6.webp",
    },
];

const projectCategories = [
    { id: 1, name: "Branding", slug: "branding" },
    { id: 2, name: "SEO", slug: "seo" },
    { id: 3, name: "Social Media", slug: "social-media" },
    { id: 4, name: "UX/UI", slug: "ux-ui" },
    { id: 5, name: "Production", slug: "production" },
];

// Testimonials Data
const testimonials = [
    {
        id: 1,
        name: "John Smith",
        role: "Founder and MD",
        company: "Tech Startup",
        quote: "Partnering with Figora for our SEO and social media marketing helped us reach the right audience and increase engagement. What I appreciate most is their ability to blend creativity with data driven insights, ensuring every campaign delivers results.",
        image: "/testimonials/person1.webp",
    },
    {
        id: 2,
        name: "Sarah Johnson",
        role: "Co-Founder",
        company: "E-commerce Brand",
        quote: "I'm really happy to share my experience working with Figora on my brand design. They understood my ideas very well and turned them into a wonderful design. The coordination, timing and creativity were outstanding.",
        image: "/testimonials/person2.webp",
    },
    {
        id: 3,
        name: "Michael Chen",
        role: "CEO",
        company: "Healthcare Solutions",
        quote: "What we see in Figora is the drive, energy, and adaptability to go the distance and achieve our shared goals. It's been a pleasure working with their team. I'm confident that in the years ahead, they'll continue to show that success is not accidental.",
        image: "/testimonials/person3.webp",
    },
];

// Clients Data
const clients = [
    { id: 1, name: "Client 1", logo: "/clients/1.png", url: "#" },
    { id: 2, name: "Client 2", logo: "/clients/1.png", url: "#" },
    { id: 3, name: "Client 3", logo: "/clients/1.png", url: "#" },
    { id: 4, name: "Client 4", logo: "/clients/1.png", url: "#" },
    { id: 5, name: "Client 5", logo: "/clients/1.png", url: "#" },
    { id: 6, name: "Client 6", logo: "/clients/1.png", url: "#" },
];

// Blog Posts Data
const blogPosts = [
    {
        id: 1,
        title: "How Small Businesses Can Improve Local SEO",
        slug: "improve-local-seo",
        excerpt: "Learn the essential strategies to boost your local search rankings and attract more customers in your area.",
        category: "seo",
        categoryLabel: "SEO",
        image: "/7.png",
        date: "Dec 15, 2025",
    },
    {
        id: 2,
        title: "6 Basic Things to Know Before Building Your Website Design",
        slug: "website-design-basics",
        excerpt: "Essential tips and considerations before starting your website design project.",
        category: "ux-ui",
        categoryLabel: "UX/UI",
        image: "/8.png",
        date: "Dec 10, 2025",
    },
    {
        id: 3,
        title: "Lighting Techniques Every Production Photographer Should Know",
        slug: "lighting-techniques",
        excerpt: "Master these lighting techniques to elevate your photography and create stunning visuals.",
        category: "photography",
        categoryLabel: "Photography",
        image: "/9.png",
        date: "Dec 5, 2025",
    },

    // Branding Card
    {
        id: 4,
        title: "Branding Essentials for Modern Businesses",
        slug: "branding-essentials",
        excerpt: "Explore the key elements of branding that help businesses stand out in today's market.",
        category: "branding",
        categoryLabel: "Branding",
        image: "/10.png",
        date: "Nov 28, 2025",
    },

    // Social Media Card
    {
        id: 5,
        title: "Social Media Strategies for 2025",
        slug: "social-media-strategies-2025",
        excerpt: "Stay ahead with the latest social media strategies to grow your audience and engagement.",
        category: "social-media",
        categoryLabel: "Social Media",
        image: "/11.png",
        date: "Nov 15, 2025",
    },
    
];

const blogCategories = [
    { id: 1, name: "SEO", slug: "seo" },
    { id: 2, name: "UX/UI", slug: "ux-ui" },
    { id: 3, name: "Photography", slug: "photography" },
    { id: 4, name: "Branding", slug: "branding" },
    { id: 5, name: "Social Media", slug: "social-media" },
];

// Impact Stats
const impactStats = [
    { value: "50+", label: "Projects delivered" },
    { value: "10+", label: "Satisfied clients" },
    { value: "100+", label: "Keywords ranked on Google" },
    { value: "4M", label: "Revenue for a client" },
];

// FAQs Data
const faqs = [
    {
        id: 1,
        question: "What services do you offer?",
        answer: "We provide a full range of digital marketing services, from branding and SEO to social media management and performance marketing. Feel free to check out our Services page for the complete list.",
    },
    {
        id: 2,
        question: "How quickly will you respond to my inquiry?",
        answer: "We usually get back to you within 24 to 48 business hours. If it's urgent, don't hesitate to call us for a faster response.",
    },
    {
        id: 3,
        question: "Do you offer consultations before starting a project?",
        answer: "Absolutely! We believe great partnerships start with understanding your goals. Our consultations help us tailor the perfect strategy for your success.",
    },
    {
        id: 4,
        question: "How do you customize strategies for different businesses?",
        answer: "Every business is unique, so we start by learning your goals, audience, and challenges. From there, we craft strategies tailored to what will work best for your brand and market.",
    },
    {
        id: 5,
        question: "Can you handle projects for businesses outside the UAE?",
        answer: "Yes! While we're based in the UAE, our digital solutions reach clients worldwide. Distance doesn't limit us, your success is our priority wherever you are.",
    },
    {
        id: 6,
        question: "What makes Figora different from other digital agencies?",
        answer: "We combine local market insight with global digital trends, offering personalized service, transparent communication, and a creative approach that drives real results.",
    },
];

// Team Members Data
const teamMembers = [
    { id: 1, name: "Team Member 1", role: "Creative Director", image: "/cd.png" },
    { id: 2, name: "Team Member 2", role: "UI/UX Lead", image: "/ui/ux.png" },
    { id: 3, name: "Team Member 3", role: "SEO Specialist", image: "/seo.png" },
    { id: 4, name: "Team Member 4", role: "Social Media Manager", image: "/soc.png" },
];

// Journey Steps
const journeySteps = [
    {
        id: 1,
        title: "THE SPARK",
        description: "Figora started with one founder juggling a full-time role and a flood of freelance requests. Somewhere between coffee refills and client calls, it clicked: this cannot just be a side hustle.",
        image: "/15.png",
    },
    {
        id: 3,
        title: "THE GROWTH",
        description: "Now we craft brands people remember and engineer strategies that actually deliver. We've helped brands launch, scale, and shine. We treat every project like it matters. Because it does.",
        image: "/16.png",
    },
    {
        id: 4,
        title: "THE NOW",
        description: "Big enough to move mountains in our projects. But simple enough to know your brand by name: That's the Figora way.",
        image: "/17.png",
    },
];

// Team Philosophy
const teamPhilosophy = [
    {
        id: 1,
        title: "PLAN WITH PURPOSE",
        description: "Every step we take is guided by thoughtful strategy and shared insight.",
        icon: "/log1.png",
    },
    {
        id: 2,
        title: "BUILD AS ONE",
        description: "True impact comes from partnering closely with each other and with our clients.",
        icon: "/log2.png",
    },
    {
        id: 3,
        title: "DARE TO DREAM",
        description: "We challenge ourselves to think differently, push boundaries, and dream big.",
        icon: "/log3.png",
    },
];

const noChangeParts = [
    "Object_84",
    "Object_37",
    "Object_34",
    "Object_12",
    "Object_80",
    "Object_35",
    "Object_36",
    "Object_13",
    "Object_125",
    "Object_76",
    "Object_33",
    "Object_42",
    "Object_58",
    "Object_52",
    "Object_21",
    "Object_10",
];

const performanceImages = [
    { id: "p1", src: "/21.png" },
    { id: "p2", src: "/7.png" },
    { id: "p3", src: "/8.png" },
    { id: "p4", src: "/9.png" },
    { id: "p5", src: "/10.png" },
    { id: "p6", src: "/11.png" },
    { id: "p7", src: "/12.png" },
];

const performanceImgPositions = [
    {
        id: "p1",
        left: 5,
        bottom: 65,
    },
    {
        id: "p2",
        right: 10,
        bottom: 60,
    },
    {
        id: "p3",
        right: -5,
        bottom: 45,
    },
    {
        id: "p4",
        right: -10,
        bottom: 0,
    },
    {
        id: "p5",
        left: 20,
        bottom: 50,
    },
    {
        id: "p6",
        left: 2,
        bottom: 30,
    },
    {
        id: "p7",
        left: -5,
        bottom: 0,
    },
];

const features = [
    {
        id: 1,
        icon: "",
        highlight: "",
        text: "Search Engine Optimization (SEO): Making your business visible when people search for terms like \"retail store near me.\"",
        styles: "left-5 md:left-20 top-[20%] opacity-0 translate-y-5",
    },
    {
        id: 2,
        icon: "",
        highlight: "",
        text: "Social Media Marketing & Commerce: Using platforms like Instagram, TikTok, and Facebook not just for posts, but for direct shopping.",
        styles: "right-5 md:right-20 top-[30%] opacity-0 translate-y-5",
    },
    {
        id: 3,
        icon: "",
        highlight: "",
        text: "Content Marketing: Creating valuable material (videos, blogs, or guides) that solves customer problems",
        styles: "left-5 md:left-20 top-[50%] opacity-0 translate-y-5",
    },
    {
        id: 4,
        icon: "",
        highlight: "",
        text: "Email & SMS Marketing: Direct communication with your loyal customers. Automated \"abandoned cart\" reminders or personalized holiday offers are high-ROI tactics",
        styles: "right-5 md:right-20 top-[70%] opacity-0 translate-y-5",
    },
    {
        id: 5,
        icon: "",
        highlight: "",
        text: "Pay-Per-Click (PPC): Paid ads on Google or Meta that target high-intent shoppers based on their demographics and interests",
        styles: "left-5 md:left-20 top-[90%] opacity-0 translate-y-5",
    },
];

const featureSequence = [
    { videoPath: "/videos/feature-1.mp4", boxClass: ".box1", delay: 1 },
    { videoPath: "/videos/feature-2.mp4", boxClass: ".box2", delay: 0 },
    { videoPath: "/videos/feature-3.mp4", boxClass: ".box3", delay: 0 },
    { videoPath: "/videos/feature-4.mp4", boxClass: ".box4", delay: 0 },
    { videoPath: "/videos/feature-5.mp4", boxClass: ".box5", delay: 0 },
];

const footerLinks = [
    { label: "Privacy Policy", link: "/privacy-policy" },
    { label: "Terms & Conditions", link: "/terms-and-conditions" },
];

const quickLinks = [
    { label: "About Us", link: "/about-us" },
    { label: "Services", link: "/services" },
    { label: "Our Works", link: "/works" },
    { label: "Contact Us", link: "/contact-us" },
    { label: "Careers", link: "/about-us#careers" },
];

export {
    blogCategories,
    blogPosts,
    clients,
    faqs,
    features,
    featureSequence,
    footerLinks,
    impactStats,
    journeySteps,
    navLinks,
    noChangeParts,
    performanceImages,
    performanceImgPositions,
    projectCategories,
    projects,
    quickLinks,
    services,
    teamMembers,
    teamPhilosophy,
    testimonials,
};
