import { Outlet } from "react-router-dom";
import Header from "./Navbar/Header";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import About from "./About/About";


function Layout() {
    return (

        <div className="">
            <Header />
            <Home/>
            <About/>
            {/* <Outlet /> */}
            {/* <Footer /> */}
        </div>

    );
}
export default Layout;