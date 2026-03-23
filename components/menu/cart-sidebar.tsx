"use client"

import Image from "next/image"
import { Minus, Plus, X } from "lucide-react"
import type { CartItem } from "@/app/menu/page"

interface CartSidebarProps {
  cart: CartItem[]
  onUpdateQuantity: (id: number, quantity: number) => void
  onRemove: (id: number) => void
}

export function CartSidebar({ cart, onUpdateQuantity, onRemove }: CartSidebarProps) {
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <aside className="hidden xl:block w-80 min-h-[calc(100vh-64px)] bg-[#0a0a0a] border-l border-[#1a1a1a] p-6 sticky top-16">
      {/* Header */}
      <div className="mb-6">
        <h2 className="font-[var(--font-oswald)] text-xl font-bold text-white mb-1">
          YOUR ORDER
        </h2>
        <p className="text-white/40 text-xs tracking-wider">
          {cart.length === 0 ? "EMPTY" : `${cart.length} ITEM${cart.length > 1 ? "S" : ""}`}
        </p>
      </div>

      {/* Cart Items */}
      {cart.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-white/30 text-sm">Your cart is empty</p>
          <p className="text-white/20 text-xs mt-2">Add some fire to your order</p>
        </div>
      ) : (
        <div className="space-y-4 mb-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex gap-3 p-3 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a]"
            >
              {/* Image */}
              <div className="relative w-16 h-16 rounded overflow-hidden shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-white text-sm font-medium truncate">
                    {item.name}
                  </h4>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="text-white/30 hover:text-white/60 transition-colors"
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-[#FF5A1F] text-sm font-semibold mt-1">
                  ${item.price * item.quantity}
                </p>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    className="w-6 h-6 flex items-center justify-center bg-[#2a2a2a] text-white/60 rounded hover:bg-[#333] hover:text-white transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="text-white text-xs font-medium w-6 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className="w-6 h-6 flex items-center justify-center bg-[#2a2a2a] text-white/60 rounded hover:bg-[#333] hover:text-white transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Summary */}
      {cart.length > 0 && (
        <div className="border-t border-[#2a2a2a] pt-4 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-white/60 text-sm">Subtotal</span>
            <span className="text-white font-semibold">${subtotal}</span>
          </div>
          
          <button className="w-full py-3 bg-[#00FF00] text-black font-bold text-sm tracking-wider rounded hover:bg-[#00cc00] transition-colors">
            CHECKOUT NOW
          </button>
        </div>
      )}

      {/* Promo Image */}
      <div className="mt-8 relative aspect-video rounded-lg overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=200&fit=crop"
          alt="Promotional burger"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        <div className="absolute bottom-3 left-3">
          <span className="text-[#FF5A1F] text-xs font-bold">NEW</span>
          <p className="text-white text-sm font-semibold">Try our specials</p>
        </div>
      </div>
    </aside>
  )
}
