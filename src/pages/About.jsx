import React from "react";
import { Link } from "react-router-dom";
import "../styles/About.scss";
import heroBg from "../assets/homebanner-photographer.jpg";

// ─── Data ─────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  {
    icon: "📷",
    name: "Photographers",
    desc: "Wedding, candid, portrait, commercial, fashion, architectural and more — find the right photographer for every moment.",
  },
  {
    icon: "🎬",
    name: "Freelancers",
    desc: "Independent photography professionals available for assignments of all sizes, budgets and styles across India.",
  },
  {
    icon: "🖨️",
    name: "Digital Print Labs",
    desc: "Professional digital printing services for photo albums, canvas prints, frames, and large-format photography output.",
  },
  {
    icon: "🏢",
    name: "Photo Studios",
    desc: "Fully equipped photography studios offering in-house shoots, backdrops, lighting rigs and post-production services.",
  },
  {
    icon: "📚",
    name: "Album Vendors",
    desc: "Handcrafted and designer photo album makers — hardbound, leather, flush-mount and premium coffee-table books.",
  },
  {
    icon: "🛒",
    name: "Camera Vendors & Sellers",
    desc: "Buy, sell or rent new and used cameras, lenses, tripods and photography accessories from verified dealers.",
  },
  {
    icon: "🎓",
    name: "Photography Trainers",
    desc: "Professional photography institutes, workshops, and one-on-one mentors for beginners to advanced photographers.",
  },
  {
    icon: "🎥",
    name: "Camera Rentals",
    desc: "Rent DSLRs, mirrorless cameras, cinema cameras, drones, and accessories by the day, week or month.",
  },
  {
    icon: "🏠",
    name: "Studio Rentals",
    desc: "Hourly and daily studio space rental for shoots — with or without equipment and lighting setups included.",
  },
];

const STATS = [
  { number: "10,000+", label: "Vendors Listed" },
  { number: "50+",    label: "Cities Covered" },
  { number: "9",      label: "Business Categories" },
  { number: "1L+",    label: "Happy Clients" },
];

const CLIENT_STEPS = [
  {
    title: "Search by Category & City",
    desc: "Browse photographers, studios, digital labs, vendors, trainers and rental services in your city. Filter by budget, style, and availability.",
  },
  {
    title: "Compare Portfolios & Reviews",
    desc: "View each vendor's portfolio, read genuine client reviews and star ratings, and save favourites to your wishlist.",
  },
  {
    title: "Contact & Book Directly",
    desc: "Send an enquiry or call the vendor directly. No middleman, no booking fees — connect and confirm on your terms.",
  },
];

const VENDOR_STEPS = [
  {
    title: "Create Your Free Profile",
    desc: "Sign up and build your business profile in minutes — add your services, location, portfolio, and contact details.",
  },
  {
    title: "Showcase Your Work",
    desc: "Upload your best photos, videos, and client testimonials. Your profile becomes your 24/7 digital showroom.",
  },
  {
    title: "Receive Enquiries & Grow",
    desc: "Start receiving verified client enquiries directly to your phone. Manage leads, respond fast, and grow your bookings.",
  },
];

const WHY_CARDS = [
  {
    title: "Verified Listings",
    desc: "Every vendor on Pixstack goes through a manual verification process. No fake listings, no unverified credentials.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    title: "All-in-One Platform",
    desc: "The only Indian marketplace built exclusively for the photography industry — all 9 segments under one roof.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    title: "Free for Clients",
    desc: "Searching, shortlisting and contacting any vendor on Pixstack is completely free. Zero hidden charges.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Genuine Reviews",
    desc: "Client reviews are verified and tied to real bookings — so you always know what you're getting.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "50+ Cities & Growing",
    desc: "From metros to tier-2 cities — Pixstack is expanding rapidly to bring quality photography talent to every corner of India.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Free Business Listing",
    desc: "Photographers and vendors can list their business completely free — no commissions, no lock-in, no hidden fees.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
  },
];

const INTRO_POINTS = [
  "India's only dedicated marketplace for the photography industry",
  "Covers all segments — photographers to labs to trainers to rentals",
  "Verified profiles with real portfolios and genuine client reviews",
  "Direct connection — no middlemen or booking commissions",
];

// ─── Component ────────────────────────────────────────────────────────────────

const About = () => (
  <div className="about">

    {/* ── Hero ─────────────────────────────────────────────────────────────── */}
    <section
      className="about__hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="about__hero-content">
        <span className="about__hero-eyebrow">About Pixstack</span>
        <h1 className="about__hero-title">
          India's #1 <span>Photography</span> Marketplace
        </h1>
        <p className="about__hero-sub">
          Pixstack connects photographers, studios, digital labs, vendors and
          trainers with clients across India — all in one trusted, verified
          platform.
        </p>
        <div className="about__hero-actions">
          <Link to="/businesses" className="about__hero-btn about__hero-btn--primary">
            Explore Services
          </Link>
          <Link to="/business-signup" className="about__hero-btn about__hero-btn--outline">
            List Your Business
          </Link>
        </div>
      </div>
    </section>

    {/* ── Stats bar ────────────────────────────────────────────────────────── */}
    <div className="about__stats">
      <div className="about__stats-inner">
        {STATS.map((s) => (
          <div key={s.label} className="about__stat">
            <span className="about__stat-number">{s.number}</span>
            <span className="about__stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </div>

    {/* ── What is Pixstack ─────────────────────────────────────────────────── */}
    <section className="about__section about__section--white">
      <div className="about__section-inner">
        <div className="about__intro-grid">
          <div>
            <span className="about__section-label">What We Do</span>
            <h2 className="about__section-heading">
              One Platform for the Entire <span>Photography Industry</span>
            </h2>
            <div className="about__intro-text">
              <p>
                Pixstack is India's first and most comprehensive online
                marketplace dedicated exclusively to the photography industry.
                Whether you're a client searching for the perfect wedding
                photographer or a studio owner looking to grow your bookings —
                Pixstack is built for you.
              </p>
              <p>
                We believe that talented photographers and photography
                businesses deserve a dedicated space to be discovered. At the
                same time, clients deserve a trustworthy platform where every
                listing is verified, every review is genuine, and every
                connection leads to quality work.
              </p>
            </div>
            <ul className="about__intro-points">
              {INTRO_POINTS.map((pt) => (
                <li key={pt} className="about__intro-point">
                  <span className="about__intro-point-icon">
                    <svg viewBox="0 0 24 24" width="11" height="11" fill="none"
                      stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {pt}
                </li>
              ))}
            </ul>
          </div>

          <div className="about__intro-visual">
            <div className="about__intro-visual-card">
              <span className="about__intro-visual-icon">📷</span>
              <span className="about__intro-visual-label">Photography Marketplace</span>
              <span className="about__intro-visual-count">9 categories · 50+ cities · 10,000+ vendors</span>
            </div>
            {[
              { icon: "🤝", label: "For Clients", count: "Find & book verified vendors" },
              { icon: "💼", label: "For Businesses", count: "Get leads & grow bookings" },
              { icon: "⭐", label: "Verified Reviews", count: "Genuine client feedback" },
              { icon: "🆓", label: "Free Listings", count: "Zero commissions" },
            ].map((c) => (
              <div key={c.label} className="about__intro-visual-card">
                <span className="about__intro-visual-icon">{c.icon}</span>
                <span className="about__intro-visual-label">{c.label}</span>
                <span className="about__intro-visual-count">{c.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ── Categories ───────────────────────────────────────────────────────── */}
    <section className="about__section about__section--gray">
      <div className="about__section-inner">
        <span className="about__section-label">What We Cover</span>
        <h2 className="about__section-heading">
          Every Photography Segment, <span>One Place</span>
        </h2>
        <p className="about__section-sub">
          From booking a wedding photographer to renting a studio or finding a
          camera repair shop — Pixstack covers the full photography ecosystem.
        </p>
        <div className="about__categories">
          {CATEGORIES.map((cat) => (
            <div key={cat.name} className="about__category-card">
              <div className="about__category-icon">{cat.icon}</div>
              <div className="about__category-body">
                <h3 className="about__category-name">{cat.name}</h3>
                <p className="about__category-desc">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── How it works ─────────────────────────────────────────────────────── */}
    <section className="about__section about__section--white">
      <div className="about__section-inner">
        <span className="about__section-label">How It Works</span>
        <h2 className="about__section-heading">
          Simple, Fast & <span>Transparent</span>
        </h2>
        <p className="about__section-sub">
          Whether you're looking to hire or looking to grow your business,
          Pixstack makes the journey straightforward.
        </p>
        <div className="about__how-grid">
          <div className="about__how-col">
            <p className="about__how-col-title">For Clients — Find the Right Talent</p>
            <div className="about__how-steps">
              {CLIENT_STEPS.map((step, i) => (
                <div key={step.title} className="about__how-step">
                  <span className="about__how-step-num">{String(i + 1).padStart(2, "0")}</span>
                  <div className="about__how-step-body">
                    <p className="about__how-step-title">{step.title}</p>
                    <p className="about__how-step-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about__how-col">
            <p className="about__how-col-title">For Businesses — Grow Your Bookings</p>
            <div className="about__how-steps">
              {VENDOR_STEPS.map((step, i) => (
                <div key={step.title} className="about__how-step">
                  <span className="about__how-step-num">{String(i + 1).padStart(2, "0")}</span>
                  <div className="about__how-step-body">
                    <p className="about__how-step-title">{step.title}</p>
                    <p className="about__how-step-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── Why Pixstack ─────────────────────────────────────────────────────── */}
    <section className="about__section about__section--dark">
      <div className="about__section-inner">
        <span className="about__section-label" style={{ color: "#ff8080" }}>Why Choose Us</span>
        <h2 className="about__section-heading">
          Built for India's <span>Photography Community</span>
        </h2>
        <p className="about__section-sub">
          We're not a generic classifieds site. Pixstack is purpose-built for
          photographers and photography businesses — every feature, every filter,
          every category exists for one reason.
        </p>
        <div className="about__why-grid">
          {WHY_CARDS.map((w) => (
            <div key={w.title} className="about__why-card">
              <div className="about__why-icon">{w.icon}</div>
              <h3 className="about__why-title">{w.title}</h3>
              <p className="about__why-desc">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Mission ──────────────────────────────────────────────────────────── */}
    <section className="about__section about__section--gray">
      <div className="about__section-inner">
        <div className="about__mission">
          <span className="about__section-label" style={{ display: "block", textAlign: "center", marginBottom: 16 }}>
            Our Mission
          </span>
          <p className="about__mission-quote">
            "To build the most trusted and comprehensive marketplace for
            India's photography industry — connecting{" "}
            <span>talented professionals</span> with clients who value their
            work."
          </p>
          <p className="about__mission-body">
            Every photographer has a story to tell. Every client deserves a
            photographer who understands their vision. Pixstack exists to
            bridge that gap — with technology, transparency, and a deep
            respect for the art of photography. We started in Hyderabad and
            are rapidly expanding across India, one city at a time.
          </p>
        </div>
      </div>
    </section>

    {/* ── CTA ──────────────────────────────────────────────────────────────── */}
    <section className="about__section about__section--white">
      <div className="about__section-inner">
        <div className="about__cta">
          <div className="about__cta-card about__cta-card--client">
            <span className="about__cta-label">For Clients</span>
            <h3 className="about__cta-title">Find Your Perfect Photographer Today</h3>
            <p className="about__cta-desc">
              Browse thousands of verified photographers, studios, and vendors
              in your city. Compare portfolios, read reviews, and connect
              directly — completely free.
            </p>
            <Link to="/businesses" className="about__cta-btn about__cta-btn--dark">
              Explore Services &nbsp;→
            </Link>
          </div>

          <div className="about__cta-card about__cta-card--vendor">
            <span className="about__cta-label">For Businesses</span>
            <h3 className="about__cta-title">List Your Business — It's Free</h3>
            <p className="about__cta-desc">
              Join 10,000+ photography businesses on Pixstack. Create your
              profile, showcase your work, and start receiving verified client
              enquiries — no commissions, no lock-in.
            </p>
            <Link to="/business-signup" className="about__cta-btn about__cta-btn--white">
              Get Listed Free &nbsp;→
            </Link>
          </div>
        </div>
      </div>
    </section>

  </div>
);

export default About;
