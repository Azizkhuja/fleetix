import { useReveal } from '../hooks/useReveal'

const STATS = [
  { num: '2.4', suffix: 'M', desc: 'Tons shipped annually' },
  { num: '180', suffix: '+', desc: 'Countries & territories' },
  { num: '99', suffix: '.4%', desc: 'On-time delivery rate' },
  { num: '14', suffix: 'K', desc: 'Enterprise clients' },
]

export default function StatsBar() {
  const ref = useReveal()

  return (
    <div className="stats-bar" ref={ref}>
      {STATS.map((s, i) => (
        <div className="stat-item reveal" key={i}>
          <div className="stat-num">
            {s.num}<s>{s.suffix}</s>
          </div>
          <div className="stat-desc">{s.desc}</div>
        </div>
      ))}
    </div>
  )
}
