import type React from "react"
import { Command, Sparkles, Play, Wand2, Layers, Zap, ArrowRight } from "lucide-react"

export function GrafiteHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-16">
      {/* Subtle blue radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(59,130,246,0.08),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]" />

      {/* Grid overlay for texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge - Added animation and improved styling */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-sm text-zinc-400 font-medium">Phase 1: High-Fidelity Mockup Complete</span>
          <ArrowRight className="w-3 h-3 text-zinc-500" />
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 text-balance">
          The Cursor for Video.
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            AI that Manipulates, Not Generates.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-6 leading-relaxed text-pretty">
          Creative Control is Human. Labor is AI. The world's first AI-Native, Agentic video editor that understands
          your timeline's neurons—Layers, Keyframes, and Effects—via natural language.
        </p>

        <p className="text-sm text-blue-400/80 font-mono mb-10">
          "Sora generates pixels. Grafite manipulates parameters."
        </p>

        {/* Buttons - Improved hover states and added icon */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:scale-105">
            <span className="relative z-10 flex items-center gap-2">
              Join the Waitlist
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </button>

          <button className="group flex items-center gap-2 px-8 py-4 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold rounded-lg transition-all duration-300 bg-zinc-900/50 backdrop-blur-sm hover:bg-zinc-800/50">
            <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
            Watch the Engine
          </button>
        </div>

        {/* Command Bar Mockup */}
        <div className="relative max-w-2xl mx-auto">
          {/* Glow effect behind command bar */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-blue-600/20 rounded-2xl blur-xl opacity-50" />

          <div className="relative bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 rounded-xl shadow-2xl overflow-hidden">
            {/* Command bar header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/50">
              <div className="flex items-center gap-2">
                <Command className="w-4 h-4 text-zinc-500" />
                <span className="text-sm text-zinc-500 font-medium">Grafite Command</span>
              </div>
              <kbd className="px-2 py-1 text-xs text-zinc-500 bg-zinc-800/50 rounded border border-zinc-700/50 font-mono">
                ⌘K
              </kbd>
            </div>

            {/* Search input */}
            <div className="px-4 py-3 border-b border-zinc-800/30">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-blue-400" />
                <span className="text-zinc-300 font-medium">Remove background from clip 3-7...</span>
                <span className="animate-pulse text-blue-400">|</span>
              </div>
            </div>

            {/* Command suggestions */}
            <div className="p-2 space-y-1">
              <CommandItem icon={<Wand2 className="w-4 h-4" />} label="Auto-enhance lighting" shortcut="⌘E" active />
              <CommandItem icon={<Layers className="w-4 h-4" />} label="Generate B-roll from script" shortcut="⌘G" />
              <CommandItem icon={<Zap className="w-4 h-4" />} label="Match cut to beat" shortcut="⌘M" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent" />
    </section>
  )
}

function CommandItem({
  icon,
  label,
  shortcut,
  active = false,
}: {
  icon: React.ReactNode
  label: string
  shortcut: string
  active?: boolean
}) {
  return (
    <div
      className={`flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors ${
        active ? "bg-blue-600/10 border border-blue-500/20" : "hover:bg-zinc-800/50"
      }`}
    >
      <div className="flex items-center gap-3">
        <span className={active ? "text-blue-400" : "text-zinc-500"}>{icon}</span>
        <span className={active ? "text-white font-medium" : "text-zinc-400"}>{label}</span>
      </div>
      <kbd className="px-2 py-0.5 text-xs text-zinc-500 bg-zinc-800/50 rounded border border-zinc-700/50 font-mono">
        {shortcut}
      </kbd>
    </div>
  )
}
