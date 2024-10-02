import Link from "next/link";

export default function JobDetails() {
  const job = {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$80,000 - $120,000",
    description:
      "We're looking for an experienced Frontend Developer to join our team and help build amazing user interfaces.",
    postedDate: "2023-05-15",
    responsibilities: [
      "Develop new user-facing features",
      "Build reusable components and libraries for future use",
      "Translate designs and wireframes into high-quality code",
      "Optimize application for maximum speed and scalability",
      "Collaborate with other team members and stakeholders",
    ],
    requirements: [
      "3+ years of experience in frontend development",
      "Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model",
      "Thorough understanding of React.js and its core principles",
      "Experience with popular React.js workflows (such as Flux or Redux)",
      "Familiarity with newer specifications of EcmaScript",
      "Experience with data structure libraries (e.g., Immutable.js)",
      "Knowledge of isomorphic React is a plus",
      "Familiarity with RESTful APIs",
      "Knowledge of modern authorization mechanisms, such as JSON Web Token",
      "Familiarity with modern front-end build pipelines and tools",
      "Experience with common front-end development tools such as Babel, Webpack, NPM, etc.",
      "Ability to understand business requirements and translate them into technical requirements",
      "A knack for benchmarking and optimization",
      "Familiarity with code versioning tools such as Git",
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/"
        className="text-blue-600 hover:underline mb-4 inline-block"
      >
        &larr; Back to Job Listings
      </Link>
      <article className="bg-white shadow-lg rounded-lg overflow-hidden">
        <header className="bg-gray-100 p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{job.title}</h1>
          <p className="text-xl text-gray-600">{job.company}</p>
        </header>
        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Job Details</h2>
            <ul className="space-y-2">
              <li>
                <strong>Location:</strong> {job.location}
              </li>
              <li>
                <strong>Type:</strong> {job.type}
              </li>
              <li>
                <strong>Salary:</strong> {job.salary}
              </li>
              <li>
                <strong>Posted on:</strong> {job.postedDate}
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Job Description</h2>
            <p className="text-gray-700">{job.description}</p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Responsibilities</h2>
            <ul className="list-disc pl-5 space-y-1">
              {job.responsibilities.map((responsibility, index) => (
                <li key={index} className="text-gray-700">
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Requirements</h2>
            <ul className="list-disc pl-5 space-y-1">
              {job.requirements.map((requirement, index) => (
                <li key={index} className="text-gray-700">
                  {requirement}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-lg font-semibold">
              Apply Now
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
