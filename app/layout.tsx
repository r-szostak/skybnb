import Navbar from "@/components/navbar/Navbar"
import "./globals.css"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import RegisterModal from "@/components/modals/RegisterModal"
import ToasterProvider from "@/providers/ToasterProvider"

const nunito = Nunito({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Skybnb",
  description: "Looks like Airbnb ",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
