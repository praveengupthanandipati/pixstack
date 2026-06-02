import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Leftnav from './Leftnav';
import '../../styles/Userprofile.scss';

const INITIAL_PROFILE = {
  fullName: 'Praveen Nandipati',
  dob: '1995-06-15',
  phone: '98765 43210',
  email: 'praveennandipati@gmail.com',
  address: '3rd Floor, Sunshine Apartments, Banjara Hills',
  city: 'Hyderabad',
  state: 'Telangana',
};

const FIELDS = [
  { key: 'fullName', label: 'Full Name',      type: 'text',  full: false },
  { key: 'dob',      label: 'Date of Birth',  type: 'date',  full: false },
  { key: 'phone',    label: 'Phone Number',   type: 'tel',   full: false },
  { key: 'email',    label: 'Email Address',  type: 'email', full: false },
  { key: 'address',  label: 'Full Address',   type: 'text',  full: true  },
  { key: 'city',     label: 'City',           type: 'text',  full: false },
  { key: 'state',    label: 'State',          type: 'text',  full: false },
];

const formatDate = (val) => {
  if (!val) return '—';
  const d = new Date(val + 'T00:00:00');
  return isNaN(d.getTime()) ? val : d.toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' });
};

const getInitials = (name) => {
  const words = (name || '').trim().split(/\s+/);
  return words.length >= 2
    ? (words[0][0] + words[1][0]).toUpperCase()
    : (name || 'U').slice(0, 2).toUpperCase();
};

const Profile = () => {
  const [profile, setProfile] = useState(INITIAL_PROFILE);
  const [draft, setDraft]     = useState(INITIAL_PROFILE);
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors]   = useState({});

  const handleEdit = () => {
    setDraft({ ...profile });
    setErrors({});
    setIsEditing(true);
  };

  const handleCancel = () => {
    setDraft({ ...profile });
    setErrors({});
    setIsEditing(false);
  };

  const handleChange = (field, val) => {
    setDraft((d) => ({ ...d, [field]: val }));
    setErrors((e) => ({ ...e, [field]: '' }));
  };

  const handleSave = () => {
    const errs = {};
    if (!draft.fullName.trim()) errs.fullName = 'Full name is required';
    if (!draft.dob) errs.dob = 'Date of birth is required';
    if (!/^[6-9]\d{9}$/.test(draft.phone.replace(/[\s-]/g, '')))
      errs.phone = 'Enter a valid 10-digit mobile number';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(draft.email))
      errs.email = 'Enter a valid email address';
    if (!draft.address.trim()) errs.address = 'Address is required';
    if (!draft.city.trim()) errs.city = 'City is required';
    if (!draft.state.trim()) errs.state = 'State is required';

    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setProfile({ ...draft });
    setIsEditing(false);
  };

  return (
    <div className="user-profile">
      <div className="user-profile__wrapper">

        {/* ── Sidebar ── */}
        <div className="user-profile__sidebar">
          <Leftnav />
        </div>

        {/* ── Main content ── */}
        <div className="user-profile__main">
          <div className="user-profile__card">

            {/* Banner */}
            <div className="user-profile__banner">
              <div className="user-profile__avatar">
                <span>{getInitials(profile.fullName)}</span>
              </div>
              <div className="user-profile__banner-info">
                <h1 className="user-profile__display-name">{profile.fullName}</h1>
                <p className="user-profile__display-sub">{profile.email}</p>
              </div>
            </div>

            {/* Card body */}
            <div className="user-profile__card-body">

              {/* Header row */}
              <div className="user-profile__card-header">
                <h2 className="user-profile__card-title">Profile <span>Details</span></h2>
                {!isEditing && (
                  <button className="user-profile__edit-btn" onClick={handleEdit}>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor"
                      strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                    Edit Profile
                  </button>
                )}
              </div>

              {/* Fields */}
              <div className="user-profile__fields">
                {FIELDS.map(({ key, label, type, full }) => (
                  <div
                    key={key}
                    className={`user-profile__field${full ? ' user-profile__field--full' : ''}`}
                  >
                    <label className="user-profile__label">{label}</label>

                    {isEditing ? (
                      <>
                        <input
                          type={type}
                          className={`user-profile__input${errors[key] ? ' has-error' : ''}`}
                          value={draft[key]}
                          onChange={(e) => handleChange(key, e.target.value)}
                        />
                        {errors[key] && (
                          <p className="user-profile__error">{errors[key]}</p>
                        )}
                      </>
                    ) : (
                      <p className="user-profile__value">
                        {key === 'dob' ? formatDate(profile[key]) : (profile[key] || '—')}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Save / Cancel */}
              {isEditing && (
                <div className="user-profile__actions">
                  <button className="user-profile__save-btn" onClick={handleSave}>
                    Save Changes
                  </button>
                  <button className="user-profile__cancel-btn" onClick={handleCancel}>
                    Cancel
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>

      </div>

      {/* ── Freelancer Promo Banner ── */}
      <div className="user-profile__promo-wrap">
        <div className="user-profile__promo">
          <div className="user-profile__promo-glow" />
          <div className="user-profile__promo-left">
            <div className="user-profile__promo-chips">
              <span>Photography</span>
              <span>Video Editor</span>
              <span>Videographer</span>
            </div>
            <h3 className="user-profile__promo-heading">
              Are you a Freelancer?
            </h3>
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

export default Profile;
