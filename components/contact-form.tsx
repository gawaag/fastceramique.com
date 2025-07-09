"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation" // Import useRouter

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ContactFormProps {
  initialService?: string
}

export default function ContactForm({ initialService }: ContactFormProps) {
  const router = useRouter()

  const prestations = [
    {
      id: "pack1",
      title: "PACK 1: Polish Classique Correction",
      price: "99€",
      calendlyLink: "https://calendly.com/mr_fast_ceramique-ehpj/rdv-pack-1-polish-classique-correction",
    },
    {
      id: "pack2",
      title: "PACK 2: Décontamination Polish Classique",
      price: "150€",
      calendlyLink: "https://calendly.com/mr_fast_ceramique-ehpj/pack-2-decontamination-polish-classique",
    },
    {
      id: "pack3",
      title: "PACK 3: Décontamination Polish Céramique Auto",
      price: "250€",
      calendlyLink: "https://calendly.com/mr_fast_ceramique-ehpj/pack-3-decontamination-polish-ceramique-auto",
    },
    {
      id: "pack4",
      title: "Nettoyage Intérieur Complet 100% Vapeur",
      price: "99€",
      calendlyLink: "https://calendly.com/mr_fast_ceramique-ehpj/nettoyage-interieur-complet-100-vapeur",
    },
  ]

  const [service, setService] = useState(initialService || "")
  const [selectedPrice, setSelectedPrice] = useState("")
  const [selectedCalendlyLink, setSelectedCalendlyLink] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (initialService) {
      setService(initialService)
      const initialPrestation = prestations.find((p) => p.title === initialService)
      if (initialPrestation) {
        setSelectedPrice(initialPrestation.price)
        setSelectedCalendlyLink(initialPrestation.calendlyLink)
      }
    }
  }, [initialService])

  const handleServiceChange = (value: string) => {
    setService(value)
    const selectedPrestation = prestations.find((p) => p.title === value)
    if (selectedPrestation) {
      setSelectedPrice(selectedPrestation.price)
      setSelectedCalendlyLink(selectedPrestation.calendlyLink)
    } else {
      setSelectedPrice("")
      setSelectedCalendlyLink(undefined)
    }
  }

  const handleReserveClick = () => {
    if (selectedCalendlyLink) {
      window.open(selectedCalendlyLink, "_blank") // Ouvre le lien Calendly dans un nouvel onglet
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Réservez votre prestation</CardTitle>
        <CardDescription>Sélectionnez un pack pour prendre rendez-vous via Calendly.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {" "}
          {/* Utilisation d'une div au lieu d'un form car la soumission est directe */}
          <div className="grid gap-2">
            <Label htmlFor="service">Pack / Prestation</Label>
            <Select onValueChange={handleServiceChange} value={service}>
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
          <Button
            type="button" // Type "button" pour éviter la soumission de formulaire par défaut
            className="w-full bg-gradient-primary text-primary-foreground flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            onClick={handleReserveClick}
            disabled={!selectedCalendlyLink} // Désactive le bouton si aucun lien Calendly n'est sélectionné
          >
            Réserver
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
