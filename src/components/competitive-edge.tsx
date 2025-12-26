import { AlertTriangle, Zap, Globe, Brain } from "lucide-react"

export function CompetitiveEdge() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/50 to-zinc-950" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Grafite{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Wins</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            The competitive moat that makes Grafite unstoppable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Adobe Tiredness */}
          <div className="group relative bg-zinc-900/80 border border-zinc-800 rounded-xl p-8 hover:border-orange-500/30 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6">
                <AlertTriangle className="w-7 h-7 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Adobe Tiredness</h3>
              <p className="text-zinc-400 leading-relaxed">
                People are fed up with Adobe's slow performance and constant crashes. Grafite's Rust engine delivers the
                speed they've been waiting for.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm">
                <Zap className="w-4 h-4 text-orange-400" />
                <span className="text-orange-400 font-medium">10x faster than Premiere</span>
              </div>
            </div>
          </div>

          {/* AI Co-pilot */}
          <div className="group relative bg-zinc-900/80 border border-zinc-800 rounded-xl p-8 hover:border-purple-500/30 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                <Brain className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">First AI Co-pilot</h3>
              <p className="text-zinc-400 leading-relaxed">
                No video editor has a "Cursor-like" agent that manages files and layers on its own. Grafite is the first
                true AI-native NLE.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm">
                <span className="text-purple-400 font-medium">"The Cursor for Video"</span>
              </div>
            </div>
          </div>

          {/* Cross-Platform */}
          <div className="group relative bg-zinc-900/80 border border-zinc-800 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">True Cross-Platform</h3>
              <p className="text-zinc-400 leading-relaxed">
                Single codebase runs natively on Windows, Mac, and Linux. No Electron bloat, just pure Tauri performance
                everywhere.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm">
                <span className="text-blue-400 font-medium">Win • Mac • Linux</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
