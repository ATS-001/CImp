'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Terminal, Github, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Terminal className="h-8 w-8 text-blue-400" />
            <span className="font-bold text-xl tracking-tight">Cimp</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-blue-400 transition-colors font-medium">Home</Link>
            <Link href="/topics" className="hover:text-blue-400 transition-colors font-medium">Topics</Link>
            <Link href="/about" className="hover:text-blue-400 transition-colors font-medium">About</Link>
            <a 
              href="https://github.com/ATS-001/CImp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors flex items-center"
              title="GitHub Repository"
            >
              <Github className="h-5 w-5" />
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <a 
              href="https://github.com/ATS-001/CImp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-slate-800 border-t border-slate-700 overflow-hidden"
          >
            <nav className="flex flex-col p-4 space-y-4">
              <Link 
                href="/" 
                className="hover:text-blue-400 transition-colors font-medium px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/topics" 
                className="hover:text-blue-400 transition-colors font-medium px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Topics
              </Link>
              <Link 
                href="/about" 
                className="hover:text-blue-400 transition-colors font-medium px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <a 
                href="https://github.com/ATS-001/CImp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-400 font-bold px-2 py-1 bg-slate-900/50 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                <Github className="h-5 w-5" />
                <span>GitHub Repository</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
