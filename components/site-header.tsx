"use client"

import { Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "./mode-toggle"

export default function SiteHeader() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 border-b">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden bg-transparent">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/mr-fast-ceramique-logo.png"
              alt="Mr Fast Céramique Logo"
              width={100}
              height={100}
              className="h-8 w-auto"
            />
            <span className="sr-only">Mr Fast Céramique</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link href="/" className="flex w-full items-center py-2 text-lg font-semibold">
              Accueil
            </Link>
            <Link href="#prestations" className="flex w-full items-center py-2 text-lg font-semibold">
              Tarifs
            </Link>
            <Link href="#prestations" className="flex w-full items-center py-2 text-lg font-semibold">
              Prestations
            </Link>
            <Link href="/contact" className="flex w-full items-center py-2 text-lg font-semibold">
              Prise de RDV
            </Link>
            <Link href="/contact" className="flex w-full items-center py-2 text-lg font-semibold">
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <div className="w-[150px]">
        <Link href="/" className="mr-6 hidden lg:flex items-center gap-2">
          <Image
            src="/mr-fast-ceramique-logo.png"
            alt="Mr Fast Céramique Logo"
            width={100}
            height={100}
            className="h-10 w-auto"
          />
          <span className="sr-only">Mr Fast Céramique</span>
        </Link>
      </div>
      <nav className="hidden lg:flex w-full justify-center gap-6 text-lg font-medium">
        <Link href="/" className="text-muted-foreground transition-colors hover:text-foreground">
          Accueil
        </Link>
        <Link href="#prestations" className="text-muted-foreground transition-colors hover:text-foreground">
          Tarifs
        </Link>
        <Link href="#prestations" className="text-muted-foreground transition-colors hover:text-foreground">
          Prestations
        </Link>
        <Link href="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
          Prise de RDV
        </Link>
        <Link href="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
          Contact
        </Link>
      </nav>
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </header>
  )
}
