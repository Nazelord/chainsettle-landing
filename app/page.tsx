import Link from "next/link"
import { ArrowRight, Shield, Zap, Globe, Building } from "lucide-react"

import { hero, valuePropositions, products } from "@/content/copy"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import HeroBackground from "@/components/hero-background"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
<section className="relative isolate py-20 lg:py-32">
  <HeroBackground />

  <div className="mx-auto w-full max-w-7xl px-4">
    <div className="relative z-10 mx-auto max-w-4xl text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
        <span className="brand-text-gradient">{hero.headline}</span>
      </h1>

      <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
        {hero.description}
      </p>

      <div className="mt-10 flex items-center justify-center gap-x-4">
        <Button asChild size="lg">
          <Link href="/products">
            {hero.primaryCta}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="/contact">{hero.secondaryCta}</Link>
        </Button>
      </div>
    </div>
  </div>
</section>

      {/* Value Propositions */}
      <section className="py-20 bg-muted/20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {valuePropositions.map((prop, index) => {
              const icons = [Building, Globe, Shield, Zap]
              const Icon = icons[index]
              
              return (
                <Card key={prop.title} className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 rounded-full brand-gradient flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{prop.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{prop.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Products Teaser */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {products.overview.title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {products.overview.description}
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {products.items.map((product) => (
              <Card key={product.id} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{product.title}</CardTitle>
                    <Badge variant={product.status === "Available" ? "default" : "secondary"}>
                      {product.status}
                    </Badge>
                  </div>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link href={product.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-20 bg-muted/20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Built for Enterprise
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              ChainSettle provides institutional-grade infrastructure with enterprise security, compliance, and reliability standards.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="text-sm px-4 py-2">Enterprise Security</Badge>
              <Badge variant="outline" className="text-sm px-4 py-2">Regulatory Compliance</Badge>
              <Badge variant="outline" className="text-sm px-4 py-2">24/7 Support</Badge>
              <Badge variant="outline" className="text-sm px-4 py-2">SLA Guarantees</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Build?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Start building trust-minimized Web3 automations with ChainSettle's infrastructure platform.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-4">
              <Button asChild size="lg">
                <Link href="/products">
                  Explore Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}