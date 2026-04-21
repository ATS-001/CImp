'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, ChevronRight, X, SlidersHorizontal, Check, Target, Type } from 'lucide-react';
import { Topic } from '@/lib/topics';

interface SearchTopicsProps {
  topics: Topic[];
}

const ALL_MODULES = ['Module 1', 'Module 2', 'Module 3', 'Module 4', 'Programs', 'Question Papers'];

// Helper to highlight matching text
function HighlightText({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <>{text}</>;
  const terms = query.trim().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return <>{text}</>;
  
  // Create a regex that matches any of the terms
  const regex = new RegExp(`(${terms.join('|')})`, 'gi');
  const parts = text.split(regex);
  
  return (
    <>
      {parts.map((part, i) => {
        const isMatch = terms.some(term => part.toLowerCase() === term.toLowerCase());
        return isMatch ? (
          <mark key={i} className="bg-blue-100 text-blue-900 rounded-[2px] px-0.5 font-semibold">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        );
      })}
    </>
  );
}

export default function SearchTopics({ topics }: SearchTopicsProps) {
  const [query, setQuery] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [exactMatch, setExactMatch] = useState(false);
  const [titleOnly, setTitleOnly] = useState(false);

  const toggleModule = (module: string) => {
    setSelectedModules(prev => 
      prev.includes(module) 
        ? prev.filter(m => m !== module) 
        : [...prev, module]
    );
  };

  const clearFilters = () => {
    setSelectedModules([]);
    setExactMatch(false);
    setTitleOnly(false);
    setQuery('');
  };

  // Pre-normalize topics
  const searchableTopics = useMemo(() => {
    return topics.map(topic => ({
      ...topic,
      _searchTitle: topic.title.toLowerCase(),
      _searchDesc: topic.description.toLowerCase(),
      _searchModule: topic.module.toLowerCase(),
    }));
  }, [topics]);

  const filteredTopics = useMemo(() => {
    const searchString = query.trim().toLowerCase();
    const searchTerms = searchString.split(/\s+/).filter(Boolean);
    
    return searchableTopics
      .filter(topic => {
        let matchesQuery = true;
        if (searchTerms.length > 0) {
          if (exactMatch) {
            matchesQuery = topic._searchTitle.includes(searchString) || 
                           (!titleOnly && topic._searchDesc.includes(searchString));
          } else {
            // AND logic: topic must contain ALL search terms
            matchesQuery = searchTerms.every(term => 
              topic._searchTitle.includes(term) ||
              (!titleOnly && topic._searchDesc.includes(term))
            );
          }
        }
        
        const matchesModule = selectedModules.length === 0 || 
          selectedModules.includes(topic.module);
          
        return matchesQuery && matchesModule;
      })
      .sort((a, b) => {
        if (!searchString) return 0;
        // Exact title match is top priority
        const aExact = a._searchTitle === searchString;
        const bExact = b._searchTitle === searchString;
        if (aExact && !bExact) return -1;
        if (!aExact && bExact) return 1;
        
        const aStarts = a._searchTitle.startsWith(searchString);
        const bStarts = b._searchTitle.startsWith(searchString);
        if (aStarts && !bStarts) return -1;
        if (!aStarts && bStarts) return 1;
        
        return 0;
      })
      .slice(0, 10);
  }, [query, searchableTopics, selectedModules, exactMatch, titleOnly]);

  const isActive = query.trim() !== '' || selectedModules.length > 0;

  return (
    <div className="relative w-full max-w-2xl mx-auto mb-12">
      <div className="flex gap-2 mb-4">
        <div className="relative flex-grow group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
          </div>
          <input
            type="text"
            className="block w-full pl-11 pr-12 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-800 placeholder-slate-400"
            placeholder="Search keywords or modules..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
            spellCheck="false"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className={`px-4 rounded-2xl border transition-all flex items-center gap-2 font-medium ${
            showAdvanced || exactMatch || titleOnly
              ? 'bg-blue-50 border-blue-200 text-blue-600 ring-2 ring-blue-100'
              : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
          }`}
          title="Search Modes"
        >
          <SlidersHorizontal className="h-5 w-5" />
          <span className="hidden sm:inline">Modes</span>
          {(exactMatch || titleOnly) && (
            <span className="flex items-center justify-center w-5 h-5 text-[10px] bg-blue-600 text-white rounded-full">
              {(exactMatch ? 1 : 0) + (titleOnly ? 1 : 0)}
            </span>
          )}
        </button>
      </div>

      {/* Instant Module Filters */}
      <div className="flex flex-wrap items-center gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mr-1">Filter:</span>
        {ALL_MODULES.map(module => {
          const selected = selectedModules.includes(module);
          return (
            <button
              key={module}
              onClick={() => toggleModule(module)}
              className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 border ${
                selected 
                  ? 'bg-blue-600 border-blue-600 text-white shadow-sm ring-2 ring-blue-100' 
                  : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {selected && <Check className="h-3 w-3" />}
              {module}
            </button>
          );
        })}
        {selectedModules.length > 0 && (
          <button 
            onClick={() => setSelectedModules([])}
            className="text-[10px] font-bold text-slate-400 hover:text-blue-600 uppercase ml-1 transition-colors"
          >
            Clear
          </button>
        )}
      </div>

      {showAdvanced && (
        <div className="mb-6 p-6 bg-white border border-slate-200 rounded-2xl shadow-lg animate-in fade-in slide-in-from-top-2 duration-200 z-50 relative">
          <h3 className="text-sm font-bold text-slate-900 mb-4">Advanced Search Modes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => setExactMatch(!exactMatch)}
              className={`w-full px-4 py-3 rounded-xl border flex items-center gap-3 transition-all ${
                exactMatch ? 'bg-blue-50 border-blue-200 text-blue-700' : 'bg-slate-50 border-transparent text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Target className={`h-5 w-5 ${exactMatch ? 'text-blue-600' : 'text-slate-400'}`} />
              <div className="text-left">
                <p className="text-xs font-bold leading-none">Exact Phrase</p>
                <p className="text-[10px] opacity-70 mt-1 italic">Match the full string literally</p>
              </div>
              {exactMatch && <Check className="h-4 w-4 ml-auto" />}
            </button>
            
            <button
              onClick={() => setTitleOnly(!titleOnly)}
              className={`w-full px-4 py-3 rounded-xl border flex items-center gap-3 transition-all ${
                titleOnly ? 'bg-blue-50 border-blue-200 text-blue-700' : 'bg-slate-50 border-transparent text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Type className={`h-5 w-5 ${titleOnly ? 'text-blue-600' : 'text-slate-400'}`} />
              <div className="text-left">
                <p className="text-xs font-bold leading-none">Titles Only</p>
                <p className="text-[10px] opacity-70 mt-1 italic">Ignore description content</p>
              </div>
              {titleOnly && <Check className="h-4 w-4 ml-auto" />}
            </button>
          </div>
        </div>
      )}

      {isActive && (
        <div className="absolute z-40 w-full mt-2 bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-1 duration-100">
          {filteredTopics.length > 0 ? (
            <div className="py-2">
              <div className="px-4 py-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-slate-50 border-b border-slate-100 mb-2 flex justify-between items-center">
                <span>Search Results ({filteredTopics.length})</span>
                <span className="text-blue-600 font-mono tracking-normal">IMMEDIATE MODE</span>
              </div>
              {filteredTopics.map((topic) => (
                <Link
                  key={topic.id}
                  href={`/topics/${topic.id}`}
                  className="group block px-5 py-4 hover:bg-blue-50 transition-colors border-b last:border-0 border-slate-50"
                  onClick={() => setQuery('')}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-slate-900 text-white group-hover:bg-blue-600 transition-colors">
                          {topic.module}
                        </span>
                        <h4 className="text-sm font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                          <HighlightText text={topic.title} query={query} />
                        </h4>
                      </div>
                      {!titleOnly && (
                        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                          <HighlightText text={topic.description} query={query} />
                        </p>
                      )}
                    </div>
                    <ChevronRight className="h-5 w-5 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="px-6 py-10 text-center">
              <div className="inline-flex items-center justify-center p-4 rounded-full bg-slate-50 mb-4">
                <Search className="h-8 w-8 text-slate-300" />
              </div>
              <p className="text-slate-900 font-bold">No matches found</p>
              <p className="text-slate-500 text-sm mt-1 max-w-[280px] mx-auto italic">
                Try loosening your filters or using broader keywords.
              </p>
              <button 
                onClick={clearFilters}
                className="mt-6 px-6 py-2 bg-slate-900 text-white text-xs font-bold rounded-full hover:bg-blue-600 transition-colors"
              >
                Reset Everything
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
