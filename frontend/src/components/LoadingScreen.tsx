import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-[#0F172A] flex flex-col items-center justify-center p-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold font-display mb-12"
          >
            GV<span className="text-brand-primary">.</span>
          </motion.div>

          <div className="w-full max-w-md h-1 bg-white/5 rounded-full overflow-hidden mb-4 relative">
            <motion.div
              className="h-full bg-linear-to-r from-brand-primary to-brand-secondary"
              style={{ width: `${progress}%` }}
            />
            {/* Glow on the bar */}
            <div 
              className="absolute top-0 h-full bg-white blur-sm transition-all"
              style={{ left: `${progress}%`, width: '10px', marginLeft: '-5px' }}
            />
          </div>

          <div className="flex justify-between w-full max-w-md text-[10px] font-mono uppercase tracking-[0.3em] text-slate-500">
            <span>Loading Experience</span>
            <span>{Math.round(progress)}%</span>
          </div>

          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-24 text-[10px] font-mono text-slate-600 uppercase tracking-widest"
          >
            Gurram Vasudha Portfolio © 2026
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
