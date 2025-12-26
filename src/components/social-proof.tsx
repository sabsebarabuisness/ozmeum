import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "YouTuber, 2.4M subscribers",
    avatar: "/asian-woman-professional-headshot.png",
    content: "Grafite cut my editing time in half. The AI understands exactly what I want before I even finish typing.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Creative Director, VICE",
    avatar: "/hispanic-man-creative-director-headshot.jpg",
    content: "Finally, an NLE that keeps up with how fast we need to move. The OTIO export is flawless.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Documentary Filmmaker",
    avatar: "/woman-filmmaker-professional-headshot.jpg",
    content: "I was skeptical about AI editing, but Grafite changed my mind. It respects my footage and my vision.",
    rating: 5,
  },
]

const stats = [
  { value: "10,000+", label: "Beta Users" },
  { value: "2.5M+", label: "Hours Edited" },
  { value: "98%", label: "Satisfaction" },
  { value: "4.9/5", label: "User Rating" },
]

export function SocialProof() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/50 to-zinc-950" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl backdrop-blur-sm"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-blue-400 font-mono text-sm tracking-wider mb-3">TRUSTED BY CREATORS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Loved by the Next Generation</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Join thousands of creators who have already made the switch to AI-native editing.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-6 bg-zinc-900/80 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-zinc-800" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Content */}
              <p className="text-zinc-300 mb-6 leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full bg-zinc-800"
                />
                <div>
                  <div className="text-sm font-medium text-white">{testimonial.name}</div>
                  <div className="text-xs text-zinc-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logos section */}
        <div className="mt-16 pt-12 border-t border-zinc-800/50">
          <p className="text-center text-xs text-zinc-600 uppercase tracking-widest mb-8">Featured in</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-50">
            {["TechCrunch", "The Verge", "Product Hunt", "Wired", "Forbes"].map((name) => (
              <span key={name} className="text-lg md:text-xl font-semibold text-zinc-500">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
