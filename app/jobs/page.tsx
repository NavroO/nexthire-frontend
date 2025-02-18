"use client"

import { useState, useEffect } from "react"
import { JobListItem } from "@/components/job-list-item"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { X } from "lucide-react"

// This would typically come from an API or database
const initialJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Remote",
    type: "Full-time",
    salary: "$80,000 - $120,000",
    experience: "3-5 years",
    technologies: ["React", "TypeScript", "CSS"],
    benefits: ["Health Insurance", "401(k)"],
    fitScore: 95,
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "DataSystems",
    location: "New York, NY",
    type: "Full-time",
    salary: "$90,000 - $130,000",
    experience: "5+ years",
    technologies: ["Node.js", "Python", "PostgreSQL"],
    benefits: ["Health Insurance", "Unlimited PTO"],
    fitScore: 82,
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "WebSolutions",
    location: "San Francisco, CA",
    type: "Contract",
    salary: "$100,000 - $150,000",
    experience: "2-4 years",
    technologies: ["React", "Node.js", "MongoDB"],
    benefits: ["Flexible Hours", "Remote Work"],
    fitScore: 78,
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$110,000 - $160,000",
    experience: "4-6 years",
    technologies: ["AWS", "Docker", "Kubernetes"],
    benefits: ["Health Insurance", "Stock Options"],
    fitScore: 88,
  },
  {
    id: 5,
    title: "UI/UX Designer",
    company: "DesignStudio",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$70,000 - $100,000",
    experience: "2-4 years",
    technologies: ["Figma", "Adobe XD", "Sketch"],
    benefits: ["Flexible Hours", "Professional Development"],
    fitScore: 72,
  },
]

const allTechnologies = Array.from(new Set(initialJobs.flatMap((job) => job.technologies)))
const allBenefits = Array.from(new Set(initialJobs.flatMap((job) => job.benefits)))
const contractTypes = ["Full-time", "Part-time", "Contract"]
const experienceLevels = ["0-2 years", "2-4 years", "4-6 years", "6+ years"]

export default function Jobs() {
  const [jobs, setJobs] = useState(initialJobs)
  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState({
    technologies: [] as string[],
    salary: [0, 200000],
    contractType: [] as string[],
    location: "",
    experience: [] as string[],
    benefits: [] as string[],
    fitScore: 0,
  })

  const applyFilters = () => {
    const filteredJobs = initialJobs.filter((job) => {
      const searchMatch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())
      const techMatch =
        filters.technologies.length === 0 || filters.technologies.some((tech) => job.technologies.includes(tech))
      const salaryMatch =
        Number.parseInt(job.salary.split("$")[1].split(",").join("")) >= filters.salary[0] &&
        Number.parseInt(job.salary.split("-")[1].trim().split("$")[1].split(",").join("")) <= filters.salary[1]
      const typeMatch = filters.contractType.length === 0 || filters.contractType.includes(job.type)
      const locationMatch =
        filters.location === "" || job.location.toLowerCase().includes(filters.location.toLowerCase())
      const experienceMatch =
        filters.experience.length === 0 ||
        filters.experience.some((exp) => {
          const jobExp = Number.parseInt(job.experience.split("-")[0])
          const [min, max] = exp.split("-").map((x) => Number.parseInt(x))
          return jobExp >= min && (max ? jobExp <= max : true)
        })
      const benefitsMatch =
        filters.benefits.length === 0 || filters.benefits.every((benefit) => job.benefits.includes(benefit))
      const fitScoreMatch = job.fitScore >= filters.fitScore

      return (
        searchMatch &&
        techMatch &&
        salaryMatch &&
        typeMatch &&
        locationMatch &&
        experienceMatch &&
        benefitsMatch &&
        fitScoreMatch
      )
    })
    setJobs(filteredJobs)
  }

  useEffect(() => {
    applyFilters()
  }, [filters, searchTerm]) // Updated dependency array

  const handleFilterChange = (key: string, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const removeFilter = (key: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: Array.isArray(prev[key as keyof typeof prev])
        ? (prev[key as keyof typeof prev] as string[]).filter((item) => item !== value)
        : "",
    }))
  }

  return (
    <div className="container mx-auto px-4 py-8 flex">
      {/* Sidebar with filters */}
      <aside className="w-64 mr-8">
        <h2 className="text-2xl font-bold mb-4">Filters</h2>
        <div className="space-y-6">
          <div>
            <Label htmlFor="technologies">Technologies</Label>
            <ScrollArea className="h-40 w-full rounded-md border">
              <div className="p-4">
                {allTechnologies.map((tech) => (
                  <div key={tech} className="flex items-center space-x-2">
                    <Checkbox
                      id={tech}
                      checked={filters.technologies.includes(tech)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          handleFilterChange("technologies", [...filters.technologies, tech])
                        } else {
                          handleFilterChange(
                            "technologies",
                            filters.technologies.filter((t) => t !== tech),
                          )
                        }
                      }}
                    />
                    <label htmlFor={tech}>{tech}</label>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
          <div>
            <Label htmlFor="salary">Salary Range</Label>
            <Slider
              id="salary"
              min={0}
              max={200000}
              step={10000}
              value={filters.salary}
              onValueChange={(value) => handleFilterChange("salary", value)}
              className="mt-2"
            />
            <div className="flex justify-between text-sm text-muted-foreground mt-1">
              <span>${filters.salary[0].toLocaleString()}</span>
              <span>${filters.salary[1].toLocaleString()}</span>
            </div>
          </div>
          <div>
            <Label>Contract Type</Label>
            {contractTypes.map((type) => (
              <div key={type} className="flex items-center space-x-2 mt-1">
                <Checkbox
                  id={type}
                  checked={filters.contractType.includes(type)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      handleFilterChange("contractType", [...filters.contractType, type])
                    } else {
                      handleFilterChange(
                        "contractType",
                        filters.contractType.filter((t) => t !== type),
                      )
                    }
                  }}
                />
                <label htmlFor={type}>{type}</label>
              </div>
            ))}
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={filters.location}
              onChange={(e) => handleFilterChange("location", e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <Label>Experience</Label>
            {experienceLevels.map((level) => (
              <div key={level} className="flex items-center space-x-2 mt-1">
                <Checkbox
                  id={level}
                  checked={filters.experience.includes(level)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      handleFilterChange("experience", [...filters.experience, level])
                    } else {
                      handleFilterChange(
                        "experience",
                        filters.experience.filter((e) => e !== level),
                      )
                    }
                  }}
                />
                <label htmlFor={level}>{level}</label>
              </div>
            ))}
          </div>
          <div>
            <Label>Benefits</Label>
            <ScrollArea className="h-40 w-full rounded-md border mt-1">
              <div className="p-4">
                {allBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-center space-x-2">
                    <Checkbox
                      id={benefit}
                      checked={filters.benefits.includes(benefit)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          handleFilterChange("benefits", [...filters.benefits, benefit])
                        } else {
                          handleFilterChange(
                            "benefits",
                            filters.benefits.filter((b) => b !== benefit),
                          )
                        }
                      }}
                    />
                    <label htmlFor={benefit}>{benefit}</label>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
          <div>
            <Label htmlFor="fitScore">Minimum FitScore</Label>
            <Slider
              id="fitScore"
              min={0}
              max={100}
              step={5}
              value={[filters.fitScore]}
              onValueChange={(value) => handleFilterChange("fitScore", value[0])}
              className="mt-2"
            />
            <div className="text-sm text-muted-foreground mt-1">{filters.fitScore}% or higher</div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1">
        <div className="mb-6">
          <Input
            type="search"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Applied filters */}
        <div className="flex flex-wrap gap-2 mb-4">
          {Object.entries(filters).map(([key, value]) => {
            if (Array.isArray(value) && value.length > 0) {
              return value.map((item) => (
                <Badge key={`${key}-${item}`} variant="secondary" className="px-2 py-1">
                  {item}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-1 h-4 w-4 p-0"
                    onClick={() => removeFilter(key, item)}
                  >
                    <X className="h-3 w-3" />
                    <span className="sr-only">Remove filter</span>
                  </Button>
                </Badge>
              ))
            } else if (typeof value === "string" && value !== "") {
              return (
                <Badge key={key} variant="secondary" className="px-2 py-1">
                  {`${key}: ${value}`}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-1 h-4 w-4 p-0"
                    onClick={() => removeFilter(key, value)}
                  >
                    <X className="h-3 w-3" />
                    <span className="sr-only">Remove filter</span>
                  </Button>
                </Badge>
              )
            }
            return null
          })}
        </div>

        <div className="space-y-4">
          {jobs.map((job) => (
            <JobListItem key={job.id} {...job} />
          ))}
        </div>

        {jobs.length === 0 && (
          <p className="text-center text-muted-foreground mt-8">No jobs match the current filters.</p>
        )}
      </main>
    </div>
  )
}

