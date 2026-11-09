
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '../components/home/MainLayout';
import About from '../pages/About';
import Skill from '../pages/Skill';
import Contact from '../pages/Contact';
import Project from '../pages/Project';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'skill',
                element: <Skill />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'project',
                element: <Project />
            },
        ]
    }

]);

function Approutes() {
    return <RouterProvider router={router} />
}

export default Approutes
