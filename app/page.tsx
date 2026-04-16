import Link from 'next/link';
import { BookOpen, User, Github, ExternalLink, Code2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-12 text-center">
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="p-4 bg-blue-100 rounded-full">
              <Code2 className="h-16 w-16 text-blue-600" />
            </div>
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            Welcome to <span className="text-blue-600">Cimp</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Your comprehensive guide to C Programming, tailored for the KTU 2024 syllabus. Master concepts from basics to advanced file handling.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <a 
            href="https://hexnicai.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:border-blue-300 transition-all group"
          >
            <ExternalLink className="h-6 w-6 text-indigo-500 group-hover:text-indigo-600" />
            <span className="font-semibold text-slate-800 group-hover:text-indigo-600">HexnicAI</span>
          </a>

          <Link 
            href="/topics" 
            className="flex items-center justify-center space-x-3 p-6 bg-blue-600 border border-transparent rounded-xl shadow-sm hover:bg-blue-700 transition-all group"
          >
            <BookOpen className="h-6 w-6 text-white" />
            <span className="font-semibold text-white">Explore Topics</span>
          </Link>

          <Link 
            href="/about" 
            className="flex items-center justify-center space-x-3 p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:border-blue-300 transition-all group"
          >
            <User className="h-6 w-6 text-emerald-500 group-hover:text-emerald-600" />
            <span className="font-semibold text-slate-800 group-hover:text-emerald-600">About Me</span>
          </Link>

          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 p-6 bg-slate-900 border border-transparent rounded-xl shadow-sm hover:bg-slate-800 transition-all group"
          >
            <Github className="h-6 w-6 text-white" />
            <span className="font-semibold text-white">GitHub Repo</span>
          </a>
        </div>
      </div>
    </div>
  );
}
