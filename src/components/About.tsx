'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';

interface AboutProps {
  onClose: () => void;
  onNavigate?: (section: 'intro' | 'work' | 'about' | 'contact') => void;
}

export default function About({ onClose, onNavigate }: AboutProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.325 }}
      className="relative"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute -top-2 -right-2 w-12 h-12 cursor-pointer text-indent-16 overflow-hidden whitespace-nowrap z-10"
        aria-label="Close"
      >
        <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-transparent hover:bg-white/7.5 active:bg-white/17.5 transition-colors duration-200 flex items-center justify-center">
          <X className="w-5 h-5 text-white" />
        </div>
      </button>

      {/* Content */}
      <h2 className="text-2xl font-semibold leading-tight tracking-widest mb-8 border-b border-white w-max pb-2">
        About
      </h2>

      <div className="image main mb-8">
        <Image
          src="/images/Adventure.jpg"
          alt="Adventure photo"
          width={600}
          height={400}
          className="w-full rounded"
        />
      </div>

      <p className="mb-8">
        After a decade in the fire service, I found myself drawn to technology — fueled by a passion for innovation, AI, and building tools that make a difference. That career taught me how to stay calm under pressure, think practically, and get creative when solving problems — lessons I carry into my work as a developer today.
        <br />
        <br />
        Along the way, I&apos;ve built projects like Mangrove, a tool for supporting mental fitness, and ReelSmart, which blends my personal passions with my professional work — something I had dreamed of for years.
        <br />
        <br />
        Outside of work, I&apos;m happiest on the water in Wilmington with my family, boating, fishing, or combing the beach. We trade the coast for the mountains whenever we can, skiing, hiking, and snowmobiling, but the ocean will always feel like home. One of my proudest accomplishments is seeing my kids embrace that same love for adventure, often naming our outings with their own excitement.
        <br />
        <br />
        Head over to my{' '}
        <span 
          className="text-white font-bold hover:border-b-white transition-colors duration-200 cursor-pointer link-lift-subtle"
          onClick={() => onNavigate?.('contact')}
        >
          Contact
        </span>{' '}
        page to have a chat and see if we are the right fit for <em>each other!</em>
      </p>
    </motion.article>
  );
}
