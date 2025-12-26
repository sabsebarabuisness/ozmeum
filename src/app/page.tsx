import { Navbar } from "@/components/navbar"
import { FloatingParticles } from "@/components/floating-particles"
import { GrafiteHero } from "@/components/grafite-hero"
import { BentoFeatures } from "@/components/bento-features"
import { EngineSection } from "@/components/engine-section"
import { EditorMockup } from "@/components/editor-mockup"
import { RoadmapSection } from "@/components/roadmap-section"
import { CompetitiveEdge } from "@/components/competitive-edge"
import { SocialProof } from "@/components/social-proof"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 overflow-x-hidden">
      <FloatingParticles />
      <Navbar />
      <GrafiteHero />
      <BentoFeatures />
      <EngineSection />
      <EditorMockup />
      <RoadmapSection />
      <CompetitiveEdge />
      <SocialProof />
      <Footer />
    </main>
  )
}
