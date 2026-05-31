import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import FreelancerItem from './FreelancerItem'
import '../styles/Homefreelancers.scss'

import img01 from '../assets/freelancers/freelancer01.jpg'
import img02 from '../assets/freelancers/freelancer02.jpg'
import img03 from '../assets/freelancers/freelancer03.jpg'
import img04 from '../assets/freelancers/freelancer04.jpg'
import img05 from '../assets/freelancers/freelancer05.jpg'
import img06 from '../assets/freelancers/freelancer06.jpg'
import img07 from '../assets/freelancers/freelancer07.jpg'
import img08 from '../assets/freelancers/freelancer08.jpg'
import img09 from '../assets/freelancers/freelancer09.jpg'
import img10 from '../assets/freelancers/freelancer10.jpg'
import img11 from '../assets/freelancers/freelancer11.jpg'
import img12 from '../assets/freelancers/freelancer12.jpg'
import img13 from '../assets/freelancers/freelancer13.jpg'

const FREELANCERS = [
  { id: 1,  image: img01, name: 'Raghu Rai',           city: 'New Delhi',  specialization: 'Photographer' },
  { id: 2,  image: img02, name: 'Dabboo Ratnani',      city: 'Mumbai',     specialization: 'Fashion Photographer' },
  { id: 3,  image: img03, name: 'Atul Kasbekar',       city: 'Mumbai',     specialization: 'Fashion Photographer' },
  { id: 4,  image: img04, name: 'Dayanita Singh',      city: 'New Delhi',  specialization: 'Photographer' },
  { id: 5,  image: img05, name: 'Sooni Taraporevala',  city: 'Mumbai',     specialization: 'Cinematic Photographer' },
  { id: 6,  image: img06, name: 'Rathika Ramasamy',    city: 'Chennai',    specialization: 'Bird Photographer' },
  { id: 7,  image: img07, name: 'Prabuddha Dasgupta',  city: 'Kolkata',    specialization: 'Fashion Photographer' },
  { id: 8,  image: img08, name: 'Rohit Chawla',        city: 'New Delhi',  specialization: 'Product Photographer' },
  { id: 9,  image: img09, name: 'Anay Mann',           city: 'Hyderabad',  specialization: 'Cinematic Photographer' },
  { id: 10, image: img10, name: 'Ketaki Sheth',        city: 'Mumbai',     specialization: 'Photographer' },
  { id: 11, image: img11, name: 'Prashant Panjiar',    city: 'New Delhi',  specialization: 'Product Photographer' },
  { id: 12, image: img12, name: 'Ishan Tankha',        city: 'New Delhi',  specialization: 'Bird Photographer' },
  { id: 13, image: img13, name: 'Swapan Parekh',       city: 'Kolkata',    specialization: 'Cinematic Photographer' },
]

const Homefreelancers = () => {
  return (
    <section className="home-freelancers">
      <div className="home-freelancers__header">
        <h2 className="home-freelancers__title">
          <strong>Top</strong> Freelancers
        </h2>
        <button className="home-freelancers__view-all">
          VIEW ALL &nbsp;→
        </button>
      </div>

      <Swiper
        modules={[Navigation, A11y]}
        navigation
        slidesPerView={6}
        spaceBetween={6}
        breakpoints={{
          0:   { slidesPerView: 2, spaceBetween: 8 },
          480: { slidesPerView: 3, spaceBetween: 8 },
          768: { slidesPerView: 4, spaceBetween: 6 },
          992: { slidesPerView: 5, spaceBetween: 6 },
          1200:{ slidesPerView: 6, spaceBetween: 6 },
        }}
        className="home-freelancers__swiper"
      >
        {FREELANCERS.map((f) => (
          <SwiperSlide key={f.id}>
            <FreelancerItem image={f.image} name={f.name} city={f.city} specialization={f.specialization} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Homefreelancers
