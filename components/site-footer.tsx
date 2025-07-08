import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import FooterAnimatedSocialCard from "@/components/footer-animated-social-card" // Import the new component
import { PhoneIcon as Whatsapp } from "lucide-react" // Import WhatsApp icon

export default function SiteFooter() {
  return (
    <footer className="bg-card text-card-foreground py-12 md:py-16 border-t border-border">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
        {/* Logo and Socials */}
        <div className="flex flex-col items-start gap-6 col-span-1 md:col-span-1 lg:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <Image
              src="/mr-fast-ceramique-logo.png"
              alt="Mr Fast Céramique Logo"
              width={150}
              height={150}
              className="h-16 w-auto"
            />
            <span className="sr-only">Mr Fast Céramique</span>
          </Link>
          <FooterAnimatedSocialCard /> {/* Use the new component */}
        </div>

        {/* About Us */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <h3 className="text-lg font-semibold mb-4 text-foreground">À propos de nous</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Grâce à nos nombreuses années d&apos;expérience, nous excellons dans l&apos;art du detailing et vous
            proposons un service de qualité à des prix compétitifs. Offrez le meilleur à votre voiture !
          </p>
        </div>

        {/* Contact */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <h3 className="text-lg font-semibold mb-4 text-foreground">Contact</h3>
          <div className="text-muted-foreground text-sm space-y-2">
            <p>
              Téléphone:{" "}
              <Link href="tel:+33767518212" className="hover:text-primary transition-colors">
                07 67 51 82 12
              </Link>
            </p>
            <p>Adresse: Fresnes, 94260</p>
            <p>
              Email:{" "}
              <Link href="mailto:mr_fast_ceramique@outlook.com" className="hover:text-primary transition-colors">
                mr_fast_ceramique@outlook.com
              </Link>
            </p>
            {/* WhatsApp Link */}
            <p>
              WhatsApp:{" "}
              <Link
                href="https://wa.me/33767518212"
                className="hover:text-primary transition-colors flex items-center gap-1"
              >
                07 67 51 82 12 <Whatsapp className="h-4 w-4 inline-block" />
              </Link>
            </p>
          </div>
          <Button className="mt-4 bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
            Laisser un avis
          </Button>
        </div>

        {/* Horaire */}
        <div className="col-span-1 md:col-span-3 lg:col-span-1">
          <h3 className="text-lg font-semibold mb-4 text-foreground">Horaire</h3>
          <ul className="text-muted-foreground text-sm space-y-1">
            <li>Lundi: 10h - 18h</li>
            <li>Mardi: 10h - 18h</li>
            <li>Mercredi: 10h - 18h</li>
            <li>Jeudi: 10h - 18h</li>
            <li>Vendredi: 10h - 18h</li>
            <li>Samedi: 10h - 18h</li>
            <li>Dimanche: 10h - 18h</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-12 pt-8 border-t border-border text-center text-muted-foreground text-xs">
        <p>&copy; {new Date().getFullYear()} Mr Fast Céramique. Tous droits réservés.</p>
      </div>
    </footer>
  )
}
