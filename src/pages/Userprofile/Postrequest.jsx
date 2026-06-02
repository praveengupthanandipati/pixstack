import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Leftnav from './Leftnav';
import '../../styles/Userprofile.scss';
import '../../styles/Postrequest.scss';

// ─── Constants ────────────────────────────────────────────────────────────────

const OCCASION_OPTIONS = [
  { value: 'Wedding',         label: 'Wedding',         emoji: '💒' },
  { value: 'Birthday',        label: 'Birthday',        emoji: '🎂' },
  { value: 'Corporate Event', label: 'Corporate Event', emoji: '🏢' },
  { value: 'Baby Shower',     label: 'Baby Shower',     emoji: '👶' },
  { value: 'Anniversary',     label: 'Anniversary',     emoji: '💍' },
  { value: 'Other',           label: 'Other',           emoji: '✨' },
];

const DURATION_OPTIONS = ['2 Hours', '4 Hours', '6 Hours', '8 Hours', 'Full Day'];
const WEDDING_TYPES    = ['Hindu', 'Christian', 'Muslim', 'Interfaith', 'Civil', 'Other'];
const WEDDING_EVENTS   = ['Mehndi', 'Sangeet', 'Haldi', 'Ceremony', 'Reception', 'Engagement'];
const AGE_GROUPS       = ['Kids', 'Teen', 'Adult', 'Senior'];
const FORMALITY_OPTS   = ['Formal', 'Semi-Formal', 'Casual'];

const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  // Union Territories
  'Andaman & Nicobar Islands', 'Chandigarh', 'Dadra & Nagar Haveli and Daman & Diu',
  'Delhi', 'Jammu & Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry',
];

const BUDGET_MIN  = 10000;
const BUDGET_MAX  = 1000000;
const BUDGET_STEP = 10000;

const EMPTY_FORM = {
  occasion: '', eventDate: '', venueName: '', venueAddress: '', mapsLink: '',
  duration: '', guests: '', budgetMin: 10000, budgetMax: 200000, specialReq: '',
  venueCity: '', venueState: '',
  // Wedding
  weddingType: '', weddingDays: '', weddingEvents: [], preWedding: '', albums: '', albumQty: '', videography: '',
  // Birthday
  ageGroup: '', theme: '', cakeTime: '', candid: '',
  // Other / generic
  occasionName: '', eventFormality: '', specificShots: '',
};

const SEED_REQUESTS = [
  {
    id: 1, occasion: 'Wedding', emoji: '💒',
    eventDate: '2025-02-14', venueName: 'Taj Falaknuma Palace',
    venueAddress: 'Engine Bowli, Falaknuma – 500053',
    venueCity: 'Hyderabad', venueState: 'Telangana',
    duration: '8 Hours', guests: 350,
    budgetMin: 25000, budgetMax: 45000, status: 'Completed',
    specialReq: 'Candid + traditional shots needed. Need a second photographer.',
    weddingType: 'Hindu', weddingDays: '3', weddingEvents: ['Mehndi', 'Sangeet', 'Haldi', 'Ceremony', 'Reception'],
    preWedding: 'Yes', albums: 'Yes', albumQty: '2', videography: 'Yes',
  },
  {
    id: 2, occasion: 'Birthday', emoji: '🎂',
    eventDate: '2025-05-20', venueName: 'The Lalit Hotel',
    venueAddress: 'HITEC City, Madhapur – 500081',
    venueCity: 'Hyderabad', venueState: 'Telangana',
    duration: '4 Hours', guests: 80,
    budgetMin: 10000, budgetMax: 20000, status: 'Pending',
    specialReq: 'Want lots of candid group shots. Bollywood theme.',
    ageGroup: 'Adult', theme: 'Bollywood', cakeTime: '19:30', candid: 'Yes',
  },
];

const STATUS_CLS = {
  Completed: 'pr-badge--green',
  Pending:   'pr-badge--amber',
  Confirmed: 'pr-badge--blue',
  Cancelled: 'pr-badge--red',
};

// ─── Dual-range Budget Slider ──────────────────────────────────────────────────
const BudgetSlider = ({ minVal, maxVal, onChange }) => {
  const pct = (v) => ((v - BUDGET_MIN) / (BUDGET_MAX - BUDGET_MIN)) * 100;

  const onMin = (e) => {
    const v = Number(e.target.value);
    if (v < maxVal) onChange(v, maxVal);
  };
  const onMax = (e) => {
    const v = Number(e.target.value);
    if (v > minVal) onChange(minVal, v);
  };

  return (
    <div className="pr-budget">
      <div className="pr-budget__track">
        <div className="pr-budget__fill"
          style={{ left: `${pct(minVal)}%`, right: `${100 - pct(maxVal)}%` }} />
        <input type="range" className="pr-budget__range pr-budget__range--min"
          min={BUDGET_MIN} max={BUDGET_MAX} step={BUDGET_STEP} value={minVal} onChange={onMin} />
        <input type="range" className="pr-budget__range pr-budget__range--max"
          min={BUDGET_MIN} max={BUDGET_MAX} step={BUDGET_STEP} value={maxVal} onChange={onMax} />
      </div>
      <div className="pr-budget__labels">
        <span>₹{minVal.toLocaleString('en-IN')}</span>
        <span>₹{maxVal.toLocaleString('en-IN')}</span>
      </div>
    </div>
  );
};

// ─── Searchable State Dropdown ────────────────────────────────────────────────
const StateSelect = ({ value, onChange, hasError }) => {
  const [open, setOpen]       = useState(false);
  const [query, setQuery]     = useState('');
  const wrapRef               = useRef(null);
  const searchRef             = useRef(null);

  const filtered = INDIAN_STATES.filter((s) =>
    s.toLowerCase().includes(query.toLowerCase())
  );

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Focus search box when opening
  useEffect(() => {
    if (open) setTimeout(() => searchRef.current?.focus(), 40);
  }, [open]);

  const select = (state) => {
    onChange(state);
    setOpen(false);
    setQuery('');
  };

  return (
    <div className={`pr-state-wrap${open ? ' is-open' : ''}`} ref={wrapRef}>
      <button type="button"
        className={`pr-state-trigger${hasError ? ' has-error' : ''}${value ? '' : ' is-placeholder'}`}
        onClick={() => setOpen((v) => !v)}>
        <span>{value || 'Select state'}</span>
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className="pr-state-dropdown">
          <div className="pr-state-search">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input ref={searchRef} type="text" placeholder="Search state…"
              value={query} onChange={(e) => setQuery(e.target.value)} />
            {query && (
              <button type="button" className="pr-state-clear" onClick={() => setQuery('')}>
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>

          <ul className="pr-state-list">
            {filtered.length > 0 ? (
              filtered.map((s) => (
                <li key={s}
                  className={`pr-state-option${s === value ? ' is-selected' : ''}`}
                  onClick={() => select(s)}>
                  {s}
                  {s === value && (
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor"
                      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </li>
              ))
            ) : (
              <li className="pr-state-empty">No states found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

// ─── Field wrapper ────────────────────────────────────────────────────────────
const Field = ({ label, error, full, children }) => (
  <div className={`pr-field${full ? ' pr-field--full' : ''}`}>
    <label className="pr-label">{label}</label>
    {children}
    {error && <p className="pr-error">{error}</p>}
  </div>
);

// ─── Yes / No radio group ─────────────────────────────────────────────────────
const YesNo = ({ name, value, onChange }) => (
  <div className="pr-radio-group">
    {['Yes', 'No'].map((v) => (
      <label key={v} className={`pr-radio${value === v ? ' is-active' : ''}`}>
        <input type="radio" name={name} value={v} checked={value === v}
          onChange={() => onChange(v)} />
        {v}
      </label>
    ))}
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const Postrequest = () => {
  const [form, setForm]           = useState(EMPTY_FORM);
  const [errors, setErrors]       = useState({});
  const [showForm, setShowForm]   = useState(false);
  const [requests, setRequests]   = useState(SEED_REQUESTS);
  const [openItems, setOpenItems] = useState({});

  // ── Form helpers ────────────────────────────────────────────────────────────
  const set = (field, val) => {
    setForm((f) => ({ ...f, [field]: val }));
    setErrors((e) => ({ ...e, [field]: '' }));
  };

  const onOccasionChange = (val) => {
    setForm((f) => ({
      ...f, occasion: val,
      weddingType: '', weddingDays: '', weddingEvents: [], preWedding: '', albums: '', albumQty: '', videography: '',
      ageGroup: '', theme: '', cakeTime: '', candid: '',
      occasionName: '', eventFormality: '', specificShots: '',
    }));
    setErrors((e) => ({ ...e, occasion: '' }));
  };

  const toggleWeddingEvent = (ev) =>
    setForm((f) => ({
      ...f, weddingEvents: f.weddingEvents.includes(ev)
        ? f.weddingEvents.filter((e) => e !== ev)
        : [...f.weddingEvents, ev],
    }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.occasion)            errs.occasion     = 'Please select an occasion type';
    if (!form.eventDate)           errs.eventDate    = 'Please select an event date';
    if (!form.venueName.trim())    errs.venueName    = 'Venue name is required';
    if (!form.venueAddress.trim()) errs.venueAddress = 'Address is required';
    if (!form.venueCity.trim())    errs.venueCity    = 'City is required';
    if (!form.venueState.trim())   errs.venueState   = 'State is required';
    if (!form.duration)            errs.duration     = 'Please select shoot duration';
    if (!form.guests || isNaN(Number(form.guests)) || Number(form.guests) < 1)
      errs.guests = 'Enter a valid guest count';
    if (form.occasion === 'Wedding' && !form.weddingType)
      errs.weddingType = 'Please select wedding type';
    if (form.occasion === 'Other' && !form.occasionName.trim())
      errs.occasionName = 'Please describe the occasion';

    if (Object.keys(errs).length) { setErrors(errs); return; }

    const newId  = Date.now();
    const emoji  = OCCASION_OPTIONS.find((o) => o.value === form.occasion)?.emoji ?? '📋';

    const newRequest = {
      id:           newId,
      occasion:     form.occasion,
      emoji,
      eventDate:    form.eventDate,
      venueName:    form.venueName,
      venueAddress: form.venueAddress,
      venueCity:    form.venueCity,
      venueState:   form.venueState,
      duration:     form.duration,
      guests:       Number(form.guests),
      budgetMin:    form.budgetMin,
      budgetMax:    form.budgetMax,
      specialReq:   form.specialReq,
      status:       'Pending',
      // Wedding
      weddingType:   form.weddingType,
      weddingDays:   form.weddingDays,
      weddingEvents: form.weddingEvents,
      preWedding:    form.preWedding,
      albums:        form.albums,
      albumQty:      form.albumQty,
      videography:   form.videography,
      // Birthday
      ageGroup: form.ageGroup,
      theme:    form.theme,
      cakeTime: form.cakeTime,
      candid:   form.candid,
      // Other
      occasionName:   form.occasionName,
      eventFormality: form.eventFormality,
      specificShots:  form.specificShots,
    };

    setRequests((prev) => [newRequest, ...prev]);
    setOpenItems((prev) => ({ ...prev, [newId]: true }));
    setShowForm(false);
    setForm(EMPTY_FORM);
    setErrors({});
  };

  const cancelForm = () => { setShowForm(false); setForm(EMPTY_FORM); setErrors({}); };

  // ── Accordion ───────────────────────────────────────────────────────────────
  const toggleItem = (id) =>
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));

  const fmtDate = (val) => {
    if (!val) return '—';
    const d = new Date(val + 'T00:00:00');
    return isNaN(d) ? val : d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  const isOtherGroup = ['Other', 'Corporate Event', 'Baby Shower', 'Anniversary'].includes(form.occasion);

  return (
    <div className="user-profile">
      <div className="user-profile__wrapper">

        {/* ── Sidebar ─────────────────────────────────────────────────────── */}
        <div className="user-profile__sidebar">
          <Leftnav />
        </div>

        {/* ── Main content ────────────────────────────────────────────────── */}
        <div className="user-profile__main">

          {/* ══ New Request Card ══════════════════════════════════════════════ */}
          <div className="user-profile__card">
            <div className="pr-card-hd">
              <div className="pr-card-hd__text">
                <h2 className="pr-card-title">Post a <span>New Request</span></h2>
                <p className="pr-card-sub">Tell us about your event and we'll connect you with the best photographers nearby.</p>
              </div>
              <button className={`pr-new-btn${showForm ? ' is-cancel' : ''}`}
                onClick={() => showForm ? cancelForm() : setShowForm(true)}>
                {showForm ? 'Cancel' : '+ New Request'}
              </button>
            </div>


            {showForm && (
              <form className="pr-form" onSubmit={handleSubmit} noValidate>

                {/* ── Event Details ── */}
                <div className="pr-section">
                  <h3 className="pr-section-title">Event Details</h3>
                  <div className="pr-grid">

                    <Field label="Occasion Type *" error={errors.occasion}>
                      <select className={`pr-select${errors.occasion ? ' has-error' : ''}`}
                        value={form.occasion} onChange={(e) => onOccasionChange(e.target.value)}>
                        <option value="">Select occasion</option>
                        {OCCASION_OPTIONS.map((o) => (
                          <option key={o.value} value={o.value}>{o.emoji} {o.label}</option>
                        ))}
                      </select>
                    </Field>

                    <Field label="Event Date *" error={errors.eventDate}>
                      <input type="date" className={`pr-input${errors.eventDate ? ' has-error' : ''}`}
                        value={form.eventDate} min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => set('eventDate', e.target.value)} />
                    </Field>

                    <Field label="Shoot Duration *" error={errors.duration}>
                      <select className={`pr-select${errors.duration ? ' has-error' : ''}`}
                        value={form.duration} onChange={(e) => set('duration', e.target.value)}>
                        <option value="">Select duration</option>
                        {DURATION_OPTIONS.map((d) => <option key={d} value={d}>{d}</option>)}
                      </select>
                    </Field>

                    <Field label="Expected Guests *" error={errors.guests}>
                      <input type="number" className={`pr-input${errors.guests ? ' has-error' : ''}`}
                        placeholder="e.g. 150" min={1} value={form.guests}
                        onChange={(e) => set('guests', e.target.value)} />
                    </Field>

                  </div>
                </div>

                {/* ── Event Location ── */}
                <div className="pr-section">
                  <h3 className="pr-section-title">Event Location</h3>
                  <div className="pr-grid">

                    <Field label="Venue Name *" error={errors.venueName}>
                      <input type="text" className={`pr-input${errors.venueName ? ' has-error' : ''}`}
                        placeholder="e.g. Taj Falaknuma Palace" value={form.venueName}
                        onChange={(e) => set('venueName', e.target.value)} />
                    </Field>

                    <Field label="Google Maps Link">
                      <div className="pr-input-with-icon">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none"
                          stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        <input type="url" className="pr-input"
                          placeholder="Paste Google Maps URL" value={form.mapsLink}
                          onChange={(e) => set('mapsLink', e.target.value)} />
                      </div>
                    </Field>

                    <Field label="Full Address *" error={errors.venueAddress} full>
                      <textarea className={`pr-textarea${errors.venueAddress ? ' has-error' : ''}`}
                        placeholder="Street, area, pincode" rows={2} value={form.venueAddress}
                        onChange={(e) => set('venueAddress', e.target.value)} />
                    </Field>

                    <Field label="City *" error={errors.venueCity}>
                      <input type="text" className={`pr-input${errors.venueCity ? ' has-error' : ''}`}
                        placeholder="e.g. Hyderabad" value={form.venueCity}
                        onChange={(e) => set('venueCity', e.target.value)} />
                    </Field>

                    <Field label="State *" error={errors.venueState}>
                      <StateSelect value={form.venueState}
                        onChange={(v) => set('venueState', v)}
                        hasError={!!errors.venueState} />
                    </Field>

                  </div>
                </div>

                {/* ── Budget Range ── */}
                <div className="pr-section">
                  <h3 className="pr-section-title">Budget Range</h3>
                  <BudgetSlider minVal={form.budgetMin} maxVal={form.budgetMax}
                    onChange={(mn, mx) => setForm((f) => ({ ...f, budgetMin: mn, budgetMax: mx }))} />
                </div>

                {/* ── Special Requirements ── */}
                <div className="pr-section">
                  <h3 className="pr-section-title">Special Requirements</h3>
                  <textarea className="pr-textarea pr-textarea--tall"
                    placeholder="Ex: Candid + traditional shots needed. Prefer a female photographer."
                    value={form.specialReq} onChange={(e) => set('specialReq', e.target.value)} />
                </div>

                {/* ── 💒 Wedding Specific ── */}
                {form.occasion === 'Wedding' && (
                  <div className="pr-section pr-section--occasion">
                    <h3 className="pr-section-title">
                      <span className="pr-occasion-icon">💒</span> Wedding Details
                    </h3>
                    <div className="pr-grid">

                      <Field label="Type of Wedding *" error={errors.weddingType}>
                        <select className={`pr-select${errors.weddingType ? ' has-error' : ''}`}
                          value={form.weddingType} onChange={(e) => set('weddingType', e.target.value)}>
                          <option value="">Select type</option>
                          {WEDDING_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </Field>

                      <Field label="Number of Days">
                        <input type="number" className="pr-input" min={1} max={30}
                          placeholder="e.g. 3" value={form.weddingDays}
                          onChange={(e) => set('weddingDays', e.target.value)} />
                      </Field>

                      <Field label="Pre-Wedding Shoot?">
                        <YesNo name="preWedding" value={form.preWedding}
                          onChange={(v) => set('preWedding', v)} />
                      </Field>

                      <Field label="Albums Needed?">
                        <YesNo name="albums" value={form.albums}
                          onChange={(v) => set('albums', v)} />
                      </Field>

                      {form.albums === 'Yes' && (
                        <Field label="Number of Albums">
                          <input type="number" className="pr-input" min={1} max={10}
                            placeholder="e.g. 2" value={form.albumQty}
                            onChange={(e) => set('albumQty', e.target.value)} />
                        </Field>
                      )}

                      <Field label="Videography Required?">
                        <YesNo name="videography" value={form.videography}
                          onChange={(v) => set('videography', v)} />
                      </Field>

                      <Field label="Number of Events (select all that apply)" full>
                        <div className="pr-chip-group">
                          {WEDDING_EVENTS.map((ev) => (
                            <button key={ev} type="button"
                              className={`pr-chip${form.weddingEvents.includes(ev) ? ' is-active' : ''}`}
                              onClick={() => toggleWeddingEvent(ev)}>
                              {ev}
                            </button>
                          ))}
                        </div>
                      </Field>

                    </div>
                  </div>
                )}

                {/* ── 🎂 Birthday Specific ── */}
                {form.occasion === 'Birthday' && (
                  <div className="pr-section pr-section--occasion">
                    <h3 className="pr-section-title">
                      <span className="pr-occasion-icon">🎂</span> Birthday Details
                    </h3>
                    <div className="pr-grid">

                      <Field label="Age Group">
                        <select className="pr-select" value={form.ageGroup}
                          onChange={(e) => set('ageGroup', e.target.value)}>
                          <option value="">Select age group</option>
                          {AGE_GROUPS.map((g) => <option key={g} value={g}>{g}</option>)}
                        </select>
                      </Field>

                      <Field label="Theme">
                        <input type="text" className="pr-input"
                          placeholder="e.g. Superhero, Bollywood, Princess"
                          value={form.theme} onChange={(e) => set('theme', e.target.value)} />
                      </Field>

                      <Field label="Cake Cutting Time">
                        <input type="time" className="pr-input"
                          value={form.cakeTime} onChange={(e) => set('cakeTime', e.target.value)} />
                      </Field>

                      <Field label="Candid Moments Preferred?">
                        <YesNo name="candid" value={form.candid}
                          onChange={(v) => set('candid', v)} />
                      </Field>

                    </div>
                  </div>
                )}

                {/* ── 🎉 Other / Generic Occasion Specific ── */}
                {isOtherGroup && (
                  <div className="pr-section pr-section--occasion">
                    <h3 className="pr-section-title">
                      <span className="pr-occasion-icon">🎉</span> Event Details
                    </h3>
                    <div className="pr-grid">

                      {form.occasion === 'Other' && (
                        <Field label="Occasion Name *" error={errors.occasionName}>
                          <input type="text"
                            className={`pr-input${errors.occasionName ? ' has-error' : ''}`}
                            placeholder="Describe your occasion" value={form.occasionName}
                            onChange={(e) => set('occasionName', e.target.value)} />
                        </Field>
                      )}

                      <Field label="Formal or Casual?">
                        <select className="pr-select" value={form.eventFormality}
                          onChange={(e) => set('eventFormality', e.target.value)}>
                          <option value="">Select event style</option>
                          {FORMALITY_OPTS.map((f) => <option key={f} value={f}>{f}</option>)}
                        </select>
                      </Field>

                      <Field label="Any Specific Shots Required?" full>
                        <input type="text" className="pr-input"
                          placeholder="e.g. Group photos, product shots, stage moments"
                          value={form.specificShots}
                          onChange={(e) => set('specificShots', e.target.value)} />
                      </Field>

                    </div>
                  </div>
                )}

                {/* ── Submit row ── */}
                <div className="pr-form-footer">
                  <button type="submit" className="pr-submit-btn">
                    Submit Request
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor"
                      strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                  <button type="button" className="pr-cancel-link" onClick={cancelForm}>
                    Cancel
                  </button>
                </div>

              </form>
            )}
          </div>

          {/* ══ My Requests Accordion ═════════════════════════════════════════ */}
          <div className="user-profile__card">
            <div className="pr-card-hd pr-card-hd--flush">
              <h2 className="pr-card-title">My <span>Requests</span></h2>
              <span className="pr-total-badge">{requests.length}</span>
            </div>

            <div className="pr-accordion">
              {requests.map((req) => (
                <div key={req.id}
                  className={`pr-accordion__item${openItems[req.id] ? ' is-open' : ''}`}>

                  <button className="pr-accordion__head" onClick={() => toggleItem(req.id)}>
                    <div className="pr-accordion__left">
                      <span className="pr-acc-emoji">{req.emoji}</span>
                      <div>
                        <p className="pr-acc-occasion">{req.occasion}</p>
                        <p className="pr-acc-meta">
                          {fmtDate(req.eventDate)} &nbsp;·&nbsp; {req.venueName}
                        </p>
                      </div>
                    </div>
                    <div className="pr-accordion__right">
                      <span className={`pr-badge ${STATUS_CLS[req.status] || ''}`}>
                        {req.status}
                      </span>
                      <svg className="pr-chevron" viewBox="0 0 24 24" width="16" height="16"
                        fill="none" stroke="currentColor" strokeWidth="2.2"
                        strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </button>

                  {openItems[req.id] && (
                    <div className="pr-accordion__body">
                      <div className="pr-detail-grid">

                        <div className="pr-detail-cell">
                          <span className="pr-dl">Event Date</span>
                          <span className="pr-dv">{fmtDate(req.eventDate)}</span>
                        </div>
                        <div className="pr-detail-cell">
                          <span className="pr-dl">Duration</span>
                          <span className="pr-dv">{req.duration}</span>
                        </div>
                        <div className="pr-detail-cell">
                          <span className="pr-dl">Expected Guests</span>
                          <span className="pr-dv">{req.guests}</span>
                        </div>
                        <div className="pr-detail-cell">
                          <span className="pr-dl">Budget Range</span>
                          <span className="pr-dv">
                            ₹{req.budgetMin.toLocaleString('en-IN')} – ₹{req.budgetMax.toLocaleString('en-IN')}
                          </span>
                        </div>
                        <div className="pr-detail-cell pr-detail-cell--full">
                          <span className="pr-dl">Venue</span>
                          <span className="pr-dv">
                            {req.venueName}, {req.venueAddress}
                            {req.venueCity ? `, ${req.venueCity}` : ''}
                            {req.venueState ? `, ${req.venueState}` : ''}
                          </span>
                        </div>
                        {req.specialReq && (
                          <div className="pr-detail-cell pr-detail-cell--full">
                            <span className="pr-dl">Special Requirements</span>
                            <span className="pr-dv">{req.specialReq}</span>
                          </div>
                        )}

                        {/* Wedding details */}
                        {req.occasion === 'Wedding' && (<>
                          <div className="pr-detail-cell">
                            <span className="pr-dl">Wedding Type</span>
                            <span className="pr-dv">{req.weddingType}</span>
                          </div>
                          <div className="pr-detail-cell">
                            <span className="pr-dl">Number of Days</span>
                            <span className="pr-dv">{req.weddingDays ? `${req.weddingDays} day${req.weddingDays > 1 ? 's' : ''}` : '—'}</span>
                          </div>
                          <div className="pr-detail-cell">
                            <span className="pr-dl">Pre-Wedding Shoot</span>
                            <span className="pr-dv">{req.preWedding}</span>
                          </div>
                          <div className="pr-detail-cell">
                            <span className="pr-dl">Albums</span>
                            <span className="pr-dv">
                              {req.albums}{req.albumQty ? ` (qty: ${req.albumQty})` : ''}
                            </span>
                          </div>
                          <div className="pr-detail-cell">
                            <span className="pr-dl">Videography</span>
                            <span className="pr-dv">{req.videography}</span>
                          </div>
                          {req.weddingEvents?.length > 0 && (
                            <div className="pr-detail-cell pr-detail-cell--full">
                              <span className="pr-dl">Events</span>
                              <div className="pr-chip-group">
                                {req.weddingEvents.map((ev) => (
                                  <span key={ev} className="pr-chip pr-chip--readonly">{ev}</span>
                                ))}
                              </div>
                            </div>
                          )}
                        </>)}

                        {/* Birthday details */}
                        {req.occasion === 'Birthday' && (<>
                          <div className="pr-detail-cell">
                            <span className="pr-dl">Age Group</span>
                            <span className="pr-dv">{req.ageGroup}</span>
                          </div>
                          <div className="pr-detail-cell">
                            <span className="pr-dl">Theme</span>
                            <span className="pr-dv">{req.theme}</span>
                          </div>
                          <div className="pr-detail-cell">
                            <span className="pr-dl">Cake Cutting</span>
                            <span className="pr-dv">{req.cakeTime || '—'}</span>
                          </div>
                          <div className="pr-detail-cell">
                            <span className="pr-dl">Candid Preferred</span>
                            <span className="pr-dv">{req.candid}</span>
                          </div>
                        </>)}

                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Promo Banner ────────────────────────────────────────────────────── */}
      <div className="user-profile__promo-wrap">
        <div className="user-profile__promo">
          <div className="user-profile__promo-glow" />
          <div className="user-profile__promo-left">
            <div className="user-profile__promo-chips">
              <span>Photography</span>
              <span>Video Editor</span>
              <span>Videographer</span>
            </div>
            <h3 className="user-profile__promo-heading">Are you a Freelancer?</h3>
            <p className="user-profile__promo-text">
              Join with us and get leads from your locality
            </p>
          </div>
          <Link to="/list-business" className="user-profile__promo-btn">
            Join Now
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor"
              strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Postrequest;
