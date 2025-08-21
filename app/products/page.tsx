import type { Metadata } from 'next'
import Link from "next/link"
import { ArrowRight, Shield, Layers } from "lucide-react"

import { products } from "@/content/copy"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: 'Products',
  description: 'Enterprise-grade Web3 infrastructure solutions including Escrow Bridge and RWA Studio.',
}

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              {products.overview.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              {products.overview.description}
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 max-w-6xl mx-auto">
            {products.items.map((product, index) => {
              const icons = [Shield, Layers]
              const Icon = icons[index]
              
              return (
                <Card key={product.id} className="overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full brand-gradient flex items-center justify-center">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <Badge variant={product.status === "Available" ? "default" : "secondary"}>
                          {product.status}
                        </Badge>
                      </div>
                      
                      <CardHeader className="p-0 mb-6">
                        <CardTitle className="text-3xl mb-2">{product.title}</CardTitle>
                        <CardDescription className="text-base">
                          {product.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="p-0 space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3">Key Features:</h4>
                          <ul className="space-y-2">
                            {product.features.map((feature) => (
                              <li key={feature} className="flex items-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <Button asChild size="lg" className="w-full sm:w-auto">
                          <Link href={product.href}>
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </div>
                    
                    <div className="bg-muted/20 p-8 lg:p-12 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-24 h-24 mx-auto rounded-full brand-gradient flex items-center justify-center">
                          <Icon className="h-12 w-12 text-white" />
                        </div>
                        <p className="text-sm text-muted-foreground max-w-xs">
                          {product.status === "Available" 
                            ? "Ready for enterprise deployment"
                            : "Independent venture with dedicated focus"
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-20 bg-muted/20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Built on Robust Infrastructure
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              All ChainSettle products are built on enterprise-grade infrastructure designed for institutional adoption.
            </p>
            
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <h3 className="font-semibold mb-2">99.9% Uptime</h3>
                <p className="text-sm text-muted-foreground">Enterprise SLA guarantees</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Multi-Chain Support</h3>
                <p className="text-sm text-muted-foreground">Cross-blockchain compatibility</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">Dedicated enterprise support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}