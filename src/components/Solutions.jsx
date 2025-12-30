import { Link } from "react-router-dom";
import { services } from "../constants/index.js";

const Solutions = () => {
    return (
        <section id="solutions" className="solutions-section py-20 lg:py-32">
            <div className="container mx-auto px-5">
                <div className="section-header mb-16">
                    <h2 className="text-3xl lg:text-6xl font-bold text-white mb-6">
                        SOLUTIONS <span className="text-gradient">We Provide</span>
                    </h2>
                    <p className="text-dark-100 max-w-2xl text-lg">
                        Explore what we do and how we do it differently. At Figora, we don't just
                        deliver services, we solve problems with intent and creativity.
                    </p>
                </div>

                <div className="solutions-grid">
                    {services.slice(0, 7).map((service, index) => (
                        <Link
                            key={service.id}
                            to={`/services/${service.slug}`}
                            className="solution-card group flex flex-col lg:flex-row items-center gap-6 py-8 border-b border-dark-200/50 hover:bg-dark-200/20 px-4 rounded-lg transition-all duration-300"
                        >
                            <span className="solution-number text-primary font-bold text-xl lg:text-2xl min-w-[60px]">
                                {String(index + 1).padStart(2, "0")}.
                            </span>
                            <div className="flex-1">
                                <h3 className="text-xl lg:text-3xl font-bold text-white uppercase group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                            </div>
                            <div className="solution-image w-full lg:w-32 h-20 rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        to="/services"
                        className="magnetic-btn inline-block bg-primary text-white py-4 px-10 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300"
                    >
                        EXPLORE ALL SERVICES
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Solutions;
