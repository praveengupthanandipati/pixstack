import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Leftnav from "./Leftnav";
import img01 from "../../assets/list-itemsimg/listitemimg01.jpg";
import img02 from "../../assets/list-itemsimg/listitemimg02.jpg";
import img03 from "../../assets/list-itemsimg/listitemimg03.jpg";
import img05 from "../../assets/list-itemsimg/listitemimg05.jpg";
import img07 from "../../assets/list-itemsimg/listitemimg07.jpg";
import img09 from "../../assets/list-itemsimg/listitemimg09.jpg";
import "../../styles/Userprofile.scss";
import "../../styles/Favouriteprofiles.scss";

// ─── Seed data ────────────────────────────────────────────────────────────────
const SEED_FAVOURITES = [
  {
    id: 1,
    image: img01,
    businessType: "STUDIO",
    businessName: "Focus Snaps Photography",
    city: "Hyderabad",
    state: "Telangana",
    reviews: 124,
    rating: 4.9,
  },
  {
    id: 2,
    image: img03,
    businessType: "FREELANCER",
    businessName: "Pixel Dreams Studio",
    city: "Hyderabad",
    state: "Telangana",
    reviews: 89,
    rating: 4.8,
  },
  {
    id: 3,
    image: img05,
    businessType: "DIGITAL LAB",
    businessName: "LensWork Digital Lab",
    city: "Secunderabad",
    state: "Telangana",
    reviews: 43,
    rating: 4.6,
  },
  {
    id: 4,
    image: img07,
    businessType: "STUDIO",
    businessName: "Golden Shutter Studio",
    city: "Hyderabad",
    state: "Telangana",
    reviews: 112,
    rating: 4.9,
  },
  {
    id: 5,
    image: img02,
    businessType: "FREELANCER",
    businessName: "Iris Frame Photography",
    city: "Hyderabad",
    state: "Telangana",
    reviews: 77,
    rating: 4.8,
  },
  {
    id: 6,
    image: img09,
    businessType: "TRAINER",
    businessName: "SnapArt Photography School",
    city: "Hyderabad",
    state: "Telangana",
    reviews: 58,
    rating: 4.7,
  },
];

// ─── Icons ────────────────────────────────────────────────────────────────────
const IconPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconStar = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const IconHeart = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="1.4"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

// ─── Favourite Card ───────────────────────────────────────────────────────────
const FavCard = ({ item, onUnfavourite, navigate }) => {
  const trigger = (e) => { e.stopPropagation(); onUnfavourite(item); };

  return (
    <div className="fav-card" onClick={() => navigate(`/business/${item.id}`)}>
      <div className="fav-card__img-wrap">
        <img src={item.image} alt={item.businessName} className="fav-card__img" loading="lazy" />
        <span className="fav-card__type-badge">{item.businessType}</span>
        <button className="fav-card__heart-btn" onClick={trigger} aria-label="Remove from favourites">
          <IconHeart />
        </button>
      </div>
      <div className="fav-card__body">
        <h3 className="fav-card__name">{item.businessName}</h3>
        <p className="fav-card__location">
          <IconPin />
          {item.city}, {item.state}
        </p>
        <hr className="fav-card__divider" />
        <div className="fav-card__footer">
          <span className="fav-card__reviews">{item.reviews} Reviews</span>
          <span className="fav-card__rating">
            <IconStar />
            {Number(item.rating).toFixed(1)}
          </span>
        </div>
        <button className="fav-card__unfav-btn" onClick={trigger}>
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          Un-favourite
        </button>
      </div>
    </div>
  );
};

const TOAST_DURATION = 4000;

// ─── Page ─────────────────────────────────────────────────────────────────────
const Favouriteprofiles = () => {
  const navigate                      = useNavigate();
  const [favourites, setFavourites]   = useState(SEED_FAVOURITES);
  const [confirmItem, setConfirmItem] = useState(null);
  const [undoData, setUndoData]       = useState(null); // { item, index }
  const [toastOpen, setToastOpen]     = useState(false);
  const timerRef                      = useRef(null);

  // ── Confirm dialog ──────────────────────────────────────────────────────────
  const handleUnfavourite = (item) => setConfirmItem(item);

  const handleConfirmRemove = () => {
    const idx = favourites.findIndex((f) => f.id === confirmItem.id);
    setUndoData({ item: confirmItem, index: idx });
    setFavourites((prev) => prev.filter((f) => f.id !== confirmItem.id));
    setConfirmItem(null);
    setToastOpen(true);

    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setToastOpen(false);
      setUndoData(null);
    }, TOAST_DURATION);
  };

  const handleCancelConfirm = () => setConfirmItem(null);

  // ── Undo ────────────────────────────────────────────────────────────────────
  const handleUndo = () => {
    clearTimeout(timerRef.current);
    if (undoData) {
      setFavourites((prev) => {
        const list = [...prev];
        list.splice(undoData.index, 0, undoData.item);
        return list;
      });
    }
    setToastOpen(false);
    setUndoData(null);
  };

  return (
    <div className="user-profile">
      <div className="user-profile__wrapper">
        {/* Sidebar */}
        <div className="user-profile__sidebar">
          <Leftnav />
        </div>

        {/* Main */}
        <div className="user-profile__main">
          <div className="user-profile__card">
            {/* Header */}
            <div className="fav-hd">
              <div>
                <h2 className="fav-hd__title">
                  Your <span>Favourites</span>
                </h2>
                <p className="fav-hd__sub">
                  {favourites.length} saved{" "}
                  {favourites.length === 1 ? "business" : "businesses"}
                </p>
              </div>
            </div>

            {/* Grid or empty state */}
            {favourites.length > 0 ? (
              <div className="fav-grid">
                {favourites.map((item) => (
                  <FavCard
                    key={item.id}
                    item={item}
                    onUnfavourite={handleUnfavourite}
                    navigate={navigate}
                  />
                ))}
              </div>
            ) : (
              <div className="fav-empty">
                <svg
                  viewBox="0 0 24 24"
                  width="52"
                  height="52"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                <p className="fav-empty__title">No favourites yet</p>
                <span className="fav-empty__sub">
                  Explore photographers and studios, then save the ones you
                  love.
                </span>
                <Link to="/businesses" className="fav-empty__cta">
                  Explore Businesses
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Confirm dialog ──────────────────────────────────────────────────── */}
      {confirmItem && (
        <div className="fav-confirm-overlay" onClick={handleCancelConfirm}>
          <div className="fav-confirm" onClick={(e) => e.stopPropagation()}>
            <div className="fav-confirm__icon">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"
                stroke="currentColor" strokeWidth="1.4">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <h3 className="fav-confirm__title">Remove from Favourites?</h3>
            <p className="fav-confirm__msg">
              <strong>{confirmItem.businessName}</strong> will be removed from your saved businesses.
            </p>
            <div className="fav-confirm__actions">
              <button className="fav-confirm__remove-btn" onClick={handleConfirmRemove}>
                Yes, Remove
              </button>
              <button className="fav-confirm__cancel-btn" onClick={handleCancelConfirm}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Toast notification with undo ────────────────────────────────────── */}
      {toastOpen && (
        <div className="fav-toast">
          <div className="fav-toast__left">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor"
              strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>Removed from favourites</span>
          </div>
          <button className="fav-toast__undo" onClick={handleUndo}>Undo</button>
          <div className="fav-toast__progress" />
        </div>
      )}

      {/* Promo Banner */}
      <div className="user-profile__promo-wrap">
        <div className="user-profile__promo">
          <div className="user-profile__promo-glow" />
          <div className="user-profile__promo-left">
            <div className="user-profile__promo-chips">
              <span>Photography</span>
              <span>Video Editor</span>
              <span>Videographer</span>
            </div>
            <h3 className="user-profile__promo-heading">
              Are you a Freelancer?
            </h3>
            <p className="user-profile__promo-text">
              Join with us and get leads from your locality
            </p>
          </div>
          <Link to="/list-business" className="user-profile__promo-btn">
            Join Now
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Favouriteprofiles;
