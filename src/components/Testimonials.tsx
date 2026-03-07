import { testimonials } from '../data'

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="testimonials-header reveal">
        <span className="section-label">What Our Partners Say</span>
        <h2 className="section-title">
          Real Words,<br />
          <span className="grad-text">Real Results.</span>
        </h2>
      </div>

      <div className="testimonials-container reveal">
        {testimonials.map((t) => (
          <div className="testimonial-card" key={t.name}>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-author">
              <div className="author-avatar">{t.initials}</div>
              <div>
                <div className="author-name">{t.name}</div>
                <div className="author-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="testimonials-note">✦ New testimonials can be added to the grid above</p>
    </section>
  )
}
