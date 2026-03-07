import { useEffect } from 'react'
import Cursor from './components/Cursor'
import ScrollTop from './components/ScrollTop'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Stats from './components/Stats'
import Services from './components/Services'
import Clients from './components/Clients'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Works from './components/Works'
import About from './components/About'
import Resume from './components/Resume'
import Consultation from './components/Consultation'
import Footer from './components/Footer'

function App() {
  // Global scroll-reveal observer — mirrors the original script
  useEffect(() => {
    const reveals = Array.from(document.querySelectorAll<Element>('.reveal'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 100)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )
    reveals.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Cursor />
      <ScrollTop />
      <Navbar />
      <Hero />
      <Ticker />
      <Stats />
      <Services />
      <Clients />
      <Testimonials />
      <Blog />
      <Works />
      <About />
      <Resume />
      <Consultation />
      <div className="grad-bar" />
      <Footer />
    </>
  )
}

export default App
