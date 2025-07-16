import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import FadeIn from "@/components/fade-in"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StarIcon } from "lucide-react"
import AnimatedMoreReviewsButton from "@/components/animated-more-reviews-button" // Import the new button

// Avis transcrits manuellement depuis les captures d'écran Google
// Triés du plus récent au plus ancien
const reviews = [
  {
    id: 9,
    author: "Viriato Medeiros",
    rating: 5,
    comment: "Je recommande vivement ! Prix imbattable et travail très soigneux ! Un grand merci ;)",
    date: "Visité en juin",
    timeAgo: "il y a 2 semaines",
    sortDate: new Date("2025-06-24"), // Approx. date for sorting
  },
  {
    id: 8,
    author: "Soso Sofiane",
    rating: 5,
    comment:
      "Super accueil et travail au top !!! Merci beaucoup j'ai fait une céramique pour ma classe A est le résultat est bluffant",
    date: "Visité en juin",
    timeAgo: "il y a 3 semaines",
    sortDate: new Date("2025-06-17"), // Approx. date for sorting
  },
  {
    id: 4,
    author: "Alexandre Othman",
    rating: 5,
    comment: "Excellente prise en charge, service qualitatif, audi a4 cabriolet noir comme sortie d'usine !",
    date: "Visité en mai",
    timeAgo: "il y a un mois",
    sortDate: new Date("2025-06-08"), // Approx. date for sorting
  },
  {
    id: 5,
    author: "Felipe Latinito",
    rating: 5,
    comment:
      "Très professionnel! Travail soigné et bons conseils. Nous verrons par la suite si le travail est bien fait sur mes autres véhicules.",
    date: "Visité en juin",
    timeAgo: "il y a un mois",
    sortDate: new Date("2025-06-08"), // Approx. date for sorting
  },
  {
    id: 6,
    author: "Adam Hacham",
    rating: 5,
    comment:
      "Service céramique polish de qualité exceptionnelle ! J'ai fait traiter ma voiture par Lumen Car et je suis vraiment satisfait du résultat. La brillance est incroyable et la protection est vraiment efficace. Le service est professionnel, rapide et soigné. Je recommande vivement ! 5/5 sans hésiter.",
    date: "Visité en février",
    timeAgo: "il y a 4 mois",
    sortDate: new Date("2025-03-08"), // Approx. date for sorting
  },
  {
    id: 7,
    author: "Aghiles Dahmam",
    rating: 5,
    comment:
      "Merci à Lumen Car pour le boulot incroyable, les micro rayures ont vraiment disparu. Un lavage extérieur digne d'une enseigne prestigieuse, un intérieur encore plus propre. Je suis bluffé par le résultat, ma voiture est comme neuve. Je recommande à 100% !",
    date: "Visité en janvier",
    timeAgo: "il y a 5 mois",
    sortDate: new Date("2025-02-08"), // Approx. date for sorting
  },
  {
    id: 1,
    author: "Faycal Faycal",
    rating: 5,
    comment:
      "C'est la deuxième fois que je confie mon véhicule à cet établissement, et je suis toujours aussi satisfait ! Le nettoyage intérieur et extérieur est impeccable, et le résultat du polish est bluffant. Mes véhicules avait de nombreuses micro-rayures et des défauts de peinture, mais après le traitement, ils sont comme neufs. Je recommande vivement Lumen Car pour leur professionnalisme et la qualité de leur travail.",
    date: "Visité en décembre 2024",
    timeAgo: "il y a 6 mois",
    sortDate: new Date("2025-01-08"), // Approx. date for sorting
  },
  {
    id: 2,
    author: "Youness Ba",
    rating: 5,
    comment:
      "Entreprise très professionnel. Beaucoup de sérieux. résultat très satisfaisant. La voiture a l'air de sortir de chez le concessionnaire. Les rayures ont disparues. Je recommande vivement",
    date: "Visité en décembre 2024",
    timeAgo: "il y a 6 mois",
    sortDate: new Date("2025-01-08"), // Approx. date for sorting
  },
  {
    id: 3,
    author: "Assia Bahzad",
    rating: 5,
    comment:
      "Merci infiniment pour votre prestation qui est au top. Je recommande vivement Lumen Car pour embellir votre véhicule, les micro rayures disparaissent vraiment, ils sont très professionnels, perfectionnistes, et à l'écoute de leurs clients. Le résultat est bluffant, ma voiture n'a jamais été aussi belle. Un grand merci à toute l'équipe !",
    date: "Visité en décembre 2024",
    timeAgo: "il y a 6 mois",
    sortDate: new Date("2025-01-08"), // Approx. date for sorting
  },
]

// Tri des avis par date (du plus récent au plus ancien) et limitation à 9
const sortedReviews = reviews.sort((a, b) => b.sortDate.getTime() - a.sortDate.getTime()).slice(0, 9)

// Fonction utilitaire pour obtenir l'initiale de l'auteur
const getInitials = (name: string) => {
  const parts = name.split(" ")
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase()
  return (parts[0].charAt(0) + parts[1].charAt(0)).toUpperCase()
}

export default function AvisPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white">
      <SiteHeader />
      <main className="flex-1 flex flex-col items-center p-4 md:p-8">
        <FadeIn>
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Avis Clients</h1>
          <p className="text-lg text-gray-300 mb-8 text-center max-w-2xl">
            Découvrez ce que nos clients pensent de nos services. Votre satisfaction est notre priorité !
          </p>
          <div className="mb-12 text-center">
            {/* Remplacement du lien simple par le nouveau bouton animé */}
            <AnimatedMoreReviewsButton />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
          {sortedReviews.map((review) => (
            <FadeIn key={review.id} delay={review.id * 100}>
              <Card className="bg-gray-800 text-white border-gray-700 h-full flex flex-col">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-lg font-bold">
                    {getInitials(review.author)}
                  </div>
                  <div className="flex-grow">
                    <CardTitle className="text-lg font-semibold">{review.author}</CardTitle>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? "text-yellow-400" : "text-gray-500"} fill-current`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-400">{review.timeAgo}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 pt-2">
                  <p className="text-gray-300 text-sm mb-2">{review.comment}</p>
                  <p className="text-xs text-gray-500">
                    {"Visité " + review.date.toLowerCase().replace("visité en ", "")}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </main>
      <FadeIn delay={sortedReviews.length * 100 + 400}>
        <SiteFooter />
      </FadeIn>
    </div>
  )
}
