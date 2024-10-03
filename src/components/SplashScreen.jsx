import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import animatedLogo from "../assets/Animation/Logo-animated.json";
import spinner from "../assets/Animation/spinner.json";

import Lottie from 'lottie-react';

const SplashScreen = () => {
    const loadScreen = useRef();
    const lottie = useRef();

    const [isLoading, setIsLoading] = useState(true); // State to manage loading

    useEffect(() => {
        // Set a timeout to end the loading screen after 15 seconds
        const timeout = setTimeout(() => {
            if (loadScreen.current && lottie.current) {
                gsap.to(loadScreen.current, { height: "0%", opacity: 0, duration: 2, onComplete: () => setIsLoading(false) });
            }
        }, 6000); // 15 seconds

        // Clean up the timeout if the component is unmounted
        return () => clearTimeout(timeout);
    }, []);

    if (!isLoading) {
        return null; // Hide the splash screen after loading
    }

    return (
        <div
            ref={loadScreen}
            className="load-Screen fixed bg-white z-50"
            style={{
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)", // Centering transformation
                    color: "black", // Adjust color for visibility
                }}
            >
                <div ref={lottie}><Lottie animationData={animatedLogo} loop={false} className="2xl:w-72 xl:w-72 lg:w-72 md:w-52 sm:w-32" /></div>

                <div ref={lottie} className="flex items-center justify-center"><Lottie animationData={spinner} className="2xl:w-24 xl:w-24 lg:w-24 md:w-24 sm:w-16" /></div> {/* You can add a spinner or additional content here if needed */}
            </div>
        </div>
    );
};

export default SplashScreen;
