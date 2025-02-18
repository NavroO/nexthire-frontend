"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronUp } from "lucide-react"

interface Applicant {
  id: number
  name: string
  email: string
  experience: number
  techStack: string[]
  expectedSalary: number
}

interface JobDetails {
  id: number
  title: string
  requiredExperience: number
  requiredTechStack: string[]
}

export default function Applicants({ params }: { params: { id: string } }) {
  const router = useRouter()
  const jobDetails: JobDetails = {
    id: Number.parseInt(params.id),
    title: "Frontend Developer",
    requiredExperience: 3,
    requiredTechStack: ["React", "TypeScript", "CSS"],
  }

  const initialApplicants: Applicant[] = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      experience: 5,
      techStack: ["React", "JavaScript", "CSS"],
      expectedSalary: 80000,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      experience: 3,
      techStack: ["React", "TypeScript", "CSS", "Node.js"],
      expectedSalary: 75000,
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      experience: 7,
      techStack: ["Angular", "TypeScript", "CSS"],
      expectedSalary: 100000,
    },
    {
      id: 4,
      name: "Alice Brown",
      email: "alice@example.com",
      experience: 4,
      techStack: ["React", "JavaScript", "CSS", "GraphQL"],
      expectedSalary: 85000,
    },
  ]

  const [applicants, setApplicants] = useState<Applicant[]>(initialApplicants)
  const [experienceFilter, setExperienceFilter] = useState<number>(0)
  const [salaryFilter, setSalaryFilter] = useState<number>(150000)
  const [techStackFilter, setTechStackFilter] = useState<string[]>([])
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const filterApplicants = () => {
    return initialApplicants.filter((applicant) => {
      const experienceMatch = applicant.experience >= experienceFilter
      const salaryMatch = applicant.expectedSalary <= salaryFilter
      const techStackMatch =
        techStackFilter.length === 0 || techStackFilter.every((tech) => applicant.techStack.includes(tech))
      return experienceMatch && salaryMatch && techStackMatch
    })
  }

  const handleFilter = () => {
    const filteredApplicants = filterApplicants()
    setApplicants(filteredApplicants)
    setIsFilterOpen(false)
  }

  const handleTechStackChange = (tech: string) => {
    setTechStackFilter((prev) => (prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]))
  }

  useEffect(() => {
    // Reset filters when the component mounts
    setExperienceFilter(0)
    setSalaryFilter(150000)
    setTechStackFilter([])
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/">
        <Button variant="outline" className="mb-4">
          Back to Jobs
        </Button>
      </Link>
      <h1 className="text-3xl font-bold mb-6">Applicants for {jobDetails.title}</h1>

      <Collapsible open={isFilterOpen} onOpenChange={setIsFilterOpen} className="mb-8">
        <CollapsibleTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2 mb-4">
            {isFilterOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            Filter Applicants
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Card>
            <CardContent className="grid gap-6 p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="experience">Minimum Experience (years)</Label>
                  <Input
                    id="experience"
                    type="number"
                    value={experienceFilter}
                    onChange={(e) => setExperienceFilter(Number(e.target.value))}
                    min={0}
                  />
                </div>
                <div>
                  <Label htmlFor="salary">Maximum Expected Salary</Label>
                  <Slider
                    id="salary"
                    min={50000}
                    max={150000}
                    step={5000}
                    value={[salaryFilter]}
                    onValueChange={(value) => setSalaryFilter(value[0])}
                  />
                  <p className="text-sm text-muted-foreground mt-1">${salaryFilter.toLocaleString()}</p>
                </div>
              </div>
              <div>
                <Label>Required Tech Stack</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {jobDetails.requiredTechStack.map((tech) => (
                    <label key={tech} className="flex items-center space-x-2">
                      <Checkbox
                        checked={techStackFilter.includes(tech)}
                        onCheckedChange={() => handleTechStackChange(tech)}
                      />
                      <span>{tech}</span>
                    </label>
                  ))}
                </div>
              </div>
              <Button onClick={handleFilter}>Apply Filters</Button>
            </CardContent>
          </Card>
        </CollapsibleContent>
      </Collapsible>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {applicants.map((applicant) => (
          <Card key={applicant.id}>
            <CardHeader>
              <CardTitle>{applicant.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Experience: {applicant.experience} years</p>
              <p className="text-sm text-muted-foreground">
                Expected Salary: ${applicant.expectedSalary.toLocaleString()}
              </p>
              <p className="text-sm text-muted-foreground">Tech Stack: {applicant.techStack.join(", ")}</p>
            </CardContent>
            <CardFooter>
              <Button onClick={() => router.push(`/applicant/${applicant.id}`)}>View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      {applicants.length === 0 && (
        <p className="text-center text-muted-foreground mt-8">No applicants match the current filters.</p>
      )}
    </div>
  )
}

