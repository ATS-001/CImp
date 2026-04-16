import Link from 'next/link';
import { Terminal } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Terminal className="h-8 w-8 text-blue-400" />
            <span className="font-bold text-xl tracking-tight">Cimp</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <Link href="/topics" className="hover:text-blue-400 transition-colors">Topics</Link>
            <Link href="/about" className="hover:text-blue-400 transition-colors">About</Link>
          </nav>
          <div className="md:hidden flex items-center">
            <Link href="/topics" className="text-sm font-medium hover:text-blue-400">Topics</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
