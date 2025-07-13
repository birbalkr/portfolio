
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
import { banner, cyber, JavaScript1, project2 } from '../../assets';
import SkillSection from '../Skill/Skills';
import { projects } from '../../utils/project';


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

            <section>
                <div className='flex flex-col sm:flex-row  sm:mx-auto sm:w-11/12'>
                    <img src={banner} alt="" className='sm:w-2/4 -z-50 relative ' />
                    <div className='text-start p-8 bg-secondary-bg text-text sm:h-96 sm:my-40 sm:mr-20 sm:-left-20 relative rounded-2x'>
                        <span className='font-light'>Full Stack devloper</span>
                        <h1 className='font-extrabold text-2xl my-2 text-title'>Birbal Kumar</h1>
                        <p className='text-2xl'>Full Stack Developer (Entry-Level) with hands-on project experience using React, Spring Boot, and MySQL. Developed and integrated RESTful APIs, built responsive UIs with Tailwind CSS/Bootstrap, and deployed applications using Docker (public images) and Railway. Ready to apply learned skills in a real-world development environment.</p>
                        <button className='bg-[#33d46ebd] my-4 mx-2 px-4 py-2 rounded-2xl text-2xl hover:bg-hover'>About</button>
                        <button className='bg-title my-4 mx-2 px-4 py-2 rounded-2xl text-2xl hover:bg-hover'>Download cv</button>

                    </div>
                </div>
            </section>

            <section >
                <h1 className=''>What I Do</h1>
                <div className=''></div>
                <div className=''>
                    <div className=''>
                        <svg className='' width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <polyline points="16 18 22 12 16 6" />
                            <polyline points="8 6 2 12 8 18" />
                        </svg>
                        <div className=''>
                            <h1>Web Design</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum autem ea sed ex, vero corporis, nisi nostrum modi error rem itaque corrupti? Expedita sint perspiciatis ipsum a officia officiis? Sint.</p>
                        </div>
                    </div>

                    <div className=''>
                        <svg className='w-64' width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <circle cx="12" cy="12" r="3" />
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c0 .66.39 1.24 1 1.51.26.11.53.17.81.17H21a2 2 0 1 1 0 4h-.09c-.28 0-.55-.06-.81-.17a1.65 1.65 0 0 0-1.51 1z" />
                        </svg>
                        <div className=''>
                            <h1>DevOps</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum autem ea sed ex, vero corporis, nisi nostrum modi error rem itaque corrupti? Expedita sint perspiciatis ipsum a officia officiis? Sint.</p>
                        </div>
                    </div>

                    <div className=''>
                        <svg className='w-64' width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#38bdf8" stroke-width="2"> <rect x="12" y="16" width="40" height="32" rx="4" fill="none" />
                            <line x1="16" y1="12" x2="16" y2="16" /> <line x1="24" y1="12" x2="24" y2="16" /> <line x1="32" y1="12" x2="32" y2="16" /> <line x1="40" y1="12" x2="40" y2="16" /> <line x1="48" y1="12" x2="48" y2="16" />
                            <line x1="16" y1="48" x2="16" y2="52" /> <line x1="24" y1="48" x2="24" y2="52" /> <line x1="32" y1="48" x2="32" y2="52" /> <line x1="40" y1="48" x2="40" y2="52" /> <line x1="48" y1="48" x2="48" y2="52" /> <text x="32" y="38" text-anchor="middle" font-family="monospace"
                                font-size="16" fill="none" stroke="#38bdf8" stroke-width="1">
                                API
                            </text>
                        </svg>
                        <div className=' '>
                            <h1>API</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum autem ea sed ex, vero corporis, nisi nostrum modi error rem itaque corrupti? Expedita sint perspiciatis ipsum a officia officiis? Sint.</p>
                        </div>
                    </div>

                    <div className=''>
                        <svg className='w-64' width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <rect x="2" y="3" width="20" height="6" rx="2" ry="2" /> <rect x="2" y="9" width="20" height="6" rx="2" ry="2" /> <rect x="2" y="15" width="20" height="6" rx="2" ry="2" />
                            <path d="M6 6h.01M6 12h.01M6 18h.01" />
                        </svg>
                        <div className=''>
                            <h1>BackEnd</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum autem ea sed ex, vero corporis, nisi nostrum modi error rem itaque corrupti? Expedita sint perspiciatis ipsum a officia officiis? Sint.</p>
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
            </section>

            < SkillSection />
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