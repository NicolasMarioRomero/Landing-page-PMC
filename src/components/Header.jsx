import { useEffect, useState } from 'react'
import { analytics } from '../analytics'
import Logo from './Logo'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (section) => {
    analytics.track('nav_click', { section })
    setMenuOpen(false)
  }

  const handleCTAClick = () => {
    analytics.track('cta_click', { location: 'header', type: 'primary' })
    setMenuOpen(false)
  }

  return (
    <header className={`fk-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="fk-container fk-header__inner">
        <a href="#top" className="fk-logo" onClick={() => handleNavClick('logo')}>
          <Logo size={32} />
          <span>FreshKeeper</span>
        </a>
        <nav className={`fk-nav ${menuOpen ? 'is-open' : ''}`}>
          <a href="#problema" onClick={() => handleNavClick('problema')}>El Problema</a>
          <a href="#solucion" onClick={() => handleNavClick('solucion')}>La Solución</a>
          <a href="#como-funciona" onClick={() => handleNavClick('como-funciona')}>Cómo funciona</a>
          <a href="#mvp" onClick={() => handleNavClick('mvp')}>Demo</a>
          <a href="#planes" onClick={() => handleNavClick('planes')}>Planes</a>
        </nav>
        <a href="#planes" className="fk-btn fk-btn--primary fk-btn--sm" onClick={handleCTAClick}>
          Empezar gratis
        </a>
        <button
          className="fk-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  )
}
