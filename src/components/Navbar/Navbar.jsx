import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

const linkHover = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.95 }
};

function Navbar() {
    return (
        <motion.nav
            variants={navVariants}
            initial="hidden"
            animate="visible"
            className="border-gray-200 bg-gray-900 fixed top-0 left-0 w-full z-50 shadow-sm"
        >
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" /> */}
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Birbal Kumar</span>
                </Link>

                {/* Mobile menu toggle button (optional) */}
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>

                {/* Navigation links */}
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <motion.ul
                        className="flex flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.1 } }
                        }}
                    >
                        {[
                            { path: '/', label: 'Home' },
                            { path: '/about', label: 'About' },
                            { path: '/project', label: 'Project' },
                            { path: '/contact', label: 'Contact' },
                        ].map((item, idx) => (
                            <motion.li key={idx} {...linkHover}>
                                <Link
                                    to={item.path}
                                    className={`block py-2 px-3 md:p-0 rounded-sm transition-colors duration-300 ${item.path === '/' ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'
                                        } text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent`}
                                >
                                    {item.label}
                                </Link>
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
            </div>
        </motion.nav>
    )
}

export default Navbar
