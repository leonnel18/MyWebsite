import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiSun, FiMoon } from 'react-icons/fi'
import { content } from '../data/content'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState('')
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the nav link for whichever section is currently in view.
  // Pathname-gated: Navbar persists across routes now, so this must
  // re-scope to isHome and re-run on pathname change (SAD §7.3).
  useEffect(() => {
    // Off "/", `isActive` below is already gated by `isHome &&`, so no
    // state reset is needed here — just skip observer setup entirely
    // (avoids a synchronous setState-in-effect call).
    if (!isHome) return
    const sections = content.nav.links
      .filter((l) => l.href.startsWith('#'))
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
  }, [isHome])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md border-b' : 'border-b border-transparent'
      }`}
      style={{
        backgroundColor: scrolled ? 'var(--color-nav-bg)' : 'transparent',
        borderColor: scrolled ? 'var(--color-border)' : 'transparent',
      }}
    >
      <div className="w-full px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo mark on the far left */}
        <Link to="/" aria-label={content.profile.nameShort} className="flex items-center">
          <img src="/logo-mark-transparent.png" alt={content.profile.nameShort} className="h-9 w-auto" />
        </Link>

        {/* Nav links + CTA, grouped on the far right */}
        <div className="flex items-center gap-8 lg:gap-10">
          <div className="hidden md:flex items-center gap-7">
            {content.nav.links.map((link) => {
              const isRouteLink = link.href.startsWith('/')

              if (isRouteLink) {
                const isActive = location.pathname === link.href
                const baseColor = isActive ? 'var(--color-primary)' : 'var(--color-text-secondary)'
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    className="text-lg font-medium transition-colors duration-200"
                    style={{ color: baseColor }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-ink)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = baseColor)}
                  >
                    {link.label}
                  </Link>
                )
              }

              // Anchor link. On "/", keep the plain <a> so Lenis's
              // `anchors: true` click-interception keeps doing the in-page
              // smooth scroll unchanged. Off "/", route to "/" + hash via
              // <Link> so it stays SPA instead of forcing a full reload;
              // Home.jsx's own hash-scroll effect finishes the job.
              const isActive = isHome && link.href === `#${activeId}`
              const baseColor = isActive ? 'var(--color-primary)' : 'var(--color-text-secondary)'

              return isHome ? (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className="text-lg font-medium transition-colors duration-200"
                  style={{ color: baseColor }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-ink)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = baseColor)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={`/${link.href}`}
                  className="text-lg font-medium transition-colors duration-200"
                  style={{ color: baseColor }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-ink)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = baseColor)}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ borderColor: 'var(--color-border)', color: 'var(--color-ink)' }}
          >
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          {/* CTA */}
          {isHome ? (
            <a
              href={content.nav.ctaHref}
              className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
              style={{ backgroundColor: 'var(--color-primary)' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-primary)')}
            >
              {content.nav.cta}
            </a>
          ) : (
            <Link
              to={`/${content.nav.ctaHref}`}
              className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
              style={{ backgroundColor: 'var(--color-primary)' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-primary)')}
            >
              {content.nav.cta}
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}
