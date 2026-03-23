import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/home/hero"
import { Genesis } from "@/components/home/genesis"
import { QuickBites } from "@/components/home/quick-bites"
import { StreetTalk } from "@/components/home/street-talk"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <Genesis />
      <QuickBites />
      <StreetTalk />
      <Footer />
    </main>
  )
}

