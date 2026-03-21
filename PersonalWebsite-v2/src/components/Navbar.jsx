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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #1A1A1A' : '1px solid transparent',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-semibold text-base tracking-tight" style={{ color: '#F5F5F5' }}>
          GinoValera<span style={{ color: '#4ADE80' }}>.com</span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-7">
          {content.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm transition-colors duration-200"
              style={{ color: '#888888', fontFamily: "'Inter', monospace" }}
              onMouseEnter={e => (e.target.style.color = '#F5F5F5')}
              onMouseLeave={e => (e.target.style.color = '#888888')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href={content.hero.ctaHref}
          className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium rounded-sm border transition-all duration-200"
          style={{ borderColor: '#4ADE80', color: '#4ADE80', backgroundColor: 'transparent' }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#4ADE80'
            e.currentTarget.style.color = '#0A0A0A'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = 'transparent'
            e.currentTarget.style.color = '#4ADE80'
          }}
        >
          {content.nav.cta}
        </a>
      </div>
    </nav>
  )
}
