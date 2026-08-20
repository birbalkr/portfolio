import { NavLink } from "react-router";
import resumePdf from "../../../../assets/Birbal_Resume.pdf";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Navbar() {

    const container = useRef(null);


    useEffect(() => {
        gsap.context(() => {
            gsap.from(".hero", {
                y: -80,
                opacity: 0,
                duration: 0.7,
                ease: "power1.out",
            });

            gsap.from(".navlineanimation", {
                x: 80,
                opacity: 0,
                delay:0.2,
                duration: 0.7,
                ease: "power1.out",
            })
        }, container);

    }, []);


    return (
        <div className="flex justify-center px-6 pt-8" ref={container}>
            <nav className="hero flex w-full max-w-6xl items-center justify-between rounded-full border border-[#1C6B60] bg-transparent px-8 py-4">
                <span className=" navlineanimation text-base font-bold text-[#EAF2F0]"><NavLink to={'/'}>Birbal Kumar</NavLink></span>

                <div className="hidden items-center gap-8 md:flex navlineanimation">
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


                    <NavLink
                        to='https://portfolio-blogs.netlify.app/'
                        className={({ isActive }) =>
                            isActive ? "text-green-500 font-semibold" : "text-gray-300 hover:text-blue-500 transition"
                        }
                    >
                        Blogs
                    </NavLink>

                </div>

                <a
                    href={resumePdf}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="navlineanimation rounded-full bg-[#F4A93B] px-5 py-2 text-sm font-semibold text-[#0E4F4A] hover:bg-[#f5b658]"
                >
                    Resume
                </a>

            </nav>
        </div>

    );
}