import React from 'react'
import '../styles/FreelancerItem.scss'

const FreelancerItem = ({ image, name, city, specialization }) => {
  return (
    <div className="freelancer-item">
      <div className="freelancer-item__img-wrap">
        <img src={image} alt={name} className="freelancer-item__img" />
        {specialization && (
          <span className="freelancer-item__badge">{specialization}</span>
        )}
      </div>
      <div className="freelancer-item__info">
        <h4 className="freelancer-item__name">{name}</h4>
        <p className="freelancer-item__city">{city}</p>
      </div>
    </div>
  )
}

export default FreelancerItem
