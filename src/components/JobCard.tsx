import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Clock, BriefcaseIcon } from 'lucide-react';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/job/${job.id}`)}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer"
    >
      <div className="flex items-start gap-4">
        <img
          src={job.logo}
          alt={`${job.company} logo`}
          className="w-12 h-12 rounded-lg object-cover"
        />
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
              <p className="text-gray-600">{job.company}</p>
            </div>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
              {job.type}
            </span>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-4 text-gray-500 text-sm">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <BriefcaseIcon className="w-4 h-4" />
              <span>{job.salary}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{job.posted}</span>
            </div>
          </div>

          <p className="mt-4 text-gray-600 line-clamp-2">{job.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {job.requirements.slice(0, 3).map((req, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
              >
                {req}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}