"use client"

import Image from "next/image"

export default function AnimatedPackCarousel() {
  const prestations = [
    {
      title: "PACK 1: Polish Classique Correction",
      price: "À partir de 99€",
      image: "/pack1-new-car-polish.jpeg",
    },
    {
      title: "PACK 2: Décontamination Polish Classique",
      price: "À partir de 150€",
      image: "/pack2-new-car-detailing.jpeg",
    },
    {
      title: "PACK 3: Décontamination Polish Céramique Auto",
      price: "À partir de 250€",
      image: "/pack3-new-ceramic-car.jpeg",
    },
    {
      title: "Nettoyage Intérieur Complet 100% Vapeur",
      price: "99€",
      image: "/interior-steam-cleaning.png",
    },
  ]

  // Create an array of 10 items, cycling through the 4 prestations
  const carouselItems = Array.from({ length: 10 }, (_, i) => prestations[i % prestations.length])

  return (
    <div className="card-3d">
      {carouselItems.map((item, index) => (
        <div key={index}>
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            width={80} // Match div width
            height={70} // Reduced height to leave more space for text
            objectFit="cover"
            className="rounded-md"
          />
          {/* Further adjusted font size for better fit and alignment */}
          <span className="pack-title text-[7px] leading-tight text-center px-1">{item.title}</span>
          <span className="pack-price text-[9px] font-bold text-center">{item.price}</span>
        </div>
      ))}
    </div>
  )
}
