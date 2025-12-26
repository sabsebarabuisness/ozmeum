import type React from "react"
import {
  Activity,
  ArrowRight,
  Brain,
  CircuitBoard,
  FileCode2,
  Files,
  FolderOpen,
  Play,
  Sparkles,
} from "lucide-react"

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

        <div className="relative grid gap-6 lg:grid-cols-[1.05fr_1.2fr] items-start">
          {/* File tree analysis */}
          <div className="relative bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6 text-left shadow-2xl overflow-hidden">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-transparent pointer-events-none" />
            <div className="relative flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Brain className="w-5 h-5 text-emerald-400" />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-emerald-300/80">Project Graph</p>
                  <p className="text-sm text-zinc-400">AI is indexing your repo structure</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-emerald-300 font-mono bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                <Sparkles className="w-3 h-3" /> Live
              </div>
            </div>

            <div className="space-y-3">
              {fileTree.map((file) => (
                <div
                  key={file.path}
                  className="relative flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950/60 px-3 py-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                      {file.icon}
                    </div>
                    <div>
                      <p className="text-sm text-white font-medium">{file.path}</p>
                      <p className="text-xs text-zinc-500">{file.note}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-300">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    {file.status}
                  </div>
                  <div className="absolute inset-x-3 bottom-1 h-[2px] bg-zinc-800 rounded-full">
                    <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400" style={{ width: file.progress }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline injection mock */}
          <div className="relative bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 shadow-2xl overflow-hidden">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-transparent pointer-events-none" />
            <div className="relative flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <CircuitBoard className="w-5 h-5 text-cyan-400" />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/80">Timeline Injection</p>
                  <p className="text-sm text-zinc-400">Keyframes and effects applied programmatically</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-200 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30">
                <Activity className="w-3 h-3" /> Syncing
              </div>
            </div>

            <div className="relative rounded-xl border border-zinc-800 bg-zinc-950/60 p-5">
              <div className="flex items-center gap-3 text-xs text-zinc-500 font-mono mb-4">
                <Files className="w-4 h-4" />
                <span>/projects/ozmeum/edit-session-07</span>
              </div>

              <div className="space-y-4">
                {timelineTracks.map((track) => (
                  <div key={track.label} className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-zinc-400 font-medium">
                      <span className="flex items-center gap-2">
                        <span className={`h-2 w-2 rounded-full ${track.dot}`} />
                        {track.label}
                      </span>
                      <span className="text-[11px] text-zinc-500">{track.meta}</span>
                    </div>
                    <div className="relative h-14 rounded-lg border border-zinc-800 bg-gradient-to-r from-zinc-900/80 via-zinc-900/40 to-zinc-900/80 overflow-hidden">
                      <div className={`absolute inset-y-3 left-6 right-6 rounded-full ${track.line}`} />
                      <div className="absolute inset-0">
                        {track.nodes.map((node) => (
                          <div
                            key={node.id}
                            className="absolute -translate-x-1/2"
                            style={{ left: node.position }}
                          >
                            <div className={`w-1 h-6 rounded-full ${node.color} bg-opacity-80`} />
                            <div
                              className={`mt-1 h-2 w-6 rounded-full ${node.glow}`}
                              aria-hidden
                            />
                          </div>
                        ))}
                      </div>
                      <div className="absolute inset-x-4 bottom-2 flex items-center gap-2 text-[11px] text-zinc-500 font-mono">
                        <span className="px-2 py-0.5 rounded bg-zinc-900/60 border border-zinc-800">AI inject</span>
                        <span className="px-2 py-0.5 rounded bg-zinc-900/60 border border-zinc-800">Color pass</span>
                        <span className="px-2 py-0.5 rounded bg-zinc-900/60 border border-zinc-800">Keyframes</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-zinc-400">
                <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-3 py-2">
                  <FolderOpen className="w-4 h-4 text-emerald-400" />
                  <span>Context pinned: /src/lib/ai.ts · /public/grade.cube</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-3 py-2">
                  <FileCode2 className="w-4 h-4 text-cyan-400" />
                  <span>Node graph pushed to timeline in 1.2s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent" />
    </section>
  )
}

type FileNode = {
  path: string
  note: string
  status: string
  progress: string
  icon: React.ReactNode
}

const fileTree: FileNode[] = [
  {
    path: "src/app/page.tsx",
    note: "UI intents detected · hero + timeline",
    status: "parsed",
    progress: "86%",
    icon: <FileCode2 className="w-4 h-4 text-emerald-300" />,
  },
  {
    path: "src/lib/pipeline.ts",
    note: "extracting color + keyframe graph",
    status: "indexing",
    progress: "64%",
    icon: <CircuitBoard className="w-4 h-4 text-emerald-300" />,
  },
  {
    path: "/public/grade.cube",
    note: "tone map detected · caching",
    status: "synced",
    progress: "100%",
    icon: <Files className="w-4 h-4 text-emerald-300" />,
  },
]

type TimelineNode = {
  id: string
  position: string
  color: string
  glow: string
}

type TimelineTrack = {
  label: string
  meta: string
  line: string
  dot: string
  nodes: TimelineNode[]
}

const timelineTracks: TimelineTrack[] = [
  {
    label: "Keyframes · Motion Graph",
    meta: "6 injected · eased",
    line: "bg-gradient-to-r from-blue-500/30 via-cyan-400/40 to-blue-500/30",
    dot: "bg-blue-400",
    nodes: [
      { id: "kf-1", position: "18%", color: "bg-blue-400", glow: "bg-blue-400/20" },
      { id: "kf-2", position: "36%", color: "bg-cyan-400", glow: "bg-cyan-400/20" },
      { id: "kf-3", position: "52%", color: "bg-blue-400", glow: "bg-blue-400/20" },
      { id: "kf-4", position: "68%", color: "bg-cyan-400", glow: "bg-cyan-400/20" },
      { id: "kf-5", position: "82%", color: "bg-blue-400", glow: "bg-blue-400/20" },
    ],
  },
  {
    label: "Color · Film emulation",
    meta: "LUT + curves merged",
    line: "bg-gradient-to-r from-emerald-500/30 via-cyan-400/30 to-emerald-500/30",
    dot: "bg-emerald-400",
    nodes: [
      { id: "cc-1", position: "24%", color: "bg-emerald-400", glow: "bg-emerald-400/20" },
      { id: "cc-2", position: "58%", color: "bg-cyan-400", glow: "bg-cyan-400/20" },
      { id: "cc-3", position: "76%", color: "bg-emerald-400", glow: "bg-emerald-400/20" },
    ],
  },
  {
    label: "FX · Temporal blend",
    meta: "3 nodes · GPU safe",
    line: "bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-purple-500/30",
    dot: "bg-purple-400",
    nodes: [
      { id: "fx-1", position: "32%", color: "bg-purple-400", glow: "bg-purple-400/20" },
      { id: "fx-2", position: "61%", color: "bg-blue-400", glow: "bg-blue-400/20" },
      { id: "fx-3", position: "88%", color: "bg-purple-400", glow: "bg-purple-400/20" },
    ],
  },
]
