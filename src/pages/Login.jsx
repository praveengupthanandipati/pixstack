import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoSvg from "../assets/logo.svg";
import photographerBg from "../assets/homebanner-photographer.jpg";
import "../styles/Login.scss";

const RESEND_SECONDS = 30;

const IconBriefcase = () => (
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
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
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

const Login = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState("phone"); // 'phone' | 'otp'
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpError, setOtpError] = useState("");
  const [timer, setTimer] = useState(0);
  const otpRefs = useRef([]);

  // Countdown timer
  useEffect(() => {
    if (timer <= 0) return;
    const id = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [timer]);

  const handleSendOtp = () => {
    if (!/^[6-9]\d{9}$/.test(phone)) {
      setPhoneError("Please enter a valid 10-digit mobile number");
      return;
    }
    setPhoneError("");
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
    const focusIdx = Math.min(digits.length, 5);
    otpRefs.current[focusIdx]?.focus();
  };

  const handleVerifyOtp = () => {
    const code = otp.join("");
    if (code.length < 6) {
      setOtpError("Please enter the complete 6-digit OTP");
      return;
    }
    localStorage.setItem("pixstack_user", JSON.stringify({ name: "Praveen Nandipati", phone }));
    navigate("/profile");
  };

  const handleResend = () => {
    setOtp(["", "", "", "", "", ""]);
    setOtpError("");
    setTimer(RESEND_SECONDS);
    setTimeout(() => otpRefs.current[0]?.focus(), 80);
  };

  const handleChangeNumber = () => {
    setStep("phone");
    setOtp(["", "", "", "", "", ""]);
    setOtpError("");
  };

  return (
    <React.Fragment>
        <div className="login-page">
        {/* ── Left brand panel ──────────────────────────────────────────────────── */}
        <div
            className="login-page__brand"
            style={{ backgroundImage: `url(${photographerBg})` }}
        >
            <div className="login-page__brand-content">
            <Link to="/" className="login-page__brand-logo">
                <img src={logoSvg} alt="Pixstack" />
            </Link>
            <h2 className="login-page__brand-title">
                India's #1 Photography Marketplace
            </h2>
            <p className="login-page__brand-sub">
                Find top photographers, studios, digital labs, vendors &amp; trainers
                near you — all verified, all in one place.
            </p>
            <div className="login-page__brand-stats">
                <div className="login-page__brand-stat">
                <strong>10,000+</strong>
                <span>Vendors Listed</span>
                </div>
                <div className="login-page__brand-stat">
                <strong>50+</strong>
                <span>Cities Covered</span>
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
            <Link to="/" className="login-page__close-btn" aria-label="Go to Home">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
                stroke="currentColor" strokeWidth="2.2"
                strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </Link>
            <div className="login-page__form-inner">

            {/* Logo — visible only on mobile (brand panel is hidden) */}
            <Link to="/" className="login-page__mobile-logo">
                <img src={logoSvg} alt="Pixstack" />
            </Link>

            <h1 className="login-page__heading">
                {step === "phone" ? "Login / Sign Up" : "Verify OTP"}
            </h1>
            <p className="login-page__subheading">
                {step === "phone"
                ? "Enter your mobile number to continue with Pixstack"
                : `OTP sent to +91 ${phone}`}
            </p>

            {/* ── PHONE STEP ────────────────────────────────────────────────────── */}
            {step === "phone" && (
                <>
                <div className={`login-page__field${phoneError ? " has-error" : ""}`}>
                    <label className="login-page__label">Mobile Number</label>
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
                        placeholder="Enter 10-digit mobile number"
                        value={phone}
                        onChange={(e) => {
                        setPhone(e.target.value.replace(/\D/g, "").slice(0, 10));
                        setPhoneError("");
                        }}
                        onKeyDown={(e) => e.key === "Enter" && handleSendOtp()}
                        maxLength={10}
                        autoComplete="tel"
                        autoFocus
                    />
                    </div>
                    {phoneError && (
                    <p className="login-page__field-error">{phoneError}</p>
                    )}
                </div>

                <button className="login-page__primary-btn" onClick={handleSendOtp}>
                    Send OTP
                </button>
</>
            )}

            {/* ── OTP STEP ──────────────────────────────────────────────────────── */}
            {step === "otp" && (
                <>
                <button
                    className="login-page__change-num"
                    onClick={handleChangeNumber}
                >
                    <IconEdit />
                    +91 {phone} &nbsp;— Change Number
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
                    onClick={handleVerifyOtp}
                >
                    Verify OTP
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

            {/* ── Vendor / Business Sign In bar ─────────────────────────────────── */}
            <div className="login-page__vendor-bar">
                <span className="login-page__vendor-text">
                Are you a Vendor or Business?
                </span>
                <Link to="/business-login" className="login-page__vendor-btn">
                <IconBriefcase />
                Business Sign In
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
    </React.Fragment>
  );
};

export default Login;
