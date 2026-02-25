import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PartnerSchools from './components/PartnerSchools';
import Results from './components/Results';
import VisionMission from './components/VisionMission';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppCTA from './components/WhatsAppCTA';
import Features from './components/Features';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 overflow-hidden font-sans selection:bg-brand-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <PartnerSchools />
        <Results />
        <VisionMission />
        <Features />
        <Stats />
        <Testimonials />
        <Contact />
        <WhatsAppCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
