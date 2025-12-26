import { Brain, Target, FileCode2, Cloud, Sparkles, Eye } from "lucide-react"

export function BentoFeatures() {
  return (
    <section className="relative py-24 px-4">
      {/* Section header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Features That Set Us Apart</h2>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
          Unlike Sora or Runway that generate random pixels, Ozmeum edits your actual assets with 100% consistency.
        </p>
      </div>

      {/* Bento Grid - Now 6 cards based on report */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Card 1: The Neuron Bar */}
        <div className="group relative bg-zinc-900 border border-zinc-800 rounded-xl p-8 overflow-hidden transition-all duration-300 hover:border-zinc-700 md:col-span-2 lg:col-span-1">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative mb-6">
            <div className="w-16 h-16 rounded-xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-blue-400" />
            </div>
            <kbd className="absolute top-0 right-0 px-2 py-1 text-xs text-zinc-400 bg-zinc-800/80 rounded border border-zinc-700/50 font-mono">
              Cmd+K
            </kbd>
          </div>

          <h3 className="text-xl font-semibold text-white mb-3">The Neuron Bar</h3>
          <p className="text-zinc-400 leading-relaxed">
            Central chat interface where you command like a director. "Add a glitch transition at 0.5s and zoom the
            text." Direct your timeline, don't edit frame-by-frame.
          </p>
        </div>

        {/* Card 2: Deep Context Awareness */}
        <div className="group relative bg-zinc-900 border border-zinc-800 rounded-xl p-8 overflow-hidden transition-all duration-300 hover:border-zinc-700">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative mb-6">
            <div className="w-16 h-16 rounded-xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center">
              <Eye className="w-8 h-8 text-purple-400" />
            </div>
          </div>

          <h3 className="text-xl font-semibold text-white mb-3">Deep Context Awareness</h3>
          <p className="text-zinc-400 leading-relaxed">
            AI knows Layer 1's relationship with Layer 5. It sees the entire timeline at once—understanding context, not
            just commands.
          </p>
        </div>

        {/* Card 3: Parametric AI Editing */}
        <div className="group relative bg-zinc-900 border border-zinc-800 rounded-xl p-8 overflow-hidden transition-all duration-300 hover:border-zinc-700">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative mb-6">
            <div className="w-16 h-16 rounded-xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center">
              <Target className="w-8 h-8 text-blue-400" />
            </div>
          </div>

          <h3 className="text-xl font-semibold text-white mb-3">Parametric AI Editing</h3>
          <p className="text-zinc-400 leading-relaxed">
            No random video generation. Edits real properties—Position, Scale, Blur Radius. 100% brand consistency,
            every single time.
          </p>

          <div className="mt-6 flex items-center gap-2">
            <span className="text-xs text-zinc-500 font-mono">CONSISTENCY</span>
            <div className="flex-1 h-1 bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full w-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
            </div>
            <span className="text-xs text-blue-400 font-mono">100%</span>
          </div>
        </div>

        {/* Card 4: Smart Inspector */}
        <div className="group relative bg-zinc-900 border border-zinc-800 rounded-xl p-8 overflow-hidden transition-all duration-300 hover:border-zinc-700">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative mb-6">
            <div className="w-16 h-16 rounded-xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center">
              <Brain className="w-8 h-8 text-cyan-400" />
            </div>
          </div>

          <h3 className="text-xl font-semibold text-white mb-3">Smart Inspector</h3>
          <p className="text-zinc-400 leading-relaxed">
            Context-Aware property panel that adapts to your selection. Select a text layer? Typography controls appear.
            Select video? Color grading shows up.
          </p>
        </div>

        {/* Card 5: OTIO Backbone */}
        <div className="group relative bg-zinc-900 border border-zinc-800 rounded-xl p-8 overflow-hidden transition-all duration-300 hover:border-zinc-700">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative mb-6">
            <div className="w-16 h-16 rounded-xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center">
              <FileCode2 className="w-8 h-8 text-blue-400" />
            </div>
            <span className="absolute top-0 right-0 px-2 py-1 text-xs text-orange-400 bg-orange-500/10 rounded border border-orange-500/20 font-mono">
              Pixar Standard
            </span>
          </div>

          <h3 className="text-xl font-semibold text-white mb-3">OTIO Backbone</h3>
          <p className="text-zinc-400 leading-relaxed">
            Uses Pixar's OpenTimelineIO standard. Start editing here, finish in Adobe Premiere or DaVinci Resolve
            seamlessly.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <div className="px-3 py-1.5 bg-zinc-800/50 border border-zinc-700/50 rounded-md">
              <span className="text-xs text-zinc-400 font-medium">Premiere</span>
            </div>
            <div className="px-3 py-1.5 bg-zinc-800/50 border border-zinc-700/50 rounded-md">
              <span className="text-xs text-zinc-400 font-medium">DaVinci</span>
            </div>
            <div className="px-3 py-1.5 bg-zinc-800/50 border border-zinc-700/50 rounded-md">
              <span className="text-xs text-zinc-400 font-medium">FCP</span>
            </div>
          </div>
        </div>

        {/* Card 6: Thin Client Strategy */}
        <div className="group relative bg-zinc-900 border border-zinc-800 rounded-xl p-8 overflow-hidden transition-all duration-300 hover:border-zinc-700">
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 via-transparent to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative mb-6">
            <div className="w-16 h-16 rounded-xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center">
              <Cloud className="w-8 h-8 text-green-400" />
            </div>
          </div>

          <h3 className="text-xl font-semibold text-white mb-3">Thin Client, Heavy Muscle</h3>
          <p className="text-zinc-400 leading-relaxed">
            Heavy lifting (4K rendering, AI processing) on Azure/AWS cloud GPUs. Your 4GB RAM machine stays lag-free
            with Zero-Copy GPU logic.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div>
              <div className="text-2xl font-bold text-white">8K</div>
              <div className="text-xs text-zinc-500">Cloud Render</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">4GB</div>
              <div className="text-xs text-zinc-500">Local RAM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
