import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Contact.scss";

const DEPARTMENTS = [
  { icon: "🛠️", name: "General Support",    email: "support@pixstack.in",   note: "Platform help, account issues, listing queries" },
  { icon: "💼", name: "Business & Vendors", email: "vendors@pixstack.in",   note: "Listing approvals, profile management, leads" },
  { icon: "⚖️", name: "Legal & Compliance", email: "legal@pixstack.in",     note: "Terms, takedowns, IP or legal notices" },
  { icon: "🔒", name: "Privacy & Data",     email: "privacy@pixstack.in",   note: "Data requests, GDPR, account deletion" },
  { icon: "📢", name: "Press & Media",      email: "press@pixstack.in",     note: "Media kits, partnerships, press enquiries" },
  { icon: "🤝", name: "Partnerships",       email: "partners@pixstack.in",  note: "Brand collaborations and B2B enquiries" },
];

const SOCIALS = [
  {
    key: "instagram",
    label: "Instagram",
    url: "https://instagram.com/pixstack",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.163 12 18.163s6.162-2.759 6.162-6.162S15.403 5.838 12 5.838zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    key: "facebook",
    label: "Facebook",
    url: "https://facebook.com/pixstack",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    key: "twitter",
    label: "Twitter / X",
    url: "https://twitter.com/pixstack",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    url: "https://linkedin.com/company/pixstack",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const ENQUIRY_TYPES = [
  "General Enquiry",
  "I want to list my business",
  "Issue with my listing",
  "Report a fake listing",
  "Partnership / Collaboration",
  "Press / Media",
  "Data / Privacy Request",
  "Other",
];

const INITIAL = { name: "", email: "", phone: "", type: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (field, val) => {
    setForm((f) => ({ ...f, [field]: val }));
    setErrors((e) => ({ ...e, [field]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim())
      errs.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Enter a valid email address";
    if (form.phone && !/^[6-9]\d{9}$/.test(form.phone))
      errs.phone = "Enter a valid 10-digit mobile number";
    if (!form.type)
      errs.type = "Please select an enquiry type";
    if (!form.message.trim() || form.message.trim().length < 20)
      errs.message = "Please write at least 20 characters";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    // simulate async submit
    setTimeout(() => { setLoading(false); setSent(true); }, 900);
  };

  const ErrorMsg = ({ field }) =>
    errors[field] ? (
      <p className="contact__error">
        <svg viewBox="0 0 24 24" width="12" height="12" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
        {errors[field]}
      </p>
    ) : null;

  return (
    <div className="contact">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div className="contact__hero">
        <span className="contact__hero-eyebrow">Get in Touch</span>
        <h1 className="contact__hero-title">
          Contact <span>Pixstack</span>
        </h1>
        <p className="contact__hero-sub">
          Whether you're a client, vendor, or partner — we're here to help.
          Reach us through the form or find the right team below.
        </p>
      </div>

      {/* ── Body ──────────────────────────────────────────────────────────── */}
      <div className="contact__body">

        {/* ── Left — Info ───────────────────────────────────────────────── */}
        <div className="contact__info">

          {/* Contact details */}
          <div className="contact__info-card">
            <h2 className="contact__info-title">Contact <span>Details</span></h2>
            <div className="contact__detail-list">

              <div className="contact__detail-item">
                <div className="contact__detail-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
                    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="contact__detail-body">
                  <p className="contact__detail-label">Email</p>
                  <p className="contact__detail-value">
                    <a href="mailto:support@pixstack.in">support@pixstack.in</a>
                  </p>
                  <p className="contact__detail-note">We respond within 24 hours on business days</p>
                </div>
              </div>

              <div className="contact__detail-item">
                <div className="contact__detail-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
                    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3-8.63A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 5.61 5.61l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="contact__detail-body">
                  <p className="contact__detail-label">Phone</p>
                  <p className="contact__detail-value">
                    <a href="tel:+914012345678">+91 40 1234 5678</a>
                  </p>
                  <p className="contact__detail-note">Mon – Sat, 9:00 AM – 7:00 PM IST</p>
                </div>
              </div>

              <div className="contact__detail-item">
                <div className="contact__detail-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
                    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="contact__detail-body">
                  <p className="contact__detail-label">Office Address</p>
                  <p className="contact__detail-value">
                    Pixstack Technologies<br />
                    3rd Floor, Prestige Centre, Banjara Hills<br />
                    Hyderabad – 500034, Telangana, India
                  </p>
                </div>
              </div>

              <div className="contact__detail-item">
                <div className="contact__detail-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
                    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="contact__detail-body">
                  <p className="contact__detail-label">Business Hours</p>
                  <p className="contact__detail-value">Monday – Saturday</p>
                  <p className="contact__detail-note">9:00 AM – 7:00 PM IST &nbsp;·&nbsp; Closed on Sundays & Public Holidays</p>
                </div>
              </div>

            </div>
          </div>

          {/* Department emails */}
          <div className="contact__info-card">
            <h2 className="contact__info-title">Reach the Right <span>Team</span></h2>
            <div className="contact__departments">
              {DEPARTMENTS.map((d) => (
                <div key={d.name} className="contact__dept-card">
                  <span className="contact__dept-icon">{d.icon}</span>
                  <p className="contact__dept-name">{d.name}</p>
                  <a href={`mailto:${d.email}`} className="contact__dept-email">{d.email}</a>
                  <p className="contact__dept-note">{d.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="contact__info-card">
            <h2 className="contact__info-title">Follow <span>Us</span></h2>
            <div className="contact__social-row">
              {SOCIALS.map((s) => (
                <a key={s.key} href={s.url} target="_blank" rel="noreferrer"
                  className={`contact__social-btn contact__social-btn--${s.key}`}>
                  {s.icon}
                  {s.label}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* ── Right — Enquiry Form ───────────────────────────────────────── */}
        <div className="contact__form-card">
          <h2 className="contact__form-title">Send Us a Message</h2>
          <p className="contact__form-sub">
            Fill in the form below and our team will get back to you within
            one business day.
          </p>

          {sent ? (
            <div className="contact__success">
              <div className="contact__success-icon">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none"
                  stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="contact__success-title">Message Sent Successfully!</h3>
              <p className="contact__success-sub">
                Thank you for reaching out to Pixstack. Our team will review
                your message and respond to <strong>{form.email}</strong> within
                one business day.
              </p>
              <button className="contact__success-btn"
                onClick={() => { setSent(false); setForm(INITIAL); }}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>

              {/* Name + Email */}
              <div className="contact__row">
                <div className="contact__field">
                  <label className="contact__label">Full Name *</label>
                  <input
                    type="text"
                    className={`contact__input${errors.name ? " has-error" : ""}`}
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    autoComplete="name"
                  />
                  <ErrorMsg field="name" />
                </div>

                <div className="contact__field">
                  <label className="contact__label">Email Address *</label>
                  <input
                    type="email"
                    className={`contact__input${errors.email ? " has-error" : ""}`}
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    autoComplete="email"
                  />
                  <ErrorMsg field="email" />
                </div>
              </div>

              {/* Phone + Type */}
              <div className="contact__row">
                <div className="contact__field">
                  <label className="contact__label">Phone Number</label>
                  <input
                    type="tel"
                    className={`contact__input${errors.phone ? " has-error" : ""}`}
                    placeholder="10-digit mobile (optional)"
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value.replace(/\D/g, "").slice(0, 10))}
                    maxLength={10}
                    autoComplete="tel"
                  />
                  <ErrorMsg field="phone" />
                </div>

                <div className="contact__field">
                  <label className="contact__label">Enquiry Type *</label>
                  <select
                    className={`contact__select${errors.type ? " has-error" : ""}`}
                    value={form.type}
                    onChange={(e) => set("type", e.target.value)}
                  >
                    <option value="">Select a topic…</option>
                    {ENQUIRY_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  <ErrorMsg field="type" />
                </div>
              </div>

              {/* Message */}
              <div className="contact__field">
                <label className="contact__label">Message *</label>
                <textarea
                  className={`contact__textarea${errors.message ? " has-error" : ""}`}
                  placeholder="Tell us how we can help you…"
                  value={form.message}
                  onChange={(e) => set("message", e.target.value)}
                />
                <ErrorMsg field="message" />
              </div>

              <button type="submit" className="contact__submit" disabled={loading}>
                {loading ? (
                  <>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none"
                      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                      style={{ animation: "spin 0.9s linear infinite" }}>
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none"
                      stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default Contact;
