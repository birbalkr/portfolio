// import { useEffect, useRef, useState } from 'react';
// import { avatar } from '../../assets';
// import '../../index.css'
// import { utils, stagger, createScope, createTimeline, animate } from 'animejs';



// function MainPage() {

//     useEffect(() => {
//         const [$button1, $button2] = utils.$('.revert');

//         function onMouseEnter() { animate(this, { scale: 2, duration: 250 }) }
//         function onMouseLeave() { animate(this, { scale: 1, duration: 750 }) }

//         const scopeConstructor = scope => {
//             const circles = utils.$('.circle');

//             circles.forEach(($circle, i) => {
//                 animate($circle, {
//                     opacity: .25,
//                     loop: true,
//                     alternate: true,
//                     duration: 500,
//                     delay: i * 100,
//                     ease: 'inOut(3)',
//                 });
//                 $circle.addEventListener('mouseenter', onMouseEnter);
//                 $circle.addEventListener('mouseleave', onMouseLeave);
//             });

//             // Cleanup function to take care of removing event listeners on revert
//             return () => {
//                 circles.forEach($circle => {
//                     // Anime.js instances are automatically reverted by the Scope
//                     $circle.removeEventListener('mouseenter', onMouseEnter);
//                     $circle.removeEventListener('mouseleave', onMouseLeave);
//                 });
//             }
//         }

//         const scope1 = createScope({ root: '.row-1' }).add(scopeConstructor);
//         const scope2 = createScope({ root: '.row-2' }).add(scopeConstructor);

//         const revertScope1 = () => scope1.revert();
//         const revertScope2 = () => scope2.revert();

//         $button1.addEventListener('click', revertScope1);
//         $button2.addEventListener('click', revertScope2);
//     }, []);
//     return (
//         <>
//             <div className="flex">
//                 <div className="circle"></div>
//                 <div className="circle"></div>
//                 <div className="circle"></div>
//                 <div className="circle"></div>
//                 <div className="circle"></div>
//                 <div className="circle"></div>
//                 <div className="circle"></div>
//                 <div className="circle"></div>
//                 <div className="circle"></div>
//             </div>
//             <div className="flex">
//                 <div className="circle"></div>
//                 <div className="circle"></div>
//                 <div className="circle"></div>
//                 <div className="circle"></div>
//                 <div className="circle"></div>
//                 <div className="circle"></div>
//                 <div className="circle"></div>
//                 <div className="circle"></div>
//                 <div className="circle"></div>
//             </div>
//             <div className="medium row">
//                 <fieldset className="controls">
//                     <button className="button revert">Revert row 1</button>
//                     <button className="button revert">Revert row 2</button>
//                 </fieldset>
//             </div>



//             <div className="flex items-center justify-center min-h-screen bg-black">
//                 <div className="relative w-[400px] h-[400px] rounded-full">
//                     {/* Outer Ring */}
//                     <div
//                         className="absolute inset-0 rounded-full"
//                         style={{
//                             background: `conic-gradient(
//               #00ff00 0deg 40deg,
//               #ffff00 40deg 70deg,
//               #ff0000 70deg 110deg,
//               #ffaa00 110deg 150deg,
//               #00ffff 150deg 200deg,
//               #00ff00 200deg 360deg
//             )`,
//                             padding: "8px",
//                         }}
//                     />

//                     {/* Inner Circle */}
//                     <div className="absolute inset-[8px] rounded-full bg-black flex items-center justify-center">
//                         <div className="w-[300px] h-[300px] rounded-full bg-[#111] relative flex items-center justify-center">
//                             {/* SVG Red Dot Curve */}
//                             <svg
//                                 width="300"
//                                 height="300"
//                                 viewBox="0 0 300 300"
//                                 className="absolute"
//                             >
//                                 {/* Create a curved path */}
//                                 <path
//                                     id="curvePath"
//                                     d="M 30 250 Q 150 50 270 250"
//                                     fill="none"
//                                 />

//                                 {/* Red Dots Along the Curve */}
//                                 {[...Array(20)].map((_, i) => (
//                                     <circle
//                                         key={i}
//                                         r="4"
//                                         fill="red"
//                                         cx={0}
//                                         cy={0}
//                                     >
//                                         <animateMotion
//                                             dur="5s"
//                                             repeatCount="indefinite"
//                                             begin={`${i * 0.2}s`}
//                                         >
//                                             <mpath href="#curvePath" />
//                                         </animateMotion>
//                                     </circle>
//                                 ))}
//                             </svg>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default MainPage;





import React, { useEffect, useRef } from "react";

// import { animate } from 'animejs';
import { animate } from 'animejs';

const CircularLoader = () => {
    const outerCircleRef = useRef(null);

    useEffect(() => {
        if (outerCircleRef.current) {
            animate({
                targets: outerCircleRef.current,
                rotate: '360deg',
                duration: 3000,
                easing: 'linear',
                loop: true,
            });
        }
    }, []);

    // Generate 90 tick marks around the circle
    const ticks = Array.from({ length: 90 }, (_, i) => {
        const rotate = i * 4; // 360 / 90 = 4 degrees between ticks
        return (
            <div
                key={i}
                className="tick"
                style={{
                    transform: `rotate(${rotate}deg) translateY(-140px)`,
                    transformOrigin: "center",
                    width: "2px",
                    height: "10px",
                    backgroundColor: "red",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                }}
            />
        );
    });

    return (
        <div className="flex items-center justify-center h-screen bg-black">
            {/* Outer Circle that rotates */}
            <div
                ref={outerCircleRef}
                className="relative w-[300px] h-[300px] rounded-full"
                style={{ transformOrigin: "center center" }}
            >
                {ticks}
            </div>
        </div>
    );
};

export default CircularLoader;
