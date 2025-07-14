
import React from 'react'
import {
    forwardRef,
    useCallback,
    useEffect,
    useImperativeHandle,
    useMemo,
    useState,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { api, server, banner, devops, website } from '../../assets';
import { projects } from '../../utils/project';
import { ArrowDownIcon, CodeBracketIcon, GlobeAltIcon, ServerStackIcon, WrenchScrewdriverIcon } from '@heroicons/react/16/solid';
import { skills } from '../../utils/skills';


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

            <section className='top-32'>
                <div className='flex flex-col sm:flex-row  sm:mx-auto sm:w-11/12 mt-12'>
                    <img src={banner} alt="" className='sm:w-2/4 -z-50 relative ' />
                    <div className='text-start p-8 bg-secondary-bg text-text sm:h-96 sm:my-40 sm:mr-20 sm:-left-20 relative rounded-2xl'>
                        <span className='font-light'>Full Stack devloper</span>
                        <h1 className='font-extrabold text-2xl my-2 text-title'>Birbal Kumar</h1>
                        <p className='text-2xl'>Full Stack Developer (Entry-Level) with hands-on project experience using React, Spring Boot, and MySQL. Developed and integrated RESTful APIs, built responsive UIs with Tailwind CSS/Bootstrap, and deployed applications using Docker (public images) and Railway. Ready to apply learned skills in a real-world development environment.</p>
                        <button className='hover:bg-[#33d46ebd] my-4 mx-2 px-4 py-2 rounded-2xl text-2xl border-[#33d46ebd] border'>About</button>
                        <button className='hover:bg-title my-4 mx-2 px-4 py-2 rounded-2xl text-2xl border-title border'>Resume </button>

                    </div>
                </div>
            </section>

            <section>
                <h1 className='text-4xl text-text font-extrabold mx-24'>What I Do</h1>

                <div className='text-text flex justify-center items-center mx-12'>
                    <div className='m-5'>
                        <div className='flex m-5'>
                            <img src={api} alt="api" className='w-14 h-14 mx-3' />
                            <div className=' '>
                                <h1 className='text-3xl text-highlight font-bold'>API</h1>
                                <p className='text-2xl'>Developed and connected RESTful APIs using Spring Boot to handle data flow between frontend and backend in multiple full stack projects</p>
                            </div>
                        </div>

                        <div className='flex m-5'>
                            <img src={server} alt="img" className='w-14 h-14 mx-3' />
                            <div className=''>
                                <h1 className='text-3xl text-highlight font-bold'>BackEnd</h1>
                                <p className='text-2xl'>Built backend systems using Java and Spring Boot, managing databases with MySQL and writing logic to handle data securely and efficiently.</p>
                            </div>
                        </div>
                    </div>
                    <div className='m-5'>
                        <div className='flex m-5'>
                            <img src={website} alt="img" className='w-14 h-14 mx-3' />
                            <div className=''>
                                <h1 className='text-3xl text-highlight font-bold'>Web Design</h1>
                                <p className='text-2xl'>Created responsive and user-friendly interfaces using React, styled with Tailwind CSS and Bootstrap to ensure a clean, mobile-ready layout.</p>
                            </div>
                        </div>

                        <div className='flex m-5'>
                            <img src={devops} alt="img" className='w-14 h-14 mx-3' />
                            <div className=''>
                                <h1 className='text-3xl text-highlight font-bold'>DevOps</h1>
                                <p className='text-2xl'>Deployed applications using Docker with public images, and used Railway to host full stack apps quickly in real-world deployment scenarios.</p>
                            </div>
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
                    className="text-4xl font-bold text-center text-indigo-700 mb-16"
                >
                    Recent Projects
                </motion.h2>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                    {projects.Recentprojects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-secondary-bg backdrop-blur-md border border-white/30 rounded-xl p-6 transition-all"
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            custom={idx}
                            whileHover={{ scale: 1.02 }}
                        >
                            <h3 className="text-2xl font-semibold text-title  mb-2">
                                {project.title}
                            </h3>
                            <p className="text-sm text-text mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="bg-accent border-2 text-text border-accent text-sm px-2 py-1 rounded-md"
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
                                        className="bg-title text-white text-sm px-4 py-1.5 rounded hover:bg-gray-900 transition"
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
                    <h2 className="text-4xl font-bold text-center text-title mb-4">
                        Technical Skills
                    </h2>
                    <h3 className="text-xl text-center text-text mb-14">
                        Here are some of the key skills I bring to the table
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {/* Languages */}
                        <div className="max-w-md mx-auto">
                            <div className="flex items-center mb-4 space-x-2">
                                <CodeBracketIcon className="h-6 w-6 text-blue-600" />
                                <h3 className="text-xl font-semibold text-blue-600">Languages</h3>
                            </div>
                            <ul className="relative border-l-2 border-blue-600 pl-6 space-y-3">
                                {skills.languages.map((lang) => (
                                    <li key={lang} className="text-text font-medium">
                                        {lang.name}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Frameworks & Libraries */}
                        <div className="max-w-md mx-auto">
                            <div className="flex items-center mb-4 space-x-2">
                                <ServerStackIcon className="h-6 w-6 text-green-600" />
                                <h3 className="text-xl font-semibold text-green-600">
                                    Frameworks & Libraries
                                </h3>
                            </div>
                            <ul className="relative border-l-2 border-green-600 pl-6 space-y-3">
                                {skills.Frameworks.map((fw) => (
                                    <li key={fw} className="text-text font-medium">
                                        {fw.name}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tools & Platforms */}
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
                                ].map((tool) => (
                                    <li key={tool} className="text-text font-medium">
                                        {tool}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Other */}
                        <div className="max-w-md mx-auto">
                            <div className="flex items-center mb-4 space-x-2">
                                <GlobeAltIcon className="h-6 w-6 text-yellow-600" />
                                <h3 className="text-xl font-semibold text-yellow-600">Other</h3>
                            </div>
                            <ul className="relative border-l-2 border-yellow-600 pl-6 space-y-3">
                                {["RESTful APIs", "RapidAPI", "API Integration & Testing"].map(
                                    (other) => (
                                        <li key={other} className="text-text font-medium">
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


function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}
const RotatingText = forwardRef((props, ref) => {
    const {
        texts,
        transition = { type: "spring", damping: 25, stiffness: 300 },
        initial = { y: "100%", opacity: 0 },
        animate = { y: 0, opacity: 1 },
        exit = { y: "-120%", opacity: 0 },
        animatePresenceMode = "wait",
        animatePresenceInitial = false,
        rotationInterval = 2000,
        staggerDuration = 0,
        staggerFrom = "first",
        loop = true,
        auto = true,
        splitBy = "characters",
        onNext,
        mainClassName,
        splitLevelClassName,
        elementLevelClassName,
        ...rest
    } = props;

    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    const splitIntoCharacters = (text) => {
        if (typeof Intl !== "undefined" && Intl.Segmenter) {
            const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
            return Array.from(segmenter.segment(text), (segment) => segment.segment);
        }
        return Array.from(text);
    };

    const elements = useMemo(() => {
        const currentText = texts[currentTextIndex];
        if (splitBy === "characters") {
            const words = currentText.split(" ");
            return words.map((word, i) => ({
                characters: splitIntoCharacters(word),
                needsSpace: i !== words.length - 1,
            }));
        }
        if (splitBy === "words") {
            return currentText.split(" ").map((word, i, arr) => ({
                characters: [word],
                needsSpace: i !== arr.length - 1,
            }));
        }
        if (splitBy === "lines") {
            return currentText.split("\n").map((line, i, arr) => ({
                characters: [line],
                needsSpace: i !== arr.length - 1,
            }));
        }

        return currentText.split(splitBy).map((part, i, arr) => ({
            characters: [part],
            needsSpace: i !== arr.length - 1,
        }));
    }, [texts, currentTextIndex, splitBy]);

    const getStaggerDelay = useCallback(
        (index, totalChars) => {
            const total = totalChars;
            if (staggerFrom === "first") return index * staggerDuration;
            if (staggerFrom === "last") return (total - 1 - index) * staggerDuration;
            if (staggerFrom === "center") {
                const center = Math.floor(total / 2);
                return Math.abs(center - index) * staggerDuration;
            }
            if (staggerFrom === "random") {
                const randomIndex = Math.floor(Math.random() * total);
                return Math.abs(randomIndex - index) * staggerDuration;
            }
            return Math.abs(staggerFrom - index) * staggerDuration;
        },
        [staggerFrom, staggerDuration]
    );

    const handleIndexChange = useCallback(
        (newIndex) => {
            setCurrentTextIndex(newIndex);
            if (onNext) onNext(newIndex);
        },
        [onNext]
    );

    const next = useCallback(() => {
        const nextIndex =
            currentTextIndex === texts.length - 1
                ? loop
                    ? 0
                    : currentTextIndex
                : currentTextIndex + 1;
        if (nextIndex !== currentTextIndex) {
            handleIndexChange(nextIndex);
        }
    }, [currentTextIndex, texts.length, loop, handleIndexChange]);

    const previous = useCallback(() => {
        const prevIndex =
            currentTextIndex === 0
                ? loop
                    ? texts.length - 1
                    : currentTextIndex
                : currentTextIndex - 1;
        if (prevIndex !== currentTextIndex) {
            handleIndexChange(prevIndex);
        }
    }, [currentTextIndex, texts.length, loop, handleIndexChange]);

    const jumpTo = useCallback(
        (index) => {
            const validIndex = Math.max(0, Math.min(index, texts.length - 1));
            if (validIndex !== currentTextIndex) {
                handleIndexChange(validIndex);
            }
        },
        [texts.length, currentTextIndex, handleIndexChange]
    );

    const reset = useCallback(() => {
        if (currentTextIndex !== 0) {
            handleIndexChange(0);
        }
    }, [currentTextIndex, handleIndexChange]);

    useImperativeHandle(
        ref,
        () => ({
            next,
            previous,
            jumpTo,
            reset,
        }),
        [next, previous, jumpTo, reset]
    );

    useEffect(() => {
        if (!auto) return;
        const intervalId = setInterval(next, rotationInterval);
        return () => clearInterval(intervalId);
    }, [next, rotationInterval, auto]);

    return (
        <motion.span
            className={cn(
                "flex flex-wrap whitespace-pre-wrap relative",
                mainClassName
            )}
            {...rest}
            layout
            transition={transition}
        >
            <span className="sr-only">{texts[currentTextIndex]}</span>
            <AnimatePresence mode={animatePresenceMode} initial={animatePresenceInitial}>
                <motion.span
                    key={currentTextIndex}
                    className={cn(
                        splitBy === "lines"
                            ? "flex flex-col w-full"
                            : "flex flex-wrap whitespace-pre-wrap relative"
                    )}
                    layout
                    aria-hidden="true"
                >
                    {elements.map((wordObj, wordIndex, array) => {
                        const previousCharsCount = array
                            .slice(0, wordIndex)
                            .reduce((sum, word) => sum + word.characters.length, 0);
                        return (
                            <span key={wordIndex} className={cn("inline-flex", splitLevelClassName)}>
                                {wordObj.characters.map((char, charIndex) => (
                                    <motion.span
                                        key={charIndex}
                                        initial={initial}
                                        animate={animate}
                                        exit={exit}
                                        transition={{
                                            ...transition,
                                            delay: getStaggerDelay(
                                                previousCharsCount + charIndex,
                                                array.reduce((sum, word) => sum + word.characters.length, 0)
                                            ),
                                        }}
                                        className={cn("inline-block", elementLevelClassName)}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                                {wordObj.needsSpace && <span className="whitespace-pre"> </span>}
                            </span>
                        );
                    })}
                </motion.span>
            </AnimatePresence>
        </motion.span>
    );
});
RotatingText.displayName = "RotatingText";



export default About