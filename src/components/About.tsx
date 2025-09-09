'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';

interface AboutProps {
  onClose: () => void;
}

export default function About({ onClose }: AboutProps) {
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
        When I'm not doing codewars you can find me traveling with my nuclear family based out of Wilmington, NC. I have a background in the fire service and am an avid fisherman and boat captain. We love the mountains, enjoying skiing, hiking and snow mobiling, but the ocean is our first love. It is my greatest accomplishment that my kids have taken my love for adventure and often refer to our frequent outings as such.
        <br />
        <br />
        After 10 years as a firefighter, I was driven to tech by my passion for innovation and AI and my desire to play a part in the future of tech. I thrive under pressure but know how to slow down and enjoy the little things in life. I am the creator of ReelSmart, which melds my hobbies with my profession, a dream of mine for many years. Head over to my{' '}
        <button
          onClick={() => {/* Navigate to contact section */}}
          className="text-white hover:border-b-white transition-colors duration-200"
        >
          Contact
        </button>{' '}
        page to have a chat and see if we are the right fit for <em>each other!</em>
      </p>
    </motion.article>
  );
}
