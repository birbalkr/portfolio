
import { NavLink } from "react-router";
import gsap from "gsap";
import { useEffect, useRef } from "react";

function IconGithub(props) {
    return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.35-3.88-1.35-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.44-2.69 5.42-5.26 5.7.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
        </svg>
    );
}


function TechTag({ children }) {
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


    const stats = [
        { value: "3+", label: "Projects built", sub: "Shopping app to a full crop-tracking system" },
        { value: "1", label: "Hackathon", sub: "Hack Horizon 2.0, ARKA JAIN University" },
        { value: "15+", label: "Tools & technologies", sub: "React to Spring Boot to MongoDB" },
        { value: "\u221E", label: "Curiosity", sub: "Always learning, always building" },
    ];

    const tags = [
        { icon: "\u{1F4CD}", label: "Gaya, India" },
        { icon: "\u2615", label: "Fueled by chai" },
        { icon: "</>", label: "Open to work" },
    ];

    const otherProjects = [
        {
            title: "Shopping App",
            description:
                "An e-commerce web app with RESTful product management APIs and a React + Vite frontend.",
            tags: ["Java Spring Boot", "React", "MySQL"],
            live: null,
            source: "https://github.com/birbalkr",
        },
        {
            title: "Crypto Coin Tracker",
            description:
                "Real-time cryptocurrency tracker with live prices, market cap, and interactive charts.",
            tags: ["React", "Chart.js", "Redux"],
            live: "https://rococo-valkyrie-c74458.netlify.app/",
            source: "https://github.com/birbal",
        },
    ];

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
                                <i class="fa-brands fa-leetcode"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/birbal-kumar-697381260"
                                aria-label="LinkedIn"
                                className="text-[#A9B8B3] hover:text-[#5DCAA5]"
                            >
                                <i class="fa-brands fa-linkedin-in"></i>
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
                        <p className="text-sm text-[#5DCAA5]">Live &middot; React &middot; Vite</p>
                        <h3 className="mt-4 font-serif text-6xl font-bold text-[#EAF2F0] md:text-7xl">
                            SkyMart
                        </h3>
                        <p className="mt-3 max-w-md text-lg text-[#B9D6CE]">
                            A full shopping flow, sign-in to checkout, in one lightweight app.
                        </p>

                        {/* Info card */}
                        <div className="mt-10 max-w-lg rounded-xl border border-[#1F2B27] bg-[#0E1917] p-6 md:absolute md:right-10 md:top-10 md:mt-0">
                            <h4 className="font-serif text-2xl text-[#EAF2F0]">
                                SkyMart &ndash; E-commerce web app
                            </h4>
                            <p className="mt-3 text-sm leading-relaxed text-[#A9B8B3]">
                                Built with React 19 and Vite, with dedicated pages for Home, Shop,
                                Product, Cart, and About, Context-based cart/session state, and a
                                ShopAPI module for data fetching.
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                <TechTag>React</TechTag>
                                <TechTag>Vite</TechTag>
                                <TechTag>Tailwind CSS</TechTag>
                                <TechTag>React Router</TechTag>
                            </div>
                            <div className="mt-5 flex items-center gap-5 text-sm">
                                <a
                                    href="https://github.com/birbalkr"
                                    className="flex items-center gap-1.5 text-[#A9B8B3] hover:text-[#5DCAA5]"
                                >
                                    Source
                                </a>
                                <a
                                    href="https://skymart-project.netlify.app/"
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