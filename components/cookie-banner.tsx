"use client"

import { Button } from "@/components/ui/button"

interface CookieBannerProps {
  onAccept: () => void
}

export function CookieBanner({ onAccept }: CookieBannerProps) {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 max-w-md mx-auto">
      <div className="bg-[#1A1A24] border-2 border-[#FF006E] rounded-lg p-6 neon-glow-pink">
        <p className="text-sm mb-4 text-white">We use cookies — the digital kind, not the snack 🍪.</p>
        <Button
          onClick={onAccept}
          className="pixel-button w-full bg-gradient-to-r from-[#FF006E] to-[#00F5D4] hover:scale-105 text-white font-bold animate-pulse"
        >
          🎮 Accept & Play
        </Button>
      </div>
    </div>
  )
}
