'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X, Code2 } from 'lucide-react';

interface CodePanelProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string | null;
}

const codeSnippets = {
  intro: {
    title: "Intro Component",
    description: "Clean, responsive profile introduction with optimized image handling",
    code: `'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';

export default function Intro({ onClose }: IntroProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.325 }}
      className="relative"
    >
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
        Welcome to my portfolio! I'm a passionate software engineer 
        with expertise in modern web technologies...
      </p>
    </motion.article>
  );
}`,
    highlights: [
      "Next.js Image optimization for performance",
      "Framer Motion for smooth animations",
      "Responsive design with Tailwind CSS",
      "Accessibility-first approach"
    ]
  },
  work: {
    title: "Work Component",
    description: "Dynamic project showcase with interactive animations",
    code: `'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { X, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "ReelSmart",
    description: "AI-powered fishing app with real-time analytics",
    tech: ["React", "Node.js", "TensorFlow", "MongoDB"],
    image: "/images/ReelSmart.jpg"
  },
  // ... more projects
];

export default function Work({ onClose }: WorkProps) {
  return (
    <motion.article className="relative">
      <h2 className="text-2xl font-semibold mb-8">My Work</h2>
      
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-container p-6"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={200}
              className="w-full rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(tech => (
                <span key={tech} className="px-2 py-1 bg-blue-500/20 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.article>
  );
}`,
    highlights: [
      "Dynamic project rendering with map()",
      "Staggered animations for visual appeal",
      "Responsive grid layout",
      "Tech stack visualization"
    ]
  },
  about: {
    title: "About Component",
    description: "Personal story with optimized image handling and smooth transitions",
    code: `'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';

export default function About({ onClose }: AboutProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.325 }}
      className="relative"
    >
      <h2 className="text-2xl font-semibold mb-8">About Me</h2>
      
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
        When I&apos;m not doing codewars you can find me traveling 
        with my nuclear family based out of Wilmington, NC...
      </p>
    </motion.article>
  );
}`,
    highlights: [
      "Next.js Image component for optimization",
      "Proper HTML entity encoding (&apos;)",
      "Smooth motion transitions",
      "Semantic HTML structure"
    ]
  },
  contact: {
    title: "Contact Component",
    description: "Professional contact form with social links and accessibility",
    code: `'use client';

import { motion } from 'framer-motion';
import { X, Mail, LinkedinIcon, Github } from 'lucide-react';

export default function Contact({ onClose }: ContactProps) {
  return (
    <motion.article className="relative flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold mb-8">Contact</h2>
      
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Mail className="w-5 h-5" />
          <span>Reach out to me at:</span>
        </div>
        <div className="break-all text-base sm:text-lg">
          DylanMAbbett@gmail.com
        </div>
      </div>

      <ul className="icons">
        <li>
          <a
            href="https://www.linkedin.com/in/dylan-abbett-783a70241/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-full border border-white hover:bg-white/7.5"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </li>
        {/* More social links... */}
      </ul>
    </motion.article>
  );
}`,
    highlights: [
      "Accessible social media links",
      "Responsive email display",
      "Hover state animations",
      "Proper ARIA labels"
    ]
  }
};

export default function CodePanel({ isOpen, onClose, activeSection }: CodePanelProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<'tsx' | 'css' | 'js'>('tsx');
  
  const currentCode = activeSection ? codeSnippets[activeSection as keyof typeof codeSnippets] : null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />
          
          {/* Panel */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-1/2 bg-gray-900 z-50 border-r border-gray-700"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-gray-800">
              <div className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-semibold text-white">
                  {currentCode?.title || 'Code Showcase'}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-700 rounded transition-colors"
                aria-label="Close panel"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Content */}
            <div className="h-full overflow-hidden flex flex-col">
              {currentCode ? (
                <>
                  {/* Description */}
                  <div className="p-4 bg-gray-800 border-b border-gray-700">
                    <p className="text-gray-300 text-sm mb-3">{currentCode.description}</p>
                    
                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {currentCode.highlights.map((highlight, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Code Editor */}
                  <div className="flex-1 overflow-hidden">
                    <div className="h-full bg-gray-950">
                      <div className="flex items-center gap-2 p-3 bg-gray-900 border-b border-gray-700">
                        <div className="flex gap-1">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-gray-400 text-sm ml-4">
                          {currentCode.title}.{selectedLanguage}
                        </span>
                      </div>
                      
                      <div className="p-4 h-full overflow-auto">
                        <pre className="text-sm text-gray-300 leading-relaxed">
                          <code className="language-tsx">{currentCode.code}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <Code2 className="w-12 h-12 mx-auto mb-4 text-gray-600" />
                    <p>Select a section to view its code</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
