"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Candidate {
  id: number
  name: string
  skills: string[]
  experience: number
  location: string
  availability: string
}

const initialCandidates: Candidate[] = [
  {
    id: 1,
    name: "Alice Johnson",
    skills: ["React", "Node.js", "MongoDB"],
    experience: 5,
    location: "New York, NY",
    availability: "Immediately",
  },
  {
    id: 2,
    name: "Bob Smith",
    skills: ["Python", "Django", "PostgreSQL"],
    experience: 3,
    location: "San Francisco, CA",
    availability: "In 2 weeks",
  },
  {
    id: 3,
    name: "Charlie Brown",
    skills: ["Java", "Spring", "MySQL"],
    experience: 7,
    location: "Chicago, IL",
    availability: "In 1 month",
  },
  {
    id: 4,
    name: "Diana Lee",
    skills: ["Vue.js", "Express", "Firebase"],
    experience: 4,
    location: "Seattle, WA",
    availability: "Immediately",
  },
]

export default function TalentPool() {
  const [candidates, setCandidates] = useState<Candidate[]>(initialCandidates)
  const [filters, setFilters] = useState({
    search: "",
    skills: "",
    minExperience: 0,
    location: "",
    availability: "",
  })

  const handleFilterChange = (key: string, value: string | number) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const applyFilters = () => {
    const filteredCandidates = initialCandidates.filter((candidate) => {
      const searchMatch = candidate.name.toLowerCase().includes(filters.search.toLowerCase())
      const skillsMatch =
        filters.skills === "" ||
        candidate.skills.some((skill) => skill.toLowerCase().includes(filters.skills.toLowerCase()))
      const experienceMatch = candidate.experience >= filters.minExperience
      const locationMatch =
        filters.location === "" || candidate.location.toLowerCase().includes(filters.location.toLowerCase())
      const availabilityMatch = filters.availability === "" || candidate.availability === filters.availability

      return searchMatch && skillsMatch && experienceMatch && locationMatch && availabilityMatch
    })
    setCandidates(filteredCandidates)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Passive Talent Pool</h1>

      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <Label htmlFor="search">Search</Label>
          <Input
            id="search"
            placeholder="Search candidates..."
            value={filters.search}
            onChange={(e) => handleFilterChange("search", e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="skills">Skills</Label>
          <Input
            id="skills"
            placeholder="Enter skills..."
            value={filters.skills}
            onChange={(e) => handleFilterChange("skills", e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="experience">Minimum Experience (years)</Label>
          <Slider
            id="experience"
            min={0}
            max={10}
            step={1}
            value={[filters.minExperience]}
            onValueChange={(value) => handleFilterChange("minExperience", value[0])}
          />
          <p className="text-sm text-muted-foreground mt-1">{filters.minExperience} years</p>
        </div>
        <div>
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            placeholder="Enter location..."
            value={filters.location}
            onChange={(e) => handleFilterChange("location", e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="availability">Availability</Label>
          <Select onValueChange={(value) => handleFilterChange("availability", value)}>
            <SelectTrigger id="availability">
              <SelectValue placeholder="Select availability" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="Immediately">Immediately</SelectItem>
              <SelectItem value="In 2 weeks">In 2 weeks</SelectItem>
              <SelectItem value="In 1 month">In 1 month</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button onClick={applyFilters} className="mb-8">
        Apply Filters
      </Button>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {candidates.map((candidate) => (
          <Card key={candidate.id}>
            <CardHeader>
              <CardTitle>{candidate.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Experience: {candidate.experience} years</p>
              <p>Location: {candidate.location}</p>
              <p>Availability: {candidate.availability}</p>
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
              <Button className="mt-4">Contact Candidate</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {candidates.length === 0 && (
        <p className="text-center text-muted-foreground mt-8">No candidates match the current filters.</p>
      )}
    </div>
  )
}

