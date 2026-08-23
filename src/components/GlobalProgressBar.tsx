import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, Loader2 } from 'lucide-react';

interface GlobalProgressBarProps {
  isLoading: boolean;
  label?: string;
}

export const GlobalProgressBar: React.FC<GlobalProgressBarProps> = ({
  isLoading,
  label = 'Processing request...',
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer: any;
    if (isLoading) {
      setProgress(10);
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) return prev;
          const delta = Math.floor(Math.random() * 12) + 5;
          return Math.min(prev + delta, 90);
        });
      }, 300);
    } else {
      setProgress(100);
      const timeout = setTimeout(() => {
        setProgress(0);
      }, 400);
      return () => clearTimeout(timeout);
    }

    return () => clearInterval(timer);
  }, [isLoading]);

  if (!isLoading && progress === 0) return null;

  return (
    <AnimatePresence>
      <div className="fixed top-0 left-0 right-0 z-[100] pointer-events-none">
        {/* Animated Neon Lime Top Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="h-1 w-full bg-slate-900/40 relative overflow-hidden"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-lime-400 via-emerald-400 to-sky-400 shadow-[0_0_15px_#a3e635] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </motion.div>

        {/* Floating Active Task Badge when loading */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-2.5 left-1/2 -translate-x-1/2 bg-slate-900/95 border border-lime-500/40 px-3.5 py-1.5 rounded-full shadow-2xl backdrop-blur-md flex items-center gap-2 text-xs font-mono text-slate-200 pointer-events-auto"
          >
            <Loader2 className="w-3.5 h-3.5 text-lime-400 animate-spin" />
            <span className="text-lime-300 font-bold">{label}</span>
            <span className="text-[10px] bg-lime-950 text-lime-400 font-bold px-1.5 py-0.2 rounded border border-lime-800/40">
              {progress}%
            </span>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};
