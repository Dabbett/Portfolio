'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { X, Sparkles } from 'lucide-react';

interface IntroProps {
  onClose: () => void;
  onNavigate?: (section: 'intro' | 'work' | 'about' | 'contact') => void;
}

export default function Intro({ onClose, onNavigate }: IntroProps) {
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
        Intro
      </h2>

      <div className="image main mb-8">
        <Image
          src="/images/ProfilePic2.jpg"
          alt="Dylan Abbett Profile"
          width={400}
          height={400}
          className="w-full rounded"
        />
      </div>

      {/* TL;DR - Inline Highlight Style */}
      <div className="mb-8 relative">
        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
        <div className="pl-6">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-semibold text-blue-300 uppercase tracking-wider">tl;dr</span>
          </div>
          <p className="text-gray-200 text-sm leading-relaxed font-medium">
            Focused and devoted software developer with experience across web, mobile, and backend — React, Next.js, TypeScript, Swift, MongoDB, Supabase, WordPress, and Shopify. From MVPs to Greenfield Projects with AI-driven features to simple marketing websites, I can build your app; always aiming for clear, reliable, and scalable solutions.
          </p>
        </div>
      </div>

      {/* Full Bio */}
      <div className="mb-8 break-words hyphens-auto">
        <p className="mb-4">
          I`m Dylan Abbett, a full-stack software developer who`s focused on turning ideas into real, working products.
        </p>
        
        <p className="mb-4">
          I work across web and mobile — React, Next.js, and TypeScript on the front end, Swift for iOS, and MongoDB or Supabase on the backend — with experience building MVPs, integrating AI features, and launching greenfield products from the ground up. I`ve also built with headless CMS platforms like WordPress to create flexible, content-driven applications, and developed full-scale custom Shopify sites to power both physical and digital storefronts. My focus is on developing software that solves real problems while staying clear, reliable, and scalable.
        </p>
        
        <p className="mb-4">
          I am devoted to collaboration, whether it`s early in the process — helping shape vision, refine ideas, add perspective, and guide them into clear, workable solutions — or later on, stepping in to untangle challenges and clean up messy codebases to get projects back on track.
        </p>
        
        <p className="mb-6">
          My background as a first responder taught me to approach an endlessly varied set of problems with both practicality and creativity. That same mindset drives how I build software today — delivering creative, reliable solutions that are ready to handle real-world challenges.
        </p>
        
        <p>
          Take a look at some of my{' '}
        <span
          onClick={() => onNavigate?.('work')}
          className="text-white font-bold hover:border-b-white transition-colors duration-200 cursor-pointer"
        >
          previous work
        </span>{' '}
        and{' '}
        <span
          onClick={() => onNavigate?.('contact')}
          className="text-white font-bold hover:border-b-white transition-colors duration-200 cursor-pointer"
        >
          contact
        </span>{' '}
          me today.
        </p>
      </div>
    </motion.article>
  );
}