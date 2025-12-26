import { CheckCircle2, Circle, ArrowRight, Sparkles, Database, Monitor, Brain, Cloud } from "lucide-react"

export function RoadmapSection() {
  const phases = [
    {
      phase: "Phase 1",
      title: "The Shell",
      description: "Complete high-fidelity mockup with resizable panels, premium icons, and professional layout.",
      status: "complete",
      icon: <Monitor className="w-5 h-5" />,
      color: "green",
    },
    {
      phase: "Phase 2",
      title: "The State",
      description: "Connect UI to Rust's AppState. Moving sliders changes actual backend data in real-time.",
      status: "current",
      icon: <Database className="w-5 h-5" />,
      color: "blue",
    },
    {
      phase: "Phase 3",
      title: "The Render Engine",
      description: "Activate WGPU to display real images and videos on the canvas with GPU acceleration.",
      status: "upcoming",
      icon: <Sparkles className="w-5 h-5" />,
      color: "zinc",
    },
    {
      phase: "Phase 4",
      title: "Agentic Brain",
      description: "Activate the Neuron Bar. AI automatically sets layers and keyframes on your timeline.",
      status: "upcoming",
      icon: <Brain className="w-5 h-5" />,
      color: "zinc",
    },
    {
      phase: "Phase 5",
      title: "Cloud & Export",
      description: "Cloud rendering pipeline and MP4 export. Azure/AWS GPU offloading for heavy tasks.",
      status: "upcoming",
      icon: <Cloud className="w-5 h-5" />,
      color: "zinc",
    },
  ]

  return (
    <section className="relative py-24 px-6 bg-zinc-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.05),transparent_50%)]" />

      <div className="relative max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 mb-6">
            <ArrowRight className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-mono text-zinc-400">DEVELOPMENT ROADMAP</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Building in{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Public</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Our transparent development journey from mockup to production-ready AI video editor.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-green-500 via-blue-500 to-zinc-700" />

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div key={index} className="relative flex gap-6">
                {/* Status indicator */}
                <div className="relative z-10 flex-shrink-0">
                  {phase.status === "complete" ? (
                    <div className="w-16 h-16 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-green-400" />
                    </div>
                  ) : phase.status === "current" ? (
                    <div className="w-16 h-16 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center animate-pulse">
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-white" />
                      </div>
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center">
                      <Circle className="w-6 h-6 text-zinc-600" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div
                  className={`flex-1 p-6 rounded-xl border transition-all ${
                    phase.status === "complete"
                      ? "bg-green-500/5 border-green-500/20"
                      : phase.status === "current"
                        ? "bg-blue-500/5 border-blue-500/20"
                        : "bg-zinc-900/50 border-zinc-800"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`text-xs font-mono ${
                        phase.status === "complete"
                          ? "text-green-400"
                          : phase.status === "current"
                            ? "text-blue-400"
                            : "text-zinc-500"
                      }`}
                    >
                      {phase.phase}
                    </span>
                    {phase.status === "current" && (
                      <span className="px-2 py-0.5 text-xs font-mono bg-blue-500/20 text-blue-400 rounded">
                        IN PROGRESS
                      </span>
                    )}
                    {phase.status === "complete" && (
                      <span className="px-2 py-0.5 text-xs font-mono bg-green-500/20 text-green-400 rounded">DONE</span>
                    )}
                  </div>
                  <h3
                    className={`text-xl font-semibold mb-2 ${
                      phase.status === "upcoming" ? "text-zinc-400" : "text-white"
                    }`}
                  >
                    {phase.title}
                  </h3>
                  <p className={phase.status === "upcoming" ? "text-zinc-500" : "text-zinc-400"}>{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
