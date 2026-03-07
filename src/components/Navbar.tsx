import { useEffect, useRef } from 'react'

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    const handleScroll = () => {
      nav.style.padding = window.scrollY > 80 ? '12px 60px' : '20px 60px'
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav ref={navRef}>
      <div className="logo">FIGORA</div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#works">Works</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#clients">Clients</a></li>
        <li><a href="#consultation" className="nav-cta">Let's Talk</a></li>
      </ul>
    </nav>
  )
}
