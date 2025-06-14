import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { facebook, github, linkedin, banner, whatsapp } from "../../assets";
import "../../index.css";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring" } },
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

function MainPage() {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-12 font-sans"
        >
            {/* Header */}
            <motion.header
                variants={fadeInUp}
                className="text-center mb-10"
            >
                <h1 className="text-4xl font-bold text-white">
                    Portfolio <span className="text-violet-500">Birbal Kumar</span>
                </h1>
            </motion.header>

            {/* Hero Section */}
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
                {/* Left Column */}
                <motion.div
                    variants={containerVariants}
                    className="flex flex-col items-start space-y-6 md:w-1/2"
                >

                    {/* Text */}
                    <motion.div variants={fadeInUp}>
                        <p className="text-violet-400 text-xl mb-1">Hello, I'm</p>
                        <h2 className="text-5xl font-extrabold leading-tight mb-4 text-white">Birbal Kumar</h2>
                        <p className="text-lg text-gray-300 leading-relaxed mb-2">
                            I'm a passionate Full Stack Developer dedicated to building powerful, user-friendly, and secure web applications.
                            My expertise lies in leveraging modern JavaScript frameworks, backend technologies, and cloud solutions to deliver scalable digital products.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Whether it's frontend development with React or backend architecture with Node.js, I’m committed to crafting intuitive interfaces and reliable systems
                            that provide exceptional user experiences and business value.
                        </p>
                    </motion.div>

                    {/* Socials */}
                    <motion.div className="flex gap-4">
                        {[facebook, github, linkedin,whatsapp].map((icon, i) => (
                            <motion.img
                                key={i}
                                src={icon}
                                alt="social"
                                className="w-10 h-10 p-2 bg-gray-700 rounded-full hover:bg-violet-600 transition transform hover:scale-110 cursor-pointer shadow-md"
                                variants={fadeInUp}
                            />
                        ))}
                    </motion.div>
                    {/* CTA */}
                    <motion.div variants={fadeInUp}>
                        <Link
                            to="/about"
                            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-violet-600 text-white text-lg rounded-full shadow-lg hover:scale-105 transition-transform"
                        >
                            About Us
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Right Column (Image) */}
                <motion.div
                    variants={scaleIn}
                    className="md:w-1/2"
                >
                    <img
                        src={banner}
                        alt="Banner"
                        className=" w-full max-h-[500px] object-cover"
                    />
                </motion.div>
            </div>
        </motion.div>
    );
}

export default MainPage;
