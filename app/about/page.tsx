import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Zap, Target, Globe, TrendingUp } from "lucide-react"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About NextHire</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg mb-4">
          At NextHire, we're on a mission to revolutionize the way tech professionals find their dream jobs and how
          companies discover top talent. We believe in creating meaningful connections that drive innovation and career
          growth in the ever-evolving world of technology.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
        <p className="text-lg mb-4">
          Founded in 2025, NextHire is a cutting-edge job board platform specifically designed for the tech industry.
          Our team of passionate developers, designers, and industry experts work tirelessly to create a seamless and
          intelligent job search experience.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">What Sets Us Apart</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<Zap className="h-8 w-8" />}
            title="AI-Powered Matching"
            description="Our advanced algorithms ensure the perfect fit between candidates and job openings."
          />
          <FeatureCard
            icon={<Users className="h-8 w-8" />}
            title="Vibrant Tech Community"
            description="Join a thriving network of tech professionals, share insights, and grow your career."
          />
          <FeatureCard
            icon={<Target className="h-8 w-8" />}
            title="Tailored Job Recommendations"
            description="Receive personalized job suggestions based on your skills, experience, and preferences."
          />
          <FeatureCard
            icon={<Globe className="h-8 w-8" />}
            title="Global Opportunities"
            description="Connect with tech companies and startups from around the world."
          />
          <FeatureCard
            icon={<TrendingUp className="h-8 w-8" />}
            title="Career Growth Tools"
            description="Access resources, skill assessments, and learning opportunities to advance your career."
          />
          <FeatureCard
            icon={<CheckCircle className="h-8 w-8" />}
            title="Verified Employers"
            description="All companies on our platform are vetted to ensure a safe and reliable job search experience."
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
        <p className="text-lg mb-4">
          We are committed to fostering diversity, equity, and inclusion in the tech industry. NextHire actively
          promotes equal opportunities and strives to create a platform where all tech professionals can thrive,
          regardless of their background.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Join the NextHire Community</h2>
        <p className="text-lg mb-4">
          Whether you're a job seeker looking for your next big opportunity or an employer searching for top tech
          talent, NextHire is here to help you succeed. Join our community today and be part of the future of tech
          recruitment.
        </p>
        <div className="flex space-x-4">
          <Badge variant="secondary" className="text-lg py-1 px-3">
            #TechJobs
          </Badge>
          <Badge variant="secondary" className="text-lg py-1 px-3">
            #InnovationInRecruitment
          </Badge>
          <Badge variant="secondary" className="text-lg py-1 px-3">
            #NextHireCommunity
          </Badge>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          {icon}
          <span className="ml-2">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}

