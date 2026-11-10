
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router'

function MainLayout() {
    return (
        <div className='bg-background min-h-screen'>
            <div className='min-w-full fixed z-20'> <Navbar /></div>
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout
