import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "../styles/Homehero.scss";
import homeBannerPhotographer from "../assets/homebanner-photographer.jpg";
import homeBannerStudio from "../assets/photostudio-banner.jpg";
import homeBannerPrinter from "../assets/digital-lab-banner.jpg";
import homeBannerVendor from "../assets/homebanner-camera-vendor.jpg";
import homeBannerTraining from "../assets/homebanner-training.jpg";

// ── Category data ─────────────────────────────────────────────────────────────
const CATEGORIES = [
  {
    id: "photographers",
    label: "Photographers",
    link: "/photographers",
    viewAllLabel: "View All Photographers",
    bg: homeBannerPhotographer,
    featuredTitle: "Top Photographers in Your Locality",
    featuredDesc:
      "Find and book professional photographers for weddings, portraits, events, and commercial shoots in your city.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
  {
    id: "studios",
    label: "Photo Studios",
    link: "/photo-studios",
    viewAllLabel: "View All Photo Studios",
    bg: homeBannerStudio,
    featuredTitle: "Premium Photo Studios Near You",
    featuredDesc:
      "Discover top-rated studios with professional lighting, backdrops, and amenities perfect for every photography session.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="3" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="7" y1="16" x2="17" y2="16" />
        <line x1="9" y1="16" x2="7" y2="22" />
        <line x1="15" y1="16" x2="17" y2="22" />
      </svg>
    ),
  },
  {
    id: "labs",
    label: "Digital Labs",
    link: "/digital-labs",
    viewAllLabel: "View All Digital Labs",
    bg: homeBannerPrinter,
    featuredTitle: "Professional Digital Photo Labs",
    featuredDesc:
      "Get high-quality photo printing, album creation, canvas prints, and digital editing from certified labs near you.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 6 2 18 2 18 9" />
        <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
        <rect x="6" y="14" width="12" height="8" />
      </svg>
    ),
  },
  {
    id: "vendors",
    label: "Vendors",
    link: "/vendors",
    viewAllLabel: "View All Vendors",
    bg: homeBannerVendor,
    featuredTitle: "Camera & Album Vendors in Hyderabad",
    featuredDesc:
      "Shop cameras, lenses, wedding albums, and photography accessories from trusted vendors offering the best deals.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
  },
  {
    id: "training",
    label: "Training",
    link: "/training",
    viewAllLabel: "View All Training",
    bg: homeBannerTraining,
    featuredTitle: "Photography Training & Courses",
    featuredDesc:
      "Learn photography from expert instructors through hands-on workshops, online courses, and personalized training for all levels.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
const Homehero = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const swiperRef = useRef(null);

  const activeCat = CATEGORIES[activeIdx];

  const goToSlide = (idx) => {
    if (swiperRef.current && idx !== activeIdx) {
      swiperRef.current.slideToLoop(idx);
    }
  };

  return (
    <section className="home-hero">

      {/* ── Swiper handles the background cross-fade ─────────────────────── */}
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={900}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        onSwiper={(s) => { swiperRef.current = s; }}
        onSlideChange={(s) => setActiveIdx(s.realIndex)}
        className="home-hero__swiper"
        aria-hidden="true"
      >
        {CATEGORIES.map((cat) => (
          <SwiperSlide key={cat.id}>
            <div
              className="home-hero__bg"
              style={{ backgroundImage: `url(${cat.bg})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ── Gradient overlay ─────────────────────────────────────────────── */}
      <div className="home-hero__overlay" aria-hidden="true" />

      {/* ── Foreground content ────────────────────────────────────────────── */}
      <div className="home-hero__inner">

        {/* Per-category title + description — stack-fade on slide change */}
        <div className="home-hero__feature">
          {CATEGORIES.map((cat, i) => (
            <div
              key={cat.id}
              className={`home-hero__feature-item${i === activeIdx ? " is-active" : ""}`}
            >
              <h1 className="home-hero__feature-title">{cat.featuredTitle}</h1>
              <p className="home-hero__feature-desc">{cat.featuredDesc}</p>
            </div>
          ))}
        </div>

        {/* Category icon cards */}
        <div className="home-hero__cats">
          {CATEGORIES.map((cat, i) => (
            <button
              key={cat.id}
              className={`home-hero__cat${i === activeIdx ? " is-active" : ""}`}
              onMouseEnter={() => goToSlide(i)}
              onClick={() => goToSlide(i)}
              aria-pressed={i === activeIdx}
            >
              <span className="home-hero__cat-icon">{cat.icon}</span>
              <span className="home-hero__cat-label">{cat.label}</span>
            </button>
          ))}
        </div>

      </div>

      {/* ── View all — absolute bottom-left ──────────────────────────────── */}
      <Link to={activeCat.link} className="home-hero__view-all">
        {activeCat.viewAllLabel}
      </Link>

    </section>
  );
};

export default Homehero;
