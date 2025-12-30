import { Link } from "react-router-dom";
import { projects } from "../constants/index.js";

const Works = () => {
    return (
        <section id="works" className="works-section py-20 lg:py-32">
            <div className="container mx-auto px-5">
                <div className="section-header mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-ash-black mb-6">
                        Our <span className="text-gradient">Works</span>
                    </h2>
                    <p className="text-dark-100 max-w-2xl text-lg">
                        Built for the Scroll. Engineered for Results. From startup makeovers to
                        enterprise growth, our portfolio is a mix of creativity, strategy and pure
                        ROI.
                    </p>
                </div>

                {/* Works Grid - Horizontal Scroll on Mobile */}
                <div className="works-grid flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 -mx-5 px-5 lg:mx-0 lg:px-0">
                    {projects.slice(0, 6).map((project) => (
                        <Link
                            key={project.id}
                            to={`/works/${project.slug}`}
                            className="work-card group min-w-[280px] lg:min-w-0 flex-shrink-0 rounded-2xl overflow-hidden bg-white hover:bg-slate-50 transition-all duration-300 shadow-sm"
                        >
                            <div className="image-wrapper overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 lg:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-5">
                                <h4 className="text-lg font-bold text-ash-black uppercase group-hover:text-primary transition-colors">
                                    {project.title}
                                </h4>
                                {project.subtitle && (
                                    <p className="text-dark-100 text-sm mt-1">{project.subtitle}</p>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        to="/works"
                        className="magnetic-btn inline-block btn-gradient-outline py-4 px-10 rounded-full font-semibold"
                    >
                        EXPLORE ALL OUR WORKS
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Works;
