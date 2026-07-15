import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import Features from '../components/Features'
import TechStack from '../components/TechStack'
import CareerTimelineTeaser from '../components/CareerTimelineTeaser'
import CTASection from '../components/CTASection'

export default function Home({ booted }) {
  const location = useLocation()

  // Cross-route anchor landing (FR-2): when Navbar/Footer nav from
  // /experience resolves to "/#about" etc., React Router does NOT
  // auto-scroll to the hash target on route change. Handle it here.
  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.slice(1)
    const target = document.getElementById(id)
    if (!target) return
    // Wait one frame so the section has laid out post-mount before scrolling.
    requestAnimationFrame(() => {
      if (window.__lenis) window.__lenis.scrollTo(target)
      else target.scrollIntoView({ behavior: 'smooth' })
      // Reduced-motion users: index.css's global
      // `@media (prefers-reduced-motion: reduce) { scroll-behavior: auto !important }`
      // rule already downgrades the native scrollIntoView call to instant —
      // no extra JS gating needed here.
    })
  }, [location.hash])

  return (
    <>
      <Hero booted={booted} />
      <About />
      <Features />
      <TechStack />
      <CareerTimelineTeaser />
      <CTASection />
    </>
  )
}
