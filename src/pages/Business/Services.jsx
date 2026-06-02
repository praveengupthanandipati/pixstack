import React, { useState, useRef } from "react";
import Leftnav from "./Leftnav";
import "../../styles/Businessprofile.scss";
import "../../styles/Businessbasic.scss";
import "../../styles/Services.scss";

// ─── Seed data ────────────────────────────────────────────────────────────────
const SEED_SERVICES = [
  "Wedding Photography",
  "Event Photography",
  "Fashion Photography",
  "Portrait Photography",
  "Product Photography",
  "Fine Art Photography",
  "Architectural Photography",
  "Travel Photography",
  "Advertising",
  "Lifestyle Photography",
  "Photo Journalism",
  "Newborn Photography",
  "Maternity Photography",
  "Corporate Photography",
  "Food Photography",
];

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const IconAdd = (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const IconClose = (
  <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor"
    strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// ─── Page ─────────────────────────────────────────────────────────────────────
const Services = () => {
  const [services, setServices] = useState(SEED_SERVICES);
  const [input, setInput]       = useState("");
  const [error, setError]       = useState("");
  const inputRef                = useRef(null);

  const handleAdd = () => {
    const trimmed = input.trim();
    if (!trimmed) {
      setError("Please enter a service name");
      inputRef.current?.focus();
      return;
    }
    if (services.some((s) => s.toLowerCase() === trimmed.toLowerCase())) {
      setError("This service already exists");
      inputRef.current?.focus();
      return;
    }
    setServices((prev) => [...prev, trimmed]);
    setInput("");
    setError("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAdd();
    if (error) setError("");
  };

  const handleDelete = (name) =>
    setServices((prev) => prev.filter((s) => s !== name));

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
                <h2 className="bb-hd__title">Business <span>Services</span></h2>
                <p className="bb-hd__sub">
                  {services.length} {services.length === 1 ? "service" : "services"} listed
                </p>
              </div>
            </div>

            <div className="bb-body">

              {/* ── Add Service ── */}
              <div className="bb-section">
                <h3 className="bb-section-title">Add New Service</h3>
                <div className="svc-add-row">
                  <div className="svc-add-input-wrap">
                    <input
                      ref={inputRef}
                      type="text"
                      className={`bb-input svc-add-input${error ? " has-error" : ""}`}
                      placeholder="e.g. Wedding Photography"
                      value={input}
                      onChange={(e) => { setInput(e.target.value); setError(""); }}
                      onKeyDown={handleKeyDown}
                      maxLength={60}
                    />
                    {error && <p className="bb-error">{error}</p>}
                  </div>
                  <button className="svc-add-btn" onClick={handleAdd}>
                    {IconAdd}
                    Add Service
                  </button>
                </div>
              </div>

              {/* ── Services list ── */}
              <div className="bb-section">
                <h3 className="bb-section-title">Current Services</h3>

                {services.length > 0 ? (
                  <div className="svc-chips">
                    {services.map((name) => (
                      <div key={name} className="svc-chip">
                        <span className="svc-chip__dot" />
                        <span className="svc-chip__name">{name}</span>
                        <button
                          className="svc-chip__del"
                          onClick={() => handleDelete(name)}
                          aria-label={`Remove ${name}`}
                        >
                          {IconClose}
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="svc-empty">
                    <p>No services added yet. Use the form above to add your first service.</p>
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

export default Services;
