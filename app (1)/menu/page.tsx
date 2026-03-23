"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MenuSidebar } from "@/components/menu/menu-sidebar"
import { MenuGrid } from "@/components/menu/menu-grid"
import { CartSidebar } from "@/components/menu/cart-sidebar"
import { MobileCart } from "@/components/menu/mobile-cart"
import { MobileCategoryTabs } from "@/components/menu/mobile-category-tabs"

export interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

export default function MenuPage() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [activeCategory, setActiveCategory] = useState("mains")
  const [mobileCartOpen, setMobileCartOpen] = useState(false)

  const addToCart = (item: { id: number; name: string; price: number; image: string }) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id)
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((i) => i.id !== id))
  }

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id)
      return
    }
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity } : i))
    )
  }

  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      
      <div className="pt-16">
        {/* Mobile Category Tabs */}
        <MobileCategoryTabs 
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="flex">
          {/* Left Sidebar - Desktop only */}
          <MenuSidebar 
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          
          {/* Main Content */}
          <MenuGrid 
            activeCategory={activeCategory}
            onAddToCart={addToCart}
          />
          
          {/* Right Sidebar - Cart (Desktop only) */}
          <CartSidebar 
            cart={cart}
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
          />
        </div>
      </div>

      {/* Mobile Cart Button & Sheet */}
      <MobileCart 
        cart={cart}
        cartTotal={cartTotal}
        cartItemCount={cartItemCount}
        isOpen={mobileCartOpen}
        onToggle={() => setMobileCartOpen(!mobileCartOpen)}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />

      <Footer />
    </main>
  )
}
