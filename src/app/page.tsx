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
import CodePanel from '@/components/CodePanel';
import CodeToggle from '@/components/CodeToggle';

export type Section = 'intro' | 'work' | 'about' | 'contact';

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section | null>(null); // No default section
  const [isPreload, setIsPreload] = useState(true);
  const [isCodePanelOpen, setIsCodePanelOpen] = useState(false);
  const [hasLoggedWork, setHasLoggedWork] = useState(false);
  const [hasLoggedAbout, setHasLoggedAbout] = useState(false);
  const [hasLoggedContact, setHasLoggedContact] = useState(false);

  useEffect(() => {
    // Remove preload class after component mounts
    const timer = setTimeout(() => {
      setIsPreload(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const showSection = (section: Section) => {
    setActiveSection(section);
    
    // Log user navigation with easter egg facts (once per session)
    switch (section) {
      case 'work':
        if (!hasLoggedWork) {
          console.log('For 7 years while growing up Dylan was the owner/operator of a landscaping company in St Louis, Missouri working to earn money to fully restore a 1968 dodge dart in his spare time.');
          setHasLoggedWork(true);
        }
        break;
        case 'about':
          if (!hasLoggedAbout) {
            console.log('Dylan takes his work seriously but leaves ego at the door when making design or direction decisions. Getting laid off from agency work was the best thing that ever happened to him — it opened the door to chasing his dream career every single day.');
            setHasLoggedAbout(true);
          }
          break;
      case 'contact':
        if (!hasLoggedContact) {
          console.log('That\'s it — all that\'s left is to send me a message. I\'m excited to hear from you! you can email me at: AbbettDylan@gmail.com');
          setHasLoggedContact(true);
        }
        break;
        case 'intro':
          console.log('Fun fact: Dylan built this entire portfolio from scratch, including the interactive background animation that responds to button clicks!');
          break;
    }
  };

  const hideSection = () => {
    console.log('User closed section - Pro tip: Dylan always keeps his code clean and well-documented. This portfolio is built with TypeScript for type safety and Framer Motion for smooth animations!');
    setActiveSection(null); // Go back to no content
  };


  const toggleCodePanel = () => {
    setIsCodePanelOpen(!isCodePanelOpen);
  };

  return (
    <div className={`min-h-screen ${isPreload ? 'is-preload' : ''}`} style={{ 
      background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e3a8a 100%)',
      minHeight: '100dvh' // Dynamic viewport height for better mobile support
    }}>
      {/* Background */}
      <div id="bg"></div>
      
      {/* Animated Background Objects */}
      <AnimatedBackground />

      {/* Wrapper */}
      <div 
        className="flex flex-col items-center justify-between relative min-h-screen w-full"
        style={{ 
          padding: 'clamp(2rem, 6vw, 4rem) 2rem', // Responsive: 2rem on mobile, 4rem on desktop
          minHeight: '100dvh', // Dynamic viewport height for mobile
          zIndex: 30
        }}
      >
        {/* Header */}
        <Header onNavigate={showSection} />

        {/* Main Content */}
        <div className="flex-1 flex items-start justify-center flex-col relative max-w-full z-30 transition-all duration-500 ease-out" style={{ marginTop: 'clamp(1.5rem, 4vw, 3.5rem)' }}>
          <AnimatePresence>
            {activeSection && (
              <motion.div
                initial={{ 
                  opacity: 0, 
                  scaleY: 0,
                  y: -20
                }}
                animate={{ 
                  opacity: 1, 
                  scaleY: 1,
                  y: 0
                }}
                exit={{ 
                  opacity: 0, 
                  scaleY: 0,
                  y: -20
                }}
                transition={{ 
                  duration: 0.6,
                  ease: [0.4, 0.0, 0.2, 1],
                  scaleY: { duration: 0.5 },
                  opacity: { duration: 0.3 }
                }}
                className="relative w-full max-w-2xl glass-container article-content overflow-hidden"
                style={{
                  transformOrigin: 'top',
                  transform: 'translateY(0.25rem)'
                }}
              >
                <AnimatePresence mode="wait">
                  {activeSection === 'intro' && (
                    <motion.div
                      key="intro"
                      initial={{ opacity: 0, height: 0, y: -20 }}
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -20 }}
                      transition={{ 
                        duration: 0.6,
                        ease: [0.4, 0.0, 0.2, 1],
                        height: { duration: 0.5 },
                        opacity: { duration: 0.3 }
                      }}
                    >
                      <Intro onClose={hideSection} onNavigate={showSection} />
                    </motion.div>
                  )}
                  {activeSection === 'work' && (
                    <motion.div
                      key="work"
                      initial={{ opacity: 0, height: 0, y: -20 }}
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -20 }}
                      transition={{ 
                        duration: 0.6,
                        ease: [0.4, 0.0, 0.2, 1],
                        height: { duration: 0.5 },
                        opacity: { duration: 0.3 }
                      }}
                    >
                      <Work onClose={hideSection} />
                    </motion.div>
                  )}
                  {activeSection === 'about' && (
                    <motion.div
                      key="about"
                      initial={{ opacity: 0, height: 0, y: -20 }}
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -20 }}
                      transition={{ 
                        duration: 0.6,
                        ease: [0.4, 0.0, 0.2, 1],
                        height: { duration: 0.5 },
                        opacity: { duration: 0.3 }
                      }}
                    >
                      <About onClose={hideSection} onNavigate={showSection} />
                    </motion.div>
                  )}
                  {activeSection === 'contact' && (
                    <motion.div
                      key="contact"
                      initial={{ opacity: 0, height: 0, y: -20 }}
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -20 }}
                      transition={{ 
                        duration: 0.6,
                        ease: [0.4, 0.0, 0.2, 1],
                        height: { duration: 0.5 },
                        opacity: { duration: 0.3 }
                      }}
                    >
                      <Contact onClose={hideSection} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <Footer />
      </div>


      {/* Code Panel Toggle - Desktop Only */}
      <div className="hidden lg:block">
        <CodeToggle 
          onClick={toggleCodePanel} 
          isActive={isCodePanelOpen} 
        />
      </div>

      {/* Code Panel */}
      <CodePanel 
        isOpen={isCodePanelOpen}
        onClose={() => setIsCodePanelOpen(false)}
        activeSection={activeSection}
      />
    </div>
  );
}