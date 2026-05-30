import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logoSvg from "../assets/logo.svg";
import "../styles/Header.scss";

// ── Predefined search keyword groups ─────────────────────────────────────────
const SEARCH_SUGGESTIONS = [
  {
    group: "Photographers",
    items: [
      "Top Photographers in Hyderabad",
      "Best photographers in Hyderabad",
      "Professional photographers Hyderabad",
      "Top rated photographers Hyderabad",
      "Famous photographers in Hyderabad",
      "Leading photography studios Hyderabad",
    ],
  },
  {
    group: "Wedding Photographers",
    items: [
      "Top Wedding Photographers in Hyderabad",
      "Best wedding photographers Hyderabad",
      "Candid wedding photographers Hyderabad",
      "Top wedding photography services Hyderabad",
      "Luxury wedding photographers Hyderabad",
      "Affordable wedding photographers Hyderabad",
      "Pre-wedding shoot photographers Hyderabad",
      "Wedding cinematographers Hyderabad",
    ],
  },
  {
    group: "Album & Camera Sellers",
    items: [
      "Best camera stores Hyderabad",
      "Top camera dealers Hyderabad",
      "DSLR camera shops Hyderabad",
      "Wedding album printers Hyderabad",
      "Photography equipment rentals Hyderabad",
      "Mirrorless camera sellers Hyderabad",
      "Photo album makers Hyderabad",
      "Second hand camera sellers Hyderabad",
    ],
  },
  {
    group: "Photography Trainers",
    items: [
      "Best photography courses Hyderabad",
      "Photography coaching institutes Hyderabad",
      "Top photography workshops Hyderabad",
      "Professional photography training Hyderabad",
      "Photography mentors Hyderabad",
      "Beginner photography classes Hyderabad",
      "Advanced photography trainers Hyderabad",
      "Mobile photography training Hyderabad",
      "Post-processing photography classes Hyderabad",
      "Commercial photography trainers Hyderabad",
    ],
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
const Header = () => {
  const [menuOpen, setMenuOpen]         = useState(false);
  const [searchOpen, setSearchOpen]     = useState(false);
  const [query, setQuery]               = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeIndex, setActiveIndex]   = useState(-1);
  const searchInputRef                  = useRef(null);
  const dropdownRef                     = useRef(null);
  const itemRefs                        = useRef([]);

  const openMenu  = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  const openSearch = () => {
    setSearchOpen(true);
    setShowDropdown(true);
    setActiveIndex(-1);
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setShowDropdown(false);
    setQuery("");
    setActiveIndex(-1);
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
    setShowDropdown(true);
    setActiveIndex(-1);
  };

  const handleSuggestionClick = (text) => {
    setQuery(text);
    setShowDropdown(false);
    setActiveIndex(-1);
    if (searchInputRef.current) searchInputRef.current.focus();
  };

  // Lock body scroll while off-canvas is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Auto-focus input when search bar opens
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Build the filtered suggestion list
  const trimmed = query.trim().toLowerCase();
  const filteredGroups = trimmed
    ? SEARCH_SUGGESTIONS.map((g) => ({
        ...g,
        items: g.items.filter((item) => item.toLowerCase().includes(trimmed)),
      })).filter((g) => g.items.length > 0)
    : SEARCH_SUGGESTIONS;

  // Flat list used for keyboard index arithmetic
  const flatItems = filteredGroups.flatMap((g) => g.items);

  // Scroll the active row into view whenever activeIndex changes
  useEffect(() => {
    if (activeIndex >= 0 && itemRefs.current[activeIndex]) {
      itemRefs.current[activeIndex].scrollIntoView({ block: "nearest" });
    }
  }, [activeIndex]);

  // Keyboard handler — ↑ ↓ navigate, Enter selects, Escape closes
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      closeSearch();
      return;
    }
    if (!showDropdown || flatItems.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => Math.min(prev + 1, flatItems.length - 1));
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => Math.max(prev - 1, -1));
      return;
    }
    if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0 && flatItems[activeIndex]) {
        handleSuggestionClick(flatItems[activeIndex]);
      } else {
        // no item highlighted — submit search as-is
        setShowDropdown(false);
      }
    }
  };

  // Highlight matching portion of a suggestion label
  const highlight = (text) => {
    if (!trimmed) return text;
    const idx = text.toLowerCase().indexOf(trimmed);
    if (idx === -1) return text;
    return (
      <>
        {text.slice(0, idx)}
        <mark>{text.slice(idx, idx + trimmed.length)}</mark>
        {text.slice(idx + trimmed.length)}
      </>
    );
  };

  return (
    <>
      {/* ── Sticky header bar ─────────────────────────────────────────────── */}
      <header className={`site-header${searchOpen ? " search-active" : ""}`}>
        <div className="header-inner">

          {/* Left — always visible */}
          <div className="header-left">
            <button
              className="menu-btn"
              onClick={openMenu}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
            >
              <span className="menu-icon">
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
              </span>
              <span className="menu-label">Menu</span>
            </button>

            <Link to="/post-your-needs" className="nav-link post-needs">
              Post Your Needs
            </Link>

            <button
              className="search-btn"
              onClick={openSearch}
              aria-label="Open search"
            >
              <svg viewBox="0 0 24 24" width="17" height="17" fill="none"
                stroke="currentColor" strokeWidth="2.2"
                strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7.5" />
                <line x1="20.5" y1="20.5" x2="16.2" y2="16.2" />
              </svg>
            </button>
          </div>

          {/* Center – Logo */}
          <div className="header-center">
            <Link to="/" className="logo" aria-label="Pixstack home">
              <img src={logoSvg} alt="Pixstack" className="logo-img" />
            </Link>
          </div>

          {/* Expanding search bar */}
          <div className="header-search" role="search">
            <input
              ref={searchInputRef}
              type="search"
              className="header-search__input"
              placeholder="Search Photographers, Studios, Vendors, Trainers"
              aria-label="Search"
              value={query}
              onChange={handleQueryChange}
              onFocus={() => setShowDropdown(true)}
              onKeyDown={handleKeyDown}
              autoComplete="off"
            />
          </div>

          {/* Right — login only */}
          <div className="header-right">
            <Link to="/login" className="nav-link login-link">
              Login / Signup
            </Link>
          </div>

          {/* Close button */}
          <button
            className="search-close-btn"
            onClick={closeSearch}
            aria-label="Close search"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
              stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Business Profile — flush to right edge */}
          <Link to="/business-profile" className="btn-business">
            + Business Profile
          </Link>

        </div>

        {/* ── Search suggestions dropdown ──────────────────────────────────── */}
        {(() => {
          // reset ref array length before each render
          itemRefs.current = [];
          let globalIdx = 0;
          return (
            <div
              ref={dropdownRef}
              className={`search-dropdown${searchOpen && showDropdown && filteredGroups.length > 0 ? " is-open" : ""}`}
              role="listbox"
              aria-label="Search suggestions"
            >
              {filteredGroups.map((group) => (
                <div key={group.group} className="search-dropdown__group">
                  <p className="search-dropdown__group-label">{group.group}</p>
                  <ul className="search-dropdown__list">
                    {group.items.map((item) => {
                      const idx = globalIdx++;
                      return (
                        <li key={item} role="option" aria-selected={idx === activeIndex}>
                          <button
                            ref={(el) => { itemRefs.current[idx] = el; }}
                            className={`search-dropdown__item${idx === activeIndex ? " is-active" : ""}`}
                            onMouseDown={(e) => {
                              e.preventDefault();
                              handleSuggestionClick(item);
                            }}
                            onMouseEnter={() => setActiveIndex(idx)}
                            onMouseLeave={() => setActiveIndex(-1)}
                            tabIndex={-1}
                          >
                            <svg viewBox="0 0 24 24" width="13" height="13" fill="none"
                              stroke="currentColor" strokeWidth="2"
                              strokeLinecap="round" strokeLinejoin="round"
                              className="search-dropdown__icon" aria-hidden="true">
                              <circle cx="11" cy="11" r="7.5" />
                              <line x1="20.5" y1="20.5" x2="16.2" y2="16.2" />
                            </svg>
                            <span>{highlight(item)}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          );
        })()}
      </header>

      {/* ── Off-canvas backdrop ────────────────────────────────────────────── */}
      <div
        className={`offcanvas-backdrop${menuOpen ? " is-active" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* ── Off-canvas panel (slides in from left) ────────────────────────── */}
      <nav
        className={`offcanvas-nav${menuOpen ? " is-open" : ""}`}
        aria-label="Main navigation"
        aria-hidden={!menuOpen}
      >
        <div className="offcanvas-nav__head">
          <Link to="/" className="offcanvas-nav__logo" onClick={closeMenu}>
            <img src={logoSvg} alt="Pixstack" />
          </Link>
          <button className="offcanvas-nav__close" onClick={closeMenu} aria-label="Close menu">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none"
              stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <ul className="offcanvas-nav__list">
          <li><Link to="/photographers" className="offcanvas-nav__link" onClick={closeMenu}>Photographers</Link></li>
          <li><Link to="/photo-studios" className="offcanvas-nav__link" onClick={closeMenu}>Photo Studios</Link></li>
          <li><Link to="/digital-labs" className="offcanvas-nav__link" onClick={closeMenu}>Digital Labs</Link></li>
          <li><Link to="/vendors" className="offcanvas-nav__link" onClick={closeMenu}>Album &amp; Camera Vendors</Link></li>
          <li><Link to="/training" className="offcanvas-nav__link" onClick={closeMenu}>Training</Link></li>
        </ul>

        <div className="offcanvas-nav__footer">
          <Link to="/business-profile" className="offcanvas-nav__cta" onClick={closeMenu}>
            + Business Profile
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
