export default function Hero() {
  const scrollToConsultation = () => {
    document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />

      <div className="hero-content">
        <p className="hero-eyebrow">Premier Digital Marketing Partner — Thrissur, India</p>

        <h1>
          <span className="kinetic-line">
            <span className="kinetic-word k1">MARKETING</span>
          </span>
          <span className="kinetic-line">
            <span className="kinetic-word k2">IS</span>
            &nbsp;
            <span className="kinetic-word k3">CLARITY</span>
          </span>
          <span className="kinetic-line">
            <span className="kinetic-word k4">CONVERSION</span>
          </span>
          <span className="kinetic-line">
            <span className="kinetic-word k5">&amp;</span>
            &nbsp;
            <span className="kinetic-word k6">CAPITAL</span>
          </span>
        </h1>

        <p className="hero-desc">
          As Your Premier Digital Marketing Partner, we deliver high ROI SEO services,
          powerful branding solutions, and content strategy that converts prospects into buyers.
        </p>

        <div className="hero-cta-group">
          <a href="#consultation" className="btn-primary">Get a Free Consultation</a>
          <a href="#works" className="btn-ghost">
            <span>View Our Work</span>
            <span>→</span>
          </a>
        </div>

        <div className="contact-icon-wrap">
          <div className="contact-pulse" onClick={scrollToConsultation}>💬</div>
          <span className="contact-caption">Say Hello!</span>
        </div>
      </div>
    </section>
  )
}
