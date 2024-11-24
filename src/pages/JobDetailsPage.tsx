import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Clock, BriefcaseIcon, ArrowLeft, Building2, Mail } from 'lucide-react';
import { jobs } from '../data/jobs';

export default function JobDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = jobs.find(j => j.id === id);

  if (!job) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Job not found</h2>
        <button
          onClick={() => navigate('/')}
          className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to jobs
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate('/')}
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to jobs
      </button>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-start gap-6">
          <img
            src={job.logo}
            alt={`${job.company} logo`}
            className="w-20 h-20 rounded-lg object-cover"
          />
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{job.title}</h1>
                <div className="flex items-center gap-2 mt-2">
                  <Building2 className="w-5 h-5 text-gray-400" />
                  <span className="text-lg text-gray-600">{job.company}</span>
                </div>
              </div>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                {job.type}
              </span>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <BriefcaseIcon className="w-5 h-5 text-gray-400" />
                <span>{job.salary}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-5 h-5 text-gray-400" />
                <span>Posted {job.posted}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Job Description</h2>
          <p className="text-gray-600 whitespace-pre-wrap">{job.description}</p>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button className="flex-1 btn btn-primary inline-flex items-center justify-center gap-2">
            <Mail className="w-5 h-5" />
            Apply Now
          </button>
          <button className="flex-1 btn border border-gray-200 hover:bg-gray-50">
            Save for Later
          </button>
        </div>
      </div>
    </div>
  );
}