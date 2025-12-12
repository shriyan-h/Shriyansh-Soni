import React from 'react';
import { motion } from 'framer-motion';

interface BlockProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverScale?: boolean;
}

export const Block: React.FC<BlockProps> = ({ children, className = '', delay = 0, hoverScale = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={hoverScale ? { scale: 1.02, rotate: 0.5 } : {}}
      className={`bg-cream-200 text-olive-900 rounded-3xl p-6 shadow-xl overflow-hidden relative ${className}`}
    >
      {children}
    </motion.div>
  );
};