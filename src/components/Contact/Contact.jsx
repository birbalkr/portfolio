import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { facebook, github, linkedin, whatsapp } from '../../assets';
import emailjs from '@emailjs/browser';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState(null); // success | error
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
                name: name,
                message: message,
                email: email,
            },
            PUBLIC_KEY
        )
            .then(() => {
                console.log('SUCCESS!');
                setStatus('success');
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.error('FAILED...', error);
                setStatus('error');
            });
    };

    return (
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

                <form
                    className="bg-white rounded-2xl shadow-2xl p-8 text-gray-800 space-y-6"
                    onSubmit={handleSubmit}
                    ref={form}
                >
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1">
                            <label htmlFor="name" className="sr-only">Your Name</label>
                            <input
                                id="name"
                                type="text"
                                name="user_name"
                                placeholder="Your Name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="flex-1">
                            <label htmlFor="email" className="sr-only">Your Email</label>
                            <input
                                id="email"
                                type="email"
                                name="user_email"
                                placeholder="Your Email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="sr-only">Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Your Message"
                            rows="5"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300"
                    >
                        Send Message
                    </button>

                    {/* Status Message */}
                    {status === 'success' && (
                        <p className="text-green-600 font-semibold">✅ Message sent successfully!</p>
                    )}
                    {status === 'error' && (
                        <p className="text-red-600 font-semibold">❌ Failed to send message. Please try again.</p>
                    )}
                </form>

                {/* Social Links */}
                <div className="flex justify-center gap-6 pt-6">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img className="w-8 h-8 hover:scale-110 transition" src={facebook} alt="Facebook" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <img className="w-8 h-8 hover:scale-110 transition" src={github} alt="GitHub" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img className="w-8 h-8 hover:scale-110 transition" src={linkedin} alt="LinkedIn" />
                    </a>
                    <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
                        <img className="w-8 h-8 hover:scale-110 transition" src={whatsapp} alt="WhatsApp" />
                    </a>
                </div>
            </div>
        </motion.section>
    );
}

export default Contact;
