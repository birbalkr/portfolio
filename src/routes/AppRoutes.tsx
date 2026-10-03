import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '../layout/MainLayout'
import HomePage from '../pages/HomePage'
import ProjectPage from '../pages/ProjectPage'

function AppRoutes() {

    const router = createBrowserRouter([
        {
            path: "",
            element: <MainLayout />,

            children: [
                {
                    path: '*',
                    element: <div className="text-white text-3xl text-center relative">404 Not Found</div>,
                },
                {
                    path: "",
                    element: <HomePage />,
                },
                {
                    path: "about",
                    element: <div className="text-white text-3xl text-center relative">About Page</div>
                },
                {
                    path: "projects",
                    element: <ProjectPage />
                },
                {
                    path: "contact",
                    element: <div className="text-white text-3xl text-center relative">Contact Page</div>
                },
            ]

        }
    ])


    return <RouterProvider router={router} />
}

export default AppRoutes
