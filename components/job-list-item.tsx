import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Building, DollarSign, Clock, Briefcase, Zap } from "lucide-react"

interface JobListItemProps {
  id: number
  title: string
  company: string
  location: string
  type: string
  salary: string
  experience: string
  technologies: string[]
  fitScore: number
}

export function JobListItem({
  id,
  title,
  company,
  location,
  type,
  salary,
  experience,
  technologies,
  fitScore,
}: JobListItemProps) {
  const getFitScoreColor = (score: number) => {
    if (score >= 80) return "bg-green-500"
    if (score >= 60) return "bg-yellow-500"
    return "bg-red-500"
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl">{title}</CardTitle>
        <Badge className={`${getFitScoreColor(fitScore)} text-white flex items-center`}>
          <Zap className="w-4 h-4 mr-1" />
          {fitScore}% Fit
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2 mb-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <Building className="mr-2 h-4 w-4" />
            <span>{company}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-2 h-4 w-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <DollarSign className="mr-2 h-4 w-4" />
            <span>{salary}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Briefcase className="mr-2 h-4 w-4" />
            <span>{type}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="mr-2 h-4 w-4" />
            <span>{experience}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/job/${id}`} passHref legacyBehavior>
          <Button variant="outline" className="w-full" asChild>
            <a>View Details</a>
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

