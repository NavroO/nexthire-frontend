import Link from "next/link"
import { Button } from "@/components/ui/button"
import JobCard from "@/components/job-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  // This would typically come from an API or database
  const featuredJobs = [
    { id: 1, title: "Frontend Developer", company: "TechCorp", location: "Remote", salary: "$80,000 - $120,000" },
    {
      id: 2,
      title: "Backend Engineer",
      company: "DataSystems",
      location: "New York, NY",
      salary: "$90,000 - $130,000",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "WebSolutions",
      location: "San Francisco, CA",
      salary: "$100,000 - $150,000",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Find Your Dream Job in Tech</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Discover opportunities that match your skills and aspirations.
        </p>
        <div className="flex space-x-4">
          <Link href="/jobs">
            <Button size="lg">Browse Jobs</Button>
          </Link>
          <Link href="/post-job">
            <Button size="lg" variant="outline">
              Post a Job
            </Button>
          </Link>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Featured Jobs</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/jobs">
            <Button variant="outline">View All Jobs</Button>
          </Link>
        </div>
      </section>

      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Why Choose JobBoard?</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personalized job recommendations based on your skills and experience</li>
              <li>Advanced search filters to find the perfect job match</li>
              <li>Direct connections with top employers in the tech industry</li>
              <li>Integrated skill assessments to showcase your abilities</li>
              <li>Automatic CV updates from linked learning platforms</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

