import Link from 'next/link';
import { topics } from '@/lib/topics';
import { BookOpen, ChevronRight, Code2, Layers, ArrowLeft, Database, Cpu, FileBox, FileText } from 'lucide-react';
import SearchTopics from '@/components/SearchTopics';

export default async function TopicsPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const resolvedParams = await searchParams;
  const category = resolvedParams.category;

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 flex items-center justify-center">
            <Layers className="h-10 w-10 mr-4 text-blue-600" />
            Course Sections
          </h1>
          <p className="mt-4 text-xl text-slate-600">
            Select a section or search to find specific topics.
          </p>
        </div>

        <SearchTopics topics={topics} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <Link 
            href="/topics?category=Module 1"
            className="group bg-white rounded-2xl shadow-sm border border-slate-200 p-8 hover:shadow-lg hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
          >
            <div className="p-5 bg-blue-50 rounded-full mb-6 group-hover:bg-blue-100 transition-colors">
              <BookOpen className="h-12 w-12 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 mb-3">
              Module 1
            </h2>
            <p className="text-slate-600 text-sm">
              Basic concepts, Data Types, I/O, Operators, and Control Statements.
            </p>
          </Link>

          <Link 
            href="/topics?category=Module 2"
            className="group bg-white rounded-2xl shadow-sm border border-slate-200 p-8 hover:shadow-lg hover:border-purple-400 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
          >
            <div className="p-5 bg-purple-50 rounded-full mb-6 group-hover:bg-purple-100 transition-colors">
              <Database className="h-12 w-12 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 group-hover:text-purple-600 mb-3">
              Module 2
            </h2>
            <p className="text-slate-600 text-sm">
              Arrays, Strings, Built-in Methods, Enumerations, and Typedef.
            </p>
          </Link>

          <Link 
            href="/topics?category=Module 3"
            className="group bg-white rounded-2xl shadow-sm border border-slate-200 p-8 hover:shadow-lg hover:border-orange-400 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
          >
            <div className="p-5 bg-orange-50 rounded-full mb-6 group-hover:bg-orange-100 transition-colors">
              <Cpu className="h-12 w-12 text-orange-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 group-hover:text-orange-600 mb-3">
              Module 3
            </h2>
            <p className="text-slate-600 text-sm">
              Funcs, Recursion, CLI Args, Structures, Unions, Storage Classes.
            </p>
          </Link>

          <Link 
            href="/topics?category=Module 4"
            className="group bg-white rounded-2xl shadow-sm border border-slate-200 p-8 hover:shadow-lg hover:border-rose-400 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
          >
            <div className="p-5 bg-rose-50 rounded-full mb-6 group-hover:bg-rose-100 transition-colors">
              <FileBox className="h-12 w-12 text-rose-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 group-hover:text-rose-600 mb-3">
              Module 4
            </h2>
            <p className="text-slate-600 text-sm">
              Pointers, Dynamic Memory, Heap vs Stack, and File Handling.
            </p>
          </Link>

          <Link 
            href="/topics?category=Programs"
            className="group bg-white rounded-2xl shadow-sm border border-slate-200 p-8 hover:shadow-lg hover:border-emerald-400 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
          >
            <div className="p-5 bg-emerald-50 rounded-full mb-6 group-hover:bg-emerald-100 transition-colors">
              <Code2 className="h-12 w-12 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 group-hover:text-emerald-600 mb-3">
              Programs
            </h2>
            <p className="text-slate-600 text-sm">
              Practice programs, logic questions, and challenges for all modules.
            </p>
          </Link>

          <Link 
            href="/topics?category=Question Papers"
            className="group bg-white rounded-2xl shadow-sm border border-slate-200 p-8 hover:shadow-lg hover:border-indigo-400 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
          >
            <div className="p-5 bg-indigo-50 rounded-full mb-6 group-hover:bg-indigo-100 transition-colors">
              <FileText className="h-12 w-12 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 group-hover:text-indigo-600 mb-3">
              Question Papers
            </h2>
            <p className="text-slate-600 text-sm">
              Analysis and solutions for KTU 2024 and 2025 examination problems.
            </p>
          </Link>
        </div>
      </div>
    );
  }

  const filteredTopics = topics.filter(t => t.module === category);
  
  const getIcon = () => {
    if (category === 'Module 1') return <BookOpen className="h-10 w-10 mr-4 text-blue-600" />;
    if (category === 'Module 2') return <Database className="h-10 w-10 mr-4 text-purple-600" />;
    if (category === 'Module 3') return <Cpu className="h-10 w-10 mr-4 text-orange-600" />;
    if (category === 'Module 4') return <FileBox className="h-10 w-10 mr-4 text-rose-600" />;
    if (category === 'Question Papers') return <FileText className="h-10 w-10 mr-4 text-indigo-600" />;
    return <Code2 className="h-10 w-10 mr-4 text-emerald-600" />;
  };

  const getHoverColors = () => {
    if (category === 'Module 1') return 'hover:border-blue-400 group-hover:text-blue-600';
    if (category === 'Module 2') return 'hover:border-purple-400 group-hover:text-purple-600';
    if (category === 'Module 3') return 'hover:border-orange-400 group-hover:text-orange-600';
    if (category === 'Module 4') return 'hover:border-rose-400 group-hover:text-rose-600';
    if (category === 'Question Papers') return 'hover:border-indigo-400 group-hover:text-indigo-600';
    return 'hover:border-emerald-400 group-hover:text-emerald-600';
  };

  const getLinkColor = () => {
    if (category === 'Module 1') return 'text-blue-600';
    if (category === 'Module 2') return 'text-purple-600';
    if (category === 'Module 3') return 'text-orange-600';
    if (category === 'Module 4') return 'text-rose-600';
    if (category === 'Question Papers') return 'text-indigo-600';
    return 'text-emerald-600';
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-10">
        <Link 
          href="/topics"
          className="inline-flex items-center px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-500 hover:text-slate-800 hover:border-slate-300 hover:bg-slate-50 mb-6 font-medium transition-all text-sm shadow-sm group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Sections
        </Link>
        <h1 className="text-4xl font-extrabold text-slate-900 flex items-center">
          {getIcon()}
          {category}
        </h1>
        <p className="mt-4 text-xl text-slate-600 mb-8">
          Explore the topics and materials for {category}.
        </p>
        <SearchTopics topics={topics} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {filteredTopics.map((topic) => (
          <Link 
            key={topic.id} 
            href={`/topics/${topic.id}`}
            className={`group bg-white rounded-2xl shadow-sm border border-slate-200 p-8 hover:shadow-lg ${category === 'Module 1' ? 'hover:border-blue-400' : (category === 'Module 2' ? 'hover:border-purple-400' : 'hover:border-emerald-400')} hover:-translate-y-1 transition-all duration-300 flex flex-col h-full`}
          >
            <h3 className={`text-xl font-bold text-slate-800 ${getHoverColors().split(' ')[1]} mb-3`}>
              {topic.title}
            </h3>
            <p className="text-slate-600 flex-grow">
              {topic.description}
            </p>
            <div className={`mt-4 flex items-center ${getLinkColor()} font-medium text-sm`}>
              Read more <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
