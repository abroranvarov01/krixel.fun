"use client"

import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  onAddPoints: (points: number) => void
}

export function HeroSection({ onAddPoints }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 inline-block">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-[family-name:var(--font-press-start)] mb-2 relative">
            <span className="text-[#FF006E] drop-shadow-[0_0_20px_#FF006E]">Kri</span>
            <span className="relative inline-block">
              <span className="text-[#00F5D4] drop-shadow-[0_0_20px_#00F5D4]">x</span>
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[#FFD166] text-2xl animate-bounce">
                ⚡
              </span>
            </span>
            <span className="text-[#FFD166] drop-shadow-[0_0_20px_#FFD166]">el</span>
            <span className="text-white">.fun</span>
          </h1>
        </div>

        <h2 className="text-2xl md:text-4xl font-[family-name:var(--font-press-start)] mb-6 leading-relaxed">
          <span className="gradient-text">Welcome to Krixel.fun</span>
        </h2>

        <p className="text-lg md:text-xl text-[#A0A0B0] mb-12 leading-relaxed max-w-2xl mx-auto">
          Play quick games. Collect pixels. Have fun.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="pixel-button bg-[#FF006E] hover:bg-[#FF006E]/90 text-white border-2 border-[#FF006E] text-lg px-8 py-6 font-bold"
            onClick={() => onAddPoints(10)}
          >
            🎮 Play Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="pixel-button bg-transparent hover:bg-[#00F5D4]/10 text-[#00F5D4] border-2 border-[#00F5D4] text-lg px-8 py-6 font-bold"
            onClick={() => onAddPoints(5)}
          >
            🏆 Leaderboard
          </Button>
        </div>

        {/* Floating pixel elements */}
        <div className="mt-16 flex justify-center gap-8">
          <div className="w-8 h-8 bg-[#FF006E] float neon-glow-pink" />
          <div className="w-8 h-8 bg-[#00F5D4] float neon-glow-aqua" style={{ animationDelay: "0.5s" }} />
          <div className="w-8 h-8 bg-[#FFD166] float neon-glow-yellow" style={{ animationDelay: "1s" }} />
        </div>
      </div>
    </section>
  )
}
