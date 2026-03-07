export default function Resume() {
  return (
    <section id="resume">
      <div className="resume-inner">
        {/* Left — text */}
        <div className="reveal">
          <span className="section-label">Careers</span>
          <h2 className="section-title">
            Draft Your<br />
            <span className="grad-text">Next Chapter.</span>
          </h2>
          <p className="resume-desc">
            Start your career with Figora. We're always looking for bold thinkers,
            creative doers, and passionate marketers who want to grow alongside the
            brands we build.
          </p>
          <a
            href="mailto:careers@figora.in"
            className="resume-btn resume-apply"
          >
            📄 Draft Your Resume
          </a>
        </div>

        {/* Right — card */}
        <div className="resume-visual reveal">
          <div className="resume-card">
            <div className="resume-icon">📋</div>
            <div className="resume-card-title">Join The Crew</div>
            <p className="resume-card-sub">
              Shape your future with a team that's shaping brands.
            </p>
            <button
              className="resume-btn"
              onClick={() => { window.location.href = 'mailto:careers@figora.in' }}
            >
              Apply Now →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
