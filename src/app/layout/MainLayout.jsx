import React from 'react'
import Navbar from '../../features/portfolio/ui/components/Navbar'
import HomePage from '../../features/portfolio/ui/pages/HomePage'
import DemoCode from '../../features/portfolio/ui/pages/DemoCode'
import Ferrofluid from '../../features/portfolio/ui/pages/DemoCode'
import { Outlet } from 'react-router'

function MainLayout() {
    return (
        <section
            className="relative min-h-screen bg-[#0A1613]"
            style={{
                backgroundImage:
                    "radial-gradient(rgba(29,158,117,0.18) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
            }}
        >
            <Navbar />
            <Outlet/>
            

        </section>

    )
}

export default MainLayout
