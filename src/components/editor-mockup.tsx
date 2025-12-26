"use client"

import {
  Play,
  SkipBack,
  SkipForward,
  Volume2,
  Maximize2,
  Layers,
  Type,
  ImageIcon,
  Music,
  Sparkles,
  ChevronDown,
} from "lucide-react"

export function EditorMockup() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-blue-400 font-mono text-sm tracking-wider mb-3">INTERFACE PREVIEW</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">A Timeline That Thinks</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Experience a next-generation NLE where AI assistance is woven directly into your workflow.
          </p>
        </div>

        {/* Browser window frame */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm shadow-2xl shadow-black/50 overflow-hidden">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900 border-b border-zinc-800">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="px-4 py-1 rounded-md bg-zinc-800 text-zinc-400 text-xs font-mono">grafite.app/editor</div>
            </div>
            <div className="w-16" />
          </div>

          {/* Editor interface */}
          <div className="grid grid-cols-[1fr_280px] h-[520px]">
            {/* Main area */}
            <div className="flex flex-col">
              {/* Top toolbar */}
              <div className="flex items-center justify-between px-4 py-2 bg-zinc-900/50 border-b border-zinc-800/50">
                <div className="flex items-center gap-3">
                  <span className="text-white font-semibold text-sm">Grafite</span>
                  <div className="flex gap-1 text-xs text-zinc-500">
                    <span className="px-2 py-1 hover:bg-zinc-800 rounded cursor-pointer">File</span>
                    <span className="px-2 py-1 hover:bg-zinc-800 rounded cursor-pointer">Edit</span>
                    <span className="px-2 py-1 hover:bg-zinc-800 rounded cursor-pointer">View</span>
                    <span className="px-2 py-1 hover:bg-zinc-800 rounded cursor-pointer">Effects</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-zinc-500 font-mono">Project: Brand_Intro_v3</span>
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                </div>
              </div>

              {/* Program monitor */}
              <div className="flex-1 flex items-center justify-center bg-zinc-950 relative">
                <div className="w-[85%] aspect-video bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-lg border border-zinc-800 relative overflow-hidden">
                  {/* Video preview content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white mb-2 tracking-tight">
                        <span className="text-blue-400">GRAFITE</span> DEMO
                      </div>
                      <p className="text-zinc-500 text-sm">4K • 60fps • ProRes 422</p>
                    </div>
                  </div>
                  {/* Cinematic bars */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-black" />
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-black" />
                  {/* Program label */}
                  <div className="absolute top-10 left-3 px-2 py-0.5 bg-blue-500/20 border border-blue-500/30 rounded text-blue-400 text-xs font-mono">
                    PROGRAM
                  </div>
                  {/* Timecode */}
                  <div className="absolute bottom-10 right-3 text-zinc-400 text-xs font-mono">00:01:24:18</div>
                </div>

                {/* Transport controls */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1.5 bg-zinc-900/90 backdrop-blur-sm rounded-full border border-zinc-800">
                  <button className="p-1.5 text-zinc-400 hover:text-white transition-colors">
                    <SkipBack className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-400 transition-colors">
                    <Play className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 text-zinc-400 hover:text-white transition-colors">
                    <SkipForward className="w-4 h-4" />
                  </button>
                  <div className="w-px h-4 bg-zinc-700 mx-2" />
                  <button className="p-1.5 text-zinc-400 hover:text-white transition-colors">
                    <Volume2 className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 text-zinc-400 hover:text-white transition-colors">
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Timeline */}
              <div className="h-[180px] bg-zinc-900 border-t border-zinc-800">
                {/* Timeline header */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-800/50">
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-zinc-400 font-medium">Timeline</span>
                    <div className="flex items-center gap-1 text-xs text-zinc-500 font-mono">
                      <span>00:00</span>
                      <span className="text-zinc-700">|</span>
                      <span>00:30</span>
                      <span className="text-zinc-700">|</span>
                      <span>01:00</span>
                      <span className="text-zinc-700">|</span>
                      <span>01:30</span>
                      <span className="text-zinc-700">|</span>
                      <span>02:00</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-zinc-500">Snap</span>
                    <div className="w-8 h-4 bg-blue-500/20 rounded-full relative">
                      <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-blue-500 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Playhead */}
                <div
                  className="absolute left-[45%] top-0 bottom-0 w-px bg-blue-500 z-10"
                  style={{ height: "180px", marginTop: "-180px", position: "relative" }}
                >
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rotate-45" />
                </div>

                {/* Track rows */}
                <div className="flex flex-col">
                  {/* V2 Track */}
                  <div className="flex items-center h-10 border-b border-zinc-800/30">
                    <div className="w-16 px-2 flex items-center gap-1.5 border-r border-zinc-800/50 h-full bg-zinc-900">
                      <Type className="w-3 h-3 text-purple-400" />
                      <span className="text-xs text-zinc-400 font-mono">V2</span>
                    </div>
                    <div className="flex-1 px-2 py-1 relative">
                      <div className="absolute left-[20%] w-[35%] h-7 bg-purple-500/30 border border-purple-500/50 rounded flex items-center px-2 gap-1.5">
                        <Type className="w-3 h-3 text-purple-400" />
                        <span className="text-xs text-purple-300 truncate">Title_Intro.txt</span>
                      </div>
                    </div>
                  </div>

                  {/* V1 Track */}
                  <div className="flex items-center h-10 border-b border-zinc-800/30">
                    <div className="w-16 px-2 flex items-center gap-1.5 border-r border-zinc-800/50 h-full bg-zinc-900">
                      <ImageIcon className="w-3 h-3 text-blue-400" />
                      <span className="text-xs text-zinc-400 font-mono">V1</span>
                    </div>
                    <div className="flex-1 px-2 py-1 relative">
                      <div className="absolute left-[5%] w-[25%] h-7 bg-blue-500/30 border border-blue-500/50 rounded flex items-center px-2 gap-1.5">
                        <ImageIcon className="w-3 h-3 text-blue-400" />
                        <span className="text-xs text-blue-300 truncate">hero_shot.mp4</span>
                      </div>
                      <div className="absolute left-[32%] w-[45%] h-7 bg-cyan-500/30 border border-cyan-500/50 rounded flex items-center px-2 gap-1.5">
                        <Layers className="w-3 h-3 text-cyan-400" />
                        <span className="text-xs text-cyan-300 truncate">product_demo.mp4</span>
                      </div>
                      <div className="absolute left-[79%] w-[18%] h-7 bg-green-500/30 border border-green-500/50 rounded flex items-center px-2 gap-1.5">
                        <ImageIcon className="w-3 h-3 text-green-400" />
                        <span className="text-xs text-green-300 truncate">outro.mp4</span>
                      </div>
                    </div>
                  </div>

                  {/* A1 Track */}
                  <div className="flex items-center h-10 border-b border-zinc-800/30">
                    <div className="w-16 px-2 flex items-center gap-1.5 border-r border-zinc-800/50 h-full bg-zinc-900">
                      <Music className="w-3 h-3 text-orange-400" />
                      <span className="text-xs text-zinc-400 font-mono">A1</span>
                    </div>
                    <div className="flex-1 px-2 py-1 relative">
                      <div className="absolute left-[5%] w-[92%] h-7 bg-orange-500/20 border border-orange-500/40 rounded flex items-center px-2 gap-1.5 overflow-hidden">
                        <Music className="w-3 h-3 text-orange-400 shrink-0" />
                        <span className="text-xs text-orange-300 truncate">background_music.wav</span>
                        {/* Audio waveform visualization */}
                        <div className="flex items-center gap-px ml-auto opacity-50">
                          {[...Array(40)].map((_, i) => (
                            <div
                              key={i}
                              className="w-0.5 bg-orange-400 rounded-full"
                              style={{ height: `${Math.random() * 16 + 4}px` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* A2 Track */}
                  <div className="flex items-center h-10">
                    <div className="w-16 px-2 flex items-center gap-1.5 border-r border-zinc-800/50 h-full bg-zinc-900">
                      <Volume2 className="w-3 h-3 text-pink-400" />
                      <span className="text-xs text-zinc-400 font-mono">A2</span>
                    </div>
                    <div className="flex-1 px-2 py-1 relative">
                      <div className="absolute left-[15%] w-[20%] h-7 bg-pink-500/20 border border-pink-500/40 rounded flex items-center px-2 gap-1.5">
                        <Volume2 className="w-3 h-3 text-pink-400" />
                        <span className="text-xs text-pink-300 truncate">voiceover.mp3</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Inspector panel */}
            <div className="bg-zinc-900 border-l border-zinc-800 flex flex-col">
              <div className="px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
                <span className="text-sm font-medium text-white">Inspector</span>
                <ChevronDown className="w-4 h-4 text-zinc-500" />
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-5">
                {/* Selected clip info */}
                <div className="p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Layers className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-white font-medium">product_demo.mp4</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-zinc-500">Duration</span>
                      <p className="text-zinc-300 font-mono">00:00:45:12</p>
                    </div>
                    <div>
                      <span className="text-zinc-500">Resolution</span>
                      <p className="text-zinc-300 font-mono">3840×2160</p>
                    </div>
                  </div>
                </div>

                {/* Transform section */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Transform</span>
                    <button className="text-xs text-blue-400 hover:text-blue-300">Reset</button>
                  </div>
                  <div className="space-y-3">
                    {/* Position X */}
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-zinc-500">Position X</span>
                        <span className="text-zinc-300 font-mono">960</span>
                      </div>
                      <div className="h-1.5 bg-zinc-800 rounded-full">
                        <div className="h-full w-1/2 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" />
                      </div>
                    </div>
                    {/* Position Y */}
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-zinc-500">Position Y</span>
                        <span className="text-zinc-300 font-mono">540</span>
                      </div>
                      <div className="h-1.5 bg-zinc-800 rounded-full">
                        <div className="h-full w-1/2 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" />
                      </div>
                    </div>
                    {/* Scale */}
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-zinc-500">Scale</span>
                        <span className="text-zinc-300 font-mono">100%</span>
                      </div>
                      <div className="h-1.5 bg-zinc-800 rounded-full">
                        <div className="h-full w-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" />
                      </div>
                    </div>
                    {/* Rotation */}
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-zinc-500">Rotation</span>
                        <span className="text-zinc-300 font-mono">0°</span>
                      </div>
                      <div className="h-1.5 bg-zinc-800 rounded-full">
                        <div className="h-full w-1/2 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Opacity section */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Opacity</span>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-zinc-500">Level</span>
                      <span className="text-zinc-300 font-mono">100%</span>
                    </div>
                    <div className="h-1.5 bg-zinc-800 rounded-full">
                      <div className="h-full w-full bg-gradient-to-r from-zinc-500 to-zinc-400 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Effects section */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Active Effects</span>
                    <button className="text-xs text-blue-400 hover:text-blue-300">+ Add</button>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-zinc-800/50 rounded border border-zinc-700/50">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-purple-500" />
                        <span className="text-xs text-zinc-300">Color Grade</span>
                      </div>
                      <span className="text-xs text-zinc-500">ON</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-zinc-800/50 rounded border border-zinc-700/50">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        <span className="text-xs text-zinc-300">Cinematic Glow</span>
                      </div>
                      <span className="text-xs text-zinc-500">ON</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating AI chat bubble */}
        <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 z-20 animate-float">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl" />

            {/* Chat bubble */}
            <div className="relative bg-zinc-900/95 backdrop-blur-xl border border-zinc-700/80 rounded-2xl p-4 w-[320px] shadow-2xl shadow-blue-500/10">
              {/* Header */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-sm font-medium text-white">Grafite AI</span>
                <div className="ml-auto flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-green-400">Active</span>
                </div>
              </div>

              {/* Message */}
              <p className="text-sm text-zinc-300 mb-4 leading-relaxed">
                Applying cinematic glow and syncing text to audio beats...
              </p>

              {/* Progress bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-zinc-500">Processing</span>
                  <span className="text-blue-400 font-mono">67%</span>
                </div>
                <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-full animate-shimmer"
                    style={{ width: "67%", backgroundSize: "200% 100%" }}
                  />
                </div>
              </div>

              {/* Action hint */}
              <div className="mt-3 pt-3 border-t border-zinc-800 flex items-center justify-between">
                <span className="text-xs text-zinc-500">2 clips affected</span>
                <button className="text-xs text-blue-400 hover:text-blue-300 transition-colors">View Changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
