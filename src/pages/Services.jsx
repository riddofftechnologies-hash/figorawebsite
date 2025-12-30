import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CallToAction from "../components/CallToAction.jsx";
import { services, impactStats } from "../constants/index.js";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const heroRef = useRef(null);
    const servicesRef = useRef(null);

    useEffect(() => {
        // Hero animation
        gsap.fromTo(
            heroRef.current.querySelectorAll(".animate-in"),
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: "power3.out",
            }
        );

        // Services cards animation
        const serviceCards = servicesRef.current.querySelectorAll(".service-card");
        serviceCards.forEach((card, index) => {
            gsap.fromTo(
                card,
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: index * 0.1,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    }, []);

    return (
        <div className="services-page">
            {/* Hero Section */}
            <section ref={heroRef} className="services-hero py-20 lg:py-32">
                <div className="container mx-auto px-5">
                    <h1 className="animate-in text-4xl lg:text-7xl font-bold text-white mb-6">
                        Bold <span className="text-gradient">SERVICES</span> for
                        <br />
                        Visionary Brands.
                    </h1>
                    <p className="animate-in text-lg lg:text-xl text-dark-100 max-w-3xl">
                        Our services are specifically designed to meet your needs.
                    </p>
                </div>

                {/* Floating Service Images */}
                <div className="animate-in services-hero-images mt-12 flex gap-4 overflow-x-auto px-5 pb-4">
                    {services.slice(0, 4).map((service) => (
                        <div
                            key={service.id}
                            className="service-hero-card min-w-[250px] lg:min-w-[300px] rounded-2xl overflow-hidden"
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-48 object-cover"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Solutions Section */}
            <section ref={servicesRef} className="solutions-section py-20">
                <div className="container mx-auto px-5">
                    <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                        SOLUTIONS <span className="text-gradient">We Provide</span>
                    </h2>

                    <div className="services-list mt-12">
                        {services.map((service, index) => (
                            <Link
                                key={service.id}
                                to={`/services/${service.slug}`}
                                className="service-card group flex flex-col lg:flex-row items-start gap-6 py-8 border-b border-dark-200/50 hover:bg-dark-200/20 px-4 rounded-lg transition-all duration-300"
                            >
                                <span className="service-number text-primary font-bold text-xl">
                                    {String(index + 1).padStart(2, "0")}.
                                </span>
                                <div className="flex-1">
                                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-dark-100 max-w-2xl">{service.description}</p>
                                    {service.subServices && (
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {service.subServices.map((sub) => (
                                                <span
                                                    key={sub}
                                                    className="text-sm text-primary bg-primary/10 px-3 py-1 rounded-full"
                                                >
                                                    {sub}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <div className="service-image w-full lg:w-48 h-32 rounded-xl overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Stats Section */}
            <section className="impact-section py-20 bg-dark-200/30">
                <div className="container mx-auto px-5">
                    <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 text-center">
                        We Deliver <span className="text-gradient">IMPACT</span>
                        <br />
                        Let's Create Yours
                    </h2>
                    <p className="text-center text-dark-100 mb-16 max-w-2xl mx-auto">
                        Turn your vision into measurable results that drive your business forward.
                    </p>

                    <div className="stats-marquee overflow-hidden">
                        <div className="stats-track flex gap-8 animate-marquee">
                            {[...impactStats, ...impactStats].map((stat, index) => (
                                <div
                                    key={index}
                                    className="stat-card flex-shrink-0 bg-dark-200/50 rounded-2xl p-8 min-w-[200px] text-center"
                                >
                                    <h3 className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                                        {stat.value}
                                    </h3>
                                    <p className="text-dark-100">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="featured-projects py-20">
                <div className="container mx-auto px-5">
                    <h2 className="text-3xl lg:text-5xl font-bold text-white mb-16 text-center">
                        FEATURED <span className="text-gradient">Projects</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="project-card group rounded-2xl overflow-hidden">
                            <img
                                src="/projects/project1.webp"
                                alt="Featured Project"
                                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="p-6 bg-dark-200/50">
                                <h4 className="text-xl font-bold text-white">Project Name</h4>
                                <p className="text-primary">Visual Identity Design</p>
                            </div>
                        </div>
                        <div className="project-card group rounded-2xl overflow-hidden">
                            <img
                                src="/projects/project2.webp"
                                alt="Featured Project"
                                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="p-6 bg-dark-200/50">
                                <h4 className="text-xl font-bold text-white">Project Name</h4>
                                <p className="text-primary">Logo Redesign</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            to="/works"
                            className="magnetic-btn inline-block bg-transparent border-2 border-primary text-primary py-4 px-10 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                        >
                            EXPLORE OUR CASE STUDIES
                        </Link>
                    </div>
                </div>
            </section>

            <CallToAction />
        </div>
    );
};

export default Services;
