import { Brain, Cpu, Monitor, ArrowRight, Sparkles } from "lucide-react"

const steps = [
  {
    id: 1,
    label: "User Prompt",
    desc: '"Add a smooth zoom to clip 3 and color grade it like a Fincher film."',
    icon: Sparkles,
    accent: "emerald",
  },
  {
    id: 2,
    label: "Azure GPT-4o",
    desc: "Parses intent, normalizes entities, emits a deterministic JSON command graph.",
    icon: Brain,
    accent: "purple",
  },
  {
    id: 3,
    label: "Rust Backend",
    desc: "Validates schema, compiles JSON into WGPU passes, streams buffers via zero-copy memory.",
    icon: Cpu,
    accent: "orange",
  },
  {
    id: 4,
    label: "WGPU Rendering",
    desc: "RTX GPUs execute the pipeline and present via the swapchain—frame rendered instantly.",
    icon: Monitor,
    accent: "blue",
  },
]

const accentMap = {
  emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/20", text: "text-emerald-400" },
  purple: { bg: "bg-purple-500/10", border: "border-purple-500/20", text: "text-purple-400" },
  orange: { bg: "bg-orange-500/10", border: "border-orange-500/20", text: "text-orange-400" },
  blue: { bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400" },
} as const

type Accent = keyof typeof accentMap

export function ArchitectureSection() {
  return (
    <section className="relative py-28 px-6 bg-zinc-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.06),transparent_55%)]" />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 mb-6">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">The Architecture</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            From Prompt to Pixel.{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              No Hallucinations.
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            We don't generate random frames. We execute precise editing commands on your real assets.
          </p>
        </div>

        {/* Flowchart */}
        <div className="relative flex flex-col gap-4">
          {steps.map((step, idx) => {
            const Icon = step.icon
            const colors = accentMap[step.accent as Accent]
            return (
              <div key={step.id} className="relative flex items-start gap-6">
                {/* Connector line */}
                {idx < steps.length - 1 && (
                  <div className="absolute left-6 top-14 w-px h-[calc(100%-1.5rem)] bg-gradient-to-b from-zinc-700 to-zinc-800" />
                )}
                {/* Icon */}
                <div className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                {/* Content */}
                <div className="flex-1 bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs font-mono uppercase tracking-widest ${colors.text}`}>Step {step.id}</span>
                    <ArrowRight className="w-3 h-3 text-zinc-600" />
                    <span className="text-sm font-semibold text-white">{step.label}</span>
                  </div>
                  <p className="text-sm text-zinc-400">{step.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-zinc-500 font-mono">
            Result: Deterministic, reproducible edits. Run the same prompt twice, get the same result.
          </p>
        </div>
      </div>
    </section>
  )
}
