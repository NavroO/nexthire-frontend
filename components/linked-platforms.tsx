"use client"

import type React from "react"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { LinkedinIcon as LinkedIn, BookOpen } from "lucide-react"

interface Platform {
  name: string
  icon: React.ReactNode
  linked: boolean
}

export function LinkedPlatforms() {
  const [platforms, setPlatforms] = useState<Platform[]>([
    { name: "LinkedIn Learning", icon: <LinkedIn className="w-4 h-4" />, linked: true },
    { name: "Coursera", icon: <BookOpen className="w-4 h-4" />, linked: false },
  ])

  const togglePlatform = (index: number) => {
    setPlatforms((prevPlatforms) =>
      prevPlatforms.map((platform, i) => (i === index ? { ...platform, linked: !platform.linked } : platform)),
    )
  }

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Linked Learning Platforms</h2>
      <div className="flex flex-wrap gap-2">
        {platforms.map((platform, index) => (
          <Badge
            key={platform.name}
            variant={platform.linked ? "default" : "outline"}
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => togglePlatform(index)}
          >
            {platform.icon}
            {platform.name}
            {platform.linked ? " (Linked)" : " (Not Linked)"}
          </Badge>
        ))}
      </div>
      <p className="text-sm text-muted-foreground mt-2">
        Link your learning platforms to automatically update your profile with new skills and certifications.
      </p>
    </div>
  )
}

