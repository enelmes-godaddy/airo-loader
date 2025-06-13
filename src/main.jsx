import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AiroLoader from './AiroLoader.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AiroLoader />
  </StrictMode>,
)
