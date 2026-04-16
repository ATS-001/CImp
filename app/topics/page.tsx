import Link from 'next/link';
import { topics } from '@/lib/topics';
import { BookOpen, ChevronRight } from 'lucide-react';

export default function TopicsPage() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-slate-900 flex items-center">
          <BookOpen className="h-10 w-10 mr-4 text-blue-600" />
          C Programming Topics
        </h1>
        <p className="mt-4 text-xl text-slate-600">
          Comprehensive study materials for KTU 2024 Syllabus.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {topics.map((topic) => (
          <Link 
            key={topic.id} 
            href={`/topics/${topic.id}`}
            className="group bg-white rounded-2xl shadow-sm border border-slate-200 p-8 hover:shadow-lg hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
          >
            <h2 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 mb-3">
              {topic.title}
            </h2>
            <p className="text-slate-600 flex-grow">
              {topic.description}
            </p>
            <div className="mt-4 flex items-center text-blue-600 font-medium text-sm">
              Read more <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
