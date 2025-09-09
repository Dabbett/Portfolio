'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Intro from '@/components/Intro';
import Work from '@/components/Work';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

export type Section = 'intro' | 'work' | 'about' | 'contact';

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section | null>(null);
  const [isPreload, setIsPreload] = useState(true);

  useEffect(() => {
    // Remove preload class after component mounts
    const timer = setTimeout(() => {
      setIsPreload(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const showSection = (section: Section) => {
    setActiveSection(section);
  };

  const hideSection = () => {
    setActiveSection(null);
  };

  return (
    <div className={`min-h-screen ${isPreload ? 'is-preload' : ''}`} style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e3a8a 100%)' }}>
      {/* Background */}
      <div id="bg"></div>
      
      {/* Animated Background Objects */}
      <AnimatedBackground />

      {/* Wrapper */}
      <div 
        className="flex flex-col items-center justify-between relative min-h-screen w-full"
        style={{ 
          padding: '4rem 2rem',
          minHeight: '100vh',
          zIndex: 30
        }}
      >
        {/* Header */}
        <Header onNavigate={showSection} />

        {/* Main Content */}
        <div className="flex-1 flex items-start justify-center flex-col relative max-w-full z-30" style={{ marginTop: '3.5rem' }}>
          <AnimatePresence>
            {activeSection && (
              <motion.div
                initial={{ 
                  opacity: 0, 
                  height: 0,
                  scaleY: 0,
                  y: -20
                }}
                animate={{ 
                  opacity: 1, 
                  height: 'auto',
                  scaleY: 1,
                  y: 0
                }}
                exit={{ 
                  opacity: 0, 
                  height: 0,
                  scaleY: 0,
                  y: -20
                }}
                transition={{ 
                  duration: 0.5,
                  ease: [0.4, 0.0, 0.2, 1],
                  height: { duration: 0.4 },
                  scaleY: { duration: 0.3 }
                }}
                className="relative w-full max-w-2xl glass-container article-content overflow-hidden"
                style={{
                  transformOrigin: 'top',
                  transform: 'translateY(0.25rem)'
                }}
              >
                {activeSection === 'intro' && <Intro onClose={hideSection} />}
                {activeSection === 'work' && <Work onClose={hideSection} />}
                {activeSection === 'about' && <About onClose={hideSection} />}
                {activeSection === 'contact' && <Contact onClose={hideSection} />}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}