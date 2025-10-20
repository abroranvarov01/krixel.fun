"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface PowerUpShopProps {
  pixelPoints: number
  onSpendPoints: (points: number) => void
}

const powerUps = [
  { name: "Extra Life", icon: "⭐", cost: 50, color: "#FFD166" },
  { name: "Speed Boost", icon: "⚡", cost: 75, color: "#00F5D4" },
  { name: "Confetti Mode", icon: "🎉", cost: 100, color: "#FF006E" },
]

export function PowerUpShop({ pixelPoints, onSpendPoints }: PowerUpShopProps) {
  const handlePurchase = (cost: number) => {
    if (pixelPoints >= cost) {
      onSpendPoints(cost)
    }
  }

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-press-start)] text-center mb-12 text-[#FF006E] drop-shadow-[0_0_20px_#FF006E] leading-relaxed">
          Power-Up Shop
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {powerUps.map((powerUp) => (
            <Card key={powerUp.name} className="bg-[#1A1A24] border-2 p-6" style={{ borderColor: powerUp.color }}>
              <div className="text-center">
                <div className="text-5xl mb-4">{powerUp.icon}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: powerUp.color }}>
                  {powerUp.name}
                </h3>
                <p className="text-2xl font-bold text-[#FFD166] mb-4">{powerUp.cost} Pixels</p>
                <Button
                  onClick={() => handlePurchase(powerUp.cost)}
                  disabled={pixelPoints < powerUp.cost}
                  className={`pixel-button w-full ${
                    pixelPoints >= powerUp.cost
                      ? "bg-gradient-to-r from-[#FF006E] to-[#00F5D4] hover:scale-105"
                      : "bg-[#2A2A38] text-[#A0A0B0] cursor-not-allowed"
                  }`}
                >
                  {pixelPoints >= powerUp.cost ? "Unlock →" : "Need More Pixels"}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
