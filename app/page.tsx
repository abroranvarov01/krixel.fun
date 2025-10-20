"use client"

import { useState, useEffect } from "react"
import { HeroSection } from "@/components/hero-section"
import { MiniGameFrame } from "@/components/mini-game-frame"
import { DailyChallenge } from "@/components/daily-challenge"
import { Leaderboard } from "@/components/leaderboard"
import { GameModes } from "@/components/game-modes"
import { PowerUpShop } from "@/components/power-up-shop"
import { JoinCrew } from "@/components/join-crew"
import { FunFacts } from "@/components/fun-facts"
import { Community } from "@/components/community"
import { CookieBanner } from "@/components/cookie-banner"
import { AnimatedBackground } from "@/components/animated-background"

export default function KrixelFun() {
  const [showCookieBanner, setShowCookieBanner] = useState(true)
  const [pixelPoints, setPixelPoints] = useState(0)

  // Cheat code detection
  useEffect(() => {
    const sequence = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Enter"]
    let current = 0

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === sequence[current]) {
        current++
        if (current === sequence.length) {
          document.body.style.filter = "hue-rotate(180deg)"
          setTimeout(() => {
            document.body.style.filter = "none"
          }, 3000)
          current = 0
        }
      } else {
        current = 0
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const addPixelPoints = (points: number) => {
    setPixelPoints((prev) => prev + points)
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />

      <div className="relative z-10">
        <HeroSection onAddPoints={addPixelPoints} />
        <MiniGameFrame onAddPoints={addPixelPoints} />
        <DailyChallenge onAddPoints={addPixelPoints} />
        <Leaderboard />
        <GameModes onAddPoints={addPixelPoints} />
        <PowerUpShop pixelPoints={pixelPoints} onSpendPoints={(points) => setPixelPoints((prev) => prev - points)} />
        <JoinCrew />
        <FunFacts />
        <Community />

        {/* Footer */}
        <footer className="pixel-grid border-t border-[#2A2A38] py-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-[#A0A0B0] mb-4">© 2025 Krixel.fun — Play. Glow. Repeat.</p>
            <div className="flex justify-center gap-6 text-xs text-[#A0A0B0]">
              <button className="hover:text-[#FF006E] transition-colors">Terms</button>
              <button className="hover:text-[#00F5D4] transition-colors">Privacy</button>
              <button className="hover:text-[#FFD166] transition-colors">Contact</button>
            </div>
          </div>
        </footer>
      </div>

      {showCookieBanner && <CookieBanner onAccept={() => setShowCookieBanner(false)} />}

      {/* Pixel Points Display */}
      <div className="fixed top-4 right-4 z-50 bg-[#1A1A24] border-2 border-[#FF006E] px-4 py-2 rounded-lg neon-glow-pink">
        <p className="text-sm font-bold text-[#FFD166]">⚡ {pixelPoints} Pixels</p>
      </div>
    </main>
  )
}
