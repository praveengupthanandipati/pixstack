import React, { useState } from "react";
import Leftnav from "./Leftnav";
import "../../styles/Businessprofile.scss";
import "../../styles/Businessbasic.scss";
import "../../styles/Customerenquiries.scss";

// ─── Seed enquiries ───────────────────────────────────────────────────────────
const ENQUIRIES = [
  {
    id: 1,
    name: "Rahul Sharma",
    phone: "9876543210",
    email: "rahul.sharma@gmail.com",
    message:
      "Hi, I am planning my wedding in February 2026 and would like to know your packages for full-day candid wedding photography along with pre-wedding shoot.",
    date: "2025-06-01",
  },
  {
    id: 2,
    name: "Priya Reddy",
    phone: "9845012345",
    email: "priya.reddy@outlook.com",
    message:
      "We need a photographer for our annual corporate event on 20th July. Please share your rates for 6-hour event coverage with edited photos delivered within 5 days.",
    date: "2025-05-28",
  },
  {
    id: 3,
    name: "Sneha Gupta",
    phone: "9123456789",
    email: "sneha.gupta@yahoo.com",
    message:
      "Looking for maternity photography session, preferably outdoor. My due date is in August. Can we schedule something in July? Please let me know your availability.",
    date: "2025-05-20",
  },
  {
    id: 4,
    name: "Arjun Mehta",
    phone: "9988776655",
    email: "arjun.mehta@business.com",
    message:
      "We are launching a new jewellery collection and need professional product photography. Around 50 pieces. Can you provide a quote for studio shoot?",
    date: "2025-04-15",
  },
  {
    id: 5,
    name: "Deepa Nair",
    phone: "9765432109",
    email: "deepa.nair@gmail.com",
    message:
      "I run a fashion boutique and need lookbook photos for our new summer collection. About 20 outfits, 2 models. Please share your fashion photography packages.",
    date: "2025-04-02",
  },
  {
    id: 6,
    name: "Karan Singh",
    phone: "9654321098",
    email: "karan.singh@startup.io",
    message:
      "Startup launch event in Hyderabad HITEC City on May 5th. Need event photography and a short reel for social media. How much would this cost?",
    date: "2025-03-18",
  },
  {
    id: 7,
    name: "Anitha Chowdary",
    phone: "9543210987",
    email: "anitha.chowdary@hotmail.com",
    message:
      "Interested in candid wedding photography for my daughter's wedding this December. Guest count approximately 400. Please share your wedding packages.",
    date: "2024-12-10",
  },
  {
    id: 8,
    name: "Rohit Bose",
    phone: "9432109876",
    email: "rohit.bose@restaurant.com",
    message:
      "I own a restaurant and need food photography for our new menu. Around 40-50 dishes. Would like to schedule a studio shoot at your location if possible.",
    date: "2024-11-22",
  },
  {
    id: 9,
    name: "Meena Krishnan",
    phone: "9321098765",
    email: "meena.krishnan@college.edu",
    message:
      "Looking for a photographer for our college annual day celebration on 15th January 2025. Around 500 students. Please quote for 8-hour coverage.",
    date: "2024-10-05",
  },
  {
    id: 10,
    name: "Vikram Patil",
    phone: "9210987654",
    email: "vikram.patil@agency.in",
    message:
      "Our advertising agency needs commercial photography for a new real estate project. Multiple locations in Hyderabad. Interested in a long-term partnership.",
    date: "2024-08-14",
  },
];

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const IconPhone = (
  <svg
    viewBox="0 0 24 24"
    width="13"
    height="13"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3-8.63A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 5.61 5.61l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const IconEmail = (
  <svg
    viewBox="0 0 24 24"
    width="13"
    height="13"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const IconCalendar = (
  <svg
    viewBox="0 0 24 24"
    width="13"
    height="13"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const IconMessage = (
  <svg
    viewBox="0 0 24 24"
    width="13"
    height="13"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

// ─── Helpers ──────────────────────────────────────────────────────────────────
const fmtDate = (val) => {
  const d = new Date(val + "T00:00:00");
  return isNaN(d)
    ? val
    : d.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
};

const AVATAR_COLORS = [
  "#E42929",
  "#3d6ee6",
  "#2a9d2a",
  "#c46b00",
  "#7b3db5",
  "#0087a8",
  "#a83d3d",
  "#4a7a4a",
  "#b21d20",
  "#8b4513",
];

// ─── Page ─────────────────────────────────────────────────────────────────────
const Customerenquiries = () => {
  const years = [...new Set(ENQUIRIES.map((e) => e.date.slice(0, 4)))].sort(
    (a, b) => b - a,
  );
  const [year, setYear] = useState("All");

  const filtered =
    year === "All"
      ? ENQUIRIES
      : ENQUIRIES.filter((e) => e.date.startsWith(year));

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
                <h2 className="bb-hd__title">
                  Customer <span>Enquiries</span>
                </h2>
                <p className="bb-hd__sub">
                  {filtered.length}{" "}
                  {filtered.length === 1 ? "enquiry" : "enquiries"}
                </p>
              </div>
            </div>

            <div className="bb-body">
              {/* ── Year filter ── */}
              <div className="bb-section enq-filter-section">
                <div className="enq-filter">
                  <span className="enq-filter__label">Filter by Year</span>
                  <div className="enq-filter__chips">
                    {["All", ...years].map((y) => (
                      <button
                        key={y}
                        className={`enq-filter__chip${year === y ? " is-active" : ""}`}
                        onClick={() => setYear(y)}
                      >
                        {y}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── Enquiry cards ── */}
              <div className="bb-section" style={{ borderBottom: "none" }}>
                {filtered.length > 0 ? (
                  <div className="enq-list">
                    {filtered.map((enq, i) => (
                      <div key={enq.id} className="enq-card">
                        {/* Card head */}
                        <div className="enq-card__head">
                          <div
                            className="enq-card__avatar"
                            style={{
                              background:
                                AVATAR_COLORS[i % AVATAR_COLORS.length],
                            }}
                          >
                            <span>
                              {enq.name
                                .split(" ")
                                .map((w) => w[0])
                                .join("")
                                .slice(0, 2)
                                .toUpperCase()}
                            </span>
                          </div>
                          <div className="enq-card__info">
                            <p className="enq-card__name">{enq.name}</p>
                            <div className="enq-card__contacts">
                              <a
                                href={`tel:+91${enq.phone}`}
                                className="enq-card__phone"
                              >
                                {IconPhone}
                                +91 {enq.phone}
                              </a>
                              <a
                                href={`mailto:${enq.email}`}
                                className="enq-card__email"
                              >
                                {IconEmail}
                                {enq.email}
                              </a>
                            </div>
                          </div>
                          <div className="enq-card__date">
                            {IconCalendar}
                            {fmtDate(enq.date)}
                          </div>
                        </div>

                        {/* Message */}
                        <div className="enq-card__message">
                          <span className="enq-card__message-icon">
                            {IconMessage}
                          </span>
                          <p>{enq.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="enq-empty">
                    <p>No enquiries found for {year}.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customerenquiries;
