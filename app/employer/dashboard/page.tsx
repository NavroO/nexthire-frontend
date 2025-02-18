"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EmployerDashboard() {
  const [activeJobs, setActiveJobs] = useState([
    { id: 1, title: "Frontend Developer", applicants: 12, recommendations: 5 },
    { id: 2, title: "Backend Engineer", applicants: 8, recommendations: 3 },
    { id: 3, title: "Full Stack Developer", applicants: 15, recommendations: 7 },
  ])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Employer Dashboard</h1>
      <Tabs defaultValue="active-jobs">
        <TabsList>
          <TabsTrigger value="active-jobs">Active Jobs</TabsTrigger>
          <TabsTrigger value="recommendations">AI Recommendations</TabsTrigger>
        </TabsList>
        <TabsContent value="active-jobs">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {activeJobs.map((job) => (
              <Card key={job.id}>
                <CardHeader>
                  <CardTitle>{job.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Applicants: {job.applicants}</p>
                  <p>AI Recommendations: {job.recommendations}</p>
                  <div className="mt-4 space-x-2">
                    <Button variant="outline" asChild>
                      <Link href={`/employer/job/${job.id}/applicants`}>View Applicants</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href={`/employer/job/${job.id}/recommendations`}>View Recommendations</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="recommendations">
          <p>AI-powered recommendations across all your job postings will appear here.</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}

