import { useState } from "react"
import { NavLink } from "react-router"
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="flex justify-around items-center py-4 text-md rounded-2xl mx-40 drop-shadow-2xl border border-gray-200">
            <div className="text-xl font-bold flex items-end-safe">Birbal <div className="h-3 w-3 rounded-2xl bg-accent"></div> </div>
            <div className="hidden  gap-4 p-3 md:flex">
                <NavLink className={({ isActive }) =>
                    `rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${isActive
                        ? "bg-accent text-textcolor"
                        : "text-textcolor hover:bg-gray-200"
                    }`
                }
                    to="/"
                    end
                >Home</NavLink>
                <NavLink className={({ isActive }) =>
                    `rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${isActive
                        ? "bg-accent text-textcolor"
                        : "text-textcolor hover:bg-gray-200"
                    }`
                } to="/about">About</NavLink>
                <NavLink className={({ isActive }) =>
                    `rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${isActive
                        ? "bg-accent text-textcolor"
                        : "text-textcolor hover:bg-gray-200"
                    }`
                } to="/skill">Toolkit</NavLink>
                <NavLink className={({ isActive }) =>
                    `rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${isActive
                        ? "bg-accent text-textcolor"
                        : "text-textcolor hover:bg-gray-200"
                    }`
                } to="/project">Projects</NavLink>
                <NavLink className={({ isActive }) =>
                    `rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${isActive
                        ? "bg-accent text-textcolor"
                        : "text-textcolor] hover:bg-gray-200"
                    }`
                } to="/contact">Contact</NavLink>
            </div>
            <div className="hidden md:block">
                <button className="rounded-full bg-textcolor px-6 py-3 text-sm font-semibold text-background transition hover:bg-accent hover:text-textcolor">Let's talk</button>
            </div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-lg p-2 text-white md:hidden"
                aria-label="Toggle menu"
            >
                {isOpen ? (
                    <AiOutlineCloseCircle size={28} className="text-accent" />
                ) : (
                    <AiOutlineMenu size={28} className="text-accent" />
                )}
            </button>

            {/* mobile view */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-textcolor px-6 pt-6 pb-0 backdrop-blur-lg md:hidden text-">
                    <div className="flex flex-col gap-4">
                        <NavLink className={({ isActive }) =>
                            `rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${isActive
                                ? "bg-accent text-textcolor"
                                : "text-background hover:text-textcolor hover:bg-accent"
                            }`
                        }
                            to="/"
                            end
                        >Home</NavLink>
                        <NavLink className={({ isActive }) =>
                            `rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${isActive
                                ? "bg-accent text-textcolor"
                                : "text-background hover:text-textcolor hover:bg-accent"
                            }`
                        } to="/about">About</NavLink>
                        <NavLink className={({ isActive }) =>
                            `rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${isActive
                                ? "bg-accent text-textcolor"
                                : "text-background hover:text-textcolor hover:bg-accent"
                            }`
                        } to="/skill">Toolkit</NavLink>
                        <NavLink className={({ isActive }) =>
                            `rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${isActive
                                ? "bg-accent text-textcolor"
                                : "text-background hover:text-textcolor hover:bg-accent"
                            }`
                        } to="/project">Projects</NavLink>
                        <NavLink className={({ isActive }) =>
                            `rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${isActive
                                ? "bg-accent text-textcolor"
                                : "text-background hover:text-textcolor hover:bg-accent"
                            }`
                        } to="/contact">Contact</NavLink>
                        <button className="rounded-full bg-textcolor px-6 py-3 text-sm font-semibold text-background transition hover:bg-accent hover:text-textcolor">Let's talk</button>

                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar
