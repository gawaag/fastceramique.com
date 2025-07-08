import SiteHeader from "@/components/site-header"
import HeroSection from "@/components/hero-section"
import PrestationsSection from "@/components/prestations-section"
import SiteFooter from "@/components/site-footer"
import FadeIn from "@/components/fade-in" // Import FadeIn

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <FadeIn>
          <HeroSection />
        </FadeIn>
        <FadeIn delay={200}>
          {" "}
          {/* Add a slight delay for the next section */}
          <PrestationsSection />
        </FadeIn>
      </main>
      <FadeIn delay={400}>
        {" "}
        {/* Add a slight delay for the footer */}
        <SiteFooter />
      </FadeIn>
    </div>
  )
}
