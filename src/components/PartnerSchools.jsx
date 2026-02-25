import React from 'react';
import { motion } from 'framer-motion';
import school1 from '../assets/Images/Schools/High_School.jpg';
import school2 from '../assets/Images/Schools/GD_Goenka.jpg';
import school3 from '../assets/Images/Schools/LP_Savani.jpg';
import school4 from '../assets/Images/Schools/Radient.jpg';
const PartnerSchools = () => {
    const schools = [
        { logo: school1, name: "Hills' High School" },
        { logo: school2, name: "G.D. Goenka School" },
        { logo: school3, name: "L.P. Savani Group" },
        { logo: school4, name: "Radiant English Academy" },
    ];

    return (
        <section className="py-4 sm:py-20 bg-slate-900 border-t border-b border-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-6 sm:mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        We teach Students from
                    </h2>
                </div>

                {/* Marquee Container - Constrained to show 3-4 images */}
                <div className="relative flex overflow-hidden max-w-2xl mx-auto">
                    <div className="flex animate-marquee whitespace-nowrap gap-8 items-center py-4">
                        {/* Repeat the array multiple times for seamless infinite scrolling */}
                        {[...schools, ...schools, ...schools, ...schools].map((school, index) => (
                            <div
                                key={index}
                                className="relative flex items-center justify-center w-32 h-24 sm:w-48 sm:h-32 shrink-0 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-colors duration-300"
                            >
                                <img
                                    src={school.logo}
                                    alt={school.name}
                                    className="max-w-full max-h-full object-contain p-4 sm:p-6"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Gradient Overlays for smooth fade out at edges */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />
                </div>
            </div>
        </section>
    );
};

export default PartnerSchools;
