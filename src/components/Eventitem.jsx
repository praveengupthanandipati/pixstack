import React from 'react'
import '../styles/Eventitem.scss'

const IconPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const IconCalendar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

const Eventitem = ({ banner, title, location, date, organizer }) => {
  return (
    <div className="event-item">
      <div className="event-item__img-wrap">
        <img src={banner} alt={title} className="event-item__img" />
      </div>
      <div className="event-item__body p-3">
        <h3 className="event-item__title">{title}</h3>
        <div className="event-item__meta">
          <span className="event-item__location">
            <IconPin />
            {location}
          </span>
          <span className="event-item__date">
            <IconCalendar />
            {date}
          </span>
        </div>
        <hr className="event-item__divider" />
        <p className="event-item__organizer">By {organizer}</p>
      </div>
    </div>
  )
}

export default Eventitem
