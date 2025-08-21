import type { Metadata } from 'next'
import Link from "next/link"
import { Code, Book, Users, Wrench } from "lucide-react"

import { developers } from "@/content/copy"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: 'Developers - SDK and Documentation',
  description: 'Developer resources, SDK, and documentation for ChainSettle\'s Web3 infrastructure platform.',
}

export default function DevelopersPage() {
  const featureIcons = [Code, Book, Wrench, Users]

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4">Coming Soon</Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              {developers.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              {developers.subtitle}
            </p>
            <p className="text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
              {developers.description}
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Features */}
      <section className="py-20 bg-muted/20">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
              What's Coming
            </h2>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {developers.features.map((feature, index) => {
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

      {/* SDK Preview */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                SDK Preview
              </h2>
              <p className="text-lg text-muted-foreground">
                Get a glimpse of what the ChainSettle SDK will offer
              </p>
            </div>
            
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  JavaScript/TypeScript SDK
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 p-6 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
                    <code>{`// Example SDK usage (coming soon)
import { ChainSettle } from '@chainsettle/sdk';

const chainSettle = new ChainSettle({
  apiKey: 'your-api-key',
  network: 'mainnet'
});

// Create an escrow
const escrow = await chainSettle.escrow.create({
  amount: '1000',
  currency: 'USDC',
  conditions: [...],
  participants: [...]
});

// Listen for events
escrow.on('settled', (data) => {
  console.log('Escrow settled:', data);
});`}</code>
                  </pre>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  <strong>Note:</strong> This is a preview of the upcoming SDK interface. 
                  Actual implementation may vary.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Developer Resources */}
      <section className="py-20 bg-muted/20">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
              Future Resources
            </h2>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "API Reference",
                  description: "Complete API documentation with endpoint details and examples",
                  status: "Planning",
                },
                {
                  title: "Code Examples",
                  description: "Sample implementations and integration patterns for common use cases",
                  status: "Planning", 
                },
                {
                  title: "Testing Suite",
                  description: "Testnet environment and tools for development and testing",
                  status: "Planning",
                },
                {
                  title: "Webhooks Guide",
                  description: "Real-time event notifications and webhook integration",
                  status: "Planning",
                },
                {
                  title: "Migration Tools",
                  description: "Tools and guides for migrating from other platforms",
                  status: "Planning",
                },
                {
                  title: "Best Practices",
                  description: "Security guidelines and implementation best practices",
                  status: "Planning",
                },
              ].map((resource) => (
                <Card key={resource.title}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {resource.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{resource.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Early Access */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Get Early Access
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Be among the first developers to access our SDK and documentation when they become available.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-4">
              <Button asChild size="lg" disabled>
                <Link href="#">
                  {developers.cta.primary}
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">{developers.cta.secondary}</Link>
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Documentation will be available through our Wiki platform
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}