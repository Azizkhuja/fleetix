import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import StatsBar from './components/StatsBar'
import Services from './components/Services'
import About from './components/About'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <StatsBar />
      <Services />
      <About />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}
