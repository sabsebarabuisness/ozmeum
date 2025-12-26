import { Sparkles, Github, Twitter, Youtube, Linkedin } from "lucide-react"

const footerLinks = {
  Product: ["Features", "Pricing", "Roadmap", "Changelog", "Beta Access"],
  Resources: ["Documentation", "Tutorials", "Blog", "Community", "Help Center"],
  Company: ["About", "Careers", "Press Kit", "Contact", "Legal"],
  Connect: ["Twitter", "Discord", "GitHub", "YouTube"],
}

export function Footer() {
  return (
    <footer className="relative border-t border-zinc-800 bg-zinc-950">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Grafite</span>
            </div>
            <p className="text-sm text-zinc-500 mb-4">The AI-native video editor for the next billion creators.</p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-white transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-white transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div className="border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to revolutionize your workflow?</h3>
            <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
              Join 10,000+ creators already editing smarter with Grafite.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-auto px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/25">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-500">&copy; 2025 Grafite Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
