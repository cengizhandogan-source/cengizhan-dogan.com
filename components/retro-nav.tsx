"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/publications", label: "Pubs" },
]

export function RetroNav() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-sm border-b-4 border-primary shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-primary text-lg tracking-wider">
            <Image
              src="/images/pixelcengo.png"
              alt="Cengizhan Dogan"
              width={32}
              height={32}
              className="border-2 border-primary"
            />
            <span className="font-[family-name:var(--font-pixel)] text-[10px]">Cengizhan Dogan</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-lg tracking-wider transition-all duration-200 border-2",
                  pathname === item.href
                    ? "bg-primary text-primary-foreground border-primary pixel-border-green"
                    : "text-foreground border-transparent hover:border-secondary hover:bg-secondary/10",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-primary p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 text-lg tracking-wider transition-all duration-200 border-2",
                  pathname === item.href
                    ? "bg-primary text-primary-foreground border-primary"
                    : "text-foreground border-muted hover:border-secondary hover:bg-muted",
                )}
              >
                ~ {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="h-6 bg-muted overflow-hidden border-t-2 border-primary/30">
        <div className="scroll-text whitespace-nowrap text-base text-muted-foreground leading-6 tracking-widest">
          ✦ Welcome to my portfolio ✦ Explore my projects and publications ✦ Thanks for visiting ✦ Happy coding! ✦
        </div>
      </div>
    </nav>
  )
}
