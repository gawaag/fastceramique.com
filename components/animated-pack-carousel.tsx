"use client"

import Image from "next/image"

export default function AnimatedPackCarousel() {
  const prestations = [
    {
      title: "Option 1: Écran CarPlay / Android Auto",
      displayTitle: "Option 1:<br />Écran CarPlay<br />/ Android Auto",
      price: "149 €",
      image: "/prestations-images/carplay-android-auto.jpeg",
    },
    {
      title: "Option 2: Écran CarPlay + Caméra",
      displayTitle: "Option 2:<br />Écran CarPlay<br />+ Caméra",
      price: "199 €",
      image: "/prestations-images/carplay-camera.jpeg",
    },
    {
      title: "Option 3: Écran + Caméra Recul + Caméra 360",
      displayTitle: "Option 3:<br />Écran + Caméra<br />Recul + Caméra 360",
      price: "349 €",
      image: "/prestations-images/carplay-camera-360.jpeg",
    },
    {
      title: "Option 4: Écran + Caméra + Lumières d'ambiance",
      displayTitle: "Option 4:<br />Écran + Caméra<br />+ Lumières<br />d'ambiance",
      price: "399 €",
      image: "/prestations-images/carplay-camera-lights.jpeg",
    },
  ]

  // Create an array of 10 items, cycling through the 4 prestations
  const carouselItems = Array.from({ length: 10 }, (_, i) => prestations[i % prestations.length])

  return (
    <div className="card-3d">
      {carouselItems.map((item, index) => (
        <div key={index} className="flex flex-col items-center justify-center h-full">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            width={80}
            height={60}
            objectFit="cover"
            className="rounded-md"
          />
          <span
            className="pack-title text-[8px] leading-tight text-center px-1 mt-1"
            dangerouslySetInnerHTML={{ __html: item.displayTitle }}
          ></span>
          <span className="pack-price text-[10px] font-bold text-center mt-0.5">{item.price}</span>
        </div>
      ))}
    </div>
  )
}
