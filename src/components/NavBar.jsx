import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header>
            <nav>
                <Link to="/" className="logo">
                    <img src="/logo.svg" alt="Figora logo" />
                </Link>

                {/* Desktop Navigation */}
                <ul className="desktop-nav">
                    {navLinks.map(({ label, path }) => (
                        <li key={label}>
                            <Link
                                to={path}
                                className={location.pathname === path ? "active" : ""}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Contact CTA */}
                <div className="nav-cta hidden lg:flex items-center gap-4">
                    <Link
                        to="/contact-us"
                        className="magnetic-btn bg-primary text-white py-2 px-6 rounded-full font-semibold text-sm hover:bg-white hover:text-black transition-all duration-300"
                    >
                        CONTACT US
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn lg:hidden flex flex-col gap-1.5 p-2"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span
                        className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
                            isMenuOpen ? "rotate-45 translate-y-2" : ""
                        }`}
                    />
                    <span
                        className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${
                            isMenuOpen ? "opacity-0" : ""
                        }`}
                    />
                    <span
                        className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
                            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                        }`}
                    />
                </button>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`mobile-menu lg:hidden fixed inset-0 top-[7vh] bg-black/95 backdrop-blur-lg z-40 transition-all duration-500 ${
                    isMenuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                }`}
            >
                <ul className="flex flex-col items-center justify-center h-full gap-8">
                    {navLinks.map(({ label, path }) => (
                        <li key={label}>
                            <Link
                                to={path}
                                onClick={() => setIsMenuOpen(false)}
                                className={`text-2xl font-semibold transition-colors ${
                                    location.pathname === path
                                        ? "text-primary"
                                        : "text-white hover:text-primary"
                                }`}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                    <li className="mt-8">
                        <Link
                            to="/contact-us"
                            onClick={() => setIsMenuOpen(false)}
                            className="bg-primary text-white py-3 px-8 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300"
                        >
                            CONTACT US
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default NavBar;
