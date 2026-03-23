import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a] py-8 sm:py-10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          {/* Top row - Logo, Nav, Social */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo & Tagline */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
              <span className="text-[#FF5A1F] font-bold text-lg tracking-tight font-[var(--font-oswald)]">
                MUNCH PIT
              </span>
              <span className="text-white/40 text-xs">
                SAME SPOT, SAME FIRE FOOD
              </span>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
              <Link href="/" className="text-white/60 hover:text-white text-xs font-medium tracking-wider transition-colors">
                HOME
              </Link>
              <Link href="/menu" className="text-white/60 hover:text-white text-xs font-medium tracking-wider transition-colors">
                MENU
              </Link>
              <Link href="/book" className="text-white/60 hover:text-white text-xs font-medium tracking-wider transition-colors">
                BOOK
              </Link>
              <Link href="/find" className="text-white/60 hover:text-white text-xs font-medium tracking-wider transition-colors">
                FIND US
              </Link>
            </nav>

            {/* Social Links */}
            <div className="flex items-center gap-5">
              <a 
                href="#" 
                className="text-white/40 hover:text-[#FF5A1F] transition-colors p-2"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-white/40 hover:text-[#FF5A1F] transition-colors p-2"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-white/40 hover:text-[#FF5A1F] transition-colors p-2"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Bottom row - Location & Copyright */}
          <div className="pt-6 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="text-white/40 text-xs">
              434 West Coast Rd, Glen Eden | Open Mon-Sun
            </p>
            <p className="text-white/30 text-xs">
              © 2024 Munch Pit. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
