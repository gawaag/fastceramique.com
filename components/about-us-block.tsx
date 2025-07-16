import { Card, CardContent } from "@/components/ui/card"
import FadeIn from "@/components/fade-in"

export default function AboutUsBlock() {
  return (
    <FadeIn delay={600}>
      {" "}
      {/* Add a delay to appear after the cards */}
      <Card className="w-full max-w-4xl mx-auto mt-10 p-6 bg-card text-card-foreground shadow-lg rounded-lg">
        <CardContent className="text-center space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Notre Engagement : L'Excellence du Detailing
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Forts de nos nombreuses années d&apos;expérience et d&apos;une passion inébranlable pour l&apos;automobile,
            nous excellons dans l&apos;art minutieux du detailing. Chez Lumen Car, chaque installation est réalisée avec
            le plus grand soin, garantissant une qualité de service irréprochable à des prix toujours compétitifs. Nous
            nous engageons à sublimer votre voiture, lui offrant une protection durable et une brillance éclatante.
            Faites confiance à notre expertise pour révéler le meilleur de votre véhicule.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed font-semibold">
            Lumen Car est fier de vous servir depuis plus de 5 ans, transformant chaque véhicule avec passion et
            expertise.
          </p>
        </CardContent>
      </Card>
    </FadeIn>
  )
}
