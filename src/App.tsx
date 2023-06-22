import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { IndexPage } from '@/pages/index'
import './App.css'
import { AppIndexPage } from './pages/app'

const route = createBrowserRouter([
  { path: '/', element: <IndexPage /> },
  { path: '/app', element: <AppIndexPage /> },
])

function App() {
  return <RouterProvider router={route} />
}

export default App
