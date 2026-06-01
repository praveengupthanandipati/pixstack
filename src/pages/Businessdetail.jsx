import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Listitem from "../components/Listitem";
import "../styles/Businessdetail.scss";
import bannerImg from "../assets/businessdetailbanner.jpg";
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

// ─── Static data ──────────────────────────────────────────────────────────────

const BUSINESS = {
  name: "Focus Snaps Photography",
  tagline: "Capturing Moments, Creating Memories",
  address: "3rd Floor, Prestige Centre, Banjara Hills, Hyderabad – 500034, Telangana",
  phone: "+91 98765 43210",
  email: "hello@focussnaps.com",
  website: "www.focussnaps.com",
  since: "4 years 1 month",
  experience: "5–7 Yrs",
  projects: 120,
  teamSize: 15,
  about:
    "Focus Snaps Photography is a premium studio based in Hyderabad specialising in wedding, portrait, and commercial photography. With over five years of hands-on experience and 120+ successful projects, our team of skilled photographers is passionate about capturing life's most precious moments with an artistic eye. We believe every frame tells a story — and we are here to tell yours. From intimate candid portraits to grand destination weddings, we bring creativity, technical expertise, and genuine care to every assignment.",
};

const SERVICES = [
  "Wedding Photography", "Event Photography", "Fashion Photography",
  "Portrait Photography", "Product Photography", "Fine Art Photography",
  "Architectural Photography", "Travel Photography", "Advertising",
  "Lifestyle Photography", "Photo Journalism", "Newborn Photography",
  "Maternity Photography", "Corporate Photography", "Food Photography",
];

const PHOTOS = [
  img01, img02, img03, img04, img05,
  img06, img07, img08, img09, img10,
  img01, img02, img03, img04, img05,
  img06, img07, img08, img09, img10, 
];

const VIDEOS = [
  { id: "ZOmECGBCBdo", title: "Wedding Highlight Reel — Sai & Priya | Focus Snaps" },
  { id: "Hq1X0Rmz5nI", title: "Corporate Event Coverage — TechSummit Hyderabad 2024" },
  { id: "_HvLxkiI6ic", title: "Portrait Photography — Behind the Lens with Focus Snaps" },
  { id: "J0e8nK-9MuQ", title: "Product & Commercial Shoot — Jewellery Brand Collab" },
];

const AVATAR_COLORS = [
  "#E42929", "#b21d20", "#3d6ee6", "#2a9d2a",
  "#c46b00", "#7b3db5", "#0087a8", "#a83d3d",
  "#4a7a4a", "#8b4513",
];

const REVIEWS = [
  { id: 1, name: "Rahul Sharma",    initials: "RS", rating: 5, date: "March 2025",    text: "Absolutely stunning work! The team captured every detail of our wedding beautifully. Professional, creative, and incredibly patient. Every candid shot told a story. Highly recommend Focus Snaps to anyone looking for world-class photography!" },
  { id: 2, name: "Priya Reddy",     initials: "PR", rating: 5, date: "February 2025", text: "Booked them for our corporate event and the photos were delivered on time with exceptional quality. The team blended into the crowd perfectly and captured natural, unposed moments throughout the evening. Will definitely hire again." },
  { id: 3, name: "Venkat Rao",      initials: "VR", rating: 4, date: "January 2025",  text: "Good work overall. The team was professional and the final photos came out great. There was a minor delay in the edited album delivery, but the quality more than made up for it. Very happy with the outcome." },
  { id: 4, name: "Sneha Gupta",     initials: "SG", rating: 5, date: "December 2024", text: "Our maternity shoot was beyond beautiful. The photographer was so calm and made us feel completely at ease. The outdoor lighting, the poses, the editing — everything was perfect. These photos will be treasured forever." },
  { id: 5, name: "Arjun Mehta",     initials: "AM", rating: 5, date: "November 2024", text: "Exceptional portfolio work for our jewellery brand. Every shot highlighted the craftsmanship of our pieces. These guys truly understand product photography — composition, lighting, and detail are all spot on." },
  { id: 6, name: "Deepa Nair",      initials: "DN", rating: 4, date: "October 2024",  text: "Used their service for a fashion shoot for our boutique. The lighting and composition were top-notch. A touch expensive but absolutely worth every rupee. The images are magazine-quality." },
  { id: 7, name: "Karan Singh",     initials: "KS", rating: 5, date: "September 2024",text: "Covered our startup launch event in Hyderabad. The energy they brought on the day was incredible and the photographs tell the story perfectly. Several investors commented on the photos on our website. Outstanding!" },
  { id: 8, name: "Anitha Chowdary", initials: "AC", rating: 5, date: "August 2024",   text: "Candid wedding photography was our priority and Focus Snaps delivered beyond expectations. Every emotion, every laugh, every tear was captured with precision and heart. The album is a masterpiece." },
  { id: 9, name: "Rohit Bose",      initials: "RB", rating: 4, date: "July 2024",     text: "Lovely work on our restaurant's food photography. The photos made our menu look absolutely mouth-watering. Highly recommended for commercial and food photography assignments." },
  { id: 10, name: "Meena Krishnan", initials: "MK", rating: 5, date: "June 2024",     text: "From the initial consultation to the final delivery, the entire experience was seamless and professional. Focus Snaps is undoubtedly the best photography studio in Hyderabad. We will be coming back!" },
];

// day index: 0=Sun,1=Mon,...,6=Sat
const HOURS = [
  { day: "Monday",    from: "09:00 AM", to: "07:00 PM", jsDay: 1 },
  { day: "Tuesday",   from: "09:00 AM", to: "07:00 PM", jsDay: 2 },
  { day: "Wednesday", from: "09:00 AM", to: "07:00 PM", jsDay: 3 },
  { day: "Thursday",  from: "09:00 AM", to: "07:00 PM", jsDay: 4 },
  { day: "Friday",    from: "09:00 AM", to: "07:00 PM", jsDay: 5 },
  { day: "Saturday",  from: "10:00 AM", to: "05:00 PM", jsDay: 6 },
  { day: "Sunday",    from: null,       to: null,       jsDay: 0, closed: true },
];

const SIMILAR = [
  { id: 101, image: img03, businessType: "STUDIO",      businessName: "Pixel Dreams Studio",       city: "Hyderabad",    state: "Telangana", reviews: 89,  rating: 4.8 },
  { id: 102, image: img05, businessType: "FREELANCER",  businessName: "Snapshot Candid Co.",        city: "Hyderabad",    state: "Telangana", reviews: 64,  rating: 4.7 },
  { id: 103, image: img07, businessType: "STUDIO",      businessName: "Golden Shutter Studio",      city: "Secunderabad", state: "Telangana", reviews: 112, rating: 4.9 },
  { id: 104, image: img02, businessType: "FREELANCER",  businessName: "Iris Frame Photography",    city: "Hyderabad",    state: "Telangana", reviews: 77,  rating: 4.8 },
  { id: 105, image: img09, businessType: "DIGITAL LAB", businessName: "LensWork Digital Lab",       city: "Hyderabad",    state: "Telangana", reviews: 43,  rating: 4.6 },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const StarRating = ({ rating }) => (
  <div className="biz-detail__review-stars">
    {[1, 2, 3, 4, 5].map((n) => (
      <svg key={n} viewBox="0 0 24 24"
        fill={n <= rating ? "#E42929" : "none"}
        stroke={n <= rating ? "#E42929" : "#d4d4d4"}
        strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
  </div>
);

const MetaIcon = {
  pin: (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3-8.63A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 5.61 5.61l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
};

const SocialIcons = {
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.163 12 18.163s6.162-2.759 6.162-6.162S15.403 5.838 12 5.838zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
};

// ─── Page component ───────────────────────────────────────────────────────────

const Businessdetail = () => {
  const navigate = useNavigate();
  const [isFav, setIsFav] = useState(false);
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });
  const [showAllReviews, setShowAllReviews] = useState(false);

  const INITIAL_REVIEWS = 6;
  const visibleReviews = showAllReviews ? REVIEWS : REVIEWS.slice(0, INITIAL_REVIEWS);
  const hiddenCount = REVIEWS.length - INITIAL_REVIEWS;
  const [enquiry, setEnquiry] = useState({ name: "", phone: "", email: "", message: "" });
  const [enquiryErrors, setEnquiryErrors] = useState({});
  const [enquirySent, setEnquirySent] = useState(false);

  // Phone OTP state
  const [phoneStep, setPhoneStep] = useState("input"); // 'input' | 'otp' | 'verified'
  const [enquiryOtp, setEnquiryOtp] = useState(["", "", "", "", "", ""]);
  const [otpTimer, setOtpTimer] = useState(0);
  const [otpError, setOtpError] = useState("");
  const otpRefs = useRef([]);

  const today = new Date().getDay();

  // Lightbox keyboard nav
  useEffect(() => {
    if (!lightbox.open) return;
    const handler = (e) => {
      if (e.key === "Escape")      setLightbox({ open: false, index: 0 });
      if (e.key === "ArrowRight")  setLightbox((lb) => ({ ...lb, index: (lb.index + 1) % PHOTOS.length }));
      if (e.key === "ArrowLeft")   setLightbox((lb) => ({ ...lb, index: (lb.index - 1 + PHOTOS.length) % PHOTOS.length }));
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [lightbox.open]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightbox.open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox.open]);

  const openPhoto = (index) => setLightbox({ open: true, index });
  const prevPhoto = () => setLightbox((lb) => ({ ...lb, index: (lb.index - 1 + PHOTOS.length) % PHOTOS.length }));
  const nextPhoto = () => setLightbox((lb) => ({ ...lb, index: (lb.index + 1) % PHOTOS.length }));

  // OTP countdown
  useEffect(() => {
    if (otpTimer <= 0) return;
    const id = setInterval(() => setOtpTimer((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [otpTimer]);

  const handleSendOtp = () => {
    if (!/^[6-9]\d{9}$/.test(enquiry.phone)) {
      setEnquiryErrors((e) => ({ ...e, phone: "Enter a valid 10-digit mobile number" }));
      return;
    }
    setEnquiryErrors((e) => ({ ...e, phone: "" }));
    setPhoneStep("otp");
    setOtpTimer(30);
    setTimeout(() => otpRefs.current[0]?.focus(), 80);
  };

  const handleOtpChange = (idx, val) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...enquiryOtp];
    next[idx] = val;
    setEnquiryOtp(next);
    setOtpError("");
    if (val && idx < 5) otpRefs.current[idx + 1]?.focus();
  };

  const handleOtpKeyDown = (idx, e) => {
    if (e.key === "Backspace" && !enquiryOtp[idx] && idx > 0) {
      otpRefs.current[idx - 1]?.focus();
    }
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();
    const digits = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!digits) return;
    const next = ["", "", "", "", "", ""];
    digits.split("").forEach((ch, i) => { next[i] = ch; });
    setEnquiryOtp(next);
    otpRefs.current[Math.min(digits.length, 5)]?.focus();
  };

  const handleVerifyOtp = () => {
    if (enquiryOtp.join("").length < 6) {
      setOtpError("Please enter the complete 6-digit OTP");
      return;
    }
    setPhoneStep("verified");
    setOtpError("");
  };

  const handleResendOtp = () => {
    setEnquiryOtp(["", "", "", "", "", ""]);
    setOtpError("");
    setOtpTimer(30);
    setTimeout(() => otpRefs.current[0]?.focus(), 80);
  };

  const handleEnquiryChange = (field, val) => {
    setEnquiry((e) => ({ ...e, [field]: val }));
    setEnquiryErrors((e) => ({ ...e, [field]: "" }));
  };

  const validateEnquiry = () => {
    const errs = {};
    if (!enquiry.name.trim()) errs.name = "Name is required";
    if (phoneStep !== "verified") errs.phone = "Please verify your phone number with OTP";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email)) errs.email = "Enter a valid email address";
    if (!enquiry.message.trim()) errs.message = "Please write a message";
    return errs;
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    const errs = validateEnquiry();
    if (Object.keys(errs).length > 0) { setEnquiryErrors(errs); return; }
    setEnquirySent(true);
  };

  return (
    <div className="biz-detail">

      {/* ── Section 01: Banner ────────────────────────────────────────────────── */}
      <img src={bannerImg} alt="Focus Snaps Photography" className="biz-detail__banner" />

      {/* ── Section 02: Business Info Bar ────────────────────────────────────── */}
      <div className="biz-detail__info-bar">
        <div className="biz-detail__info-inner">
          <div className="biz-detail__logo"><span>FS</span></div>

          <div className="biz-detail__info-main">
            <h1 className="biz-detail__name">{BUSINESS.name}</h1>
            <p className="biz-detail__tagline">{BUSINESS.tagline}</p>
            <div className="biz-detail__meta">
              <span className="biz-detail__meta-item">{MetaIcon.pin}{BUSINESS.address}</span>
              <span className="biz-detail__meta-item">
                {MetaIcon.phone}
                <a href={`tel:${BUSINESS.phone}`}>{BUSINESS.phone}</a>
              </span>
              <span className="biz-detail__meta-item">
                {MetaIcon.email}
                <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
              </span>
              <span className="biz-detail__meta-item">
                {MetaIcon.globe}
                <a href={`https://${BUSINESS.website}`} target="_blank" rel="noreferrer">{BUSINESS.website}</a>
              </span>
            </div>
          </div>

          <button
            className={`biz-detail__favourite-btn${isFav ? " is-active" : ""}`}
            onClick={() => setIsFav((f) => !f)}
          >
            <svg viewBox="0 0 24 24" fill={isFav ? "currentColor" : "none"}
              stroke="currentColor" strokeWidth="1.8">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            {isFav ? "Saved" : "Add to Favourite"}
          </button>
        </div>
      </div>

      {/* ── Body: main + sidebar ──────────────────────────────────────────────── */}
      <div className="biz-detail__body">

        {/* ══════ MAIN COLUMN ══════ */}
        <div className="biz-detail__main">

          {/* Section 03: About */}
          <div className="biz-detail__card">
            <h2 className="biz-detail__section-title">About <span>Focus Snaps</span></h2>
            <p className="biz-detail__about-text">{BUSINESS.about}</p>
            <div className="biz-detail__about-stats">
              <div className="biz-detail__stat-card">
                <strong>{BUSINESS.since}</strong><span>On Pixstack</span>
              </div>
              <div className="biz-detail__stat-card">
                <strong>{BUSINESS.experience}</strong><span>Industry Exp.</span>
              </div>
              <div className="biz-detail__stat-card">
                <strong>{BUSINESS.projects}+</strong><span>Projects Done</span>
              </div>
              <div className="biz-detail__stat-card">
                <strong>{BUSINESS.teamSize}</strong><span>Team Size</span>
              </div>
            </div>
          </div>

          {/* Section 04: Services */}
          <div className="biz-detail__card">
            <h2 className="biz-detail__section-title">Services <span>Offered</span></h2>
            <div className="biz-detail__services">
              {SERVICES.map((s) => (
                <span key={s} className="biz-detail__service-tag">{s}</span>
              ))}
            </div>
          </div>

          {/* Section 07: Popular Photos */}
          <div className="biz-detail__card">
            <h2 className="biz-detail__section-title">Popular <span>Photos</span></h2>
            <div className="biz-detail__photos-grid">
              {PHOTOS.map((src, i) => (
                <div key={i} className="biz-detail__photo-thumb" onClick={() => openPhoto(i)}>
                  <img src={src} alt={`Portfolio ${i + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          {/* Section 08: Popular Videos */}
          <div className="biz-detail__card">
            <h2 className="biz-detail__section-title">Popular <span>Videos</span></h2>
            <div className="biz-detail__videos-grid">
              {VIDEOS.map((v) => (
                <div key={v.id} className="biz-detail__video-item">
                  <div className="biz-detail__video-frame">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${v.id}?rel=0&modestbranding=1`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <p className="biz-detail__video-title">{v.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 09: Customer Reviews */}
          <div className="biz-detail__card">
            <h2 className="biz-detail__section-title">Customer <span>Reviews</span></h2>
            <div className="biz-detail__reviews">
              {visibleReviews.map((r, i) => (
                <div
                  key={r.id}
                  className={`biz-detail__review${i >= INITIAL_REVIEWS && showAllReviews ? " biz-detail__review--reveal" : ""}`}
                >
                  <div className="biz-detail__review-head">
                    <div className="biz-detail__review-avatar"
                      style={{ background: AVATAR_COLORS[i % AVATAR_COLORS.length] }}>
                      <span>{r.initials}</span>
                    </div>
                    <div className="biz-detail__review-meta">
                      <p className="biz-detail__review-name">{r.name}</p>
                      <div className="biz-detail__review-row">
                        <StarRating rating={r.rating} />
                        <span className="biz-detail__review-date">{r.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="biz-detail__review-text">{r.text}</p>
                </div>
              ))}
            </div>

            {!showAllReviews && (
              <button
                className="biz-detail__load-more-reviews"
                onClick={() => setShowAllReviews(true)}
              >
                Load More Reviews
                <span className="biz-detail__load-more-reviews-count">+{hiddenCount} more</span>
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none"
                  stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            )}
          </div>

        </div>

        {/* ══════ SIDEBAR ══════ */}
        <div className="biz-detail__sidebar">

          {/* Section 05: Send Enquiry */}
          <div className="biz-detail__card">
            <h2 className="biz-detail__section-title">Send <span>Enquiry</span></h2>

            {enquirySent ? (
              <div className="biz-detail__enquiry-success">
                ✓ Your message has been sent to Focus Snaps Photography.<br />
                They will get back to you soon on your query.
              </div>
            ) : (
              <form onSubmit={handleEnquirySubmit} noValidate>
                <div className="biz-detail__enquiry-field">
                  <label className="biz-detail__enquiry-label">Your Name</label>
                  <input
                    type="text"
                    className="biz-detail__enquiry-input"
                    placeholder="Write your name"
                    value={enquiry.name}
                    onChange={(e) => handleEnquiryChange("name", e.target.value)}
                  />
                  {enquiryErrors.name && <p style={{ color: "#dc3545", fontSize: "0.73rem", marginTop: 4, fontFamily: "Poppins" }}>{enquiryErrors.name}</p>}
                </div>

                <div className="biz-detail__enquiry-field">
                  <label className="biz-detail__enquiry-label">
                    Phone Number
                    {phoneStep === "verified" && (
                      <span className="biz-detail__phone-verified-badge">✓ Verified</span>
                    )}
                  </label>

                  {/* Step 1 — phone input + Send OTP */}
                  {phoneStep === "input" && (
                    <div className="biz-detail__enquiry-phone-row">
                      <input
                        type="tel"
                        className="biz-detail__enquiry-input"
                        placeholder="10-digit mobile number"
                        value={enquiry.phone}
                        onChange={(e) => handleEnquiryChange("phone", e.target.value.replace(/\D/g, "").slice(0, 10))}
                        onKeyDown={(e) => e.key === "Enter" && handleSendOtp()}
                        maxLength={10}
                      />
                      <button type="button" className="biz-detail__send-otp-btn" onClick={handleSendOtp}>
                        Send OTP
                      </button>
                    </div>
                  )}

                  {/* Step 2 — OTP entry */}
                  {phoneStep === "otp" && (
                    <div className="biz-detail__otp-section">
                      <div className="biz-detail__otp-phone-row">
                        <span>+91 {enquiry.phone}</span>
                        <button type="button" className="biz-detail__otp-change"
                          onClick={() => { setPhoneStep("input"); setEnquiryOtp(["","","","","",""]); setOtpError(""); }}>
                          Change
                        </button>
                      </div>
                      <div className="biz-detail__otp-boxes">
                        {enquiryOtp.map((digit, idx) => (
                          <input
                            key={idx}
                            ref={(el) => { otpRefs.current[idx] = el; }}
                            type="text"
                            inputMode="numeric"
                            className={`biz-detail__otp-box${otpError ? " has-error" : ""}`}
                            value={digit}
                            maxLength={1}
                            onChange={(e) => handleOtpChange(idx, e.target.value)}
                            onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                            onPaste={idx === 0 ? handleOtpPaste : undefined}
                            autoComplete="one-time-code"
                          />
                        ))}
                      </div>
                      {otpError && <p className="biz-detail__otp-error">{otpError}</p>}
                      <div className="biz-detail__otp-actions">
                        <button type="button" className="biz-detail__verify-otp-btn" onClick={handleVerifyOtp}>
                          Verify OTP
                        </button>
                        <span className="biz-detail__otp-resend">
                          {otpTimer > 0
                            ? <>Resend in <strong>0:{String(otpTimer).padStart(2, "0")}</strong></>
                            : <button type="button" className="biz-detail__resend-link" onClick={handleResendOtp}>Resend OTP</button>
                          }
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Step 3 — verified */}
                  {phoneStep === "verified" && (
                    <div className="biz-detail__phone-verified">
                      <svg viewBox="0 0 24 24" width="15" height="15" fill="none"
                        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      +91 {enquiry.phone}
                      <button type="button" className="biz-detail__otp-change"
                        onClick={() => { setPhoneStep("input"); setEnquiryOtp(["","","","","",""]); handleEnquiryChange("phone", ""); }}>
                        Change
                      </button>
                    </div>
                  )}

                  {enquiryErrors.phone && (
                    <p className="biz-detail__otp-error">{enquiryErrors.phone}</p>
                  )}
                </div>

                <div className="biz-detail__enquiry-field">
                  <label className="biz-detail__enquiry-label">Email</label>
                  <input
                    type="email"
                    className="biz-detail__enquiry-input"
                    placeholder="your@email.com"
                    value={enquiry.email}
                    onChange={(e) => handleEnquiryChange("email", e.target.value)}
                  />
                  {enquiryErrors.email && <p style={{ color: "#dc3545", fontSize: "0.73rem", marginTop: 4, fontFamily: "Poppins" }}>{enquiryErrors.email}</p>}
                </div>

                <div className="biz-detail__enquiry-field">
                  <label className="biz-detail__enquiry-label">Message</label>
                  <textarea
                    className="biz-detail__enquiry-textarea"
                    placeholder="Write your message…"
                    value={enquiry.message}
                    onChange={(e) => handleEnquiryChange("message", e.target.value)}
                  />
                  {enquiryErrors.message && <p style={{ color: "#dc3545", fontSize: "0.73rem", marginTop: 4, fontFamily: "Poppins" }}>{enquiryErrors.message}</p>}
                </div>

                <p className="biz-detail__enquiry-note">
                  Your message will be sent to <strong>Focus Snaps Photography</strong>. They will get back to you soon on your query.
                </p>

                <button type="submit" className="biz-detail__enquiry-btn">
                  Send Enquiry
                </button>
              </form>
            )}
          </div>

          {/* Section 06: Social Links */}
          <div className="biz-detail__card">
            <h2 className="biz-detail__section-title">Stay in <span>Touch</span></h2>
            <div className="biz-detail__social-links">
              {[
                { key: "facebook",  label: "Facebook",  url: "https://facebook.com/focussnaps" },
                { key: "instagram", label: "Instagram", url: "https://instagram.com/focussnaps" },
                { key: "twitter",   label: "Twitter / X", url: "https://twitter.com/focussnaps" },
                { key: "linkedin",  label: "LinkedIn",  url: "https://linkedin.com/company/focussnaps" },
              ].map((s) => (
                <a key={s.key} href={s.url} target="_blank" rel="noreferrer"
                  className={`biz-detail__social-link biz-detail__social-link--${s.key}`}>
                  {SocialIcons[s.key]}
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Section 07: Working Hours */}
          <div className="biz-detail__card">
            <h2 className="biz-detail__section-title">Working <span>Hours</span></h2>
            <div className="biz-detail__hours">
              {HOURS.map((h) => (
                <div key={h.day}
                  className={`biz-detail__hours-row${h.jsDay === today ? " is-today" : ""}`}>
                  <span className="biz-detail__hours-day">{h.day}</span>
                  {h.closed
                    ? <span className="biz-detail__hours-closed">Closed</span>
                    : <span className="biz-detail__hours-time">{h.from} – {h.to}</span>
                  }
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Similar Businesses ───────────────────────────────────────────────── */}
      <div className="biz-detail__similar">
        <div className="biz-detail__similar-head">
          <h2 className="biz-detail__similar-title">
            Similar <span>Businesses</span> in Hyderabad
          </h2>
          <button className="biz-detail__similar-view-all" onClick={() => navigate("/businesses")}>
            View All &nbsp;→
          </button>
        </div>
        <div className="biz-detail__similar-grid">
          {SIMILAR.map((item) => (
            <Listitem
              key={item.id}
              image={item.image}
              businessType={item.businessType}
              businessName={item.businessName}
              city={item.city}
              state={item.state}
              reviews={item.reviews}
              rating={item.rating}
              onClick={() => navigate(`/business/${item.id}`)}
            />
          ))}
        </div>
      </div>

      {/* ── Lightbox ──────────────────────────────────────────────────────────── */}
      {lightbox.open && (
        <div className="biz-detail__lightbox">
          <div className="biz-detail__lightbox-backdrop" onClick={() => setLightbox({ open: false, index: 0 })} />

          <button className="biz-detail__lightbox-close" onClick={() => setLightbox({ open: false, index: 0 })} aria-label="Close">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
              stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div className="biz-detail__lightbox-content">
            <button className="biz-detail__lightbox-nav" onClick={prevPhoto} aria-label="Previous">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none"
                stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <img src={PHOTOS[lightbox.index]} alt={`Photo ${lightbox.index + 1}`}
              className="biz-detail__lightbox-img" />

            <button className="biz-detail__lightbox-nav" onClick={nextPhoto} aria-label="Next">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none"
                stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          <p className="biz-detail__lightbox-counter">{lightbox.index + 1} / {PHOTOS.length}</p>
        </div>
      )}

    </div>
  );
};

export default Businessdetail;
