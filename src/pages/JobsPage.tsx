import React, { useState, useMemo } from 'react';
import SearchBar from '../components/SearchBar';
import JobCard from '../components/JobCard';
import PostJobModal, { PostJobFormData } from '../components/PostJobModal';
import { jobs as initialJobs } from '../data/jobs';
import { SearchFilters, Job } from '../types';

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    type: 'all',
    location: '',
    query: '',
    salary: { min: 0, max: Infinity },
    experience: { min: 0, max: Infinity }
  });

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesType = filters.type === 'all' || job.type === filters.type;
      const matchesLocation = !filters.location || 
        job.location.toLowerCase().includes(filters.location.toLowerCase());
      const matchesQuery = !filters.query || 
        job.title.toLowerCase().includes(filters.query.toLowerCase()) ||
        job.company.toLowerCase().includes(filters.query.toLowerCase()) ||
        job.description.toLowerCase().includes(filters.query.toLowerCase());
      const matchesSalary = 
        job.salaryRange.min <= filters.salary.max &&
        job.salaryRange.max >= filters.salary.min;
      const matchesExperience = 
        job.experience.min <= filters.experience.max &&
        job.experience.max >= filters.experience.min;

      return matchesType && matchesLocation && matchesQuery && matchesSalary && matchesExperience;
    });
  }, [filters, jobs]);

  const handlePostJob = (formData: PostJobFormData) => {
    const salaryMatch = formData.salary.match(/\$?(\d+)k\s*-\s*\$?(\d+)k/);
    const newJob: Job = {
      id: (jobs.length + 1).toString(),
      ...formData,
      salaryRange: {
        min: salaryMatch ? parseInt(salaryMatch[1]) * 1000 : 0,
        max: salaryMatch ? parseInt(salaryMatch[2]) * 1000 : 0
      },
      experience: { min: 0, max: 5 }, // Default experience range
      requirements: formData.requirements.split('\n').filter(req => req.trim()),
      posted: 'Just now',
      logo: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000000)}?w=100&h=100&fit=crop`,
    };
    
    setJobs(prevJobs => [newJob, ...prevJobs]);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SearchBar filters={filters} onFilterChange={setFilters} />

      <div className="space-y-6">
        {filteredJobs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No jobs found matching your criteria</p>
          </div>
        ) : (
          filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))
        )}
      </div>

      {filteredJobs.length > 0 && (
        <div className="mt-8 text-center text-gray-500">
          Showing {filteredJobs.length} of {jobs.length} jobs
        </div>
      )}

      <PostJobModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handlePostJob}
      />
    </main>
  );
}