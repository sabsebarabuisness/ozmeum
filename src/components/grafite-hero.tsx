import { ArrowRight, FileText, Sparkles, Users } from "lucide-react"

export function GrafiteHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.12),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(16,185,129,0.06),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.04),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-sm text-zinc-400 font-medium">Ozmeum Agentic Engine · Cloud State ON</span>
        </div>

        {/* H1 */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 text-balance leading-[1.1]">
          Ozmeum Doesn&apos;t Just &apos;See&apos; Video.
          <br />
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            It Parses Your Entire Project.
          </span>
        </h1>

        {/* H2 */}
        <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto mb-10 leading-relaxed text-pretty">
          The first Agentic Engine that indexes your files, understands context, and programmatically builds your
          timeline—keyframes, color, and effects included. Powered by a crash-proof Cloud State that saves every move,
          instantly.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button className="group relative px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-emerald-600/25 hover:shadow-emerald-500/40 hover:scale-[1.02]">
            <span className="relative z-10 flex items-center gap-2">
              Request Early Access
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button className="group flex items-center gap-2 px-8 py-4 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold rounded-lg transition-all duration-300 bg-zinc-900/50 backdrop-blur-sm hover:bg-zinc-800/50">
            <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
            Read the Manifesto
          </button>
        </div>

        {/* Social Proof */}
        <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-zinc-800/70 bg-zinc-900/40 backdrop-blur-sm">
          <Users className="w-4 h-4 text-emerald-400" />
          <span className="text-sm text-zinc-400">Join creators & developers building the future of video.</span>
        </div>

        {/* Tech strip */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-mono text-zinc-500">
          <span className="flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-emerald-400" /> Rust Backend
          </span>
          <span className="flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-blue-400" /> WGPU Graphics
          </span>
          <span className="flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-purple-400" /> Azure GPT-4o
          </span>
          <span className="flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-cyan-400" /> React Frontend
          </span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent" />
    </section>
  )
}

