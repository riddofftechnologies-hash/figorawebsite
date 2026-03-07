import { crew } from '../data'

export default function About() {
  return (
    <section id="about">
      <div className="about-inner">
        {/* Left column — text */}
        <div className="about-text reveal">
          <span className="section-label">Why Figora?</span>
          <h2 className="section-title">
            Built<br />
            <span className="grad-text">Different.</span>
          </h2>
          <div className="about-desc">
            <p>
              From the visionary heart of Thrissur, we are a crew defined by confident
              action and unwavering aspiration. We don't just follow the pace of this
              fast-changing world; we anticipate it.
            </p>
            <p>
              Our strength lies in a unified, innovative perspective — we are dedicated
              dreamers who see growth not as a goal, but as a reciprocal journey. Our
              commitment to our team's brilliance is the foundation of the promise we
              extend to you: a guarantee of transformative impact.
            </p>
            <p>
              We expertly visualize success, understanding that the only measure of our
              growth is the unfolding excellence of your own brand's story.
            </p>
          </div>
        </div>

        {/* Right column — crew grid */}
        <div className="reveal">
          <p className="section-label">Our Crew</p>
          <div className="crew-grid">
            {crew.map((member) => (
              <div className="crew-card" key={member.name}>
                <div className="crew-avatar">
                  {member.emoji}
                </div>
                <div className="crew-name">{member.name}</div>
                <div className="crew-role">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
