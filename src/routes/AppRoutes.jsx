import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '../app/layout/MainLayout'
import About from '../features/portfolio/ui/pages/About'
import HomePage from '../features/portfolio/ui/pages/HomePage'

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
                    element: <About />,
                },
                {
                    path: "projects",
                    element: <About />,
                },
                {
                    path: "contact",
                    element: <About />,
                },
            ]

        }
    ])


    return <RouterProvider router={router} />
}

export default AppRoutes
