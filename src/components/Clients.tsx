import { clients } from '../data'

export default function Clients() {
  // Duplicate for seamless infinite loop
  const allClients = [...clients, ...clients]

  return (
    <section id="clients">
      <div className="clients-header reveal">
        <span className="section-label">Our Clientele</span>
        <h2 className="section-title">
          The Stories<br />
          <span className="grad-text">We Tell.</span>
        </h2>
      </div>

      <div className="clients-scroll-outer">
        <div className="clients-scroll">
          {allClients.map((name, i) => (
            <div className="client-item" key={i}>{name}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
