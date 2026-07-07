import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import Preloader from './components/Preloader'
import WispField from './components/WispField'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import TechStack from './components/TechStack'
import BrandsServed from './components/BrandsServed'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  // Flips true as the preloader's CRT power-off begins, cueing the hero intro
  const [booted, setBooted] = useState(false)

  // Inertial smooth scrolling (Lenis). anchors:true routes #nav links through
  // it; skipped entirely for reduced-motion users, who keep native scrolling.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({ lerp: 0.07, anchors: true })
    let rafId
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'transparent' }}>
      <Preloader onComplete={() => setBooted(true)} />
      <WispField />
      <Navbar />
      <main>
        <Hero booted={booted} />
        <About />
        <HowItWorks />
        <Features />
        <TechStack />
        <BrandsServed />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
