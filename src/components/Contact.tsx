'use client';

import { motion } from 'framer-motion';
import { X, Mail, LinkedinIcon, Github } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ContactProps {
  onClose: () => void;
}

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
        typewriterText('LinkedIn', setLinkedinText, setIsTypingLinkedin, false); // No typo for LinkedIn
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
        
        <div className="flex justify-center  border border-white rounded glass-container-light relative overflow-hidden">
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
        <h3 className="text-lg font-medium text-center text-white uppercase tracking-wide mb-6" style={{ marginBottom: '1.5rem', marginTop: '1.5rem' }}>Or connect with me</h3>
        
        <div className="flex justify-center  border border-white rounded glass-container-light relative overflow-hidden">
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
}