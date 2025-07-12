import React, { useState, useRef, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardSwap, { Card } from "./ProjectHeader";
import { JavaScript1, cyber, project2 } from "../../assets"
import Masonry from "./ProjectBody";
import { projects } from "../../utils/project";

export default function ProjectCarousel() {
    return (
        <>
            <section>
                <div className="h-screen">
                    <div className=""></div>

                    <div style={{ height: '600px', position: 'relative' }}>
                        <CardSwap
                            cardDistance={60}
                            verticalDistance={70}
                            delay={5000}
                            pauseOnHover={false}
                        >
                            <Card className="bg-white">
                                <h3>Card 1</h3>
                                <p>Your content here</p>
                                <img src={JavaScript1} alt="" srcset="" />
                            </Card>

                            <Card className="bg-white">
                                <h3>Card 2</h3>
                                <p>Your content here</p>
                                <img src={cyber} alt="" srcset="" />
                            </Card>

                            <Card className="bg-white">
                                <h3>Card 3</h3>
                                <p>Your content here</p>
                                <img src={project2} alt="" srcset="" />
                            </Card>

                            <Card className="bg-white">
                                <h3>Card 4</h3>
                                <p>Your content here</p>
                                <img src={JavaScript1} alt="" srcset="" />
                            </Card>

                            <Card className="bg-white">
                                <h3>Card 5</h3>
                                <p>Your content here</p>
                                <img src={JavaScript1} alt="" srcset="" />
                            </Card>

                        </CardSwap>
                    </div>
                </div>

                {/* <Masonry
                    items={projects.items}
                    ease="power3.out"
                    duration={0.6}
                    stagger={0.05}
                    animateFrom="bottom"
                    scaleOnHover={true}
                    hoverScale={0.95}
                    blurToFocus={true}
                    colorShiftOnHover={false}
                /> */}

            </section>

            <section>
                <div class="flex overflow-x-auto overflow-y-hidden border-b border-gray-200 whitespace-nowrap dark:border-gray-700">
                    <button class="inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-blue-600 bg-transparent border-b-2 border-blue-500 sm:text-base dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none">
                        Profile
                    </button>

                    <button class="inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
                        Account
                    </button>

                    <button class="inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
                        Notification
                    </button>
                </div>
            </section>


        </>
    );
}
