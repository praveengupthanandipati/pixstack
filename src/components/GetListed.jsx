import React from 'react'
import getListImg from '../assets/getlistimg.jpg'
import '../styles/GetListed.scss'

const GetListed = () => {
  return (
    <section className="get-listed">
      <div className="get-listed__image-col">
        <img src={getListImg} alt="List your business" className="get-listed__img" />
      </div>

      <div className="get-listed__content-col">
        <div className="get-listed__content">
          <p className="get-listed__label">List Your Business &amp; Get Leads</p>

          <h2 className="get-listed__heading">
            The awards that recognize the talent and effort of the best Photographers,
            Professional Studios, Printing Labs, Trainers and agencies in the India
          </h2>

          <p className="get-listed__desc">
            A meeting point, where digital design professionals from across the globe find
            inspiration, impart knowledge and experience, connect, and share constructive,
            respectful critiques. &ldquo;Always questioning&rdquo;, &ldquo;always evolving&rdquo;.
            Showcase your photos on your personal page. Get contacted directly by customers.
            Be a part of India&rsquo;s largest photographers directory.
          </p>

          <a href="/business-profile" className="get-listed__cta">
            Get Listed With Us
          </a>
        </div>
      </div>
    </section>
  )
}

export default GetListed
