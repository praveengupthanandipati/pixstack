import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../styles/MobileBottomNav.scss";

const LINK_ITEMS = [
  {
    label: "Home",
    to: "/",
    exact: true,
    icon: (active) => (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none"
        stroke="currentColor" strokeWidth={active ? "2.2" : "1.8"}
        strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
          fill={active ? "currentColor" : "none"} fillOpacity={active ? 0.12 : 0} />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    label: "Jobs",
    to: "/jobs",
    icon: (active) => (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none"
        stroke="currentColor" strokeWidth={active ? "2.2" : "1.8"}
        strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"
          fill={active ? "currentColor" : "none"} fillOpacity={active ? 0.1 : 0} />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
  },
  {
    label: "Account",
    to: "/profile",
    icon: (active) => (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none"
        stroke="currentColor" strokeWidth={active ? "2.2" : "1.8"}
        strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4"
          fill={active ? "currentColor" : "none"} fillOpacity={active ? 0.12 : 0} />
      </svg>
    ),
  },
];

const MobileBottomNav = () => {
  const { pathname } = useLocation();
  const [searchActive, setSearchActive] = useState(false);

  useEffect(() => {
    document.body.classList.add("has-bottom-nav");
    return () => document.body.classList.remove("has-bottom-nav");
  }, []);

  // Reflect when the header search opens/closes
  useEffect(() => {
    const onOpen  = () => setSearchActive(true);
    const onClose = () => setSearchActive(false);
    window.addEventListener("pixstack:search-opened", onOpen);
    window.addEventListener("pixstack:search-closed", onClose);
    return () => {
      window.removeEventListener("pixstack:search-opened", onOpen);
      window.removeEventListener("pixstack:search-closed", onClose);
    };
  }, []);

  const handleSearchClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.dispatchEvent(new CustomEvent("pixstack:open-search"));
  };

  return (
    <nav className="mob-nav" aria-label="Mobile navigation">

      {/* Home */}
      {LINK_ITEMS.slice(0, 1).map((item) => {
        const active = item.exact ? pathname === item.to : pathname.startsWith(item.to);
        return (
          <NavLink key={item.to} to={item.to} end={item.exact}
            className={({ isActive }) => `mob-nav__item${isActive ? " is-active" : ""}`}
            aria-label={item.label}>
            <span className="mob-nav__icon">{item.icon(active)}</span>
            <span className="mob-nav__label">{item.label}</span>
          </NavLink>
        );
      })}

      {/* Search — fires header search */}
      <button
        className={`mob-nav__item${searchActive ? " is-active" : ""}`}
        onClick={handleSearchClick}
        aria-label="Search"
      >
        <span className="mob-nav__icon">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none"
            stroke="currentColor" strokeWidth={searchActive ? "2.2" : "1.8"}
            strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"
              fill={searchActive ? "currentColor" : "none"}
              fillOpacity={searchActive ? 0.1 : 0} />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>
        <span className="mob-nav__label">Search</span>
      </button>

      {/* Jobs + Account */}
      {LINK_ITEMS.slice(1).map((item) => {
        const active = pathname.startsWith(item.to);
        return (
          <NavLink key={item.to} to={item.to}
            className={({ isActive }) => `mob-nav__item${isActive ? " is-active" : ""}`}
            aria-label={item.label}>
            <span className="mob-nav__icon">{item.icon(active)}</span>
            <span className="mob-nav__label">{item.label}</span>
          </NavLink>
        );
      })}

    </nav>
  );
};

export default MobileBottomNav;
