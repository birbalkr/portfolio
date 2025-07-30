import { b } from 'motion/react-client';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { docker } from '../../assets';

function ProjectDetailsPage() {
    const { state } = useLocation();
    const project = state?.project;
    const [zoomedImage, setZoomedImage] = useState(null);

    if (!project) {
        return <div className="p-6 text-red-500">No project data found.</div>;
    }

    const { title, url, image, projectDetails, installation } = project;
    const { description, techStack } = projectDetails;
    const { clone, changedir, run, dependencies } = installation.frontend || {};
    const { backend_clone, backend_changedir, backend_dependencies, backend_run, backend_envSetup } = installation.backend || {};
    const { docker_clone, docker_run } = installation.Docker || {};

    const openZoom = (img) => setZoomedImage(img);
    const closeZoom = () => setZoomedImage(null);

    return (
        <div className="max-w-3/5 mx-auto p-6 text-white mt-14">
            {/* Modal for Zoomed Image */}
            {zoomedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                    <div className="relative">
                        <button
                            className="absolute top-2 right-2 text-black text-5xl font-bold"
                            onClick={closeZoom}
                        >
                            ✕
                        </button>
                        <img src={zoomedImage} alt="Zoomed" className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-xl" />
                    </div>
                </div>
            )}

            {/* Project Title */}
            <h1 className="text-3xl font-bold mb-4">
                {title} <Link className="ml-2 text-blue-400 underline" to={url} target="_blank">🌐</Link>
            </h1>
            <span className="text-gray-400">{techStack.join(", ")}</span>

            {/* Project Description */}
            <p className="text-gray-700 mb-6">{description}</p>

            {/* Main Project Image */}
            <div className="mb-6 cursor-zoom-in" onClick={() => openZoom(image[0])}>
                <img src={image[0]} alt={title} className="w-full h-auto rounded-lg shadow-md transition-transform hover:scale-105 duration-200" />
            </div>

            {/* Installation Instructions */}
            <div className="bg-white p-6 rounded shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-black">Installation</h2>
                <ol className="list-decimal list-inside text-gray-800 space-y-2">
                    <li>Clone the repository: <code className="bg-gray-100 px-2 py-1 rounded">{clone}</code></li>
                    <li>Navigate to the project directory: <code className="bg-gray-100 px-2 py-1 rounded">{changedir}</code></li>
                    {dependencies && (
                        <li>Install dependencies: <code className="bg-gray-100 px-2 py-1 rounded">{dependencies}</code></li>
                    )}
                    <li>Run the development server: <code className="bg-gray-100 px-2 py-1 rounded">{run}</code></li>
                </ol>
                {/* Backend Installation if available */}
                {installation.backend ? (
                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-black">Backend Installation</h3>
                        <ol className="list-decimal list-inside text-gray-800 space-y-2">
                            <li>Clone the backend repository: <code className="bg-gray-100 px-2 py-1 rounded">{backend_clone}</code></li>
                            <li>Navigate to the backend directory: <code className="bg-gray-100 px-2 py-1 rounded">{backend_changedir}</code></li>
                            <li>Install backend dependencies: <code className="bg-gray-100 px-2 py-1 rounded">{backend_dependencies}</code></li>
                            <li>Run the backend server: <code className="bg-gray-100 px-2 py-1 rounded">{backend_run}</code></li>
                            {backend_envSetup && (
                                <li>Environment setup: <span className="text-red-500">{backend_envSetup}</span></li>
                            )}
                        </ol>
                    </div>
                ) : null}
                {installation.Docker ? (
                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-black">Docker Installation</h3>
                        <ol className="list-decimal list-inside text-gray-800 space-y-2">
                            <li>Pull the Docker image: <code className="bg-gray-100 px-2 py-1 rounded">{docker_clone}</code></li>
                            <li>Run the Docker container: <code className="bg-gray-100 px-2 py-1 rounded">{docker_run}</code></li>
                        </ol>
                    </div>
                ) : null}
            </div>
            {/* Installation Details */}
            {/* <div className="bg-white p-6 rounded shadow-md mt-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">Installation Details</h2>
                <ol className="list-decimal list-inside text-gray-800 space-y-2">
                    <li>Clone the repository: <code className="bg-gray-100 px-2 py-1 rounded">{clone}</code></li>
                    <li>Navigate to the project directory: <code className="bg-gray-100 px-2 py-1 rounded">{changedir}</code></li>
                    <li>Install dependencies: <code className="bg-gray-100 px-2 py-1 rounded">{dependencies}</code></li>
                    <li>Run the development server: <code className="bg-gray-100 px-2 py-1 rounded">{run}</code></li>
                </ol>   
                {backend_clone && (
                    <div className="mt-4">
                            <h3 className="text-xl font-semibold text-black">Backend Installation</h3>
                            <ol className="list-decimal list-inside text-gray-800 space-y-2">
                                <li>Clone the backend repository: <code className="bg-gray-100 px-2 py-1 rounded">{backend_clone}</code></li>
                                <li>Navigate to the backend directory: <code className="bg-gray-100 px-2 py-1 rounded">{backend_changedir}</code></li>
                                <li>Install backend dependencies: <code className="bg-gray-100 px-2 py-1 rounded">{backend_dependencies}</code></li>
                                <li>Run the backend server: <code className="bg-gray-100 px-2 py-1 rounded">{backend_run}</code></li>
                                {backend_envSetup && (
                                    <li>Environment setup: <span className="text-red-500">{backend_envSetup}</span></li>
                                )}
                            </ol>
                        </div>
                    )}
                {docker_clone && (
                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-black">Docker Installation</h3>
                        <ol className="list-decimal list-inside text-gray-800 space-y-2">
                            <li>Pull the Docker image: <code className="bg-gray-100 px-2 py-1 rounded">{docker_clone}</code></li>
                            <li>Run the Docker container: <code className="bg-gray-100 px-2 py-1 rounded">{docker_run}</code></li>
                        </ol>
                    </div>
                )}
            </div> */}

            {/* Additional Project Images */}
            <div className="bg-white p-6 rounded shadow-md m-3">
                <h2 className="text-2xl font-semibold mb-4 text-black">More Project Images</h2>
                <div className="grid grid-cols-2 gap-4">
                    {image.slice(1).map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`${title} - ${index + 1}`}
                            className="w-full h-auto rounded-lg shadow-md cursor-zoom-in transition-transform hover:scale-105 duration-200"
                            onClick={() => openZoom(img)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectDetailsPage;
