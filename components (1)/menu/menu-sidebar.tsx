"use client"

interface MenuSidebarProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

const categories = [
  { id: "mains", label: "MAINS" },
  { id: "sides", label: "SIDES" },
  { id: "drinks", label: "DRINKS" },
  { id: "limited", label: "LIMITED DROPS" },
]

export function MenuSidebar({ activeCategory, onCategoryChange }: MenuSidebarProps) {
  return (
    <aside className="hidden lg:block w-64 min-h-[calc(100vh-64px)] bg-[#0a0a0a] border-r border-[#1a1a1a] p-8 sticky top-16">
      {/* Title */}
      <div className="mb-12">
        <h1 className="font-[var(--font-oswald)] text-3xl font-bold text-white mb-2">
          THE MENU
        </h1>
        <p className="text-white/40 text-xs tracking-wider">
          FULL MENU ACCESS
        </p>
      </div>

      {/* Categories */}
      <nav className="space-y-1">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`w-full text-left px-4 py-3 text-sm font-medium tracking-wider transition-all duration-200 rounded ${
              activeCategory === category.id
                ? "bg-[#FF5A1F] text-white"
                : "text-white/60 hover:text-white hover:bg-[#1a1a1a]"
            }`}
          >
            {category.label}
          </button>
        ))}
      </nav>

      {/* Dots navigation indicator */}
      <div className="mt-12 space-y-2">
        {categories.map((category) => (
          <div key={category.id} className="flex items-center gap-2">
            <div 
              className={`w-2 h-2 rounded-full transition-colors ${
                activeCategory === category.id ? "bg-[#FF5A1F]" : "bg-[#333]"
              }`} 
            />
            <span className="text-white/30 text-[10px] tracking-wider uppercase">
              {category.label}
            </span>
          </div>
        ))}
      </div>
    </aside>
  )
}
