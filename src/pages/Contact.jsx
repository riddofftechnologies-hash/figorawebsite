import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { services, faqs } from "../constants/index.js";

const Contact = () => {
    const heroRef = useRef(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "",
        message: "",
    });
    const [openFaq, setOpenFaq] = useState(null);

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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add form submission logic here
    };

    const toggleFaq = (id) => {
        setOpenFaq(openFaq === id ? null : id);
    };

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section ref={heroRef} className="contact-hero py-20 lg:py-32">
                <div className="container mx-auto px-5">
                    <h1 className="animate-in text-4xl lg:text-7xl font-bold text-white mb-6">
                        Take the First Step,
                        <br />
                        Let's <span className="text-gradient">TALK!</span>
                    </h1>
                    <p className="animate-in text-lg lg:text-xl text-dark-100 max-w-3xl">
                        We'd love to hear about your ideas, projects, or challenges.
                    </p>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="contact-form-section py-20">
                <div className="container mx-auto px-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Interactive Form */}
                        <div className="form-wrapper">
                            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-10">
                                COMPLETE THIS..
                            </h2>

                            <form onSubmit={handleSubmit} className="contact-form space-y-8">
                                <div className="form-group">
                                    <label className="text-dark-100 mb-2 block">My name is</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        className="w-full bg-transparent border-b-2 border-dark-200 text-white py-3 px-0 focus:outline-none focus:border-primary transition-colors text-xl"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="text-dark-100 mb-2 block">
                                        You can contact me at
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your@email.com"
                                        className="w-full bg-transparent border-b-2 border-dark-200 text-white py-3 px-0 focus:outline-none focus:border-primary transition-colors text-xl"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="text-dark-100 mb-2 block">
                                        I am looking for service
                                    </label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b-2 border-dark-200 text-white py-3 px-0 focus:outline-none focus:border-primary transition-colors text-xl cursor-pointer"
                                        required
                                    >
                                        <option value="" className="bg-black">
                                            Select a Service
                                        </option>
                                        {services.map((service) => (
                                            <option
                                                key={service.id}
                                                value={service.slug}
                                                className="bg-black"
                                            >
                                                {service.title}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="text-dark-100 mb-2 block">
                                        I would like to share more about my project
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your project..."
                                        rows="4"
                                        className="w-full bg-transparent border-b-2 border-dark-200 text-white py-3 px-0 focus:outline-none focus:border-primary transition-colors text-xl resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="magnetic-btn bg-primary text-white py-4 px-10 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    SEND MESSAGE
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="contact-info space-y-10">
                            <div className="info-card">
                                <h3 className="text-xl font-bold text-white mb-3">SEND A MESSAGE</h3>
                                <a
                                    href="mailto:hello@figora.com"
                                    className="text-primary text-lg hover:underline"
                                >
                                    hello@figora.com
                                </a>
                            </div>

                            <div className="info-card">
                                <h3 className="text-xl font-bold text-white mb-3">CALL US</h3>
                                <a
                                    href="tel:+971549910555"
                                    className="text-primary text-lg hover:underline"
                                >
                                    +971 54 991 0555
                                </a>
                            </div>

                            <div className="info-card">
                                <h3 className="text-xl font-bold text-white mb-3">VISIT US</h3>
                                <p className="text-dark-100">
                                    Figora Digital Agency
                                    <br />
                                    Business Bay, Dubai, UAE
                                </p>
                            </div>

                            <div className="info-card">
                                <h3 className="text-xl font-bold text-white mb-3">LET'S CONNECT!</h3>
                                <div className="social-links flex gap-4 mt-4">
                                    <a
                                        href="https://linkedin.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-icon w-12 h-12 rounded-full bg-dark-200/50 flex items-center justify-center hover:bg-primary transition-colors"
                                    >
                                        <svg
                                            className="w-5 h-5 text-white"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-icon w-12 h-12 rounded-full bg-dark-200/50 flex items-center justify-center hover:bg-primary transition-colors"
                                    >
                                        <svg
                                            className="w-5 h-5 text-white"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section py-20 bg-dark-200/30">
                <div className="container mx-auto px-5">
                    <h2 className="text-3xl lg:text-5xl font-bold text-white mb-16 text-center">
                        FREQUENTLY <span className="text-gradient">Asked Questions!</span>
                    </h2>

                    <div className="faq-list max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq) => (
                            <div
                                key={faq.id}
                                className="faq-item border border-dark-200/50 rounded-xl overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFaq(faq.id)}
                                    className="faq-question w-full flex justify-between items-center p-6 text-left hover:bg-dark-200/30 transition-colors"
                                >
                                    <span className="text-white font-semibold text-lg">
                                        {faq.question}
                                    </span>
                                    <span
                                        className={`transform transition-transform duration-300 ${
                                            openFaq === faq.id ? "rotate-180" : ""
                                        }`}
                                    >
                                        <svg
                                            className="w-6 h-6 text-primary"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </span>
                                </button>
                                <div
                                    className={`faq-answer overflow-hidden transition-all duration-300 ${
                                        openFaq === faq.id ? "max-h-96 pb-6" : "max-h-0"
                                    }`}
                                >
                                    <p className="px-6 text-dark-100">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
