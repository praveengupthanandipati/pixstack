import React, { useState } from "react";
import Leftnav from "./Leftnav";
import "../../styles/Businessprofile.scss";
import "../../styles/Businessbasic.scss";
import "../../styles/Socialprofiles.scss";

// ─── Platform definitions ─────────────────────────────────────────────────────
const PLATFORMS = [
  {
    key: "facebook",
    label: "Facebook",
    placeholder: "https://facebook.com/yourbusiness",
    color: "#1877f2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    key: "instagram",
    label: "Instagram",
    placeholder: "https://instagram.com/yourbusiness",
    color: "#e1306c",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.163 12 18.163s6.162-2.759 6.162-6.162S15.403 5.838 12 5.838zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    key: "twitter",
    label: "Twitter / X",
    placeholder: "https://twitter.com/yourbusiness",
    color: "#000000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    placeholder: "https://linkedin.com/company/yourbusiness",
    color: "#0077b5",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    key: "youtube",
    label: "YouTube",
    placeholder: "https://youtube.com/@yourchannel",
    color: "#ff0000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    key: "pinterest",
    label: "Pinterest",
    placeholder: "https://pinterest.com/yourbusiness",
    color: "#e60023",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
      </svg>
    ),
  },
  {
    key: "whatsapp",
    label: "WhatsApp Business",
    placeholder: "https://wa.me/919876543210",
    color: "#25d366",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
];

// ─── Seed links ───────────────────────────────────────────────────────────────
const SEED_LINKS = [
  { id: 1, key: "facebook",  url: "https://facebook.com/focussnaps" },
  { id: 2, key: "instagram", url: "https://instagram.com/focussnaps" },
  { id: 3, key: "twitter",   url: "https://twitter.com/focussnaps" },
  { id: 4, key: "linkedin",  url: "https://linkedin.com/company/focussnaps" },
];

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const IconTrash = (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
    <path d="M10 11v6M14 11v6" />
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
  </svg>
);

const IconAdd = (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const IconLink = (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

// ─── Page ─────────────────────────────────────────────────────────────────────
const Socialprofiles = () => {
  const [links, setLinks]     = useState(SEED_LINKS);
  const [confirm, setConfirm] = useState(null);       // { id, label }
  const [addKey, setAddKey]   = useState("");
  const [addUrl, setAddUrl]   = useState("");
  const [addError, setAddError] = useState("");

  // ── Add ────────────────────────────────────────────────────────────────────
  const handleAdd = () => {
    if (!addKey)              { setAddError("Please select a platform");           return; }
    if (!addUrl.trim())       { setAddError("Please enter the profile URL");       return; }
    if (!/^https?:\/\//i.test(addUrl.trim())) { setAddError("URL must start with https://"); return; }
    if (links.some((l) => l.key === addKey)) { setAddError("This platform is already added"); return; }

    setLinks((prev) => [...prev, { id: Date.now(), key: addKey, url: addUrl.trim() }]);
    setAddKey("");
    setAddUrl("");
    setAddError("");
  };

  // ── Confirm delete ─────────────────────────────────────────────────────────
  const requestDelete = (link) => {
    const platform = PLATFORMS.find((p) => p.key === link.key);
    setConfirm({ id: link.id, label: platform?.label || link.key });
  };

  const handleConfirmDelete = () => {
    setLinks((prev) => prev.filter((l) => l.id !== confirm.id));
    setConfirm(null);
  };

  // ── Available platforms (not yet added) ────────────────────────────────────
  const addedKeys      = links.map((l) => l.key);
  const availablePlatforms = PLATFORMS.filter((p) => !addedKeys.includes(p.key));

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
                <h2 className="bb-hd__title">Social <span>Links</span></h2>
                <p className="bb-hd__sub">{links.length} {links.length === 1 ? "platform" : "platforms"} connected</p>
              </div>
            </div>

            <div className="bb-body">

              {/* ── Add new link ── */}
              <div className="bb-section">
                <h3 className="bb-section-title">Add Social Link</h3>
                <div className="sl-add-form">
                  <select
                    className={`bb-input sl-platform-select${addError && !addKey ? " has-error" : ""}`}
                    value={addKey}
                    onChange={(e) => { setAddKey(e.target.value); setAddError(""); }}
                  >
                    <option value="">Select platform</option>
                    {availablePlatforms.map((p) => (
                      <option key={p.key} value={p.key}>{p.label}</option>
                    ))}
                  </select>

                  <div className="sl-url-wrap">
                    <input
                      type="url"
                      className={`bb-input${addError && addKey ? " has-error" : ""}`}
                      placeholder={
                        addKey
                          ? PLATFORMS.find((p) => p.key === addKey)?.placeholder
                          : "https://…"
                      }
                      value={addUrl}
                      onChange={(e) => { setAddUrl(e.target.value); setAddError(""); }}
                      onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                    />
                  </div>

                  <button className="svc-add-btn sl-add-btn" onClick={handleAdd}>
                    {IconAdd}
                    Add
                  </button>
                </div>
                {addError && <p className="bb-error" style={{ marginTop: 8 }}>{addError}</p>}
              </div>

              {/* ── Links list ── */}
              <div className="bb-section" style={{ borderBottom: "none" }}>
                {links.length > 0 ? (
                  <div className="sl-list">
                    {links.map((link) => {
                      const platform = PLATFORMS.find((p) => p.key === link.key);
                      return (
                        <div key={link.id} className="sl-item">
                          <div className="sl-item__icon" style={{ color: platform?.color || "#888" }}>
                            {platform?.icon}
                          </div>
                          <div className="sl-item__info">
                            <span className="sl-item__label">{platform?.label || link.key}</span>
                            <a href={link.url} target="_blank" rel="noreferrer"
                              className="sl-item__url">
                              {IconLink}
                              {link.url}
                            </a>
                          </div>
                          <button className="sl-item__del" onClick={() => requestDelete(link)}
                            aria-label={`Remove ${platform?.label}`}>
                            {IconTrash}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="sl-empty">
                    <p>No social links added yet. Use the form above to connect your profiles.</p>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ── Confirm delete dialog ──────────────────────────────────────────── */}
      {confirm && (
        <div className="sl-confirm-overlay" onClick={() => setConfirm(null)}>
          <div className="sl-confirm" onClick={(e) => e.stopPropagation()}>
            <div className="sl-confirm__icon">{IconTrash}</div>
            <h3 className="sl-confirm__title">Remove {confirm.label}?</h3>
            <p className="sl-confirm__msg">
              The <strong>{confirm.label}</strong> link will be removed from your business profile.
            </p>
            <div className="sl-confirm__actions">
              <button className="sl-confirm__delete-btn" onClick={handleConfirmDelete}>
                Yes, Remove
              </button>
              <button className="sl-confirm__cancel-btn" onClick={() => setConfirm(null)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Socialprofiles;
