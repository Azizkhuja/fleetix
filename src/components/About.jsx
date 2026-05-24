import { useReveal } from '../hooks/useReveal'

const CheckIcon = () => (
  <div className="check">
    <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="1.5,5 4,7.5 8.5,2" />
    </svg>
  </div>
)

const FEATURES = [
  {
    title: 'AI-Powered Route Optimization',
    desc: '200+ variables analyzed in real time to find the fastest, most cost-effective route.',
  },
  {
    title: '24/7 Control Tower',
    desc: 'Dedicated ops team monitoring every shipment, proactively resolving exceptions before they impact delivery.',
  },
  {
    title: 'ISO 9001 & GDP Certified',
    desc: 'Full compliance across pharma, food & beverage, automotive, and high-tech industries.',
  },
  {
    title: 'Carbon-Neutral by 2027',
    desc: 'Electric fleets, SAF partnerships, and verified carbon offsets on every shipment.',
  },
]

export default function About() {
  const ref = useReveal()

  return (
    <div className="about" id="about" ref={ref}>
      <div className="about-inner">
        <div className="about-content reveal">
          <div className="section-label">Why Fleetix</div>
          <h2 className="section-title">Infrastructure that<br />never sleeps.</h2>
          <ul className="about-list">
            {FEATURES.map((f) => (
              <li key={f.title}>
                <CheckIcon />
                <div>
                  <strong>{f.title}</strong>
                  {f.desc}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="about-visual">
          <svg className="route-svg" viewBox="0 0 360 460" xmlns="http://www.w3.org/2000/svg">
            <pattern id="g" width="28" height="28" patternUnits="userSpaceOnUse">
              <path d="M28 0L0 0 0 28" fill="none" stroke="rgba(255,255,255,.025)" strokeWidth="1" />
            </pattern>
            <rect width="360" height="460" fill="url(#g)" />
            <line x1="86" y1="114" x2="188" y2="186" stroke="rgba(200,240,77,.12)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="188" y1="186" x2="286" y2="136" stroke="rgba(200,240,77,.12)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="188" y1="186" x2="146" y2="286" stroke="rgba(77,240,200,.12)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="146" y1="286" x2="258" y2="328" stroke="rgba(77,240,200,.12)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="54" y1="228" x2="146" y2="286" stroke="rgba(200,240,77,.08)" strokeWidth="1" />
            <line x1="316" y1="238" x2="258" y2="328" stroke="rgba(200,240,77,.08)" strokeWidth="1" />
            <line x1="258" y1="328" x2="188" y2="386" stroke="rgba(77,240,200,.08)" strokeWidth="1" />
            <line x1="86" y1="114" x2="188" y2="186" stroke="rgba(200,240,77,.55)" strokeWidth="1.5" strokeDasharray="4 60">
              <animate attributeName="stroke-dashoffset" values="0;-64" dur="2s" repeatCount="indefinite" />
            </line>
            <line x1="188" y1="186" x2="146" y2="286" stroke="rgba(77,240,200,.45)" strokeWidth="1.5" strokeDasharray="4 60">
              <animate attributeName="stroke-dashoffset" values="10;-54" dur="2.4s" repeatCount="indefinite" />
            </line>
            <circle cx="188" cy="186" r="20" fill="rgba(200,240,77,.06)" />
            <circle cx="188" cy="186" r="7" fill="#c8f04d" opacity=".9" />
            <circle cx="188" cy="186" r="12" fill="none" stroke="rgba(200,240,77,.25)" strokeWidth="1" />
            <circle cx="86" cy="114" r="4" fill="#4df0c8" />
            <circle cx="286" cy="136" r="4" fill="#4df0c8" />
            <circle cx="146" cy="286" r="4" fill="#c8f04d" opacity=".7" />
            <circle cx="258" cy="328" r="4" fill="#c8f04d" opacity=".7" />
            <circle cx="54" cy="228" r="3" fill="rgba(200,240,77,.4)" />
            <circle cx="316" cy="238" r="3" fill="rgba(200,240,77,.4)" />
            <circle cx="188" cy="386" r="3" fill="rgba(77,240,200,.4)" />
            <text x="52" y="107" fill="rgba(255,255,255,.33)" fontSize="8" fontFamily="DM Sans" letterSpacing="1">NEW YORK</text>
            <text x="284" y="128" fill="rgba(255,255,255,.33)" fontSize="8" fontFamily="DM Sans" letterSpacing="1">LONDON</text>
            <text x="178" y="180" fill="rgba(200,240,77,.72)" fontSize="8" fontFamily="DM Sans" letterSpacing="1">HUB</text>
            <text x="106" y="302" fill="rgba(255,255,255,.33)" fontSize="8" fontFamily="DM Sans" letterSpacing="1">DUBAI</text>
            <text x="260" y="346" fill="rgba(255,255,255,.33)" fontSize="8" fontFamily="DM Sans" letterSpacing="1">SINGAPORE</text>
            <text x="24" y="246" fill="rgba(255,255,255,.22)" fontSize="8" fontFamily="DM Sans" letterSpacing="1">CHICAGO</text>
            <text x="302" y="258" fill="rgba(255,255,255,.22)" fontSize="8" fontFamily="DM Sans" letterSpacing="1">TOKYO</text>
            <text x="172" y="402" fill="rgba(77,240,200,.4)" fontSize="8" fontFamily="DM Sans" letterSpacing="1">SYDNEY</text>
            <rect x="0" y="0" width="2" height="30" fill="rgba(200,240,77,.5)" />
            <rect x="0" y="0" width="30" height="2" fill="rgba(200,240,77,.5)" />
            <rect x="330" y="428" width="30" height="2" fill="rgba(200,240,77,.18)" />
            <rect x="358" y="398" width="2" height="30" fill="rgba(200,240,77,.18)" />
          </svg>
        </div>
      </div>
    </div>
  )
}
