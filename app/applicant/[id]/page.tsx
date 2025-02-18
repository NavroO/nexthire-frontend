"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Applicant {
  id: number
  name: string
  email: string
  experience: number
  techStack: string[]
  expectedSalary: number
  education: string
  certifications: string[]
  portfolio: string
}

export default function ApplicantDetails({ params }: { params: { id: string } }) {
  const [applicant, setApplicant] = useState<Applicant | null>(null)

  useEffect(() => {
    // This would typically be an API call to fetch the applicant details
    const fetchApplicant = async () => {
      // Simulating an API call with setTimeout
      setTimeout(() => {
        const mockApplicant: Applicant = {
          id: Number.parseInt(params.id),
          name: "John Doe",
          email: "john@example.com",
          experience: 5,
          techStack: ["React", "JavaScript", "CSS", "Node.js", "GraphQL"],
          expectedSalary: 80000,
          education: "Bachelor's in Computer Science",
          certifications: ["AWS Certified Developer", "Google Cloud Professional Developer"],
          portfolio: "https://johndoe-portfolio.com",
        }
        setApplicant(mockApplicant)
      }, 500)
    }

    fetchApplicant()
  }, [params.id])

  if (!applicant) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href={`/applicants/${applicant.id}`}>
        <Button variant="outline" className="mb-4">
          Back to Applicants
        </Button>
      </Link>
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">{applicant.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
            <p>Email: {applicant.email}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Professional Experience</h2>
            <p>Years of Experience: {applicant.experience}</p>
            <p>Expected Salary: ${applicant.expectedSalary.toLocaleString()}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
            <ul className="list-disc list-inside">
              {applicant.techStack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Education</h2>
            <p>{applicant.education}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Certifications</h2>
            <ul className="list-disc list-inside">
              {applicant.certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Portfolio</h2>
            <Link
              href={applicant.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {applicant.portfolio}
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

