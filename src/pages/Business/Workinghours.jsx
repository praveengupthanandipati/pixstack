import React, { useState } from "react";
import Leftnav from "./Leftnav";
import "../../styles/Businessprofile.scss";
import "../../styles/Businessbasic.scss";
import "../../styles/Workinghours.scss";

// ─── Initial hours ────────────────────────────────────────────────────────────
const INITIAL_HOURS = [
  { day: "Monday",    open: true,  from: "09:00", to: "19:00" },
  { day: "Tuesday",   open: true,  from: "09:00", to: "19:00" },
  { day: "Wednesday", open: true,  from: "09:00", to: "19:00" },
  { day: "Thursday",  open: true,  from: "09:00", to: "19:00" },
  { day: "Friday",    open: true,  from: "09:00", to: "19:00" },
  { day: "Saturday",  open: true,  from: "10:00", to: "17:00" },
  { day: "Sunday",    open: false, from: "09:00", to: "17:00" },
];

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const IconEdit = (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor"
    strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const IconClock = (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor"
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

// ─── Helpers ──────────────────────────────────────────────────────────────────
const fmt12 = (time24) => {
  if (!time24) return "";
  const [h, m] = time24.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  const h12  = h % 12 || 12;
  return `${h12}:${String(m).padStart(2, "0")} ${ampm}`;
};

const today = new Date().getDay(); // 0=Sun … 6=Sat
const DAY_INDEX = { Monday:1, Tuesday:2, Wednesday:3, Thursday:4, Friday:5, Saturday:6, Sunday:0 };

// ─── Page ─────────────────────────────────────────────────────────────────────
const Workinghours = () => {
  const [hours, setHours]       = useState(INITIAL_HOURS);
  const [draft, setDraft]       = useState(INITIAL_HOURS);
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors]     = useState({});

  const handleEdit = () => {
    setDraft(hours.map((h) => ({ ...h })));
    setErrors({});
    setIsEditing(true);
  };

  const handleCancel = () => {
    setDraft(hours.map((h) => ({ ...h })));
    setErrors({});
    setIsEditing(false);
  };

  const setDay = (index, field, val) => {
    setDraft((prev) => {
      const next = prev.map((h) => ({ ...h }));
      next[index][field] = val;
      return next;
    });
    setErrors((e) => ({ ...e, [index]: "" }));
  };

  const handleSave = () => {
    const errs = {};
    draft.forEach((row, i) => {
      if (row.open && row.from >= row.to) {
        errs[i] = "Opening time must be before closing time";
      }
    });
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setHours(draft.map((h) => ({ ...h })));
    setIsEditing(false);
  };

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

            {/* Header */}
            <div className="bb-hd">
              <div>
                <h2 className="bb-hd__title">Working <span>Hours</span></h2>
                <p className="bb-hd__sub">Set when your business is open for clients</p>
              </div>
              {!isEditing && (
                <button className="bb-hd__edit-btn" onClick={handleEdit}>
                  {IconEdit}
                  Edit Hours
                </button>
              )}
            </div>

            <div className="bb-body">
              <div className="bb-section" style={{ borderBottom: "none" }}>

                {isEditing ? (

                  /* ── Edit mode ── */
                  <div className="wh-edit-list">
                    {draft.map((row, i) => (
                      <div key={row.day}
                        className={`wh-edit-row${DAY_INDEX[row.day] === today ? " is-today" : ""}`}>

                        {/* Day + toggle */}
                        <div className="wh-edit-row__day-col">
                          <label className="wh-toggle">
                            <input type="checkbox" checked={row.open}
                              onChange={(e) => setDay(i, "open", e.target.checked)} />
                            <span className="wh-toggle__track">
                              <span className="wh-toggle__thumb" />
                            </span>
                          </label>
                          <span className={`wh-edit-row__day${!row.open ? " is-closed" : ""}`}>
                            {row.day}
                          </span>
                          {DAY_INDEX[row.day] === today && (
                            <span className="wh-today-tag">Today</span>
                          )}
                        </div>

                        {/* Time inputs or Closed label */}
                        {row.open ? (
                          <div className="wh-edit-row__times">
                            <div className="wh-time-group">
                              <label className="wh-time-label">From</label>
                              <input type="time" className={`wh-time-input${errors[i] ? " has-error" : ""}`}
                                value={row.from}
                                onChange={(e) => setDay(i, "from", e.target.value)} />
                            </div>
                            <span className="wh-edit-row__sep">—</span>
                            <div className="wh-time-group">
                              <label className="wh-time-label">To</label>
                              <input type="time" className={`wh-time-input${errors[i] ? " has-error" : ""}`}
                                value={row.to}
                                onChange={(e) => setDay(i, "to", e.target.value)} />
                            </div>
                          </div>
                        ) : (
                          <span className="wh-closed-badge">Closed</span>
                        )}

                        {errors[i] && (
                          <p className="bb-error wh-edit-row__error">{errors[i]}</p>
                        )}
                      </div>
                    ))}

                    <div className="bb-actions" style={{ padding: "20px 0 0", borderTop: "1px solid #e4e4e4", marginTop: 8 }}>
                      <button className="bb-save-btn" onClick={handleSave}>Save Changes</button>
                      <button className="bb-cancel-btn" onClick={handleCancel}>Cancel</button>
                    </div>
                  </div>

                ) : (

                  /* ── View mode ── */
                  <div className="wh-view-list">
                    {hours.map((row) => (
                      <div key={row.day}
                        className={`wh-view-row${DAY_INDEX[row.day] === today ? " is-today" : ""}`}>
                        <div className="wh-view-row__left">
                          {DAY_INDEX[row.day] === today && (
                            <span className="wh-today-dot" />
                          )}
                          <span className="wh-view-row__day">{row.day}</span>
                          {DAY_INDEX[row.day] === today && (
                            <span className="wh-today-tag">Today</span>
                          )}
                        </div>

                        {row.open ? (
                          <div className="wh-view-row__time">
                            <span className="wh-view-row__time-icon">{IconClock}</span>
                            {fmt12(row.from)} – {fmt12(row.to)}
                          </div>
                        ) : (
                          <span className="wh-closed-badge">Closed</span>
                        )}
                      </div>
                    ))}
                  </div>

                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workinghours;
