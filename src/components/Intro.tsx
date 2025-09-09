'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';

interface IntroProps {
  onClose: () => void;
}

export default function Intro({ onClose }: IntroProps) {
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
        className="absolute top-0 right-0 w-16 h-16 cursor-pointer text-indent-16 overflow-hidden whitespace-nowrap"
        aria-label="Close"
      >
        <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-transparent hover:bg-white/7.5 active:bg-white/17.5 transition-colors duration-200 flex items-center justify-center">
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

      <p className="mb-8 break-words hyphens-auto">
        My name is Dylan Abbett, your next software developer.
        <br />
        <br />
        I am passionate about innovation and aiming to leverage proficiency in cutting-edge software development methodologies, state-of-the-art programming languages, and robust software design principles to develop performance-optimized software solutions. I am eager to contribute to the success of complex software projects while fostering a collaborative and growth-oriented work environment. Take a look at some of my{' '}
        <button
          onClick={() => {/* Navigate to work section */}}
          className="text-white hover:border-b-white transition-colors duration-200"
        >
          previous work
        </button>{' '}
        and{' '}
        <button
          onClick={() => {/* Navigate to contact section */}}
          className="text-white hover:border-b-white transition-colors duration-200"
        >
          contact
        </button>{' '}
        me today.
      </p>
    </motion.article>
  );
}
