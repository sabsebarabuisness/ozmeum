export function FounderNote() {
  return (
    <section className="relative py-20 px-6 bg-zinc-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06),transparent_60%)]" />

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-blue-400 font-mono text-xs tracking-widest mb-3">FOUNDER NOTE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Founder Note</h2>
        </div>

        <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-8 md:p-10">
          <p className="text-zinc-300 text-lg leading-relaxed">
            I am Abhijeet, a civil engineer turned full-stack developer. I realized video editing tools are built like
            ancient architecture: rigid and heavy. I am building Grafite with the precision of structural engineering
            and the speed of Rust.
          </p>
          <div className="mt-6 text-sm text-zinc-500 font-mono">- Abhijeet, Founder</div>
          <a
            className="mt-3 inline-flex items-center gap-2 text-sm text-blue-400 font-mono underline underline-offset-4 hover:text-blue-300 transition-colors"
            href="https://www.linkedin.com/in/abhijeet-pratap-singh-teeli-net"
            target="_blank"
            rel="noreferrer"
            aria-label="Abhijeet on LinkedIn"
          >
            LinkedIn: www.linkedin.com/in/abhijeet-pratap-singh-teeli-net
          </a>
        </div>
      </div>
    </section>
  )
}
