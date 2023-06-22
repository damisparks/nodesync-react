import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { IndexPage } from '@/pages/index'
import './App.css'
import { AppIndexPage } from './pages/app'
import { StyledEngineProvider } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@/theme'
const theme = createTheme()

const route = createBrowserRouter([
  { path: '/', element: <IndexPage /> },
  { path: '/app', element: <AppIndexPage /> },
])

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <RouterProvider router={route} />
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
