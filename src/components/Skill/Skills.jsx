import React from 'react';
import { skills } from '../../utils/skills';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const SkillBar = ({ name, level }) => (
    <motion.div className="mb-4" variants={fadeInUp}>
        <div className="flex justify-between text-sm text-gray-700 font-medium mb-1">
            <span>{name}</span>
            <span>{level}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
                className="h-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 transition-all duration-500"
                style={{ width: `${level}%` }}
            />
        </div>
    </motion.div>
);

const SkillSection = () => {
    return (
        <section className=" py-20 px-4 md:px-8 ">
            <motion.div
                className="max-w-6xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.2 }}
            >
                {/* Title */}
                <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center text-gray-900 mb-12">
                    Technical <span className="text-indigo-600">Skills</span> & <span className="text-green-600">Experience</span>
                </motion.h2>

                {/* Skills */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <motion.div variants={fadeInUp}>
                        <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Languages & Frameworks</h3>
                        {skills.languagesAndFrameworks.map((skill, index) => (
                            <SkillBar key={index} name={skill.name} level={skill.level} />
                        ))}
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Tools & Technologies</h3>
                        {skills.toolsAndTechnologies.map((skill, index) => (
                            <SkillBar key={index} name={skill.name} level={skill.level} />
                        ))}
                    </motion.div>
                </div>

                {/* Certifications */}
                <motion.div variants={fadeInUp} className="mb-20">
                    <h3 className="text-3xl font-bold text-green-600 text-center mb-10">Certifications</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        {skills.certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
                                whileHover={{ scale: 1.02 }}
                            >
                                <h4 className="text-lg font-semibold text-gray-900 mb-1">{cert.title}</h4>
                                <p className="text-sm text-gray-500 mb-2">
                                    Issued by <strong>{cert.issuer}</strong> on {new Date(cert.date).toLocaleDateString()}
                                </p>
                                <p className="text-gray-700 mb-3">{cert.description}</p>
                                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-green-600 font-medium underline text-sm">
                                    View Certificate
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default SkillSection;
