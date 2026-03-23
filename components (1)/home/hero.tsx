"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-16 pb-8">
      {/* Background Image - Using the provided Munch Pit food truck image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p5F8jKo5Sq0w7OM8dy1kiNXKB0fBgK.png"
          alt="Munch Pit food truck"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Mobile: stronger overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/40 md:from-[#0a0a0a] md:via-[#0a0a0a]/70 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/30" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-5 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#FF5A1F] rounded">
              <span className="text-white text-[10px] sm:text-xs font-bold tracking-wider uppercase">
                New Permanent Spot!
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-1 sm:space-y-2">
              <h1 className="font-[var(--font-oswald)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] tracking-tight">
                WE'RE HERE
              </h1>
              <h1 className="font-[var(--font-oswald)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A1F] to-[#ff7340]">
                  TO STAY!
                </span>
              </h1>
            </div>

            {/* Location Badge */}
            <div className="flex items-center gap-2 sm:gap-3">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF5A1F] shrink-0" />
              <span className="text-white text-sm sm:text-lg md:text-xl font-semibold">
                434 West Coast Rd, Glen Eden
              </span>
            </div>

            {/* Description */}
            <p className="text-white/70 text-sm sm:text-base max-w-md leading-relaxed">
              No more chasing us around. <span className="text-[#FF5A1F] font-semibold">Same spot, same fire food!</span> Street food with bold flavors that'll keep you coming back.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href="/menu"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#00FF00] text-black text-sm font-bold tracking-wider rounded hover:bg-[#00cc00] transition-all duration-200"
              >
                ORDER NOW
              </Link>
              <Link
                href="/find"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1a1a1a] border border-[#333] text-white text-sm font-semibold tracking-wider rounded hover:bg-[#2a2a2a] hover:border-[#444] transition-all duration-200"
              >
                <MapPin className="w-4 h-4" />
                GET DIRECTIONS
              </Link>
            </div>
          </div>

          {/* Right Content - Navigation Links (Desktop only) */}
          <div className="hidden lg:flex flex-col items-end gap-2 text-right">
            <Link 
              href="/" 
              className="text-[#FF5A1F] text-sm font-medium tracking-wider hover:text-[#ff7340] transition-colors"
            >
              01 // HOME
            </Link>
            <Link 
              href="/menu" 
              className="text-white/40 text-sm font-medium tracking-wider hover:text-white transition-colors"
            >
              02 // MENU
            </Link>
            <Link 
              href="/find" 
              className="text-white/40 text-sm font-medium tracking-wider hover:text-white transition-colors"
            >
              03 // FIND US
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Mobile */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:hidden">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-[#FF5A1F] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
