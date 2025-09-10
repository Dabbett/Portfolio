'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.325 }}
      className="w-full absolute bottom-5 left-5  max-w-full text-center"
    >
      <p className="text-xs tracking-widest opacity-75  absolute mb-2 uppercase">
        &copy; DAbbett 2025
      </p>
    </motion.footer>
  );
}
