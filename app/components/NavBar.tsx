"use client"

import { useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // Include "terminal" as an extra item
  const navItems = ["skills", "projects", "experience", "contact", "terminal"]

  return (
    <nav className="sticky top-0 z-50 bg-background/70 backdrop-blur-md border-b border-border shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tight hover:text-primary transition-colors">
          Ethan Cala
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center text-sm font-medium">
          {navItems.map((id) => (
            <Link
              key={id}
              href={id === "terminal" ? "/terminal" : `#${id}`}
              className="relative group transition-colors hover:text-primary"
            >
              <span>{id.charAt(0).toUpperCase() + id.slice(1)}</span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="transition-transform hover:rotate-12"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          {/* Mobile Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 space-y-2 text-sm font-medium animate-slide-down">
          {navItems.map((id) => (
            <Link
              key={id}
              href={id === "terminal" ? "/terminal" : `#${id}`}
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded hover:bg-accent transition-colors"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
