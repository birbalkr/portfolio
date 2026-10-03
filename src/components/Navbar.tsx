import { useState } from "react";
import { NavLink } from "react-router";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
            <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-[#0A1613]/70 shadow-[0_16px_40px_rgba(0,0,0,0.22)] backdrop-blur-2xl">
                <div className="flex h-18 items-center justify-between px-4 sm:px-6">
                    <NavLink
                        to="/"
                        className="group flex items-center gap-2 text-lg font-bold tracking-tight text-[#EAF2F0]"
                    >
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#1D9E75] text-sm font-black text-[#04342C] shadow-[0_0_22px_rgba(29,158,117,0.3)] transition group-hover:rotate-6">
                            B
                        </span>
                        Birbal<span className="text-[#5DCAA5]">.</span>
                    </NavLink>

                    <div className="hidden items-center gap-1 rounded-full border border-white/5 bg-white/3 p-1 md:flex">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.href}
                                end={item.href === "/"}
                                className={({ isActive }) =>
                                    `rounded-full px-4 py-2 text-sm transition ${
                                        isActive
                                            ? "bg-[#1D9E75]/15 font-semibold text-[#5DCAA5] shadow-[inset_0_0_0_1px_rgba(93,202,165,0.15)]"
                                            : "text-[#A9B8B3] hover:bg-white/6 hover:text-[#EAF2F0]"
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>

                    <NavLink
                        to="/contact"
                        className="hidden items-center gap-2 rounded-full bg-[#EAF2F0] px-5 py-2.5 text-sm font-semibold text-[#0A1613] transition hover:bg-[#5DCAA5] md:flex"
                    >
                        Let&apos;s talk
                        <span aria-hidden="true" className="text-base">{"\u2197"}</span>
                    </NavLink>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-[#EAF2F0] transition hover:bg-white/10 md:hidden"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <AiOutlineCloseCircle size={22} /> : <AiOutlineMenu size={22} />}
                    </button>
                </div>

                {isOpen && (
                    <div className="border-t border-white/10 px-4 pb-4 pt-3 md:hidden">
                        <div className="flex flex-col gap-1">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.href}
                                    end={item.href === "/"}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `rounded-xl px-4 py-3 text-sm transition ${
                                            isActive
                                                ? "bg-[#1D9E75]/15 font-semibold text-[#5DCAA5]"
                                                : "text-[#A9B8B3] hover:bg-white/6 hover:text-[#EAF2F0]"
                                        }`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                            <NavLink
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="mt-2 rounded-xl bg-[#EAF2F0] px-4 py-3 text-center text-sm font-semibold text-[#0A1613] transition hover:bg-[#5DCAA5]"
                            >
                                Let&apos;s talk <span aria-hidden="true">{"\u2197"}</span>
                            </NavLink>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
