import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Allcategories.scss';

const CATEGORIES_LIST = [
  {
    id: 'professional-photographers',
    title: 'Professional Photographers',
    desc: 'Professional shoot specialists for weddings, events, portfolios, and commercial video projects.',
    path: '/photographers',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="13" height="12" rx="2" />
        <circle cx="8.5" cy="12" r="3" />
        <polygon points="15 9 22 5 22 19 15 15" />
      </svg>
    )
  },
  {
    id: 'photo-studios',
    title: 'Photo Studios & Creative Spaces',
    desc: 'Fully equipped studio spaces and creative sets featuring backdrops, strobe lights, and premium amenities.',
    path: '/photo-studios',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v15M12 17l-4 5M12 17l4 5" />
        <rect x="9" y="2" width="6" height="6" rx="1" transform="rotate(45 12 5)" />
        <circle cx="12" cy="5" r="1.2" fill="currentColor" />
      </svg>
    )
  },
  {
    id: 'photo-labs',
    title: 'Pro Photo Labs (Printing & Post-Production)',
    desc: 'High-quality printing, custom wedding albums, framing services, and professional restoration.',
    path: '/photo-labs',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9V2h12v7" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <rect x="6" y="14" width="12" height="8" rx="1" />
        <line x1="9" y1="17" x2="15" y2="17" />
        <line x1="9" y1="20" x2="13" y2="20" />
      </svg>
    )
  },
  {
    id: 'album-photo-book-artisans',
    title: 'Album & Photo Book Artisans',
    desc: 'Handcrafted wedding albums, premium photo books, and bespoke bindery work from skilled artisans.',
    path: '/album-artisans',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <rect x="9" y="6" width="7" height="5" rx="1" />
        <circle cx="11.5" cy="8.5" r="0.8" />
        <path d="M10 10.5l1.5-1.5 2 1.5" />
      </svg>
    )
  },
  {
    id: 'camera-gear-stores',
    title: 'Camera & Gear Stores (New/Used/Rental)',
    desc: 'Authorized dealers and rental partners for cameras, lenses, lighting, and studio gear — new, used, or on-demand.',
    path: '/camera-gear',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
        <path d="M17 2h4v4" />
        <line x1="21" y1="2" x2="16.5" y2="6.5" />
      </svg>
    )
  },
  {
    id: 'training-institutes',
    title: 'Photography Academies & Training Institutes',
    desc: 'Professional photography courses, videography classes, and expert-led training programs for every skill level.',
    path: '/training',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
        <line x1="12" y1="14" x2="12" y2="19" />
      </svg>
    )
  },
  {
    id: 'retouching-services',
    title: 'Post-Production & Retouching Services',
    desc: 'Expert photo and video retouching, color grading, and post-production editing services for every project.',
    path: '/retouching',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="6" x2="20" y2="6" />
        <circle cx="9" cy="6" r="2" fill="currentColor" stroke="none" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <circle cx="16" cy="12" r="2" fill="currentColor" stroke="none" />
        <line x1="4" y1="18" x2="20" y2="18" />
        <circle cx="11" cy="18" r="2" fill="currentColor" stroke="none" />
      </svg>
    )
  },
  {
    id: 'prop-set-costume-rentals',
    title: 'Prop, Set & Costume Rentals',
    desc: 'Curated props, themed sets, and costume rentals to bring any concept shoot or production to life.',
    path: '/prop-rentals',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5a2 2 0 1 0-2 2" />
        <path d="M12 7l9 6-2 2-7-4-7 4-2-2z" />
        <path d="M5 15l-2 6h18l-2-6" />
      </svg>
    )
  },
  {
    id: 'software-presets-digital-tools',
    title: 'Software, Presets & Digital Tools',
    desc: 'Editing software, Lightroom presets, LUTs, and digital tools built for photographers and creators.',
    path: '/digital-tools',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="13" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <path d="M7 9l2.5 2.5L7 14" />
        <line x1="12" y1="14" x2="16" y2="14" />
      </svg>
    )
  },
  {
    id: 'event-planners-talent-agencies',
    title: 'Event Planners & Talent Agencies (B2B Partners)',
    desc: 'Corporate event planners and talent agencies connecting brands with photographers, models, and crews.',
    path: '/event-planners',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <path d="M8 14l2.5 2.5L16 11" />
      </svg>
    )
  }
];

const Allcategories = () => {
  return (
    <section className="all-categories-section">
      <div className="all-categories-section__container">
        {/* Categories Static Grid */}
        <div className="all-categories-section__grid">
          {CATEGORIES_LIST.map((cat) => (
            <Link
              key={cat.id}
              to={cat.path}
              className="category-card"
              aria-label={`Browse ${cat.title}`}
            >
              <div className="category-card__icon-box">
                {cat.icon}
              </div>
              <h3 className="category-card__title">{cat.title}</h3>
              <p className="category-card__desc">{cat.desc}</p>

              <div className="category-card__footer">
                <span className="category-card__action">Explore</span>
                <span className="category-card__arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Allcategories;