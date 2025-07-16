"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { ModeToggle } from "./mode-toggle"
import Image from "next/image"
import { MenuIcon } from "lucide-react"

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center px-4 md:px-6">
        <Link className="mr-6 flex items-center" href="/">
          <Image src="/lumen-car-logo.png" alt="Lumen Car Logo" width={40} height={40} className="h-8 w-8" />
          <span className="ml-2 text-lg font-semibold">Lumen Car</span>
        </Link>
        <nav className="ml-auto hidden items-center space-x-4 md:flex">
          <Link className="font-medium hover:underline" href="/">
            Accueil
          </Link>
          <Link className="font-medium hover:underline" href="/#prestations">
            Prestations
          </Link>
          <Link className="font-medium hover:underline" href="/avis">
            Avis
          </Link>
          <Link className="font-medium hover:underline" href="/contact">
            Prise de RDV
          </Link>
          <ModeToggle />
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="ml-auto md:hidden bg-transparent" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-2 py-6">
              <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/">
                Accueil
              </Link>
              <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/#prestations">
                Prestations
              </Link>
              <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/avis">
                Avis
              </Link>
              <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/contact">
                Prise de RDV
              </Link>
              <div className="flex w-full items-center py-2 text-lg font-semibold">
                <ModeToggle />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
