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

            <section className="py-10">
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
                            Android
                        </button>
                    </div>

                    <div className="text-center">
                        {activeTab === "all" && (
                            <section>
                                <div className="container px-6 py-10 mx-auto">
                                    <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                                        All Project</h1>
                                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
                                        {projects.all.map((project, index) => (
                                            <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: `url(${project.image[index]})` }}>
                                                <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                                    <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">{project.title}
                                                    </h2>
                                                    <div className="flex justify-around">
                                                        <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400">Tech: {project.category}</p>
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
                            <section>
                                <div className="container px-6 py-10 mx-auto">
                                    <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                                        Frontend Projects</h1>
                                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
                                        {projects.frontend.map((project, index) => (
                                            <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: `url(${project.image[index]})` }}>
                                                <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                                    <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">{project.title}
                                                    </h2>
                                                    <div className="flex justify-around">
                                                        <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400">Tech: {project.category}</p>
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
                        {activeTab === "backend" && (
                            <section>
                                <div className="container px-6 py-10 mx-auto">
                                    <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                                        Backend Projects</h1>
                                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
                                        {projects.backend.map((project, index) => (
                                            <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: `url(${project.image[index]})` }}>
                                                <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                                    <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">{project.title}
                                                    </h2>
                                                    <div className="flex justify-around">
                                                        <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400">Tech: {project.category}</p>
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
                        {activeTab === "tools" && (
                            // <section>
                            //     <div className="container px-6 py-10 mx-auto">
                            //         <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                            //             All Project</h1>
                            //         <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
                            //             {projects.android.map((project, index) => (
                            //                 <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: `url(${project.image})` }}>
                            //                     <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                            //                         <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">{project.title}
                            //                         </h2>
                            //                         <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">{project.category}</p>
                            //                     </div>
                            //                 </div>
                            //             ))};
                            //         </div>
                            //     </div>
                            // </section>
                            null
                        )}
                    </div>
                </div>
            </section >




        </>
    );
}
