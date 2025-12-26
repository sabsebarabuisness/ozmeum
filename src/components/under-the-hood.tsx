import { Brain, Cpu, Zap } from "lucide-react"

const steps = [
  {
    title: "Semantic Understanding",
    description:
      "Azure GPT-4o parses intent, normalizes entities, and emits a deterministic JSON command graph.",
    icon: Brain,
    accent: "purple",
    step: "01",
  },
  {
    title: "The Rust Engine",
    description:
      "The backend validates the schema, compiles JSON into WGPU passes, and streams buffers via zero-copy memory.",
    icon: Cpu,
    accent: "orange",
    step: "02",
  },
  {
    title: "Real-Time Inference",
    description:
      "NVIDIA RTX GPUs execute the pipeline and present via the swapchain to render the frame instantly.",
    icon: Zap,
    accent: "blue",
    step: "03",
  },
]

const accentClasses = {
  purple: {
    border: "border-purple-500/20",
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    glow: "from-purple-500/5",
  },
  orange: {
    border: "border-orange-500/20",
    bg: "bg-orange-500/10",
    text: "text-orange-400",
    glow: "from-orange-500/5",
  },
  blue: {
    border: "border-blue-500/20",
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    glow: "from-blue-500/5",
  },
} as const

export function UnderTheHood() {
  return (
    <section className="relative py-24 px-6 bg-zinc-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.06),transparent_55%)]" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 mb-6">
            <span className="text-xs font-mono text-zinc-400">UNDER THE HOOD</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Under the Hood</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            A three-stage pipeline that turns intent into pixels without wasted cycles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon
            const accents = accentClasses[step.accent]

            return (
              <div
                key={step.title}
                className={`group relative bg-zinc-900/80 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all duration-300`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${accents.glow} to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity`}
                />
                <div className="relative">
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-11 h-11 rounded-lg ${accents.bg} ${accents.border} border flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${accents.text}`} />
                    </div>
                    <span className="text-xs font-mono text-zinc-500">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
