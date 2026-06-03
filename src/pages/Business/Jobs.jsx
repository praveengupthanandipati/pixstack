import React, { useState, useRef, useEffect } from "react";
import Leftnav from "./Leftnav";
import "../../styles/Businessprofile.scss";
import "../../styles/Businessbasic.scss";
import "../../styles/BusinessJobs.scss";

const CATEGORIES = [
  "Photographer",
  "Videographer",
  "Video Editor",
  "Album Designer",
  "Graphic Designer",
  "Photography Faculty",
  "Others",
];

const JOB_TYPES = ["Full-time", "Part-time", "Freelance"];

const EMPTY_FORM = {
  title: "",
  category: "",
  type: "",
  experience: "",
  salary: "",
  location: "",
  description: "",
  contactName: "",
  phone: "",
  email: "",
  website: "",
};

const SEED_JOBS = [
  {
    id: 1,
    active: true,
    title: "Wedding Photographer",
    category: "Photographer",
    type: "Full-time",
    experience: "2–5 yrs",
    salary: "₹30,000 – ₹50,000 / mo",
    location: "Banjara Hills, Hyderabad",
    description:
      "We are looking for an experienced Wedding Photographer to capture ceremonies, receptions, and pre-wedding shoots. Proficiency in candid and traditional styles with strong Lightroom post-processing skills is required. Must deliver edited galleries within agreed turnaround times.",
    contactName: "Ramesh Kumar",
    phone: "+91 98490 12345",
    email: "careers@photomagical.in",
    website: "www.photomagical.in",
  },
  {
    id: 2,
    active: true,
    title: "Wedding Film Editor",
    category: "Video Editor",
    type: "Full-time",
    experience: "2–4 yrs",
    salary: "₹28,000 – ₹45,000 / mo",
    location: "Kukatpally, Hyderabad",
    description:
      "Edit highlight reels, full-length wedding films, and drone sequences using Premiere Pro and DaVinci Resolve. Colour grading and audio mixing are core responsibilities. Must handle 10–20 concurrent projects per month with consistent quality.",
    contactName: "Suresh Babu",
    phone: "+91 99000 55443",
    email: "edit@photomagical.in",
    website: "www.photomagical.in",
  },
  {
    id: 3,
    active: false,
    title: "Studio Graphic Designer",
    category: "Graphic Designer",
    type: "Full-time",
    experience: "2–4 yrs",
    salary: "₹25,000 – ₹40,000 / mo",
    location: "Banjara Hills, Hyderabad",
    description:
      "Create social posts, price-lists, marketing collateral, and branding assets for the studio. Proficiency in Figma, Illustrator, and Photoshop required. Motion graphics skills for animated Instagram content are a strong bonus.",
    contactName: "Priya Nair",
    phone: "+91 88001 44556",
    email: "design@photomagical.in",
    website: "www.photomagical.in",
  },
  {
    id: 4,
    active: true,
    title: "Photography Trainer",
    category: "Photography Faculty",
    type: "Part-time",
    experience: "4–8 yrs",
    salary: "₹20,000 – ₹35,000 / mo",
    location: "Banjara Hills, Hyderabad",
    description:
      "Conduct weekend workshops on wedding and candid photography for batches of 8–15 students. Cover camera fundamentals, lighting, posing, and Lightroom editing. Strong mentoring ability and a professional portfolio are mandatory.",
    contactName: "Ramesh Kumar",
    phone: "+91 98490 12345",
    email: "training@photomagical.in",
    website: "www.photomagical.in",
  },
  {
    id: 5,
    active: false,
    title: "Studio Receptionist & Coordinator",
    category: "Others",
    type: "Full-time",
    experience: "0–2 yrs",
    salary: "₹15,000 – ₹22,000 / mo",
    location: "Banjara Hills, Hyderabad",
    description:
      "Manage client inquiries, appointment scheduling, and front-desk operations. Proficiency in MS Office and Google Workspace required. Warm, professional communication is essential as you are the first point of contact for all walk-in and phone clients.",
    contactName: "Ramesh Kumar",
    phone: "+91 98490 12345",
    email: "admin@photomagical.in",
    website: "www.photomagical.in",
  },
];

const TYPE_CLASS = {
  "Full-time": "full-time",
  "Part-time": "part-time",
  Freelance: "freelance",
};

// ── Job Form Modal ────────────────────────────────────────────────────────────
const JobModal = ({ initial, onSave, onClose }) => {
  const [form, setForm] = useState(initial || EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const firstRef = useRef(null);

  useEffect(() => {
    firstRef.current?.focus();
  }, []);

  const set = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.title.trim()) e.title = "Job title is required.";
    if (!form.category) e.category = "Select a category.";
    if (!form.type) e.type = "Select a job type.";
    if (!form.experience.trim()) e.experience = "Experience is required.";
    if (!form.location.trim()) e.location = "Location is required.";
    if (!form.description.trim()) e.description = "Job description is required.";
    if (!form.contactName.trim()) e.contactName = "Contact name is required.";
    if (!form.phone.trim()) e.phone = "Phone number is required.";
    if (!form.email.trim()) e.email = "Email address is required.";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    onSave(form);
  };

  const field = (label, key, type = "text", required = true) => (
    <div className="bjobs-modal__field">
      <label className="bjobs-modal__label">
        {label}{required && <span className="bjobs-modal__req">*</span>}
      </label>
      <input
        ref={key === "title" ? firstRef : undefined}
        className={`bb-input bjobs-modal__input${errors[key] ? " is-error" : ""}`}
        type={type}
        value={form[key]}
        onChange={set(key)}
        placeholder={label}
      />
      {errors[key] && <p className="bjobs-modal__error">{errors[key]}</p>}
    </div>
  );

  return (
    <div className="bjobs-overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="bjobs-modal" role="dialog" aria-modal="true" aria-label="Job form">
        <div className="bjobs-modal__head">
          <h2 className="bjobs-modal__title">
            {initial ? "Edit Job" : "Create New Job"}
          </h2>
          <button className="bjobs-modal__close" onClick={onClose} aria-label="Close">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
              stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <form className="bjobs-modal__body" onSubmit={handleSubmit} noValidate>
          <p className="bjobs-modal__section-label">Job Details</p>

          {field("Job Title", "title")}

          <div className="bjobs-modal__row">
            <div className="bjobs-modal__field">
              <label className="bjobs-modal__label">Category<span className="bjobs-modal__req">*</span></label>
              <select
                className={`bb-input bjobs-modal__input${errors.category ? " is-error" : ""}`}
                value={form.category}
                onChange={set("category")}
              >
                <option value="">Select category</option>
                {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
              {errors.category && <p className="bjobs-modal__error">{errors.category}</p>}
            </div>

            <div className="bjobs-modal__field">
              <label className="bjobs-modal__label">Job Type<span className="bjobs-modal__req">*</span></label>
              <select
                className={`bb-input bjobs-modal__input${errors.type ? " is-error" : ""}`}
                value={form.type}
                onChange={set("type")}
              >
                <option value="">Select type</option>
                {JOB_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
              {errors.type && <p className="bjobs-modal__error">{errors.type}</p>}
            </div>
          </div>

          <div className="bjobs-modal__row">
            {field("Experience Required", "experience")}
            {field("Salary Range", "salary", "text", false)}
          </div>

          {field("Location", "location")}

          <div className="bjobs-modal__field">
            <label className="bjobs-modal__label">
              Job Description<span className="bjobs-modal__req">*</span>
            </label>
            <textarea
              className={`bb-input bjobs-modal__textarea${errors.description ? " is-error" : ""}`}
              value={form.description}
              onChange={set("description")}
              placeholder="Describe the role, responsibilities and requirements…"
              rows={5}
            />
            {errors.description && <p className="bjobs-modal__error">{errors.description}</p>}
          </div>

          <p className="bjobs-modal__section-label">Contact Details</p>

          <div className="bjobs-modal__row">
            {field("Contact Name", "contactName")}
            {field("Phone Number", "phone", "tel")}
          </div>
          <div className="bjobs-modal__row">
            {field("Email Address", "email", "email")}
            {field("Website", "website", "text", false)}
          </div>

          <div className="bjobs-modal__footer">
            <button type="button" className="bjobs-modal__btn bjobs-modal__btn--cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="bjobs-modal__btn bjobs-modal__btn--save">
              {initial ? "Save Changes" : "Post Job"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// ── Main Page ─────────────────────────────────────────────────────────────────
const BusinessJobs = () => {
  const [jobs, setJobs] = useState(SEED_JOBS);
  const [modal, setModal] = useState(null); // null | { mode: "create" } | { mode: "edit", job }
  const [toast, setToast] = useState(false);
  const toastTimer = useRef(null);

  const showToast = () => {
    setToast(true);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(false), 3500);
  };

  useEffect(() => () => clearTimeout(toastTimer.current), []);

  const handleToggleActive = (id) =>
    setJobs((prev) =>
      prev.map((j) => (j.id === id ? { ...j, active: !j.active } : j))
    );

  const handleSave = (formData) => {
    if (modal.mode === "create") {
      setJobs((prev) => [
        ...prev,
        { ...formData, id: Date.now(), active: true },
      ]);
    } else {
      setJobs((prev) =>
        prev.map((j) => (j.id === modal.job.id ? { ...j, ...formData } : j))
      );
    }
    setModal(null);
    showToast();
  };

  return (
    <div className="biz-profile">
      {/* Toast */}
      <div className={`bjobs-toast${toast ? " bjobs-toast--visible" : ""}`}>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none"
          stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
        Your job notification posted successfully
      </div>

      <div className="biz-profile__wrapper">
        <div className="biz-profile__sidebar"><Leftnav /></div>

        <main className="biz-profile__main">
          {/* Header card */}
          <div className="biz-profile__card bjobs-header-card">
            <div className="bjobs-header">
              <div>
                <h1 className="bjobs-header__title">Jobs</h1>
                <p className="bjobs-header__sub">
                  Manage job postings visible on your public profile. Active jobs are shown to candidates; inactive jobs are hidden.
                </p>
              </div>
              <button
                className="bjobs-header__create-btn"
                onClick={() => setModal({ mode: "create" })}
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none"
                  stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                Create Job
              </button>
            </div>
          </div>

          {/* Job list */}
          <div className="bjobs-list">
            {jobs.map((job) => (
              <div key={job.id} className={`bjobs-card${!job.active ? " bjobs-card--inactive" : ""}`}>
                {/* Status ribbon */}
                <div className="bjobs-card__ribbon">
                  <span className={`bjobs-card__type bjobs-card__type--${TYPE_CLASS[job.type] || "full-time"}`}>
                    {job.type}
                  </span>
                  <span className="bjobs-card__category">{job.category}</span>
                  {!job.active && (
                    <span className="bjobs-card__inactive-badge">Inactive — Hidden from public</span>
                  )}
                </div>

                <h2 className="bjobs-card__title">{job.title}</h2>

                {/* Details row */}
                <div className="bjobs-card__details">
                  <span className="bjobs-card__detail">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden="true">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                    </svg>
                    {job.location}
                  </span>
                  <span className="bjobs-card__detail">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="7" width="20" height="14" rx="2"/>
                      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                    </svg>
                    {job.experience}
                  </span>
                  {job.salary && (
                    <span className="bjobs-card__detail bjobs-card__detail--salary">
                      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="12" y1="1" x2="12" y2="23"/>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                      </svg>
                      {job.salary}
                    </span>
                  )}
                </div>

                <p className="bjobs-card__desc">{job.description}</p>

                {/* Contact row */}
                <div className="bjobs-card__contact">
                  <span className="bjobs-card__contact-item">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    {job.contactName}
                  </span>
                  <span className="bjobs-card__contact-item">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.96-1.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    {job.phone}
                  </span>
                  <span className="bjobs-card__contact-item">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    {job.email}
                  </span>
                </div>

                {/* Actions */}
                <div className="bjobs-card__actions">
                  <button
                    className="bjobs-card__edit-btn"
                    onClick={() => setModal({ mode: "edit", job })}
                  >
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                    </svg>
                    Edit
                  </button>

                  <label className="bjobs-toggle" title={job.active ? "Click to deactivate" : "Click to activate"}>
                    <input
                      type="checkbox"
                      checked={job.active}
                      onChange={() => handleToggleActive(job.id)}
                    />
                    <span className="bjobs-toggle__track">
                      <span className="bjobs-toggle__thumb" />
                    </span>
                    <span className="bjobs-toggle__label">
                      {job.active ? "Active" : "Inactive"}
                    </span>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Modal */}
      {modal && (
        <JobModal
          initial={modal.mode === "edit" ? modal.job : null}
          onSave={handleSave}
          onClose={() => setModal(null)}
        />
      )}
    </div>
  );
};

export default BusinessJobs;
