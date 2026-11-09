
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router'

function MainLayout() {
    return (
        <div className='bg-[#FAF8F3]'>
            <Navbar/>
            <Outlet/>
            <Footer />
        </div>
    )
}

export default MainLayout
