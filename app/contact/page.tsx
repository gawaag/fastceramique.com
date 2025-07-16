"use client" // This page needs to be a client component to use useSearchParams

import SiteHeader from "@/components/site-header"
import ContactForm from "@/components/contact-form"
import SiteFooter from "@/components/site-footer"
import { MapPin, Phone, Mail } from "lucide-react"
import { useSearchParams } from "next/navigation" // Import useSearchParams
import FadeIn from "@/components/fade-in" // Import FadeIn
import AnimatedPackCarousel from "@/components/animated-pack-carousel" // Import the new component

export default function ContactPage() {
  const searchParams = useSearchParams()
  const initialService = searchParams.get("service") || undefined // Get the service from URL params

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <FadeIn>
            {" "}
            {/* Wrap the main content of the contact page */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Contactez Lumen Car
              </h1>
              <p className="text-lg text-muted-foreground">
                Nous sommes là pour répondre à toutes vos questions et vous aider à prendre soin de votre véhicule.
                N&apos;hésitez pas à nous contacter par téléphone, email ou en remplissant le formulaire ci-contre.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  <p className="text-lg text-foreground">Fresnes, 94260, France</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-primary" />
                  <p className="text-lg text-foreground">07 67 51 82 12</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-primary" />
                  <p className="text-lg text-foreground">contact@lumencar.com</p>
                </div>
              </div>
              {/* Replaced static image with animated carousel */}
              <div className="w-full flex items-center justify-center mx-auto lg:mx-0">
                <AnimatedPackCarousel />
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            {" "}
            {/* Add a slight delay for the form */}
            <ContactForm initialService={initialService} />
          </FadeIn>
        </div>
      </main>
      <FadeIn delay={400}>
        {" "}
        {/* Add a slight delay for the footer */}
        <SiteFooter />
      </FadeIn>
    </div>
  )
}
