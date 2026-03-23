"use client"

import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"

const menuItems = [
  {
    id: 1,
    name: "THE PIT MASTER",
    price: "$24",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    description: "Double smashed beef, aged cheddar, caramelized onions, pit sauce",
  },
  {
    id: 2,
    name: "REAPER CHICKEN",
    price: "$22",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop",
    description: "Crispy fried chicken, ghost pepper mayo, pickled jalapenos",
  },
  {
    id: 3,
    name: "TRUCK STOP",
    price: "$21",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop",
    description: "Classic beef patty, American cheese, secret sauce, lettuce, tomato",
  },
]

export function QuickBites() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#141414]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <span className="text-[#FF5A1F] text-xs font-semibold tracking-[0.2em] uppercase block mb-2 sm:mb-3">
              Popular Items
            </span>
            <h2 className="font-[var(--font-oswald)] text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              QUICK BITES
            </h2>
          </div>
          <Link
            href="/menu"
            className="hidden sm:inline-flex px-5 py-2.5 bg-[#00FF00] text-black text-xs font-bold tracking-wider rounded hover:bg-[#00cc00] transition-colors"
          >
            VIEW FULL MENU
          </Link>
        </div>

        {/* Menu Grid - Single column on mobile, 2 cols tablet, 3 cols desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="group bg-[#1a1a1a] rounded-lg overflow-hidden border border-[#2a2a2a] hover:border-[#FF5A1F]/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-60" />
                
                {/* Price badge on mobile */}
                <div className="absolute top-3 right-3 sm:hidden bg-[#FF5A1F] px-3 py-1 rounded">
                  <span className="text-white font-bold text-sm">{item.price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <div className="flex items-start justify-between gap-3 mb-2 sm:mb-3">
                  <h3 className="font-[var(--font-oswald)] text-base sm:text-lg font-semibold text-white tracking-wide">
                    {item.name}
                  </h3>
                  <span className="hidden sm:block text-[#FF5A1F] font-bold text-lg shrink-0">
                    {item.price}
                  </span>
                </div>
                
                <p className="text-white/50 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Add to Cart Button */}
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 bg-[#2a2a2a] border border-[#333] text-white text-xs font-semibold tracking-wider rounded hover:bg-[#FF5A1F] hover:border-[#FF5A1F] active:scale-[0.98] transition-all duration-200">
                  <ShoppingCart className="w-4 h-4" />
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View Full Menu */}
        <div className="mt-6 sm:hidden text-center">
          <Link
            href="/menu"
            className="inline-flex w-full justify-center px-6 py-3.5 bg-[#00FF00] text-black text-sm font-bold tracking-wider rounded hover:bg-[#00cc00] active:scale-[0.98] transition-all"
          >
            VIEW FULL MENU
          </Link>
        </div>
      </div>
    </section>
  )
}
