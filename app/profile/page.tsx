"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LinkedPlatforms } from "@/components/linked-platforms"

interface UserProfile {
  name: string
  email: string
  skills: string[]
  certifications: { name: string; provider: string; date: string }[]
  experiences: { title: string; company: string; duration: string }[]
}

export default function UserProfile() {
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProfile = async () => {
      // In a real application, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API delay
      setProfile({
        name: "Jane Doe",
        email: "jane.doe@example.com",
        skills: ["React", "TypeScript", "Node.js", "GraphQL", "AWS"],
        certifications: [
          { name: "AWS Certified Developer", provider: "Amazon Web Services", date: "2023-05-15" },
          { name: "Professional Scrum Master I", provider: "Scrum.org", date: "2022-11-30" },
        ],
        experiences: [
          { title: "Senior Frontend Developer", company: "TechCorp", duration: "2021 - Present" },
          { title: "Frontend Developer", company: "WebSolutions", duration: "2018 - 2021" },
        ],
      })
      setIsLoading(false)
    }
    fetchProfile()
  }, [])

  if (isLoading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>
  }

  if (!profile) {
    return <div className="container mx-auto px-4 py-8">Failed to load profile</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>{profile.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">{profile.email}</p>
          <LinkedPlatforms />
        </CardContent>
      </Card>

      <Tabs defaultValue="skills">
        <TabsList>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="certifications">Certifications</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
        </TabsList>
        <TabsContent value="skills">
          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="certifications">
          <Card>
            <CardHeader>
              <CardTitle>Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {profile.certifications.map((cert, index) => (
                  <li key={index} className="border-b pb-2 last:border-b-0">
                    <h3 className="font-semibold">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground">Provider: {cert.provider}</p>
                    <p className="text-sm text-muted-foreground">Date: {cert.date}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="experience">
          <Card>
            <CardHeader>
              <CardTitle>Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {profile.experiences.map((exp, index) => (
                  <li key={index} className="border-b pb-2 last:border-b-0">
                    <h3 className="font-semibold">{exp.title}</h3>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.duration}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

