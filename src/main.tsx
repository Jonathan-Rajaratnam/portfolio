import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { applySafariTransitionFix } from './lib/safariTransitionFix'

// Apply Safari transition fix before rendering
applySafariTransitionFix()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
