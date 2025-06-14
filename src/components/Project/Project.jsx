import React from "react";
import { projects } from "../../utils/project";

export default function Project() {
    return (

        <div className="p-6 md:p-10 bg-gray-900 min-h-screen text-white mt-10">
            <h1 className="text-4xl font-extrabold text-center mb-10">
                Recent <span className="text-cyan-500">Projects</span>
            </h1>
            <h1 className="text-4xl font-extrabold mb-10">Web Project</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.WebProject.map((project, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />

                        <div className="p-5">
                            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                            <p className="text-sm text-gray-300 mb-4">{project.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="bg-cyan-600 text-white text-xs font-semibold px-3 py-1 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* App Project */}
            <h1 className="text-4xl font-extrabold mb-10 mt-10">Android Project</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.AndroidProject.map((project, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />

                        <div className="p-5">
                            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                            <p className="text-sm text-gray-300 mb-4">{project.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="bg-cyan-600 text-white text-xs font-semibold px-3 py-1 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
