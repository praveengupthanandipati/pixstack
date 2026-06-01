import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CITIES } from "../../constants/cities";
import logoSvg from "../../assets/logo.svg";
import digitalLabBg from "../../assets/digital-lab-banner.jpg";
import "../../styles/Login.scss";

const RESEND_SECONDS = 30;

const IconUser = () => (
  <svg
    viewBox="0 0 24 24"
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const IconEdit = () => (
  <svg
    viewBox="0 0 24 24"
    width="13"
    height="13"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const IconPin = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
  </svg>
);

const Businesssignup = () => {
  const [step, setStep] = useState("form"); // 'form' | 'otp'

  // Form fields
  const [businessName, setBusinessName] = useState("");
  const [city, setCity] = useState("");
  const [cityQuery, setCityQuery] = useState("");
  const [cityOpen, setCityOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Errors
  const [errors, setErrors] = useState({});

  // OTP
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpError, setOtpError] = useState("");
  const [timer, setTimer] = useState(0);

  const cityWrapRef = useRef(null);
  const cityInputRef = useRef(null);
  const otpRefs = useRef([]);

  // Close city dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (cityWrapRef.current && !cityWrapRef.current.contains(e.target)) {
        setCityOpen(false);
        if (!city) setCityQuery("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [city]);

  // OTP countdown
  useEffect(() => {
    if (timer <= 0) return;
    const id = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [timer]);

  // City filtered list
  const filteredCities = cityQuery.trim()
    ? CITIES.filter((c) =>
        c.toLowerCase().includes(cityQuery.trim().toLowerCase()),
      )
    : CITIES;

  const handleCitySelect = (c) => {
    setCity(c);
    setCityQuery(c);
    setCityOpen(false);
    setErrors((e) => ({ ...e, city: "" }));
  };

  const handleCityInputChange = (e) => {
    const val = e.target.value;
    setCityQuery(val);
    setCity("");
    setCityOpen(true);
    if (!val) setErrors((errs) => ({ ...errs, city: "" }));
  };

  const handleCityClear = () => {
    setCity("");
    setCityQuery("");
    setCityOpen(false);
    cityInputRef.current?.focus();
  };

  // Validate form
  const validate = () => {
    const errs = {};
    if (!businessName.trim()) errs.businessName = "Business name is required";
    if (!city) errs.city = "Please select a city from the list";
    if (!email.trim()) errs.email = "Email address is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Enter a valid email address";
    if (!/^[6-9]\d{9}$/.test(phone))
      errs.phone = "Enter a valid 10-digit mobile number";
    return errs;
  };

  const handleContinue = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStep("otp");
    setTimer(RESEND_SECONDS);
    setTimeout(() => otpRefs.current[0]?.focus(), 80);
  };

  const handleOtpChange = (idx, val) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...otp];
    next[idx] = val;
    setOtp(next);
    setOtpError("");
    if (val && idx < 5) otpRefs.current[idx + 1]?.focus();
  };

  const handleOtpKeyDown = (idx, e) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0) {
      otpRefs.current[idx - 1]?.focus();
    }
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();
    const digits = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    if (!digits) return;
    const next = ["", "", "", "", "", ""];
    digits.split("").forEach((ch, i) => {
      next[i] = ch;
    });
    setOtp(next);
    otpRefs.current[Math.min(digits.length, 5)]?.focus();
  };

  const handleVerify = () => {
    const code = otp.join("");
    if (code.length < 6) {
      setOtpError("Please enter the complete 6-digit OTP");
      return;
    }
    // TODO: complete signup with backend
    console.log("Signup OTP:", code, { businessName, city, email, phone });
  };

  const handleResend = () => {
    setOtp(["", "", "", "", "", ""]);
    setOtpError("");
    setTimer(RESEND_SECONDS);
    setTimeout(() => otpRefs.current[0]?.focus(), 80);
  };

  const handleBackToForm = () => {
    setStep("form");
    setOtp(["", "", "", "", "", ""]);
    setOtpError("");
  };

  return (
    <div className="login-page">
      {/* ── Left brand panel ──────────────────────────────────────────────────── */}
      <div
        className="login-page__brand"
        style={{ backgroundImage: `url(${digitalLabBg})` }}
      >
        <div className="login-page__brand-content">
          <Link to="/" className="login-page__brand-logo">
            <img src={logoSvg} alt="Pixstack" />
          </Link>

          <span className="login-page__brand-hook">
            Is your business growing too slowly?
          </span>

          <h2 className="login-page__brand-title">
            Get Business Leads the Professional Way
          </h2>

          <p className="login-page__brand-sub">
            Join Pixstack — India's dedicated photography marketplace. Your next
            100 clients are already searching for you.
          </p>

          <ul className="login-page__brand-features">
            {[
              "Verified enquiries from serious, ready-to-book clients",
              "Showcase your portfolio to thousands of visitors daily",
              "Build trust with verified reviews & star ratings",
              "100% free listing — no commissions, no hidden fees",
            ].map((text) => (
              <li key={text} className="login-page__brand-feature">
                <span className="login-page__brand-feature-icon">
                  <svg
                    viewBox="0 0 24 24"
                    width="11"
                    height="11"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                {text}
              </li>
            ))}
          </ul>

          <hr className="login-page__brand-divider" />

          <div className="login-page__brand-stats">
            <div className="login-page__brand-stat">
              <strong>10K+</strong>
              <span>Vendors Listed</span>
            </div>
            <div className="login-page__brand-stat">
              <strong>500+</strong>
              <span>Daily Enquiries</span>
            </div>
            <div className="login-page__brand-stat">
              <strong>1L+</strong>
              <span>Happy Clients</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Right form panel ───────────────────────────────────────────────────── */}
      <div className="login-page__form-panel">
        <div className="login-page__form-inner">
          {/* Logo — mobile only */}
          <Link to="/" className="login-page__mobile-logo">
            <img src={logoSvg} alt="Pixstack" />
          </Link>

          {/* Step indicator */}
          <div className="login-page__step-indicator">
            <div
              className={`login-page__step-dot ${step === "form" ? "is-active" : "is-done"}`}
            />
            <div
              className={`login-page__step-dot ${step === "otp" ? "is-active" : ""}`}
            />
          </div>

          <h1 className="login-page__heading">
            Grow Your Business with Pixstack
          </h1>
          <p className="login-page__subheading">
            {step === "form"
              ? "Sign Up to access your Dashboard"
              : `Verify your number +91 ${phone}`}
          </p>

          {/* ── FORM STEP ─────────────────────────────────────────────────────── */}
          {step === "form" && (
            <>
              {/* Brand / Business Name */}
              <div
                className={`login-page__field${errors.businessName ? " has-error" : ""}`}
              >
                <label className="login-page__label">
                  Brand / Business Name
                </label>
                <input
                  type="text"
                  className="login-page__input"
                  placeholder="e.g. Photomagical Photography"
                  value={businessName}
                  onChange={(e) => {
                    setBusinessName(e.target.value);
                    setErrors((errs) => ({ ...errs, businessName: "" }));
                  }}
                  autoComplete="organization"
                  autoFocus
                />
                {errors.businessName && (
                  <p className="login-page__field-error">
                    {errors.businessName}
                  </p>
                )}
              </div>

              {/* City */}
              <div
                className={`login-page__field${errors.city ? " has-error" : ""}`}
              >
                <label className="login-page__label">City</label>
                <div className="login-page__city-wrap" ref={cityWrapRef}>
                  <div
                    className={`login-page__city-input-row${cityOpen ? " is-open" : ""}`}
                  >
                    <span className="login-page__city-pin">
                      <IconPin />
                    </span>
                    <input
                      ref={cityInputRef}
                      type="text"
                      className="login-page__city-input"
                      placeholder="Search and select your city"
                      value={cityQuery}
                      onChange={handleCityInputChange}
                      onFocus={() => setCityOpen(true)}
                      autoComplete="off"
                    />
                    {cityQuery && (
                      <button
                        className="login-page__city-clear"
                        onMouseDown={(e) => {
                          e.preventDefault();
                          handleCityClear();
                        }}
                        aria-label="Clear city"
                        tabIndex={-1}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          width="12"
                          height="12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </button>
                    )}
                    <span
                      className={`login-page__city-chevron${cityOpen ? " is-open" : ""}`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="13"
                        height="13"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </div>

                  {cityOpen && (
                    <div className="login-page__city-dropdown">
                      {filteredCities.length > 0 ? (
                        filteredCities.map((c) => (
                          <button
                            key={c}
                            className={`login-page__city-option${c === city ? " is-selected" : ""}`}
                            onMouseDown={(e) => {
                              e.preventDefault();
                              handleCitySelect(c);
                            }}
                          >
                            {c}
                          </button>
                        ))
                      ) : (
                        <p className="login-page__city-empty">
                          No cities found for &ldquo;{cityQuery}&rdquo;
                        </p>
                      )}
                    </div>
                  )}
                </div>
                {errors.city && (
                  <p className="login-page__field-error">{errors.city}</p>
                )}
              </div>

              {/* Email */}
              <div
                className={`login-page__field${errors.email ? " has-error" : ""}`}
              >
                <label className="login-page__label">Email Address</label>
                <input
                  type="email"
                  className="login-page__input"
                  placeholder="e.g. studio@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors((errs) => ({ ...errs, email: "" }));
                  }}
                  autoComplete="email"
                />
                {errors.email && (
                  <p className="login-page__field-error">{errors.email}</p>
                )}
              </div>

              {/* Phone Number */}
              <div
                className={`login-page__field${errors.phone ? " has-error" : ""}`}
              >
                <label className="login-page__label">Phone Number</label>
                <div className="login-page__phone-wrap">
                  <span className="login-page__country-code">
                    <svg
                      viewBox="0 0 24 24"
                      width="13"
                      height="13"
                      fill="currentColor"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                    </svg>
                    +91
                  </span>
                  <input
                    type="tel"
                    className="login-page__phone-input"
                    placeholder="10-digit mobile number"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value.replace(/\D/g, "").slice(0, 10));
                      setErrors((errs) => ({ ...errs, phone: "" }));
                    }}
                    onKeyDown={(e) => e.key === "Enter" && handleContinue()}
                    maxLength={10}
                    autoComplete="tel"
                  />
                </div>
                {errors.phone && (
                  <p className="login-page__field-error">{errors.phone}</p>
                )}
              </div>

              <button
                className="login-page__primary-btn"
                onClick={handleContinue}
              >
                Continue
              </button>
            </>
          )}

          {/* ── OTP STEP ──────────────────────────────────────────────────────── */}
          {step === "otp" && (
            <>
              <button
                className="login-page__change-num"
                onClick={handleBackToForm}
              >
                <IconEdit />
                +91 {phone} &nbsp;— Edit Details
              </button>

              <div className="login-page__otp-wrap">
                <label className="login-page__label">Enter OTP</label>
                <div className="login-page__otp-boxes">
                  {otp.map((digit, idx) => (
                    <input
                      key={idx}
                      ref={(el) => {
                        otpRefs.current[idx] = el;
                      }}
                      type="text"
                      inputMode="numeric"
                      className={`login-page__otp-box${otpError ? " has-error" : ""}`}
                      value={digit}
                      maxLength={1}
                      onChange={(e) => handleOtpChange(idx, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                      onPaste={idx === 0 ? handleOtpPaste : undefined}
                      autoComplete="one-time-code"
                    />
                  ))}
                </div>
                {otpError && (
                  <p className="login-page__field-error">{otpError}</p>
                )}
              </div>

              <button
                className="login-page__primary-btn"
                onClick={handleVerify}
              >
                Verify &amp; Create Account
              </button>

              <div className="login-page__resend">
                {timer > 0 ? (
                  <span>
                    Resend OTP in{" "}
                    <strong>0:{String(timer).padStart(2, "0")}</strong>
                  </span>
                ) : (
                  <button
                    className="login-page__resend-btn"
                    onClick={handleResend}
                  >
                    Resend OTP
                  </button>
                )}
              </div>
            </>
          )}

          {/* ── Already have an account ────────────────────────────────────────── */}
          <div className="login-page__register-bar">
            <span>Already have an account?</span>
            <Link to="/business-login" className="login-page__register-link">
              Sign In
            </Link>
          </div>

          {/* ── Are you a customer? ────────────────────────────────────────────── */}
          <div className="login-page__vendor-bar">
            <span className="login-page__vendor-text">Are you a Customer?</span>
            <Link to="/login" className="login-page__vendor-btn">
              <IconUser />
              Customer Sign In
            </Link>
          </div>

          {/* Terms */}
          <p className="login-page__terms">
            By continuing, you agree to Pixstack's{" "}
            <Link to="/terms" className="login-page__terms-link">
              Terms of Service
            </Link>{" "}
            &amp;{" "}
            <Link to="/privacy" className="login-page__terms-link">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Businesssignup;
