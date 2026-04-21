'use client';

import { useState, useEffect } from 'react';
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

export default function LoadingScreen() {
  const [tipIndex, setTipIndex] = useState(() => Math.floor(Math.random() * LOADING_TIPS.length));

  useEffect(() => {
    const interval = setInterval(() => {
      setTipIndex(prev => (prev + 1) % LOADING_TIPS.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
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
        <div className="relative mb-10">
          <div className="p-8 bg-slate-900 rounded-[2.5rem] shadow-[0_0_50px_rgba(37,99,235,0.1)] border border-slate-800 relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-blue-600/10 transition-colors duration-500" />
            <Loader2 className="h-16 w-16 text-blue-500 animate-spin relative z-10" />
          </div>
          <div className="absolute -top-3 -right-3 w-6 h-6 bg-blue-500 rounded-full animate-pulse blur-sm" />
          <div className="absolute -top-3 -right-3 w-6 h-6 bg-blue-400 rounded-full animate-ping opacity-20" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-4xl font-black text-white tracking-tighter mb-3">
            C<span className="text-blue-500">imp</span>
          </h2>
          
          <div className="inline-flex items-center px-4 py-1.5 bg-blue-600/10 border border-blue-500/20 rounded-full mb-12">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse mr-3 shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
            <span className="text-xs font-bold text-blue-400 uppercase tracking-[0.2em]">System Initializing</span>
          </div>
        </motion.div>

        <div className="h-20 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={tipIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, ease: "circOut" }}
            >
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-3">Knowledge Module</p>
              <p className="text-base text-slate-100 font-medium leading-relaxed max-w-sm">
                {LOADING_TIPS[tipIndex]}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      {/* Bottom Progress Tracker */}
      <div className="absolute bottom-16 w-80 h-1 bg-slate-900 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 bg-[length:200%_100%]"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "loop"
          }}
        />
      </div>
      
      <p className="absolute bottom-8 text-[10px] font-bold text-slate-600 uppercase tracking-[0.4em]">
        Standard C Library : 0x00A1 [LOADED]
      </p>
    </div>
  );
}
