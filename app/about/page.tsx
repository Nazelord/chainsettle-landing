import type { Metadata } from 'next'
import { Building, Target, Users } from "lucide-react"

import { about } from "@/content/copy"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about ChainSettle\'s vision, mission, and team building the future of Web3 infrastructure.',
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              {about.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Building the infrastructure for trust-minimized Web3 automation and enterprise blockchain integration.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-full brand-gradient flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl">{about.vision.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {about.vision.description}
                </p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-full brand-gradient flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl">{about.mission.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {about.mission.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 rounded-full brand-gradient flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl">{about.team.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {about.team.description}
                </p>
                <div className="p-6 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground italic">
                    {about.team.placeholder}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12">
              Our Values
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Security First</h3>
                <p className="text-muted-foreground">
                  Every solution is built with security as the foundational principle.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Enterprise Ready</h3>
                <p className="text-muted-foreground">
                  Institutional-grade reliability and compliance from day one.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Trust Minimized</h3>
                <p className="text-muted-foreground">
                  Cryptographic proofs and verifiable systems reduce trust assumptions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}