"use client"

import Image from "next/image"
import { ShoppingCart, Flame } from "lucide-react"

interface MenuItem {
  id: number
  name: string
  price: number
  description: string
  image: string
  category: string
}

const menuItems: MenuItem[] = [
  // Mains
  {
    id: 1,
    name: "THE PIT MASTER",
    price: 24,
    description: "Double smashed beef patties, aged cheddar, caramelized onions, house-made pit sauce, brioche bun",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    category: "mains",
  },
  {
    id: 2,
    name: "THE REAPER CHICKEN",
    price: 22,
    description: "Crispy fried chicken thigh, ghost pepper mayo, pickled jalapenos, slaw, toasted bun",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop",
    category: "mains",
  },
  // Sides
  {
    id: 3,
    name: "DIRTY FRIES",
    price: 12,
    description: "Hand-cut fries, melted cheese, bacon bits, jalapenos, pit sauce drizzle",
    image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400&h=300&fit=crop",
    category: "sides",
  },
  {
    id: 4,
    name: "COAL-CHARRED CORN",
    price: 9,
    description: "Grilled corn on the cob, chili butter, cotija cheese, lime",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=300&fit=crop",
    category: "sides",
  },
  // Drinks
  {
    id: 5,
    name: "NITRO COLD BREW",
    price: 7,
    description: "Smooth, creamy cold brew coffee infused with nitrogen",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop",
    category: "drinks",
  },
  {
    id: 6,
    name: "CRAFT ROOT BEER",
    price: 6,
    description: "Small-batch root beer with vanilla and sassafras",
    image: "https://images.unsplash.com/photo-1527960471264-932f39eb5846?w=400&h=300&fit=crop",
    category: "drinks",
  },
  // Limited Drops
  {
    id: 7,
    name: "TRUFFLE TREMOR",
    price: 32,
    description: "Wagyu beef, black truffle aioli, gruyere, caramelized shallots, limited release",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop",
    category: "limited",
  },
]

interface MenuGridProps {
  activeCategory: string
  onAddToCart: (item: { id: number; name: string; price: number; image: string }) => void
}

export function MenuGrid({ activeCategory, onAddToCart }: MenuGridProps) {
  const categories = ["mains", "sides", "drinks", "limited"]
  
  const getCategoryLabel = (cat: string) => {
    const labels: Record<string, string> = {
      mains: "MAINS",
      sides: "SIDES", 
      drinks: "DRINKS",
      limited: "LIMITED DROPS",
    }
    return labels[cat] || cat.toUpperCase()
  }

  return (
    <div className="flex-1 min-h-[calc(100vh-64px)] bg-[#141414] p-4 sm:p-6 lg:p-8 overflow-y-auto pb-32 xl:pb-8">
      {categories
        .filter((cat) => activeCategory === "all" || cat === activeCategory || activeCategory === cat)
        .map((category) => {
          const items = menuItems.filter((item) => item.category === category)
          if (items.length === 0) return null
          
          return (
            <section key={category} className="mb-8 sm:mb-12" id={category}>
              {/* Category Header */}
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <h2 className="font-[var(--font-oswald)] text-xl sm:text-2xl font-bold text-white">
                  {getCategoryLabel(category)}
                </h2>
                <div className="flex-1 h-px bg-[#2a2a2a]" />
                {category === "limited" && (
                  <span className="flex items-center gap-1 text-[#FF5A1F] text-xs font-semibold tracking-wider">
                    <Flame className="w-3 h-3 animate-pulse" />
                    LIMITED
                  </span>
                )}
              </div>

              {/* Items Grid - 1 col mobile, 2 cols tablet+ */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="group bg-[#1a1a1a] rounded-lg overflow-hidden border border-[#2a2a2a] hover:border-[#FF5A1F]/30 transition-all duration-300"
                  >
                    {/* Mobile: Horizontal card layout */}
                    <div className="flex sm:flex-col">
                      {/* Image */}
                      <div className="relative w-28 h-28 sm:w-full sm:h-40 shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                        {/* Price badge on image for mobile */}
                        <div className="sm:hidden absolute bottom-2 left-2 bg-[#FF5A1F] px-2 py-0.5 rounded">
                          <span className="text-white font-bold text-xs">${item.price}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-3 sm:p-5 flex flex-col">
                        <div className="flex items-start justify-between gap-2 mb-1 sm:mb-2">
                          <h3 className="font-[var(--font-oswald)] text-sm sm:text-base font-semibold text-white tracking-wide line-clamp-1">
                            {item.name}
                          </h3>
                          <span className="hidden sm:block text-[#FF5A1F] font-bold text-lg shrink-0">
                            ${item.price}
                          </span>
                        </div>
                        
                        <p className="text-white/50 text-xs mb-3 flex-1 line-clamp-2">
                          {item.description}
                        </p>

                        {/* Add to Cart Button */}
                        <button 
                          onClick={() => onAddToCart({
                            id: item.id,
                            name: item.name,
                            price: item.price,
                            image: item.image,
                          })}
                          className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-[#2a2a2a] border border-[#333] text-white text-xs font-semibold tracking-wider rounded hover:bg-[#FF5A1F] hover:border-[#FF5A1F] active:scale-[0.97] transition-all duration-200"
                        >
                          <ShoppingCart className="w-3.5 h-3.5" />
                          <span className="sm:inline">ADD</span>
                          <span className="hidden sm:inline"> TO CART</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )
        })}
    </div>
  )
}
