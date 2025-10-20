"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface MiniGameFrameProps {
  onAddPoints: (points: number) => void
}

export function MiniGameFrame({ onAddPoints }: MiniGameFrameProps) {
  const [score, setScore] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleTap = () => {
    const points = Math.floor(Math.random() * 10) + 1
    setScore((prev) => prev + points)
    onAddPoints(points)
  }

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-press-start)] text-center mb-12 gradient-text leading-relaxed">
          Quick Play
        </h2>

        <Card className="bg-[#1A1A24] border-2 border-[#00F5D4] p-8 neon-glow-aqua">
          <div className="text-center">
            <p className="text-xl mb-6 text-[#A0A0B0]">Tap. Jump. Win Pixels.</p>

            <div className="bg-[#0E0E14] border-2 border-[#2A2A38] rounded-lg p-12 mb-6 min-h-[300px] flex items-center justify-center relative overflow-hidden">
              <Button
                size="lg"
                onClick={handleTap}
                className="pixel-button bg-gradient-to-r from-[#FF006E] to-[#00F5D4] hover:scale-110 text-white text-2xl px-12 py-8 font-bold transition-transform"
              >
                TAP ME! 🎯
              </Button>
            </div>

            <div className="bg-[#FFD166] text-[#0E0E14] rounded-lg px-6 py-3 inline-block font-bold text-2xl pulse-glow">
              Score: {score}
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
