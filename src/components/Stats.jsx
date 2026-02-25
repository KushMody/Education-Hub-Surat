import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

import mapImg from '../assets/Images/map.jpg';

const Stats = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <section
            className="py-12 sm:py-24 relative bg-white overflow-hidden"
        >
            {/* Background Map Image with Opacity */}
            <div
                className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
                style={{
                    backgroundImage: `url(${mapImg})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>

                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto mb-16 px-4">
                    <p className="text-brand-400 font-semibold tracking-widest text-sm uppercase mb-4">
                        WHY CHOOSE US?
                    </p>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl text-slate-800 font-medium leading-snug">
                        At Education Hub, we prioritize quality education, individual attention, and a disciplined approach to ensure every student reaches their full potential.
                    </h2>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 mt-12">

                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-light text-brand-400 mb-2 flex items-baseline justify-center">
                            {inView ? <CountUp end={2000} duration={2.5} separator="," /> : '0'}
                            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-[4rem]">+</span>
                        </div>
                        <p className="text-slate-600 text-[15px] font-medium">Students Mentored</p>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-light text-brand-400 mb-2">
                            {inView ? <CountUp end={25} duration={2.5} /> : '0'}
                        </div>
                        <p className="text-slate-600 text-[15px] font-medium">Years of Teaching Experience</p>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-light text-brand-400 mb-2 flex items-baseline justify-center">
                            {inView ? <CountUp end={75} duration={2.5} /> : '0'}
                            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-[4rem]">%</span>
                        </div>
                        <p className="text-slate-600 text-[15px] font-medium leading-relaxed">Students Scored Above<br />90% in Boards</p>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-light text-brand-400 mb-2 flex items-baseline justify-center">
                            {inView ? <CountUp end={10} duration={2.5} /> : '0'}
                            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-[4rem]">+</span>
                        </div>
                        <p className="text-slate-600 text-[15px] font-medium leading-relaxed">Specialized Subjects<br />Offered</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Stats;
