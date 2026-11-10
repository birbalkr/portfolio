
import { NavLink } from "react-router";
import { gsap } from "gsap";
import { useEffect, useRef, type ReactNode } from "react";
import { featuredProject, otherProjects, stats, tags } from "../data/portfolio";

function TechTag({ children }: { children: ReactNode }) {
    return (
        <span className="rounded-full bg-[#152420] px-3 py-1 text-xs text-[#A9B8B3]">
            {children}
        </span>
    );
}

export default function Home() {

    // Animaion
    const container = useRef(null);

    useEffect(() => {
        gsap.context(() => {
            gsap.from(".hero", {
                y: 80,
                opacity: 0,
                duration: 1,
                ease: "power1.inOut",
            });

            gsap.from(".rightside", {
                y: 80,
                opacity: 0,
                duration: 0.7,
                ease: "power3.in",
            });

        }, container);

    }, []);


    return (

        <section className="relative pt-10">
            <section ref={container}>
                <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-20 lg:grid-cols-2 relative">
                    {/* Left column */}
                    <div className="hero">

                        <h1 className="font-serif text-5xl leading-tight text-foreground">
                            Hi, I'm
                            <span className="text-accent">Birbal</span>.
                        </h1>
                        <h1 className="font-serif text-4xl leading-tight text-foreground">
                            I build for web & mobile.
                        </h1>

                        <p className="mt-6 max-w-lg text-base leading-relaxed text-foreground">
                            Full Stack Developer building web and mobile applications with
                            <span className="font-semibold text-headingcolor">{" "}React, Next.js, React Native, Node.js, and Express.{" "}</span>
                            Exploring <span className="font-semibold text-headingcolor"> AI Engineering, RAG systems</span>, and <span className="font-semibold text-headingcolor">LLM integrations</span>, while developing skills in <span className="font-semibold text-headingcolor">cloud infrastructure, system design</span>, and <span className="font-semibold text-headingcolor"> scalable architecture.</span>
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <a
                                href="#projects"
                                className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-textcolor hover:bg-textcolor hover:text-accent"
                            >
                                View my work
                                <span aria-hidden="true">&#8594;</span>
                            </a>
                            <NavLink
                                to="/about"
                                className="rounded-full border-2 border-textcolor px-6 py-3 text-sm font-semibold text-textcolor hover:border-headingcolor hover:text-headingcolor"
                            >
                                About me
                            </NavLink>
                        </div>

                        <div className="mt-10 flex flex-wrap items-center gap-4">
                            <a
                                href="https://github.com/birbalkr"
                                aria-label="GitHub"
                                className="text-textcolor hover:text-headingcolor"
                            >
                                <i className="fa-brands fa-github size-3"></i>
                            </a>
                            <a href="https://leetcode.com/u/Hq4okMbx7u/" aria-label="leetcode" className="text-textcolor hover:text-headingcolor">
                                <i className="fa-brands fa-leetcode"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/birbal-kumar-697381260"
                                aria-label="LinkedIn"
                                className="text-textcolor hover:text-headingcolor"
                            >
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>

                            <span className="h-5 w-px bg-headingcolor" />

                            <p className="text-sm text-textcolor">
                                <span className="font-bold text-headingcolor">3+</span> Projects
                            </p>
                            <p className="text-sm text-textcolor">
                                <span className="font-bold text-headingcolor">1</span> Hackathon
                            </p>
                        </div>
                    </div>

                    {/* Right column — code card */}
                    <div className=" rightside rounded-xl border border-[#1F2B27] bg-[#0E1917] p-6 text-white">
                        <div className="mb-4 flex items-center gap-2 border-b border-[#1F2B27] pb-4">
                            <span className="h-3 w-3 rounded-full bg-[#E24B4A]" />
                            <span className="h-3 w-3 rounded-full bg-[#EF9F27]" />
                            <span className="h-3 w-3 rounded-full bg-[#5DCAA5]" />
                            <span className="ml-2 text-xs text-[#6B7A76]">developer.ts</span>
                        </div>
                        <pre className="overflow-x-auto font-mono text-sm leading-7">
                            <span className="text-[#5DCAA5]">const</span>{" "}
                            <span className="text-[#EAF2F0]">dev</span>{" "}
                            <span className="text-[#6B7A76]">=</span> {"{"}
                            {"\n"}  name: <span className="text-[#EF9F27]">"Birbal Kumar"</span>,
                            {"\n"}  role: <span className="text-[#EF9F27]">"Full Stack Developer"</span>,
                            {"\n"}  focus: [
                            {"\n"}    <span className="text-[#EF9F27]">"Web & Mobile Development"</span>,
                            {"\n"}    <span className="text-[#EF9F27]">"AI Engineering"</span>,
                            {"\n"}  ],
                            {"\n"}  stack: [
                            {"\n"}    <span className="text-[#EF9F27]">"React.js & Next.js"</span>,
                            {"\n"}    <span className="text-[#EF9F27]">"React Native"</span>,
                            {"\n"}    <span className="text-[#EF9F27]">"Node.js & express.js"</span>,
                            {"\n"}    <span className="text-[#EF9F27]">"MongoDB & postgresql"</span>,
                            {"\n"}  ],
                            {"\n"}  available: <span className="text-[#5DCAA5]">true</span>,
                            {"\n"}{"}"}
                        </pre>
                    </div>
                </div>
            </section>

            <section>
                <div className="mx-auto grid max-w-6xl items-start gap-16 lg:grid-cols-2">
                    {/* Left column */}
                    <div>
                        <p className="mb-4 text-xs font-semibold tracking-widest text-accent">
                            ABOUT ME
                        </p>

                        <h2 className="font-serif text-4xl leading-tight text-textcolor sm:text-5xl">
                            A little about
                            <br />
                            <span className="text-accent">what I love building.</span>
                        </h2>

                        <div className="mt-6 space-y-4 text-base leading-relaxed text-textcolor">
                            <p>
                                Hey, I'm Birbal! I'm a <span className="text-headingcolor font-bold">Full Stack Developer</span> who enjoys building
                                things for the web and mobile. I like taking an idea and turning
                                it into something useful, from designing the interface to making
                                everything work behind the scenes.
                            </p>

                            <p>
                                I mostly work with <span className="text-headingcolor"> React, React Native, Node.js, and MongoDB. {" "}</span>
                                I'm always curious to learn new things, and lately I've been
                                exploring Next.js, AI Engineering, and tools that help build
                                better and more scalable applications.
                            </p>

                            <p className="italic text-headingcolor">
                                When I'm not coding, you'll probably find me exploring new
                                technology, learning something new, or enjoying a good cup
                                of chai.
                            </p>
                        </div>

                        <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-[#A9B8B3]">
                            {tags.map((tag) => (
                                <span key={tag.label} className="flex items-center gap-1.5">
                                    <span className="text-[#5DCAA5]">{tag.icon}</span>
                                    {tag.label}
                                </span>
                            ))}
                        </div>

                        <a
                            href="#about"
                            className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#2C3B37] px-6 py-3 text-sm font-semibold text-textcolor hover:border-headingcolor hover:text-headingcolor"
                        >
                            More about me
                            <span aria-hidden="true">&#8594;</span>
                        </a>
                    </div>

                    {/* Right column — stat grid */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="rounded-xl border border-[#1F2B27] bg-[#0E1917] p-6"
                            >
                                <p className="font-serif text-3xl text-[#5DCAA5]">{stat.value}</p>
                                <p className="mt-3 text-sm font-semibold text-[#EAF2F0]">{stat.label}</p>
                                <p className="mt-1 text-sm text-[#6B7A76]">{stat.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </section >

    );
}