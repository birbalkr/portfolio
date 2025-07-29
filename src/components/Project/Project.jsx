import React, { useState } from "react";
import { projects } from "../../utils/project";
import { useNavigate } from "react-router-dom";

export default function ProjectCarousel() {
    const [activeTab, setActiveTab] = useState("all");
    const navigate = useNavigate();

    const handleViewDetails = (project) => {
        navigate(`/projectdetails`, { state: { project } });
    };

    return (
        <>


            {/* <section className="bg-background text-text p-10 min-h-16">
                <h1 className="text-4xl font-bold text-title mb-6">Hi, I’m a Developer</h1>
                <p className="text-lg mb-8 max-w-xl">
                    I specialize in building responsive, accessible, and visually engaging web apps.
                </p>
                <button className="bg-primary hover:bg-hover text-white px-6 py-3 rounded transition">
                    View Projects
                </button>
            </section> */}

            <section className="py-10 bg-gray-100">
                <div className="mx-auto px-4 mt-12">
                    <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>


                    <div className="flex justify-center space-x-4 mb-6">
                        <button
                            onClick={() => setActiveTab("all")}
                            className={`px-4 py-2 rounded ${activeTab === "all"
                                ? "bg-blue-500 text-white"
                                : "bg-white text-gray-700 shadow"
                                }`}
                        >
                            All
                        </button>
                        <button
                            onClick={() => setActiveTab("frontend")}
                            className={`px-4 py-2 rounded ${activeTab === "frontend"
                                ? "bg-blue-500 text-white"
                                : "bg-white text-gray-700 shadow"
                                }`}
                        >
                            Frontend
                        </button>
                        <button
                            onClick={() => setActiveTab("backend")}
                            className={`px-4 py-2 rounded ${activeTab === "backend"
                                ? "bg-blue-500 text-white"
                                : "bg-white text-gray-700 shadow"
                                }`}
                        >
                            Backend
                        </button>
                        <button
                            onClick={() => setActiveTab("tools")}
                            className={`px-4 py-2 rounded ${activeTab === "tools"
                                ? "bg-blue-500 text-white"
                                : "bg-white text-gray-700 shadow"
                                }`}
                        >
                            Tools
                        </button>
                    </div>

                    <div className="text-center text-gray-700">
                        {activeTab === "all" && (
                            <section class="bg-white dark:bg-gray-900">
                                <div class="container px-6 py-10 mx-auto">
                                    <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                                        All Project</h1>
                                    <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
                                        {projects.all.map((project, index) => (
                                            <div class="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: `url(${project.image[0]})` }}>
                                                <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                                    <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">{project.title}
                                                    </h2>
                                                    <div className="flex justify-around">
                                                        <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400">Tech: {project.category}</p>
                                                        <button
                                                            onClick={() => handleViewDetails(project)}
                                                            className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 cursor-pointer "
                                                        >
                                                            View Details
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))};
                                    </div>
                                </div>
                            </section>
                        )}
                        {activeTab === "frontend" && (
                            <section class="bg-white dark:bg-gray-900">
                                <div class="container px-6 py-10 mx-auto">
                                    <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                                        All Project</h1>
                                    <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
                                        {projects.frontend.map((project, index) => (
                                            <div class="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: `url(${project.image})` }}>
                                                <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                                    <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">{project.title}
                                                    </h2>
                                                    <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">{project.category}</p>
                                                </div>
                                            </div>
                                        ))};
                                    </div>
                                </div>
                            </section>
                        )}
                        {activeTab === "backend" && (
                            <section class="bg-white dark:bg-gray-900">
                                <div class="container px-6 py-10 mx-auto">
                                    <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                                        All Project</h1>
                                    <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
                                        {projects.backend.map((project, index) => (
                                            <div class="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: `url(${project.image})` }}>
                                                <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                                    <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">{project.title}
                                                    </h2>
                                                    <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">{project.category}</p>
                                                </div>
                                            </div>
                                        ))};
                                    </div>
                                </div>
                            </section>
                        )}
                        {activeTab === "tools" && (
                            <section class="bg-white dark:bg-gray-900">
                                <div class="container px-6 py-10 mx-auto">
                                    <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                                        All Project</h1>
                                    <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
                                        {projects.android.map((project, index) => (
                                            <div class="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: `url(${project.image})` }}>
                                                <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                                    <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">{project.title}
                                                    </h2>
                                                    <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">{project.category}</p>
                                                </div>
                                            </div>
                                        ))};
                                    </div>
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </section >




        </>
    );
}
