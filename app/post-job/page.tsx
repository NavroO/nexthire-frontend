"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function PostJob() {
  const router = useRouter()
  const [jobData, setJobData] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setJobData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the job data to your backend
    console.log("Job data submitted:", jobData)
    // For demonstration, we'll just redirect to a mock applicants page
    router.push("/applicants/1")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Post a New Job</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="title">Job Title</Label>
          <Input id="title" name="title" value={jobData.title} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" value={jobData.company} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="location">Location</Label>
          <Input id="location" name="location" value={jobData.location} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="description">Job Description</Label>
          <Textarea id="description" name="description" value={jobData.description} onChange={handleChange} required />
        </div>
        <Button type="submit">Post Job</Button>
      </form>
    </div>
  )
}

