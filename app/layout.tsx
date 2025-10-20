import type React from "react"
import type { Metadata } from "next"
import { Press_Start_2P, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
})

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Krixel.fun - Play. Glow. Repeat.",
  description: "Fun, fast, and visually exciting casual gaming micro-world",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${pressStart.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
