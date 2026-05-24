import { useReveal } from '../hooks/useReveal'

const TESTIMONIALS = [
  {
    quote: "Fleetix cut our transpacific transit times by 22% and gave us the visibility our supply chain was desperately missing. It's the backbone of our operations now.",
    initials: 'SR',
    name: 'Sarah Reinhardt',
    role: 'VP Supply Chain, Apex Manufacturing',
  },
  {
    quote: "The API integration took less than a day. Real-time shipment data now flows directly into our ERP — a complete game-changer for our operations team.",
    initials: 'MK',
    name: 'Marcus Kim',
    role: 'CTO, Volta Electronics',
  },
  {
    quote: "We ship pharmaceutical products demanding absolute precision. Fleetix's cold chain compliance has been flawless across 3 years and 12,000+ shipments.",
    initials: 'AL',
    name: 'Amara Laurent',
    role: 'Head of Logistics, BioNordic AG',
  },
]

export default function Testimonials() {
  const ref = useReveal()

  return (
    <section className="testi-bg" id="clients" ref={ref}>
      <div className="section-label reveal">Client Stories</div>
      <h2 className="section-title reveal">Trusted by industry<br />leaders.</h2>
      <div className="testi-grid reveal">
        {TESTIMONIALS.map((t) => (
          <div className="testi-card" key={t.initials}>
            <div className="testi-qm">"</div>
            <p className="testi-q">{t.quote}</p>
            <div className="testi-author">
              <div className="author-av">{t.initials}</div>
              <div>
                <div className="author-name">{t.name}</div>
                <div className="author-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
