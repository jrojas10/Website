import "./FadeIn.scss"
import React from 'react'
import { useState, useEffect, useRef } from 'react'

function FadeIn(props) {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setVisible(true);
                observer.unobserve(domRef.current);
            }
        });
        observer.observe(domRef.current);
        const dr = domRef.current;
        return () => dr;
    }, []);


    return (
        <div ref={domRef} className={`fade-in-section ${isVisible ? "is-visible" : ""}`}>
            {props.children}
        </div>
    )
}

export default FadeIn;

// function FadeIn(props) {
//     const [isVisible, setVisible] = useState(false);

//     const domRef = useRef();

//     useEffect(() => {
//         const observer = new IntersectionObserver(entries => {
//             // In your case there's only one element to observe:
//             if (entries[0].isIntersecting) {
//                 // Not possible to set it back to false like this:
//                 setVisible(true);

//                 // No need to keep observing:
//                 observer.unobserve(domRef.current);
//             }
//         });

//         observer.observe(domRef.current);

//         return () => observer.unobserve(domRef.current);
//     }, []);

//     return (
//         <div
//             ref={domRef}
//             className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
//         >
//             {props.children}
//         </div>
//     );
// }

// export default FadeIn;


