"use server"

/**
 * Trivial server action that echoes success.
 * Replace the contents with real email-sending logic when you’re ready.
 */
export async function submitContactForm(formData: FormData) {
  // Here you could forward the data to an email service, database, etc.
  console.log("Contact form payload:", Object.fromEntries(formData))

  return {
    success: true,
    message: "Votre message a bien été envoyé !",
  }
}
