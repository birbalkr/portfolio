import { NavLink } from "react-router"

function Navbar() {
    return (
        <div className="flex justify-around items-center p-4 text-md">
            <div className="text-xl font-bold">Birbal</div>
            <div className="flex gap-4 border rounded-2xl p-3">
                <NavLink className={({ isActive }) =>
                    `rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${isActive
                        ? "bg-[#CDF22B] text-[#08090B]"
                        : "text-[#08090B] hover:bg-gray-200"
                    }`
                }
                to="/"
                end
                >Home</NavLink>
                <NavLink className={({ isActive }) =>
                    `rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${isActive
                        ? "bg-[#CDF22B] text-[#08090B]"
                        : "text-[#08090B] hover:bg-gray-200"
                    }`
                } to="/about">About</NavLink>
                <NavLink className={({ isActive }) =>
                    `rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${isActive
                        ? "bg-[#CDF22B] text-[#08090B]"
                        : "text-[#08090B] hover:bg-gray-200"
                    }`
                } to="/skill">Toolkit</NavLink>
                <NavLink className={({ isActive }) =>
                    `rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${isActive
                        ? "bg-[#CDF22B] text-[#08090B]"
                        : "text-[#08090B] hover:bg-gray-200"
                    }`
                } to="/project">Projects</NavLink>
                <NavLink className={({ isActive }) =>
                    `rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${isActive
                        ? "bg-[#CDF22B] text-[#08090B]"
                        : "text-[#08090B] hover:bg-gray-200"
                    }`
                } to="/contact">Contact</NavLink>
            </div>
            <div>
                <button className="rounded-full bg-[#08090B] px-6 py-3 text-sm font-semibold text-[#FAF8F3] transition hover:bg-[#CDF22B] hover:text-[#08090B]">Let's talk</button>
            </div>
        </div>
    )
}

export default Navbar
