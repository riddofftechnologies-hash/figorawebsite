import { blogPosts } from '../data'

export default function Blog() {
  return (
    <section id="blog">
      <div className="blog-header reveal">
        <span className="section-label">Insights &amp; Ideas</span>
        <h2 className="section-title">
          What We're<br />
          <span className="grad-text">Thinking.</span>
        </h2>
      </div>

      <div className="blog-grid reveal">
        {blogPosts.map((post) => (
          <div className="blog-card" key={post.title}>
            <div className={`blog-thumb ${post.thumbClass}`}>
              <span className="blog-thumb-emoji">{post.emoji}</span>
              <span className="blog-cat">{post.cat}</span>
            </div>
            <div className="blog-body">
              <div className="blog-date">{post.date}</div>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              <a href="#" className="blog-link">Read More →</a>
            </div>
          </div>
        ))}
      </div>

      <p className="blog-note">✦ New blog posts can be added to the grid above</p>
    </section>
  )
}
