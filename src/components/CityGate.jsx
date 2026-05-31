import React, { useState, useEffect, useRef } from 'react'
import { POPULAR_CITIES, CITIES } from '../constants/cities'
import '../styles/CityGate.scss'

const CityGate = ({ onSelect }) => {
  const [query, setQuery]   = useState('')
  const [picked, setPicked] = useState('')
  const inputRef            = useRef(null)

  // lock body scroll while gate is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  // auto-focus search on mount
  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 120)
  }, [])

  const filtered = query.trim()
    ? CITIES.filter(c => c.toLowerCase().includes(query.trim().toLowerCase()))
    : CITIES

  const handlePick = (city) => {
    setPicked(city)
    setTimeout(() => onSelect(city), 260) // brief highlight then close
  }

  const handleConfirm = () => {
    if (picked) onSelect(picked)
  }

  return (
    <div className="city-gate" role="dialog" aria-modal="true" aria-label="Select your city">
      <div className="city-gate__backdrop" />

      <div className="city-gate__modal">

        {/* ── Header ──────────────────────────────────────────────────── */}
        <div className="city-gate__head">
          <div className="city-gate__icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
            </svg>
          </div>
          <h2 className="city-gate__title">Select Your City</h2>
          <p className="city-gate__subtitle">
            Choose your city to discover photographers, studios and services near you.
          </p>
        </div>

        {/* ── Search ──────────────────────────────────────────────────── */}
        <div className="city-gate__search">
          <svg className="city-gate__search-icon" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7.5" />
            <line x1="20.5" y1="20.5" x2="16.2" y2="16.2" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            className="city-gate__search-input"
            placeholder="Search city…"
            value={query}
            onChange={e => { setQuery(e.target.value); setPicked('') }}
            autoComplete="off"
          />
          {query && (
            <button className="city-gate__search-clear" onClick={() => { setQuery(''); inputRef.current?.focus() }} aria-label="Clear">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>

        {/* ── Body ────────────────────────────────────────────────────── */}
        <div className="city-gate__body">

          {/* Popular chips — hidden while searching */}
          {!query && (
            <div className="city-gate__section">
              <p className="city-gate__section-label">Popular Cities</p>
              <div className="city-gate__chips">
                {POPULAR_CITIES.map(city => (
                  <button
                    key={city}
                    className={`city-gate__chip${city === picked ? ' is-selected' : ''}`}
                    onClick={() => handlePick(city)}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* All / filtered cities */}
          <div className="city-gate__section">
            {!query && <p className="city-gate__section-label">All Cities</p>}
            {filtered.length > 0 ? (
              <div className="city-gate__grid">
                {filtered.map(city => (
                  <button
                    key={city}
                    className={`city-gate__city-btn${city === picked ? ' is-selected' : ''}`}
                    onClick={() => handlePick(city)}
                  >
                    {city === picked && (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="city-gate__check">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                      </svg>
                    )}
                    {city}
                  </button>
                ))}
              </div>
            ) : (
              <p className="city-gate__empty">No cities found for "<strong>{query}</strong>"</p>
            )}
          </div>
        </div>

        {/* ── Footer — confirm button ──────────────────────────────────── */}
        <div className="city-gate__footer">
          <button
            className={`city-gate__confirm${picked ? ' is-ready' : ''}`}
            onClick={handleConfirm}
            disabled={!picked}
          >
            {picked ? `Continue with ${picked}` : 'Select a city to continue'}
          </button>
        </div>

      </div>
    </div>
  )
}

export default CityGate
