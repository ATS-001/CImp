import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full">
      <div className="p-4 bg-white rounded-full shadow-lg mb-4">
        <Loader2 className="h-10 w-10 text-blue-600 animate-spin" />
      </div>
      <h2 className="text-xl font-bold text-slate-800">Cimp</h2>
      <p className="text-slate-500 font-medium animate-pulse mt-1">Extracting knowledge...</p>
    </div>
  );
}
