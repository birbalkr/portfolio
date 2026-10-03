import { featuredProject, otherProjects } from "../data/portfolio";

function ProjectTag({ children }: { children: string }) {
    return (
        <span className="rounded-full bg-[#152420] px-3 py-1 text-xs text-[#A9B8B3]">
            {children}
        </span>
    );
}

function ProjectLink({ href, children }: { href: string; children: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-[#A9B8B3] transition hover:text-[#5DCAA5]"
        >
            {children} <span aria-hidden="true">{"\u2197"}</span>
        </a>
    );
}

export default function ProjectPage() {
    return (
        <main className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
            <header className="max-w-2xl">
                <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-[#5DCAA5]">
                    SELECTED WORK
                </p>
                <h1 className="font-serif text-5xl leading-tight text-[#EAF2F0] sm:text-6xl">
                    Projects I&apos;m proud of.
                </h1>
                <p className="mt-5 text-base leading-relaxed text-[#A9B8B3]">
                    A collection of products, experiments, and applications built to solve
                    real problems and keep learning.
                </p>
            </header>

            <section className="mt-14 overflow-hidden rounded-2xl border border-[#1C6B60] bg-gradient-to-br from-[#0E4F4A] to-[#0A2320] p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-3 text-sm text-[#5DCAA5]">
                    <span>{featuredProject.status}</span>
                    <span aria-hidden="true">{"\u2022"}</span>
                    <span>Featured project</span>
                </div>
                <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
                    <div>
                        <h2 className="font-serif text-6xl font-bold text-[#EAF2F0] md:text-8xl">
                            {featuredProject.title}
                        </h2>
                        <p className="mt-5 max-w-lg text-lg leading-relaxed text-[#B9D6CE]">
                            {featuredProject.summary}
                        </p>
                    </div>
                    <div className="rounded-xl border border-[#1F2B27] bg-[#0E1917] p-6">
                        <h3 className="font-serif text-2xl text-[#EAF2F0]">
                            {featuredProject.name}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-[#A9B8B3]">
                            {featuredProject.description}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                            {featuredProject.tags.map((tag) => (
                                <ProjectTag key={tag}>{tag}</ProjectTag>
                            ))}
                        </div>
                        <div className="mt-6 flex gap-6">
                            <ProjectLink href={featuredProject.source}>Source</ProjectLink>
                            <ProjectLink href={featuredProject.live}>Live demo</ProjectLink>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-16">
                <div className="mb-8">
                    <p className="text-xs font-semibold tracking-[0.3em] text-[#5DCAA5]">
                        MORE BUILDS
                    </p>
                    <h2 className="mt-3 font-serif text-3xl text-[#EAF2F0] sm:text-4xl">
                        Built while learning by doing.
                    </h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                    {otherProjects.map((project) => (
                        <article
                            key={project.title}
                            className="flex flex-col rounded-xl border border-[#1F2B27] bg-[#0E1917] p-7 transition hover:-translate-y-1 hover:border-[#2C6B60]"
                        >
                            <div className="flex-1">
                                <h3 className="font-serif text-3xl text-[#EAF2F0]">
                                    {project.title}
                                </h3>
                                <p className="mt-4 leading-relaxed text-[#A9B8B3]">
                                    {project.description}
                                </p>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <ProjectTag key={tag}>{tag}</ProjectTag>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-8 flex gap-6">
                                <ProjectLink href={project.source}>Source</ProjectLink>
                                {project.live && <ProjectLink href={project.live}>Live demo</ProjectLink>}
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}