import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RotaProvider>
      <App/>
  </RotaProvider>
  </StrictMode>,
)

import { RotaProvider } from "./contexts/RotaContext.jsx";