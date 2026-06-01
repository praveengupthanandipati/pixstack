import React, { useState } from 'react'
import '../styles/Listitem.scss'

const IconHeart = ({ filled }) => (
  <svg viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.8">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
)

const IconPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const IconStar = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

const Listitem = ({ image, businessType, businessName, city, state, reviews, rating, onLike, onClick }) => {
  const [liked, setLiked] = useState(false)

  const handleLike = (e) => {
    e.stopPropagation()
    const newLiked = !liked
    setLiked(newLiked)
    if (onLike) onLike(newLiked)
  }

  return (
    <div className="list-item" onClick={onClick} role={onClick ? 'button' : undefined}>
      <div className="list-item__img-wrap">
        <img src={image} alt={businessName} className="list-item__img" />
        <span className="list-item__badge">{businessType}</span>
      </div>
      <div className="list-item__body">
        <div className="list-item__title-row">
          <h3 className="list-item__name">{businessName}</h3>
          <button
            className={`list-item__like${liked ? ' list-item__like--active' : ''}`}
            onClick={handleLike}
            aria-label="Add to wishlist"
          >
            <IconHeart filled={liked} />
          </button>
        </div>
        <p className="list-item__location">
          <IconPin />
          {city}, {state}
        </p>
        <hr className="list-item__divider" />
        <div className="list-item__footer">
          <span className="list-item__reviews">{reviews} Reviews</span>
          <span className="list-item__rating">
            <IconStar />
            {Number(rating).toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Listitem
