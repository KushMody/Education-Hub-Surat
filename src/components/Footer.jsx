import React from 'react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import logoImg from '../assets/Images/Updated_Logo.png';

const Footer = () => {
    return (
        <footer id="contact" className="bg-slate-950 pt-16 sm:pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-50" />
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-sm h-48 bg-brand-500/20 blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-16">

                    {/* Brand Col */}
                    <div className="lg:col-span-1">
                        <a href="#" className="flex items-center mb-6" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <img
                                src={logoImg}
                                alt="Education Hub Surat Logo"
                                className="h-16 md:h-20 w-auto object-contain rounded-lg"
                            />
                        </a>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Shaping futures through curiosity. Surat's premier education institute for primary to higher secondary students.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', href: '#home' },
                                { name: 'About', href: '#about' },
                                { name: 'Why Choose Us?', href: '#why-choose-us' },
                                { name: 'Success Stories', href: '#results' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-slate-400 hover:text-brand-400 transition-colors flex items-center gap-2 group">
                                        <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-400" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-6">
                            <li className="text-slate-400">
                                <a
                                    href="https://maps.app.goo.gl/HyaTHMvvC6u4wpXh7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-4 hover:text-white transition-colors group"
                                >
                                    <MapPin className="w-6 h-6 text-brand-400 group-hover:text-white shrink-0 mt-[3px] transition-colors" />
                                    <span className="leading-relaxed">G08, J9 High Street, Vesu, Surat</span>
                                </a>
                            </li>
                            <li className="text-slate-400">
                                <a
                                    href="tel:+919925714332"
                                    className="flex items-center gap-4 hover:text-white transition-colors group"
                                >
                                    <Phone className="w-6 h-6 text-brand-400 group-hover:text-white shrink-0 transition-colors" />
                                    <span>+91-9925714332</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
                    <p>© 2026 Education Hub Surat. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;