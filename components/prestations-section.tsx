import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function PrestationsSection() {
  const prestations = [
    {
      title: "PACK 1: Polish Classique Correction",
      time: "Temps : 1h30",
      price: "À partir de 99€",
      description: "Selon taille du véhicule. Correction des micro-rayures et brillance professionnelle.",
      image: "/pack1-car-polish.jpeg",
    },
    {
      title: "PACK 2: Décontamination Polish Classique",
      time: "Temps : 2h00",
      price: "À partir de 150€",
      description: "Selon taille du véhicule. Nettoyage en profondeur et polissage pour une finition impeccable.",
      image: "/pack2-car-detailing.jpeg",
    },
    {
      title: "PACK 3: Décontamination Polish Céramique Auto",
      time: "Temps : 3h à 5h",
      price: "À partir de 250€",
      description: "Selon taille du véhicule. Protection céramique durable après décontamination et polissage.",
      image: "/pack3-ceramic-car.jpeg",
    },
    {
      title: "Nettoyage Intérieur Complet 100% Vapeur",
      time: "Temps : 2h à 3h",
      price: "99€",
      description: "La beauté commence ici. Nettoyage en profondeur de l'habitacle avec vapeur.",
      image: "/interior-steam-cleaning.png", // Updated image
    },
  ]

  return (
    <section id="prestations" className="py-12 md:py-20 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-foreground">Nos Prestations :</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {prestations.map((prestation, index) => (
            <Card
              key={index}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-card text-card-foreground transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="relative w-full h-48">
                <Image
                  src={prestation.image || "/placeholder.svg"}
                  alt={prestation.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold">{prestation.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-lg font-semibold text-primary mb-1">{prestation.price}</p>
                <p className="text-sm text-muted-foreground mb-2">{prestation.time}</p>
                <p className="text-muted-foreground text-sm">{prestation.description}</p>
              </CardContent>
              <CardFooter>
                <Link href={`/contact?service=${encodeURIComponent(prestation.title)}`} className="w-full">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Prendre Rendez-Vous
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center text-muted-foreground text-sm space-y-2">
          <p className="text-red-500 font-semibold">⚠️ VÉHICULE PROPRE OBLIGATOIRE ⚠️</p>
          <p>Les rayures profondes s&apos;estomperont.</p>
          <p>Les micros rayures et petits frottements s&apos;effaceront.</p>
        </div>
      </div>
    </section>
  )
}
