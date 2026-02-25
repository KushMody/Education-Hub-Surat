import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail } from 'lucide-react';

import logoImg from '../assets/Images/logo_edu_hub.jpg';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);

        // Intersection Observer for active section tracking
        const observerOptions = {
            root: null,
            rootMargin: '-40% 0px -40% 0px', // Trigger when section is in middle of viewport
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const sections = ['home', 'about', 'why-choose-us', 'results', 'contact'];
        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    const navLinks = [
        { name: 'HOME', href: '#home', id: 'home' },
        { name: 'SUCCESS STORIES', href: '#results', id: 'results' },
        { name: 'ABOUT', href: '#about', id: 'about' },
        { name: 'WHY CHOOSE US?', href: '#why-choose-us', id: 'why-choose-us' },
    ];

    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // height of the fixed navbar
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white border-b border-slate-200 ${isScrolled ? 'py-2 shadow-md' : 'py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">

                {/* Logo */}
                <a href="#" className="flex items-center active:scale-95 transition-transform" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img
                        src={logoImg}
                        alt="Education Hub Surat Logo"
                        className="h-16 md:h-20 w-auto object-contain"
                    />
                </a>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-10">
                    <div className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-[13px] font-bold tracking-wide transition-all relative py-1 ${activeSection === link.id
                                    ? 'text-brand-500'
                                    : 'text-brand-600 hover:text-brand-400'
                                    }`}
                            >
                                {link.name}
                                {activeSection === link.id && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-500"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </a>
                        ))}
                    </div>

                    <a
                        href="#contact"
                        className={`px-6 py-2.5 rounded flex items-center gap-2 border transition-colors text-[14px] ${activeSection === 'contact'
                            ? 'bg-brand-500 text-white border-brand-500'
                            : 'border-brand-400 text-brand-500 hover:bg-brand-50'
                            }`}
                    >
                        Contact Us
                        <Mail className="w-4 h-4" />
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden p-2 text-brand-600 hover:text-brand-400 transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 overflow-hidden shadow-lg"
                    >
                        <div className="px-6 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`text-[14px] font-bold tracking-wide transition-colors py-2 border-b border-slate-100 last:border-0 ${activeSection === link.id ? 'text-brand-500' : 'text-brand-600 hover:text-brand-400'
                                        }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`w-full mt-2 px-5 py-3 rounded flex justify-center items-center gap-2 border font-medium transition-all active:scale-95 text-[14px] ${activeSection === 'contact'
                                    ? 'bg-brand-500 text-white border-brand-500'
                                    : 'border-brand-400 text-brand-500 hover:bg-brand-50'
                                    }`}
                            >
                                Contact Us
                                <Mail className="w-4 h-4" />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
