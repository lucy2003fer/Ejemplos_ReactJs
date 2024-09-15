import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ListadoApp } from './ListadoApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ListadoApp />
  </StrictMode>,
)
