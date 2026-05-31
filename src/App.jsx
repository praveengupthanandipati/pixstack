import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './styles/App.scss'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import CityGate from './components/CityGate.jsx'
import Home from './pages/Home.jsx'

const STORAGE_KEY = 'pixstack_city'

function App() {
  const [gateCity, setGateCity] = useState(
    () => localStorage.getItem(STORAGE_KEY) || ''
  )

  const handleCitySelect = (city) => {
    localStorage.setItem(STORAGE_KEY, city)
    setGateCity(city)
  }

  return (
    <>
      {!gateCity && <CityGate onSelect={handleCitySelect} />}
      <Router>
        <Header gateCity={gateCity} />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
