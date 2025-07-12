import React from 'react'
import { api, avatar, cyber, facebook, github, linkedin, mobile, web, whatsapp, bannershap } from '../../assets'
import '../../index.css'
import { projects } from '../../utils/project'
import { motion } from 'framer-motion';


function About() {

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, type: "spring", duration: 0.6 },
        }),
    };

    return (
        <>
            {/* About Us Section */}
            <motion.section
                className="bg-gradient-to-br from-indigo-700 via-purple-600 to-indigo-800 text-white min-h-screen flex items-center px-6 md:px-20"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full ">

                    {/* Text Content */}
                    <div className="md:w-3/5 space-y-6">
                        <motion.h2
                            className="text-4xl md:text-5xl font-extrabold leading-tight text-white drop-shadow-xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            👋 About Me
                        </motion.h2>

                        <motion.p
                            className="text-lg md:text-xl font-medium text-white/90 leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            I’m a Full Stack Developer with a passion for learning and building simple, working web applications. I have experience using Java Spring Boot, React, and MySQL to create complete projects from start to finish.
                            I enjoy building both the frontend and backend. I can create REST APIs, design responsive UIs with Tailwind CSS or Bootstrap, and connect everything using databases like MySQL. I’ve also worked with tools like Railway.app for hosting.
                            Some of my recent projects include a Shopping App and a Crypto Coin Tracker. I used modern tools like Redux, RapidAPI, and Chart.js to make them dynamic and user-friendly.
                            I’m always excited to learn new technologies and grow as a developer.
                        </motion.p>

                        <motion.div
                            className="flex gap-4 pt-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.4 }}
                        >
                            <img className="w-8 h-8 hover:scale-110 transition" src={facebook} alt="Facebook" />
                            <img className="w-8 h-8 hover:scale-110 transition bg-white rounded-2xl" src={github} alt="GitHub" />
                            <img className="w-8 h-8 hover:scale-110 transition" src={linkedin} alt="LinkedIn" />
                            <img className="w-8 h-8 hover:scale-110 transition" src={whatsapp} alt="LinkedIn" />
                        </motion.div>
                    </div>

                    {/* Avatar */}
                    <motion.div
                        className="md:w-2/5 flex justify-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <img
                            className="w-48 h-48 md:w-72 md:h-72 rounded-full object-cover border-4 border-white shadow-2xl"
                            src={avatar}
                            alt="Avatar"
                        />
                    </motion.div>
                </div>
            </motion.section>


            {/* skills */}
            {/* < div className='max-w-5/6 h-2/3 bg-white border-8 border-white rounded-4xl mx-auto shadow-2xl -mt-32 p-5' >
                <div className='flex p-12'>
                    <div className='w-1/2'>
                        <img className='img-icons z-10 absolute' src={web} alt="" />
                        <div className='bg-img-icon'></div>
                        <div className='text-3xl font-extrabold'>Web Development</div>
                        <div className='pt-5 font-bold m-2'>Skilled in building full-stack web applications using modern technologies like React.js, Java Spring Boot, and MySQL. I create responsive user interfaces, develop RESTful APIs, and ensure seamless integration between frontend and backend. Experienced in deploying web applications using platforms like Railway.app and working with tools such as Git, RapidAPI, and Chart.js for real-time data and analytics.</div>
                    </div>
                    <div className='w-1/2'>
                        <img className='img-icons z-10 absolute' src={api} alt="" />
                        <div className='bg-img-icon'></div>
                        <div className='text-3xl font-extrabold'>API Development</div>
                        <div className='pt-5 font-bold m-2'>Experienced in designing and building RESTful APIs using Java Spring Boot. I focus on creating scalable and secure endpoints for smooth communication between frontend and backend systems. Skilled in implementing CRUD operations, handling request/response formats (JSON), and integrating third-party APIs using platforms like RapidAPI.</div>
                    </div>
                </div>
                <div className='flex p-12'>
                    <div className='w-1/2'>
                        <img className='img-icons z-10 absolute' src={mobile} alt="" />
                        <div className='bg-img-icon'></div>
                        <div className='text-3xl font-extrabold'>Mobile Development</div>
                        <div className='pt-5 font-bold m-2'>Familiar with developing cross-platform mobile applications using React Native. I focus on building clean, responsive, and user-friendly interfaces that work seamlessly on both Android and iOS. Experienced in managing mobile app states, integrating APIs, and using tools like Android Studio for testing and debugging.</div>
                    </div>
                    <div className='w-1/2' >
                        <img className='img-icons z-10 absolute' src={cyber} alt="" />
                        <div className='bg-img-icon'></div>
                        <div className='text-3xl font-extrabold'>Cyber Security</div>
                        <div className='pt-5 font-bold m-2'>Certified as a Junior Security Professional by Defronix, with foundational knowledge of network security, data protection, and vulnerability assessment. Aware of common threats like phishing, malware, and SQL injection, and familiar with basic practices for securing applications and APIs.</div>
                    </div>
                </div>
            </div > */}

            {/* skills languages */}
            {/* < SkillSection /> */}

            {/* Projects Section */}
            {/* <section className="py-20 px-4 bg-gradient-to-b from-white to-indigo-100">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-center text-indigo-700 mb-16"
                >
                    Recent Working on Projects
                </motion.h2>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                    {projects.Recentprojects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-white/40 backdrop-blur-md border border-white/30 rounded-xl p-6 shadow-xl hover:shadow-indigo-300 transition-all"
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            custom={idx}
                            whileHover={{ scale: 1.02 }}
                        >
                            <h3 className="text-2xl font-semibold text-indigo-800 mb-2">
                                {project.title}
                            </h3>
                            <p className="text-sm text-gray-700 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-md"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-3">
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-green-600 text-white text-sm px-4 py-1.5 rounded hover:bg-green-700 transition"
                                    >
                                        Live
                                    </a>
                                )}
                                {project.code && (
                                    <a
                                        href={project.code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-800 text-white text-sm px-4 py-1.5 rounded hover:bg-gray-900 transition"
                                    >
                                        Code
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section> */}

        </>
    )
}

export default About