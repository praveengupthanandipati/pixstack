import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Fade out the loader after React's first committed paint
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    const loader = document.getElementById('page-loader')
    if (!loader) return
    loader.classList.add('fade-out')
    loader.addEventListener('transitionend', () => loader.remove(), { once: true })
  })
})
