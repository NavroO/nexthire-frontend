"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function JobBoard() {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const router = useRouter();

  const jobPostings = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$80,000 - $120,000",
      description:
        "We're looking for an experienced Frontend Developer to join our team and help build amazing user interfaces.",
      postedDate: "2023-05-15",
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "DataSystems",
      location: "New York, NY",
      type: "Full-time",
      salary: "$90,000 - $130,000",
      description:
        "Join our backend team to develop scalable and efficient server-side applications.",
      postedDate: "2023-05-14",
    },
    {
      id: 3,
      title: "UX Designer",
      company: "CreativeMinds",
      location: "Remote",
      type: "Contract",
      salary: "$70,000 - $100,000",
      description:
        "We're seeking a talented UX Designer to create intuitive and engaging user experiences for our products.",
      postedDate: "2023-05-13",
    },
    {
      id: 4,
      title: "DevOps Specialist",
      company: "CloudNine",
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$100,000 - $150,000",
      description:
        "Looking for a DevOps expert to streamline our deployment processes and improve system reliability.",
      postedDate: "2023-05-12",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Job Offers</h1>

      <div className="mb-8">
        <button
          onClick={() => setIsFiltersVisible(!isFiltersVisible)}
          className="w-full md:w-auto px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors duration-300 mb-4 md:mb-0"
        >
          {isFiltersVisible ? "Hide Filters" : "Show Filters"}
        </button>

        <form
          className={`bg-white shadow-md rounded-lg p-6 ${
            isFiltersVisible ? "block" : "hidden"
          }`}
        >
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label
                htmlFor="jobType"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Job Type
              </label>
              <select
                id="jobType"
                name="jobType"
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="">All Types</option>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Enter location"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label
                htmlFor="salaryRange"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Salary Range
              </label>
              <select
                id="salaryRange"
                name="salaryRange"
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="">Any Salary</option>
                <option value="0-50000">$0 - $50,000</option>
                <option value="50000-100000">$50,000 - $100,000</option>
                <option value="100000-150000">$100,000 - $150,000</option>
                <option value="150000+">$150,000+</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 w-full md:w-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300"
          >
            Apply Filters
          </button>
        </form>
      </div>

      <ul className="space-y-6">
        {jobPostings.map((job) => (
          <li
            key={job.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={() => router.push(`/pages/board/${job.id}`)}
          >
            <article className="p-6">
              <header className="mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {job.title}
                </h2>
                <p className="text-sm text-gray-600">{job.company}</p>
              </header>
              <div className="mb-4">
                <p className="text-sm text-gray-700 mb-2">{job.description}</p>
                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {job.type}
                  </span>
                  <span>{job.location}</span>
                  <span>Posted on: {job.postedDate}</span>
                </div>
                <p className="text-sm font-medium text-green-600">
                  {job.salary}
                </p>
              </div>
              <footer>
                <button className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300">
                  Apply Now
                </button>
              </footer>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
