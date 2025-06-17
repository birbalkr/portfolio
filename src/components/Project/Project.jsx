import React, { useState, useRef, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { projects } from "../../utils/project";
import { Link } from "react-router-dom";


export default function ProjectCarousel() {
    return (
        <section className="p-6 md:p-10 bg-gray-900 min-h-screen text-white mt-10">
            <header className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                    Recent <span className="text-cyan-500">Projects</span>
                </h1>
                <p className="text-lg text-gray-400">
                    A collection of some of my web development work
                </p>
            </header>

            <div className="grid grid-cols-3 gap-5">
                {projects.WebProject.map((project, projectIdx) => (
                    <SingleProjectCarousel key={projectIdx} project={project} />
                ))}
            </div>
        </section>
    );
}

function SingleProjectCarousel({ project }) {
    const totalSlides = project.images.length + 1; // images + video slide
    const [activeIndex, setActiveIndex] = useState(0);
    const videoRef = useRef(null);
    const timeoutRef = useRef(null);

    // Play/pause video on video slide
    useEffect(() => {
        if (activeIndex === totalSlides - 1) {
            videoRef.current?.play().catch(() => { });
        } else {
            if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
            }
        }
    }, [activeIndex, totalSlides]);

    // Auto slide with custom delay: 3s normal, 10s last slide
    useEffect(() => {
        clearTimeout(timeoutRef.current);

        const delay = activeIndex === totalSlides - 1 ? 10000 : 3000; // ms

        timeoutRef.current = setTimeout(() => {
            setActiveIndex((prev) => (prev + 1) % totalSlides);
        }, delay);

        return () => clearTimeout(timeoutRef.current);
    }, [activeIndex, totalSlides]);

    return (
        <div
            style={{
                maxWidth: 600,
                margin: "auto",
                backgroundColor: "#cccc",
                padding: 20,
                borderRadius: 8,
            }}
        >
            <h2 style={{ color: "white", marginBottom: 16, textAlign: "center" }}>
                {project.title}
            </h2>
            <p style={{ color: "#ccc", textAlign: "center", marginBottom: 20 }}>
                {project.description}
            </p>

            <Carousel
                selectedItem={activeIndex}
                onChange={setActiveIndex}
                showThumbs={false}
                showStatus={false}
                showArrows={true}
                infiniteLoop={true}
                swipeable={true}
                emulateTouch={true}
                autoPlay={false} // we control timing manually
                stopOnHover={false}
            >
                {/* Images */}
                {project.images.map((img, idx) => (
                    <div key={idx} style={{ maxHeight: 450, }}>
                        <img src={img} alt={`${project.title} slide ${idx + 1}`} />
                    </div>
                ))}

                {/* Video slide */}
                <div>
                    {project.video ? (<video
                        ref={videoRef}
                        src={project.video}
                        muted
                        loop
                        controls
                        style={{ width: "100%", maxHeight: 450, borderRadius: 8 }}
                    />) : null}

                    {project.hostlink ? (
                        <div className="flex justify-center pt-2">
                            <Link
                                to={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-700 px-4 py-2 rounded"
                            >
                                View Code
                            </Link>
                            <div className="h-1 w-3"></div>
                            <Link
                                to={project.hostlink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-700 px-4 py-2 rounded"
                            >
                                view Host
                            </Link>
                        </div>
                    ) : <div className="flex justify-center pt-2">
                        <Link
                            to={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-700 px-4 py-2 rounded"
                        >
                            View Code
                        </Link>
                    </div>}


                </div>
            </Carousel>
        </div>
    );
}
