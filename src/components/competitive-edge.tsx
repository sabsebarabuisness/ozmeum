import { Zap, Globe, Brain, MemoryStick, FileCode, Cpu } from "lucide-react"

export function CompetitiveEdge() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/50 to-zinc-950" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 mb-6">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">The Moat</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Built Different.{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Built in Rust.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            The technical moat that makes Ozmeum unstoppable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Zero-Copy Logic */}
          <div className="group relative bg-zinc-900/80 border border-zinc-800 rounded-xl p-8 hover:border-orange-500/30 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6">
                <MemoryStick className="w-7 h-7 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Zero-Copy Logic</h3>
              <p className="text-zinc-400 leading-relaxed">
                Video frames load directly to VRAM. No intermediate copies, no wasted bandwidth. Pure GPU throughput.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm">
                <Zap className="w-4 h-4 text-orange-400" />
                <span className="text-orange-400 font-medium">10x faster than Premiere</span>
              </div>
            </div>
          </div>

          {/* WGPU Graphics */}
          <div className="group relative bg-zinc-900/80 border border-zinc-800 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                <Cpu className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">WGPU Graphics</h3>
              <p className="text-zinc-400 leading-relaxed">
                Metal, Vulkan, DirectX 12 support via a single codebase. Native performance on every platform.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm">
                <span className="text-blue-400 font-medium">Win • Mac • Linux</span>
              </div>
            </div>
          </div>

          {/* OpenTimelineIO */}
          <div className="group relative bg-zinc-900/80 border border-zinc-800 rounded-xl p-8 hover:border-purple-500/30 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                <FileCode className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">OpenTimelineIO</h3>
              <p className="text-zinc-400 leading-relaxed">
                Export to Premiere or DaVinci seamlessly. Pixar's OTIO standard means your work is never locked in.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm">
                <span className="text-purple-400 font-medium">Premiere • DaVinci • FCP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
