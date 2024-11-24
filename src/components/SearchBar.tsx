import React from 'react';
import { Search, MapPin, DollarSign, Briefcase } from 'lucide-react';
import { SearchFilters } from '../types';

interface SearchBarProps {
  filters: SearchFilters;
  onFilterChange: (filters: SearchFilters) => void;
}

const salaryRanges = [
  { min: 0, max: 50000, label: 'Up to $50k' },
  { min: 50000, max: 100000, label: '$50k - $100k' },
  { min: 100000, max: 150000, label: '$100k - $150k' },
  { min: 150000, max: 200000, label: '$150k - $200k' },
  { min: 200000, max: Infinity, label: '$200k+' }
];

const experienceRanges = [
  { min: 0, max: 2, label: '0-2 years' },
  { min: 2, max: 5, label: '2-5 years' },
  { min: 5, max: 8, label: '5-8 years' },
  { min: 8, max: Infinity, label: '8+ years' }
];

export default function SearchBar({ filters, onFilterChange }: SearchBarProps) {
  const handleSalaryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const [min, max] = e.target.value.split('-').map(Number);
    onFilterChange({ ...filters, salary: { min, max } });
  };

  const handleExperienceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const [min, max] = e.target.value.split('-').map(Number);
    onFilterChange({ ...filters, experience: { min, max } });
  };

  return (
    <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-4 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search jobs..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filters.query}
            onChange={(e) => onFilterChange({ ...filters, query: e.target.value })}
          />
        </div>

        <div className="relative">
          <MapPin className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Location"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filters.location}
            onChange={(e) => onFilterChange({ ...filters, location: e.target.value })}
          />
        </div>

        <div className="relative">
          <DollarSign className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <select
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
            value={`${filters.salary.min}-${filters.salary.max}`}
            onChange={handleSalaryChange}
          >
            <option value="0-Infinity">Any Salary</option>
            {salaryRanges.map((range) => (
              <option key={range.label} value={`${range.min}-${range.max}`}>
                {range.label}
              </option>
            ))}
          </select>
        </div>

        <div className="relative">
          <Briefcase className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <select
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
            value={`${filters.experience.min}-${filters.experience.max}`}
            onChange={handleExperienceChange}
          >
            <option value="0-Infinity">Any Experience</option>
            {experienceRanges.map((range) => (
              <option key={range.label} value={`${range.min}-${range.max}`}>
                {range.label}
              </option>
            ))}
          </select>
        </div>

        <div className="lg:col-span-4">
          <select
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filters.type}
            onChange={(e) => onFilterChange({ ...filters, type: e.target.value as SearchFilters['type'] })}
          >
            <option value="all">All Types</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Remote">Remote</option>
          </select>
        </div>
      </div>
    </div>
  );
}