import { Button } from "@/components/ui/button"

export function Community() {
  return (
    <section className="py-20 px-4 pixel-grid">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-press-start)] mb-8 gradient-text leading-relaxed">
          Share Your Score
        </h2>

        <p className="text-xl text-[#A0A0B0] mb-8">Share your high score. Beat your friends. Spread the pixels.</p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="pixel-button bg-[#5865F2] hover:bg-[#5865F2]/90 text-white text-lg px-8 py-4 font-bold hover:scale-110 transition-transform"
          >
            Discord
          </Button>
          <Button
            size="lg"
            className="pixel-button bg-black hover:bg-black/90 text-white text-lg px-8 py-4 font-bold hover:scale-110 transition-transform"
          >
            𝕏 (Twitter)
          </Button>
          <Button
            size="lg"
            className="pixel-button bg-gradient-to-r from-[#FF006E] to-[#00F5D4] hover:scale-110 text-white text-lg px-8 py-4 font-bold transition-transform"
          >
            TikTok
          </Button>
        </div>
      </div>
    </section>
  )
}
