"use client"

import { Card } from "@/components/ui/card"

interface GameModesProps {
  onAddPoints: (points: number) => void
}

const games = [
  {
    title: "Pixel Dash",
    icon: "🚀",
    description: "Tap to jump",
    color: "#FF006E",
  },
  {
    title: "Brain Spark",
    icon: "🧩",
    description: "Memory challenge",
    color: "#00F5D4",
  },
  {
    title: "Color Swap",
    icon: "🪐",
    description: "Reflex test",
    color: "#FFD166",
  },
]

export function GameModes({ onAddPoints }: GameModesProps) {
  return (
    <section className="py-20 px-4 pixel-grid">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-press-start)] text-center mb-12 gradient-text leading-relaxed">
          Game Modes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {games.map((game) => (
            <Card
              key={game.title}
              className="bg-[#1A1A24] border-2 p-8 hover:scale-105 transition-transform cursor-pointer group"
              style={{ borderColor: game.color }}
              onClick={() => onAddPoints(5)}
            >
              <div className="text-center">
                <div className="text-6xl mb-4 group-hover:animate-bounce">{game.icon}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: game.color }}>
                  {game.title}
                </h3>
                <p className="text-[#A0A0B0]">{game.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
