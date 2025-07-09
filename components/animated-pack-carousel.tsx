"use client"

import Image from "next/image"

export default function AnimatedPackCarousel() {
  const prestations = [
    {
      title: "PACK 1: Polish Classique Correction",
      displayTitle: "PACK 1:<br />Polish Classique<br />Correction",
      price: "À partir de 99€",
      image: "/pack1-new-car-polish.jpeg",
    },
    {
      title: "PACK 2: Décontamination Polish Classique",
      displayTitle: "PACK 2:<br />Décon-<br />tamination<br />Polish Classique",
      price: "À partir de 150€",
      image: "/pack2-new-car-detailing.jpeg",
    },
    {
      title: "PACK 3: Décontamination Polish Céramique Auto",
      displayTitle: "PACK 3:<br />Décon-<br />tamination<br />Polish Céramique<br />Auto",
      price: "À partir de 250€",
      image: "/pack3-new-ceramic-car.jpeg",
    },
    {
      title: "Nettoyage Intérieur Complet 100% Vapeur",
      displayTitle: "Nettoyage<br />Intérieur<br />Complet<br />100% Vapeur",
      price: "99€",
      image: "/interior-steam-cleaning.png",
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
