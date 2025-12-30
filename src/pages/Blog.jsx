import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { blogPosts, blogCategories } from "../constants/index.js";
import CallToAction from "../components/CallToAction.jsx";

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const heroRef = useRef(null);
    const gridRef = useRef(null);

    const filteredPosts =
        activeCategory === "all"
            ? blogPosts
            : blogPosts.filter((p) => p.category === activeCategory);

    useEffect(() => {
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
        const cards = gridRef.current.querySelectorAll(".blog-card");
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
        <div className="blog-page">
            {/* Hero Section */}
            <section ref={heroRef} className="blog-hero py-20 lg:py-32">
                <div className="container mx-auto px-5">
                    <h1 className="animate-in text-4xl lg:text-7xl font-bold text-white mb-6">
                        Ideas & <span className="text-gradient">Insights</span>
                    </h1>
                    <p className="animate-in text-lg lg:text-xl text-dark-100 max-w-3xl">
                        Industry insights, tips, and thoughts from our team of digital experts.
                    </p>
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
                        {blogCategories.map((category) => (
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

            {/* Blog Grid */}
            <section className="blog-grid py-10">
                <div className="container mx-auto px-5">
                    <div
                        ref={gridRef}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredPosts.map((post) => (
                            <Link
                                key={post.id}
                                to={`/ideas/${post.slug}`}
                                className="blog-card group block rounded-2xl overflow-hidden bg-dark-200/30 hover:bg-dark-200/50 transition-all duration-300"
                            >
                                <div className="image-wrapper overflow-hidden relative">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <span className="category-badge absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">
                                        {post.categoryLabel}
                                    </span>
                                </div>
                                <div className="p-6">
                                    <h4 className="text-xl font-bold text-white uppercase group-hover:text-primary transition-colors line-clamp-2">
                                        {post.title}
                                    </h4>
                                    <p className="text-dark-100 mt-3 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-dark-200/50">
                                        <span className="text-sm text-dark-100">{post.date}</span>
                                        <span className="text-primary font-semibold text-sm group-hover:underline">
                                            Read More →
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <CallToAction />
        </div>
    );
};

export default Blog;
