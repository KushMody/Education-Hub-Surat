import React from 'react';
import { motion } from 'framer-motion';

const FeatureIcon = ({ type }) => {
    const floatTransition = (delay = 0) => ({
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay
    });

    switch (type) {
        case 'personalized':
            return (
                <div className="relative w-24 h-24 flex items-center justify-center">
                    <motion.div
                        animate={{ y: [0, -6, 0], rotate: [-15, -10, -15] }}
                        transition={floatTransition()}
                        className="absolute w-12 h-12 bg-blue-400/50 rounded-xl translate-x-[-6px]"
                    />
                    <motion.div
                        animate={{ y: [0, 6, 0], rotate: [15, 20, 15] }}
                        transition={floatTransition(0.5)}
                        className="absolute w-12 h-12 bg-blue-600 rounded-xl translate-x-[6px] shadow-lg shadow-blue-500/20"
                    />
                </div>
            );
        case 'resources':
            return (
                <div className="relative w-24 h-24 flex items-center justify-center">
                    <motion.div
                        animate={{ scale: [1, 1.03, 1], rotate: [0, 2, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="w-14 h-14 bg-blue-500 rounded-2xl relative shadow-lg shadow-blue-500/20"
                    >
                        <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={floatTransition(0.25)}
                            className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-0 h-0 
                            border-t-[14px] border-t-transparent 
                            border-l-[20px] border-l-cyan-300 
                            border-b-[14px] border-b-transparent drop-shadow-md"
                        />
                    </motion.div>
                </div>
            );
        case 'faculty':
            return (
                <div className="relative w-24 h-24 flex items-center justify-center">
                    <motion.div
                        animate={{ skewX: [-12, -8, -12], y: [-2, 2, -2] }}
                        transition={floatTransition()}
                        className="absolute w-15 h-11 bg-cyan-400 rounded-xl"
                    />
                    <motion.div
                        animate={{ skewX: [15, 12, 15], y: [10, 14, 10] }}
                        transition={floatTransition(0.4)}
                        className="absolute w-15 h-11 bg-blue-500/80 rounded-xl translate-y-3 shadow-md"
                    />
                </div>
            );
        case 'tracking':
            return (
                <div className="relative w-24 h-24 flex items-center justify-center">
                    <motion.div
                        animate={{ x: [10, 14, 10], y: [6, 10, 6] }}
                        transition={floatTransition()}
                        className="absolute w-13 h-13 bg-blue-500 rounded-full shadow-lg shadow-blue-500/10"
                    />
                    <motion.div
                        animate={{ x: [-4, 0, -4], y: [-3, 1, -3], scale: [1, 1.05, 1] }}
                        transition={floatTransition(0.8)}
                        className="absolute w-13 h-13 bg-cyan-300/80 rounded-full backdrop-blur-[2px]"
                    />
                </div>
            );
        default:
            return null;
    }
};

const features = [
    {
        id: 1,
        type: 'personalized',
        title: 'Personalized Attention',
        description: 'Small batch sizes and individual focus for every student to ensure optimal learning outcomes.'
    },
    {
        id: 2,
        type: 'resources',
        title: 'Comprehensive Resources',
        description: 'CBSE-standard notebooks, digital tools, and curated study material.'
    },
    {
        id: 3,
        type: 'faculty',
        title: 'Expert Faculty',
        description: 'Learn from experienced mentors specializing in CBSE and ICSE advanced subjects.'
    },
    {
        id: 4,
        type: 'tracking',
        title: 'Progress Tracking',
        description: 'Daily homework reports and performance updates shared with parents.'
    }
];

const Features = () => {
    return (
        <section className="py-16 sm:py-32 bg-white overflow-hidden scroll-mt-24" id="features">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 gap-x-4 sm:gap-x-16 gap-y-12 sm:gap-y-24">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                            whileHover="hover"
                            className="flex flex-col items-start group cursor-pointer"
                        >
                            {/* Icon Container with refined professional hover */}
                            <motion.div
                                variants={{
                                    hover: {
                                        y: -4,
                                        transition: { type: "spring", stiffness: 400, damping: 30 }
                                    }
                                }}
                                className="relative w-24 h-24 sm:w-32 sm:h-32 bg-slate-50 rounded-[1.5rem] sm:rounded-[2.5rem] flex items-center justify-center mb-6 sm:mb-8 transition-colors duration-500 group-hover:bg-blue-50 group-hover:shadow-[0_15px_30px_-10px_rgba(59,130,246,0.1)]"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                {/* Inner subtle highlight */}
                                <div className="absolute inset-0 rounded-[1.5rem] sm:rounded-[2.5rem] border border-slate-100 group-hover:border-blue-100 transition-colors" />

                                <div className="scale-75 sm:scale-100">
                                    <FeatureIcon type={feature.type} />
                                </div>
                            </motion.div>

                            <motion.h3
                                className="text-[16px] sm:text-[1.5rem] font-bold text-slate-800 mb-2 sm:mb-4 tracking-tight group-hover:text-blue-600 transition-colors duration-300"
                            >
                                {feature.title}
                            </motion.h3>
                            <p className="text-slate-500 leading-relaxed text-[13px] sm:text-[1.1rem] max-w-md group-hover:text-slate-600 transition-colors duration-300">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
