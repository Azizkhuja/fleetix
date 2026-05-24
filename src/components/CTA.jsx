import { track } from '@vercel/analytics'

export default function CTA() {
  const smoothScroll = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="cta" id="contact">
      <div className="cta-glow" />
      <div className="section-label" style={{ justifyContent: 'center' }}>Get Started</div>
      <h2 className="cta-title">Ready to ship<br />smarter?</h2>
      <p className="cta-sub">Join 14,000+ enterprises already moving with Fleetix.</p>
      <div className="cta-actions">
        <a
          href="#"
          className="btn-primary"
          onClick={(e) => {
            e.preventDefault()
            track('cta_click', { location: 'bottom_cta', label: 'Request a Demo' })
          }}
        >
          Request a Demo
        </a>
        <a
          href="#"
          className="btn-outline"
          onClick={(e) => {
            e.preventDefault()
            track('cta_click', { location: 'bottom_cta', label: 'Talk to Sales' })
          }}
        >
          Talk to Sales
        </a>
      </div>
    </section>
  )
}
