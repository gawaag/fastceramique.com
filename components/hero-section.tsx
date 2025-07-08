import { Button } from "@/components/ui/button"
import Link from "next/link"
import ShowroomCarousel from "./showroom-carousel" // Import the new component

export default function HeroSection() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center text-center overflow-hidden">
      {/* Showroom Carousel as background */}
      <ShowroomCarousel />

      {/* Overlay to darken images and make text readable */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="relative z-20 text-white px-4 md:px-6 max-w-3xl space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-blue-text bg-clip-text text-transparent">
          Bienvenue chez Mr Fast Céramique
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl">
          Votre expert en detailing automobile et protection céramique en Île-de-France.
        </p>
        <Link href="#prestations">
          <Button
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-200 px-8 py-3 text-lg rounded-full shadow-lg transition-colors"
          >
            Découvrez nos Prestations
          </Button>
        </Link>
      </div>
    </section>
  )
}
