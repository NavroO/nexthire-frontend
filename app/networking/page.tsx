"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Connection {
  id: number
  name: string
  title: string
  company: string
  mutualConnections: number
}

export default function Networking() {
  const [connections, setConnections] = useState<Connection[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchConnections = async () => {
      // In a real application, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API delay
      setConnections([
        { id: 1, name: "John Doe", title: "Senior Recruiter", company: "TechCorp", mutualConnections: 15 },
        { id: 2, name: "Jane Smith", title: "HR Manager", company: "WebSolutions", mutualConnections: 8 },
        { id: 3, name: "Bob Johnson", title: "Software Engineer", company: "DataSystems", mutualConnections: 5 },
      ])
      setIsLoading(false)
    }
    fetchConnections()
  }, [])

  const connectWithUser = (userId: number) => {
    // In a real application, this would send a connection request
    console.log(`Connection request sent to user ${userId}`)
  }

  if (isLoading) {
    return <div className="container mx-auto px-4 py-8">Loading connections...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Networking</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {connections.map((connection) => (
          <Card key={connection.id}>
            <CardHeader>
              <CardTitle>{connection.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                {connection.title} at {connection.company}
              </p>
              <Badge variant="secondary" className="mb-4">
                {connection.mutualConnections} mutual connections
              </Badge>
              <Button onClick={() => connectWithUser(connection.id)} className="w-full">
                Connect
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

