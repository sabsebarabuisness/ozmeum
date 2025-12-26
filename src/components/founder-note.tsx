import { Linkedin, User } from "lucide-react"

export function FounderNote() {
  return (
    <section className="relative py-24 px-6 bg-zinc-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.05),transparent_60%)]" />

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 mb-6">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Trust & Vision</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            From Civil Engineering to{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Systems Architecture
            </span>
          </h2>
        </div>

        <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-8 md:p-10">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Photo placeholder */}
            <div className="flex-shrink-0 w-24 h-24 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center">
              <User className="w-10 h-10 text-zinc-600" />
            </div>

            <div className="flex-1">
              <p className="text-zinc-300 text-lg leading-relaxed mb-4">
                I am Abhijeet, a civil engineer turned full-stack developer. I realized video editing tools are built
                like ancient architecture: rigid, heavy, and prone to collapse under pressure.
              </p>
              <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                I built Ozmeum with the precision of structural engineering and the speed of Rust to give creators
                control back. No more crashes. No more lost work. Just pure creative flow.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div>
                  <p className="text-white font-semibold">Abhijeet Pratap Singh</p>
                  <p className="text-sm text-zinc-500 font-mono">Founder & CTO</p>
                </div>
                <a
                  className="inline-flex items-center gap-2 text-sm text-emerald-400 font-mono hover:text-emerald-300 transition-colors"
                  href="https://www.linkedin.com/in/abhijeet-pratap-singh-teeli-net"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abhijeet on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
