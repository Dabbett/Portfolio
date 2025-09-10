'use client';

import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

interface CodeToggleProps {
  onClick: () => void;
  isActive: boolean;
}

export default function CodeToggle({ onClick, isActive }: CodeToggleProps) {
  return (
    <motion.button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-30 p-4 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full hover:bg-gray-800/90 transition-colors group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <Code2 
        className={`w-6 h-6 transition-colors ${
          isActive ? 'text-blue-400' : 'text-gray-400 group-hover:text-white'
        }`} 
      />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-0 -translate-y-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        View Code
      </div>
    </motion.button>
  );
}
