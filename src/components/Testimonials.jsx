import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { testimonials } from "../constants/index.js";

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef(null);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const slide = sliderRef.current.querySelector(".testimonial-slide.active");
        gsap.fromTo(
            slide,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
        );
    }, [activeIndex]);

    // Auto-play
    useEffect(() => {
        const interval = setInterval(nextSlide, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="testimonials" className="testimonials-section py-20 lg:py-32">
            <div className="container mx-auto px-5">
                <div className="flex justify-between items-center mb-16">
                    <div>
                        <h2 className="text-3xl lg:text-5xl font-bold text-ash-black">
                            What Our <span className="text-gradient">Partners</span>
                            <br />
                            Say
                        </h2>
                        <p className="text-dark-100 max-w-md mt-2">
                            Hear what our satisfied clients have to say about us.
                        </p>
                    </div>

                    <div className="nav-buttons flex gap-4">
                        <button
                            onClick={prevSlide}
                            className="nav-btn w-12 h-12 rounded-full bg-dark-200/50 flex items-center justify-center hover:bg-primary transition-colors"
                        >
                            <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="nav-btn w-12 h-12 rounded-full bg-dark-200/50 flex items-center justify-center hover:bg-primary transition-colors"
                        >
                            <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <div ref={sliderRef} className="testimonials-slider">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className={`testimonial-slide ${
                                index === activeIndex ? "active" : "hidden"
                            }`}
                        >
                            <div className="testimonial-card bg-white shadow-sm rounded-3xl p-8 lg:p-12">
                                <p className="text-ash-black text-lg lg:text-2xl leading-relaxed mb-8">
                                    "{testimonial.quote}"
                                </p>

                                <div className="flex items-center gap-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                    <div>
                                        <h4 className="text-ash-black font-bold text-lg">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-primary">
                                            {testimonial.role}, {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Dots */}
                    <div className="dots flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`dot w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === activeIndex
                                        ? "bg-primary w-8"
                                        : "bg-slate-300 hover:bg-slate-400"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
