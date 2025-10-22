import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routers/router'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme.style'
import './styles/global.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
     <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
