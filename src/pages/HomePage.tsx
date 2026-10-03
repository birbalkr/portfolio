
import { NavLink } from "react-router";
import gsap from "gsap";
import { useEffect, useRef, type ReactNode } from "react";
import { featuredProject, otherProjects, stats, tags } from "../data/portfolio";

function TechTag({ children }: { children: ReactNode }) {
    return (
        <span className="rounded-full bg-[#152420] px-3 py-1 text-xs text-[#A9B8B3]">
            {children}
        </span>
    );
}

export default function HomePage() {

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

        <section>
            <section ref={container}>
                <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-20 lg:grid-cols-2">
                    {/* Left column */}
                    <div className="hero">
                        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#1D9E75] bg-[#0E4F4A]/40 px-4 py-1.5 text-sm text-[#5DCAA5]">
                            Open to full stack opportunities
                        </div>

                        <h1 className="font-serif text-5xl leading-tight text-[#EAF2F0]">
                            Hi, I'm <span className="text-[#5DCAA5]">Birbal</span>.
                        </h1>
                        <h1 className="font-serif text-5xl leading-tight text-[#6B7A76]">
                            I build the web.
                        </h1>

                        <p className="mt-6 max-w-lg text-base leading-relaxed text-[#A9B8B3]">
                            Full stack developer specializing in{" "}
                            <span className="font-semibold text-[#EAF2F0]">React, Spring Boot,</span> and{" "}
                            <span className="font-semibold text-[#EAF2F0]">Node.js</span>. I care about
                            clean APIs, responsive UI, and shipping projects that actually work.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <a
                                href="#projects"
                                className="flex items-center gap-2 rounded-full bg-[#1D9E75] px-6 py-3 text-sm font-semibold text-[#04342C] hover:bg-[#5DCAA5]"
                            >
                                View my work
                                <span aria-hidden="true">&#8594;</span>
                            </a>
                            <NavLink
                                to="/about"
                                className="rounded-full border border-[#2C3B37] px-6 py-3 text-sm font-semibold text-[#EAF2F0] hover:border-[#5DCAA5] hover:text-[#5DCAA5]"
                            >
                                About me
                            </NavLink>
                        </div>

                        <div className="mt-10 flex flex-wrap items-center gap-6">
                            <a
                                href="https://github.com/birbalkr"
                                aria-label="GitHub"
                                className="text-[#A9B8B3] hover:text-[#5DCAA5]"
                            >
                                <i className="fa-brands fa-github size-3"></i>
                            </a>
                            <a href="https://leetcode.com/u/Hq4okMbx7u/" aria-label="leetcode" className="text-[#A9B8B3] hover:text-[#5DCAA5]">
                                <i className="fa-brands fa-leetcode"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/birbal-kumar-697381260"
                                aria-label="LinkedIn"
                                className="text-[#A9B8B3] hover:text-[#5DCAA5]"
                            >
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>

                            <span className="h-5 w-px bg-[#2C3B37]" />

                            <p className="text-sm text-[#A9B8B3]">
                                <span className="font-bold text-[#EAF2F0]">3+</span> Projects
                            </p>
                            <p className="text-sm text-[#A9B8B3]">
                                <span className="font-bold text-[#EAF2F0]">1</span> Hackathon
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
                            {"\n"}  stack: [
                            {"\n"}    <span className="text-[#EF9F27]">"React"</span>,
                            {"\n"}    <span className="text-[#EF9F27]">"Spring Boot"</span>,
                            {"\n"}    <span className="text-[#EF9F27]">"Node.js"</span>,
                            {"\n"}    <span className="text-[#EF9F27]">"MySQL"</span>,
                            {"\n"}  ],
                            {"\n"}  available: <span className="text-[#5DCAA5]">true</span>,
                            {"\n"}
                            {"}"}
                        </pre>
                    </div>
                </div>
            </section>

            <section>
                <div className="mx-auto grid max-w-6xl items-start gap-16 lg:grid-cols-2">
                    {/* Left column */}
                    <div>
                        <p className="mb-4 text-xs font-semibold tracking-widest text-[#5DCAA5]">
                            ABOUT ME
                        </p>

                        <h2 className="font-serif text-4xl leading-tight text-[#EAF2F0] sm:text-5xl">
                            Bringing ideas to life
                            <br />
                            through <span className="text-[#5DCAA5]">code and clarity.</span>
                        </h2>

                        <div className="mt-6 space-y-4 text-base leading-relaxed text-[#A9B8B3]">
                            <p>
                                I'm a full stack developer who enjoys building things end to end — from
                                REST APIs in Spring Boot to responsive interfaces in React. I care about
                                clean code and interfaces that just make sense.
                            </p>
                            <p>
                                I'm always picking up new tools — lately that's meant going deeper into
                                Docker, Linux, and React Native, alongside the stack I already build with
                                daily.
                            </p>
                            <p className="italic text-[#6B7A76]">
                                {/* Placeholder — swap in your real interests */}
                                Outside of code, I'm figuring out what goes here — add a line about what
                                you do when you're not building.
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
                            className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#2C3B37] px-6 py-3 text-sm font-semibold text-[#EAF2F0] hover:border-[#5DCAA5] hover:text-[#5DCAA5]"
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

            <section>
                <div className="mx-auto max-w-6xl pt-5">
                    {/* Header */}
                    <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                        <div>
                            <p className="mb-4 text-xs font-semibold tracking-widest text-[#5DCAA5]">
                                SELECTED WORK
                            </p>
                            <h2 className="font-serif text-4xl leading-tight text-[#EAF2F0] sm:text-5xl">
                                Projects I'm proud of.
                            </h2>
                            <p className="mt-3 max-w-md text-base text-[#A9B8B3]">
                                Hackathon builds, personal projects, and things I shipped to learn by
                                doing.
                            </p>
                        </div>
                        <a
                            href="https://github.com/birbalkr"
                            className="flex items-center gap-2 text-sm text-[#A9B8B3] hover:text-[#5DCAA5]"
                        >
                            All projects
                            <span aria-hidden="true">&#8594;</span>
                        </a>
                    </div>

                    {/* Featured project */}
                    <div className="relative mb-8 overflow-hidden rounded-2xl border border-[#1C6B60] bg-gradient-to-br from-[#0E4F4A] to-[#0A2320] p-10 md:p-14">
                        <p className="text-sm text-[#5DCAA5]">{featuredProject.status}</p>
                        <h3 className="mt-4 font-serif text-6xl font-bold text-[#EAF2F0] md:text-7xl">
                            {featuredProject.title}
                        </h3>
                        <p className="mt-3 max-w-md text-lg text-[#B9D6CE]">
                            {featuredProject.summary}
                        </p>

                        {/* Info card */}
                        <div className="mt-10 max-w-lg rounded-xl border border-[#1F2B27] bg-[#0E1917] p-6 md:absolute md:right-10 md:top-10 md:mt-0">
                            <h4 className="font-serif text-2xl text-[#EAF2F0]">
                                {featuredProject.name}
                            </h4>
                            <p className="mt-3 text-sm leading-relaxed text-[#A9B8B3]">
                                {featuredProject.description}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {featuredProject.tags.map((tag) => (
                                    <TechTag key={tag}>{tag}</TechTag>
                                ))}
                            </div>
                            <div className="mt-5 flex items-center gap-5 text-sm">
                                <a
                                    href={featuredProject.source}
                                    className="flex items-center gap-1.5 text-[#A9B8B3] hover:text-[#5DCAA5]"
                                >
                                    Source
                                </a>
                                <a
                                    href={featuredProject.live}
                                    className="flex items-center gap-1.5 text-[#A9B8B3] hover:text-[#5DCAA5]"
                                >
                                    Live
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Other projects */}
                    <div className="grid gap-6 sm:grid-cols-2">
                        {otherProjects.map((project) => (
                            <div
                                key={project.title}
                                className="rounded-xl border border-[#1F2B27] bg-[#0E1917] p-6"
                            >
                                <h4 className="font-serif text-2xl text-[#EAF2F0]">{project.title}</h4>
                                <p className="mt-3 text-sm leading-relaxed text-[#A9B8B3]">
                                    {project.description}
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <TechTag key={tag}>{tag}</TechTag>
                                    ))}
                                </div>
                                <div className="mt-5 flex items-center gap-5 text-sm">
                                    <a
                                        href={project.source}
                                        className="text-[#A9B8B3] hover:text-[#5DCAA5]"
                                    >
                                        Source
                                    </a>
                                    {project.live && (
                                        <a href={project.live} className="text-[#A9B8B3] hover:text-[#5DCAA5]">
                                            Live
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>

    );
}