import React from 'react'
import ReactDOM from 'react-dom/client'
import { MotionConfig } from 'framer-motion'
// Primary type — Archivo for both headings and body (variable, all weights)
import '@fontsource-variable/archivo/index.css'
// Brand wordmark
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
// Monospace (techy preloader / code accents)
import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/500.css'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MotionConfig reducedMotion="user">
      <App />
    </MotionConfig>
  </React.StrictMode>,
)
