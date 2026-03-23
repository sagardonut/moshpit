"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart, Instagram, Facebook, Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const pathname = usePathname()
  const [cartCount] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/menu", label: "MENU" },
    { href: "/book", label: "BOOK" },
    { href: "/find", label: "FIND US" },
  ]

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true
    if (href !== "/" && pathname.startsWith(href)) return true
    return false
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm">
      <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-[#FF5A1F] font-bold text-xl tracking-tight font-[var(--font-oswald)]">
              MUNCH PIT
            </span>
          </Link>

          {/* Center Navigation - Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-1.5 text-xs font-semibold tracking-wider transition-all duration-200 rounded ${
                  isActive(link.href)
                    ? "bg-[#FF5A1F] text-white"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Social Icons */}
            <div className="hidden sm:flex items-center gap-3">
              <a 
                href="#" 
                className="text-white/60 hover:text-[#FF5A1F] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="text-white/60 hover:text-[#FF5A1F] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>

            {/* Cart */}
            <Link href="/menu" className="relative p-2 text-white/80 hover:text-white transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF5A1F] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Order Now Button - Desktop */}
            <Link
              href="/menu"
              className="hidden sm:inline-flex px-5 py-2.5 bg-[#00FF00] text-black text-xs font-bold tracking-wider rounded hover:bg-[#00cc00] transition-colors"
            >
              ORDER NOW
            </Link>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#1a1a1a] py-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-semibold tracking-wider transition-all duration-200 rounded ${
                    isActive(link.href)
                      ? "bg-[#FF5A1F] text-white"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/menu"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 px-4 py-3 bg-[#00FF00] text-black text-sm font-bold tracking-wider rounded text-center hover:bg-[#00cc00] transition-colors"
              >
                ORDER NOW
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
