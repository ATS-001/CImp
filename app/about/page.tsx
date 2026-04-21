import { User, Linkedin, ExternalLink, Github } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
        <div className="px-8 pb-8">
          <div className="relative -mt-16 mb-6">
            <div className="h-32 w-32 bg-white rounded-full p-2 shadow-md">
              <div className="h-full w-full bg-slate-100 rounded-full flex items-center justify-center">
                <User className="h-16 w-16 text-slate-400" />
              </div>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Aaron Thalakkottor Sooraj</h1>
          <p className="text-lg text-slate-600 mb-6">Creator of Cimp & Part of HexnicAI</p>
          
          <div className="prose prose-slate max-w-none mb-8">
            <p>
              Welcome to Cimp! This platform was created to provide a comprehensive and easy-to-understand guide for C programming, specifically tailored to the KTU 2024 syllabus.
            </p>
            <p>
              Cimp is proudly a part of the <strong>HexnicAI</strong> ecosystem, dedicated to building intelligent and educational tools for students and developers.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://www.linkedin.com/in/aaronts127pdz/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0A66C2] hover:bg-[#004182] transition-colors"
            >
              <Linkedin className="h-5 w-5 mr-2" />
              Connect on LinkedIn
            </a>
            <a 
              href="https://github.com/ATS-001/CImp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-base font-medium rounded-md text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <Github className="h-5 w-5 mr-2" />
              GitHub Repository
            </a>
            <a 
              href="https://hexnicai.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 transition-colors"
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              Visit HexnicAI
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
