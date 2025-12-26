import { Sparkles, Twitter, Linkedin, MessageCircle, Cpu } from "lucide-react"

const footerLinks = {
  Product: ["Features", "Roadmap", "Changelog", "Beta Access"],
  Resources: ["Documentation", "Blog", "Community"],
  Company: ["About", "Contact", "Legal"],
}

export function Footer() {
  return (
    <footer className="relative border-t border-zinc-800 bg-zinc-950">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-400 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Ozmeum</span>
            </div>
            <p className="text-sm text-zinc-500 mb-4">The Cursor for Video. AI-native editing built on Rust.</p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-white transition-colors"
                aria-label="Discord"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/abhijeet-pratap-singh-teeli-net"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
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

      {/* Tech tagline */}
      <div className="border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-2 text-sm text-zinc-500">
            <Cpu className="w-4 h-4 text-emerald-400" />
            <span>Optimized for NVIDIA RTX & Apple Silicon</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-500">&copy; 2025 Ozmeum. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
