import { useEffect, useState } from 'react'
import { navigation } from '../data/siteContent'

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined
    const onEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onEscape)
    return () => window.removeEventListener('keydown', onEscape)
  }, [menuOpen])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}>
      <div className="header-inner container">
        <a className="brand" href="/" aria-label="Iron Peak Fitness home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark" aria-hidden="true"><span>IP</span></span>
          <span className="brand-text">IRON PEAK <small>FITNESS</small></span>
        </a>

        <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} id="main-navigation" aria-label="Main navigation">
          {navigation.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="mobile-nav-cta" href="/#memberships" onClick={() => setMenuOpen(false)}>Start Your Membership <span aria-hidden="true">↗</span></a>
        </nav>

        <a className="button button-accent header-cta" href="/#memberships">Start Your Membership <span aria-hidden="true">↗</span></a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-controls="main-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
