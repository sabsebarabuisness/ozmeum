import { FolderSearch, Spline, Volume2, ShieldCheck, ArrowRight } from "lucide-react"

const problems = [
  {
    id: "bin",
    oldWay: {
      title: "Manual Tagging",
      desc: "Hours spent dragging files into folders, renaming clips, and organizing bins by hand.",
    },
    ozmeumWay: {
      title: "Context-Aware Indexing",
      desc: "AI auto-sorts Drone, Interview, B-Roll, SFX—understands your footage before you do.",
    },
    icon: FolderSearch,
    accent: "emerald",
  },
  {
    id: "keyframe",
    oldWay: {
      title: "Fiddling with Bezier Curves",
      desc: "Pixel-pushing keyframes, adjusting easing handles, praying the motion feels right.",
    },
    ozmeumWay: {
      title: "Procedural Animation",
      desc: "Describe the motion. We calculate velocity curves, easing, and timing instantly.",
    },
    icon: Spline,
    accent: "blue",
  },
  {
    id: "audio",
    oldWay: {
      title: "Manual Ducking",
      desc: "Automating audio levels track by track, adjusting ducking for every scene manually.",
    },
    ozmeumWay: {
      title: "Semantic Audio Analysis",
      desc: "AI detects voice vs. music vs. SFX and auto-levels the mix. One command.",
    },
    icon: Volume2,
    accent: "purple",
  },
  {
    id: "stability",
    oldWay: {
      title: '"Premiere Pro has crashed"',
      desc: "Lost work. Corrupt autosaves. Starting over from scratch.",
    },
    ozmeumWay: {
      title: "State-Based Recovery",
      desc: "Your edit is a JSON state stored in the cloud. Zero data loss. Ever.",
    },
    icon: ShieldCheck,
    accent: "orange",
  },
]

const accentMap = {
  emerald: {
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    iconColor: "text-emerald-400",
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  blue: {
    iconBg: "bg-blue-500/10 border-blue-500/20",
    iconColor: "text-blue-400",
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  purple: {
    iconBg: "bg-purple-500/10 border-purple-500/20",
    iconColor: "text-purple-400",
    badge: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  },
  orange: {
    iconBg: "bg-orange-500/10 border-orange-500/20",
    iconColor: "text-orange-400",
    badge: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  },
} as const

type Accent = keyof typeof accentMap

export function ProblemSection() {
  return (
    <section className="relative py-28 px-6 bg-zinc-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.06),transparent_55%)]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 mb-6">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">The Grunt Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Grunt Work is Ours.{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              The Glory is Yours.
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            We handle the tedious labor so you can focus on storytelling.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid gap-6">
          {problems.map((item) => {
            const Icon = item.icon
            const colors = accentMap[item.accent as Accent]
            return (
              <div
                key={item.id}
                className="group grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-6 bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 md:p-8 hover:border-zinc-700 transition-all"
              >
                {/* Old Way */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <span className="text-red-400 font-mono text-lg font-bold">✗</span>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-red-400/80 mb-1 font-mono">Old Way</p>
                    <h4 className="text-lg font-semibold text-white mb-1">{item.oldWay.title}</h4>
                    <p className="text-sm text-zinc-500">{item.oldWay.desc}</p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden lg:flex items-center justify-center">
                  <div className={`p-3 rounded-full ${colors.iconBg} border`}>
                    <ArrowRight className={`w-5 h-5 ${colors.iconColor}`} />
                  </div>
                </div>

                {/* Ozmeum Way */}
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${colors.iconBg} border flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${colors.iconColor}`} />
                  </div>
                  <div>
                    <p className={`text-xs uppercase tracking-widest mb-1 font-mono ${colors.iconColor}`}>Ozmeum Way</p>
                    <h4 className="text-lg font-semibold text-white mb-1">{item.ozmeumWay.title}</h4>
                    <p className="text-sm text-zinc-400">{item.ozmeumWay.desc}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
