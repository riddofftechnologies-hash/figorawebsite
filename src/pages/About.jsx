import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Testimonials from "../components/Testimonials.jsx";
import Clients from "../components/Clients.jsx";
import CallToAction from "../components/CallToAction.jsx";
import { teamMembers, journeySteps, teamPhilosophy } from "../constants/index.js";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const heroRef = useRef(null);
    const journeyRef = useRef(null);

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

        // Journey sections animation
        const journeySections = journeyRef.current.querySelectorAll(".journey-step");
        journeySections.forEach((section) => {
            gsap.fromTo(
                section,
                { x: -100, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        end: "bottom 60%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    }, []);

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section ref={heroRef} className="about-hero">
                <div className="container mx-auto px-5 py-20 lg:py-32">
                    <h1 className="animate-in text-4xl lg:text-7xl font-bold text-white mb-6">
                        Bold, Creative, <span className="text-gradient">Human.</span>
                    </h1>
                    <p className="animate-in text-lg lg:text-xl text-dark-100 max-w-3xl">
                        At Figora, we blend design and purpose to build experiences that resonate.
                        We're a bunch of curious minds, pixel pushers, word nerds, and strategy
                        geeks who genuinely love what we do.
                    </p>
                </div>
            </section>

            {/* Journey Section */}
            <section ref={journeyRef} className="journey-section py-20">
                <div className="container mx-auto px-5">
                    <h2 className="text-3xl lg:text-5xl font-bold text-white mb-16 text-center">
                        Our <span className="text-gradient">JOURNEY</span>
                    </h2>
                    <p className="text-center text-dark-100 mb-16 max-w-2xl mx-auto">
                        From Humble Beginnings to Bold Ideas
                    </p>

                    <div className="journey-timeline">
                        {journeySteps.map((step, index) => (
                            <div
                                key={step.id}
                                className={`journey-step flex flex-col lg:flex-row gap-8 mb-20 ${
                                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                                }`}
                            >
                                <div className="flex-1">
                                    <h3 className="text-2xl lg:text-4xl font-bold text-white mb-4">
                                        {step.title}
                                    </h3>
                                    <p className="text-dark-100 text-lg">{step.description}</p>
                                </div>
                                <div className="flex-1">
                                    <div className="journey-image rounded-2xl overflow-hidden">
                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            className="w-full h-64 lg:h-80 object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Philosophy */}
            <section className="philosophy-section py-20 bg-dark-200/30">
                <div className="container mx-auto px-5">
                    <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 text-center">
                        Our Team <span className="text-gradient">PHILOSOPHY</span>
                    </h2>
                    <p className="text-center text-dark-100 mb-16 max-w-2xl mx-auto">
                        At Figora, our commitment to doing the right thing, working together,
                        and thinking differently drives everything we create.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teamPhilosophy.map((item) => (
                            <div
                                key={item.id}
                                className="philosophy-card bg-dark-200/50 rounded-2xl p-8 text-center hover:bg-dark-200 transition-all duration-300"
                            >
                                <div className="icon-wrapper mb-6 flex justify-center">
                                    <img src={item.icon} alt={item.title} className="w-16 h-16" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-dark-100">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section py-20">
                <div className="container mx-auto px-5">
                    <h2 className="text-3xl lg:text-5xl font-bold text-white mb-16 text-center">
                        MEET the <span className="text-gradient">Brains, Creatives & Builders</span>
                    </h2>

                    <div className="team-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member) => (
                            <div
                                key={member.id}
                                className="team-card group relative overflow-hidden rounded-2xl"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                                    <h4 className="text-white font-bold text-lg">{member.name}</h4>
                                    <p className="text-primary">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Careers Section */}
            <section id="careers" className="careers-section py-20 bg-dark-200/30">
                <div className="container mx-auto px-5 text-center">
                    <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                        Shape Your Future With <span className="text-gradient">FIGORA</span>
                    </h2>
                    <p className="text-dark-100 mb-10 max-w-2xl mx-auto">
                        Start Your Career with Figora
                    </p>
                    <a
                        href="mailto:careers@figora.com"
                        className="magnetic-btn inline-block bg-primary text-white py-4 px-10 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300"
                    >
                        SHOOT YOUR RESUME
                    </a>
                </div>
            </section>

            <Testimonials />
            <Clients />
            <CallToAction />
        </div>
    );
};

export default About;
