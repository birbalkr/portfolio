import React from "react";

export default function ProjectCarousel() {
    return (
        <>


            <section>
                <div className="text-5xl h-56 bg-background flex items-center justify-center">
                    <h1>Project</h1>
                </div>
            </section>

            {/* <section className="bg-background text-text min-h-screen p-10">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-5xl font-bold text-title mb-6">About Me</h1>
                    <p className="text-lg mb-8">
                        I’m a frontend developer passionate about building elegant, scalable, and responsive web applications.
                    </p>
                    <button className="bg-primary hover:bg-hover text-white px-6 py-3 rounded-lg transition-all">
                        View My Work
                    </button>
                </div>
            </section> */}

            <section className="bg-background text-text p-10 min-h-screen">
                <h1 className="text-4xl font-bold text-title mb-6">Hi, I’m a Developer</h1>
                <p className="text-lg mb-8 max-w-xl">
                    I specialize in building responsive, accessible, and visually engaging web apps.
                </p>
                <button className="bg-primary hover:bg-hover text-white px-6 py-3 rounded transition">
                    View Projects
                </button>
            </section>




        </>
    );
}
