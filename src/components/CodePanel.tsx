'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, Code2 } from 'lucide-react';

interface CodePanelProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string | null;
}

const codeSnippets = {
  intro: {
    title: "Intro Component",
    description: "Professional introduction with TL;DR section and interactive navigation",
    code: `'use client';

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
      {/* TL;DR Section */}
      <div className="mb-8 relative">
        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
        <div className="pl-6">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-semibold text-blue-300 uppercase tracking-wider">tl;dr</span>
          </div>
          <p className="text-gray-200 text-sm leading-relaxed font-medium">
            Focused and devoted software developer with experience across web, mobile, and backend — React, Next.js, TypeScript, Swift, MongoDB, Supabase, WordPress, and Shopify.
          </p>
        </div>
      </div>

      {/* Interactive Navigation */}
      <p>
        Take a look at some of my{' '}
        <span
          onClick={() => onNavigate?.('work')}
          className="text-white hover:border-b-white transition-colors duration-200 cursor-pointer"
        >
          previous work
        </span>{' '}
        and{' '}
        <span
          onClick={() => onNavigate?.('contact')}
          className="text-white hover:border-b-white transition-colors duration-200 cursor-pointer"
        >
          contact
        </span>{' '}
        me today.
      </p>
    </motion.article>
  );
}`,
    highlights: [
      "Interactive text navigation buttons",
      "TL;DR section with gradient styling",
      "Optional navigation prop with type safety",
      "Smooth hover transitions"
    ]
  },
  work: {
    title: "Work Component",
    description: "Portfolio showcase with current projects including TidesBeverageCo and accessibility features",
    code: `'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { X, ExternalLink, BookOpen } from 'lucide-react';

const projects: Project[] = [
  {
    id: 'mangrove',
    title: 'Mangrove',
    description: 'Designed and built as a mobile-first web app, Mangrove offers users a guided emotional journey—from navigating grief to experiencing joy, from burnout to finding inspiration.',
    image: '/images/MangroveHomepage.png',
    link: 'https://mangrove-tau.vercel.app/',
    technologies: 'Built with Next.js, React, and TypeScript, Mangrove uses Tailwind CSS and Framer Motion for smooth animations, Groq and LLaMA 4 for fast and empathetic AI responses.',
  },
  {
    id: 'tides-beverage',
    title: 'TidesBeverageCo',
    description: 'Custom e-commerce solution for a local craft beverage company. Built a complete online storefront with custom Shopify integration, mobile optimization, and seamless customer experience.',
    image: '/images/TidesBeverageCo.png',
    link: 'https://tidesbeverage.com',
    technologies: 'Shopify, E-commerce, Custom Design, Mobile Optimization',
    blogPost: 'tides-beverage-co'
  },
  // ... more projects
];

export default function Work({ onClose, onShowBlogPost }: WorkProps) {
  return (
    <motion.article className="relative">
      <h2 className="text-2xl font-semibold leading-tight tracking-widest mb-8 border-b border-white w-max pb-2">
        Work
      </h2>
      
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-container p-6"
            role="article"
            aria-labelledby={\`project-\${project.id}-title\`}
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <Image
                  src={project.image}
                  alt={\`\${project.title} - \${project.description.substring(0, 100)}...\`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              
              <div className="md:w-2/3">
                <h3 id={\`project-\${project.id}-title\`} className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 text-sm"
                    aria-label={\`View \${project.title} project (opens in new tab)\`}
                  >
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    View Project
                  </a>
                  
                  {project.blogPost && onShowBlogPost && (
                    <button
                      onClick={() => onShowBlogPost(project.blogPost!)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200 text-sm"
                      aria-label={\`Read case study for \${project.title}\`}
                    >
                      <BookOpen className="w-4 h-4" aria-hidden="true" />
                      Read Case Study
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.article>
  );
}`,
    highlights: [
      "Current project portfolio with TidesBeverageCo",
      "Accessibility features with ARIA labels",
      "Semantic HTML with article elements",
      "Interactive case study buttons",
      "Lazy loading and performance optimization"
    ]
  },
  about: {
    title: "About Component",
    description: "Personal story with updated content and interactive navigation",
    code: `'use client';

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
          className="text-white font-bold hover:border-b-white transition-colors duration-200 cursor-pointer"
          onClick={() => onNavigate?.('contact')}
        >
          Contact
        </span>{' '}
        page to have a chat and see if we are the right fit for <em>each other!</em>
      </p>
    </motion.article>
  );
}`,
    highlights: [
      "Updated personal story content",
      "Interactive Contact navigation",
      "Professional fire service to tech transition story",
      "Family and adventure elements",
      "Proper HTML entity encoding (&apos;)"
    ]
  },
  contact: {
    title: "Contact Component",
    description: "Interactive contact section with typewriter effects and glassmorphism buttons",
    code: `'use client';

import { motion } from 'framer-motion';
import { X, Mail, LinkedinIcon, Github } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Contact({ onClose }: ContactProps) {
  const [emailText, setEmailText] = useState('');
  const [linkedinText, setLinkedinText] = useState('');
  const [githubText, setGithubText] = useState('');
  const [isTypingEmail, setIsTypingEmail] = useState(false);
  const [isTypingLinkedin, setIsTypingLinkedin] = useState(false);
  const [isTypingGithub, setIsTypingGithub] = useState(false);

  const typewriterText = (text: string, setText: (text: string) => void, setIsTyping: (typing: boolean) => void, allowTypo: boolean = true) => {
    const typos = ['Eemial   ', 'Get Hub    '];
    const correctedTexts = ['Email Me', 'GitHub'];
    
    let currentIndex = 0;
    
    const typeChar = () => {
      if (currentIndex < text.length) {
        // Random chance to make a typo (only if allowed and not LinkedIn)
        if (allowTypo && Math.random() < 0.3 && currentIndex > 2 && text !== 'LinkedIn') {
          const typoText = typos[correctedTexts.indexOf(text)];
          if (typoText && currentIndex < typoText.length) {
            setText(typoText.substring(0, currentIndex + 1));
            currentIndex++;
            setTimeout(() => {
              // Pause before correction
              setTimeout(() => {
                // Backspace to correct
                let backspaceIndex = currentIndex;
                const backspace = () => {
                  if (backspaceIndex > 0) {
                    setText(typoText.substring(0, backspaceIndex - 1));
                    backspaceIndex--;
                    setTimeout(backspace, 50 + Math.random() * 100);
                  } else {
                    // Start typing correct text
                    currentIndex = 0;
                    const correctType = () => {
                      if (currentIndex < text.length) {
                        setText(text.substring(0, currentIndex + 1));
                        currentIndex++;
                        setTimeout(correctType, 80 + Math.random() * 120);
                      } else {
                        setIsTyping(false);
                      }
                    };
                    correctType();
                  }
                };
                backspace();
              }, 200 + Math.random() * 300);
            }, 100 + Math.random() * 200);
          } else {
            setText(text.substring(0, currentIndex + 1));
            currentIndex++;
            setTimeout(typeChar, 80 + Math.random() * 120);
          }
        } else {
          setText(text.substring(0, currentIndex + 1));
          currentIndex++;
          setTimeout(typeChar, 80 + Math.random() * 120);
        }
      } else {
        setIsTyping(false);
      }
    };
    
    typeChar();
  };

  const typewriterGitHub = (setText: (text: string) => void, setIsTyping: (typing: boolean) => void) => {
    const attempts = [
      { text: 'GitHub', typo: 'Get Hub    ' },
      { text: 'GitHub', typo: 'Githb' },
      { text: 'GitHub', typo: 'GitHub' }
    ];
    
    let attemptIndex = 0;
    let currentIndex = 0;
    
    const typeAttempt = () => {
      const attempt = attempts[attemptIndex];
      const typoText = attempt.typo;
      
      const typeChar = () => {
        if (currentIndex < typoText.length) {
          setText(typoText.substring(0, currentIndex + 1));
          currentIndex++;
          setTimeout(typeChar, 80 + Math.random() * 120);
        } else {
          // Finished typing this attempt
          if (attemptIndex < attempts.length - 1) {
            // Not the final attempt, pause and backspace
            setTimeout(() => {
              let backspaceIndex = currentIndex;
              const backspace = () => {
                if (backspaceIndex > 0) {
                  setText(typoText.substring(0, backspaceIndex - 1));
                  backspaceIndex--;
                  setTimeout(backspace, 50 + Math.random() * 100);
                } else {
                  // Start next attempt
                  attemptIndex++;
                  currentIndex = 0;
                  
                  if (attemptIndex === 1) {
                    // Second attempt - add frustrated pause with blinking cursor
                    setTimeout(() => {
                      typeAttempt();
                    }, 1000);
                  } else {
                    // Third attempt - start immediately
                    typeAttempt();
                  }
                }
              };
              backspace();
            }, 200 + Math.random() * 300);
          } else {
            // Final attempt - we're done
            setIsTyping(false);
          }
        }
      };
      
      typeChar();
    };
    
    typeAttempt();
  };

  useEffect(() => {
    // Start typewriter effect with 1 second delay
    const timer = setTimeout(() => {
      // Email first
      setIsTypingEmail(true);
      typewriterText('Email Me', setEmailText, setIsTypingEmail, true);
      
      // LinkedIn after 2 second pause
      setTimeout(() => {
        setIsTypingLinkedin(true);
        typewriterText('LinkedIn', setLinkedinText, setIsTypingLinkedin, false);
      }, 3000);
      
      // GitHub after another 2 second pause
      setTimeout(() => {
        setIsTypingGithub(true);
        typewriterGitHub(setGithubText, setIsTypingGithub);
      }, 5000);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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

      {/* Header */}
      <h2 className="text-2xl font-semibold leading-tight tracking-widest mb-8 border-b border-white w-max pb-2">
        Contact
      </h2>

      {/* Main Email CTA */}
      <div className="mb-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-light text-white mb-2 uppercase tracking-wide">Ready to collaborate?</h3>
          <p className="text-gray-400 text-sm">Let&apos;s discuss your next project</p>
        </div>
        
        <div className="flex justify-center border border-white rounded glass-container-light relative overflow-hidden">
          <a
            href="mailto:DylanMAbbett@gmail.com"
            className="group flex-1 relative"
            style={{ borderBottom: 'none' }}
          >
            <div className="w-full text-xs font-light tracking-widest uppercase hover:bg-white/7.5 active:bg-white/17.5 transition-colors duration-200 flex items-center justify-center gap-2 relative z-10"
              style={{
                height: '2.75rem',
                lineHeight: '2.75rem',
                padding: '0 1.25rem 0 1.45rem'
              }}
            >
              <Mail className="w-4 h-4 text-white" />
              <span>
                {emailText}
                {isTypingEmail && <span className="animate-pulse">|</span>}
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* Social Links */}
      <div className="mb-8">
        <h3 className="text-lg font-medium text-center text-white uppercase tracking-wide my-6">Or connect with me</h3>
        
        <div className="flex justify-center border border-white rounded glass-container-light relative overflow-hidden">
          <a
            href="https://www.linkedin.com/in/dylan-abbett-783a70241/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 border-r border-white last:border-r-0 relative"
            style={{ borderBottom: 'none' }}
          >
            <div className="w-full text-xs font-light tracking-widest uppercase hover:bg-white/7.5 active:bg-white/17.5 transition-colors duration-200 flex items-center justify-center gap-2 relative z-10"
              style={{
                height: '2.75rem',
                lineHeight: '2.75rem',
                padding: '0 1.25rem 0 1.45rem'
              }}
            >
              <LinkedinIcon className="w-4 h-4 text-blue-400" />
              <span>
                {linkedinText}
                {isTypingLinkedin && <span className="animate-pulse">|</span>}
              </span>
            </div>
          </a>
          
          <a
            href="https://github.com/Dabbett"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 border-r border-white last:border-r-0 relative"
            style={{ borderBottom: 'none' }}
          >
            <div className="w-full text-xs font-light tracking-widest uppercase hover:bg-white/7.5 active:bg-white/17.5 transition-colors duration-200 flex items-center justify-center gap-2 relative z-10"
              style={{
                height: '2.75rem',
                lineHeight: '2.75rem',
                padding: '0 1.25rem 0 1.45rem'
              }}
            >
              <Github className="w-4 h-4 text-purple-400" />
              <span>
                {githubText}
                {isTypingGithub && <span className="animate-pulse">|</span>}
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* Footer Message */}
      <div className="text-left">
        <p className="text-gray-400 text-sm leading-relaxed">
          I&apos;m always interested in discussing new opportunities, innovative projects, 
          and collaborations. Whether you have a project in mind or just want to chat 
          about technology, feel free to reach out!
        </p>
      </div>
    </motion.article>
  );
}`,
    highlights: [
      "Interactive typewriter effects with realistic typos",
      "Sequential button typing with 2-second delays",
      "GitHub triple-attempt with frustrated pause",
      "Individual cursor states for each button",
      "Glassmorphism button design",
      "Professional contact layout with CTA",
      "Accessibility features and proper ARIA labels"
    ]
  }
};

export default function CodePanel({ isOpen, onClose, activeSection }: CodePanelProps) {
  const [selectedLanguage] = useState<'tsx' | 'css' | 'js'>('tsx');
  
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
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700 bg-gray-800">
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
                  <div className="px-4 py-4 bg-gray-800 border-b border-gray-700">
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
                      
                      <div className="h-full overflow-auto px-4 py-4">
                        <pre className="text-sm text-gray-300 leading-relaxed m-0">
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
