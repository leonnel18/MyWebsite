import { useState, useEffect } from 'react'
import { content } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the nav link for whichever section is currently in view
  useEffect(() => {
    const sections = content.nav.links
      .map((l) => document.getElementById(l.href.replace('#', '')))
      .filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md border-b' : 'border-b border-transparent'
      }`}
      style={{
        backgroundColor: scrolled ? 'rgba(251,246,236,0.85)' : 'transparent',
        borderColor: scrolled ? '#E4D8C6' : 'transparent',
      }}
    >
      <div className="w-full px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Wordmark on the far left */}
        <a
          href="#"
          className="font-brand text-2xl tracking-tight"
          style={{ color: '#241C17', fontWeight: 600 }}
        >
          <span style={{ color: '#B75C3E' }}>⬡</span> {content.profile.nameShort}
        </a>

        {/* Nav links + CTA, grouped on the far right */}
        <div className="flex items-center gap-8 lg:gap-10">
          <div className="hidden md:flex items-center gap-7">
            {content.nav.links.map((link) => {
              const isActive = link.href === `#${activeId}`
              const baseColor = isActive ? '#B75C3E' : '#6B5D51'
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className="text-lg font-medium transition-colors duration-200"
                  style={{ color: baseColor }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#241C17')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = baseColor)}
                >
                  {link.label}
                </a>
              )
            })}
          </div>

          {/* CTA */}
          <a
            href={content.hero.ctaHref}
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ backgroundColor: '#B75C3E' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#94472E')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#B75C3E')}
          >
            {content.nav.cta}
          </a>
        </div>
      </div>
    </nav>
  )
}
