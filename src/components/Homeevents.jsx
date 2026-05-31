import React from 'react'
import { Link } from 'react-router-dom'
import Eventitem from './Eventitem'
import '../styles/Homeevents.scss'

import event01 from '../assets/test-events/event01.jpg'
import event02 from '../assets/test-events/event02.jpg'
import event03 from '../assets/test-events/event03.jpg'
import event04 from '../assets/test-events/event04.jpg'
import event05 from '../assets/test-events/event05.jpg'

const EVENTS = [
  {
    id: 1,
    banner:    event01,
    title:     'How to Capture Stunning Landscape',
    location:  'Hyderabad, Telangana',
    date:      '27 Mar, 2022',
    organizer: 'Awwwards',
  },
  {
    id: 2,
    banner:    event02,
    title:     'Repetition | Winners and Honourable',
    location:  'Hyderabad, Telangana',
    date:      '27 Mar, 2022',
    organizer: 'Awwwards',
  },
  {
    id: 3,
    banner:    event03,
    title:     'Better Photography in India',
    location:  'Hyderabad, Telangana',
    date:      '27 Mar, 2022',
    organizer: 'Awwwards',
  },
  {
    id: 4,
    banner:    event04,
    title:     'How to Capture Stunning Landscape',
    location:  'Hyderabad, Telangana',
    date:      '27 Mar, 2022',
    organizer: 'Awwwards',
  },
]

const Homeevents = () => {
  return (
    <section className="home-events">
      <div className="home-events__header">
        <h2 className="home-events__title">
          <strong>Upcoming</strong> Events
        </h2>
        <Link to="/events" className="home-events__view-all">
          View all Upcoming Events &nbsp;→
        </Link>
      </div>

      <div className="home-events__grid">
        {EVENTS.map((event) => (
          <Eventitem
            key={event.id}
            banner={event.banner}
            title={event.title}
            location={event.location}
            date={event.date}
            organizer={event.organizer}
          />
        ))}
      </div>
    </section>
  )
}

export default Homeevents
