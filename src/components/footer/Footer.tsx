
import { Link } from "react-router";
import {

    ArrowUpRight,
    ArrowUp,
} from "lucide-react";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Toolkit", path: "/skill" },
    { name: "Projects", path: "/project" },
    { name: "Contact", path: "/contact" },
];

function Footer() {
    return (
        <footer className="bg-foreground px-6 pb-6 pt-16 text-textcolor sm:px-10">

            {/* Main Footer */}
            <div className="mx-auto max-w-7xl">

                <div className="grid gap-12 border-b border-white/15 pb-12 md:grid-cols-2">

                    {/* Brand */}
                    <div>
                        <Link to="/" className="text-3xl font-bold tracking-tight">
                            Birbal<span className="text-accent">.</span>
                        </Link>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-textcolor">
                            Building meaningful digital experiences for the web
                            and mobile, one project at a time.
                        </p>

                        <div className="mt-6 flex items-center gap-2">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                            <span className="text-xs text-textcolor">
                                Open to opportunities
                            </span>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">

                        <div>
                            <h3 className="mb-5 text-xs font-semibold tracking-widest text-headingcolor">
                                EXPLORE
                            </h3>

                            <div className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className="w-fit text-sm text-textcolor transition hover:text-accent"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="mb-5 text-xs font-semibold tracking-widest text-headingcolor">
                                SOCIALS
                            </h3>

                            <div className="flex flex-col gap-4">
                                <a
                                    href="https://github.com/birbalkr"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-sm text-textcolor transition hover:text-accent"
                                >
                                    GitHub <ArrowUpRight size={14} />
                                </a>

                                <a
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-sm text-textcolor transition hover:text-accent"
                                >
                                    LinkedIn <ArrowUpRight size={14} />
                                </a>

                                <a
                                    href="mailto:birbalkr1435@gmail.com"
                                    className="flex items-center gap-2 text-sm text-textcolor transition hover:text-accent"
                                >
                                    Email <ArrowUpRight size={14} />
                                </a>
                            </div>
                        </div>

                        {/* Location */}
                        <div>
                            <h3 className="mb-5 text-xs font-semibold tracking-widest text-headingcolor">
                                LOCATION
                            </h3>

                            <p className="text-sm leading-6 text-textcolor">
                                Gaya, Bihar
                                <br />
                                India
                            </p>
                        </div>

                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="flex flex-col items-center justify-between gap-5 pt-6 sm:flex-row">

                    <p className="text-xs textcolor">
                        © {new Date().getFullYear()} Birbal Kumar. All rights reserved.
                    </p>

                    <p className="text-xs textcolor">
                        Designed & built with{" "}
                        <span className="text-accent">♥</span> and React.
                    </p>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs transition hover:border-accent hover:bg-accent hover:text-foreground"
                    >
                        Back to top <ArrowUp size={14} />
                    </button>

                </div>
            </div>
        </footer>
    );
}

export default Footer;
