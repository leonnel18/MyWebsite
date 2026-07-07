import { useState } from 'react'
import Preloader from './components/Preloader'
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

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'transparent' }}>
      <Preloader onComplete={() => setBooted(true)} />
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
