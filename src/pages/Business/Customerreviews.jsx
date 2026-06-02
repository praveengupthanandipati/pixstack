import React, { useState } from "react";
import Leftnav from "./Leftnav";
import "../../styles/Businessprofile.scss";
import "../../styles/Businessbasic.scss";
import "../../styles/Customerreviews.scss";

// ─── Seed reviews ─────────────────────────────────────────────────────────────
const REVIEWS = [
  {
    id: 1,
    name: "Rahul Sharma",
    initials: "RS",
    rating: 5,
    date: "March 2025",
    location: "Hyderabad, Telangana",
    text: "Absolutely stunning work! The team captured every detail of our wedding beautifully. Professional, creative, and incredibly patient. Every candid shot told a story. Highly recommend Focus Snaps to anyone looking for world-class photography!",
    color: "#E42929",
  },
  {
    id: 2,
    name: "Priya Reddy",
    initials: "PR",
    rating: 5,
    date: "February 2025",
    location: "Secunderabad, Telangana",
    text: "Booked them for our corporate event and the photos were delivered on time with exceptional quality. The team blended into the crowd perfectly and captured natural, unposed moments throughout the evening. Will definitely hire again.",
    color: "#3d6ee6",
  },
  {
    id: 3,
    name: "Venkat Rao",
    initials: "VR",
    rating: 4,
    date: "January 2025",
    location: "Hyderabad, Telangana",
    text: "Good work overall. The team was professional and the final photos came out great. There was a minor delay in the edited album delivery, but the quality more than made up for it. Very happy with the outcome.",
    color: "#2a9d2a",
  },
  {
    id: 4,
    name: "Sneha Gupta",
    initials: "SG",
    rating: 5,
    date: "December 2024",
    location: "Hyderabad, Telangana",
    text: "Our maternity shoot was beyond beautiful. The photographer was so calm and made us feel completely at ease. The outdoor lighting, the poses, the editing — everything was perfect. These photos will be treasured forever.",
    color: "#c46b00",
  },
  {
    id: 5,
    name: "Arjun Mehta",
    initials: "AM",
    rating: 5,
    date: "November 2024",
    location: "Mumbai, Maharashtra",
    text: "Exceptional portfolio work for our jewellery brand. Every shot highlighted the craftsmanship of our pieces. These guys truly understand product photography — composition, lighting, and detail are all spot on.",
    color: "#7b3db5",
  },
  {
    id: 6,
    name: "Deepa Nair",
    initials: "DN",
    rating: 4,
    date: "October 2024",
    location: "Hyderabad, Telangana",
    text: "Used their service for a fashion shoot for our boutique. The lighting and composition were top-notch. A touch expensive but absolutely worth every rupee. The images are magazine-quality.",
    color: "#0087a8",
  },
];

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const IconPin = (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor"
    strokeWidth="1.8" strokeLinecap="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

// ─── Star rating ──────────────────────────────────────────────────────────────
const StarRating = ({ rating }) => (
  <div className="cr-stars">
    {[1, 2, 3, 4, 5].map((n) => (
      <svg key={n} viewBox="0 0 24 24" width="13" height="13"
        fill={n <= rating ? "#E42929" : "none"}
        stroke={n <= rating ? "#E42929" : "#d4d4d4"}
        strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
  </div>
);

// ─── Average rating helper ────────────────────────────────────────────────────
const avgRating = (reviews) =>
  reviews.length === 0
    ? 0
    : (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);

// ─── Page ─────────────────────────────────────────────────────────────────────
const Customerreviews = () => {
  const [reviews] = useState(REVIEWS);

  const avg   = avgRating(reviews);
  const total = reviews.length;
  const dist  = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((r) => r.rating === star).length,
  }));

  return (
    <div className="biz-profile">
      <div className="biz-profile__wrapper">

        {/* Sidebar */}
        <div className="biz-profile__sidebar">
          <Leftnav />
        </div>

        {/* Main */}
        <div className="biz-profile__main">
          <div className="biz-profile__card">

            {/* Header */}
            <div className="bb-hd">
              <div>
                <h2 className="bb-hd__title">Customer <span>Reviews</span></h2>
                <p className="bb-hd__sub">{total} reviews from verified clients</p>
              </div>
            </div>

            <div className="bb-body">

              {/* ── Rating Summary ── */}
              <div className="bb-section cr-summary">
                <div className="cr-summary__score">
                  <strong className="cr-summary__avg">{avg}</strong>
                  <StarRating rating={Math.round(avg)} />
                  <span className="cr-summary__total">{total} reviews</span>
                </div>

                <div className="cr-summary__bars">
                  {dist.map(({ star, count }) => {
                    const pct = total > 0 ? Math.round((count / total) * 100) : 0;
                    return (
                      <div key={star} className="cr-bar-row">
                        <span className="cr-bar-label">{star} ★</span>
                        <div className="cr-bar-track">
                          <div className="cr-bar-fill" style={{ width: `${pct}%` }} />
                        </div>
                        <span className="cr-bar-count">{count}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* ── Reviews List ── */}
              <div className="bb-section" style={{ borderBottom: "none" }}>
                <div className="cr-list">
                  {reviews.map((r) => (
                    <div key={r.id} className="cr-card">
                      <div className="cr-card__head">
                        <div className="cr-card__avatar" style={{ background: r.color }}>
                          <span>{r.initials}</span>
                        </div>
                        <div className="cr-card__meta">
                          <p className="cr-card__name">{r.name}</p>
                          <div className="cr-card__row">
                            <StarRating rating={r.rating} />
                            <span className="cr-card__date">{r.date}</span>
                          </div>
                          <p className="cr-card__location">
                            {IconPin}
                            {r.location}
                          </p>
                        </div>
                      </div>
                      <p className="cr-card__text">{r.text}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customerreviews;
