import { useState, useEffect } from 'react'
import { content } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-sm backdrop-blur-md' : ''
      }`}
      style={{ backgroundColor: scrolled ? 'rgba(255,251,242,0.92)' : 'transparent' }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-bold text-lg tracking-tight" style={{ color: '#1A1A1A' }}>
          <span style={{ color: '#C06B4F' }}>⬡</span> {content.profile.nameShort}
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {content.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200 hover:opacity-70"
              style={{ color: '#4A4A4A' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href={content.hero.ctaHref}
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
          style={{ backgroundColor: '#C06B4F' }}
          onMouseEnter={e => (e.target.style.backgroundColor = '#9A5840')}
          onMouseLeave={e => (e.target.style.backgroundColor = '#C06B4F')}
        >
          {content.nav.cta}
        </a>
      </div>
    </nav>
  )
}
