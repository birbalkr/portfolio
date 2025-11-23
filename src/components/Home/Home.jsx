import React from "react";
import { docker, downloads, email, gfg, git, github, linkedin, location, mysql, react, spring, tailwind, whatsapp } from "../../assets";
import RotatingText from "../Anim/RotatingText";
import About from "../About/About";

function Home() {
    return (
        <section className="mt-20 w-full">
            <div className="w-11/12 mx-auto flex flex-col sm:flex-row ">

                <div className="w-full lg:w-8/12">

                    {/* Name + Rotating Text */}

                    <div className="flex items-start sm:items-center gap-5">
                        <div className="text-4xl md:text-5xl font-extrabold text-bright-sun-400">
                            Birbal Kumar
                        </div>

                        {/* Removed RotatingText - added simple rotating text placeholder */}
                        <div className="mt-3">
                            <RotatingText
                                texts={[
                                    "React JS",
                                    "Spring Boot",
                                    "Tailwind CSS",
                                    "Docker",
                                    "GitHub"
                                ]}
                            />
                        </div>
                    </div>

                    {/* Subtitle */}
                    <div className="font-light text-lg md:text-xl mt-3 text-mine-shaft-300">
                        FullStack Web Developer
                    </div>


                    {/* Email + Location */}
                    <div className="flex flex-wrap items-center gap-3 mt-5">
                        <img src={email} alt="email" className="w-6" />
                        <span>birbalkr1435@gmail.com</span>

                        <img src={location} alt="location" className="w-6 ml-4" />
                        <span>Gaya, Bihar, India</span>
                    </div>

                    {/* Paragraph */}
                    <p className="mt-5 text-lg md:text-2xl leading-relaxed font-medium">
                        Full Stack Developer (Entry-Level) with hands-on project experience using React, Spring Boot, and MySQL. Developed and integrated RESTful APIs, built responsive UIs with Tailwind CSS/Bootstrap, and deployed applications using Docker (public images) and Railway. Ready to apply learned skills in a real-world development environment.
                    </p>

                    {/* Buttons */}

                    <div className="flex flex-col sm:flex-row gap-4 mt-6">

                        <div className="hover:bg-bright-sun-500 px-3 my-2 rounded-2xl flex
                            text-xl border border-bright-sun-500 justify-center items-center gap-3">
                                <img src={downloads} alt="" className="w-8 h-8 " />
                            <div>Resume</div>
                        </div>

                        <div className="px-2 py-3 rounded-2xl flex imageborder  gap-2">
                            <img src={github} alt="Github" />
                            <img src={linkedin} alt="Linkedin" />
                            <img src={whatsapp} alt="whatsapp" />
                            <img src={gfg} alt="gfg" />
                            <img src={docker} alt="docker" />
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE - TECH IMAGES (HIDDEN ON MOBILE) */}
                <div className="lg:flex w-4/12 md:w-1/3 sm:w1/3 ml-6 hidden sm:flex md:flex flex-col gap-5 ">

                    {/* Row 1 */}
                    <div className="relative flex gap-5 codeimage">
                        {/* <img src={spring} alt="spring" className="w-28" />
                        <img src={react} alt="react" className="w-28" /> */}
                        <img src={spring} alt="" className="mt-12" />
                        <img src={react} alt="" className="mt-4" />

                        <div className="absolute hidden lg:flex">
                            <div className="absolute border-1 p-2 rounded-2xl -ml-10">
                                Spring Boot
                            </div>
                            <div className="ml-40 lg:ml-52 -mt-10 border-1 p-2 rounded-2xl">
                                React JS
                            </div>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="relative flex gap-5 codeimage">

                        <img src={mysql} alt="" className="mt-4" />
                        <img src={tailwind} alt="" className="-mt-4" />


                        <div className="absolute hidden lg:flex">
                            <div className="absolute border-1 p-2 rounded-2xl mt-30 -ml-10 lg:mt-36">
                                MySQL DB
                            </div>
                            <div className="border-1 p-2 rounded-2xl ml-36 mt-25 lg:mt-28 lg:ml-44">
                                Tailwind CSS
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Home;
