// src/data/projects.js
import { JavaScript1, JavaScript2, JavaScript3, JavaScript, javascript0, crypto, crypto1, crypto2, crypto3, gemini, gemini1, gemini2, gemini3 } from "../assets";


export const projects = {
    all: [
        {
            id: 1,
            title: 'Project Using JavaScript',
            category: 'JavaScript',
            image: [javascript0, JavaScript1, JavaScript2, JavaScript3, JavaScript], // imported at the top
            url: "https://strong-cat-3df4df.netlify.app/",
            projectDetails: {
                description: "This project includes small, interactive web features built with JavaScript, HTML, and CSS. It demonstrates basic concepts like DOM manipulation and event handling. Perfect for beginners to explore how JavaScript works in the browser.",
                techStack: ["JavaScript", "HTML", "CSS"],

            },
            installation: {
                frontend: {
                    clone: "git clone https://github.com/birbalkr/JavaScript.git",
                    changedir: "cd JavaScript",
                    run: "Open the index.html file in your browser to view the project."
                }
            },
        },
        {
            id: 2,
            title: 'Crypto Tracker',
            category: 'React',
            image: [crypto, crypto1, crypto2, crypto3], // imported at the top
            url: "https://rococo-valkyrie-c74458.netlify.app/",
            projectDetails: {
                description:
                    "A real-time cryptocurrency price tracker that provides live updates, historical data, and detailed information about various cryptocurrencies. Built with React, this project showcases the use of APIs to fetch and display dynamic data.",
                techStack: ["React", "Tailwind CSS", "Chart.js", "Millify", "Redux", "Ant Design", "Axios"],

            },
            installation: {
                frontend: {
                    clone: "https://github.com/birbalkr/Crypto.git",
                    changedir: "cd Crypto",
                    dependencies: "npm install",
                    run: "npm run dev"
                }
            },
        },
        {
            id: 3,
            title: 'Chat bot using Gemini AI',
            category: 'Full-Stack',
            image: [gemini, gemini1, gemini2, gemini3],
            url: "https://rococo-valkyrie-c74458.netlify.app/",
            projectDetails: {
                description:
                    "A chatbot application that leverages the Gemini AI API to provide intelligent responses and insights. Built with a React frontend and a Node.js/Express backend, the app features real-time messaging, user authentication, and a responsive design.",
                techStack: [
                    "React",
                    "Tailwind CSS",
                    "Axios",
                    "Spring Boot",
                    "Gemini AI API",
                    "REST API"
                ]
            },
            installation: {
                frontend: {
                    clone: "https://github.com/birbalkr/Chat-bot.git",
                    changedir: "cd gemini-chat-frontend",
                    dependencies: "npm install",
                    run: "npm run dev"
                },
                backend: {
                    backend_clone: "https://github.com/birbalkr/Chat-bot.git",
                    backend_changedir: "cd gemini-chat",
                    backend_dependencies: "./mvnw clean install",
                    backend_run: "./mvnw spring-boot:run",
                    backend_envSetup: "Add your Gemini API key to the `/application.properties` file as GEMINI_API_KEY=your_api_key"
                },
                Docker: {
                    docker_clone: "docker pull codeadmin870/chat-bot:02",
                    docker_run: "docker run -p 8080:8080 codeadmin870/chat-bot:02",
                }
            },
        }
    ],
    frontend: [
        {
            id: 1,
            title: 'Project Using JavaScript',
            category: 'JavaScript',
            image: [javascript0, JavaScript1, JavaScript2, JavaScript3, JavaScript], // imported at the top
            url: "https://strong-cat-3df4df.netlify.app/",
            projectDetails: {
                description: "This project includes small, interactive web features built with JavaScript, HTML, and CSS. It demonstrates basic concepts like DOM manipulation and event handling. Perfect for beginners to explore how JavaScript works in the browser.",
                techStack: ["JavaScript", "HTML", "CSS"],

            },
            installation: {
                frontend: {
                    clone: "git clone https://github.com/birbalkr/JavaScript.git",
                    changedir: "cd JavaScript",
                    run: "Open the index.html file in your browser to view the project."
                }
            },
        },
        {
            id: 2,
            title: 'Crypto Tracker',
            category: 'React',
            image: [crypto, crypto1, crypto2, crypto3], // imported at the top
            url: "https://rococo-valkyrie-c74458.netlify.app/",
            projectDetails: {
                description:
                    "A real-time cryptocurrency price tracker that provides live updates, historical data, and detailed information about various cryptocurrencies. Built with React, this project showcases the use of APIs to fetch and display dynamic data.",
                techStack: ["React", "Tailwind CSS", "Chart.js", "Millify", "Redux", "Ant Design", "Axios"],

            },
            installation: {
                frontend: {
                    clone: "https://github.com/birbalkr/Crypto.git",
                    changedir: "cd Crypto",
                    dependencies: "npm install",
                    run: "npm run dev"
                }
            },
        },
    ],
    backend: [
        {
            id: 3,
            title: 'Chat bot using Gemini AI',
            category: 'Full-Stack',
            image: [gemini, gemini1, gemini2, gemini3],
            url: "https://rococo-valkyrie-c74458.netlify.app/",
            projectDetails: {
                description:
                    "A chatbot application that leverages the Gemini AI API to provide intelligent responses and insights. Built with a React frontend and a Node.js/Express backend, the app features real-time messaging, user authentication, and a responsive design.",
                techStack: [
                    "React",
                    "Tailwind CSS",
                    "Axios",
                    "Spring Boot",
                    "Gemini AI API",
                    "REST API"
                ]
            },
            installation: {
                frontend: {
                    clone: "https://github.com/birbalkr/Chat-bot.git",
                    changedir: "cd gemini-chat-frontend",
                    dependencies: "npm install",
                    run: "npm run dev"
                },
                backend: {
                    backend_clone: "https://github.com/birbalkr/Chat-bot.git",
                    backend_changedir: "cd gemini-chat",
                    backend_dependencies: "./mvnw clean install",
                    backend_run: "./mvnw spring-boot:run",
                    backend_envSetup: "Add your Gemini API key to the `/application.properties` file as GEMINI_API_KEY=your_api_key"
                },
                Docker: {
                    docker_clone: "docker pull codeadmin870/chat-bot:02",
                    docker_run: "docker run -p 8080:8080 codeadmin870/chat-bot:02",
                }
            },
        }
    ],
    android: [
        {
            id: 1,
            title: 'Best website collections',
            category: 'Website',
            image: JavaScript, // imported at the top
        },
        {
            id: 2,
            title: 'Creative UI designs',
            category: 'UI/UX',
            image: JavaScript1, // update this
        },
        {
            id: 3,
            title: 'React app showcase',
            category: 'React',
            image: JavaScript,
        },
    ],
    Recentprojects: [
        {
            title: "devops-docker-k8s-practice",
            description:
                "A hands-on DevOps learning repository focused on Docker and Kubernetes. Includes containerization examples, orchestration with Kubernetes, and practice projects to build real-world skills.",
            tech: ["Docker", "Kubernetes", "GitHub Actions"],
            live: "",
            code: "https://github.com/birbalkr/devops-docker-kubernetes-practice.git",
        },
        {
            title: "Android Fullstack",
            description:
                "A complete guide to building Android applications from scratch. Covers fundamentals to advanced concepts with practical projects, Jetpack Compose UI, Firebase integration, and Spring Boot backend.",
            tech: ["Android", "Kotlin", "Java", "Jetpack Compose", "Firebase", "Spring Boot"],
            live: "",
            code: "https://github.com/birbalkr/learn-android-app-development.git",
        },

    ],

}