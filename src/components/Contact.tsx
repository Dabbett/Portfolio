'use client';

import { motion } from 'framer-motion';
import { X, Mail, LinkedinIcon, Github } from 'lucide-react';

interface ContactProps {
  onClose: () => void;
}

export default function Contact({ onClose }: ContactProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.325 }}
      className="relative flex flex-col items-center justify-center"
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
      <h2 className="text-2xl font-semibold leading-tight tracking-widest mb-8 border-b border-white w-max pb-2 mx-auto">
        Contact
      </h2>

      <div className="mb-8 text-center">
        <div className="text-lg font-semibold mb-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Mail className="w-5 h-5 flex-shrink-0" />
            <span>Reach out to me at:</span>
          </div>
          <div className="break-all text-base sm:text-lg">
            DylanMAbbett@gmail.com
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="mb-8 text-center">
        <h3 className="text-lg font-semibold mb-4">Connect with me</h3>
        <ul className="icons">
          {/* <li>
            <a
              href="https://www.x.com/DylanAbbett"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-white hover:bg-white/7.5 active:bg-white/17.5 transition-colors duration-200 text-center"
              aria-label="Twitter"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
          </li> */}
          <li>
            <a
              href="https://www.linkedin.com/in/dylan-abbett-783a70241/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-white hover:bg-white/7.5 active:bg-white/17.5 transition-colors duration-200 text-center"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Dabbett"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-white hover:bg-white/7.5 active:bg-white/17.5 transition-colors duration-200 text-center"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </li>
        </ul>
      </div>

      {/* Additional Contact Info */}
      <div className="text-sm text-gray-300 text-center">
        <p>
          I&apos;m always interested in discussing new opportunities, innovative projects, 
          and collaborations. Whether you have a project in mind or just want to chat 
          about technology, feel free to reach out!
        </p>
      </div>
    </motion.article>
  );
}
