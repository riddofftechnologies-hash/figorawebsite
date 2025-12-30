import { Link } from "react-router-dom";
import { footerLinks, quickLinks, services } from "../constants/index.js";

const Footer = () => {
    return (
        <footer className="bg-slate-50 pt-10 pb-8">
            <div className="w-full mx-auto px-8 lg:px-16">
                {/* Footer Top */}
                <div className="footer-top grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {/* Brand Column */}
                    <div className="brand-col">
                        <Link to="/">
                            <img src="/fig.svg" alt="Figora logo" className="h-10 mb-6" />
                        </Link>
                        <p className="text-dark-100 mb-6">
                            Design with Intent,
                            <br />
                            Marketing for Impact
                        </p>
                        <div className="social-links flex gap-4">
                                                        <a
                                                            href="https://wa.me/"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="social-icon w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center transition-all duration-300 hover:bg-primary hover:scale-110 hover:shadow-lg"
                                                        >
                                                            <svg className="w-5 h-5 text-ash-black" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 012.1 12.045c0-5.455 4.436-9.89 9.892-9.89 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.902 6.991c-.003 5.455-4.438 9.89-9.893 9.89zm8.413-18.303A11.815 11.815 0 0011.993 0C5.373 0 0 5.373 0 12.045c0 2.124.555 4.199 1.607 6.032L.057 24l6.084-1.6a11.89 11.89 0 005.91 1.507h.005c6.62 0 11.998-5.373 11.998-12.045a11.89 11.89 0 00-3.509-8.486z"/>
                                                            </svg>
                                                        </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center transition-all duration-300 hover:bg-primary hover:scale-110 hover:shadow-lg"
                            >
                                <svg className="w-5 h-5 text-ash-black" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center transition-all duration-300 hover:bg-primary hover:scale-110 hover:shadow-lg"
                            >
                                <svg className="w-5 h-5 text-ash-black" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="links-col">
                        <h4 className="text-ash-black font-bold text-lg mb-1">QUICK LINKS</h4>
                        <ul className="space-y-3">
                            {quickLinks.map(({ label, link }) => (
                                <li key={label}>
                                    <Link
                                        to={link}
                                        className="text-dark-100 transition-all duration-300 hover:text-primary hover:scale-105 hover:underline"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="services-col">
                        <h4 className="text-ash-black font-bold text-lg mb-1">OUR SERVICES</h4>
                        <ul className="space-y-3">
                            {services.slice(0, 5).map((service) => (
                                <li key={service.id}>
                                    <Link
                                        to={`/services/${service.slug}`}
                                        className="text-dark-100 transition-all duration-300 hover:text-primary hover:scale-105 hover:underline"
                                    >
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="contact-col">
                        <h4 className="text-ash-black font-bold text-lg mb-1">CONTACT</h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="tel:+971549910555"
                                    className="text-dark-100 transition-all duration-300 hover:text-primary hover:scale-105 hover:underline"
                                >
                                    +91 8891182030
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:hello@figora.com"
                                    className="text-dark-100 transition-all duration-300 hover:text-primary hover:scale-105 hover:underline"
                                >
                                    hello@figora.com
                                </a>
                            </li>
                            <li className="text-dark-100">
                                Figora Digital Agency,
                                <br />
                                Thrissur, Kerala
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="border-slate-200 mb-8" />

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
                                    className="text-dark-100 text-sm transition-all duration-300 hover:text-primary hover:scale-105 hover:underline"
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
