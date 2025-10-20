"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"

const facts = [
  { text: "Krixel players have clicked 1,000,000 times!", icon: "🖱️" },
  { text: "Most popular game: Pixel Dash 🚀", icon: "🚀" },
  { text: "Highest streak: 127 days! 🔥", icon: "🔥" },
  { text: "Total pixels collected: 5,000,000+ 💎", icon: "💎" },
]

export function FunFacts() {
  const [currentFact, setCurrentFact] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % facts.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-press-start)] text-center mb-12 text-[#FFD166] drop-shadow-[0_0_20px_#FFD166] leading-relaxed">
          Did You Know?
        </h2>

        <Card className="bg-[#1A1A24] border-2 border-[#FFD166] p-12 neon-glow-yellow">
          <div className="text-center">
            <div className="text-6xl mb-6 animate-bounce">{facts[currentFact].icon}</div>
            <p className="text-xl md:text-2xl text-white font-bold">{facts[currentFact].text}</p>
          </div>
        </Card>
      </div>
    </section>
  )
}
