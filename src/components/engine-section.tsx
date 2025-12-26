import { Cpu, Monitor, Layers, Zap, Shield, Check, Box, Brain } from "lucide-react"

export function EngineSection() {
  return (
    <section className="relative py-24 px-6 bg-zinc-950 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.05),transparent_50%)]" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 mb-6">
            <Cpu className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-mono text-zinc-400">A-Z TECH STACK</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Built Different.{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Built in Rust.
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            React + Tailwind frontend. Rust + Tauri backend. Azure GPT-4o brain. Zero legacy code.
          </p>
        </div>

        {/* Technical dashboard grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          {/* Rust + Tauri Card */}
          <div className="group relative bg-zinc-900/80 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Rust + Tauri Backend</h3>
                    <p className="text-xs font-mono text-zinc-500">MEMORY SAFE ENGINE</p>
                  </div>
                </div>
                <div className="px-2 py-1 rounded bg-orange-500/10 border border-orange-500/20">
                  <span className="text-xs font-mono text-orange-400">BRAIN</span>
                </div>
              </div>
              <p className="text-zinc-400 text-sm mb-4">
                High-performance, secure, and lightweight. 10x faster than legacy C++ suites with zero garbage
                collection pauses. Uses less memory than competition—no crashes on 4GB RAM.
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-zinc-800">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-orange-400" />
                  <span className="text-sm font-mono text-zinc-300">10x</span>
                  <span className="text-xs text-zinc-500">faster</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-xs text-zinc-500">Zero-cost abstractions</span>
                </div>
              </div>
            </div>
          </div>

          {/* React + Tailwind Card */}
          <div className="group relative bg-zinc-900/80 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 border border-cyan-500/20 flex items-center justify-center">
                    <Box className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">React + Tailwind Frontend</h3>
                    <p className="text-xs font-mono text-zinc-500">VERCEL/ZINC AESTHETIC</p>
                  </div>
                </div>
                <div className="px-2 py-1 rounded bg-cyan-500/10 border border-cyan-500/20">
                  <span className="text-xs font-mono text-cyan-400">FACE</span>
                </div>
              </div>
              <p className="text-zinc-400 text-sm mb-4">
                Premium, modern look with React-Resizable-Panels for professional docking experience. Every interaction
                feels snappy and responsive.
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-zinc-800">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs text-zinc-500">Resizable Panels</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs text-zinc-500">Pro Docking</span>
                </div>
              </div>
            </div>
          </div>

          {/* WGPU Card */}
          <div className="group relative bg-zinc-900/80 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/20 flex items-center justify-center">
                    <Monitor className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">WGPU Graphics API</h3>
                    <p className="text-xs font-mono text-zinc-500">WEBGPU NATIVE</p>
                  </div>
                </div>
              </div>
              <p className="text-zinc-400 text-sm mb-4">
                Direct GPU rendering via DirectX 12, Metal, and Vulkan. Real-time preview on your GTX 1650. Video frames
                load directly to VRAM with Zero-Copy logic.
              </p>
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-zinc-800">
                <div className="flex items-center justify-center gap-1.5 px-2 py-1.5 rounded bg-zinc-800/50 border border-zinc-700/50">
                  <span className="text-xs font-mono text-zinc-300">Metal</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 px-2 py-1.5 rounded bg-zinc-800/50 border border-zinc-700/50">
                  <span className="text-xs font-mono text-zinc-300">Vulkan</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 px-2 py-1.5 rounded bg-zinc-800/50 border border-zinc-700/50">
                  <span className="text-xs font-mono text-zinc-300">DX12</span>
                </div>
              </div>
            </div>
          </div>

          {/* AI Brain Card */}
          <div className="group relative bg-zinc-900/80 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/20 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Azure GPT-4o Brain</h3>
                    <p className="text-xs font-mono text-zinc-500">LITELLM GATEWAY</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 rounded bg-purple-500/10 border border-purple-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-mono text-purple-400">AI</span>
                </div>
              </div>
              <p className="text-zinc-400 text-sm mb-4">
                Natural language to JSON commands. AI understands your prompt, breaks it into technical tasks, and calls
                the Command Pattern (AddEffectCommand, SetKeyframeCommand).
              </p>
              <div className="flex items-center gap-2 pt-4 border-t border-zinc-800">
                <span className="text-xs text-zinc-500">Flow:</span>
                <span className="text-xs font-mono text-purple-400">Prompt → Analysis → Command → Render</span>
              </div>
            </div>
          </div>

          {/* Bevy ECS Card - Full width */}
          <div className="group relative bg-zinc-900/80 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all duration-300 lg:col-span-2">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/20 flex items-center justify-center">
                    <Layers className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Bevy ECS State Management</h3>
                    <p className="text-xs font-mono text-zinc-500">ENTITY COMPONENT SYSTEM</p>
                  </div>
                </div>
              </div>
              <p className="text-zinc-400 text-sm mb-4">
                Handles thousands of clips and keyframes without lag. Cache-friendly, parallelizable across 16 threads,
                infinitely scalable. No frame drops, ever.
              </p>
              <div className="flex items-center gap-6 pt-4 border-t border-zinc-800">
                <div className="flex-1 bg-zinc-800/50 rounded-lg p-3">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-mono font-bold text-white">1M+</span>
                    <span className="text-xs text-zinc-500">keyframes</span>
                  </div>
                </div>
                <div className="flex-1 bg-zinc-800/50 rounded-lg p-3">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-mono font-bold text-white">16</span>
                    <span className="text-xs text-zinc-500">parallel threads</span>
                  </div>
                </div>
                <div className="flex-1 bg-zinc-800/50 rounded-lg p-3">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-mono font-bold text-white">0</span>
                    <span className="text-xs text-zinc-500">frame drops</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NVIDIA Inception Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#76B900]/20 to-[#76B900]/5 border border-[#76B900]/30 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#76B900]" fill="currentColor">
                  <path d="M8.948 8.798v-1.43a6.7 6.7 0 0 1 .424-.018c3.922-.124 6.493 3.374 6.493 3.374s-2.774 3.851-5.75 3.851c-.422 0-.822-.068-1.167-.181v-4.563c1.56.194 1.876.932 2.809 2.238l2.083-1.771s-1.575-1.837-4.007-1.837a6.579 6.579 0 0 0-.885.057zm0-5.927V1.142l.424-.013c6.126-.183 10.167 4.985 10.167 4.985s-4.647 5.543-9.109 5.543a6.947 6.947 0 0 1-1.482-.158V8.798a5.975 5.975 0 0 0 1.167.115c2.976 0 5.75-3.851 5.75-3.851s-2.571-3.498-6.493-3.374a6.192 6.192 0 0 0-.424.017zM5.313 15.317V3.377l1.634 1.258v8.964a4.36 4.36 0 0 1-1.634 1.718zm3.635-1.932v-2.188a7.36 7.36 0 0 0 1.167.094c2.182 0 3.967-1.156 5.536-2.543.104.087.517.424.603.497-1.973 2.034-4.326 3.143-6.139 3.143a7.058 7.058 0 0 1-1.167-.097v1.094zM5.313 20.5v-3.112a6.12 6.12 0 0 0 3.635-1.213v2.017c-1.003.655-2.195 1.449-3.635 2.308z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Ready for NVIDIA Inception</p>
                <p className="text-xs font-mono text-zinc-500">GPU-ACCELERATED PIPELINE</p>
              </div>
            </div>
            <div className="w-px h-10 bg-zinc-800" />
            <div className="flex flex-col">
              <span className="text-xs text-zinc-500">Optimized for</span>
              <span className="text-sm font-mono text-[#76B900]">GTX 1650+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
