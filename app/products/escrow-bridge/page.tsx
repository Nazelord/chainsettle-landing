import type { Metadata } from 'next'
import Link from "next/link"
import { ArrowRight, Shield, Zap, Globe, Settings } from "lucide-react"

import { escrowBridge } from "@/content/copy"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: 'Escrow Bridge - Secure Cross-Chain Escrow Solutions',
  description: 'ChainSettle\'s Escrow Bridge provides secure, automated escrow services across multiple blockchain networks with trust-minimized architecture.',
}

export default function EscrowBridgePage() {
  const featureIcons = [Globe, Zap, Shield, Settings]

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <Badge variant="default" className="mb-4">Available</Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
                {escrowBridge.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                {escrowBridge.subtitle}
              </p>
            </div>
            
            <p className="text-lg leading-8 text-muted-foreground max-w-3xl mx-auto text-center">
              {escrowBridge.description}
            </p>
            
            <div className="mt-10 flex items-center justify-center gap-x-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/developers">View Documentation</Link>
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
              Key Features
            </h2>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {escrowBridge.features.map((feature, index) => {
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

      {/* Workflow Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                {escrowBridge.workflow.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                Simple, secure, and automated escrow process from start to finish
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {escrowBridge.workflow.steps.map((step, index) => (
                <div key={step.step} className="text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 mx-auto rounded-full brand-gradient flex items-center justify-center text-white font-bold text-lg mb-4">
                      {step.step}
                    </div>
                    {index < escrowBridge.workflow.steps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-muted transform translate-x-8 -translate-y-1/2" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-muted/20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
              Technical Specifications
            </h2>
            
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Supported Networks</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Ethereum Mainnet</span>
                    <Badge variant="outline">Live</Badge>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span>Polygon</span>
                    <Badge variant="outline">Live</Badge>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span>Arbitrum</span>
                    <Badge variant="secondary">Coming Soon</Badge>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span>Optimism</span>
                    <Badge variant="secondary">Coming Soon</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Security Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-3" />
                    <span className="text-sm">Multi-signature security</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-3" />
                    <span className="text-sm">Time-locked escrows</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-3" />
                    <span className="text-sm">Cryptographic attestations</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-3" />
                    <span className="text-sm">Dispute resolution protocols</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-3" />
                    <span className="text-sm">Emergency pause functionality</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Implement Escrow Bridge?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Contact our team to discuss your specific requirements and get started with implementation.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Contact Sales
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/developers">Technical Documentation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}