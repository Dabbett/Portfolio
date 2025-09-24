'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  const [isPreload, setIsPreload] = useState(true);

  useEffect(() => {
    // Remove preload class after component mounts
    const timer = setTimeout(() => {
      setIsPreload(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);


  return (
    <div className={`min-h-screen relative ${isPreload ? 'preload' : ''}`}>
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* 404 Content */}
        <main className="flex-1 flex items-center justify-center px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-center"
          >
            {/* 404 Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-container p-8 relative"
            >
              {/* Close Button */}
              <Link
                href="/"
                className="absolute -top-2 -right-2 w-12 h-12 cursor-pointer text-indent-16 overflow-hidden whitespace-nowrap z-10"
                aria-label="Go Home"
              >
                <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-transparent hover:bg-white/7.5 active:bg-white/17.5 transition-colors duration-200 flex items-center justify-center">
                  <Home className="w-5 h-5 text-white" />
                </div>
              </Link>

              {/* 404 Content */}
              <div className="text-center">
                <motion.h1
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-8xl font-bold text-white mb-4"
                >
                  404
                </motion.h1>
                
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="text-2xl font-semibold text-white mb-6"
                >
                  Oops! This page is missing... 
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="text-gray-300 mb-8 leading-relaxed"
                >
                  uhhh... it&apos;s dark and scary here... let&apos;s leave. 
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-lg transition-colors duration-200 text-sm border border-white hover:bg-white/7.5 active:bg-white/17.5 link-lift"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                  </Link>
                  
                  {/* <button
                    onClick={() => showSection('work')}
                    className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-lg transition-colors duration-200 text-sm border border-white hover:bg-white/7.5 active:bg-white/17.5"
                  >
                    <Home className="w-4 h-4" />
                    View My Work
                  </button> */}
                </motion.div>

                {/* Fun ASCII Art */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  className="mt-8 text-gray-400 text-sm font-mono"
                >
                  <pre className="text-xs">

                  </pre>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
