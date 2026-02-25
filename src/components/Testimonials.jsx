import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonialsData = [
    {
        id: 1,
        name: "Nishi Punamiya",
        rating: 5,
        text: "This place is more like a home 🏠 The reason why I have enjoyed as well done well in my 11th & 12th grade is just because of the way the two teachers, Pratik sir and Rashmeet mam ❤️ ,have taught and guided me. Thank you for being the best mentors.. Glad to be a part of education hub❤️"
    },
    {
        id: 2,
        name: "Yashika Mehta",
        rating: 4,
        text: "It is the only tution who’s teacher’s are behind you till the end time of your session and teachers are also answerable to the problem anytime"
    },
    {
        id: 3,
        name: "Rutvi Shroff",
        rating: 5,
        text: "Friendly environment between teachers and students but at the same time teachers make sure of utter discipline related to study and overall development. Encouraging and motivating teachers helps students to understand and apply what they’ve have learned. 👍🏻👍🏻"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-advance carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const currentSlide = testimonialsData[currentIndex];

    return (
        <section className="py-12 sm:py-24 bg-[#DDF3FF] relative overflow-hidden flex flex-col items-center justify-center min-h-[400px] sm:min-h-[500px]">
            <div className="max-w-4xl mx-auto px-6 text-center w-full">

                <p className="text-[#3b4b5c] font-medium tracking-widest text-sm mb-2 uppercase">
                    TESTIMONIALS
                </p>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3b4b5c] mb-8 sm:mb-12 tracking-tight">
                    What Our Students Say About Us
                </h2>

                {/* Carousel Container */}
                <div className="relative min-h-[220px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                            className="bg-transparent w-full"
                        >
                            <h4 className="text-xl font-bold text-[#3b4b5c] mb-4">{currentSlide.name}</h4>

                            <div className="flex justify-center gap-1.5 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-6 h-6 ${i < currentSlide.rating ? 'text-[#42f5bf] fill-[#42f5bf]' : 'text-[#42f5bf] stroke-2'}`}
                                    />
                                ))}
                            </div>

                            <p className="text-[#3b4b5c] leading-relaxed text-[1.1rem] font-medium max-w-3xl mx-auto whitespace-pre-line">
                                {currentSlide.text}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Carousel Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {testimonialsData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentIndex ? 'bg-[#56A8FF] w-6' : 'bg-[#a3d0ff]'}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
