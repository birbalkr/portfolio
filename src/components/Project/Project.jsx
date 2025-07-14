import React, { useState } from "react";

export default function ProjectCarousel() {
    const [activeTab, setActiveTab] = useState("frontend");

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
                <div className="mx-auto px-4">
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
                                        <div class="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80')" }}>
                                            <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                                <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Best website
                                                    collections</h2>
                                                <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Website</p>
                                            </div>
                                        </div>

                                        <div class="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80')" }}>
                                            <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                                <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Block of Ui kit
                                                    collections</h2>
                                                <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Ui kit</p>
                                            </div>
                                        </div>

                                        <div class="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')" }}>
                                            <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                                <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Ton’s of mobile
                                                    mockup</h2>
                                                <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Mockups</p>
                                            </div>
                                        </div>

                                        <div class="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')" }}>
                                            <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                                <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Huge collection of
                                                    animation</h2>
                                                <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Animation</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}
                        {activeTab === "frontend" && (
                            <section class="bg-white dark:bg-gray-900">
                                <div class="container px-6 py-10 mx-auto">
                                    <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Our
                                        Portfolio</h1>

                                    <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
                                        <div class="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80')" }}>
                                            <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                                <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Best website
                                                    collections</h2>
                                                <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Website</p>
                                            </div>
                                        </div>

                                        <div class="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80')" }}>
                                            <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                                <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Block of Ui kit
                                                    collections</h2>
                                                <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Ui kit</p>
                                            </div>
                                        </div>

                                        <div class="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')" }}>
                                            <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                                <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Ton’s of mobile
                                                    mockup</h2>
                                                <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Mockups</p>
                                            </div>
                                        </div>

                                        <div class="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')" }}>
                                            <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                                <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Huge collection of
                                                    animation</h2>
                                                <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Animation</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}
                        {activeTab === "backend" && (
                            <section class="bg-white dark:bg-gray-900">
                                <div class="container px-6 py-10 mx-auto">
                                    <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Our
                                        Portfolio</h1>

                                    <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
                                        <div class="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80')" }}>
                                            <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                                <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Best website
                                                    collections</h2>
                                                <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Website</p>
                                            </div>
                                        </div>

                                        <div class="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80')" }}>
                                            <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                                <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Block of Ui kit
                                                    collections</h2>
                                                <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Ui kit</p>
                                            </div>
                                        </div>

                                        <div class="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')" }}>
                                            <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                                <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Ton’s of mobile
                                                    mockup</h2>
                                                <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Mockups</p>
                                            </div>
                                        </div>

                                        <div class="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')" }}>
                                            <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                                <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Huge collection of
                                                    animation</h2>
                                                <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Animation</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}
                        {activeTab === "tools" && (
                            <section class="bg-white dark:bg-gray-900">
                                <div class="container px-6 py-10 mx-auto">
                                    <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Our
                                        Portfolio</h1>

                                    <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
                                        <div class="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80')" }}>
                                            <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                                <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Best website
                                                    collections</h2>
                                                <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Website</p>
                                            </div>
                                        </div>

                                        <div class="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80')" }}>
                                            <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                                <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Block of Ui kit
                                                    collections</h2>
                                                <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Ui kit</p>
                                            </div>
                                        </div>

                                        <div class="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')" }}>
                                            <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                                <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Ton’s of mobile
                                                    mockup</h2>
                                                <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Mockups</p>
                                            </div>
                                        </div>

                                        <div class="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')" }}>
                                            <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                                <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Huge collection of
                                                    animation</h2>
                                                <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Animation</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </section>




        </>
    );
}
