import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.scss'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    setEmail('')
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="site-footer">

      {/* ── Main section ──────────────────────────────────────────────────────── */}
      <div className="site-footer__main">

        {/* Left — brand + nav + social */}
        <div className="site-footer__left">
          <div className="site-footer__logo">
            Pix<span>stack</span>
          </div>

          <p className="site-footer__tagline">
            The awards for design, creativity and innovation on the Internet.
          </p>

          <p className="site-footer__desc">
            Coloring is an excellent way of meditation and releasing stress, and a
            fun activity to do. If you don&rsquo;t feel like coloring, you can still
            create templates.
          </p>

          <nav className="site-footer__nav">
            <Link to="/photographers" className="site-footer__nav-link">Photographers</Link>
            <Link to="/photo-studios"  className="site-footer__nav-link">Photo Studios</Link>
            <Link to="/vendors"        className="site-footer__nav-link">Vendors</Link>
            <Link to="/freelancers"    className="site-footer__nav-link">Freelancers</Link>
            <Link to="/training"       className="site-footer__nav-link">Training</Link>
          </nav>

          <div className="site-footer__social">
            <span className="site-footer__social-label">Follow us:</span>
            <a href="https://facebook.com"  className="site-footer__social-link" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://twitter.com"   className="site-footer__social-link" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://linkedin.com"  className="site-footer__social-link" target="_blank" rel="noreferrer">Linkedin</a>
            <a href="https://instagram.com" className="site-footer__social-link" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>

        {/* Right — newsletter */}
        <div className="site-footer__right">
          <h3 className="site-footer__newsletter-title">Subscribe to our Newsletter</h3>
          <p className="site-footer__newsletter-desc">
            Coloring is an excellent way of meditation and releasing stress, and a fun
            activity to do. If you don&rsquo;t feel like coloring, you can still create
            templates.
          </p>
          <form className="site-footer__form" onSubmit={handleSubscribe}>
            <input
              type="email"
              className="site-footer__input"
              placeholder="Enter your Email id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="site-footer__subscribe-btn">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>

      {/* ── Bottom bar ────────────────────────────────────────────────────────── */}
      <div className="site-footer__bottom">
        <div className="site-footer__bottom-left">
          <span className="site-footer__links-label">Links:</span>
          <Link to="/about"          className="site-footer__bottom-link">About us</Link>
          <Link to="/faq"            className="site-footer__bottom-link">F.A.Q</Link>
          <Link to="/cookies-policy" className="site-footer__bottom-link">Cookies Policy</Link>
          <Link to="/legal-terms"    className="site-footer__bottom-link">Legal Terms</Link>
          <Link to="/privacy-policy" className="site-footer__bottom-link">Privacy Policy</Link>
          <Link to="/contact"        className="site-footer__bottom-link">Contact</Link>
          <Link to="/blog"           className="site-footer__bottom-link">Blog</Link>
        </div>
        <div className="site-footer__bottom-right">
          <span className="site-footer__copy">&copy; 2022 Pixstack. All copy rights reserved</span>
          <button className="site-footer__top-btn" onClick={scrollToTop} aria-label="Scroll to top">
            TOP
          </button>
        </div>
      </div>

    </footer>
  )
}

export default Footer
