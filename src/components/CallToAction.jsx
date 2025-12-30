import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CallToAction = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;

        gsap.fromTo(
            section.querySelectorAll(".animate-cta"),
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 0.8,
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    return (
        <section
            ref={sectionRef}
            id="cta"
            className="cta-section py-20 lg:py-32 relative overflow-hidden"
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-500/20 pointer-events-none" />

            <div className="container mx-auto px-5 relative z-10">
                <div className="cta-content text-center max-w-4xl mx-auto">
                    <h2 className="animate-cta text-3xl lg:text-6xl font-bold text-white mb-6">
                        What's Your
                        <br />
                        Brand's <span className="text-gradient">NEXT STEP?</span>
                    </h2>

                    <p className="animate-cta text-dark-100 text-lg lg:text-xl mb-10 max-w-2xl mx-auto">
                        Great brands don't just happen, they are built with intent. Let's create
                        yours.
                    </p>

                    <Link
                        to="/contact"
                        className="animate-cta magnetic-btn inline-block bg-primary text-white py-4 px-12 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300"
                    >
                        LET'S GET STARTED
                    </Link>
                </div>

                {/* Decorative Elements */}
                <div className="decorative-shapes absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="shape-1 absolute top-10 left-10 w-20 h-20 rounded-full bg-primary/10 blur-xl" />
                    <div className="shape-2 absolute bottom-10 right-10 w-32 h-32 rounded-full bg-purple-500/10 blur-xl" />
                    <div className="shape-3 absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-primary/5 blur-lg" />
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
