import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Testimonials from "../components/Testimonials.jsx";
import CallToAction from "../components/CallToAction.jsx";
import { projects, projectCategories } from "../constants/index.js";

gsap.registerPlugin(ScrollTrigger);

const WorksPage = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [viewMode, setViewMode] = useState("portfolio"); // portfolio or casestudy
    const heroRef = useRef(null);
    const gridRef = useRef(null);

    const filteredProjects =
        activeCategory === "all"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

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
    }, []);

    useEffect(() => {
        // Animate project cards when filter changes
        const cards = gridRef.current.querySelectorAll(".project-card");
        gsap.fromTo(
            cards,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 0.6,
                ease: "power3.out",
            }
        );
    }, [activeCategory]);

    return (
        <div className="works-page">
            {/* Hero Section */}
            <section ref={heroRef} className="works-hero py-20 lg:py-32">
                <div className="container mx-auto px-5">
                    <h1 className="animate-in text-4xl lg:text-7xl font-bold text-white mb-6">
                        Showcasing Our Creative <span className="text-gradient">IMPACT</span>
                    </h1>
                    <p className="animate-in text-lg lg:text-xl text-dark-100 max-w-3xl">
                        Our portfolio reflects the passion, precision, and purpose we bring to
                        every project.
                    </p>
                </div>

                {/* Hero Images Slider */}
                <div className="animate-in hero-images-slider mt-12 flex gap-4 overflow-x-auto px-5 pb-4">
                    {projects.slice(0, 5).map((project) => (
                        <div
                            key={project.id}
                            className="hero-image-card min-w-[200px] lg:min-w-[280px] rounded-2xl overflow-hidden"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 lg:h-64 object-cover"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* View Mode Toggle */}
            <section className="py-10">
                <div className="container mx-auto px-5 flex justify-center gap-4">
                    <button
                        onClick={() => setViewMode("portfolio")}
                        className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                            viewMode === "portfolio"
                                ? "bg-primary text-white"
                                : "bg-dark-200/50 text-dark-100 hover:bg-dark-200"
                        }`}
                    >
                        PORTFOLIO
                    </button>
                    <button
                        onClick={() => setViewMode("casestudy")}
                        className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                            viewMode === "casestudy"
                                ? "bg-primary text-white"
                                : "bg-dark-200/50 text-dark-100 hover:bg-dark-200"
                        }`}
                    >
                        CASE STUDY
                    </button>
                </div>
            </section>

            {/* Category Filter */}
            <section className="category-filter py-10">
                <div className="container mx-auto px-5">
                    <div className="flex flex-wrap gap-4 justify-center">
                        <button
                            onClick={() => setActiveCategory("all")}
                            className={`category-btn px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                                activeCategory === "all"
                                    ? "bg-white text-black"
                                    : "bg-transparent border border-dark-100 text-dark-100 hover:border-white hover:text-white"
                            }`}
                        >
                            ALL
                        </button>
                        {projectCategories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.slug)}
                                className={`category-btn px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                                    activeCategory === category.slug
                                        ? "bg-white text-black"
                                        : "bg-transparent border border-dark-100 text-dark-100 hover:border-white hover:text-white"
                                }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="projects-grid py-10">
                <div className="container mx-auto px-5">
                    <h2 className="text-2xl lg:text-4xl font-bold text-white mb-10">
                        Explore Our Works!
                    </h2>

                    <div
                        ref={gridRef}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredProjects.map((project) => (
                            <Link
                                key={project.id}
                                to={`/works/${project.slug}`}
                                className="project-card group block rounded-2xl overflow-hidden bg-dark-200/30 hover:bg-dark-200/50 transition-all duration-300"
                            >
                                <div className="image-wrapper overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <h4 className="text-xl font-bold text-white uppercase group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h4>
                                    {project.subtitle && (
                                        <p className="text-dark-100 mt-2">{project.subtitle}</p>
                                    )}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Testimonials />
            <CallToAction />
        </div>
    );
};

export default WorksPage;
