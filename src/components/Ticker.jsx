const ITEMS = [
  { label: 'Sea Freight', value: '+8% capacity Q2' },
  { label: 'Air Express', value: '24h Delivery Active' },
  { label: 'Road Network', value: 'EU & APAC Expanded' },
  { label: 'Last-Mile', value: '62 new cities added' },
  { label: 'Cold Chain', value: 'FDA Certified' },
  { label: 'Sea Freight', value: '+8% capacity Q2' },
  { label: 'Air Express', value: '24h Delivery Active' },
  { label: 'Road Network', value: 'EU & APAC Expanded' },
  { label: 'Last-Mile', value: '62 new cities added' },
  { label: 'Cold Chain', value: 'FDA Certified' },
]

export default function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker-inner">
        {ITEMS.map((item, i) => (
          <span className="ticker-item" key={i}>
            <span className="d" />
            {item.label} <strong>{item.value}</strong>
          </span>
        ))}
      </div>
    </div>
  )
}
