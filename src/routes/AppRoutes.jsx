import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '../app/layout/MainLayout'
import HomePage from '../features/portfolio/ui/pages/HomePage'
import AboutPage from '../features/portfolio/ui/pages/AboutPage'

function AppRoutes() {

    let router = createBrowserRouter([
        {
            path: "",
            element: <MainLayout />,

            children: [
                {
                    path: "",
                    element: <HomePage />,
                },
                {
                    path: "about",
                    element: <AboutPage />,
                },
                // {
                //     path: "projects",
                //     element: <About />,
                // },
                // {
                //     path: "contact",
                //     element: <About />,
                // },
            ]

        }
    ])


    return <RouterProvider router={router} />
}

export default AppRoutes
