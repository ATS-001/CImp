'use client';

import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { Loader2, Code2, Cpu, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const LOADING_TIPS = [
  "C was developed by Dennis Ritchie between 1972 and 1973 at Bell Labs.",
  "The 'C' in C stands for nothing—it was simply the successor to the B language.",
  "C is the foundation for Linux, Windows, and macOS kernels.",
  "Arrays in C are zero-indexed, meaning the first element is always at index 0.",
  "Pointers are variables that store the memory address of another variable.",
  "Static variables in C retain their value even after they go out of scope.",
  "Malloc and Calloc are used for dynamic memory allocation on the heap.",
  "The 'volatile' keyword tells the compiler a variable's value may change unexpectedly.",
  "C is considered a 'middle-level' language, combining high-level and low-level features."
];

export default function GlobalLoading() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [tipIndex, setTipIndex] = useState(0);

  useEffect(() => {
    // When pathname or searchParams changes, we finish loading
    const frame = requestAnimationFrame(() => {
      setLoading(false);
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, searchParams]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (loading) {
      // Defer to avoid synchronous setState warning
      const timeout = setTimeout(() => {
        setTipIndex(Math.floor(Math.random() * LOADING_TIPS.length));
      }, 0);
      
      interval = setInterval(() => {
        setTipIndex(prev => (prev + 1) % LOADING_TIPS.length);
      }, 3000);
      
      return () => {
        clearTimeout(timeout);
        clearInterval(interval);
      };
    }
  }, [loading]);

  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && 
          anchor.href && 
          anchor.href.startsWith(window.location.origin) && 
          anchor.target !== '_blank' &&
          !anchor.hasAttribute('download') &&
          anchor.href !== window.location.href) {
        
        // Link clicked - start loading
        setLoading(true);
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-900 overflow-hidden"
        >
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 rotate-12">
              <Code2 className="w-64 h-64 text-blue-400" />
            </div>
            <div className="absolute bottom-1/4 right-1/4 -rotate-12">
              <Cpu className="w-64 h-64 text-indigo-400" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Terminal className="w-96 h-96 text-slate-400" />
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center max-w-md px-6 text-center">
            <div className="relative mb-8">
              <div className="p-6 bg-slate-800 rounded-3xl shadow-2xl border border-slate-700 relative overflow-hidden group">
                <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/20 transition-colors duration-500" />
                <Loader2 className="h-12 w-12 text-blue-500 animate-spin relative z-10" />
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full animate-ping" />
            </div>

            <h2 className="text-3xl font-black text-white tracking-tight mb-2">
              C<span className="text-blue-500">imp</span>
            </h2>
            
            <div className="inline-flex items-center px-3 py-1 bg-blue-600/10 border border-blue-500/20 rounded-full mb-8">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse mr-2" />
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Compiling Assets</span>
            </div>

            <div className="h-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={tipIndex}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Did You Know?</p>
                  <p className="text-sm text-slate-100 font-medium leading-relaxed">
                    {LOADING_TIPS[tipIndex]}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
          {/* Bottom Progress Tracker */}
          <div className="absolute bottom-12 w-64 h-1 bg-slate-800 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-600 to-indigo-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          
          <p className="absolute bottom-6 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
            Standard C Library Load [OK]
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
