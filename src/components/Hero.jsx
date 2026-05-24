import { track } from '@vercel/analytics'

export default function Hero() {
  const smoothScroll = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="hero-grid" />
      <div className="hero-glow" />

      <div>
        <div className="hero-tag"><b>●</b>&nbsp;Global Freight &amp; Supply Chain</div>
        <h1 className="hero-title">
          Move the<br />world. <em>Faster</em>.
        </h1>
        <p className="hero-desc">
          End-to-end logistics for enterprises at global scale. Real-time tracking,
          intelligent routing, zero friction.
        </p>
        <div className="hero-actions">
          <a
            href="#contact"
            className="btn-primary"
            onClick={(e) => {
              smoothScroll(e, '#contact')
              track('cta_click', { location: 'hero', label: 'Start Shipping' })
            }}
          >
            Start Shipping
          </a>
          <a
            href="#services"
            className="btn-ghost"
            onClick={(e) => {
              smoothScroll(e, '#services')
              track('cta_click', { location: 'hero', label: 'Explore Services' })
            }}
          >
            Explore Services{' '}
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 7.5h9M8 3.5l4 4-4 4" />
            </svg>
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="globe-wrap">
          <svg className="globe-svg" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="200" r="178" fill="#0c0d10" stroke="rgba(200,240,77,.12)" strokeWidth="1" />
            <ellipse cx="200" cy="200" rx="178" ry="40" fill="none" stroke="rgba(255,255,255,.04)" strokeWidth="1" />
            <ellipse cx="200" cy="200" rx="178" ry="90" fill="none" stroke="rgba(255,255,255,.04)" strokeWidth="1" />
            <ellipse cx="200" cy="200" rx="178" ry="142" fill="none" stroke="rgba(255,255,255,.04)" strokeWidth="1" />
            <line x1="200" y1="22" x2="200" y2="378" stroke="rgba(255,255,255,.04)" strokeWidth="1" />
            <line x1="22" y1="200" x2="378" y2="200" stroke="rgba(255,255,255,.04)" strokeWidth="1" />
            <path d="M100 160 Q200 110 300 150" fill="none" stroke="rgba(200,240,77,.35)" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M90 240 Q180 270 290 230" fill="none" stroke="rgba(77,240,200,.25)" strokeWidth="1.5" strokeDasharray="3 5" />
            <path d="M140 290 Q230 230 320 265" fill="none" stroke="rgba(200,240,77,.18)" strokeWidth="1" strokeDasharray="5 4" />
            <circle cx="100" cy="160" r="4" fill="#c8f04d" opacity=".9" />
            <circle cx="300" cy="150" r="4" fill="#c8f04d" opacity=".9" />
            <circle cx="90" cy="240" r="3.5" fill="#4df0c8" opacity=".85" />
            <circle cx="290" cy="230" r="3.5" fill="#4df0c8" opacity=".85" />
            <circle cx="200" cy="190" r="5" fill="#c8f04d" />
            <circle cx="140" cy="290" r="3" fill="rgba(200,240,77,.5)" />
            <circle cx="320" cy="265" r="3" fill="rgba(200,240,77,.5)" />
            <circle cx="200" cy="200" r="190" fill="none" stroke="rgba(200,240,77,.05)" strokeWidth="1" strokeDasharray="7 7" />
          </svg>

          <div className="globe-center">
            <div className="globe-num">180+</div>
            <div className="globe-lbl">Countries Served</div>
          </div>

          <div className="float-card float-card-1">
            <div className="fc-label">Live Shipments</div>
            <div className="fc-value">48,291</div>
            <div className="fc-sub">↑ 12% from yesterday</div>
          </div>

          <div className="float-card float-card-2">
            <div className="fc-label">On-Time Rate</div>
            <div className="fc-value">99.4%</div>
            <div className="fc-sub">Last 30 days</div>
          </div>
        </div>
      </div>
    </section>
  )
}
