"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

const images = [
  "/showroom-images/car-blue-red-front.jpeg",
  "/showroom-images/car-white-side.jpeg",
  "/showroom-images/car-red-blue-front.jpeg",
  "/showroom-images/car-silver-top.jpeg",
]

export default function ShowroomCarousel() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className={cn("flex animate-marquee-slow", "min-w-full h-full", "absolute top-0 left-0")}>
        {/* Duplicate images to create a seamless loop */}
        {images.concat(images).map((src, index) => (
          <div key={index} className="flex-shrink-0 w-[300px] h-full relative mx-2">
            <Image
              src={src || "/placeholder.svg"}
              alt={`Showroom car ${index}`}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
