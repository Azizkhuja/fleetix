import { useReveal } from '../hooks/useReveal'
import { track } from '@vercel/analytics'

const SERVICES = [
  {
    num: '01', title: 'Air Freight',
    desc: 'Express and standard air cargo with priority handling, dangerous goods certification, and charter options.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.72 12 19.79 19.79 0 0 1 1.65 3.42 2 2 0 0 1 3.62 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
  },
  {
    num: '02', title: 'Road Transport',
    desc: 'FTL, LTL, and multi-modal across 65+ countries. Temperature-controlled and hazmat certified fleets.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="3" width="15" height="13" rx="1" /><path d="M16 8h4l3 3v5h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>
  },
  {
    num: '03', title: 'Ocean Freight',
    desc: 'FCL and LCL container shipping with live vessel tracking, port handling, and bonded warehousing.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" /></svg>
  },
  {
    num: '04', title: 'Warehousing',
    desc: 'Fulfillment centers across 6 continents. WMS-integrated, pick-and-pack, cross-docking, returns management.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
  },
  {
    num: '05', title: 'Real-Time Tracking',
    desc: 'Unified visibility across all modes. Live GPS, ETA predictions, exception alerts, and API-first TMS integration.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
  },
  {
    num: '06', title: 'Customs & Compliance',
    desc: 'In-house brokerage in 40+ markets. Automated tariff classification and trade compliance management.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
  },
]

export default function Services() {
  const ref = useReveal()

  return (
    <section id="services" ref={ref}>
      <div className="services-header reveal">
        <div>
          <div className="section-label">What We Offer</div>
          <h2 className="section-title">Built for global<br />commerce.</h2>
        </div>
        <p className="section-desc">
          From factory floor to final destination — every leg of the journey engineered
          for precision, speed, and visibility.
        </p>
      </div>
      <div className="services-grid reveal">
        {SERVICES.map((svc) => (
          <div
            className="svc"
            key={svc.num}
            onClick={() => track('service_click', { service: svc.title })}
          >
            <span className="svc-num">{svc.num}</span>
            <div className="svc-icon">{svc.icon}</div>
            <div className="svc-title">{svc.title}</div>
            <div className="svc-desc">{svc.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
