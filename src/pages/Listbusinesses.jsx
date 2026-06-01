import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Listitem from "../components/Listitem";
import "../styles/Listbusinesses.scss";

import img01 from "../assets/list-itemsimg/listitemimg01.jpg";
import img02 from "../assets/list-itemsimg/listitemimg02.jpg";
import img03 from "../assets/list-itemsimg/listitemimg03.jpg";
import img04 from "../assets/list-itemsimg/listitemimg04.jpg";
import img05 from "../assets/list-itemsimg/listitemimg05.jpg";
import img06 from "../assets/list-itemsimg/listitemimg06.jpg";
import img07 from "../assets/list-itemsimg/listitemimg07.jpg";
import img08 from "../assets/list-itemsimg/listitemimg08.jpg";
import img09 from "../assets/list-itemsimg/listitemimg09.jpg";
import img10 from "../assets/list-itemsimg/listitemimg10.jpg";

const ALL_ITEMS = [
  // Row 1
  {
    id: 1,
    image: img01,
    businessType: "STUDIO",
    businessName: "Photomagical Photography",
    city: "Hyderabad",
    state: "Telangana",
    reviews: 142,
    rating: 4.9,
  },
  {
    id: 2,
    image: img02,
    businessType: "FREELANCER",
    businessName: "Praveen Kumar Nandipati",
    city: "Hyderabad",
    state: "Telangana",
    reviews: 98,
    rating: 5.0,
  },
  {
    id: 3,
    image: img03,
    businessType: "STUDIO",
    businessName: "Shutter Magic Studio",
    city: "Secunderabad",
    state: "Telangana",
    reviews: 76,
    rating: 4.8,
  },
  {
    id: 4,
    image: img04,
    businessType: "DIGITAL LAB",
    businessName: "Great Digital Lab",
    city: "Hyderabad",
    state: "Telangana",
    reviews: 54,
    rating: 4.7,
  },
  {
    id: 5,
    image: img05,
    businessType: "STUDIO",
    businessName: "Pixel Perfect Studios",
    city: "Hyderabad",
    state: "Telangana",
    reviews: 89,
    rating: 4.9,
  },
  // Row 2
  {
    id: 6,
    image: img06,
    businessType: "FREELANCER",
    businessName: "Iris Candid Photography",
    city: "Hyderabad",
    state: "Telangana",
    reviews: 113,
    rating: 4.8,
  },
  {
    id: 7,
    image: img07,
    businessType: "STUDIO",
    businessName: "LensLight Studios",
    city: "Hyderabad",
    state: "Telangana",
    reviews: 61,
    rating: 4.6,
  },
  {
    id: 8,
    image: img08,
    businessType: "STUDIO",
    businessName: "Royal Frame Photography",
    city: "Hyderabad",
    state: "Telangana",
    reviews: 134,
    rating: 4.9,
  },
  {
    id: 9,
    image: img09,
    businessType: "DIGITAL LAB",
    businessName: "Capture Moments Lab",
    city: "Secunderabad",
    state: "Telangana",
    reviews: 47,
    rating: 4.7,
  },
  {
    id: 10,
    image: img10,
    businessType: "FREELANCER",
    businessName: "Ananya Visuals",
    city: "Hyderabad",
    state: "Telangana",
    reviews: 88,
    rating: 5.0,
  },
  // Row 3
  {
    id: 11,
    image: img01,
    businessType: "STUDIO",
    businessName: "Memories Forever Studio",
    city: "Hyderabad",
    state: "Telangana",
    reviews: 105,
    rating: 4.8,
  },
  {
    id: 12,
    image: img02,
    businessType: "STUDIO",
    businessName: "Click & Capture Studio",
    city: "Hyderabad",
    state: "Telangana",
    reviews: 72,
    rating: 4.7,
  },
  {
    id: 13,
    image: img03,
    businessType: "FREELANCER",
    businessName: "Shutter Lens Photography",
    city: "Hyderabad",
    state: "Telangana",
    reviews: 91,
    rating: 4.9,
  },
  {
    id: 14,
    image: img04,
    businessType: "DIGITAL LAB",
    businessName: "Golden Frame Digital Lab",
    city: "Hyderabad",
    state: "Telangana",
    reviews: 38,
    rating: 4.6,
  },
  {
    id: 15,
    image: img05,
    businessType: "STUDIO",
    businessName: "Vivid Pixels Photography",
    city: "Hyderabad",
    state: "Telangana",
    reviews: 119,
    rating: 4.8,
  },
  // Row 4
  {
    id: 16,
    image: img06,
    businessType: "STUDIO",
    businessName: "Frames & Stories",
    city: "Hyderabad",
    state: "Telangana",
    reviews: 144,
    rating: 4.9,
  },
  {
    id: 17,
    image: img07,
    businessType: "FREELANCER",
    businessName: "Lens & Light Photography",
    city: "Hyderabad",
    state: "Telangana",
    reviews: 67,
    rating: 4.7,
  },
  {
    id: 18,
    image: img08,
    businessType: "STUDIO",
    businessName: "Saptapadi Photo Studio",
    city: "Hyderabad",
    state: "Telangana",
    reviews: 156,
    rating: 5.0,
  },
  {
    id: 19,
    image: img09,
    businessType: "STUDIO",
    businessName: "Kalaniketan Photo Studio",
    city: "Hyderabad",
    state: "Telangana",
    reviews: 82,
    rating: 4.8,
  },
  {
    id: 20,
    image: img10,
    businessType: "FREELANCER",
    businessName: "Heritage Moments",
    city: "Hyderabad",
    state: "Telangana",
    reviews: 59,
    rating: 4.7,
  },
  // Row 5
  {
    id: 21,
    image: img01,
    businessType: "STUDIO",
    businessName: "Timeless Clicks",
    city: "Hyderabad",
    state: "Telangana",
    reviews: 128,
    rating: 4.9,
  },
  {
    id: 22,
    image: img02,
    businessType: "STUDIO",
    businessName: "Focus Art Studio",
    city: "Hyderabad",
    state: "Telangana",
    reviews: 44,
    rating: 4.6,
  },
  {
    id: 23,
    image: img03,
    businessType: "FREELANCER",
    businessName: "Palette Photography",
    city: "Hyderabad",
    state: "Telangana",
    reviews: 97,
    rating: 4.8,
  },
  {
    id: 24,
    image: img04,
    businessType: "STUDIO",
    businessName: "Studio Abhiram",
    city: "Hyderabad",
    state: "Telangana",
    reviews: 73,
    rating: 4.7,
  },
  {
    id: 25,
    image: img05,
    businessType: "DIGITAL LAB",
    businessName: "Citylens Digital Lab",
    city: "Hyderabad",
    state: "Telangana",
    reviews: 62,
    rating: 4.9,
  },
];

const PAGE_SIZE = 25;

const IconPin = () => (
  <svg
    viewBox="0 0 24 24"
    width="11"
    height="11"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
  </svg>
);

const RELATED_SEARCHES = [
  "Top Photographers in Hyderabad",
  "Best Wedding Photographers Hyderabad",
  "Candid Photography Studios Hyderabad",
  "Pre-Wedding Shoot Photographers Hyderabad",
  "Birthday Photography Hyderabad",
  "Product Photography Studios Hyderabad",
  "Maternity Photoshoot Hyderabad",
  "Corporate Event Photographers Hyderabad",
  "Baby Photography Hyderabad",
  "Fashion Photographers Hyderabad",
  "Architecture Photography Hyderabad",
  "Food Photography Hyderabad",
];

const HOW_IT_WORKS = [
  {
    num: "01",
    title: "Search & Filter",
    desc: "Browse photographers, studios, digital labs, and freelancers in your city. Filter by budget, style, rating, and availability.",
  },
  {
    num: "02",
    title: "Compare & Shortlist",
    desc: "View portfolios, read verified reviews, and save favourites to your Pixstack wishlist for easy comparison.",
  },
  {
    num: "03",
    title: "Connect & Book",
    desc: "Send a direct enquiry or call the vendor. Confirm your booking and capture the perfect moments.",
  },
];

const Listbusinesses = () => {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const timerRef = useRef(null);

  const visibleItems = ALL_ITEMS.slice(0, visibleCount);
  const hasMore = visibleCount < ALL_ITEMS.length;

  const handleLike = (isLiked) => {
    setToastMessage(isLiked ? "Added to Wishlist" : "Removed from Wishlist");
    setShowToast(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setShowToast(false), 3000);
  };

  useEffect(() => () => clearTimeout(timerRef.current), []);

  return (
    <div className="list-page">
      {/* Wishlist toast */}
      <div
        className={`list-page__toast${showToast ? " list-page__toast--visible" : ""}`}
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
        {toastMessage}
      </div>

      {/* Page header */}
      <div className="list-page__header">
        <div className="list-page__title-row">
          <h1 className="list-page__title">Photographers in</h1>
          <span className="list-page__city-badge">
            <IconPin />
            Hyderabad
          </span>
        </div>
        <p className="list-page__caption">
          Showing 200 results as per your search criteria
        </p>
      </div>

      {/* Business grid — 5 columns × 5 rows = 25 cards */}
      <div className="list-page__grid">
        {visibleItems.map((item) => (
          <Listitem
            key={item.id}
            image={item.image}
            businessType={item.businessType}
            businessName={item.businessName}
            city={item.city}
            state={item.state}
            reviews={item.reviews}
            rating={item.rating}
            onLike={handleLike}
            onClick={() => navigate(`/business/${item.id}`)}
          />
        ))}
      </div>

      {/* Load More */}
      <div className="list-page__load-more-wrap">
        <button
          className="list-page__load-more"
          onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
          disabled={!hasMore}
        >
          {hasMore ? "Load More" : "No More Results"}
        </button>
      </div>

      {/* ── Content sections (Pixstack-branded) ─────────────────────────────── */}

      {/* About */}
      <div className="list-page__content-section">
        <h2 className="list-page__content-title">
          Photographers in Hyderabad — Find Your Perfect Match on Pixstack
        </h2>
        <p className="list-page__content-text">
          Hyderabad is home to some of India's finest photography talent — from
          award-winning wedding studios to emerging candid freelancers. Whether
          you're planning a grand destination wedding, a corporate event, a
          product launch, or a personal portrait session, Pixstack connects you
          with verified professionals who bring stories to life through their
          lens.
        </p>
        <p className="list-page__content-text">
          With over 200 active photography vendors listed in Hyderabad, Pixstack
          makes it easy to browse portfolios, compare pricing, read genuine
          client reviews, and enquire directly — all in one place. Every listing
          on Pixstack is manually verified to ensure quality and authenticity.
        </p>
        <p className="list-page__content-text">
          Popular photography niches in Hyderabad include wedding &amp; candid
          photography, pre-wedding shoots at iconic city landmarks, maternity
          &amp; newborn photography, product &amp; commercial shoots, and
          corporate event coverage. Use Pixstack's filters to narrow down by
          category, price range, and availability.
        </p>
      </div>

      {/* How it works */}
      <div className="list-page__content-section">
        <h2 className="list-page__content-title">How Pixstack Works</h2>
        <div className="list-page__steps">
          {HOW_IT_WORKS.map((step) => (
            <div key={step.num} className="list-page__step">
              <span className="list-page__step-num">{step.num}</span>
              <h3 className="list-page__step-title">{step.title}</h3>
              <p className="list-page__step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popular searches */}
      <div className="list-page__content-section">
        <h2 className="list-page__content-title">
          Popular Searches in Hyderabad
        </h2>
        <p className="list-page__content-text">
          Discover what other users are searching for on Pixstack in Hyderabad.
          Tap a keyword to explore matching listings instantly.
        </p>
        <div className="list-page__tags">
          {RELATED_SEARCHES.map((tag) => (
            <span key={tag} className="list-page__tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Why Pixstack */}
      <div className="list-page__content-section">
        <h2 className="list-page__content-title">Why Choose Pixstack?</h2>
        <p className="list-page__content-text">
          <strong>Verified Listings</strong> — Every photographer and studio on
          Pixstack goes through a manual verification process. You'll never book
          someone based on fake reviews or unverified credentials.
        </p>
        <hr className="list-page__content-divider" />
        <p className="list-page__content-text">
          <strong>All Photography Segments in One Place</strong> — Studios,
          freelancers, digital labs, album vendors, camera sellers, trainers,
          and rental services — Pixstack is the only platform built exclusively
          for the photography industry in India.
        </p>
        <hr className="list-page__content-divider" />
        <p className="list-page__content-text">
          <strong>Free for Clients</strong> — Searching, shortlisting, and
          contacting vendors on Pixstack is completely free for clients. No
          hidden charges, no booking fees.
        </p>
        <hr className="list-page__content-divider" />
        <p className="list-page__content-text">
          <strong>List Your Business</strong> — Are you a photographer or studio
          owner in Hyderabad? Get discovered by thousands of clients actively
          searching for photography services. Create your free Pixstack profile
          today.
        </p>
      </div>
    </div>
  );
};

export default Listbusinesses;
