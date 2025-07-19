import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Roblox from './views/Roblox.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Roblox />
  </StrictMode>
)
