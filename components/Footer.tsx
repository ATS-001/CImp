import Link from 'next/link';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="font-semibold text-slate-300">© 2026 HexnicAI || Part of ATS_PDZ</p>
          <p className="text-sm mt-1">© SINCE 2023 | ATS-PDZ</p>
          <p className="text-sm mt-1">ALL RIGHTS RESERVED.</p>
        </div>
        <div className="flex flex-col items-center md:items-end space-y-2">
          <a 
            href="mailto:aaronsooraj001@gmail.com" 
            className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span>Contact Us</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
