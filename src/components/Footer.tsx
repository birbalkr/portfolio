import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router";

const footerLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Contact", to: "/contact" },
];

export default function Footer() {
    return (
        <footer className="mt-20 border-t border-[#1F2B27] bg-[#08110F]">
            <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
                <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-sm">
                        <NavLink
                            to="/"
                            className="text-xl font-bold tracking-tight text-[#EAF2F0]"
                        >
                            Birbal<span className="text-[#5DCAA5]">.</span>
                        </NavLink>
                        <p className="mt-4 text-sm leading-relaxed text-[#A9B8B3]">
                            Full stack developer building thoughtful products with clean
                            code and clear interfaces.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-x-16 gap-y-8 sm:grid-cols-3">
                        <div>
                            <h2 className="text-xs font-semibold tracking-[0.2em] text-[#5DCAA5]">
                                EXPLORE
                            </h2>
                            <nav aria-label="Footer navigation" className="mt-4 flex flex-col gap-3">
                                {footerLinks.map((link) => (
                                    <NavLink
                                        key={link.to}
                                        to={link.to}
                                        className="text-sm text-[#A9B8B3] transition hover:text-[#EAF2F0]"
                                    >
                                        {link.label}
                                    </NavLink>
                                ))}
                            </nav>
                        </div>

                        <div>
                            <h2 className="text-xs font-semibold tracking-[0.2em] text-[#5DCAA5]">
                                CONNECT
                            </h2>
                            <div className="mt-4 flex items-center gap-4">
                                <a
                                    href="https://github.com/birbalkr"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="GitHub"
                                    className="text-[#A9B8B3] transition hover:text-[#5DCAA5]"
                                >
                                    <FaGithub size={19} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/birbal-kumar-697381260"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="LinkedIn"
                                    className="text-[#A9B8B3] transition hover:text-[#5DCAA5]"
                                >
                                    <FaLinkedinIn size={18} />
                                </a>
                            </div>
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                            <h2 className="text-xs font-semibold tracking-[0.2em] text-[#5DCAA5]">
                                SAY HELLO
                            </h2>
                            <NavLink
                                to="/contact"
                                className="mt-4 block text-sm text-[#A9B8B3] transition hover:text-[#EAF2F0]"
                            >
                                Let&apos;s build something
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-2 border-t border-[#1F2B27] pt-6 text-xs text-[#6B7A76] sm:flex-row sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} Birbal Kumar. All rights reserved.</p>
                    <p>Built with React, Vite, and a lot of chai.</p>
                </div>
            </div>
        </footer>
    );
}