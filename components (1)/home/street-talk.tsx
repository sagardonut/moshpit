import Image from "next/image"

const testimonials = [
  {
    id: 1,
    username: "@hungrylocal_nz",
    text: "Finally found my go-to spot! The Pit Master burger is absolutely insane. Best thing about Glen Eden now is Munch Pit being permanent!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    username: "@foodie_auckland",
    text: "No more chasing the truck around West Auckland! Same fire food, same amazing taste. The secret sauce is actually life-changing.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
]

export function StreetTalk() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6">
            {/* Section Label */}
            <span className="text-[#FF5A1F] text-xs font-semibold tracking-[0.2em] uppercase">
              Testimonials
            </span>

            {/* Heading */}
            <div className="space-y-1 sm:space-y-2">
              <h2 className="font-[var(--font-oswald)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
                STREET
              </h2>
              <h2 className="font-[var(--font-oswald)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A1F] to-[#ff7340]">
                  TALK
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-white/50 text-sm max-w-md">
              Real reviews from hungry souls in Glen Eden and beyond. No PR fluff, just honest opinions from the streets.
            </p>

            {/* Social handles */}
            <div className="flex items-center gap-4 pt-2 sm:pt-4">
              <div className="flex -space-x-2">
                {testimonials.map((t) => (
                  <div 
                    key={t.id}
                    className="w-8 h-8 rounded-full border-2 border-[#0a0a0a] overflow-hidden"
                  >
                    <Image
                      src={t.avatar}
                      alt={t.username}
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="text-white/40 text-xs">
                500+ Happy Customers
              </span>
            </div>
          </div>

          {/* Right Content - Testimonials */}
          <div className="space-y-4 sm:space-y-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="p-4 sm:p-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.username}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-1.5 sm:space-y-2 min-w-0">
                    <span className="text-[#FF5A1F] text-sm font-medium">
                      {testimonial.username}
                    </span>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
