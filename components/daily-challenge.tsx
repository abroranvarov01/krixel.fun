"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface DailyChallengeProps {
  onAddPoints: (points: number) => void
}

export function DailyChallenge({ onAddPoints }: DailyChallengeProps) {
  const [claimed, setClaimed] = useState(false)

  const handleClaim = () => {
    if (!claimed) {
      onAddPoints(100)
      setClaimed(true)
    }
  }

  return (
    <section className="py-20 px-4 pixel-grid">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-press-start)] text-center mb-12 text-[#FFD166] drop-shadow-[0_0_20px_#FFD166] leading-relaxed">
          Daily Pixel Challenge
        </h2>

        <Card className="bg-[#1A1A24] border-2 border-[#FFD166] p-8 neon-glow-yellow">
          <div className="text-center">
            <p className="text-xl mb-8 text-[#A0A0B0]">Earn Bonus Pixels Every Day!</p>

            <div className="mb-8 inline-block">
              <div className="text-8xl animate-bounce">💎</div>
            </div>

            <Button
              size="lg"
              onClick={handleClaim}
              disabled={claimed}
              className={`pixel-button ${
                claimed
                  ? "bg-[#2A2A38] text-[#A0A0B0] cursor-not-allowed"
                  : "bg-[#FFD166] hover:bg-[#FFD166]/90 text-[#0E0E14]"
              } text-lg px-8 py-6 font-bold`}
            >
              {claimed ? "✓ Claimed Today" : "💎 Claim Reward"}
            </Button>

            {claimed && <p className="mt-4 text-[#00F5D4] font-bold">+100 Pixels! Come back tomorrow!</p>}
          </div>
        </Card>
      </div>
    </section>
  )
}
