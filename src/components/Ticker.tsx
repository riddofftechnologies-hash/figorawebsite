const ITEMS = [
  'SEO', 'BRANDING', 'SOCIAL MEDIA',
  'PERFORMANCE MARKETING', 'INFLUENCER MARKETING', 'PRODUCTION',
]

export default function Ticker() {
  // Duplicate for seamless infinite scroll
  const allItems = [...ITEMS, ...ITEMS]

  return (
    <div className="ticker-wrap">
      <div className="ticker">
        {allItems.map((item, i) => (
          <span key={i}>
            <span className="ticker-item">{item}</span>
            <span className="ticker-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
