import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BriefcaseIcon } from 'lucide-react';
import PostJobButton from './PostJobButton';
import PostJobModal, { PostJobFormData } from './PostJobModal';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <BriefcaseIcon className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">JobHub</h1>
          </Link>
          <div onClick={() => setIsModalOpen(true)}>
            <PostJobButton />
          </div>
        </div>
      </div>
      <PostJobModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={() => {}}
      />
    </header>
  );
}