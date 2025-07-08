"use client"

import { useState, useEffect } from "react"
import { getSubmissions } from "@/app/contact/action"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { format } from "date-fns"
import { fr } from "date-fns/locale"

const ADMIN_PASSWORD = "001002" // Client-side password for demonstration. NOT SECURE for production!

interface Submission {
  id: number
  name: string
  email: string
  service: string
  price: string
  date: string
  time: string
  message: string
  timestamp: string
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [passwordInput, setPasswordInput] = useState("")
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [error, setError] = useState<string | null>(null)

  const handleLogin = () => {
    if (passwordInput === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      setError(null)
    } else {
      setError("Code incorrect. Veuillez réessayer.")
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      const fetchSubmissions = async () => {
        try {
          const data = await getSubmissions()
          setSubmissions(data)
        } catch (err) {
          console.error("Failed to fetch submissions:", err)
          setError("Erreur lors du chargement des soumissions.")
        }
      }
      fetchSubmissions()
    }
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Accès Administrateur</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="password">Code d&apos;accès</Label>
              <Input
                id="password"
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleLogin()
                  }
                }}
              />
            </div>
            <Button onClick={handleLogin} className="w-full">
              Se connecter
            </Button>
            {error && <p className="text-center text-sm text-red-500">{error}</p>}
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Soumissions du Formulaire de Contact</h1>
        {error && <p className="text-center text-lg text-red-500 mb-4">{error}</p>}
        {submissions.length === 0 ? (
          <p className="text-muted-foreground text-lg text-center">Aucune soumission pour le moment.</p>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Nom</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead>Prix</TableHead>
                  <TableHead>Date RDV</TableHead>
                  <TableHead>Heure RDV</TableHead>
                  <TableHead>Message</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {submissions.map((submission) => (
                  <TableRow key={submission.id}>
                    <TableCell className="whitespace-nowrap">
                      {format(new Date(submission.timestamp), "dd/MM/yyyy HH:mm", { locale: fr })}
                    </TableCell>
                    <TableCell className="whitespace-nowrap">{submission.name}</TableCell>
                    <TableCell className="whitespace-nowrap">{submission.email}</TableCell>
                    <TableCell className="whitespace-nowrap">{submission.service}</TableCell>
                    <TableCell className="whitespace-nowrap">{submission.price}</TableCell>
                    <TableCell className="whitespace-nowrap">{submission.date || "N/A"}</TableCell>
                    <TableCell className="whitespace-nowrap">{submission.time || "N/A"}</TableCell>
                    <TableCell className="max-w-xs truncate">{submission.message}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  )
}
