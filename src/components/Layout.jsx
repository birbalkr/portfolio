import { Outlet } from "react-router-dom";
import Sidebar from "./Navbar/Sidebar";
import Header from "./Navbar/Header";
import Footer from "./Footer/Footer";
// import Haderbar from "./Navbar/Haderbar";

function Layout() {
    return (
        <>
            <div className="flex h-screen border-amber-400">
                {/* <div className="w-64 border-r-2 hidden xs:flex border-red-400">
                    <Sidebar />
                </div> */}
                <div className="flex-1 overflow-auto">
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            </div>
        </>
    );
}
export default Layout;