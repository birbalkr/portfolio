import { useState } from "react";

const CATEGORIES = [
    { id: "all", label: "All" },
    { id: "fullstack", label: "Full Stack" },
    { id: "web", label: "Web" },
    { id: "backend", label: "Backend" },
    { id: "android", label: "Android" },
];

// Add more projects here as you build them — same shape each time.
const PROJECTS = [
    {
        id: "skymart",
        name: "SkyMart",
        category: "fullstack",
        description:
            "An e-commerce web app with product browsing, cart, and authentication. Built with React 19, Vite, and a dedicated ShopAPI module.",
        tags: ["React", "Vite", "Tailwind CSS", "React Router"],
        source: "https://github.com/adityakr1",
        live: "https://skymart-project.netlify.app/",
    },
    {
        id: "shopping-app",
        name: "Shopping App",
        category: "fullstack",
        description:
            "An e-commerce web app with RESTful product management APIs, a React + Vite frontend, and MySQL-backed storage.",
        tags: ["Java Spring Boot", "React", "MySQL"],
        source: "https://github.com/adityakr1",
        live: null,
    },
    {
        id: "crypto-tracker",
        name: "Crypto Coin Tracker",
        category: "web",
        description:
            "Real-time cryptocurrency tracker with live prices, market cap, and interactive Chart.js visualizations.",
        tags: ["React", "Chart.js", "Redux", "Ant Design"],
        source: "https://github.com/adityakr1",
        live: "https://rococo-valkyrie-c74458.netlify.app/",
    },
    {
        id: "farm-to-market",
        name: "Farm-to-Market Crop Tracking System",
        category: "fullstack",
        description:
            "Hackathon project (Hack Horizon 2.0) — a crop traceability platform connecting farmers, transporters, warehouses, and retailers with QR-based batch tracking.",
        tags: ["React", "Node.js", "Express.js", "MongoDB"],
        source: "https://github.com/adityakr1",
        live: null,
    },
    // No Android or standalone Backend projects yet — add them here in the
    // same shape (category: "android" or category: "backend") once you have one.
];

function TechTag({ children }) {
    return (
        <span className="rounded-full bg-[#152420] px-3 py-1 text-xs text-[#A9B8B3]">
            {children}
        </span>
    );
}

function CategoryPill({ category }) {
    const found = CATEGORIES.find((c) => c.id === category);
    return (
        <span className="rounded-full border border-[#1D9E75] px-3 py-1 text-xs font-semibold text-[#5DCAA5]">
            {found ? found.label : category}
        </span>
    );
}

function ProjectCard({ project }) {
    return (
        <div className="rounded-xl border border-[#1F2B27] bg-[#0E1917] p-6">
            <div className="mb-3 flex items-start justify-between gap-3">
                <h4 className="font-serif text-2xl text-[#EAF2F0]">{project.name}</h4>
                <CategoryPill category={project.category} />
            </div>
            <p className="text-sm leading-relaxed text-[#A9B8B3]">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <TechTag key={tag}>{tag}</TechTag>
                ))}
            </div>
            <div className="mt-5 flex items-center gap-5 text-sm">
                {project.source && (
                    <a href={project.source} className="text-[#A9B8B3] hover:text-[#5DCAA5]">
                        Source
                    </a>
                )}
                {project.live && (
                    <a href={project.live} className="text-[#A9B8B3] hover:text-[#5DCAA5]">
                        Live
                    </a>
                )}
            </div>
        </div>
    );
}

export default function Projects() {
    const [active, setActive] = useState("all");

    const filtered =
        active === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

    return (
        <section id="projects" className="bg-[#0A1613] px-6 py-24">
            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <div className="mb-10">
                    <p className="mb-4 text-xs font-semibold tracking-widest text-[#5DCAA5]">
                        SELECTED WORK
                    </p>
                    <h2 className="font-serif text-4xl leading-tight text-[#EAF2F0] sm:text-5xl">
                        Projects I'm proud of.
                    </h2>
                    <p className="mt-3 max-w-md text-base text-[#A9B8B3]">
                        Web, full stack, and hackathon builds — filter by type below.
                    </p>
                </div>

                {/* Filter tabs */}
                <div className="mb-10 flex flex-wrap gap-3">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActive(cat.id)}
                            className={`rounded-full border px-5 py-2 text-sm font-semibold ${active === cat.id
                                    ? "border-[#1D9E75] bg-[#1D9E75] text-[#04342C]"
                                    : "border-[#2C3B37] text-[#A9B8B3] hover:border-[#5DCAA5] hover:text-[#5DCAA5]"
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Project grid */}
                {filtered.length > 0 ? (
                    <div className="grid gap-6 sm:grid-cols-2">
                        {filtered.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                ) : (
                    <p className="rounded-xl border border-dashed border-[#1F2B27] p-10 text-center text-sm text-[#6B7A76]">
                        No projects in this category yet — check back soon.
                    </p>
                )}
            </div>
        </section>
    );
}