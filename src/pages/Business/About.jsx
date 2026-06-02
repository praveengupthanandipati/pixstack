import React, { useState } from "react";
import Leftnav from "./Leftnav";
import "../../styles/Businessprofile.scss";
import "../../styles/Businessbasic.scss";

// ─── Initial Data ─────────────────────────────────────────────────────────────
const INITIAL = {
  about: `Focus Snaps Photography is a premium studio based in Hyderabad specialising in wedding, portrait, and commercial photography. With over five years of hands-on experience and 120+ successful projects, our team of skilled photographers is passionate about capturing life's most precious moments with an artistic eye.\n\nWe believe every frame tells a story — and we are here to tell yours. From intimate candid portraits to grand destination weddings, we bring creativity, technical expertise, and genuine care to every assignment.\n\nOur state-of-the-art equipment and post-processing workflow ensures that every image delivered meets the highest quality standards. We work closely with our clients to understand their vision and translate it into stunning visuals that will be cherished for generations. Our commitment to excellence has earned us the trust of hundreds of happy families, brands, and organisations across Telangana and beyond.`,
  established: "2020-01-15",
  experience: "5",
  projects: "120",
  teamSize: "15",
};

// ─── Word counter helper ──────────────────────────────────────────────────────
const wordCount = (text) =>
  text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

// ─── Field wrapper ────────────────────────────────────────────────────────────
const Field = ({ label, error, full, children }) => (
  <div className={`bb-field${full ? " bb-field--full" : ""}`}>
    <label className="bb-label">{label}</label>
    {children}
    {error && <p className="bb-error">{error}</p>}
  </div>
);

// ─── Format helpers ───────────────────────────────────────────────────────────
const fmtDate = (val) => {
  if (!val) return "—";
  const d = new Date(val + "T00:00:00");
  return isNaN(d)
    ? val
    : d.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
};

// ─── SVG Icons ───────────────────────────────────────────────────────────────
const IconEdit = (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor"
    strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const IconCalendar = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor"
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const IconClock = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor"
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const IconActivity = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor"
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

const IconTeam = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor"
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

// ─── Page ─────────────────────────────────────────────────────────────────────
const About = () => {
  const [data, setData] = useState(INITIAL);
  const [draft, setDraft] = useState(INITIAL);
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState({});

  const set = (field, val) => {
    setDraft((d) => ({ ...d, [field]: val }));
    setErrors((e) => ({ ...e, [field]: "" }));
  };

  const handleEdit = () => {
    setDraft({ ...data });
    setErrors({});
    setIsEditing(true);
  };

  const handleCancel = () => {
    setDraft({ ...data });
    setErrors({});
    setIsEditing(false);
  };

  const handleSave = () => {
    const errs = {};
    const wc = wordCount(draft.about);
    if (wc < 50) errs.about = `Minimum 50 words required (${wc} entered)`;
    if (!draft.established)
      errs.established = "Date of establishment is required";
    if (
      !draft.experience.toString().trim() ||
      isNaN(Number(draft.experience)) ||
      Number(draft.experience) < 0
    )
      errs.experience = "Enter valid years of experience";
    if (
      !draft.projects.toString().trim() ||
      isNaN(Number(draft.projects)) ||
      Number(draft.projects) < 0
    )
      errs.projects = "Enter valid project count";
    if (
      !draft.teamSize.toString().trim() ||
      isNaN(Number(draft.teamSize)) ||
      Number(draft.teamSize) < 1
    )
      errs.teamSize = "Enter valid team size";

    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setData({ ...draft });
    setIsEditing(false);
  };

  const wc = wordCount(isEditing ? draft.about : data.about);

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
            {/* Card header */}
            <div className="bb-hd">
              <div>
                <h2 className="bb-hd__title">
                  About <span>Business</span>
                </h2>
                <p className="bb-hd__sub">
                  Describe your business and help clients understand who you are
                </p>
              </div>
              {!isEditing && (
                <button className="bb-hd__edit-btn" onClick={handleEdit}>
                  {IconEdit}
                  Edit Details
                </button>
              )}
            </div>

            <div className="bb-body">
              {/* ── About Text ── */}
              <div className="bb-section">
                <h3 className="bb-section-title">Company Overview</h3>

                {isEditing ? (
                  <div className="ab-about-wrap">
                    <textarea
                      className={`bb-textarea ab-about-textarea${errors.about ? " has-error" : ""}`}
                      placeholder="Write a detailed description of your business (minimum 50 words)…"
                      value={draft.about}
                      onChange={(e) => set("about", e.target.value)}
                    />
                    <div
                      className={`ab-word-count${wc < 50 ? " ab-word-count--low" : ""}`}
                    >
                      {wc} {wc === 1 ? "word" : "words"}
                      {wc < 50 && <span> · {50 - wc} more needed</span>}
                    </div>
                    {errors.about && <p className="bb-error">{errors.about}</p>}
                  </div>
                ) : (
                  <p className="ab-about-text">{data.about || "—"}</p>
                )}
              </div>

              {/* ── Stats Grid ── */}
              <div className="bb-section">
                <h3 className="bb-section-title">Business Stats</h3>

                {isEditing ? (
                  <div className="bb-grid">
                    <Field
                      label="Date of Establishment *"
                      error={errors.established}
                    >
                      <input
                        type="date"
                        className={`bb-input${errors.established ? " has-error" : ""}`}
                        value={draft.established}
                        max={new Date().toISOString().split("T")[0]}
                        onChange={(e) => set("established", e.target.value)}
                      />
                    </Field>

                    <Field
                      label="Industry Experience (years) *"
                      error={errors.experience}
                    >
                      <div className="ab-input-suffix">
                        <input
                          type="number"
                          className={`bb-input${errors.experience ? " has-error" : ""}`}
                          placeholder="e.g. 7"
                          min={0}
                          max={100}
                          value={draft.experience}
                          onChange={(e) => set("experience", e.target.value)}
                        />
                        <span className="ab-suffix">Yrs</span>
                      </div>
                    </Field>

                    <Field
                      label="Total Projects Completed *"
                      error={errors.projects}
                    >
                      <div className="ab-input-suffix">
                        <input
                          type="number"
                          className={`bb-input${errors.projects ? " has-error" : ""}`}
                          placeholder="e.g. 120"
                          min={0}
                          value={draft.projects}
                          onChange={(e) => set("projects", e.target.value)}
                        />
                        <span className="ab-suffix">+</span>
                      </div>
                    </Field>

                    <Field label="Team Size *" error={errors.teamSize}>
                      <div className="ab-input-suffix">
                        <input
                          type="number"
                          className={`bb-input${errors.teamSize ? " has-error" : ""}`}
                          placeholder="e.g. 15"
                          min={1}
                          value={draft.teamSize}
                          onChange={(e) => set("teamSize", e.target.value)}
                        />
                        <span className="ab-suffix">Members</span>
                      </div>
                    </Field>
                  </div>
                ) : (
                  <div className="ab-stats-grid">
                    <div className="ab-stat">
                      {IconCalendar}
                      <div>
                        <span className="ab-stat__label">Established</span>
                        <strong className="ab-stat__value">{fmtDate(data.established)}</strong>
                      </div>
                    </div>

                    <div className="ab-stat">
                      {IconClock}
                      <div>
                        <span className="ab-stat__label">Industry Experience</span>
                        <strong className="ab-stat__value">
                          {data.experience} {Number(data.experience) === 1 ? "Year" : "Years"}
                        </strong>
                      </div>
                    </div>

                    <div className="ab-stat">
                      {IconActivity}
                      <div>
                        <span className="ab-stat__label">Projects Completed</span>
                        <strong className="ab-stat__value">{data.projects}+</strong>
                      </div>
                    </div>

                    <div className="ab-stat">
                      {IconTeam}
                      <div>
                        <span className="ab-stat__label">Team Size</span>
                        <strong className="ab-stat__value">{data.teamSize} Members</strong>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* ── Save / Cancel ── */}
              {isEditing && (
                <div className="bb-actions">
                  <button className="bb-save-btn" onClick={handleSave}>
                    Save Changes
                  </button>
                  <button className="bb-cancel-btn" onClick={handleCancel}>
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
