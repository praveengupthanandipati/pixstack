import React from 'react'
import '../styles/Homepartners.scss'

import partner01 from '../assets/testing-partners/partner01.jpg'
import partner02 from '../assets/testing-partners/partner02.jpg'
import partner03 from '../assets/testing-partners/partner03.jpg'
import partner04 from '../assets/testing-partners/partner04.jpg'
import partner05 from '../assets/testing-partners/partner05.jpg'
import partner06 from '../assets/testing-partners/partner06.jpg'
import partner07 from '../assets/testing-partners/partner07.jpg'

const PARTNERS = [
  { id: 1, image: partner01, name: 'Samantha Black Photography' },
  { id: 2, image: partner02, name: 'RB Photography' },
  { id: 3, image: partner03, name: 'Photography Studio' },
  { id: 4, image: partner04, name: 'Abhishek Photography' },
  { id: 5, image: partner05, name: 'Awan Photography' },
  { id: 6, image: partner06, name: 'Star Photography' },
  { id: 7, image: partner07, name: 'Samantha Black Photography' },
]

const Homepartners = () => {
  return (
    <section className="home-partners">
      <div className="home-partners__header">
        <h2 className="home-partners__title">
          <strong>Our Listing</strong> Partners
        </h2>
        <button className="home-partners__view-all">
          VIEW ALL &nbsp;→
        </button>
      </div>

      <div className="home-partners__grid">
        {PARTNERS.map((partner) => (
          <div key={partner.id} className="home-partners__item">
            <img
              src={partner.image}
              alt={partner.name}
              className="home-partners__logo"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Homepartners
