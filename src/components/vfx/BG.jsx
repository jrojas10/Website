import React from 'react'
import Particles from "react-tsparticles";

import "./bg.scss"
function BG() {

    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };


    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "#0ab5f8",
                        },
                    },
                    fpsLimit: 60,
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                    },
                    detectRetina: true,

                }}

            />
        </div>
    )
}

export default BG



    // < div className = "bg-css" >
    //     <Particles
    //         id="tsparticles"
    //         init={particlesInit}
    //         loaded={particlesLoaded}
    //         options={{
    //             background: {
    //                 color: {
    //                     value: "#0d47a1",
    //                 },
    //             },
    //             fpsLimit: 60,
    //             particles: {
    //                 color: {
    //                     value: "#ffffff",
    //                 },
    //                 links: {
    //                     color: "#red",
    //                     distance: 150,
    //                     enable: true,
    //                     opacity: 0.5,
    //                     width: 1,
    //                 },
    //                 collisions: {
    //                     enable: true,
    //                 },
    //                 move: {
    //                     direction: "none",
    //                     enable: true,
    //                     outMode: "bounce",
    //                     random: false,
    //                     speed: 1,
    //                     straight: false,
    //                 },
    //                 number: {
    //                     density: {
    //                         enable: true,
    //                         value_area: 800,
    //                     },
    //                     value: 80,
    //                 },
    //                 opacity: {
    //                     value: 0.5,
    //                 },
    //                 shape: {
    //                     type: "circle",
    //                 },
    //                 size: {
    //                     random: true,
    //                     value: 5,
    //                 },
    //             },
    //             detectRetina: true,
    //         }}
    //     />
    //     </div >