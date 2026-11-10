
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router'

function MainLayout() {
    return (
        <div className='bg-background h-screen'>
            <Navbar/>
            <Outlet/>
            <Footer />
        </div>
    )
}

export default MainLayout
