import { Outlet } from "react-router";
import Navbar  from "../components/Navbar";

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
      <Outlet />
    </section>
  );
}

export default MainLayout;
