const faqs = [
  {
    question: "How is this different from Sora/Runway?",
    answer:
      "They generate pixels. Grafite manipulates timelines, so you keep creative control with frame-level edits.",
  },
  {
    question: "Do I need an expensive PC?",
    answer: "No. Our Hybrid-Cloud engine offloads heavy lifting to Azure/AWS GPUs.",
  },
  {
    question: "Is it compatible with Premiere Pro?",
    answer: "Yes. Export via OpenTimelineIO and move your timeline cleanly.",
  },
  {
    question: "When is the release?",
    answer: "We are in closed alpha. Join the waitlist for early access.",
  },
]

export function FaqSection() {
  return (
    <section className="relative py-24 px-6 bg-zinc-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.06),transparent_55%)]" />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-400 font-mono text-xs tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Questions, answered</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mt-3">
            Short, clear answers for creators evaluating Grafite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
