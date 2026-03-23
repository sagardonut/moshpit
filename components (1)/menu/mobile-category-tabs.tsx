"use client"

interface MobileCategoryTabsProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

const categories = [
  { id: "mains", label: "MAINS" },
  { id: "sides", label: "SIDES" },
  { id: "drinks", label: "DRINKS" },
  { id: "limited", label: "LIMITED" },
]

export function MobileCategoryTabs({ activeCategory, onCategoryChange }: MobileCategoryTabsProps) {
  return (
    <div className="lg:hidden sticky top-16 z-30 bg-[#0a0a0a] border-b border-[#1a1a1a]">
      {/* Title */}
      <div className="px-4 py-4">
        <h1 className="font-[var(--font-oswald)] text-2xl font-bold text-white">
          THE MENU
        </h1>
      </div>
      
      {/* Scrollable tabs */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex px-4 pb-3 gap-2 min-w-max">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-4 py-2 text-xs font-semibold tracking-wider rounded-full transition-all duration-200 whitespace-nowrap ${
                activeCategory === category.id
                  ? "bg-[#FF5A1F] text-white"
                  : "bg-[#1a1a1a] text-white/60 hover:text-white"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
