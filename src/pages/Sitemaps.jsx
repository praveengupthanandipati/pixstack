import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sitemaps.scss";

const SITEMAP = [
  {
    section: "Main",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    links: [
      { label: "Home", path: "/" },
      { label: "Browse Businesses", path: "/businesses" },
      { label: "Jobs", path: "/jobs" },
      { label: "Blogs", path: "/blogs" },
      { label: "Post Your Request", path: "/post-request" },
    ],
  },
  {
    section: "Categories",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    links: [
      { label: "Photographers", path: "/photographers" },
      { label: "Photo Studios", path: "/photo-studios" },
      { label: "Digital Labs", path: "/digital-labs" },
      { label: "Album & Camera Vendors", path: "/vendors" },
      { label: "Photography Training", path: "/training" },
      { label: "Camera Rentals", path: "/camerarentals" },
      { label: "Studio Rentals", path: "/studiorentals" },
    ],
  },
  {
    section: "User Account",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    links: [
      { label: "Login / Sign Up", path: "/login" },
      { label: "My Profile", path: "/profile" },
      { label: "My Favourites", path: "/favourite-profiles" },
    ],
  },
  {
    section: "Business Dashboard",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    links: [
      { label: "Business Login", path: "/business-login" },
      { label: "Business Sign Up", path: "/business-signup" },
      { label: "Basic Details", path: "/business-basic" },
      { label: "About Business", path: "/business-about" },
      { label: "Services", path: "/business-services" },
      { label: "Gallery", path: "/business-gallery" },
      { label: "Jobs", path: "/business-jobs" },
      { label: "Customer Reviews", path: "/business-reviews" },
      { label: "Enquiries", path: "/business-enquiries" },
      { label: "Social Profiles", path: "/business-social" },
      { label: "Working Hours", path: "/business-working-hours" },
    ],
  },
  {
    section: "Company",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    links: [
      { label: "About Pixstack", path: "/about" },
      { label: "Contact Us", path: "/contact" },
      { label: "FAQs", path: "/faqs" },
    ],
  },
  {
    section: "Legal",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    links: [
      { label: "Privacy Policy", path: "/privacy" },
      { label: "Legal Terms", path: "/legal-terms" },
      { label: "Cookies Policy", path: "/cookies-policy" },
      { label: "Site Map", path: "/site-maps" },
    ],
  },
];

const Sitemaps = () => (
  <div className="sitemap">
    {/* Hero */}
    <div className="sitemap__hero">
      <div className="sitemap__hero-content">
        <span className="sitemap__eyebrow">pixstack.in</span>
        <h1 className="sitemap__title">Site Map</h1>
        <p className="sitemap__subtitle">
          A complete index of every page on Pixstack — India's dedicated
          photography marketplace.
        </p>
      </div>
    </div>

    {/* Grid */}
    <div className="sitemap__body">
      <div className="sitemap__grid">
        {SITEMAP.map((group) => (
          <div key={group.section} className="sitemap__card">
            <div className="sitemap__card-head">
              <span className="sitemap__card-icon">{group.icon}</span>
              <h2 className="sitemap__card-title">{group.section}</h2>
            </div>
            <ul className="sitemap__list">
              {group.links.map((link) => (
                <li key={link.path} className="sitemap__item">
                  <Link to={link.path} className="sitemap__link">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none"
                      stroke="currentColor" strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round"
                      className="sitemap__arrow" aria-hidden="true">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Sitemaps;
