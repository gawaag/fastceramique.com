import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import FadeIn from "@/components/fade-in" // Import FadeIn
import AboutUsBlock from "@/components/about-us-block" // Import the new component

export default function PrestationsSection() {
  const prestations = [
    {
      title: "Option 1: Écran CarPlay / Android Auto",
      time: "Installation",
      price: "149 €",
      description: "Installation et vente d'écran CarPlay / Android Auto.",
      image: "/prestations-images/carplay-android-auto.jpeg",
    },
    {
      title: "Option 2: Écran CarPlay + Caméra",
      time: "Installation",
      price: "199 €",
      description: "Installation et vente d'écran CarPlay + caméra.",
      image: "/prestations-images/carplay-camera.jpeg",
    },
    {
      title: "Option 3: Écran + Caméra Recul + Caméra 360",
      time: "Installation",
      price: "349 €",
      description: "Installation et vente d'écran + caméra de recul + caméra 360.",
      image: "/prestations-images/carplay-camera-360.jpeg",
    },
    {
      title: "Option 4: Écran + Caméra + Lumières d'ambiance",
      time: "Installation",
      price: "399 €",
      description: "Installation et vente d'écran CarPlay / Android Auto / caméra / lumières d'ambiance.",
      image: "/prestations-images/carplay-camera-lights.jpeg",
    },
  ]

  return (
    <section id="prestations" className="py-12 md:py-20 bg-muted scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-primary bg-clip-text text-transparent">
          Nos Prestations :
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {prestations.map((prestation, index) => (
            <FadeIn key={index} delay={index * 150}>
              <Card className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-card text-card-foreground transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl min-h-[500px]">
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
                    <Button className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
                      Prendre Rendez-Vous
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </FadeIn>
          ))}
        </div>
        <div className="mt-10 text-center text-muted-foreground text-sm space-y-2">
          <p className="text-primary font-semibold">
            Triple prise allume cigare + Un chargeur de voiture 4 en 1 rétractable et rapide (66W), avec ports
            USB/Type-C, compatible iPhone/Android, intégrant un toit étoilé et un projecteur.
          </p>
          <p className="text-lg font-semibold text-primary">Offerts sur toutes les options !</p>
        </div>
        <AboutUsBlock /> {/* New About Us block */}
      </div>
    </section>
  )
}
