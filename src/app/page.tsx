import { FloatingParticles } from "@/components/floating-particles"
import { GrafiteHero } from "@/components/grafite-hero"
import { BentoFeatures } from "@/components/bento-features"
import { EngineSection } from "@/components/engine-section"
import { UnderTheHood } from "@/components/under-the-hood"
import { EditorMockup } from "@/components/editor-mockup"
import { RoadmapSection } from "@/components/roadmap-section"
import { CompetitiveEdge } from "@/components/competitive-edge"
import { FaqSection } from "@/components/faq"
import { SocialProof } from "@/components/social-proof"
import { Footer } from "@/components/footer"
import { FounderNote } from "@/components/founder-note"

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 overflow-x-hidden">
      <FloatingParticles />
      <GrafiteHero />
      <BentoFeatures />
      <EngineSection />
      <UnderTheHood />
      <EditorMockup />
      <RoadmapSection />
      <CompetitiveEdge />
      <FounderNote />
      <FaqSection />
      <SocialProof />
      <Footer />
    </main>
  )
}
