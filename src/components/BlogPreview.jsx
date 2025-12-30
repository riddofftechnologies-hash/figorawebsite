import { Link } from "react-router-dom";
import { blogPosts } from "../constants/index.js";

const BlogPreview = () => {
    return (
        <section id="blog-preview" className="blog-preview-section py-20">
            <div className="container mx-auto px-5">
                <div className="section-header mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                        Featured <span className="text-gradient">BLOGS</span>
                    </h2>
                </div>

                <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.slice(0, 3).map((post) => (
                        <Link
                            key={post.id}
                            to={`/ideas/${post.slug}`}
                            className="blog-card group block rounded-2xl overflow-hidden bg-dark-200/30 hover:bg-dark-200/50 transition-all duration-300"
                        >
                            <div className="image-wrapper overflow-hidden relative">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <span className="category-badge absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">
                                    {post.categoryLabel}
                                </span>
                            </div>
                            <div className="p-6">
                                <h4 className="text-lg font-bold text-white uppercase group-hover:text-primary transition-colors line-clamp-2">
                                    {post.title}
                                </h4>
                                <span className="text-primary font-semibold text-sm mt-4 inline-block group-hover:underline">
                                    Read More →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        to="/ideas"
                        className="magnetic-btn inline-block bg-transparent border-2 border-white text-white py-4 px-10 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300"
                    >
                        EXPLORE ALL BLOGS
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BlogPreview;
