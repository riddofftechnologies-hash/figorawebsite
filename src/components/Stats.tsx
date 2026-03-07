import { stats } from '../data'

export default function Stats() {
  return (
    <section id="stats">
      <div className="stats-header reveal">
        <div>
          <span className="section-label">Achievement, Documented.</span>
          <h2 className="section-title">
            Numbers<br />
            <span className="grad-text">Don't Lie.</span>
          </h2>
        </div>
        <div>
          <p className="stats-sub">
            We Build Brands That Click. Delivering ROI-driven digital transformation by mastering
            the convergence of Design Systems, Emerging Tech, and Growth Marketing.
          </p>
        </div>
      </div>

      <div className="stats-grid reveal">
        {stats.map((stat) => (
          <div className="stat-item" key={stat.label}>
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
            <div className="stat-desc">{stat.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
