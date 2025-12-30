import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";

// Layout Components
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

// Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import WorksPage from "./pages/WorksPage.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
    const location = useLocation();

    // Smooth scroll with Lenis
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Update ScrollTrigger on Lenis scroll
        lenis.on("scroll", ScrollTrigger.update);

        return () => {
            lenis.destroy();
        };
    }, []);

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <main>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:slug" element={<Services />} />
                <Route path="/works" element={<WorksPage />} />
                <Route path="/works/:slug" element={<WorksPage />} />
                <Route path="/ideas" element={<Blog />} />
                <Route path="/ideas/:slug" element={<Blog />} />
                <Route path="/contact-us" element={<Contact />} />
            </Routes>
            <Footer />
        </main>
    );
};

export default App;
