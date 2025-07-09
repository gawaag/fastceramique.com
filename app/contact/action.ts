"use server"
import path from "path"

// Le chemin du fichier de soumissions n'est plus nécessaire pour cette version,
// mais est conservé pour référence si un stockage persistant était réintroduit.
const submissionsFilePath = path.join(process.cwd(), "data", "submissions.json")

/**
 * Server Action : reçoit (prevState, formData) quand elle est appelée via useActionState.
 * Cette action est maintenant simplifiée car la redirection vers Calendly se fait côté client.
 * Elle peut être utilisée pour une validation côté serveur si nécessaire, ou supprimée si non utilisée.
 */
export async function submitContactForm(_prevState: unknown, formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const service = formData.get("service") as string
  const price = formData.get("price") as string
  const date = formData.get("date") as string
  const time = formData.get("time") as string
  const message = formData.get("message") as string

  // Validation rapide (peut être étendue)
  if (!service) {
    return { success: false, message: "Veuillez sélectionner un pack/prestation." }
  }

  // Dans cette version, l'envoi d'e-mail et le stockage local sont supprimés.
  // Si vous souhaitez envoyer un e-mail de confirmation, intégrez un service d'envoi réel ici.
  console.log("----- SIMULATION EMAIL (désactivée pour cette version) -----")
  console.log("Pack sélectionné:", service)
  console.log("Prix estimé:", price)
  console.log("-------------------------------------------------")

  return {
    success: true,
    message: `Redirection vers Calendly pour le pack : ${service}`,
  }
}

// La fonction getSubmissions est supprimée car la page d'administration est retirée.
// export async function getSubmissions() { ... }
