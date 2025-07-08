"use client"
import { useState, useEffect } from "react"
import { useActionState } from "react" // Import useActionState
import { submitContactForm } from "@/app/contact/action" // Import the Server Action
import { Loader } from "@/components/ui/loader" // Import the Loader component

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ContactFormProps {
  initialService?: string
}

export default function ContactForm({ initialService }: ContactFormProps) {
  const [service, setService] = useState(initialService || "")
  const [state, formAction, isPending] = useActionState(submitContactForm, null) // Initialize useActionState

  useEffect(() => {
    if (initialService) {
      setService(initialService)
    }
  }, [initialService])

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Contactez-nous</CardTitle>
        <CardDescription>Remplissez le formulaire ci-dessous pour nous envoyer un message.</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Nom</Label>
            <Input id="name" name="name" placeholder="Votre nom" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="Votre email" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="service">Pack / Prestation</Label>
            <Input
              id="service"
              name="service"
              placeholder="Ex: PACK 1: Polish Classique Correction"
              value={service}
              onChange={(e) => setService(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="Votre message..." required className="min-h-[100px]" />
          </div>
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center gap-2"
            disabled={isPending}
          >
            {isPending && <Loader />} {/* Show loader when pending */}
            {isPending ? "Envoi en cours..." : "Envoyer le message"}
          </Button>
          {state && (
            <p className={`text-center text-sm mt-2 ${state.success ? "text-green-500" : "text-red-500"}`}>
              {state.message}
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
