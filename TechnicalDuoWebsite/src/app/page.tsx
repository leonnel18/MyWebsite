import Navbar         from '@/components/Navbar';
import Hero            from '@/components/Hero';
import Capabilities    from '@/components/Capabilities';
import PipelineStepper from '@/components/PipelineStepper';
import CreativeCTA     from '@/components/CreativeCTA';
import LogoCloud       from '@/components/LogoCloud';
import TechStack       from '@/components/TechStack';
import Footer          from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Capabilities />
      <PipelineStepper />
      <CreativeCTA />
      <LogoCloud />
      <TechStack />
      <Footer />
    </main>
  );
}
