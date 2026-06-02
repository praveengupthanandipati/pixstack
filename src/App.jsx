import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './styles/App.scss'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import CityGate from './components/CityGate.jsx'
import Home from './pages/Home.jsx'
import Listbusinesses from './pages/Listbusinesses.jsx'
import Login from './pages/Login.jsx'
import Businesslogin from './pages/Business/Businesslogin.jsx'
import Businesssignup from './pages/Business/Businesssignup.jsx'
import Businessdetail from './pages/Businessdetail.jsx'
import About from './pages/About.jsx'
import Faqs from './pages/Faqs.jsx'
import Cookiespolicy from './pages/Cookiespolicy.jsx'
import Legalterms from './pages/Legalterms.jsx'
import Privacypolicy from './pages/Privacypolicy.jsx'
import Contact from './pages/Contact.jsx'
import Blogs from './pages/Blogs.jsx'

//user profile pages
import Userprofile from './pages/Userprofile/Profile.jsx'
import Postrequest from './pages/Userprofile/Postrequest.jsx'
import Favouriteprofiles from './pages/Userprofile/Favouriteprofiles.jsx'

const STORAGE_KEY = 'pixstack_city'
const NO_LAYOUT_PATHS = ['/login', '/business-login', '/business-signup']

const AppShell = ({ gateCity }) => {
  const { pathname } = useLocation()
  const hideLayout = NO_LAYOUT_PATHS.includes(pathname)

  return (
    <>
      {!hideLayout && <Header gateCity={gateCity} />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/businesses' element={<Listbusinesses />} />
        <Route path='/login' element={<Login />} />
        <Route path='/business-login' element={<Businesslogin />} />
        <Route path='/business-signup' element={<Businesssignup />} />
        <Route path='/business/:id' element={<Businessdetail />} />
        <Route path='/about' element={<About />} />
        <Route path='/faqs' element={<Faqs />} />
        <Route path='/cookies-policy' element={<Cookiespolicy />} />
        <Route path='/legal-terms' element={<Legalterms />} />
        <Route path='/privacy' element={<Privacypolicy />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/profile' element={<Userprofile />} />
        <Route path='/post-request' element={<Postrequest />} />
        <Route path='/favourite-profiles' element={<Favouriteprofiles />} />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  )
}

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
        <AppShell gateCity={gateCity} />
      </Router>
    </>
  )
}

export default App
