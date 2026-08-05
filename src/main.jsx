
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './app/layout/MainLayout.jsx'
import { BrowserRouter } from 'react-router'
import AppRoutes from './routes/AppRoutes.jsx'

createRoot(document.getElementById('root')).render(
  <AppRoutes />
)
