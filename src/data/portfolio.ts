export interface Stat {
    value: string;
    label: string;
    sub: string;
}

export interface Tag {
    icon: string;
    label: string;
}

export interface Project {
    title: string;
    description: string;
    tags: string[];
    source: string;
    live?: string;
}

export interface FeaturedProject {
    status: string;
    title: string;
    summary: string;
    name: string;
    description: string;
    tags: string[];
    source: string;
    live: string;
}

export const stats: Stat[] = [
    { value: "3+", label: "Projects built", sub: "Shopping app to a full crop-tracking system" },
    { value: "1", label: "Hackathon", sub: "Hack Horizon 2.0, ARKA JAIN University" },
    { value: "15+", label: "Tools & technologies", sub: "React to Spring Boot to MongoDB" },
    { value: "\u221E", label: "Curiosity", sub: "Always learning, always building" },
];

export const tags: Tag[] = [
    { icon: "\u{1F4CD}", label: "Gaya, India" },
    { icon: "\u2615", label: "Fueled by chai" },
    { icon: "</>", label: "Open to work" },
];

export const featuredProject: FeaturedProject = {
    status: "Live \u00b7 React \u00b7 Vite",
    title: "SkyMart",
    summary: "A full shopping flow, sign-in to checkout, in one lightweight app.",
    name: "SkyMart \u2013 E-commerce web app",
    description:
        "Built with React 19 and Vite, with dedicated pages for Home, Shop, Product, Cart, and About, Context-based cart/session state, and a ShopAPI module for data fetching.",
    tags: ["React", "Vite", "Tailwind CSS", "React Router"],
    source: "https://github.com/birbalkr",
    live: "https://skymart-project.netlify.app/",
};

export const otherProjects: Project[] = [
    {
        title: "Shopping App",
        description:
            "An e-commerce web app with RESTful product management APIs and a React + Vite frontend.",
        tags: ["Java Spring Boot", "React", "MySQL"],
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
