import { notFound } from 'next/navigation';
import { topics } from '@/lib/topics';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getTopicContent } from '@/lib/content';
import ScrollToTop from '@/components/ScrollToTop';

export default async function TopicPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const topic = topics.find((t) => t.id === resolvedParams.id);
  
  if (!topic) {
    notFound();
  }

  const content = await getTopicContent(resolvedParams.id);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Link 
        href={`/topics?category=${topic.module}`} 
        className="inline-flex items-center px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all font-medium text-sm shadow-sm mb-8 group"
      >
        <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to {topic.module === 'Programs' ? 'Programs' : topic.module === 'Question Papers' ? 'Papers' : 'Module Topics'}
      </Link>
      
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8 pb-6 border-b border-slate-200">
          {topic.title}
        </h1>
        
        <div className="prose prose-slate prose-blue max-w-none prose-pre:bg-slate-900 prose-pre:text-slate-50 prose-pre:whitespace-pre-wrap prose-pre:break-words prose-pre:overflow-x-hidden prose-headings:font-bold prose-a:text-blue-600 prose-h2:mt-16 prose-h2:mb-6 prose-h2:border-b prose-h2:border-slate-200 prose-h2:pb-4 prose-h3:mt-10 prose-h3:mb-4">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}
