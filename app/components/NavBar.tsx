"use client"

import { useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Your Name
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="#skills" className="hover:text-primary">Skills</Link>
          <Link href="#projects" className="hover:text-primary">Projects</Link>
          <Link href="#blog" className="hover:text-primary">Blog</Link>
          <Link href="#contact" className="hover:text-primary">Contact</Link>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Menu
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background">
          <Link href="#skills" className="block px-4 py-2 hover:bg-accent">Skills</Link>
          <Link href="#projects" className="block px-4 py-2 hover:bg-accent">Projects</Link>
          <Link href="#blog" className="block px-4 py-2 hover:bg-accent">Blog</Link>
          <Link href="#contact" className="block px-4 py-2 hover:bg-accent">Contact</Link>
        </div>
      )}
    </nav>
  )
}