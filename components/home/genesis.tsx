import Image from "next/image"

export function Genesis() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Section Label */}
            <span className="text-[#FF5A1F] text-xs font-semibold tracking-[0.2em] uppercase">
              Our Story
            </span>

            {/* Heading */}
            <h2 className="font-[var(--font-oswald)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
              THE{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A1F] to-[#ff7340]">
                MUNCH PIT
              </span>
            </h2>

            {/* Story Text */}
            <div className="space-y-4 text-white/60 text-sm leading-relaxed">
              <p>
                What started as a passion for bold flavors and street food has 
                grown into Glen Eden's go-to spot for fire food that hits different.
              </p>
              <p>
                We've been serving up flame-kissed patties and mouth-watering 
                creations to hungry locals who know what real street food tastes like. 
                No fancy frills, just honest food with serious heat.
              </p>
              <p className="text-[#FF5A1F] font-medium">
                // Now we've got our permanent spot at 434 West Coast Rd. No more chasing!
              </p>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop"
                alt="Delicious burger"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
            </div>
            
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#FF5A1F]/20 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
