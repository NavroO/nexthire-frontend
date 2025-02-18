import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Building, DollarSign } from "lucide-react"

interface Job {
  id: number
  title: string
  company: string
  location: string
  salary: string
}

export default function JobCard({ job }: { job: Job }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{job.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <Building className="mr-2 h-4 w-4" />
            <span>{job.company}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-2 h-4 w-4" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <DollarSign className="mr-2 h-4 w-4" />
            <span>{job.salary}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/job/${job.id}`} passHref legacyBehavior>
          <Button variant="outline" className="w-full" asChild>
            <a>View Details</a>
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

