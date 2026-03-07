import { works } from '../data'

export default function Works() {
  return (
    <section id="works">
      <div className="works-header reveal">
        <span className="section-label">Portfolio</span>
        <h2 className="section-title">
          Our Story<br />
          <span className="grad-text">Portfolio.</span>
        </h2>
      </div>

      <div className="works-grid reveal">
        {works.map((work) => (
          <div className="work-item" key={work.number}>
            <div className="work-number">{work.number}</div>
            <div className="work-info">
              <div className="work-type">{work.type}</div>
              <div className="work-name">{work.name}</div>
              <div className="work-desc">{work.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
