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

// Only 5 unique banner photos exist — cycled across all 10 categories.
const BANNERS = [homeBannerPhotographer, homeBannerStudio, homeBannerPrinter, homeBannerVendor, homeBannerTraining];

// ── Category data ─────────────────────────────────────────────────────────────
const CATEGORIES = [
  {
    id: "photographers",
    label: ["Professional", "Photographers"],
    link: "/businesses",
    viewAllLabel: "View All Photographers",
    featuredTitle: ["Top Photographers", "in Your Locality"],
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
    label: ["Photo Studios &", "Creative Spaces"],
    link: "/businesses",
    viewAllLabel: "View All Photo Studios",
    featuredTitle: ["Premium Photo Studios", "& Creative Spaces"],
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
    label: ["Pro Photo", "Labs"],
    link: "/businesses",
    viewAllLabel: "View All Photo Labs",
    featuredTitle: ["Professional Photo Labs", "for Print & Post-Production"],
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
    id: "album-artisans",
    label: ["Album & Photo", "Book Artisans"],
    link: "/businesses",
    viewAllLabel: "View All Album Artisans",
    featuredTitle: ["Handcrafted Albums", "& Photo Book Artisans"],
    featuredDesc:
      "Discover skilled artisans creating premium wedding albums, photo books, and bespoke bindery work.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </svg>
    ),
  },
  {
    id: "vendors",
    label: ["Camera &", "Gear Stores"],
    link: "/businesses",
    viewAllLabel: "View All Camera & Gear Stores",
    featuredTitle: ["Camera & Gear Stores", "New, Used & Rental"],
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
    label: ["Academies &", "Training"],
    link: "/businesses",
    viewAllLabel: "View All Academies & Training",
    featuredTitle: ["Photography Academies", "& Training Institutes"],
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
  {
    id: "retouching",
    label: ["Retouching", "Services"],
    link: "/businesses",
    viewAllLabel: "View All Retouching Services",
    featuredTitle: ["Post-Production &", "Retouching Experts"],
    featuredDesc:
      "Expert photo and video retouching, color grading, and post-production editing for every kind of project.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="6" x2="20" y2="6" />
        <circle cx="9" cy="6" r="1.8" fill="currentColor" stroke="none" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <circle cx="16" cy="12" r="1.8" fill="currentColor" stroke="none" />
        <line x1="4" y1="18" x2="20" y2="18" />
        <circle cx="11" cy="18" r="1.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: "prop-rentals",
    label: ["Prop &", "Costume Rentals"],
    link: "/businesses",
    viewAllLabel: "View All Prop & Costume Rentals",
    featuredTitle: ["Prop, Set &", "Costume Rentals"],
    featuredDesc:
      "Curated props, themed sets, and costume rentals to bring any concept shoot or production to life.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 7l9 6-2 2-7-4-7 4-2-2z" />
        <path d="M5 15l-2 6h18l-2-6" />
      </svg>
    ),
  },
  {
    id: "digital-tools",
    label: ["Software &", "Digital Tools"],
    link: "/businesses",
    viewAllLabel: "View All Software & Digital Tools",
    featuredTitle: ["Software, Presets &", "Digital Tools"],
    featuredDesc:
      "Editing software, Lightroom presets, LUTs, and digital tools built for photographers and creators.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="13" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <path d="M7 9l2.5 2.5L7 14" />
      </svg>
    ),
  },
  {
    id: "event-planners",
    label: ["Event Planners &", "Talent Agencies"],
    link: "/businesses",
    viewAllLabel: "View All Event Planners",
    featuredTitle: ["Event Planners &", "Talent Agencies"],
    featuredDesc:
      "Corporate event planners and talent agencies connecting brands with photographers, models, and crews.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="16" y1="2" x2="16" y2="6" />
      </svg>
    ),
  },
].map((cat, i) => ({ ...cat, bg: BANNERS[i % BANNERS.length] }));

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
              <h1 className="home-hero__feature-title">
                <span className="home-hero__feature-title-line">{cat.featuredTitle[0]}</span>
                <span className="home-hero__feature-title-line">{cat.featuredTitle[1]}</span>
              </h1>
              <p className="home-hero__feature-desc">{cat.featuredDesc}</p>
            </div>
          ))}
        </div>

        {/* Category icon cards — all categories, wrapping onto multiple rows */}
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
              <span className="home-hero__cat-label">
                <span className="home-hero__cat-label-line">{cat.label[0]}</span>
                <span className="home-hero__cat-label-line">{cat.label[1]}</span>
              </span>
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
