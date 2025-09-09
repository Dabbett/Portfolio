'use client';

import { motion } from 'framer-motion';
import { Section } from '@/app/page';

interface HeaderProps {
  onNavigate: (section: Section) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, scale: 0.95, filter: 'blur(0.125rem)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0rem)' }}
      transition={{ duration: 0.325 }}
      className="flex flex-col items-center transition-all duration-325 ease-in-out max-w-full text-center"
      style={{
        backgroundImage: 'radial-gradient(rgba(0, 0, 0, 0.25) 25%, rgba(0, 0, 0, 0) 55%)'
      }}
    >
      {/* Logo */}
      

      {/* Content */}
      <div 
        className="border-t border-b border-white w-full max-w-2xl glass-container-light"
        style={{ 
          borderStyle: 'solid',
          marginTop: '3.5rem'
        }}
      >
        <div 
          className="transition-all duration-750 ease-in-out delay-250 overflow-hidden"
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
      <nav style={{ marginTop: '3.5rem' }}>
        <ul className="flex flex-col sm:flex-row list-none p-0 border border-white rounded min-w-40 max-w-full glass-container-light">
          <li className="border-t sm:border-t-0 sm:border-l border-white first:border-t-0 sm:first:border-l-0">
            <button
              onClick={() => onNavigate('intro')}
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
              onClick={() => onNavigate('work')}
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
              onClick={() => onNavigate('about')}
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
              onClick={() => onNavigate('contact')}
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
