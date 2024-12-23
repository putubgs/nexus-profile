'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

const routes = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Prevent scrolling when the mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-white shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className={cn("text-2xl font-bold", isScrolled ? "text-blue-600" : "text-white")}>Nexus</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  isScrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white hover:text-blue-200",
                  pathname === route.href && (isScrolled ? "text-blue-600" : "text-blue-200")
                )}
              >
                {route.label}
              </Link>
            ))}
          </nav>
          <Button className={cn("hidden md:inline-flex", isScrolled ? "" : "bg-white text-blue-600 hover:bg-blue-50")} asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
          <button
            className={cn("md:hidden", isScrolled ? "text-gray-700" : "text-white")}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-start p-4">
          <button onClick={closeMenu}>
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <nav className="px-4 pt-4 pb-8 space-y-4">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "block py-2 text-base font-medium transition-colors",
                pathname === route.href
                  ? "text-blue-600"
                  : "text-gray-900 hover:text-blue-600"
              )}
              onClick={closeMenu}
            >
              {route.label}
            </Link>
          ))}
          <Button className="w-full mt-4" asChild>
            <Link href="/contact" onClick={closeMenu}>Get Started</Link>
          </Button>
        </nav>
      </div>
      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}
    </header>
  )
}

