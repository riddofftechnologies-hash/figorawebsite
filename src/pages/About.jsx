import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
                <div className="container mx-auto px-5 py-12 lg:py-20">
                    <h1 className="animate-in text-4xl lg:text-7xl font-bold text-ash-black mb-6">
                        <span className="text-gradient">WHY FIGORA?</span>
                    </h1>
                    <p className="animate-in text-lg lg:text-xl text-dark-100 max-w-3xl">
                        From the visionary heart of Thrissur, we are a crew defined by confident action and unwavering aspiration. We don't just follow the pace of this fast-changing world; we anticipate it.
                    </p>
                </div>
            </section>

            {/* Journey Section */}
            <section ref={journeyRef} className="journey-section py-20">
                <div className="container mx-auto px-5">
                    <h2 className="text-3xl lg:text-5xl font-bold text-grey mb-3 text-center">
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
                                    <h3 className="text-2xl lg:text-4xl font-bold text-ash-black mb-4">
                                        {step.title}
                                    </h3>
                                    <p className="text-dark-100 text-lg">{step.description}</p>
                                </div>
                                <div className="flex-1">
                                    <div className="journey-image rounded-2xl overflow-hidden group">
                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Philosophy */}
            <section className="philosophy-section py-8 bg-slate-100/50">
                <div className="container mx-auto px-5">
                    <h2 className="text-3xl lg:text-5xl font-bold text-ash-black mb-3 text-center">
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
                                className="philosophy-card bg-white rounded-2xl p-8 text-center hover:bg-slate-50 transition-all duration-300 shadow-sm"
                            >
                                <div className="icon-wrapper mb-6 flex justify-center">
                                    <img src={item.icon} alt={item.title} className="w-24 h-24 cursor-default" />
                                </div>
                                <h3 className="text-xl font-bold text-gradient mb-3">{item.title}</h3>
                                <p className="text-dark-100">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section py-20">
                <div className="container mx-auto px-5">
                    <h2 className="text-3xl lg:text-5xl font-bold text-grey mb-16 text-center">
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
            <section id="careers" className="careers-section py-20 bg-slate-100/50">
                <div className="container mx-auto px-5 text-center">
                    <h2 className="text-3xl lg:text-5xl font-bold text-ash-black mb-6">
                        Shape Your Future With <span className="text-gradient">FIGORA</span>
                    </h2>
                    <p className="text-dark-100 mb-10 max-w-2xl mx-auto">
                        Start Your Career with Figora
                    </p>
                    <a
                        href="mailto:careers@figora.com"
                        className="magnetic-btn inline-block btn-gradient py-4 px-10 rounded-full font-semibold"
                    >
                        SHOOT YOUR RESUME
                    </a>
                </div>
            </section>

            <CallToAction />
        </div>
    );
};

export default About;
