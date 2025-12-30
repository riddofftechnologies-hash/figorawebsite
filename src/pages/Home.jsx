import Hero from "../components/Hero.jsx";
import ProductViewer from "../components/ProductViewer.jsx";
import Showcase from "../components/Showcase.jsx";
import Performance from "../components/Performance.jsx";
import Features from "../components/Features.jsx";
import Highlights from "../components/Highlights.jsx";
import Solutions from "../components/Solutions.jsx";
import Clients from "../components/Clients.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Works from "../components/Works.jsx";
import BlogPreview from "../components/BlogPreview.jsx";
import CallToAction from "../components/CallToAction.jsx";

const Home = () => {
    return (
        <>
            <Hero />
            <ProductViewer />
            <Showcase />
            <Performance />
            <Solutions />
            <Features />
            <Highlights />
            <Clients />
            <Testimonials />
            <Works />
            <BlogPreview />
            <CallToAction />
        </>
    );
};

export default Home;
