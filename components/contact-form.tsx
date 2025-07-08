"use client"
import { useState, useEffect } from "react"
import { useActionState } from "react"
import { submitContactForm } from "@/app/contact/action"
import { Loader } from "@/components/ui/loader"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ContactFormProps {
  initialService?: string
}

export default function ContactForm({ initialService }: ContactFormProps) {
  const prestations = [
    { id: "pack1", title: "PACK 1: Polish Classique Correction", price: "99€" },
    { id: "pack2", title: "PACK 2: Décontamination Polish Classique", price: "150€" },
    { id: "pack3", title: "PACK 3: Décontamination Polish Céramique Auto", price: "250€" },
    { id: "pack4", title: "Nettoyage Intérieur Complet 100% Vapeur", price: "99€" },
  ]

  const [service, setService] = useState(initialService || "")
  const [selectedPrice, setSelectedPrice] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  const [state, formAction, isPending] = useActionState(submitContactForm, {})

  useEffect(() => {
    if (initialService) {
      setService(initialService)
      const initialPrestation = prestations.find((p) => p.title === initialService)
      if (initialPrestation) {
        setSelectedPrice(initialPrestation.price)
      }
    }
  }, [initialService])

  const handleServiceChange = (value: string) => {
    setService(value)
    const selectedPrestation = prestations.find((p) => p.title === value)
    if (selectedPrestation) {
      setSelectedPrice(selectedPrestation.price)
    } else {
      setSelectedPrice("")
    }
  }

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
            <Select onValueChange={handleServiceChange} value={service} name="service">
              <SelectTrigger>
                <SelectValue placeholder="Sélectionnez un pack ou une prestation" />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                {prestations.map((p) => (
                  <SelectItem key={p.id} value={p.title} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    {p.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="price">Prix estimé</Label>
            <Input id="price" name="price" value={selectedPrice} readOnly placeholder="Prix auto-rempli" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="date">Date souhaitée</Label>
              <Input
                id="date"
                name="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="time">Heure souhaitée</Label>
              <Input
                id="time"
                name="time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="Votre message..." required className="min-h-[100px]" />
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-primary text-primary-foreground flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            disabled={isPending}
          >
            {isPending && <Loader />}
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
