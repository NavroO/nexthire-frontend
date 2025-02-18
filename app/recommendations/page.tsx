"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Job {
  id: number
  title: string
  company: string
  location: string
  fitScore: number
  skills: string[]
}

export default function JobRecommendations() {
  const [recommendations, setRecommendations] = useState<Job[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchRecommendations = async () => {
      // In a real application, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API delay
      setRecommendations([
        {
          id: 1,
          title: "Senior Frontend Developer",
          company: "TechCorp",
          location: "Remote",
          fitScore: 95,
          skills: ["React", "TypeScript", "GraphQL"],
        },
        {
          id: 2,
          title: "Full Stack Engineer",
          company: "WebSolutions",
          location: "New York, NY",
          fitScore: 88,
          skills: ["Node.js", "React", "MongoDB"],
        },
        {
          id: 3,
          title: "UI/UX Designer",
          company: "DesignStudio",
          location: "San Francisco, CA",
          fitScore: 82,
          skills: ["Figma", "Adobe XD", "User Research"],
        },
      ])
      setIsLoading(false)
    }
    fetchRecommendations()
  }, [])

  const getFitScoreColor = (score: number) => {
    if (score >= 90) return "bg-green-500"
    if (score >= 70) return "bg-yellow-500"
    return "bg-red-500"
  }

  if (isLoading) {
    return <div className="container mx-auto px-4 py-8">Loading recommendations...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Personalized Job Recommendations</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recommendations.map((job) => (
          <Card key={job.id}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                {job.title}
                <Badge className={`${getFitScoreColor(job.fitScore)} text-white`}>{job.fitScore}% Fit</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                {job.company} - {job.location}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {job.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
              <Link href={`/job/${job.id}`}>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

