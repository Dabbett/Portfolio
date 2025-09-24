'use client';

import { motion } from 'framer-motion';
import { Section } from '@/app/page';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { useTiltEffect } from '@/hooks/useTiltEffect';

interface HeaderProps {
  onNavigate: (section: Section) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [nameCardShimmerAngle, setNameCardShimmerAngle] = useState(45);
  const [navShimmerAngle, setNavShimmerAngle] = useState(90);

  // Memoize tilt effect options to prevent unnecessary re-creation
  const nameCardTiltOptions = useMemo(() => ({
    maxTilt: isMobile ? 0 : 8,
    scale: isMobile ? 1 : 1.02,
    magnetism: isMobile ? 0 : 0.05,
    glareEffect: !isMobile,
    speed: 200,
    proximityThreshold: isMobile ? 0 : 50
  }), [isMobile]);

  const navTiltOptions = useMemo(() => ({
    maxTilt: isMobile ? 0 : 7,
    scale: isMobile ? 1 : 1.015,
    magnetism: isMobile ? 0 : 0.04,
    glareEffect: !isMobile,
    speed: 175,
    proximityThreshold: isMobile ? 0 : 50
  }), [isMobile]);

  // Use optimized tilt effects
  const nameCardTilt = useTiltEffect<HTMLDivElement>(nameCardTiltOptions);
  const navTilt = useTiltEffect<HTMLUListElement>(navTiltOptions);

  // Memoize shimmer angle randomization to prevent unnecessary re-renders
  const randomizeShimmerAngles = useCallback(() => {
    setNameCardShimmerAngle(Math.random() * 180 - 45);
    setNavShimmerAngle(Math.random() * 180 - 45);
  }, []);

  // Randomize angles when tilt effects become active
  useEffect(() => {
    if (nameCardTilt.isHovered || navTilt.isHovered) {
      randomizeShimmerAngles();
    }
  }, [nameCardTilt.isHovered, navTilt.isHovered, randomizeShimmerAngles]);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return (
    <motion.header
      initial={isMobile ? { opacity: 1, scale: 1, filter: 'blur(0rem)' } : { opacity: 0, scale: 0.95, filter: 'blur(0.125rem)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0rem)' }}
      transition={isMobile ? { duration: 0 } : { duration: 0.325, delay: 1 }}
      className={`flex flex-col items-center max-w-full text-center ${isMobile ? '' : 'transition-all duration-325 ease-in-out'}`}
     
    >
      {/* Logo */}
      

      {/* Content */}
      <div 
        ref={nameCardTilt.ref}
        className="border-t border-b border-white w-full max-w-2xl glass-container-light relative overflow-hidden"
        style={{ 
          borderStyle: 'solid',
          marginTop: 'clamp(1.5rem, 5vw, 3.5rem)', // Responsive: 1.5rem on mobile, 3.5rem on desktop
          ...nameCardTilt.style,
        }}
      >
        {/* Holographic glare overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={nameCardTilt.glareStyle}
        />
        
        {/* Shimmer effect */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            background: `
              linear-gradient(
                ${nameCardShimmerAngle}deg,
                transparent 30%,
                rgba(255, 255, 255, 0.1) 50%,
                transparent 70%
              )
            `,
            animation: nameCardTilt.isHovered ? 'shimmer 3s ease-in-out infinite' : 'none',
          }}
        />
        <div 
          className={`transition-all duration-750 ease-in-out overflow-hidden ${isMobile ? '' : 'delay-250'}`}
          style={{
            padding: '2rem clamp(0.5rem, 10vw, 10rem) 1rem clamp(0.5rem, 10vw, 10rem)',
          }}
        >
          <h1 
            className="font-semibold leading-tight tracking-wide sm:tracking-widest mb-4 text-xl sm:text-2xl lg:text-4xl break-words"
            style={{
              lineHeight: '1.3',
              letterSpacing: 'clamp(0.1rem, 2vw, 0.5rem)'
            }}
          >
            Dylan Abbett
          </h1>
          <h4 
            className="font-light tracking-wide sm:tracking-widest uppercase text-xs sm:text-sm break-words"
          >
            Software Engineer
          </h4>
        </div>
      </div>

      {/* Navigation */}
      <nav style={{ marginTop: 'clamp(1.5rem, 4vw, 3.5rem)' }}>
        <ul 
          ref={navTilt.ref}
          className="flex flex-col sm:flex-row list-none p-0 border border-white rounded min-w-40 max-w-full glass-container-light relative overflow-hidden"
          style={navTilt.style}
        >
          {/* Holographic glare overlay for navigation */}
          <div 
            className="absolute inset-0 pointer-events-none rounded"
            style={navTilt.glareStyle}
          />
          
          {/* Shimmer effect for navigation */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-25 rounded"
            style={{
              background: `
                linear-gradient(
                  ${navShimmerAngle}deg,
                  transparent 30%,
                  rgba(255, 255, 255, 0.1) 50%,
                  transparent 70%
                )
              `,
              animation: navTilt.isHovered ? 'shimmer 3s ease-in-out infinite' : 'none',
            }}
          />
          <li className="border-t sm:border-t-0 border-white first:border-t-0">
            <button
              onClick={() => {
                onNavigate('intro');
                // Scroll to position nav at top with margin
                setTimeout(() => {
                  const nav = document.querySelector('nav');
                  if (nav) {
                    const navRect = nav.getBoundingClientRect();
                    const scrollTop = window.pageYOffset + navRect.top - 20; // 20px margin
                    window.scrollTo({ top: scrollTop, behavior: 'smooth' });
                  }
                }, 1000);
              }}
              className="block w-full sm:min-w-30 text-xs font-light tracking-widest uppercase border-b-0 hover:bg-white/7.5 active:bg-white/17.5 transition-colors duration-200"
              style={{
                height: '2.75rem',
                lineHeight: '2.75rem',
                padding: '0 1.25rem 0 1.45rem'
              }}
            >
              Intro
            </button>
          </li>
          <li className="border-t sm:border-t-0 sm:border-l border-white">
            <button
              onClick={() => {
                onNavigate('work');
                // Scroll to position nav at top with margin
                setTimeout(() => {
                  const nav = document.querySelector('nav');
                  if (nav) {
                    const navRect = nav.getBoundingClientRect();
                    const scrollTop = window.pageYOffset + navRect.top - 20; // 20px margin
                    window.scrollTo({ top: scrollTop, behavior: 'smooth' });
                  }
                }, 1000);
              }}
              className="block w-full sm:min-w-30 text-xs font-light tracking-widest uppercase border-b-0 hover:bg-white/7.5 active:bg-white/17.5 transition-colors duration-200"
              style={{
                height: '2.75rem',
                lineHeight: '2.75rem',
                padding: '0 1.25rem 0 1.45rem'
              }}
            >
              Work
            </button>
          </li>
          <li className="border-t sm:border-t-0 sm:border-l border-white">
            <button
              onClick={() => {
                onNavigate('about');
                // Scroll to position nav at top with margin
                setTimeout(() => {
                  const nav = document.querySelector('nav');
                  if (nav) {
                    const navRect = nav.getBoundingClientRect();
                    const scrollTop = window.pageYOffset + navRect.top - 20; // 20px margin
                    window.scrollTo({ top: scrollTop, behavior: 'smooth' });
                  }
                }, 1000);
              }}
              className="block w-full sm:min-w-30 text-xs font-light tracking-widest uppercase border-b-0 hover:bg-white/7.5 active:bg-white/17.5 transition-colors duration-200"
              style={{
                height: '2.75rem',
                lineHeight: '2.75rem',
                padding: '0 1.25rem 0 1.45rem'
              }}
            >
              About
            </button>
          </li>
          <li className="border-t sm:border-t-0 sm:border-l border-white">
            <button
              onClick={() => {
                onNavigate('contact');
                // Scroll to position nav at top with margin
                setTimeout(() => {
                  const nav = document.querySelector('nav');
                  if (nav) {
                    const navRect = nav.getBoundingClientRect();
                    const scrollTop = window.pageYOffset + navRect.top - 20; // 20px margin
                    window.scrollTo({ top: scrollTop, behavior: 'smooth' });
                  }
                }, 1000);
              }}
              className="block w-full sm:min-w-30 text-xs font-light tracking-widest uppercase border-b-0 hover:bg-white/7.5 active:bg-white/17.5 transition-colors duration-200"
              style={{
                height: '2.75rem',
                lineHeight: '2.75rem',
                padding: '0 1.25rem 0 1.45rem'
              }}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}