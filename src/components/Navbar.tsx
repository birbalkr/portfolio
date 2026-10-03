import { useState } from "react";
import { NavLink } from "react-router";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
];

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
                {/* Logo */}
                <a href="#home" className="text-xl font-bold tracking-tight text-white">
                    Birbal<span className="text-blue-500">.</span>
                </a>
                {/* Navigation Links */}
                <div className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.href}
                            end={item.href === "/"}
                            className={({ isActive }) =>
                                isActive ? "text-blue-500" : "text-white"
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>

                <a
                    href="contact"
                    className="hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-gray-200 md:block"
                >
                    Let's Talk
                </a>
                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="rounded-lg p-2 text-white md:hidden"
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <AiOutlineCloseCircle size={28} />
                    ) : (
                        <AiOutlineMenu size={28} />
                    )}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute top-16 left-0 w-full bg-black/90 px-6 pt-6 pb-0 backdrop-blur-lg md:hidden text-white">
                        <div className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.href}
                                    end={item.href === "/"}
                                    className={({ isActive }) =>
                                        isActive ? "text-blue-500" : "text-white"
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
