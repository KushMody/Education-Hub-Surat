import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import bg1 from '../assets/Images/20250223_133842-1-scaled-e1742235259929.jpg';
import bg2 from '../assets/Images/20250216_163835-scaled.jpg';

const Hero = () => {
    const images = [bg1, bg2];
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-advance the slider every 4 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

            {/* Background Image Slider */}
            <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-slate-900">
                <AnimatePresence>
                    <motion.img
                        key={currentIndex}
                        src={images[currentIndex]}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full object-cover"
                        alt="Hero background"
                    />
                </AnimatePresence>
                {/* Dark overlay to make text readable */}
                <div className="absolute inset-0 bg-[#0f172a]/60" />
            </div>

            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-6 w-full relative z-10 pt-[100px] flex flex-col justify-center h-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="max-w-4xl"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-4">
                        Empowering Students for a
                        <br />
                        <span className="text-[#c5e2fa]">"Brighter Future"</span>
                    </h1>
                </motion.div>
            </div>

        </section>
    );
};

export default Hero;
