import { useEffect, useState } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import Preloader from './components/Preloader'
import WispField from './components/WispField'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ExperiencePage from './pages/ExperiencePage'
import SkillsPage from './pages/SkillsPage'

// Module-scoped, not state: must survive SPA route changes (so navigating
// home again doesn't replay it) but reset on every full page refresh (so a
// fresh load of "/" always gets it) — a value tied to render lifecycle
// can't satisfy both at once.
let preloaderPlayed = false

function App() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  // Only ever true on the very first render of a fresh "/" load; recomputed
  // each render but only matters at mount time (see useState below).
  const showPreloader = isHome && !preloaderPlayed

  // Flips true as the preloader's CRT power-off begins, cueing the hero
  // intro. Skips straight to "booted" when there's no preloader to wait on
  // (bugfix: preloader used to render on every route/refresh combo).
  const [booted, setBooted] = useState(() => !showPreloader)

  // Inertial smooth scrolling (Lenis). anchors:true routes #nav links through
  // it; skipped entirely for reduced-motion users, who keep native scrolling.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({ lerp: 0.07, anchors: true })
    // Shared so deep components (e.g. Features' card jumps) can glide with it
    window.__lenis = lenis
    let rafId
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      delete window.__lenis
    }
  }, [])

  // Scroll-to-top on route change, unless the destination carries a hash
  // (cross-route anchor nav, e.g. "/#about"), in which case Home.jsx's own
  // hash-scroll effect owns the final scroll position instead.
  useEffect(() => {
    if (location.hash) return
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
    // Intentionally scoped to pathname only — location.hash is read as a
    // guard, not something a hash-only change should re-trigger this for.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'transparent' }}>
      {showPreloader && (
        <Preloader
          onComplete={() => {
            preloaderPlayed = true
            setBooted(true)
          }}
        />
      )}
      <WispField />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home booted={booted} />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          {/* 404 handling: unknown paths redirect to home. No dedicated 404
              page — not worth building for a 2-route portfolio site. */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
