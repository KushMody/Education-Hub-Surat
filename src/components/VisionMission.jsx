import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

import visionImg from '../assets/Images/pexels-pixabay-355952-768x534.jpg';
import missionImg from '../assets/Images/pexels-tara-winstead-7666429-768x512.jpg';

const VisionMission = () => {

    const sections = [
        {
            id: 'vision',
            title: 'Our Journey & Vision',
            text: [
                "The journey of Education Hub began in 2010 with a single classroom and 20 students.",
                "With the support of students, parents, and our dedicated mentors, we now educate more than 200+ students every session.",
                "Our Vision is to focus on improving student results and providing QUALITY EDUCATION."
            ],
            image: visionImg,
            imagePosition: 'left'
        },
        {
            id: 'mission',
            title: 'Our Mission',
            text: [
                "To implant a drive for excellence and a lifelong love of learning.",
                "To foster an environment that respects individual pacing while challenging students to exceed their own expectations.",
                "To build strong partnerships with parents to support holistic student development."
            ],
            image: missionImg,
            imagePosition: 'right'
        }
    ];

    return (
        <section id="about" className="py-12 sm:py-24 bg-white relative overflow-hidden scroll-mt-24">
            <div className="max-w-6xl mx-auto px-6 space-y-16 sm:space-y-32">

                {sections.map((section, index) => (
                    <div
                        key={section.id}
                        className="grid md:grid-cols-[#1fr_1.2fr] lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-center"
                    >

                        {/* Image Box */}
                        <motion.div
                            initial={{ opacity: 0, x: section.imagePosition === 'left' ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className={`relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] bg-slate-100 aspect-[4/3] w-full max-w-[500px] mx-auto md:mx-0 ${section.imagePosition === 'right' ? 'md:order-last' : ''}`}
                        >
                            <img
                                src={section.image}
                                alt={section.title}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: section.imagePosition === 'left' ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col justify-center"
                        >
                            <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] leading-tight font-black text-slate-800 mb-6 sm:mb-10 tracking-tight">
                                {section.title}
                            </h2>

                            <div className="space-y-8">
                                {section.text.map((text, idx) => (
                                    <div key={idx} className="flex gap-4 items-start">
                                        <ChevronRight className="w-5 h-5 text-slate-400 shrink-0 mt-1 stroke-[3]" />
                                        <p className="text-[#3b4b5c] font-bold text-[1.05rem] leading-relaxed pr-4">
                                            {text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                ))}

            </div>
        </section>
    );
};

export default VisionMission;
