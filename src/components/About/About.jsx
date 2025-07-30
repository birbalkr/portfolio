
import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { api, server, banner, devops, website, bannershapwebp, banner1, JAVA, js, react, spring, postgresql, mysql, docker, kubernetes, git } from '../../assets';
import { projects } from '../../utils/project';
import { CodeBracketIcon, GlobeAltIcon, LanguageIcon, ServerStackIcon, WrenchScrewdriverIcon } from '@heroicons/react/16/solid';
import { skills } from '../../utils/skills';
// import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid';


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
            <img src={bannershapwebp} alt="" className='absolute -z-50 right-0 top-0 w-1/2 h-44' />
            <section className='top-32'>
                <div className='flex flex-row  mx-auto w-11/12 mt-12'>
                    <img src={banner} alt="" className='w-2/4 -z-50 relative  rounded-3xl bg-transparent ' />
                    <div className='text-start p-8 bg-transparent my-52 mr-20 -left-44 border border-bright-sun-600 relative rounded-2xl backdrop-blur-md drop-shadow-lg'>
                        <span className='font-light text-mine-shaft-300'>Full Stack Developer</span>
                        <h1 className='font-extrabold text-4xl my-2 text-bright-sun-400'>Birbal Kumar</h1>
                        <p className='text-2xl'>Full Stack Developer (Entry-Level) with hands-on project experience using React, Spring Boot, and MySQL. Developed and integrated RESTful APIs, built responsive UIs with Tailwind CSS/Bootstrap, and deployed applications using Docker (public images) and Railway. Ready to apply learned skills in a real-world development environment.</p>
                        <button className='hover:bg-[#33d46ebd] my-4 mx-2 px-4 py-2 rounded-2xl text-2xl border-[#33d46ebd] border'>About</button>
                        <button className='hover:bg-bright-sun-500  my-4 mx-2 px-4 py-2 rounded-2xl text-2xl border-bright-sun-500 border'>Resume </button>
                    </div>
                </div>
            </section>

            {/* What i do  */}

            <section>
                <div className='max-w-full'>
                    <h1 className='text-4xl text-center font-extrabold mx-24 text-bright-sun-400'>What I Do</h1>

                    <div className='flex justify-between mx-24 my-12'>
                        <div className='flex flex-col items-center'>
                            <img src={api} alt="" className='w-20 h-20' />
                            <h2 className='text-2xl font-bold text-text'>API Development</h2>
                            <p className='text-lg text-text'>Design and implement RESTful APIs using Spring Boot and Node.js.</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img src={server} alt="" className='w-20 h-20' />
                            <h2 className='text-2xl font-bold text-text'>Android Development</h2>
                            <p className='text-lg text-text'>Deploy and manage applications on cloud platforms like AWS and Railway.</p>
                        </div>
                    </div>

                    <div className='flex justify-between mx-24 my-12'>
                        <div className='flex flex-col items-center'>
                            <img src={website} alt="" className='w-20 h-20' />
                            <h2 className='text-2xl font-bold text-text'>Web Development</h2>
                            <p className='text-lg text-text'>Build responsive and interactive web applications using React.js and Tailwind CSS.</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img src={devops} alt="" className='w-20 h-20' />
                            <h2 className='text-2xl font-bold text-text'>DevOps Practices</h2>
                            <p className='text-lg text-text'>Implement CI/CD pipelines and containerization using Docker and Kubernetes.</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Projects Section */}

            <section className="py-20 px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-center text-bright-sun-600 mb-16 underline decoration-bright-sun-600 underline-offset-22"
                >
                    Recent Projects
                </motion.h2>

                <div className="grid gap-10 grid-cols-3 max-w-7xl mx-auto">
                    {projects.Recentprojects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-secondary-bg backdrop-blur-md border border-bright-sun-400 rounded-xl p-6 transition-all"
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            custom={idx}
                            whileHover={{ scale: 1.02 }}
                        >
                            <h3 className="text-2xl font-semibold text-bright-sun-400  mb-2">
                                {project.title}
                            </h3>
                            <p className="text-sm  mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className=" border text-bright-sun-50 border-bright-sun-700 hover:bg-bright-sun-700 text-sm px-2 py-1 rounded-md"
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
                                        className="bg-bright-sun-600 text-white text-sm px-4 py-1.5 rounded hover:bg-bright-sun-700 transition"
                                    >
                                        Code
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* skill  */}

            <section id="skills" className="py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-title mb-16 text-bright-sun-600 underline decoration-bright-sun-600 underline-offset-22"
                    >
                        Skills
                    </h2>
                    <h3 className="text-xl text-center text-text mb-14">
                        Here are some of the key skills I bring to the table
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                        <div className="max-w-md mx-auto">
                            <div className="flex items-center mb-4 space-x-2">
                                <CodeBracketIcon className="h-6 w-6 text-blue-600" />
                                <h3 className="text-xl font-semibold text-blue-600">Languages</h3>
                            </div>
                            <ul className="relative border-l-2 border-blue-600 pl-6 space-y-3">
                                {skills.languages.map((lang, index) => (
                                    <li key={`${lang}-${index}`} className="text-text font-medium">
                                        {lang.name}
                                    </li>
                                ))}
                            </ul>
                        </div>


                        <div className="max-w-md mx-auto">
                            <div className="flex items-center mb-4 space-x-2">
                                <ServerStackIcon className="h-6 w-6 text-green-600" />
                                <h3 className="text-xl font-semibold text-green-600">
                                    Frameworks & Libraries
                                </h3>
                            </div>
                            <ul className="relative border-l-2 border-green-600 pl-6 space-y-3">
                                {skills.Frameworks.map((fw, index) => (
                                    <li key={`${fw}-${index}`} className="text-text font-medium">
                                        {fw.name}
                                    </li>
                                ))}
                            </ul>
                        </div>


                        <div className="max-w-md mx-auto">
                            <div className="flex items-center mb-4 space-x-2">
                                <WrenchScrewdriverIcon className="h-6 w-6 text-purple-600" />
                                <h3 className="text-xl font-semibold text-purple-600">
                                    Tools & Platforms
                                </h3>
                            </div>
                            <ul className="relative border-l-2 border-purple-600 pl-6 space-y-3">
                                {[
                                    "IntelliJ",
                                    "Eclipse",
                                    "PyCharm",
                                    "Android Studio",
                                    "Git",
                                    "AWS",
                                    "Docker",
                                    "Railway.app",
                                ].map((tool, index) => (
                                    <li key={`${tool}-${index}`} className="text-text font-medium">
                                        {tool}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="max-w-md mx-auto">
                            <div className="flex items-center mb-4 space-x-2">
                                <GlobeAltIcon className="h-6 w-6 text-yellow-600" />
                                <h3 className="text-xl font-semibold text-yellow-600">Other</h3>
                            </div>
                            <ul className="relative border-l-2 border-yellow-600 pl-6 space-y-3">
                                {["RESTful APIs", "RapidAPI", "API Integration & Testing"].map(
                                    (other, index) => (
                                        <li key={`${other}-${index}`} className="text-text font-medium">
                                            {other}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}


export default About