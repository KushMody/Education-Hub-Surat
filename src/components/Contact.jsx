import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const Contact = () => {
    const whatsappLink = "https://api.whatsapp.com/send/?phone=919925714332&text=Hello%2C+I+want+to+know+more+about+the+Free+Demo+Class+and+10%25+discount+offer.&type=phone_number&app_absent=0";

    return (
        <section id="contact" className="bg-white py-12 sm:py-16 px-4 md:px-8 scroll-mt-24">
            <div className="max-w-7xl mx-auto">
                <div className="relative mt-12 bg-white border border-blue-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden rounded-[2.5rem]">

                    {/* Background abstract decoration */}
                    <div className="absolute top-0 right-0 w-[500px] h-full bg-gradient-to-l from-[#dcf0fe]/60 to-transparent pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#2eb9fa]/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-10">
                        {/* Content Side */}
                        <div className="flex-1 text-center lg:text-left space-y-4">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-[#1da0f2] font-semibold text-sm mb-2 border border-blue-100">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1da0f2] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1da0f2]"></span>
                                </span>
                                Limited Time Offer
                            </div>

                            <h2 className="text-[#3b4b5c] text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold leading-[1.15] tracking-tight">
                                Get <span className="text-[#1da0f2] relative inline-block">10% OFF
                                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 fill-current" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 15 100 5 L 100 10 L 0 10 Z" />
                                    </svg>
                                </span> <br className="hidden lg:block" /> + Free Demo Class!
                            </h2>
                            <p className="text-slate-500 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0">
                                Enroll now to secure your spot. Connect with our expert counselors to learn more.
                            </p>
                        </div>

                        {/* Button/Action Side */}
                        <div className="flex-shrink-0 w-full lg:w-auto relative">
                            {/* Decorative ring around button area */}
                            <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] border-[2px] border-dashed border-blue-300 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] opacity-50 z-0"></div>

                            <motion.a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ ease: "linear", duration: 0.2 }}
                                className="relative z-10 w-full lg:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-[#1da0f2] to-[#2eb9fa] hover:from-[#1da0f2] hover:to-[#1da0f2] text-white font-bold text-lg px-10 py-5 rounded-2xl shadow-[0_20px_40px_-15px_rgba(29,160,242,0.5)] transition-all cursor-pointer group"
                            >
                                <div className="bg-white/20 p-2 rounded-full group-hover:rotate-12 transition-transform">
                                    <Phone className="w-5 h-5 fill-current" />
                                </div>
                                <span>Chat with Us</span>
                            </motion.a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
