"use server"

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

  return {
    success: true,
    message: "Votre message a bien été envoyé ! Nous reviendrons vers vous très vite.",
  }
}
