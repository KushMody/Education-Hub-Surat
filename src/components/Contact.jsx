import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const Contact = () => {
    const whatsappLink = "https://api.whatsapp.com/send/?phone=919925714332&text=Hello%2C+I+want+to+know+more+about+the+Free+Demo+Class+and+10%25+discount+offer.&type=phone_number&app_absent=0";

    return (
        <section id="contact" className="bg-white py-12 sm:py-16 px-4 md:px-8 scroll-mt-24">
            <div className="max-w-7xl mx-auto">
                <div className="bg-gradient-to-r from-[#2eb9fa] to-[#dcf0fe] rounded-[2rem] p-6 sm:p-10 md:p-14 relative overflow-hidden flex flex-col items-start shadow-sm">

                    {/* Subtle decorative glow */}
                    <div className="absolute right-0 bottom-0 w-64 h-64 bg-white/20 rounded-tl-full blur-3xl pointer-events-none" />



                    <div className="text-[#3b4b5c] text-lg sm:text-xl md:text-[1.5rem] font-semibold mb-8 space-y-2 relative z-10">
                        Get 10% OFF + Free Demo Class!
                        <br className="sm:hidden" /> Contact us on WhatsApp now.
                    </div>

                    <motion.a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02, x: -2, y: -2, boxShadow: "6px 6px 0px 0px rgba(0,0,0,1)" }}
                        whileTap={{ scale: 0.98, x: 2, y: 2, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" }}
                        className="relative z-10 flex items-center gap-2 bg-[#1da0f2] text-white font-bold px-8 py-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
                    >
                        <Phone className="w-5 h-5 fill-current" />
                        <span className="text-[1rem] tracking-wide">Chat with Us</span>
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
