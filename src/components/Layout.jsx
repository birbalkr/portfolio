import { Outlet } from "react-router-dom";
import Header from "./Navbar/Header";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";


function Layout() {
    return (

        <div className="">
            <Header />
            <Home/>
            {/* <Outlet /> */}
            {/* <Footer /> */}
        </div>

    );
}
export default Layout;