import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function JoinCrew() {
  return (
    <section className="py-20 px-4 pixel-grid">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-press-start)] text-center mb-12 gradient-text leading-relaxed">
          Join the Pixel Crew
        </h2>

        <Card className="bg-[#1A1A24] border-2 border-[#00F5D4] p-8 neon-glow-aqua relative overflow-hidden">
          {/* Particle effect background */}
          <div className="absolute inset-0 opacity-10">
            <div className="text-9xl font-[family-name:var(--font-press-start)] text-[#00F5D4] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              Krixel
            </div>
          </div>

          <div className="relative z-10 text-center">
            <p className="text-xl mb-8 text-[#A0A0B0]">Be part of the Krixel universe.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="pixel-button bg-[#5865F2] hover:bg-[#5865F2]/90 text-white text-lg px-8 py-6 font-bold"
              >
                Login with Discord
              </Button>
              <Button
                size="lg"
                className="pixel-button bg-white hover:bg-white/90 text-[#0E0E14] text-lg px-8 py-6 font-bold"
              >
                Login with Google
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
