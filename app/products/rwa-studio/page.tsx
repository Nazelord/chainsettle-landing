import type { Metadata } from 'next'
import Link from "next/link"
import { ArrowRight, Layers, FileText, Workflow, Building2 } from "lucide-react"

import { rwaStudio } from "@/content/copy"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"

export const metadata: Metadata = {
  title: 'RWA Studio - Real-World Asset Tokenization Platform',
  description: 'RWA Studio provides comprehensive tooling for real-world asset tokenization with compliance management and workflow automation.',
}

export default function RWAStudioPage() {
  const featureIcons = [Layers, FileText, Workflow, Building2]

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <Badge variant="secondary" className="mb-4">Independent Startup</Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
                {rwaStudio.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                {rwaStudio.subtitle}
              </p>
            </div>
            
            <p className="text-lg leading-8 text-muted-foreground max-w-3xl mx-auto text-center mb-8">
              {rwaStudio.description}
            </p>

            <Alert className="max-w-3xl mx-auto mb-10">
              <AlertDescription className="text-center">
                <strong>Note:</strong> {rwaStudio.notice}
              </AlertDescription>
            </Alert>
            
            <div className="flex items-center justify-center gap-x-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">About Our Ventures</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/20">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
              Platform Capabilities
            </h2>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {rwaStudio.features.map((feature, index) => {
                const Icon = featureIcons[index]
                
                return (
                  <Card key={feature.title} className="text-center h-full">
                    <CardHeader>
                      <div className="mx-auto w-12 h-12 rounded-full brand-gradient flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Tokenization Process */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Tokenization Workflow
              </h2>
              <p className="text-lg text-muted-foreground">
                End-to-end process for converting real-world assets into digital tokens
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Asset Evaluation",
                  description: "Comprehensive assessment and valuation of real-world assets with compliance verification.",
                },
                {
                  step: "02", 
                  title: "Legal Framework",
                  description: "Establish legal structure and regulatory compliance for tokenization process.",
                },
                {
                  step: "03",
                  title: "Token Creation",
                  description: "Deploy smart contracts and create digital tokens representing asset ownership.",
                },
                {
                  step: "04",
                  title: "Market Integration",
                  description: "Enable trading, liquidity provision, and ongoing asset management.",
                },
              ].map((step, index) => (
                <div key={step.step} className="text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 mx-auto rounded-full brand-gradient flex items-center justify-center text-white font-bold text-lg mb-4">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Asset Classes */}
      <section className="py-20 bg-muted/20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
              Supported Asset Classes
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Real Estate",
                  description: "Commercial and residential properties, REITs, and development projects.",
                  examples: ["Commercial buildings", "Residential properties", "Development rights"],
                },
                {
                  title: "Commodities", 
                  description: "Physical commodities, precious metals, and agricultural products.",
                  examples: ["Precious metals", "Agricultural products", "Energy resources"],
                },
                {
                  title: "Financial Assets",
                  description: "Traditional financial instruments and alternative investments.",
                  examples: ["Private equity", "Debt instruments", "Investment funds"],
                },
              ].map((assetClass) => (
                <Card key={assetClass.title}>
                  <CardHeader>
                    <CardTitle className="text-lg">{assetClass.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{assetClass.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Examples:</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {assetClass.examples.map((example) => (
                          <li key={example} className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Independent Venture Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="p-8 rounded-lg border bg-card">
              <Badge variant="secondary" className="mb-4">Independent Venture</Badge>
              <h2 className="text-2xl font-bold mb-4">Focused Innovation</h2>
              <p className="text-muted-foreground mb-6">
                RWA Studio operates as a dedicated startup focused exclusively on real-world asset tokenization. 
                This independent structure allows for specialized development and targeted market approach.
              </p>
              <div className="grid gap-4 md:grid-cols-3 text-sm">
                <div className="space-y-2">
                  <h3 className="font-medium">Specialized Focus</h3>
                  <p className="text-muted-foreground">Dedicated team and resources for RWA solutions</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Market Agility</h3>
                  <p className="text-muted-foreground">Rapid response to RWA market developments</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Partnership Ready</h3>
                  <p className="text-muted-foreground">Independent structure enables flexible partnerships</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Interested in RWA Studio?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Learn more about our independent RWA tokenization venture and partnership opportunities.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Contact RWA Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">Learn About Our Ventures</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}