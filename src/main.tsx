import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvide from './usecontext/ThemeProvide.tsx'

createRoot(document.getElementById('root')!).render(

  <StrictMode>

    <BrowserRouter>
      <ThemeProvide>
        <App />
      </ThemeProvide>
    </BrowserRouter>
  </StrictMode>

)
