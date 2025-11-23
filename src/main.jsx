import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import {  About, Contact, Home, Layout, Project } from './components'
import ProjectDeltais from './components/Project/ProjectDeltais'
import MainPage from './components/MainPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Contains Navbar, Footer, and nested pages
    children: [
      { path: '/', element: <MainPage /> },
      { path: '/about', element: <About /> },
      { path: '/project', element: <Project /> },
      { path: '/contact', element: <Contact /> },
      { path: '/projectdetails', element: <ProjectDeltais /> },
    ]
  }
])

// function AppWithLoader() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading time of 5 seconds
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 5000);

//     return () => clearTimeout(timer);
//   }, []);

//   return loading ? <Loader /> : <RouterProvider router={router} />;
// }


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* chenge to <AppWithLoader /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
