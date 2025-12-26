import type React from "react"
import { ArrowRight, Play, Sparkles } from "lucide-react"

export function GrafiteHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(59,130,246,0.08),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 w-full max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-sm text-zinc-400 font-medium">Ozmeum Agentic Engine · Cloud State ON</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 text-balance">
          Ozmeum Doesn&apos;t Just &apos;See&apos; Video. It Parses Your Entire Project Structure.
        </h1>
        <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto mb-8 leading-relaxed text-pretty">
          The first Agentic Engine that indexes your files, understands context, and programmatically builds your
          timeline—keyframes, color, and effects included. Powered by a crash-proof Cloud State that saves every move,
          instantly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button className="group relative px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-emerald-600/25 hover:shadow-emerald-500/40 hover:scale-105">
            <span className="relative z-10 flex items-center gap-2">
              Request Access
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </button>

          <button className="group flex items-center gap-2 px-8 py-4 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold rounded-lg transition-all duration-300 bg-zinc-900/50 backdrop-blur-sm hover:bg-zinc-800/50">
            <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
            Watch the Timeline Build
          </button>
        </div>

        <div className="relative max-w-3xl mx-auto text-center text-sm text-zinc-500 border border-zinc-800/70 bg-zinc-900/50 rounded-2xl px-4 py-3">
          <div className="flex items-center justify-center gap-2 text-emerald-300">
            <Sparkles className="w-4 h-4" />
            <span>Cloud State is live · timeline will build automatically as your repo updates.</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent" />
    </section>
  )
}

