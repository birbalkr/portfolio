import React from 'react'
import { Link } from 'react-router-dom'
import { facebook, github, instagram, whatsapp } from '../../assets'

function Sidebar() {
    return (
        <aside className="flex-col md:w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700 flex  ">
            <Link to="/" className="mx-auto">
                <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="" />
            </Link>

            <div className="flex flex-col items-center mt-6 -mx-2">
                <img className="object-cover w-24 h-24 mx-2 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar" />
                <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">Birbal Kumar</h4>
                <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">Full Stack Dev</p>
            </div>

            <div className="flex flex-col justify-between flex-1 mt-6">
                <nav>
                    <div className="items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200" to="">
                        <Link className="flex items-center text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200" to="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6" >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 0v8a2 2 0 002 2h14a2 2 0 002-2V8m-18 0l9-6 9 6" />
                            </svg>
                            <span className="mx-2 font-medium">Email</span>
                        </Link>
                        <span className="mx-3 font-normal">birbalkr1435@gmail.com</span>
                    </div>

                    <div className="items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200 mt-2" to="">
                        <Link className="flex items-center text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200" to="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6" >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.8L3 20l1.8-4A8.959 8.959 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>

                            <span className="mx-1 font-medium">Blogs</span>
                        </Link>
                        <span className="mx-7 font-medium">birbalblogs.netlify.app</span>
                    </div>

                    <div className="items-center px-4 py-1 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200 mt-2" to="">
                        <Link className="flex items-center text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200" to="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6" >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h4m2 4H5a2 2 0 01-2-2V6a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z" />
                            </svg>
                            <span className="mx-1 font-medium">Resume</span>
                        </Link>
                        <span className="mx-7 font-medium">Download</span>
                    </div>

                    <div className="items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200 mt-2" to="">
                        <Link className="flex items-center text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200" to="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6" >
                                <path
                                    strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-6.5 8-12A8 8 0 004 10c0 5.5 8 12 8 12z" />
                            </svg>

                            <span className="mx-1 font-medium">Locations</span>
                        </Link>
                        <span className="mx-7 font-medium">Gaya, Bihar</span>
                    </div>



                    <div className='flex h-6 w-6 items-center ml-4 mt-6 gap-3'>
                        <img src={github} alt="" /><img src={facebook} alt="" /><img src={instagram} alt="" /><img src={whatsapp} alt="" /><img src="" alt="" />
                    </div>
                </nav>
            </div>
        </aside >
    )
}

export default Sidebar