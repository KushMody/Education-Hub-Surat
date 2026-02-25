import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import img1 from '../assets/Images/IMG_20240603_002623_330.jpg';
import img2 from '../assets/Images/IMG_20240517_161500_962.jpg';
import img3 from '../assets/Images/IMG_20240518_182032_686.jpg';
import img4 from '../assets/Images/IMG_20240603_002623_306.jpg';

const Results = () => {
    const [activeTab, setActiveTab] = useState('All');

    const resultImages = [
        { id: 1, src: img1, category: 'Class 10th' },
        { id: 2, src: img2, category: 'Class 12th' },
        { id: 3, src: img3, category: 'Class 12th' },
        { id: 4, src: img4, category: 'Class 10th' },
    ];

    const filteredImages = activeTab === 'All'
        ? resultImages
        : resultImages.filter(img => img.category === activeTab);

    return (
        <section id="results" className="py-24 bg-white text-slate-900 relative scroll-mt-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase tracking-wide">
                        Our Students Success Stories
                    </h2>

                    <div className="flex justify-center gap-2 mb-16">
                        {['All', 'Class 10th', 'Class 12th'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-5 py-2 rounded-lg text-sm transition-all border ${activeTab === tab
                                    ? 'border-brand-500 bg-brand-50 text-brand-700 font-semibold'
                                    : 'border-slate-200 text-slate-500 hover:bg-slate-50'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Simplified Grid showing just the images */}
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    <AnimatePresence>
                        {filteredImages.map((imageObj) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={imageObj.id}
                                className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white"
                            >
                                {/* Direct Image Rendering */}
                                <img
                                    src={imageObj.src}
                                    alt={`Student Result ${imageObj.id}`}
                                    className="w-full h-auto object-contain"
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Results;
