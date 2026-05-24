import { useReveal } from '../hooks/useReveal'

const ArrowIcon = () => (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M1 5.5h9M5.5 1.5l4 4-4 4" />
  </svg>
)

const STEPS = [
  {
    n: '01', title: 'Book & Configure',
    desc: 'Submit via platform, API, or account manager. Get instant quotes across all transport modes.',
  },
  {
    n: '02', title: 'Pickup & Handoff',
    desc: 'Our network collects your cargo. Every item digitally manifested and insured before it moves.',
  },
  {
    n: '03', title: 'In Transit',
    desc: 'Track live. AI monitors for delays and reroutes automatically when disruptions occur.',
  },
  {
    n: '04', title: 'Delivered & POD',
    desc: 'Digital proof of delivery, automated invoicing, and performance analytics to your dashboard instantly.',
  },
]

export default function Process() {
  const ref = useReveal()

  return (
    <section id="process" ref={ref}>
      <div className="process-center reveal">
        <div className="section-label">How It Works</div>
        <h2 className="section-title">Simple to start.<br />Powerful at scale.</h2>
      </div>
      <div className="process-grid reveal">
        {STEPS.map((step, i) => (
          <div className="step" key={step.n}>
            <div className="step-n">{step.n}</div>
            <div className="step-title">{step.title}</div>
            <div className="step-desc">{step.desc}</div>
            {i < STEPS.length - 1 && (
              <div className="step-arr"><ArrowIcon /></div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
