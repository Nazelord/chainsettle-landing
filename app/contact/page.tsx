import type { Metadata } from 'next'
import Link from "next/link"
import { Mail, Linkedin, Send } from "lucide-react"

import { contact } from "@/content/copy"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with ChainSettle for partnerships, support, and general inquiries.',
}

const iconMap = {
  mail: Mail,
  linkedin: Linkedin,
  send: Send,
}

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              {contact.title}
            </h1>
            <p className="text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              {contact.description}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-3">
              {contact.methods.map((method) => {
                const Icon = iconMap[method.icon as keyof typeof iconMap]
                
                return (
                  <Card key={method.type} className="text-center h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mx-auto w-12 h-12 rounded-full brand-gradient flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{method.type}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-2">
                          {method.label}
                        </p>
                        <p className="text-lg font-semibold">{method.value}</p>
                      </div>
                      
                      <Button asChild className="w-full">
                        <Link 
                          href={method.href}
                          target={method.type !== "Email" ? "_blank" : undefined}
                          rel={method.type !== "Email" ? "noopener noreferrer" : undefined}
                        >
                          {method.type === "Email" ? "Send Email" : `Visit ${method.type}`}
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours & Response Times */}
      <section className="py-20 bg-muted/20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Response Information
              </h2>
              <p className="text-lg text-muted-foreground">
                We're here to help with your inquiries
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">General Inquiries</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Response Time</p>
                  <p className="font-semibold">24-48 hours</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">Enterprise Sales</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Response Time</p>
                  <p className="font-semibold">4-12 hours</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">Partnership Inquiries</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Response Time</p>
                  <p className="font-semibold">1-3 business days</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're looking to integrate our infrastructure, explore partnership opportunities, 
              or have technical questions, we're here to help.
            </p>
            
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                <strong>For technical inquiries:</strong> Include details about your use case and technical requirements
              </p>
              <p>
                <strong>For partnerships:</strong> Share information about your organization and integration goals
              </p>
              <p>
                <strong>For enterprise sales:</strong> Let us know your scale and timeline requirements
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}