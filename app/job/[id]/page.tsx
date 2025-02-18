"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Star } from "lucide-react"
import { MapPin, Building, DollarSign, Calendar, Users, Zap } from "lucide-react"

interface Job {
  id: number
  title: string
  company: string
  location: string
  description: string
  requirements: string[]
  salary: string
  postedDate: string
  applicants: number
  fitScore: number
  companyInfo: string
}

interface SimilarJob {
  id: number
  title: string
  company: string
  location: string
  salary: string
  fitScore: number
}

export default function JobDetails({ params }: { params: { id: string } }) {
  const [job, setJob] = useState<Job | null>(null)
  const [similarJobs, setSimilarJobs] = useState<SimilarJob[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [cv, setCv] = useState<File | null>(null)
  const [userScore, setUserScore] = useState(0)

  useEffect(() => {
    const fetchJob = async () => {
      // This would typically be an API call
      await new Promise((resolve) => setTimeout(resolve, 500))
      setJob({
        id: Number.parseInt(params.id),
        title: "Frontend Developer",
        company: "TechCorp",
        location: "Remote",
        description:
          "We are looking for a skilled Frontend Developer to join our team. You will be responsible for developing and implementing user interface components using React.js and other frontend technologies.",
        requirements: [
          "3+ years of experience with React",
          "Strong understanding of HTML, CSS, and JavaScript",
          "Experience with responsive design and cross-browser compatibility",
          "Familiarity with RESTful APIs and modern frontend build pipelines",
          "Bachelor's degree in Computer Science or related field",
        ],
        salary: "$80,000 - $120,000",
        postedDate: "2025-02-15",
        applicants: 45,
        fitScore: 92,
        companyInfo:
          "TechCorp is a leading software company specializing in innovative web applications. We pride ourselves on our collaborative work environment and cutting-edge projects.",
      })
      setSimilarJobs([
        {
          id: 2,
          title: "React Developer",
          company: "WebSolutions",
          location: "New York, NY",
          salary: "$90,000 - $130,000",
          fitScore: 88,
        },
        {
          id: 3,
          title: "Frontend Engineer",
          company: "AppTech",
          location: "San Francisco, CA",
          salary: "$100,000 - $140,000",
          fitScore: 85,
        },
        {
          id: 4,
          title: "UI Developer",
          company: "DesignHub",
          location: "Remote",
          salary: "$75,000 - $110,000",
          fitScore: 80,
        },
      ])
      setIsLoading(false)
    }

    fetchJob()
  }, [params.id])

  const getFitScoreColor = (score: number) => {
    if (score >= 90) return "bg-green-500"
    if (score >= 70) return "bg-yellow-500"
    return "bg-red-500"
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the application data to your backend
    console.log("Application submitted:", { name, email, cv })
    // Reset form
    setName("")
    setEmail("")
    setCv(null)
  }

  const handleScoreChange = (newScore: number) => {
    setUserScore(newScore)
    // Here you would typically send the score to your backend
    console.log("User scored job:", newScore)
  }

  if (isLoading) {
    return <JobDetailsSkeleton />
  }

  if (!job) {
    return <div className="container mx-auto px-4 py-8">Job not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/jobs">
        <Button variant="outline" className="mb-4">
          Back to Jobs
        </Button>
      </Link>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-grow">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-3xl mb-2">{job.title}</CardTitle>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <Building className="mr-2 h-4 w-4" />
                    <span>{job.company}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="mr-2 h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                </div>
                <Badge className={`${getFitScoreColor(job.fitScore)} text-white flex items-center`}>
                  <Zap className="mr-1 h-4 w-4" />
                  {job.fitScore}% Fit
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Posted on {job.postedDate}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Users className="mr-2 h-4 w-4" />
                  <span>{job.applicants} applicants</span>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Job Description</h3>
                <p>{job.description}</p>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Requirements</h3>
                <ul className="list-disc list-inside space-y-1">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Score This Job Offer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((score) => (
                  <Button
                    key={score}
                    variant={userScore >= score ? "default" : "outline"}
                    size="icon"
                    onClick={() => handleScoreChange(score)}
                  >
                    <Star className={userScore >= score ? "fill-current" : ""} />
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>About {job.company}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{job.companyInfo}</p>
            </CardContent>
          </Card>
        </div>
        <div className="w-full lg:w-1/3">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Apply for this position</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Salary</h3>
                <div className="flex items-center text-2xl font-bold text-green-600">
                  <DollarSign className="mr-2 h-6 w-6" />
                  <span>{job.salary}</span>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                  <Label htmlFor="cv">CV</Label>
                  <Input
                    id="cv"
                    type="file"
                    onChange={(e) => setCv(e.target.files ? e.target.files[0] : null)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="cover-letter">Cover Letter (Optional)</Label>
                  <Textarea id="cover-letter" placeholder="Tell us why you're a great fit for this role" />
                </div>
                <Button type="submit" className="w-full">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Similar Job Offers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {similarJobs.map((job) => (
                  <div key={job.id} className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold">{job.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {job.company} - {job.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold">{job.salary}</p>
                      <Badge className={`${getFitScoreColor(job.fitScore)} text-white`}>{job.fitScore}% Fit</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function JobDetailsSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Skeleton className="h-10 w-32 mb-4" />
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-grow">
          <Card>
            <CardHeader>
              <Skeleton className="h-8 w-3/4 mb-2" />
              <Skeleton className="h-4 w-1/2 mb-2" />
              <Skeleton className="h-4 w-1/3" />
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-1/2" />
              </div>
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4 mb-6" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4 mb-2" />
              <Skeleton className="h-4 w-1/2 mb-2" />
            </CardContent>
          </Card>
          <Card className="mt-8">
            <CardHeader>
              <Skeleton className="h-6 w-1/4" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-8 w-1/2" />
            </CardContent>
          </Card>
          <Card className="mt-8">
            <CardHeader>
              <Skeleton className="h-6 w-1/3" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4" />
            </CardContent>
          </Card>
        </div>
        <div className="w-full lg:w-1/3">
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-3/4" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-8 w-1/2 mb-6" />
              <Skeleton className="h-10 w-full mb-4" />
              <Skeleton className="h-10 w-full mb-4" />
              <Skeleton className="h-10 w-full mb-4" />
              <Skeleton className="h-24 w-full mb-4" />
              <Skeleton className="h-10 w-full" />
            </CardContent>
          </Card>
          <Card className="mt-8">
            <CardHeader>
              <Skeleton className="h-6 w-2/3" />
            </CardHeader>
            <CardContent>
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex justify-between items-center mb-4">
                  <div>
                    <Skeleton className="h-4 w-40 mb-2" />
                    <Skeleton className="h-3 w-32" />
                  </div>
                  <div className="text-right">
                    <Skeleton className="h-4 w-24 mb-2" />
                    <Skeleton className="h-6 w-16" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

