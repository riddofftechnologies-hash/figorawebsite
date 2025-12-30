import { Link } from "react-router-dom";
import { footerLinks, quickLinks, services } from "../constants/index.js";

const Footer = () => {
    return (
        <footer className="bg-black pt-20 pb-8">
            <div className="container mx-auto px-5">
                {/* Footer Top */}
                <div className="footer-top grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="brand-col">
                        <Link to="/">
                            <img src="/logo.svg" alt="Figora logo" className="h-10 mb-6" />
                        </Link>
                        <p className="text-dark-100 mb-6">
                            Design with Intent,
                            <br />
                            Marketing for Impact
                        </p>
                        <div className="social-links flex gap-4">
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon w-10 h-10 rounded-full bg-dark-200/50 flex items-center justify-center hover:bg-primary transition-colors"
                            >
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon w-10 h-10 rounded-full bg-dark-200/50 flex items-center justify-center hover:bg-primary transition-colors"
                            >
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="links-col">
                        <h4 className="text-white font-bold text-lg mb-6">QUICK LINKS</h4>
                        <ul className="space-y-3">
                            {quickLinks.map(({ label, link }) => (
                                <li key={label}>
                                    <Link
                                        to={link}
                                        className="text-dark-100 hover:text-primary transition-colors"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="services-col">
                        <h4 className="text-white font-bold text-lg mb-6">OUR SERVICES</h4>
                        <ul className="space-y-3">
                            {services.slice(0, 5).map((service) => (
                                <li key={service.id}>
                                    <Link
                                        to={`/services/${service.slug}`}
                                        className="text-dark-100 hover:text-primary transition-colors"
                                    >
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="contact-col">
                        <h4 className="text-white font-bold text-lg mb-6">CONTACT</h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="tel:+971549910555"
                                    className="text-dark-100 hover:text-primary transition-colors"
                                >
                                    +971 54 991 0555
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:hello@figora.com"
                                    className="text-dark-100 hover:text-primary transition-colors"
                                >
                                    hello@figora.com
                                </a>
                            </li>
                            <li className="text-dark-100">
                                Figora Digital Agency,
                                <br />
                                Business Bay, Dubai, UAE
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="border-dark-200/30 mb-8" />

                {/* Footer Bottom */}
                <div className="footer-bottom flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-dark-100 text-sm">
                        ©{new Date().getFullYear()} FIGORA - All rights reserved
                    </p>

                    <ul className="flex gap-6">
                        {footerLinks.map(({ label, link }) => (
                            <li key={label}>
                                <Link
                                    to={link}
                                    className="text-dark-100 text-sm hover:text-primary transition-colors"
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
