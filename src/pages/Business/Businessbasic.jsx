import React, { useState, useRef, useEffect } from 'react';
import Leftnav from './Leftnav';
import '../../styles/Businessprofile.scss';
import '../../styles/Businessbasic.scss';

// ─── Indian States ─────────────────────────────────────────────────────────────
const INDIAN_STATES = [
  'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh',
  'Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka',
  'Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram',
  'Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu',
  'Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal',
  'Andaman & Nicobar Islands','Chandigarh','Dadra & Nagar Haveli and Daman & Diu',
  'Delhi','Jammu & Kashmir','Ladakh','Lakshadweep','Puducherry',
];

// ─── Searchable State Dropdown ────────────────────────────────────────────────
const StateSelect = ({ value, onChange, hasError }) => {
  const [open, setOpen]   = useState(false);
  const [query, setQuery] = useState('');
  const wrapRef           = useRef(null);
  const searchRef         = useRef(null);

  const filtered = INDIAN_STATES.filter((s) =>
    s.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handler = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => searchRef.current?.focus(), 40);
    else setQuery('');
  }, [open]);

  const select = (state) => { onChange(state); setOpen(false); setQuery(''); };

  return (
    <div className={`bb-state-wrap${open ? ' is-open' : ''}`} ref={wrapRef}>
      <button type="button"
        className={`bb-state-trigger${hasError ? ' has-error' : ''}${value ? '' : ' is-placeholder'}`}
        onClick={() => setOpen((v) => !v)}>
        <span>{value || 'Select state'}</span>
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor"
          strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
          className="bb-state-chevron">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className="bb-state-dropdown">
          <div className="bb-state-search">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input ref={searchRef} type="text" placeholder="Search state…"
              value={query} onChange={(e) => setQuery(e.target.value)} />
            {query && (
              <button type="button" className="bb-state-clear" onClick={() => setQuery('')}>
                <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>
          <ul className="bb-state-list">
            {filtered.length > 0 ? filtered.map((s) => (
              <li key={s}
                className={`bb-state-option${s === value ? ' is-selected' : ''}`}
                onClick={() => select(s)}>
                {s}
                {s === value && (
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor"
                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </li>
            )) : (
              <li className="bb-state-empty">No states found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

// ─── Initial Data ─────────────────────────────────────────────────────────────
const INITIAL = {
  bannerUrl: '',
  logoUrl: '',
  legalName: 'Focus Snaps Photography',
  address: '3rd Floor, Prestige Centre, Banjara Hills',
  city: 'Hyderabad',
  state: 'Telangana',
  phone: '+91 98765 43210',
  email: 'hello@focussnaps.com',
  website: 'www.focussnaps.com',
};

// ─── Field component ──────────────────────────────────────────────────────────
const Field = ({ label, error, full, children }) => (
  <div className={`bb-field${full ? ' bb-field--full' : ''}`}>
    <label className="bb-label">{label}</label>
    {children}
    {error && <p className="bb-error">{error}</p>}
  </div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────
const Businessbasic = () => {
  const [data, setData]         = useState(INITIAL);
  const [draft, setDraft]       = useState(INITIAL);
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors]     = useState({});
  const [bannerPreview, setBannerPreview] = useState('');
  const [logoPreview, setLogoPreview]     = useState('');
  const bannerRef = useRef(null);
  const logoRef   = useRef(null);

  const set = (field, val) => {
    setDraft((d) => ({ ...d, [field]: val }));
    setErrors((e) => ({ ...e, [field]: '' }));
  };

  const handleEdit = () => {
    setDraft({ ...data });
    setErrors({});
    setBannerPreview('');
    setLogoPreview('');
    setIsEditing(true);
  };

  const handleCancel = () => {
    setDraft({ ...data });
    setErrors({});
    setBannerPreview('');
    setLogoPreview('');
    setIsEditing(false);
  };

  const handleBannerFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setBannerPreview(URL.createObjectURL(file));
  };

  const handleLogoFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setLogoPreview(URL.createObjectURL(file));
  };

  const handleSave = () => {
    const errs = {};
    if (!draft.legalName.trim())  errs.legalName = 'Business name is required';
    if (!draft.address.trim())    errs.address   = 'Address is required';
    if (!draft.city.trim())       errs.city      = 'City is required';
    if (!draft.state.trim())      errs.state     = 'State is required';
    if (!/^[6-9]\d{9}$/.test(draft.phone.replace(/[\s+\-()]/g, '')))
      errs.phone = 'Enter a valid 10-digit mobile number';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(draft.email))
      errs.email = 'Enter a valid email address';

    if (Object.keys(errs).length) { setErrors(errs); return; }

    setData({
      ...draft,
      bannerUrl: bannerPreview || data.bannerUrl,
      logoUrl:   logoPreview   || data.logoUrl,
    });
    setBannerPreview('');
    setLogoPreview('');
    setIsEditing(false);
  };

  const displayBanner = bannerPreview || data.bannerUrl;
  const displayLogo   = logoPreview   || data.logoUrl;

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
                <h2 className="bb-hd__title">Basic <span>Details</span></h2>
                <p className="bb-hd__sub">Manage your business identity and contact information</p>
              </div>
              {!isEditing && (
                <button className="bb-hd__edit-btn" onClick={handleEdit}>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor"
                    strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                  Edit Details
                </button>
              )}
            </div>

            <div className="bb-body">

              {/* ── Banner ── */}
              <div className="bb-section">
                <h3 className="bb-section-title">Business Banner</h3>
                <div className="bb-banner-area">
                  {displayBanner ? (
                    <img src={displayBanner} alt="Business Banner" className="bb-banner-img" />
                  ) : (
                    <div className="bb-banner-placeholder">
                      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor"
                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                      <p>No banner uploaded</p>
                    </div>
                  )}
                  {isEditing && (
                    <div className="bb-upload-row">
                      <input type="file" accept="image/*" ref={bannerRef} hidden onChange={handleBannerFile} />
                      <button type="button" className="bb-upload-btn"
                        onClick={() => bannerRef.current?.click()}>
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor"
                          strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="16 16 12 12 8 16" />
                          <line x1="12" y1="12" x2="12" y2="21" />
                          <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                        </svg>
                        {displayBanner ? 'Change Banner' : 'Upload Banner'}
                      </button>
                      <p className="bb-hint">
                        Recommended size: <strong>1900 × 380 px</strong> · JPG or PNG · Max 5 MB
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* ── Logo ── */}
              <div className="bb-section bb-section--logo-row">
                <div className="bb-logo-area">
                  {displayLogo ? (
                    <img src={displayLogo} alt="Business Logo" className="bb-logo-img" />
                  ) : (
                    <div className="bb-logo-placeholder">
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor"
                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                        <circle cx="12" cy="13" r="4" />
                      </svg>
                    </div>
                  )}
                  {isEditing && (
                    <button type="button" className="bb-logo-change"
                      onClick={() => logoRef.current?.click()}>
                      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor"
                        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                      </svg>
                    </button>
                  )}
                </div>
                <div className="bb-logo-info">
                  <h3 className="bb-section-title" style={{ margin: 0 }}>Business Logo</h3>
                  <p className="bb-hint" style={{ marginTop: 4 }}>
                    Recommended size: <strong>120 × 120 px</strong> · JPG or PNG · Max 2 MB
                  </p>
                  {isEditing && (
                    <>
                      <input type="file" accept="image/*" ref={logoRef} hidden onChange={handleLogoFile} />
                      <button type="button" className="bb-upload-btn bb-upload-btn--sm"
                        onClick={() => logoRef.current?.click()}>
                        {displayLogo ? 'Change Logo' : 'Upload Logo'}
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* ── Contact & Identity Fields ── */}
              <div className="bb-section">
                <h3 className="bb-section-title">Business Information</h3>
                <div className="bb-grid">

                  <Field label="Business Legal Name" error={errors.legalName} full>
                    {isEditing ? (
                      <input type="text" className={`bb-input${errors.legalName ? ' has-error' : ''}`}
                        placeholder="Registered business name" value={draft.legalName}
                        onChange={(e) => set('legalName', e.target.value)} />
                    ) : (
                      <p className="bb-value">{data.legalName || '—'}</p>
                    )}
                  </Field>

                  <Field label="Address" error={errors.address} full>
                    {isEditing ? (
                      <textarea className={`bb-textarea${errors.address ? ' has-error' : ''}`}
                        placeholder="Street, area, landmark" rows={2} value={draft.address}
                        onChange={(e) => set('address', e.target.value)} />
                    ) : (
                      <p className="bb-value">{data.address || '—'}</p>
                    )}
                  </Field>

                  <Field label="City" error={errors.city}>
                    {isEditing ? (
                      <input type="text" className={`bb-input${errors.city ? ' has-error' : ''}`}
                        placeholder="e.g. Hyderabad" value={draft.city}
                        onChange={(e) => set('city', e.target.value)} />
                    ) : (
                      <p className="bb-value">{data.city || '—'}</p>
                    )}
                  </Field>

                  <Field label="State" error={errors.state}>
                    {isEditing ? (
                      <StateSelect value={draft.state}
                        onChange={(v) => set('state', v)}
                        hasError={!!errors.state} />
                    ) : (
                      <p className="bb-value">{data.state || '—'}</p>
                    )}
                  </Field>

                  <Field label="Phone Number" error={errors.phone}>
                    {isEditing ? (
                      <input type="tel" className={`bb-input${errors.phone ? ' has-error' : ''}`}
                        placeholder="+91 XXXXX XXXXX" value={draft.phone}
                        onChange={(e) => set('phone', e.target.value)} />
                    ) : (
                      <p className="bb-value">{data.phone || '—'}</p>
                    )}
                  </Field>

                  <Field label="Email ID" error={errors.email}>
                    {isEditing ? (
                      <input type="email" className={`bb-input${errors.email ? ' has-error' : ''}`}
                        placeholder="business@example.com" value={draft.email}
                        onChange={(e) => set('email', e.target.value)} />
                    ) : (
                      <p className="bb-value">{data.email || '—'}</p>
                    )}
                  </Field>

                  <Field label="Website URL" full>
                    {isEditing ? (
                      <input type="url" className="bb-input"
                        placeholder="www.yourbusiness.com" value={draft.website}
                        onChange={(e) => set('website', e.target.value)} />
                    ) : (
                      <p className="bb-value">
                        {data.website
                          ? <a href={`https://${data.website.replace(/^https?:\/\//, '')}`}
                               target="_blank" rel="noreferrer">{data.website}</a>
                          : '—'}
                      </p>
                    )}
                  </Field>

                </div>
              </div>

              {/* ── Save / Cancel ── */}
              {isEditing && (
                <div className="bb-actions">
                  <button className="bb-save-btn" onClick={handleSave}>Save Changes</button>
                  <button className="bb-cancel-btn" onClick={handleCancel}>Cancel</button>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Businessbasic;
