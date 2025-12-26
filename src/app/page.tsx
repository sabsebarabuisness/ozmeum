import { FloatingParticles } from "@/components/floating-particles"
import { GrafiteHero } from "@/components/grafite-hero"
import { ProblemSection } from "@/components/problem-section"
import { ArchitectureSection } from "@/components/architecture-section"
import { BentoFeatures } from "@/components/bento-features"
import { CompetitiveEdge } from "@/components/competitive-edge"
import { FounderNote } from "@/components/founder-note"
import { FaqSection } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 overflow-x-hidden">
      <FloatingParticles />
      {/* Section 1: Hero */}
      <GrafiteHero />
      {/* Section 2: The Grunt Work (Problem) */}
      <ProblemSection />
      {/* Section 3: How It Works (Architecture) */}
      <ArchitectureSection />
      {/* Section 4: Features */}
      <BentoFeatures />
      {/* Section 5: The Moat */}
      <CompetitiveEdge />
      {/* Section 6: Founder's Note */}
      <FounderNote />
      {/* Section 7: FAQ */}
      <FaqSection />
      {/* Footer */}
      <Footer />
    </main>
  )
}
