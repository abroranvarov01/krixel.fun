import { Card } from "@/components/ui/card"

const players = [
  { name: "PixelMaster", score: 15420, streak: 42, level: 99, avatar: "👾" },
  { name: "NeonNinja", score: 12890, streak: 35, level: 87, avatar: "🎮" },
  { name: "GlowGamer", score: 11250, streak: 28, level: 76, avatar: "⚡" },
  { name: "RetroKing", score: 9870, streak: 21, level: 65, avatar: "👑" },
  { name: "ArcadeAce", score: 8540, streak: 18, level: 54, avatar: "🕹️" },
]

export function Leaderboard() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-press-start)] text-center mb-12 text-[#00F5D4] drop-shadow-[0_0_20px_#00F5D4] leading-relaxed">
          Leaderboard
        </h2>

        <Card className="bg-[#1A1A24] border-2 border-[#00F5D4] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#2A2A38]">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#00F5D4]">Rank</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#00F5D4]">Player</th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-[#00F5D4]">Score</th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-[#00F5D4]">Streak</th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-[#00F5D4]">Level</th>
                </tr>
              </thead>
              <tbody>
                {players.map((player, index) => (
                  <tr
                    key={player.name}
                    className={`border-t border-[#2A2A38] hover:bg-[#2A2A38]/50 transition-colors ${
                      index === 0
                        ? "neon-glow-yellow"
                        : index === 1
                          ? "neon-glow-aqua"
                          : index === 2
                            ? "neon-glow-pink"
                            : ""
                    }`}
                  >
                    <td className="px-6 py-4">
                      <span className="text-2xl">
                        {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : `#${index + 1}`}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{player.avatar}</span>
                        <span className="font-bold">{player.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-[#FFD166]">{player.score.toLocaleString()}</td>
                    <td className="px-6 py-4 text-right text-[#FF006E]">🔥 {player.streak}</td>
                    <td className="px-6 py-4 text-right text-[#00F5D4]">⭐ {player.level}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>
  )
}
