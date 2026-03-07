import { services } from '../data'

export default function Services() {
  return (
    <section id="services">
      <div className="services-header reveal">
        <span className="section-label">Our Solutions Portfolio</span>
        <h2 className="section-title">
          What We<br />
          <span className="grad-text">Do Best.</span>
        </h2>
      </div>

      <div className="services-grid reveal">
        {services.map((svc) => (
          <div className="service-card" key={svc.name}>
            <div className="service-icon">{svc.icon}</div>
            <div className="service-name">{svc.name}</div>
            <div className="service-desc">{svc.desc}</div>
            <span className="service-tag">{svc.tag}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
