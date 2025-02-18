"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Candidate {
  id: number
  name: string
  matchPercentage: number
  skills: string[]
  experience: number
}

export default function JobRecommendations({ params }: { params: { id: string } }) {
  const [recommendations, setRecommendations] = useState<Candidate[]>([
    { id: 1, name: "John Doe", matchPercentage: 95, skills: ["React", "TypeScript", "Node.js"], experience: 5 },
    { id: 2, name: "Jane Smith", matchPercentage: 88, skills: ["React", "JavaScript", "CSS"], experience: 3 },
    { id: 3, name: "Bob Johnson", matchPercentage: 82, skills: ["Angular", "TypeScript", "Python"], experience: 4 },
  ])

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/employer/dashboard">
        <Button variant="outline" className="mb-4">
          Back to Dashboard
        </Button>
      </Link>
      <h1 className="text-3xl font-bold mb-8">AI Recommendations for Job ID: {params.id}</h1>
      <div className="space-y-4">
        {recommendations.map((candidate) => (
          <Card key={candidate.id}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                {candidate.name}
                <Badge variant="secondary">{candidate.matchPercentage}% Match</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Experience: {candidate.experience} years</p>
              <div className="mt-2">
                <p className="font-semibold">Skills:</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {candidate.skills.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <Button className="mt-4">View Profile</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

