// src/data/projects.js

import { JavaScript1, JavaScript2, JavaScript3, JavaScript4 } from "../assets";



export const projects = {
    all: [
        {
            title: 'Best website collections',
            category: 'Website',
            image: JavaScript1, // imported at the top
        },
        {
            title: 'Creative UI designs',
            category: 'UI/UX',
            image: JavaScript1, // update this
        },
        {
            title: 'React app showcase',
            category: 'React',
            image: JavaScript1,
        },
    ],
    frontend: [
        {
            title: 'Best website collections',
            category: 'Website',
            image: JavaScript2, // imported at the top
        },
        {
            title: 'Creative UI designs',
            category: 'UI/UX',
            image: JavaScript1, // update this
        },
        {
            title: 'React app showcase',
            category: 'React',
            image: JavaScript2,
        },
    ],
    backend: [
        {
            title: 'Best website collections',
            category: 'Website',
            image: JavaScript3, // imported at the top
        },
        {
            title: 'Creative UI designs',
            category: 'UI/UX',
            image: JavaScript3, // update this
        },
        {
            title: 'React app showcase',
            category: 'React',
            image: JavaScript1,
        },
    ],
    android: [
        {
            title: 'Best website collections',
            category: 'Website',
            image: JavaScript4, // imported at the top
        },
        {
            title: 'Creative UI designs',
            category: 'UI/UX',
            image: JavaScript1, // update this
        },
        {
            title: 'React app showcase',
            category: 'React',
            image: JavaScript4,
        },
    ],
    tool: [],
    Recentprojects: [
        {
            title: "devops-docker-k8s-practice",
            description:
                "A hands-on DevOps learning repository focused on Docker and Kubernetes. Includes containerization examples, orchestration with Kubernetes, and practice projects to build real-world skills.",
            tech: ["Docker", "Kubernetes", "GitHub Actions"],
            live: "",
            code: "https://github.com/birbalkr/devops-docker-kubernetes-practice.git",
        },
    ],

}


export const projectsww = {

    items: [
        {
            id: "1",
            title: "Own Portfolio",
            // img: port1,
            url: "https://birbalkr.netlify.app/",
            height: 400,
        },
        {
            id: "2",
            title: "Coinranking",
            description:
                "Real-time cryptocurrency price tracker with live updates and historical data.",
            // img: crypto1,
            github: "https://github.com/birbalkr/Crypto",
            url: "https://rococo-valkyrie-c74458.netlify.app/",
            height: 500,
        },
        {
            id: "3",
            title: "Only JavaScript Project",
            description: "Another awesome project description.",
            // img: JavaScript1,
            // video: '',
            github: "https://github.com/birbalkr/JavaScript",
            url: "https://strong-cat-3df4df.netlify.app/",
            height: 550,
        },


        // {
        //     title: "React-Native-Development & Roadmap",
        //     description: "Another awesome project description.",
        //     img: [project2, project1, mobile],
        //     video: movie,
        //     github: "https://github.com/birbalkr/React-Native-Development-Roadmap",
        // },
        // {
        //     title: " Full-Stack-Development & Roadmap",
        //     description: "Another awesome project description.",
        //     img: [project2, project1, mobile],
        //     video: movie,
        //     github: "https://github.com/birbalkr/Full-Stack-Development-Roadmap",
        // }
    ],
};

// list

// 1. Movies-App
// 2. Crypto
// 3.Project-3D
// 4.Shopping-Online
// 5. apiforflutter
// 6.Flutter-App
// 7.Android-App-with-Kotlin
// 8.Android-App
