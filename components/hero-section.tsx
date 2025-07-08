import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center text-center">
      <Image
        src="/hero-car-background.jpeg" // Updated image source
        alt="Luxury car detailing"
        layout="fill"
        objectFit="cover"
        quality={90}
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black/70 z-10" /> {/* Increased overlay for better text contrast */}
      <div className="relative z-20 text-white px-4 md:px-6 max-w-3xl space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Bienvenue chez Mr Fast Céramique</h1>
        <p className="text-lg md:text-xl lg:text-2xl">
          Votre expert en detailing automobile et protection céramique en Île-de-France.
        </p>
        <Link href="#prestations">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full"
          >
            Découvrez nos formules
          </Button>
        </Link>
      </div>
    </section>
  )
}
