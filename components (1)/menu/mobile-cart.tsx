"use client"

import Image from "next/image"
import { ShoppingCart, X, Minus, Plus, ChevronUp } from "lucide-react"
import type { CartItem } from "@/app/menu/page"

interface MobileCartProps {
  cart: CartItem[]
  cartTotal: number
  cartItemCount: number
  isOpen: boolean
  onToggle: () => void
  onUpdateQuantity: (id: number, quantity: number) => void
  onRemove: (id: number) => void
}

export function MobileCart({ 
  cart, 
  cartTotal, 
  cartItemCount, 
  isOpen, 
  onToggle,
  onUpdateQuantity,
  onRemove 
}: MobileCartProps) {
  return (
    <>
      {/* Fixed bottom cart button - Mobile only */}
      {!isOpen && (
        <div className="xl:hidden fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a] to-transparent z-40">
          <button
            onClick={onToggle}
            className="w-full flex items-center justify-between gap-3 px-5 py-4 bg-[#00FF00] text-black font-bold text-sm tracking-wider rounded-xl shadow-lg shadow-[#00FF00]/20 active:scale-[0.98] transition-transform"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <ShoppingCart className="w-5 h-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#FF5A1F] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </div>
              <span>VIEW CART</span>
            </div>
            <span className="text-lg">${cartTotal}</span>
          </button>
        </div>
      )}

      {/* Cart overlay & sheet */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div 
            className="xl:hidden fixed inset-0 bg-black/60 z-40"
            onClick={onToggle}
          />
          
          {/* Sheet */}
          <div className="xl:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0a] rounded-t-2xl max-h-[85vh] flex flex-col animate-in slide-in-from-bottom duration-300">
            {/* Handle */}
            <div className="flex justify-center py-3">
              <div className="w-12 h-1 bg-white/20 rounded-full" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-5 pb-4 border-b border-[#1a1a1a]">
              <div>
                <h2 className="font-[var(--font-oswald)] text-xl font-bold text-white">
                  YOUR ORDER
                </h2>
                <p className="text-white/40 text-xs tracking-wider">
                  {cart.length === 0 ? "EMPTY" : `${cartItemCount} ITEM${cartItemCount > 1 ? "S" : ""}`}
                </p>
              </div>
              <button
                onClick={onToggle}
                className="p-2 text-white/60 hover:text-white transition-colors"
                aria-label="Close cart"
              >
                <ChevronUp className="w-6 h-6 rotate-180" />
              </button>
            </div>

            {/* Cart Items - Scrollable */}
            <div className="flex-1 overflow-y-auto px-5 py-4">
              {cart.length === 0 ? (
                <div className="py-12 text-center">
                  <ShoppingCart className="w-12 h-12 text-white/20 mx-auto mb-4" />
                  <p className="text-white/30 text-sm">Your cart is empty</p>
                  <p className="text-white/20 text-xs mt-2">Add some fire to your order</p>
                </div>
              ) : (
                <div className="space-y-3">
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
                            className="text-white/30 hover:text-white/60 transition-colors p-1"
                            aria-label="Remove item"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>

                        <p className="text-[#FF5A1F] text-sm font-semibold mt-1">
                          ${item.price * item.quantity}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3 mt-2">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center bg-[#2a2a2a] text-white/60 rounded-full hover:bg-[#333] hover:text-white transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="text-white text-sm font-medium w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center bg-[#2a2a2a] text-white/60 rounded-full hover:bg-[#333] hover:text-white transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer with checkout */}
            {cart.length > 0 && (
              <div className="border-t border-[#1a1a1a] p-5 space-y-4 bg-[#0a0a0a]">
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm">Subtotal</span>
                  <span className="text-white font-bold text-lg">${cartTotal}</span>
                </div>
                
                <button className="w-full py-4 bg-[#00FF00] text-black font-bold text-sm tracking-wider rounded-xl hover:bg-[#00cc00] active:scale-[0.98] transition-all">
                  CHECKOUT NOW
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </>
  )
}
