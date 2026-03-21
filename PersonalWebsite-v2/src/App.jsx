import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import TechStack from './components/TechStack'
import BrandsServed from './components/BrandsServed'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0A0A0A' }}>
      <Navbar />
      <main>
        <Hero />
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
