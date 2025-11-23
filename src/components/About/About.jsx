
import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { api, server, banner, devops, website, bannershapwebp } from '../../assets';
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

    const items = [
        {
            img: api,
            title: "API Development",
            desc: "Design and implement RESTful APIs using Spring Boot and Node.js.",
        },
        {
            img: server,
            title: "Android Development",
            desc: "Build and deploy Android applications using modern frameworks.",
        },
        {
            img: website,
            title: "Web Development",
            desc: "Build responsive and interactive web applications using React.js and Tailwind CSS.",
        },
        {
            img: devops,
            title: "DevOps Practices",
            desc: "Implement CI/CD pipelines and automation with Docker and Kubernetes.",
        },
    ];

    return (
        <>

            {/* What i do  */}

            <section className="py-20 relative overflow-hidden">

                {/* Blurred Background Elements */}
                {/* <div className="absolute top-10 left-10 w-72 h-72  rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-72 h-72  rounded-full blur-3xl" /> */}

                <h1 className="text-center text-3xl font-extrabold text-bright-sun-400 mb-10">
                    Skills & Services
                </h1>


                {/* Modern Masonry-Style Grid */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">

                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.85, y: 60 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.15, type: "spring" }}
                            className={`
                            p-8 rounded-3xl backdrop-blur-xl border border-white/10 shadow-2xl
                            bg-gradient-to-br ${item.color}
                            hover:shadow-yellow-300/30 hover:-translate-y-2 transition-all duration-300
                        `}
                        >
                            <div className="flex flex-col items-center text-center space-y-4">
                                <img src={item.img} alt="" className="w-20 h-20 drop-shadow-xl" />
                                <h2 className="text-2xl font-bold text-white">{item.title}</h2>
                                <p className="text-gray-300 text-lg">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}

                </div>

            </section>

            {/* Projects Section */}

            <section className="py-20 px-4">

                {/* Modern Minimal Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <p className="text-bright-sun-500 text-sm tracking-widest uppercase mb-2">
                        Projects
                    </p>
                    <h2 className="text-4xl font-extrabold text-white">
                        My Latest Work
                    </h2>
                </motion.div>

                <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                    {projects.Recentprojects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-neutral-900/40 backdrop-blur-xl border border-bright-sun-500/30 rounded-2xl p-6 
                shadow-[0_0_20px_rgba(255,199,0,0.15)] hover:shadow-[0_0_25px_rgba(255,199,0,0.35)]
                transition-all duration-300"
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            custom={idx}
                            whileHover={{ scale: 1.03 }}
                        >
                            <h3 className="text-2xl font-semibold text-bright-sun-400 mb-3">
                                {project.title}
                            </h3>

                            <p className="text-base text-gray-300 mb-4">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-5">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-sm border border-bright-sun-600 text-bright-sun-50
                            rounded-md bg-neutral-800 hover:bg-bright-sun-600 hover:text-black transition"
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
                                        className="bg-green-600 text-white text-sm px-4 py-1.5 rounded-lg hover:bg-green-700 transition"
                                    >
                                        Live
                                    </a>
                                )}

                                {project.code && (
                                    <a
                                        href={project.code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-bright-sun-600 text-black font-semibold text-sm px-4 py-1.5 
                            rounded-lg hover:bg-bright-sun-700 transition"
                                    >
                                        Code
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>



        </>
    )
}


export default About