import { useEffect, useState } from 'react'
import { track } from '@vercel/analytics'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (section) => {
    track('nav_click', { section })
    setMenuOpen(false)
  }

  const handleQuoteClick = () => {
    track('cta_click', { location: 'navbar', label: 'Get a Quote' })
    setMenuOpen(false)
  }

  const smoothScroll = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav id="nav" className={scrolled ? 'scrolled' : ''}>
        <a href="#" className="logo">
          <div className="logo-dot" />
          Fleetix
        </a>

        <ul className="nav-links">
          {[['#services', 'Services'], ['#about', 'About'], ['#process', 'Process'], ['#clients', 'Clients']].map(([href, label]) => (
            <li key={href}>
              <a href={href} onClick={(e) => { smoothScroll(e, href); handleNavClick(label) }}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="nav-cta"
          onClick={(e) => { smoothScroll(e, '#contact'); handleQuoteClick() }}
        >
          Get a Quote
        </a>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          id="burger"
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} id="mobileMenu">
        {[['#services', 'Services'], ['#about', 'About'], ['#process', 'Process'], ['#clients', 'Clients']].map(([href, label]) => (
          <a key={href} href={href} onClick={(e) => { smoothScroll(e, href); handleNavClick(label) }}>
            {label}
          </a>
        ))}
        <a
          href="#contact"
          className="nav-cta"
          onClick={(e) => { smoothScroll(e, '#contact'); handleQuoteClick() }}
        >
          Get a Quote
        </a>
      </div>
    </>
  )
}
