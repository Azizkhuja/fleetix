const FOOTER_LINKS = {
  Services: ['Air Freight', 'Ocean Freight', 'Road Transport', 'Warehousing', 'Customs'],
  Company: ['About Us', 'Careers', 'Press', 'Sustainability'],
  Resources: ['Documentation', 'API Reference', 'Status Page', 'Contact'],
}

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#" className="logo">
            <div className="logo-dot" />
            Fleetix
          </a>
          <p>Global logistics infrastructure for the enterprises of tomorrow. Reliable, intelligent, relentless.</p>
        </div>

        {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
          <div className="footer-col" key={heading}>
            <h4>{heading}</h4>
            <ul>
              {links.map((link) => (
                <li key={link}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <span>© 2026 Fleetix Logistics Inc. All rights reserved.</span>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  )
}
