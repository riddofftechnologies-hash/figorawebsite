import { Link } from "react-router-dom";
import { useState } from "react";
import { services } from "../constants/index.js";

// Custom descriptions for hover reveal
const serviceDescriptions = {
    "Branding": "Brand Architecture. Built to Last. We transcend logos, crafting comprehensive identities that speak volumes without uttering a word. Our process fuses deep strategy with intentional design, guaranteeing a brand that is timeless and uniquely yours.",
    "SEO": "Winning the SERP. Our approach is pure science: marrying Technical SEO with Strategic Content to ensure maximum visibility, authority, and sustained ranking stability.",
    "Social Media Marketing": "We build robust, integrated digital presences, crafting scroll-stopping content and platform-specific narratives that ignite conversation and deliver consistent brand visibility.",
    "Performance Marketing": "ROI-Driven Acquisition. We bypass guesswork, leveraging advanced AdTech, real-time Conversion Rate Optimization (CRO), and Data Intelligence to drive measurable sales and guarantee profitable client acquisition. We only optimize for what works.",
    "Influencer Marketing": "From Advocacy to Acquisition. We don't just find faces; we build scalable Advocate Programs. Engineering high-impact, authentic User-Generated Content (UGC) campaigns that transform influence into unparalleled market reach.",
    "Production": "Cinematic Storytelling. Optimized for the Feed. From concept to final cut, we master the art of scroll-stopping visuals that resonate instantly. Lights, camera, brand dominance."
};

const Solutions = () => {
    const [hoveredService, setHoveredService] = useState(null);

    return (
        <section id="solutions" className="solutions-section py-20 lg:py-32 relative">
            <div className="container mx-auto px-5">
                <div className="section-header mb-16">
                    <h2 className="text-3xl lg:text-6xl font-bold text-ash-black mb-6">
                        SOLUTIONS <span className="text-gradient">We Provide</span>
                    </h2>
                    <p className="text-dark-100 max-w-2xl text-lg">
                        Explore what we do and how we do it differently. At Figora, we don't just
                        deliver services, we solve problems with intent and creativity.
                    </p>
                    {/* ...existing code... */}
                    {services.slice(0, 6).map((service, index) => (
                        <Link
                            key={service.id}
                            to={`/services/${service.slug}`}
                            className="solution-card group flex flex-col lg:flex-row items-start gap-6 py-8 border-b border-slate-200 px-4 rounded-lg transition-all duration-300 bg-slate-100"
                            onMouseEnter={() => setHoveredService(service.title)}
                            onMouseLeave={() => setHoveredService(null)}
                        >
                            <span className="solution-number text-primary font-bold text-xl lg:text-2xl min-w-[60px] mt-1">
                                {String(index + 1).padStart(2, "0")}.
                            </span>
                            <div className="flex-1">
                                <h3 className="text-xl lg:text-3xl font-bold uppercase group-hover:text-primary transition-colors text-ash-black"> 
                                    {service.title}
                                </h3>
                                {/* Description that appears under text on hover */}
                                {serviceDescriptions[service.title] && (
                                    <div 
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                            hoveredService === service.title ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                    >
                                        <p className={`text-dark-100 text-base lg:text-lg${index !== 1 ? ' text-justify' : ''}`}>
                                            {serviceDescriptions[service.title]}
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div className="solution-image w-full lg:w-32 h-20 rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 self-center">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        to="/services"
                        className="magnetic-btn inline-block btn-gradient py-4 px-10 rounded-full font-semibold"
                    >
                        EXPLORE ALL SERVICES
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Solutions;
