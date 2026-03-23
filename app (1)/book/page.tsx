"use client"

import { useState } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Calendar, Users, MapPin, Clock, Flame } from "lucide-react"

export default function BookPage() {
  const [formData, setFormData] = useState({
    eventType: "",
    date: "",
    guests: "",
    location: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      
      <div className="pt-16">
        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-64px)]">
          {/* Left Section - Hero Image (hidden on mobile, shown as header) */}
          <div className="relative lg:w-1/2">
            {/* Mobile Hero - Compact */}
            <div className="lg:hidden relative h-48 sm:h-64 overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p5F8jKo5Sq0w7OM8dy1kiNXKB0fBgK.png"
                alt="Munch Pit food truck"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
              
              {/* Mobile overlay text */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Flame className="w-4 h-4 text-[#FF5A1F]" />
                  <span className="text-[#FF5A1F] text-xs font-bold tracking-wider">CATERING</span>
                </div>
                <h2 className="font-[var(--font-oswald)] text-2xl sm:text-3xl font-bold text-white leading-tight">
                  RAW ENERGY{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A1F] to-[#ff7340]">
                    ON WHEELS
                  </span>
                </h2>
              </div>
            </div>

            {/* Desktop Hero - Full height */}
            <div className="hidden lg:block h-full relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p5F8jKo5Sq0w7OM8dy1kiNXKB0fBgK.png"
                alt="Munch Pit food truck"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-12">
                <h2 className="font-[var(--font-oswald)] text-5xl font-bold text-white mb-4 leading-tight">
                  RAW ENERGY<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A1F] to-[#ff7340]">
                    ON WHEELS
                  </span>
                </h2>
                <p className="text-white/60 text-sm max-w-sm">
                  Bring the heat to your next event. We cater private parties, 
                  corporate events, weddings, and street festivals.
                </p>
              </div>

              {/* Vertical Gallery */}
              <div className="absolute top-1/4 right-8 w-24 space-y-3">
                <div className="aspect-square rounded overflow-hidden border-2 border-white/20">
                  <Image
                    src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100&h=100&fit=crop"
                    alt="Burger"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square rounded overflow-hidden border-2 border-white/20">
                  <Image
                    src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=100&h=100&fit=crop"
                    alt="Burger"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square rounded overflow-hidden border-2 border-white/20">
                  <Image
                    src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=100&h=100&fit=crop"
                    alt="Burger"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="w-full lg:w-1/2 bg-[#0a0a0a] p-4 sm:p-6 lg:p-16 flex items-start lg:items-center">
            <div className="w-full max-w-lg mx-auto">
              {/* Header - Desktop only (mobile shows in hero) */}
              <div className="hidden lg:block mb-10">
                <span className="text-[#FF5A1F] text-xs font-semibold tracking-[0.2em] uppercase">
                  Private Events
                </span>
                <h1 className="font-[var(--font-oswald)] text-4xl font-bold text-white mt-2 mb-4">
                  BOOK THE PIT
                </h1>
                <p className="text-white/50 text-sm">
                  Fill in the details below and we'll get back to you within 24 hours.
                </p>
              </div>

              {/* Mobile header */}
              <div className="lg:hidden mb-6">
                <p className="text-white/50 text-sm">
                  Fill in the details below and we'll get back to you within 24 hours.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Event Type */}
                <div>
                  <label className="block text-white/60 text-xs font-medium tracking-wider uppercase mb-2">
                    Event Type
                  </label>
                  <div className="relative">
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full px-4 py-3.5 bg-[#1a1a1a] border border-[#2a2a2a] text-white text-sm rounded-lg focus:border-[#FF5A1F] focus:outline-none appearance-none cursor-pointer transition-colors"
                    >
                      <option value="">Select event type</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="wedding">Wedding</option>
                      <option value="private">Private Party</option>
                      <option value="festival">Street Festival</option>
                      <option value="other">Other</option>
                    </select>
                    <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                  </div>
                </div>

                {/* Date & Guests - Two columns on mobile */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {/* Date */}
                  <div>
                    <label className="block text-white/60 text-xs font-medium tracking-wider uppercase mb-2">
                      Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3.5 bg-[#1a1a1a] border border-[#2a2a2a] text-white text-sm rounded-lg focus:border-[#FF5A1F] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Number of Guests */}
                  <div>
                    <label className="block text-white/60 text-xs font-medium tracking-wider uppercase mb-2">
                      Guests
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        placeholder="50"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-4 py-3.5 bg-[#1a1a1a] border border-[#2a2a2a] text-white text-sm rounded-lg focus:border-[#FF5A1F] focus:outline-none placeholder:text-white/30 transition-colors"
                      />
                      <Users className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-white/60 text-xs font-medium tracking-wider uppercase mb-2">
                    Location
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Auckland, NZ"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3.5 bg-[#1a1a1a] border border-[#2a2a2a] text-white text-sm rounded-lg focus:border-[#FF5A1F] focus:outline-none placeholder:text-white/30 transition-colors"
                    />
                    <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white/60 text-xs font-medium tracking-wider uppercase mb-2">
                    Additional Details
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us more about your event..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 bg-[#1a1a1a] border border-[#2a2a2a] text-white text-sm rounded-lg focus:border-[#FF5A1F] focus:outline-none placeholder:text-white/30 resize-none transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[#00FF00] text-black font-bold text-sm tracking-wider rounded-lg hover:bg-[#00cc00] active:scale-[0.98] transition-all"
                >
                  BOOK THE TRUCK
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
