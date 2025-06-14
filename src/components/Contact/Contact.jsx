import React from 'react'
import { motion } from 'framer-motion'
import { facebook, github, linkedin, whatsapp } from '../../assets'

function Contact() {
    return (
        <>
            {/* Contact Section */}
            <motion.section
                id="contact"
                className="bg-gradient-to-tr from-indigo-800 to-purple-700 text-white py-20 px-6 md:px-20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-4xl mx-auto text-center space-y-10">
                    <h2 className="text-4xl md:text-5xl font-extrabold drop-shadow-md">📬 Contact Me</h2>
                    <p className="text-lg md:text-xl text-white/90">
                        Have a question, project idea, or just want to connect? Feel free to send a message!
                    </p>

                    <form className="bg-white rounded-2xl shadow-2xl p-8 text-gray-800 space-y-6">
                        <div className="flex flex-col md:flex-row gap-6">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            />
                        </div>
                        <textarea
                            placeholder="Your Message"
                            rows="5"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Social Links */}
                    <div className="flex justify-center gap-6 pt-6">
                        <img className="w-8 h-8 hover:scale-110 transition" src={facebook} alt="Facebook" />
                        <img className="w-8 h-8 hover:scale-110 transition" src={github} alt="GitHub" />
                        <img className="w-8 h-8 hover:scale-110 transition" src={linkedin} alt="LinkedIn" />
                        <img className="w-8 h-8 hover:scale-110 transition" src={whatsapp} alt="LinkedIn" />
                    </div>
                </div>
            </motion.section>

        </>
    )
}

export default Contact