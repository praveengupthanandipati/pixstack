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

          <div className="site-footer__stores">
            <p className="site-footer__stores-label">Download the App</p>
            <div className="site-footer__store-btns">
              {/* App Store */}
              <a href="#" className="site-footer__store-btn" aria-label="Download on the App Store">
                <svg className="site-footer__store-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="site-footer__store-text">
                  <span className="site-footer__store-sub">Download on the</span>
                  <span className="site-footer__store-name">App Store</span>
                </div>
              </a>

              {/* Google Play */}
              <a href="#" className="site-footer__store-btn" aria-label="Get it on Google Play">
                <svg className="site-footer__store-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M3.18 23.76c.3.17.64.24.99.2l.1-.03 11.35-6.55-2.47-2.47-9.97 8.85zM.5 1.4C.19 1.74 0 2.28 0 2.98v18.04c0 .7.19 1.24.51 1.58l.08.08 10.1-10.1v-.24L.58 1.32.5 1.4zm16.1 10.79l-2.74-2.74-10.1 9.99.02.02 12.82-7.27zM3.18.24L13.15 9.1l-2.47 2.47L.27.04C.63.0.99.08 1.3.26l1.88 1.07z"/>
                </svg>
                <div className="site-footer__store-text">
                  <span className="site-footer__store-sub">Get it on</span>
                  <span className="site-footer__store-name">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ────────────────────────────────────────────────────────── */}
      <div className="site-footer__bottom">
        <div className="site-footer__bottom-left">
          <span className="site-footer__links-label">Links:</span>
          <Link to="/about"          className="site-footer__bottom-link">About us</Link>
          <Link to="/faqs"            className="site-footer__bottom-link">F.A.Q</Link>
          <Link to="/cookies-policy" className="site-footer__bottom-link">Cookies Policy</Link>
          <Link to="/legal-terms"    className="site-footer__bottom-link">Legal Terms</Link>
          <Link to="/privacy" className="site-footer__bottom-link">Privacy Policy</Link>
          <Link to="/contact"        className="site-footer__bottom-link">Contact</Link>
          <Link to="/blogs"           className="site-footer__bottom-link">Blogs</Link>
          <Link to="/site-maps"        className="site-footer__bottom-link">Site Map</Link>
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
