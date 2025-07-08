"use server"

import { promises as fs } from "fs"
import path from "path"

const submissionsFilePath = path.join(process.cwd(), "data", "submissions.json")

/**
 * Server Action : reçoit (prevState, formData) quand elle est appelée via useActionState.
 * Intégrez un service d’envoi réel (Resend, SendGrid…) à la place du console.log si besoin.
 */
export async function submitContactForm(_prevState: unknown, formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const service = formData.get("service") as string
  const price = formData.get("price") as string
  const date = formData.get("date") as string
  const time = formData.get("time") as string
  const message = formData.get("message") as string

  // Validation rapide
  if (!name || !email || !service || !message) {
    return { success: false, message: "Veuillez remplir tous les champs obligatoires." }
  }

  // Simulation d’envoi d’e-mail
  const emailSubject = `Nouvelle demande : ${service} – ${name}`
  const emailBody = `
Nom        : ${name}
Email      : ${email}
Pack       : ${service}
Prix estimé: ${price}
Date/Heure : ${date || "N/A"} ${time || ""}
Message    :
${message}
  `

  console.log("----- SIMULATION EMAIL -----")
  console.log("To     : mr_fast_ceramique@outlook.com")
  console.log("Subject:", emailSubject)
  console.log(emailBody)
  console.log("----------------------------")

  // Enregistrement de la soumission dans le fichier JSON
  try {
    let submissions = []
    try {
      const data = await fs.readFile(submissionsFilePath, "utf8")
      submissions = JSON.parse(data)
    } catch (readError: any) {
      if (readError.code === "ENOENT") {
        // File does not exist, start with an empty array
        console.log("submissions.json not found, creating new file.")
      } else {
        throw readError // Re-throw other errors
      }
    }

    const newSubmission = {
      id: Date.now(), // Simple unique ID
      name,
      email,
      service,
      price,
      date,
      time,
      message,
      timestamp: new Date().toISOString(),
    }
    submissions.push(newSubmission)

    await fs.writeFile(submissionsFilePath, JSON.stringify(submissions, null, 2), "utf8")
    console.log("Submission saved to submissions.json")
  } catch (error) {
    console.error("Failed to save submission:", error)
    return { success: false, message: "Erreur lors de l'enregistrement de votre message." }
  }

  return {
    success: true,
    message: `Votre message a bien été envoyé ! Nous reviendrons vers vous très vite. Récapitulatif :
      Pack/Prestation: ${service} (${price})
      Date: ${date} à ${time}
      Message: "${message.substring(0, 50)}..."`, // Show a snippet of the message
  }
}

// Server action to get all submissions (for the admin page)
export async function getSubmissions() {
  try {
    const data = await fs.readFile(submissionsFilePath, "utf8")
    return JSON.parse(data)
  } catch (error: any) {
    if (error.code === "ENOENT") {
      return [] // Return empty array if file doesn't exist
    }
    console.error("Failed to read submissions:", error)
    return []
  }
}
