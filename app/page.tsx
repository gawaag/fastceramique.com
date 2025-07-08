import SiteHeader from "@/components/site-header"
import HeroSection from "@/components/hero-section"
import PrestationsSection from "@/components/prestations-section"
import SiteFooter from "@/components/site-footer"
import FadeIn from "@/components/fade-in" // Import FadeIn
import AnimatedViewsCard from "@/components/animated-views-card" // Import the new component

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <FadeIn>
          <HeroSection />
        </FadeIn>
        {/* PrestationsSection now handles its own staggered FadeIn for cards */}
        <PrestationsSection />
        <FadeIn delay={600}>
          {" "}
          {/* Add a slight delay for the new card */}
          <section className="py-12 md:py-24 lg:py-32 flex justify-center">
            <AnimatedViewsCard />
          </section>
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
