const skillGroups = [
    {
        title: "Frontend",
        skills: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "Vite"],
    },
    {
        title: "Backend",
        skills: ["Java", "Spring Boot", "Node.js", "REST APIs"],
    },
    {
        title: "Database & tools",
        skills: ["MySQL", "MongoDB", "Git", "Docker", "Linux"],
    },
];

export default function SkillsPage() {
    return (
        <main className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
            <header className="max-w-2xl">
                <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-[#5DCAA5]">
                    MY TOOLKIT
                </p>
                <h1 className="font-serif text-5xl leading-tight text-[#EAF2F0] sm:text-6xl">
                    Skills that turn ideas into products.
                </h1>
                <p className="mt-5 text-base leading-relaxed text-[#A9B8B3]">
                    The technologies I use to design responsive interfaces, build reliable
                    APIs, and ship complete web applications.
                </p>
            </header>

            <section className="mt-14 grid gap-5 md:grid-cols-3">
                {skillGroups.map((group, index) => (
                    <article
                        key={group.title}
                        className="rounded-2xl border border-[#1F2B27] bg-[#0E1917] p-7 transition hover:-translate-y-1 hover:border-[#2C6B60]"
                    >
                        <span className="text-sm font-mono text-[#5DCAA5]">
                            0{index + 1}
                        </span>
                        <h2 className="mt-8 font-serif text-3xl text-[#EAF2F0]">
                            {group.title}
                        </h2>
                        <div className="mt-6 flex flex-wrap gap-2">
                            {group.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-full bg-[#152420] px-3 py-1.5 text-sm text-[#A9B8B3]"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </section>
        </main>
    );
}
