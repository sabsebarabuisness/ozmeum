const faqs = [
  {
    question: "Is this like Sora or Runway?",
    answer:
      "No. They generate pixels—we manipulate timelines. You keep full creative control with frame-level precision. No hallucinated footage, no surprises.",
  },
  {
    question: "Will it run on my 4GB RAM laptop?",
    answer:
      "Yes. Heavy rendering is offloaded to Cloud GPUs. Your local machine handles the lightweight UI while our servers do the heavy lifting.",
  },
  {
    question: "Can I export to Premiere Pro or DaVinci?",
    answer:
      "Absolutely. We use Pixar's OpenTimelineIO standard. Start editing in Ozmeum, finish in Premiere, DaVinci, or Final Cut Pro—seamlessly.",
  },
  {
    question: "How is the AI different from other video AI tools?",
    answer:
      "We don't generate random content. Our AI parses your prompt, breaks it into deterministic commands, and executes precise edits on your real assets.",
  },
  {
    question: "What happens if my connection drops mid-edit?",
    answer:
      "Your edit is a JSON state stored in the cloud. When you reconnect, you're exactly where you left off. Zero data loss, guaranteed.",
  },
  {
    question: "When is the public release?",
    answer:
      "We're in closed alpha with select creators. Join the waitlist for early access and be first in line.",
  },
]

export function FaqSection() {
  return (
    <section className="relative py-24 px-6 bg-zinc-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.05),transparent_55%)]" />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 mb-6">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Objection Handling</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Questions, Answered</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mt-3">
            Clear answers for creators evaluating Ozmeum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
