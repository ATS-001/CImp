'use client';

import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import LoadingScreen from './LoadingScreen';

export default function GlobalLoading() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // When pathname or searchParams changes, we finish loading
    const frame = requestAnimationFrame(() => {
      setLoading(false);
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      try {
        if (!e.target || !(e.target instanceof Element)) return;
        const target = e.target;
        const anchor = target.closest('a');
        
        if (anchor && 
            typeof anchor.href === 'string' && 
            anchor.href.startsWith(window.location.origin) && 
            anchor.target !== '_blank' &&
            !anchor.hasAttribute('download') &&
            anchor.href !== window.location.href &&
            !anchor.href.includes('#')) {
          
          // Link clicked - start loading
          setLoading(true);
        }
      } catch (err) {
        // Ignore native event errors to prevent bubbling to AI Studio logger
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
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999]"
        >
          <LoadingScreen />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
