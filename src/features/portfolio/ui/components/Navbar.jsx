import { NavLink } from "react-router";

export default function Navbar() {
    return (
        <div className="flex justify-center px-6 pt-8">
            <nav className="flex w-full max-w-6xl items-center justify-between rounded-full border border-[#1C6B60] bg-transparent px-8 py-4">
                <span className="text-base font-bold text-[#EAF2F0]"><NavLink to={'/'}>Birbal Kumar</NavLink></span>

                <div className="hidden items-center gap-8 md:flex">
                    <NavLink
                        to='/about'
                        className={({ isActive }) =>
                            isActive ? "text-green-500 font-semibold" : "text-gray-300 hover:text-blue-500 transition"
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to='/projects'
                        className={({ isActive }) =>
                            isActive ? "text-green-500 font-semibold" : "text-gray-300 hover:text-blue-500 transition"
                        }
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to='/contact'
                        className={({ isActive }) =>
                            isActive ? "text-green-500 font-semibold" : "text-gray-300 hover:text-blue-500 transition"
                        }
                    >
                        Contact
                    </NavLink>
                </div>

                <a
                    href="#resume"
                    className="rounded-full bg-[#F4A93B] px-5 py-2 text-sm font-semibold text-[#0E4F4A] hover:bg-[#f5b658]"
                >
                    Resume
                </a>
            </nav>
        </div>

    );
}