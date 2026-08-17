"use client"

import { useSearchParams } from "next/navigation"
import ContactForm from "@/components/contact-form"

export default function ContactServiceFromUrl() {
  const searchParams = useSearchParams()
  const initialService = searchParams.get("service") || undefined

  return <ContactForm initialService={initialService} />
}
