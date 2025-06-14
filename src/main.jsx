import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { About, Project, Layout } from './components';
import './index.css'
import MainPage from './components/MainPage/MainPage';
import { App } from './App';
import Contact from './components/Contact/Contact';
// import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage /> // Only the image and button
  },
  {
    path: '/',
    element: <Layout />, // Contains Navbar, Footer, and nested pages
    children: [
      { path: '/about', element: <About /> },
      { path: '/project', element: <Project /> },
      { path: '/contact', element: <Contact /> },

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
