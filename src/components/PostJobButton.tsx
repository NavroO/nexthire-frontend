import React from 'react';
import { PlusCircle } from 'lucide-react';

export default function PostJobButton() {
  return (
    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm">
      <PlusCircle className="w-5 h-5" />
      <span className="font-medium">Post a Job</span>
    </button>
  );
}